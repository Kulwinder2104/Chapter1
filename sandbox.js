// for loops
for(let i = 0; i < 5; i++){
    console.log('in loop:', i);
}

console.log('loop finished');

const names = ['shaun', 'mario', "lugie"];

// when you dont know hoe many numbers are there

for(let i = 0; i < names.length; i++){
    //console.log(i);
   // console.log(names[i]);
   let html = `<div>${names[i]}</div>`;
   console.log(html);


}

//While Loop
// in while loop i must exist somewhere already

let i = 0;

while( i < 5){
    console.log('in loop:', i);
    i++;
}

const names1 = ['shaun', 'mario', "lugie"];

let j = 0;
while(j < names.length){
    console.log(names[j]);
    j++;
}

// do while loop
//tention of while loop
// this will run even if the condition is not true

let ii = 5;

do{
    console.log('cal of i is :', ii);
    ii++;
}while( i < 5)

// if statement
const age = 25;

if(age > 20){
  console.log('you are over 20 years old');

}

// use of user is loged in to check other factors such as password
const ninjas = ['shaun', 'mario', 'ryu', 'yoshi'];

if(ninjas.length > 3){
    console.log("that's a alot of ninjas")
}

const password = 'p@ssword';
if(password.length >= 8){
    console.log('that password is long enough!');
}

//else if

const password1 = 'p@ssword1234';
if(password1.length >= 12 && password.includes('@')){
    console.log('that password is might strong');
}
else if(password1.length >= 8 || password.includes('@') && password.length > 5){
    console.log('that password is long enough!');
}else{
    console.log('password is not long enough');
}

let user1 = false;


// to sitch boolean value !
let user = false;

  if(!user){
    console.log('you must be logged to continue');
  }

console.log(!true);
console.log(!false);


const scores = [50, 25, 0, 30, 100, 20, 10];

for(let i = 0; i < scores.length; i++){

    if (scores[i] === 0){
        continue;
    }
    console.log('your score: ', scores[i]);

    if (scores[i] === 100) {
        console.log('congrats, you got the top score!');
        break;
    }
}


// const grade = 'D';

// // using if statememnt
// if(grade === 'A'){

//     switch(grade){}
// }else if(grade === 'B'){

// }else if(grade === 'C'){
    
// }else if(grade === 'D'){
    
// }else if(grade === 'E'){
    
// }else {

// }
const grade = 'C';

switch(grade){
    case 'A':
    console.log('you got an A!');
    break;
    case 'B':
    console.log('you got an B!');
    break;
    case 'C':
    console.log('you got an C!');
    break;
    case 'D':
    console.log('you got an D!');
    break;
    case 'E':
    console.log('you got an E!');
    break;

    default:
    console.log('NOT A VALID!');
}


// variables & block scopes

let age2 = 30;

//age2 = 50;
// we add something inside the code block then it can only apply to inside code
if(true){
    let age2 = 40;
    let name = 'john';
    console.log('inside code block:', age2, name);

    if(true){
        let age2 = 50;
        console.log('inside 2nd code clock:', age2)
    }
}

console.log('outside code block:', age2, name);
