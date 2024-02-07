import React, { useState } from 'react'
import './domain.css'

export default function Finance() {

  const [finFormData, setFinFormData] = useState({
    qn1: [],
    qn2: [],
    qn3: '',
    qn4: '',
    qn5: [],
    qn6: '',
    qn7: '',
    qn8: '',
    qn9: '',
    qn10: '',
  });

  const handleCheckboxChange = (event, question) => {
    const value = event.target.value;
    const updatedFinFormData = { ...finFormData, [question]: [...finFormData[question], value] };
    setFinFormData(updatedFinFormData);
  };


  const handleRadioChange = (event, question) => {
    const value = event.target.value;
    setFinFormData({ ...finFormData, [question]: value });
  };

  // Media.js
const handleSubmit = async (e) => {
e.preventDefault();

try {
  console.log('Form Data:', finFormData);
  const response = await fetch('http://localhost:8000/api/fin/submitFinForm', { // Update the URL
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(finFormData),
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
            <center><h1 className="title">Financial Services</h1></center>
            <div className="qns">
              <center><h1>Fill the following</h1></center>
                <label><b>1. What area of financial services are you interested in?</b><br/>
                <input type="checkbox" name="qn1" value="Banking" 
                onChange={(e) => handleCheckboxChange(e, 'qn1')}/> Banking <br />
                <input type="checkbox" name="qn1" value="Investment and wealth management" 
                onChange={(e) => handleCheckboxChange(e, 'qn1')}/> Investment and wealth management <br />
                <input type="checkbox" name="qn1" value="Insurance" 
                onChange={(e) => handleCheckboxChange(e, 'qn1')}/> Insurance <br />
                <input type="checkbox" name="qn1" value="Not sure" 
                onChange={(e) => handleCheckboxChange(e, 'qn1')}/> Not sure <br />
                </label>
                <label><b>2. What tasks or activities do you want to accomplish using cloud services?</b><br/>
                <input type="checkbox" name="qn2" value="Customer Identity and Access Management" 
                onChange={(e) => handleCheckboxChange(e, 'qn2')}/> Customer Identity and Access Management <br />
                <input type="checkbox" name="qn2" value="Fraud Detection and Prevention" 
                onChange={(e) => handleCheckboxChange(e, 'qn2')}/> Fraud Detection and Prevention <br />
                <input type="checkbox" name="qn2" value=" Financial Mobile Apps"
                onChange={(e) => handleCheckboxChange(e, 'qn2')} /> Financial Mobile Apps     <br />
                <input type="checkbox" name="qn2" value="Hosting Website" 
                onChange={(e) => handleCheckboxChange(e, 'qn2')}/> Hosting Website <br />
                </label>
                <label><b>3. Would you like to implement a financial chatbot for customer inquiries and support?</b><br/>
                <input type="radio" name="qn3" value="Yes" onChange={(e) => handleRadioChange(e, 'qn3')} /> Yes <br />
                <input type="radio" name="qn3" value="No" onChange={(e) => handleRadioChange(e, 'qn3')} /> No <br />
                </label>
                <label><b>4. Are you looking for a system to manage and track insurance claims and customer policy details?</b><br/>
                <input type="radio" name="qn4" value="Yes" onChange={(e) => handleRadioChange(e, 'qn4')} /> Yes <br />
                <input type="radio" name="qn4" value="No" onChange={(e) => handleRadioChange(e, 'qn4')} /> No <br />
                </label>
                <label><b>5. What is the expected geographical distribution of your users?</b><br/>
                <input type="checkbox" name="qn5" value="Local / Regional"
                onChange={(e) => handleCheckboxChange(e, 'qn5')} /> Local / Regional <br />
                <input type="checkbox" name="qn5" value="National" 
                onChange={(e) => handleCheckboxChange(e, 'qn5')}/> National <br />
                <input type="checkbox" name="qn5" value="Global " 
                onChange={(e) => handleCheckboxChange(e, 'qn5')}/> Global <br />
                </label>
                <label><b>6. Do you have any existing software?</b><br/>
                <input type="radio" name="qn6" value="Yes" onChange={(e) => handleRadioChange(e, 'qn6')} /> Yes <br />
                <input type="radio" name="qn6" value="No" onChange={(e) => handleRadioChange(e, 'qn6')} /> No <br />
                </label>
                <label><b>7. What is your expected user load? </b><br/>
                <input type="radio" name="qn7" value="A few hundred users (&gt;100)" onChange={(e) => handleRadioChange(e, 'qn7')} /> A few hundred users (&gt;100) <br/> 
                <input type="radio" name="qn7" value="Thousands of users (&gt; 1000) " onChange={(e) => handleRadioChange(e, 'qn7')}/>Thousands of users (&gt; 1000) <br />
                <input type="radio" name="qn7" value="Millions of users (&gt; 10000)" onChange={(e) => handleRadioChange(e, 'qn7')}/>Millions of users (&gt; 10000) <br/> 
                <input type="radio" name="qn7" value="Uncertain" onChange={(e) => handleRadioChange(e, 'qn7')}/>Uncertain <br />
                </label>
                <label><b>8. Are you looking to use a cloud solution for handling payments and currency exchange across borders?</b><br/>
                <input type="radio" name="qn8" value="Yes" onChange={(e) => handleRadioChange(e, 'qn8')} /> Yes <br />
                <input type="radio" name="qn8" value="No" onChange={(e) => handleRadioChange(e, 'qn8')} /> No <br />
                </label>
                <label><b>9. Would you like to implement a system for secure document management and collaboration among your financial team and clients?</b><br/>
                <input type="radio" name="qn9" value="Yes" onChange={(e) => handleRadioChange(e, 'qn9')} /> Yes <br />
                <input type="radio" name="qn9" value="No" onChange={(e) => handleRadioChange(e, 'qn9')} /> No <br />
                </label>
                <label><b>10. Do you require cloud tools for managing customer financial transactions and accounting?</b><br/>
                <input type="radio" name="qn10" value="Yes" onChange={(e) => handleRadioChange(e, 'qn10')} /> Yes <br />
                <input type="radio" name="qn10" value="No" onChange={(e) => handleRadioChange(e, 'qn10')} /> No <br />
                </label>
                <center><button className="btn1" >Submit</button></center>
            </div>
        </form>
    </div>
  )
}

