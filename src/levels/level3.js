const level3 = {
  levelNumber: 3,
  opponent: "CEO",
  background: "./images/CEO-background.jpg",
  character: "./images/CEOCharacter.gif",
  opponentHP: 5,
  music: "../sounds/AmIWrongSong.mp3",
  opponentOpeningSentence:
    "I've heard a lot about you, I'm the CEO of this company. If you can impress me you're in! ITS TIME FOR A SHOWDOWN!",
  noInput: `Do not waste my time, Kid.`,
  levelQuestions: [
    {
      id: 1,
      question:
        "What is the result of the below JavaScript code when the functions get called in the order as mentioned?",
      answer: "3",
      explaination: "",
      code: `
function first() {
    window.a = 3;
}
        
function second() {
    alert(a);
}
  `
    },
    {
      id: 2,
      question: "What does the alert display?",
      answer: "undefined",
      explaination: "",
      code: `
function foo() {
    return
    {
        test: 1
    }
}
    
alert(typeof foo());
  `
    },
    {
      id: 3,
      question: "What is the result?",
      answer: "false",
      explaination: "",
      code: `
(true + false) > 2 + true;
  `
    },
    {
      id: 4,
      question: "What does the alert display?",
      answer: "function",
      explaination: "",
      code: `
function bar() {
    return foo;
    foo = 10;
    function foo() {}
    var foo = '11';
}
    alert(typeof bar());
  `
    },
    {
      id: 5,
      question: "What is the result?",
      answer: "2",
      explaination: "",
      code: `
"1" - - "1";
  `
    },
    {
      id: 6,
      question: "What is the alerted value?",
      answer: "3",
      explaination: "",
      code: `
var x = 3;

var foo = {
        x: 2,
        baz: {
            x: 1,
            bar: function() {
            return this.x;
        }
    }
}
      
var go = foo.baz.bar;
      
alert(go());
  `
    },
    {
      id: 7,
      question: "What is the result?",
      answer: "true",
      explaination: "",
      code: `
new String("This is a string") instanceof String;
  `
    },
    {
      id: 8,
      question: "What is the result?",
      answer: "f,o,o",
      explaination: "",
      code: `
[] + [] + 'foo'.split('');
  `
    },
    {
      id: 9,
      question: "What is the result?",
      answer: ",,,,,",
      explaination: "",
      code: `
new Array(5).toString();
  `
    },
    {
      id: 10,
      question: "What is printed on the console?",
      answer: "undefined",
      explaination: "",
      code: `
var x = 0;
function foo() {
    x++;
    this.x = x;
    return foo;
}
var bar = new new foo;
console.log(bar.x);
  `
    },
    {
      id: 11,
      question: "What is the result?",
      answer: "false",
      explaination: "",
      code: `
"This is a string" instanceof String;
  `
    },
    {
      id: 12,
      question: "What is the result?",
      answer: "nan",
      explaination: "",
      code: `
var bar = 1,
foo = {};
  
foo: {
      bar: 2;
      baz: ++bar;
  };
  foo.baz + foo.bar + bar;
  `
    },
    {
      id: 13,
      question: "What is the result of console.log?",
      answer: "true",
      explaination: "",
      code: `
var myArr = ['foo', 'bar', 'baz'];
myArr[2];
console.log('2' in myArr);
  `
    },
    {
      id: 14,
      question: "What is the alerted value?",
      answer: "2",
      explaination: "",
      code: `
var arr = [];
arr[0]  = 'a';
arr[1]  = 'b';
arr.foo = 'c';
alert(arr.length);
  `
    },
    {
      id: 15,
      question: "What value is alerted?",
      answer: "undefined",
      explaination: "",
      code: `
function foo(a, b) {
    arguments[1] = 2;
    alert(b);
}

foo(1);
  `
    },
    {
      id: 16,
      question: "What is the result?",
      answer: "false",
      explaination: "",
      code: `
NaN === NaN;
  `
    },
    {
      id: 17,
      question: "How does Java Script store dates in objects of Date type?",
      answer: "c",
      explaination: "",
      code: `
A. The number of days since January 1st, 1900

B. The number of seconds since January 1st, 1970

C. The number of milliseconds since January 1st, 1970

D. The number of picoseconds since January 1st, 1970
  `
    },
    {
      id: 18,
      question: "Javascript is an object oriented language?",
      answer: "b",
      explaination: "",
      code: `
A. False

B. TRUE
  `
    },
    {
      id: 19,
      question: "DOM stands for?",
      answer: "c",
      explaination: "",
      code: `
A. Document object model

B. Data object model

C. Document Oriented model

D. Data oriented model

`
    }
  ]
};

export default level3;
