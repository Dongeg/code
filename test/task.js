
// 1h
console.log('golb1');


setTimeout(function() {
  // 2h
  console.log('timeout1');
  process.nextTick(function() {
    // 2w
    console.log('timeout1_nextTick');
  })
  new Promise(function(resolve) {
    // 2h
    console.log('timeout1_promise');
    resolve();
  }).then(function() {
    // 2w
    console.log('timeout1_then')
  })
})

setImmediate(function() {
  // 2h
  console.log('immediate1');
  process.nextTick(function() {
    // 2w
    console.log('immediate1_nextTick');
  })
  new Promise(function(resolve) {
    // 2h
    console.log('immediate1_promise');
    resolve();
  }).then(function() {
    // 2w
    console.log('immediate1_then')
  })
})


process.nextTick(function() {
  // 1w
  console.log('glob1_nextTick');
})
new Promise(function(resolve) {
  // 1h
  console.log('glob1_promise');
  resolve();
}).then(function() {
  // 1w
  console.log('glob1_then')
})

setTimeout(function() {
  // 2h
  console.log('timeout2');
  process.nextTick(function() {
    // 2w
    console.log('timeout2_nextTick');
  })
  new Promise(function(resolve) {
    // 2h
    console.log('timeout2_promise');
    resolve();
  }).then(function() {
    // 2w
    console.log('timeout2_then')
  })
})

process.nextTick(function() {
  // 1w
  console.log('glob2_nextTick');
})
new Promise(function(resolve) {
  // 1h
  console.log('glob2_promise');
  resolve();
}).then(function() {
  // 1w
  console.log('glob2_then')
})

setImmediate(function() {
  // 2h
  console.log('immediate2');
  process.nextTick(function() {
    // 2w
    console.log('immediate2_nextTick');
  })
  new Promise(function(resolve) {
    // 2h
    console.log('immediate2_promise');
    resolve();
  }).then(function() {
    // 2w
    console.log('immediate2_then')
  })
})

/**
 *

 E:\test\code\test>node task.js
 golb1
 glob1_promise
 glob2_promise
 glob1_nextTick
 glob2_nextTick
 glob1_then
 glob2_then
 timeout1
 timeout1_promise
 timeout1_nextTick
 timeout1_then
 timeout2
 timeout2_promise
 timeout2_nextTick
 timeout2_then
 immediate1
 immediate1_promise
 immediate1_nextTick
 immediate1_then
 immediate2
 immediate2_promise
 immediate2_nextTick
 immediate2_then

 E:\test\code\test>node -v
 v12.9.1

 * */
