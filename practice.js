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

// const student = {
// id: 101,
// name:'kibria',
// major: 'mathematics',
// money:5000,
// subject:['engkish','math','calculus'],
// bestFriend:{
//     name:'kundu',
//     major:'physics'
// },
// takeExam: function(){
//     console.log(this.name,'taking exam')

// },
// treatDey: function(expence){
//     this.money = this.money -expence;
//     return this.money

// }


// }

// student.takeExam();
// const total = student.treatDey(1000);
// console.log(total) ;




// const keys = Object.keys(bottle);
// const values = Object.values(bottle);
// const pairs = Object.entries(bottle);
// Object.seal(bottle)
// delete bottle.isCleaned;



// console.log(bottle);
// console.log(keys);

// console.log(values);
// console.log(pairs);


// const bottle = {

//     color:'yellow',
//     hold:'water',
//     price:50,
//     isCleaned:true
// }

const f ={a:1};
const e ={a:1};



if(JSON.stringify(f) == JSON.stringify(e)){
   console.log('yes') 
}else{
    console.log('no') 
}

function compareObject(obj1,obj2){

    if(Object.keys(obj1).length !== Object.keys(obj2).length){
        return false;
    }
    for (const prop in obj1){

        if(obh1[prop] !== obj2[prop]){

        }
    }

}