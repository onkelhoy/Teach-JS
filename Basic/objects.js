/*
let Person = {
  age: 1,
  name: '',

  create: function (age, name) {
    let o = new Object(this)
    o.age = age
    o.name = name

    return o
  }
}
*/




class Person {
  constructor (age, name) {
    this.age = age 
    this.name = name
  }

  birthDay () {
    this.age ++
    console.log('celebration!')
  }
}

class Student extends Person {
  constructor(age, name, studies) {
    super(age, name)
    this.studies = studies
  }

  study () {
    console.log('i dont want to..')
  }
}


let a = new Student(10, 'oskar', '...')

a.birthDay()



let gameStats = {
  level: 10,
  score: 1000
}

gameStats.level++

gameStats.levelName = 'hej'