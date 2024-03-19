//import react and useState hook 
import React, {useState} from 'react';
import './App.css'
import PropsPage from './props.tsx'
//functional component




//define the app functional component 
function App() {

  //use the usestate hook to create a variable 'count' intialised to '0' and a function 'setCount'
  const [count,setCount] = useState(0);

  //use the useState hook to create a variable 'name ' initialised to an empty string and a function 'setName'
const [name,setName] = useState('');

//use the useState hook  to craate a variable 'submitted name '  to an empty string and a function setSubmittedname 

const [submittedName,setSubmittedName] = useState('');
//function to intialise increament or decrement
  const increment = () =>{
    setCount(count + 1 );
  };
   
  const decrement = () =>{
    setCount(count - 1);
  }
  //function to intialise form submission 
  const handleChange = (event:React.ChangeEvent<HTMLInputElement>) =>{
    setName(event.target.value)
  };
  
  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
 //update the submitted name state 
    setSubmittedName(name);
    // Alert the submitted name 
    alert('A name was submitted: ' + name )
    //prevent the default form sumission behavior 
    event.preventDefault();
  };
  const itemStyle = {
    color: 'brown',
    fontSize: '1.2rem',

  
  };
  //use of sample text to demonstrate styling  
  return(
    <>
    
     <div>
      <p>Count: {count}</p>
      <button onClick={increment}></button>
      <button onClick={decrement}></button>
     </div>
     <form onSubmit={handleSubmit}>
      <label>
      Name : 
      <input type = 'text'  value = {name} onChange={handleChange} />
      </label>
      <input type='submit' value = "submit"/>
     </form>
     {submittedName && <p>SubmittedName: </p>}
     
     <div className="textstyle">
      <h5>name:</h5>
      <p>victor Kinyanjui</p>
      <h2>name:</h2>
      <p>victor Kinyanjui</p>
      <h3>name:</h3>
      <p>victor Kinyanjui</p>
      <h3>name:</h3>
      <p>victor Kinyanjui</p>
     </div>
<div style ={itemStyle}>
  
 <p1>n this corrected code, the itemStyle object is defined inside the App component and used as a 
  variable in the JSX for inline styling. This ensures that the inline styling is applied correctly.</p1>
</div>

    </>
  )
}

export default App
