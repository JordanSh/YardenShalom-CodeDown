const level2 = {
  levelNumber: 2,
  opponent: "SENIOR",
  background: "./images/Senior-background.jpg",
  character: "./images/SeniorCharacter.gif",
  opponentHP: 4,
  music: "../sounds/ShapeOfYouSong.mp3",
  opponentOpeningSentence:
    "Well hello, I'm the senior around here, it's dead-line day so lets keep this quick. I'll show you some code, lets see what you got.",
  noInput: `You wanna tell me you don't know this one?`,
  levelQuestions: [
    {
      id: 1,
      question: "What will be the output of the console.log?",
      answer: "12,10,12",
      explaination: "",
      code: `
const x=10;
const y=x+1;
const z=++x;
console.log(x,y,z)
`
    },
    {
      id: 2,
      question: "What will be the output of the console.log?",
      answer: "hello Js",
      explaination: "",
      code: `
function xyz () {
var abc = "hello Js";
function abc () {
return 54;
}
return abc;
}
console.log(xyz())
`
    },
    {
      id: 3,
      question: "What do the following line output?",
      answer: "undefined",
      explaination:
        "The reason is that when the function is executed, it checks that there’s a local x variable present but doesn’t yet declare it, so it won’t look for global one",
      code: `
let x = 21;
var girl = function () {
console.log(x);
let x = 20;
};
girl ();

`
    },
    {
      id: 4,
      question: "What do the following line output?",
      answer: "false",
      explaination:
        "because of how the engine works regarding operator associativity for < and >. It compares left to right, so 3 > 2 > 1 JavaScript translates to true > 1. true has value 1, so it then compares 1 > 1, which is false",
      code: `
console.log(3 > 2 > 1);
`
    },
    {
      id: 5,
      question: "What will this output?",
      answer: "undefined",
      explaination:
        "Here, a[6] will output 'undefined', but the slot still remains empty rather than filled with undefined",
      code: `
const a = [1, 2, 3];
a[10] = 99;

console.log(a[6]);

`
    },
    {
      id: 6,
      question: "What will be the output when the following code is executed?",
      answer: "false",
      explaination:
        "The triple-equal operator '===' check if the two expressions on either of its sides have the same type and the same value",
      code: `
console.log(false === '0')
`
    },
    {
      id: 7,
      question: "What is the output out of the following code?",
      answer: "456",
      explaination:
        "When setting an object property, JavaScript will implicitly stringify the parameter value. In this case, since b and c are both objects, they will both be converted to '[object Object]'.  Therefore, setting or referencing a[c] is precisely the same as setting or referencing a[b]",
      code: `
const a={},
      b={key:'b'},
      c={key:'c'};
    
a[b]=123;
a[c]=456;
    
console.log(a[b]);
`
    },
    {
      id: 8,
      question: "What is the output out of the following code?",
      answer: "1",
      explaination:
        "since x is not defined in the inner function, the scope of the outer function is searched for a defined variable x, which is found to have a value of 1",
      code: `
(function(x) {
  return (function(y) {
    console.log(x);
  })(2)
})(1);
`
    },
    {
      id: 9,
      question: "What would following code return?",
      answer: "string",
      explaination:
        "typeof 1 will return 'number' and typeof 'number' will return string.",
      code: `
console.log(typeof typeof 1);
`
    },
    {
      id: 10,
      question: "What will the following code output?",
      answer: "3",
      explaination:
        "When a variable is invoked closures will be checked in order from local to global until an instance is found. Since the inner closure has a b variable of its own, that is what will be output",
      code: `
var b = 1;
function outer(){
  var b = 2
    function inner(){
      b++;
      var b = 3;
      console.log(b)
  }
  inner();
}
outer();
`
    },
    {
      id: 11,
      question: "What will be the output of the following code?",
      answer: "0",
      explaination:
        "Delete operator is used to delete a property from an object. Here x is not an object it's local variable. delete operator doesn't affect local variables",
      code: `
const output = (function(x) {
    delete x;
    return x;
})(0);
      
console.log(output);
`
    },
    {
      id: 12,
      question: "What will be the output of the following code?",
      answer: "undefined",
      explaination:
        "Delete operator is used to delete a property from an object.we are trying to reference deleted property foo which result 'undefined'",
      code: `
const x = { foo : 1};
const output = (function() {
  delete x.foo;
  return x.foo;
})();
      
console.log(output);
`
    },
    {
      id: 13,
      question: "What will be the output of the following code?",
      answer: "5",
      explaination:
        "When we used delete operator for deleting an array element then, the array length is not affected by this. This holds even if you deleted all elements of an array using delete operator",
      code: `
const fruits = ["banana", "orange", "melon", "grapes", "apple"];
delete fruits[3];
console.log(fruits.length);
`
    },
    {
      id: 14,
      question: "What would be the output of following code?",
      answer: "42",
      explaination:
        "Changing the first element of the arrB will also modify arrA: it's the same array in the memory",
      code: `
const arrA = [0,1,2,3,4,5];
const arrB = arrA;
arrB[0]=42;
console.log(arrA[0])
`
    },
    {
      id: 15,
      question: "What would be the output of following code?",
      answer: "b",
      explaination: "Var is hoisted as 'undified' ",
      code: `
console.log(employeeId);
var employeeId = '19000';

A. Some Value
  
B. undefined
        
C. Type Error
        
D. ReferenceError: employeeId is not defined


<p>"Just type the letter of the correct answer"</p> 
`
    },
    {
      id: 16,
      question: "What would be the output of following code?",
      answer: "undefined",
      explaination: "Var is hoisted as 'undified' ",
      code: `
function foo() {
    employeeId();
    var product = 'Car'; 
    return;
     function employeeId() {
      console.log(product);
   }
 }
  foo();
`
    },
    {
      id: 17,
      question: "What would be the output of following code?",
      answer: "11",
      explaination:
        " When we used delete operator for deleting an array element then, the array length is not affected by this. This holds even if you deleted all elements of an array using delete operator",
      code: `
(function () {
 const array = new Array('a', 'b', 'c', 'd', 'e');
 array[10] = 'f';
 delete array[10];
 console.log(array.length);
}());
`
    },
    {
      id: 18,
      question: "What would be the output of following code?",
      answer: "false",
      explaination:
        "Two objects are only equaled if they refer to the exact same object",
      code: `
(function() {
  var objA = {
   foo: 'foo',
   bar: 'bar'
  };
  var objB = {
   foo: 'foo',
   bar: 'bar'
  };
  console.log(objA === objB);
}());
`
    },
    {
      id: 19,
      question: "What would be the output of following code?",
      answer: "function",
      explaination:
        "When a variable is invoked closures will be checked in order from local to global until an instance is found",
      code: `
const employeeId = 'abc123';

function foo() {
  employeeId();
  return;
      
  function employeeId() {
    console.log(typeof employeeId);
  }
}
foo();
`
    },
    {
      id: 20,
      question: "What would be the output of following code?",
      answer: "abc123",
      explaination: "employeeId is global",
      code: `
let employeeId = 'abc123';

function foo() {
  employeeId = '123bcd';
  return;
  
  function employeeId() {}
}
foo();
console.log(employeeId);
`
    }
  ]
};

export default level2;
