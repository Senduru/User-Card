import React, { useState } from 'react'
import './index.css';

function App() {
  const [user,Setuser]=useState({name:"User Name",
   des:"Junior Web Developer",
   add:"India Chennai",
   about:"Hi i am Full Stack Web Developer"
  })
  const [point,setpoint]=useState(true)
  const [image,setImageSrc]=useState('image/img2.jpeg');
  const audio = new Audio('Sound/btn.mp3');
  const audio1 = new Audio('Sound/upload.mp3');
  function changedata(e)
  {
    
    Setuser({...user,[e.target.name]:e.target.value})
    setpoint(false)
  }
  function handleFileChange(e){

  // const handleFileChange = (event) => {
    const file = event.target.files[0];
    
    if (file.type=='image/png') {
      const reader = new FileReader();

      reader.onload = (e) => {

        setImageSrc(e.target.result); // Set image source to file data
        audio1.play();
      };

      reader.readAsDataURL(file); // Read the file as a data URL
    } else {
      alert('Please select the Image as PNG Format....🙁',user.name);
    }
  };
  function message(){
    audio.play();
    if(point==false){
    alert(`Hi ${user.name} Thank you for visit my page..👍`);}
    else{
      alert(`Hi,Thank you for visit my page..👍`)
    }
  }
  return (
    <div className='app-container'>
      <div className='usercard'>
      <h1>{point?"Hi User":`Hi ${user.name}`}</h1>
          <img src={image}alt="image" />
          <h2>{user.name}</h2>
          <p><i>{user.des}</i></p>
          <p>{user.add}</p>
          <div className='about'>
            <p>{user.about}</p>
          </div>
          <div className='btn'>
            <button><a href="https://www.linkedin.com/in/senduru/">follow</a></button>
            <button className='share' onClick={message}>share</button>
          </div>
      </div>
      <div className='input-container'>
           <input type="text" placeholder='UserName' onChange={changedata} name='name'/>
           <input type="text" placeholder='Designation' name="des" onChange={changedata}/>
           <input type="text" name="add" placeholder='Address' onChange={changedata}/>
           <input type="textarea" name='about' placeholder='About' onChange={changedata}/>
           <input type="file" onChange={handleFileChange} accept="image/png" name="image"/>
           <p className='Footer'>Developed by <a href="https://www.linkedin.com/in/senduru/">@senduru</a></p>
      </div>
      
    </div>
    
  )
}

export default App
