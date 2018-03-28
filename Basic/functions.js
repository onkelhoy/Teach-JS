function helloWorld (a) {
  console.log('hello ' + a)
}


// helloWorld('Henry')


function doSomething (callback) { // en function i en function 
  for (let i = 0; i < 10; i++) {
    callback(i, i*2)
  }
}
/*
doSomething(function (index) {
  console.log('current ' + index)
})
*/


/*
doSomething(index => {
  console.log(index)
})
*/