const level1 = {
  levelNumber: 1,
  opponent: "HR",
  background: "./images/HR-background.jpg",
  character: "./images/HRCharacter.gif",
  opponentHP: 3,
  music: "../sounds/HavanaSong.mp3",
  noInput: `I'll need an answer down here in the exam`,
  opponentOpeningSentence:
    "Welcome to our offices, I'm from HR. You can see the questions on the computer below. TYPE JUST THE LETTER of your answer in the exam form",
  levelQuestions: [
    {
      id: 1,
      question: "Which CSS property controls the text size?",
      answer: "b",
      explaination: "The font-size property sets the size of a font",
      code: `
A. text-size
  
B. font-size
        
C. font-style
        
D. text-style

`
    },
    {
      id: 2,
      question:
        "How do you make each word in a text start with a capital letter?",
      answer: "c",
      explaination:
        "The text-transform property controls the capitalization of text",
      code: `
A. text-style:capitalize
    
B. transform:capitalize
          
C. text-transform:capitalize
          
D. You cant do that with CSS

`
    },
    {
      id: 3,
      question: "HTML is a an acronym for Hyper Text Makeup Language?",
      answer: "a",
      explaination: "Indeed html is a acronym for Hyper Text Makeup Language ",
      code: `
A. TRUE

B. FALSE

`
    },
    {
      id: 4,
      question:
        "Radio buttons should only allow the user to select one button at a time",
      answer: "a",
      explaination:
        "Radio buttons let a user select only one of a limited number of choices",
      code: `
A. TRUE

B. FALSE
 
`
    },
    {
      id: 5,
      question:
        "Which of the following of the correct structure to insert an image",
      answer: "b",
      explaination: 'To add a Img to an you need to use "<Img src=""/>" ',
      code: `
A. <Image source=""/>

B. <Img src=""/>
      
C. <Image=""/>
      
D. <Imgsrc=""/>

`
    },
    {
      id: 6,
      question: "What HTML tag creates a bulleted list",
      answer: "b",
      explaination: "The <ul> tag defines an unordered (bulleted) list.",
      code: `
A. <Form>
    
B. <ul>
      
C. <ol>
      
D. <li>

`
    },
    {
      id: 7,
      question: "<h6> is the largest Heading Tag",
      answer: "b",
      explaination: "H6 is the smallest Heading Tag",
      code: `
A. TRUE

B. FALSE

`
    },
    {
      id: 8,
      question: "The Tag is used To Give Heading To The Table",
      answer: "c",
      explaination:
        "Header cells - contains header information (created with the <th> element)",
      code: `
A. <Head>
      
B. <td>
    
C. <th>
      
D. <caption>

`
    },
    {
      id: 9,
      question:
        "Which of the following is the correct way to add background color in HTML? ",
      answer: "d",
      explaination:
        "The context of inline-css is <body style = “cssProperty: value;” (e.g “background-color: green;”)>",
      code: `
A. <body color = “green”>
      
B. <body bg-color = “green”>
      
C. <body style = “background-color=green”>
      
D. <body style = “background-color: green;”>

`
    },
    {
      id: 10,
      question:
        " Which of the following HTML Elements is used for making any text bold?",
      answer: "d",
      explaination:
        "The <b> tag specifies bold text without any extra importance",
      code: `
A. <p>
      
B. <i>
            
C. <bold>
            
D. <b>

`
    },
    {
      id: 11,
      question: "How many heading tags are there in HTML5?",
      answer: "a",
      explaination:
        "Radio buttons let a user select only one of a limited number of choices",
      code: `
A. 2
      
B. 1
                  
C. 3
                  
D. 5

`
    },
    {
      id: 12,
      question:
        "Which of the following attributes is used to add link to any element?",
      answer: "c",
      explaination:
        "The href attribute specifies the URL of the page the link goes to",
      code: `
A. link
      
B. ref
                        
C. href
                        
D. newref

`
    },
    {
      id: 13,
      question:
        "Which of the following is the correct way of creating an hyperlink in HTML?",
      answer: "c",
      explaination:
        "<a href= “Link”>LinkName</a> is the correct way of creating hyperlink in HTML",
      code: `
A. <a>www.codewar.com <codewar /a>
      
B. <a href=“www.codewar.com” codewar /a>
                        
C. <a href= “www.codewar.com”>codewar</a>
                        
D. <a link=“www.codewar.com” codewar></a>

`
    },
    {
      id: 14,
      question:
        "Which of the following tags is used to make a portion of text italic in HTML?",
      answer: "c",
      explaination:
        "The content of the <i> tag is displayed the text in italic.",
      code: `
A. <italic>
      
B. <style= “i”>
                              
C. <i>
                              
D. <style=“italic”>

`
    },
    {
      id: 15,
      question:
        "Which of the following elements can be used in HTML to create a table?",
      answer: "c",
      explaination: "<table> , <tbody> and <tr> are all table elements",
      code: `
A. <table> , <tbody> , <trow>
      
B. <table> , <tb> , <trow>
                                    
C. <table> , <tbody> , <tr>
                                    
D. All 

`
    },
    {
      id: 16,
      question: "What is the purpose of using div tags in HTML?",
      answer: "b",
      explaination:
        "The <div> tag defines a division or a section in an HTML document.",
      code: `
A. creating Different styles
      
B. creating different sections
                                    
C. adding headings
                                    
D. adding titles

`
    },
    {
      id: 17,
      question: "CSS is a an acronym for?",
      answer: "b",
      explaination: "CSS stand for Cascading Style Sheet ",
      code: `
A. Color style sheet
    
B. Cascading style sheet
                                    
C. Creative style sheet
                                    
D. Concatenated style sheet

`
    },
    {
      id: 18,
      question:
        "Where in HTML document is the conventionally correct place to put reference to an external style sheet?",
      answer: "a",
      explaination:
        "The reference to an external style sheet in the HTML <head> section ",
      code: `
A. In the HEAD section
      
B. In the BODY section
                                  
C. Both 
                                    
D. None

`
    },
    {
      id: 19,
      question:
        "Which CSS property is used to change the text color of an element?",
      answer: "b",
      explaination: "The 'color' property specifies the color of text",
      code: `
A. text-color
      
B. color
                                    
C. font-color
                                    
D. textColor
 
`
    },
    {
      id: 20,
      question:
        "The correct way to write a border with the properties: top:10px bottom:5px left:20px right:1px ",
      answer: "c",
      explaination: "The order of the properties are top-right-bottom-left",
      code: `
A. border-width: 10px 20px 5px 1px
      
B. border-width: 5px 20px 10px 1px
                                    
C. border-width: 10px 1px 5px 20px
                                    
D. border-width: 10px 5px 20px 1px

`
    },
    {
      id: 21,
      question: "How do you select an element with id 'demo'?",
      answer: "a",
      explaination: "The #id selector styles the element with the specified id",
      code: `
A. #demo
      
B.  demo
                                    
C. *demo
                                    
D. .demo
 
`
    },
    {
      id: 22,
      question: "How do you select elements with class name 'test'?",
      answer: "d",
      explaination:
        "The .class selector selects elements with a specific class attribute",
      code: `
A. *test
    
B.  test
                                    
C. #test
                                    
D. .test

`
    },
    {
      id: 23,
      question: "What is the default value of the position property?",
      answer: "c",
      explaination: "The default value of the position property is static",
      code: `
A. relative
      
B. fixed
                                    
C. static
                                    
D. absolute

`
    },
    {
      id: 24,
      question: "What is the correct HTML element for inserting a line break?",
      answer: "b",
      explaination: "The <br> tag inserts a single line break.",
      code: `
A. <lb>
      
B. <br>
                                    
C. <break>
                                    
D. <newline>
 
`
    },
    {
      id: 25,
      question:
        "Which HTML attribute specifies an alternate text for an image, if the image cannot be displayed?",
      answer: "a",
      explaination:
        "The alt attribute specifies an alternate text for an image, if the image cannot be displayed",
      code: `
A. alt
      
B. title
                                    
C. src
                                    
D. name
 
`
    },
    {
      id: 26,
      question: "What is the correct HTML element for playing video files?",
      answer: "b",
      explaination:
        "The <video> tag specifies video, such as a movie clip or other video streams",
      code: `
A. <media>
    
B. <video>
                                    
C. <movie>
                                
D. <play>
 
`
    }
  ]
};

export default level1;
