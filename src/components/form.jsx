import React, { useState, useEffect } from "react";
import '../CSS/todoo.css'
import { db } from '../firebase'; 
import DatePickers from "../date";
import { Grid } from "@material-ui/core";





const Form = () => {
    const [name, setName] = useState("");
    const [phone, setPhone] = useState("");
    const [date, setdate] = useState("");
    const [interested,setInterested] = useState("");
    const [gender,setGender] = useState("");
    const [age,setAge] = useState("");
    const [description,setDescription] = useState("");
    const [loader, setLoader] = useState(false);
  
    const handleSubmit = (e) => {
      e.preventDefault();
      setLoader(true);
  
      db.collection("Appointment")
        .add({
          name: name,
          phone: phone,
          date: date,
          interested: interested,
          gender: gender,
          age: age,
          description: description,
        })
        .then(() => {
          setLoader(false);
          alert("Your Appointment has been made");
        })
        .catch((error) => {
          alert(error.message);
          setLoader(false);
        });
  
      setName("");
      setPhone("");
      setdate("");
      setInterested("");
      setGender("");
      setDescription("");
      setAge("");
    };

  
    return (
      
      <form className="form" onSubmit={handleSubmit}>
        <h1>Have a Question? Chat with professional</h1>
        <h2>Don't put up with pain ! Make an appointment</h2>

        
        <Grid
        container
        direction="row"
        justifyContent="space-evenly"
        alignItems="center"
        >
        <Grid item xs={6}>
          
        <input style={{ marginTop:'20px',  width: '250px' , height:'40px' , borderRadius: '5px', paddingLeft:'5px', border:'none'}}
          placeholder="Your name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        </Grid>

        <Grid item xs={6}>   
         <input style={{ marginTop:'20px',  width: '250px' , height:'40px' , borderRadius: '5px' , color:'grey',paddingLeft:'5px', border:'none'}}
          placeholder="Age"
          value={age}
          onChange={(e) => setAge(e.target.value)}
          
        />
        </Grid>

        <Grid item xs={6}>
        <select style={{ marginTop:'20px',  width: '250px' , height:'40px' , borderRadius: '5px' , color:'grey',paddingLeft:'5px', border:'none'}}
        onChange={(e)=> setGender(e.target.value)} defaultValue="Gender">
            <option defaultValue>Gender</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Other">Other</option>        
        </select><br />
        </Grid>

        <Grid item xs={6}>
        <select style={{ marginTop:'20px',  width: '250px' , height:'40px' , borderRadius: '5px', color:'grey',paddingLeft:'5px',border:'none'}}
         onChange={(e)=> setInterested(e.target.value)} defaultValue="Intersted in">
            <option defaultValue>How can we help ?</option>
            <option value="Ankle Pain">Ankle Pain</option>
            <option value="Foot Pain">Foot Pain</option>
            <option value="Elbow Pain">Elbow Pain</option>
            <option value="Hand Pain">Hand Pain</option>
            <option value="Hip Pain">Hip Pain</option>
            <option value="Knee Pain">Knee Pain</option>
                
         </select><br />

         
        </Grid>

        <Grid item xs={6}>
        <input style={{ marginTop:'20px',  width: '250px' , height:'40px' , borderRadius: '5px',paddingLeft:'5px',border:'none'}}
          placeholder="Your Phone"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />
        </Grid>

        < br/>

         <Grid item xs={6}>
             <DatePickers/>
         </Grid>

         <Grid item xs={6}>
         <textarea style={{ width:'230px' , alignContent:'center', marginTop:'20px',textAlign:'center', border:'none',borderRadius:'5px'}}
          placeholder="Problem Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        ></textarea>
         </Grid>
         

        </Grid>

        

        <button
          type="submit"
          style={{ background: '#5ca9fb', alignItems:'center', marginLeft:'270px' }}
        >
          Submit
        </button>

      </form>
    );
  };
  
  export default Form;