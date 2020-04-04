//es6 三种异步方案对比

/**
 * promise
 * 优点：解决了回调地狱
 * 缺点：
 * 1.无法取消Promise，一旦新建它就会立即执行，无法中途取消。
 * 2.如果不设置回调函数，Promise内部抛出的错误，不会反应到外部。
 * 3.当处于pending状态时，无法得知目前进展到哪一个阶段（刚刚开始还是即将完成）
 *
 *
 * promise方法体内的代码为同步，then()里的代码异步
 * */
function promiseDemo() {
  return new Promise((resolve, reject)=>{
    setTimeout(()=>{
      resolve('123')
    },1000)
  })

}


promiseDemo().then((res)=>{
  console.log(res)
  return res
}).then((res)=>{
  console.log(res)
})

/**
 * Generator
 * Generator 函数的暂停执行的效果，意味着可以把异步操作写在yield表达式里面，等到调用next方法时再往后执行。
 * 这实际上等同于不需要写回调函数了，因为异步操作的后续操作可以放在yield表达式下面，反正要等到调用next方法时再执行。
 * 所以，Generator 函数的一个重要实际意义就是用来处理异步操作，改写回调函数。
 * 可以直接用try catch 做错误处理
 * 可以暂停函数执行
 * yield命令后面只能是 Thunk 函数或 Promise 对象
 * 返回值为 Iterator 迭代器
 * */

function* main() {
  const result = yield request("http://some.url");
  const resp = JSON.parse(result);
  console.log(resp.value);
}

function request(url) {

}

const it = main();
it.next();

/**
 * async/await
 * async 是 Generator 函数的语法糖
 * 返回值为promise
 * 优点：
 * （1）内置执行器。
 * Generator 函数的执行必须靠执行器，所以才有了co模块，而async函数自带执行器。也就是说，async函数的执行，与普通函数一模一样，只要一行。
 * （2）更好的语义。
 * async和await，比起星号和yield，语义更清楚了。async表示函数里有异步操作，await表示紧跟在后面的表达式需要等待结果。
 * （3）更广的适用性。
 * co模块约定，yield命令后面只能是 Thunk 函数或 Promise 对象，
 * 而async函数的await命令后面，可以是 Promise 对象和原始类型的值（数值、字符串和布尔值，但这时会自动转成立即 resolved 的 Promise 对象）。
 * （4）返回值是 Promise。
 * async函数的返回值是 Promise 对象，这比 Generator 函数的返回值是 Iterator 对象方便多了。你可以用then方法指定下一步的操作。
 * 进一步说，async函数完全可以看作多个异步操作，包装成的一个 Promise 对象，而await命令就是内部then命令的语法糖。
 * */
async function getStockPriceByName(name) {
  const symbol = await getStockSymbol(name);
  const stockPrice = await getStockPrice(symbol);
  return stockPrice;
}

getStockPriceByName('goog').then(function (result) {
  console.log(result);
});
