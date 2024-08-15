import React, { useState } from 'react'

const Quiz = () => {

      
let Question = [
    {
        question: 'What does HTML stand for?',
        option1: 'Hyperlinks and Text Markup Language',
        option2: 'Hypertext Markup Language',
        option3: 'Home Tool Markup Language',
        correctOption: "Hypertext Markup Language"
    },
    {
        question: 'Who is making the Web standards?',
        option1: 'Google',
        option2: 'The World Wide Web Consortium',
        option3: 'Microsoft',
        correctOption: "The World Wide Web Consortium"
    },
    {
        question: 'Choose the correct HTML element for the largest heading:',
        option1: '<heading>',
        option2: '<h6>',
        option3: '<h1>',
        correctOption: "<h1>"
    },
    {
        question: 'What is the correct HTML element for inserting a line break?',
        option1: '<linebreak>',
        option2: '<br>',
        option3: '<break>',
        correctOption: "<br>"
    },
    {
        question: 'What is the correct HTML for adding a background color?',
        option1: '<body bg="yellow">',
        option2: '<background>yellow</background>',
        option3: '<body style="background-color:yellow;">',
        correctOption: '<body style="background-color:yellow;">'
    },
    {
        question: 'Choose the correct HTML element to define important text:',
        option1: '<strong>',
        option2: '<b>',
        option3: '<i>',
        correctOption: '<strong>'
    },
    {
        question: 'Choose the correct HTML element to define emphasized text:',
        option1: '<italic>',
        option2: '<i>',
        option3: '<em>',
        correctOption: "<em>"
    },
    {
        question: 'What is the correct HTML for creating a hyperlink?',
        option1: '<a>http://www.w3schools.com</a>',
        option2: '<a href="http://www.w3schools.com">W3Schools</a>',
        option3: '<a url="http://www.w3schools.com">W3Schools.com</a>',
        correctOption: '<a href="http://www.w3schools.com">W3Schools</a>'
    },
    {
        question: 'Which character is used to indicate an end tag?',
        option1: '*',
        option2: '/',
        option3: '<',
        correctOption: "/"
    },
    {
        question: 'How can you open a link in a new tab/browser window?',
        option1: '<a href="url" target="new">',
        option2: '<a href="url" new>',
        option3: '<a href="url" target="_blank">',
        correctOption: '<a href="url" target="_blank">'
    },
    {
        question: 'Which of these elements are all <table> elements?',
        option1: '<table> <tr> <td>',
        option2: '<table> <head> <tfoot>',
        option3: '<table> <tr> <tt>',
        correctOption: "<table> <tr> <td>"
    },
    {
        question: 'Inline elements are normally displayed without starting a new line.',
        option1: 'True',
        option2: 'False',
        correctOption: "True"
    },
    {
        question: "How can you make a numbered list?",
        option1: '<dl>',
        option2: '<ul>',
        option3: '<ol>',
        option4: '<list>',
        correctOption: "<ol>"
    },
    {
        question: 'How can you make a bulleted list?',
        option1: '<ol>',
        option2: '<list>',
        option3: '<ul>',
        option4: '<dl>',
        correctOption: "<ul>"
    }
        ]


        const[question,setQuestion] =useState(Question);
       
        const[index,setIndex] =useState(0)
        
        
    
        
        const nextQuestion =()=>{
            
                if(question){
                    console.log("quetion is end -->",question[14].question)
                    
                }else{
                    console.log("question[index]",question.length,index,"mee if ke andar hu")
                }
            setIndex(index+1)

            }


            const[fname,setFname]=useState("")
            const[email,setEmail]=useState("")
            const[password,setPassword]=useState("")

            const addall =()=>{

                const info ={
                    fname,
                    email,
                    password
                }
                console.log("info",info)

            }
  return (
    <>


    <div>


        {/* <div  className='flex flex-col items-start justify-center bg-pink-500
     w-[50%] p-2 mx-auto mt-[10%]'>   

         <div className='m-2'>
          Question :  { index} :

             {question[index].question} 
         </div>
        
         <div>
           <input type="radio" value={option1} name='kya' />
             {question[index].option1} 


             </div>
         <div>
           <input type="radio" value={option2} name='kya'/>
             {question[index].option2} 


             </div>
         <div>
           <input type="radio"  value={option3} name='kya'/>
             {question[index].option3} 


             </div>
         <div>
           <input type="radio"  value={option4} name='kya'/>
             {question[index].option4} 


             </div>
       

        <button onClick={()=>question.length && nextQuestion()} className='bg-blue-700 px-6 mx-auto mt-2' >Next</button>
    </div>  */}
             <button onClick={()=> nextQuestion()} className='bg-blue-700 px-6 mx-auto mt-2' >Next</button>
    hello
    </div>


   <div className='flex flex-col gap-3'>

    <div>
        name <input type="text"  placeholder='name' value={fname} onChange={(e)=>setFname(e.target.value)} />
    </div>
    <div>
        email <input type="email" value={email}   onChange={(e)=>setEmail(e.target.value)}/>
    </div>
    <div>
        password <input type="password" value={password}  onChange={(e)=>setPassword(e.target.value)}/>
    </div>

    <button className='bg-blue-600' onClick={addall}>sumbit</button>

   </div>

     

    </>
  )
}

export default Quiz