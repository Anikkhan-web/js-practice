// const student = {
//     name:'sakib al hasan',
//     job:'cricketer'
// }
// const  person = new Object();
// console.log(person);
// const human = Object.create(student);
// console.log(human);

// class People {

// constructor(name,age){
//     this.name = name;
//     this.age= age;

// }


// }

// const peop = new People('manus',12)
// console.log(peop);


// function Manus(name){

//     this.name = name;

// }
// const man = new Manus('hey');
// console.log(man);

const student = {
id: 101,
name:'kibria',
major: 'mathematics',
money:5000,
subject:['engkish','math','calculus'],
bestFriend:{
    name:'kundu',
    major:'physics'
},
takeExam: function(){
    console.log(this.name,'taking exam')

},
treatDey: function(expence){
    this.money = this.money -expence;
    return this.money

}


}

student.takeExam();
const total = student.treatDey(1000);
console.log(total) ;