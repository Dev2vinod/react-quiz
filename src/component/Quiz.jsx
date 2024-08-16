import React, { useState } from 'react';

import FormControl from '@mui/joy/FormControl';
import FormLabel from '@mui/joy/FormLabel';
import Radio from '@mui/joy/Radio';
import RadioGroup from '@mui/joy/RadioGroup';


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
        
        
    
        const[score,setScore] =useState(0)
        
        const nextQuestion =()=>{
            
            if(index<=question.length-1){


                            

         setValue(false)
                    
                setIndex(index+1)
            }else{


                console.log("quetion is end")
            }
                 

            }


            const [value, setValue] = React.useState('');
            const handleChange = (event) => {

                
                if(event.target.checked){
                    console.log("hello")

                    setScore(score + 1)
                        
                }
                setValue(event.target.checked);
                console.log("value",value)
                       };


            
  return (
    <>
   
    <div className='bg-purple-500 w-[50%] mx-auto my-4 p-4'>
        {index<=question.length-1 ? 
       <FormControl>
      <FormLabel>Question {index}  { question[index].question} </FormLabel>

      <RadioGroup
  
             name="controlled-radio-buttons-group"
            defaultValue={false}
            // value={value}
             onChange={handleChange}
                sx={{ my: 1,mx:3 }}
>
        <Radio value="option1" onChange={handleChange}  label={question[index].option1 } variant="outlined" color="success" sx={{backgroundColor:'green',hover:'blue'}}/>

        <Radio value="option2"  onChange={handleChange} label={question[index].option2 } variant="outlined" />

        <Radio value="option3" onChange={handleChange} label={question[index].option3 } variant="outlined" />

        <Radio value="option4"  onChange={handleChange} label={question[index].option4 } variant="outlined" />

        </RadioGroup>

    </FormControl>

       
          : <h1> quetion is end</h1>}
    </div>
    {/* {question[index].question} <br /> */}
 



    <button className='bg-pink-300 ml-[50%]'  onClick={nextQuestion} >Next</button>
       

     <div>
        {score}
     </div>

       

    </>
  )
}

export default Quiz