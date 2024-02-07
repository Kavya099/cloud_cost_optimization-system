import React, { useState } from 'react'
import './domain.css'

export default function Education() {

  const [eduFormData, setEduFormData] = useState({
    qn1: [],
    qn2: [],
    qn3: '',
    qn4: '',
    qn5: '',
    qn6: '',
    qn7: '',
    qn8: [],
    qn9: '',
    qn10: '',
    qn11: '',
  });

  const handleCheckboxChange = (event, question) => {
    const value = event.target.value;
    const updatededuFormData = { ...eduFormData, [question]: [...eduFormData[question], value] };
    setEduFormData(updatededuFormData);
  };

  const handleRadioChange = (event, question) => {
    const value = event.target.value;
    setEduFormData({ ...eduFormData, [question]: value });
  };

const handleSubmit = async (e) => {
e.preventDefault();

try {
  console.log('Form Data:', eduFormData);
  const response = await fetch('http://localhost:8000/api/educ/submitEduForm', { // Update the URL
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(eduFormData),
  });

  const data = await response.json();
  console.log(data);
} catch (error) {
  console.error(error);
}
};

  

  return (
    <div className="fm">
        <form onSubmit={handleSubmit}>
            <center><h1 className="title">Education</h1></center>
            <div className="qns">
            <center><h1>Fill the following</h1></center>
                <label><b>1. What educational area are you interested in?</b><br/>
                <input type="checkbox" name="qn1" value="K-12 education" onChange={(e) => handleCheckboxChange(e, 'qn1')}  /> K-12 education <br />
                <input type="checkbox" name="qn1" value="Higher education"  onChange={(e) => handleCheckboxChange(e, 'qn1')} /> Higher education <br />
                <input type="checkbox" name="qn1" value="Professional training"  onChange={(e) => handleCheckboxChange(e, 'qn1')} /> Professional training <br />
                <input type="checkbox" name="qn1" value="Not sure"  onChange={(e) => handleCheckboxChange(e, 'qn1')}  /> Not sure <br />
                </label>
                <label><b>2. What tasks or activities do you want to accomplish using cloud services? </b><br/>
                <input type="checkbox" name="qn2" value="Online learning platforms"  
                onChange={(e) => handleCheckboxChange(e, 'qn2')}  /> Online learning platforms <br />
                <input type="checkbox" name="qn2" value="Student analytics and performance tracking"  
                onChange={(e) => handleCheckboxChange(e, 'qn2')}  /> Student analytics and performance tracking <br />
                <input type="checkbox" name="qn2" value="Virtual Classrooms and Video Conferencing "  
                onChange={(e) => handleCheckboxChange(e, 'qn2')} /> Virtual Classrooms and Video Conferencing <br />
                <input type="checkbox" name="qn2" value="Hosting website" 
                onChange={(e) => handleCheckboxChange(e, 'qn2')}  /> Hosting website <br />
                <input type="checkbox" name="qn2" value="Mobile learning apps"  
                onChange={(e) => handleCheckboxChange(e, 'qn2')} /> Mobile learning apps <br />
                </label>
                <label><b>3. Do you require a cloud solution for online testing and examination management?</b><br/>
                <input type="radio" name="qn3" value="Yes" onChange={(e) => handleRadioChange(e, 'qn3')} /> Yes <br />
                <input type="radio" name="qn3" value="No" onChange={(e) => handleRadioChange(e, 'qn3')} /> No <br />
                </label>
                <label><b>4. Would you like to implement a virtual library system for students to access digital resources and books?</b><br/>
                <input type="radio" name="qn4" value="Yes" onChange={(e) => handleRadioChange(e, 'qn4')} /> Yes <br />
                <input type="radio" name="qn4" value="No" onChange={(e) => handleRadioChange(e, 'qn4')} /> No <br />
                </label>
                <label><b>5. Do you require a cloud solution for managing educational research and data analysis projects?</b><br/>
                <input type="radio" name="qn5" value="Yes" onChange={(e) => handleRadioChange(e, 'qn5')} /> Yes <br />
                <input type="radio" name="qn5" value="No" onChange={(e) => handleRadioChange(e, 'qn5')} /> No <br />
                </label>
                <label><b>6. Do you require cloud-based tools for remote student counseling and support services?</b><br/>
                <input type="radio" name="qn6" value="Yes" onChange={(e) => handleRadioChange(e, 'qn6')} /> Yes <br />
                <input type="radio" name="qn6" value="No" onChange={(e) => handleRadioChange(e, 'qn6')} /> No <br />
                </label>
                <label><b>7. Are you interested in a cloud service for interactive virtual labs and science experiments for students?</b><br/>
                <input type="radio" name="qn7" value="Yes" onChange={(e) => handleRadioChange(e, 'qn7')} /> Yes <br />
                <input type="radio" name="qn7" value="No" onChange={(e) => handleRadioChange(e, 'qn7')} /> No <br />
                </label>
                <label><b>8. What is the expected geographical distribution of your users?</b><br/>
                <input type="checkbox" name="qn8"  onChange={(e) => handleCheckboxChange(e, 'qn8')}  /> Local / Regional <br />
                <input type="checkbox" name="qn8" onChange={(e) => handleCheckboxChange(e, 'qn8')}  /> National <br />
                <input type="checkbox" name="qn8"  onChange={(e) => handleCheckboxChange(e, 'qn8')}  /> Global <br />
                </label>
                <label><b>9. Would you like to implement chatbot for managing queries?  </b><br/>
                <input type="radio" name="qn9" value="Yes" onChange={(e) => handleRadioChange(e, 'qn9')} /> Yes <br />
                <input type="radio" name="qn9" value="No" onChange={(e) => handleRadioChange(e, 'qn9')} /> No <br />
                </label>
                <label><b>10. Do you require a cloud service for secure student identity verification and authentication? </b><br/>
                <input type="radio" name="qn10" value="Yes" onChange={(e) => handleRadioChange(e, 'qn10')} /> Yes <br />
                <input type="radio" name="qn10" value="No" onChange={(e) => handleRadioChange(e, 'qn10')} /> No <br />
                </label>
                <label><b>11. What is your expected user load? </b><br />
                <input type="radio" name="qn11" value="A few hundred users (>100)" onChange={(e) => handleRadioChange(e, 'qn11')} /> A few hundred users (&gt;100) <br />
                <input type="radio" name="qn11" value="Thousands of users (>1000)" onChange={(e) => handleRadioChange(e, 'qn11')} /> Thousands of users (&gt;1000) <br />
                <input type="radio" name="qn11" value="Millions of users (>10000)" onChange={(e) => handleRadioChange(e, 'qn11')} /> Millions of users (&gt;10000) <br />
                <input type="radio" name="qn11" value="Uncertain" onChange={(e) => handleRadioChange(e, 'qn11')} /> Uncertain <br />
                </label>
                <center><button className="btn1">Submit</button></center>
            </div>
        </form>
    </div>
  )
}

