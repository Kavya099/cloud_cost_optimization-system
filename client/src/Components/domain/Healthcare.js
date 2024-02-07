import React, { useState } from 'react'
import './domain.css'


export default function Healthcare() {

  const [healthFormData, setHealthFormData] = useState({
    qn1: [],
    qn2: '',
    qn3: '',
    qn4: '',
    qn5: '',
    qn6: '',
    qn7: [],
    qn8: '',
    qn9: '',
    qn10: '',
  });

  const handleCheckboxChange = (event, question) => {
    const value = event.target.value;
    const updatedhealthFormData = { ...healthFormData, [question]: [...healthFormData[question], value] };
    setHealthFormData(updatedhealthFormData);
  };

  const handleRadioChange = (event, question) => {
    const value = event.target.value;
    setHealthFormData({ ...healthFormData, [question]: value });
  };
  
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      console.log('Form Data:', healthFormData);
      const response = await fetch('http://localhost:8000/api/hform/submitHealthForm', {
        method: 'POST',
        headers: {
          'Content-Type' : 'application/json',
        },
        body: JSON.stringify(healthFormData),
      });

      const data = await response.json();
      console.log(data);
    } catch(error) {
      console.error(error);
    }
  };


  return (
    <div className="fm">
        <form onSubmit={handleSubmit}>
          <center><h1 className="title">Healthcare</h1></center>
            <div className="qns">
              <center><h1>Fill the following</h1></center>
                <label name="qn1"><b>1. What tasks or activities do you want to accomplish using cloud services?</b><br/>
                <input type="checkbox" name="qn1" value="Electronic health record management" 
                onChange={(e) => handleCheckboxChange(e, 'qn1')}  /> Electronic health record management     <br />
                <input type="checkbox" name="qn1" value="Telemedicine and video conferencing" checked={healthFormData.qn1.includes('Telemedicine and video conferencing')}
                onChange={(e) => handleCheckboxChange(e, 'qn1')} /> Telemedicine and video conferencing <br />
                <input type="checkbox" name="qn1" value="Data storage and backup"  
                onChange={(e) => handleCheckboxChange(e, 'qn1')}/> Data storage and backup <br />
                <input type="checkbox" name="qn1" value="Healthcare mobile apps" 
                onChange={(e) => handleCheckboxChange(e, 'qn1')} /> Healthcare mobile apps <br />
                <input type="checkbox" name="qn1" value="Medical Imaging" 
                onChange={(e) => handleCheckboxChange(e, 'qn1')} /> Medical Imaging <br />
                <input type="checkbox" name="qn1" value="Hosting Website" 
                onChange={(e) => handleCheckboxChange(e, 'qn1')} /> Hosting Website <br />
                </label>
                <label name="qn2"><b>2. Are you looking to enhance the efficiency of appointment scheduling and management?</b><br/>
                <input type="radio" name="qn2" value="Yes" onChange={(e) => handleRadioChange(e, 'qn2')} /> Yes <br />
                <input type="radio" name="qn2" value="No" onChange={(e) => handleRadioChange(e, 'qn2')} /> No <br />
                </label>
                <label name="qn3"><b>3. Would you like to improve patient engagement and communication?</b><br/>
                <input type="radio" name="qn3" value="Yes" onChange={(e) => handleRadioChange(e, 'qn3')} /> Yes <br />
                <input type="radio" name="qn3" value="No" onChange={(e) => handleRadioChange(e, 'qn3')} /> No <br />
                </label>
                <label name="qn4"><b>4. Are you interested in enhancing healthcare inventory and supply chain management?</b><br/>
                <input type="radio" name="qn4" value="Yes" onChange={(e) => handleRadioChange(e, 'qn4')} /> Yes <br />
                <input type="radio" name="qn4" value="No" onChange={(e) => handleRadioChange(e, 'qn4')} /> No <br />
                </label>
                <label name="qn5"><b>5. Are you interested in improving healthcare analytics and reporting?  </b><br/>
                <input type="radio" name="qn5" value="Yes" onChange={(e) => handleRadioChange(e, 'qn5')} /> Yes <br />
                <input type="radio" name="qn5" value="No" onChange={(e) => handleRadioChange(e, 'qn5')} /> No <br />
                </label>
                <label name="qn6"><b>6. Would you like to implement a healthcare chatbot for patient inquiries and support?</b><br/>
                <input type="radio" name="qn6" value="Yes" onChange={(e) => handleRadioChange(e, 'qn6')} /> Yes <br />
                <input type="radio" name="qn6" value="No" onChange={(e) => handleRadioChange(e, 'qn6')} /> No <br />
                </label>
                <label name="qn7"><b>7. What is the expected geographical distribution of your users?</b><br/>
                <input type="checkbox" name="qn7" value="Local or Regional" 
                onChange={(e) => handleCheckboxChange(e, 'qn7')}  /> Local or Regional <br />
                <input type="checkbox" name="qn7" value="National" 
                onChange={(e) => handleCheckboxChange(e, 'qn7')} /> National <br />
                <input type="checkbox" name="qn7" value="Global"  
                onChange={(e) => handleCheckboxChange(e, 'qn7')}/> Global <br />
                </label>
                <label name="qn8"><b>8. Do you have any existing software?</b><br/>
                <input type="radio" name="qn8" value="Yes" onChange={(e) => handleRadioChange(e, 'qn8')} /> Yes <br />
                <input type="radio" name="qn8" value="No" onChange={(e) => handleRadioChange(e, 'qn8')} /> No <br />
                </label>
                <label name="qn9"><b>9. Would you like to implement patient engagement portals for feedback, reviews, and interaction?  </b><br/>
                <input type="radio" name="qn9" value="Yes" onChange={(e) => handleRadioChange(e, 'qn9')} /> Yes <br />
                <input type="radio" name="qn9" value="No" onChange={(e) => handleRadioChange(e, 'qn9')} /> No <br />
                </label>
                <label name="qn10"><b>10. Do you need a cloud service for remote patient monitoring, early warning systems, and alerts?   </b><br/>
                <input type="radio" name="qn10" value="Yes" onChange={(e) => handleRadioChange(e, 'qn10')} /> Yes <br />
                <input type="radio" name="qn10" value="No" onChange={(e) => handleRadioChange(e, 'qn10')} /> No <br />
                </label>
                <center><button className="btn1">Submit</button></center>
            </div>
        </form>
    </div>
  )
}

