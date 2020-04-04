# code
一些j常见的方法实现和设计模式

## js 异步原理 / 事件循环机制

js中代码执行顺序靠任务队列来管理

一个线程中，事件循环是唯一的，但是任务队列可以拥有多个。

任务队列分为：

宏任务（macro-task）：script(整体代码), setTimeout, setInterval, setImmediate, I/O, UI rendering。

微任务（micro-task）： process.nextTick, Promise,

setTimeout/Promise等我们称之为任务源。而进入任务队列的是他们指定的具体执行任务

来自不同任务源的任务会进入到不同的任务队列。其中setTimeout与setInterval是同源的。

具体规则如下：

事件队列循环执行

每次循环中，先执行宏任务，再执行微任务

宏任务/微任务执行过程中遇到同步代码直接执行不加入任务队列

遇到任务源将任务分发到对应的任务队列中，下次循环时再执行

```js
// 1宏.开始第一次循环，先顺寻执行，遇到setTimeout ,为宏任务源，将内部代码放宏任务对列，下次循环时执行
// 2宏.开始第二次循环,宏任务只有setTimeout这一个，执行打印
setTimeout(function() {
    console.log('timeout1');
})

new Promise(function(resolve) {
    // 1宏.同步代码直接执行
    console.log('promise1');
    for(var i = 0; i < 1000; i++) {
        i == 99 && resolve();
    }
    // 1宏.同步代码直接执行
    console.log('promise2');
})
// 1宏.微任务源，加入微任务队列，本次宏任务执行结束执行
// 1微.本次宏任务执行结束后只有这一个微任务，执行打印
.then(function() {
    console.log('then1');
})
// 1宏.同步代码直接执行
console.log('global1');

/**
 * 执行结果
 * promise1
 * promise2
 * global1
 * then1
 * timeout1
*/ 

```
