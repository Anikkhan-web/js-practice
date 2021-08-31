const student = {
    name:'sakib al hasan',
    job:'cricketer'
}
const  person = new Object();
console.log(person);
const human = Object.create(student);
console.log(human);

class People {

constructor(name,age){
    this.name = name;
    this.age= age;

}


}

const peop = new People('manus',12)
console.log(peop);


function Manus(name){

    this.name = name;

}
const man = new Manus('hey');
console.log(man);