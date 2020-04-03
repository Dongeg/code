/**
 * 工厂模式
 * https://www.runoob.com/design-pattern/factory-pattern.html
 * 意图：定义一个创建对象的接口，让其子类自己决定实例化哪一个工厂类，工厂模式使其创建过程延迟到子类进行。
 * 主要解决：主要解决接口选择的问题。
 * 何时使用：我们明确地计划不同条件下创建不同实例时。
 * 如何解决：让其子类实现工厂接口，返回的也是一个抽象的产品。
 * 关键代码：创建过程在其子类执行。
 * 应用实例：
 * 1、您需要一辆汽车，可以直接从工厂里面提货，而不用去管这辆汽车是怎么做出来的，以及这个汽车里面的具体实现。
 * 2、Hibernate 换数据库只需换方言和驱动就可以。
 * 优点：
 * 1、一个调用者想创建一个对象，只要知道其名称就可以了。
 * 2、扩展性高，如果想增加一个产品，只要扩展一个工厂类就可以。 3、屏蔽产品的具体实现，调用者只关心产品的接口。
 * 缺点：
 * 每次增加一个产品时，都需要增加一个具体类和对象实现工厂，使得系统中类的个数成倍增加，
 * 在一定程度上增加了系统的复杂度，同时也增加了系统具体类的依赖。这并不是什么好事。
 *
 * 应用实例：react 中的createElement
 * */
class PersonFactory {
  constructor(name,gender,age){
    this.name = name
    this.gender = gender
    this.age = age
  }
  say(){
    console.log(`hi, my name is ${this.name}`)
  }
  work(){
    console.log('work')
  }
}

class Person {
  create(name,gender,age){
    return new PersonFactory(name,gender,age)
  }
}

const person = new Person()
const zhang = person.create('zhangsan','boy',20)
zhang.say()



