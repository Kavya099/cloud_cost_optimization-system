import React, { useState} from 'react'
import './domain.css'


export default function Media() {
    const [formData, setFormData] = useState({
      qn1: [],
      qn2: [],
      qn3: '',
      qn4: '',
      qn5: '',
      qn6: '',
      qn7: '',
      qn8: '',
      qn9: '',
      qn10: '',
    });

    const handleCheckboxChange = (event, question) => {
      const value = event.target.value;
      const updatedFormData = { ...formData, [question]: [...formData[question], value] };
      setFormData(updatedFormData);
    };
  
    const handleTextChange = (event, question) => {
      const value = event.target.value;
      const updatedFormData = { ...formData, [question]: value };
      setFormData(updatedFormData);
    };
  
    // Media.js
const handleSubmit = async (e) => {
  e.preventDefault();

  try {
    console.log('Form Data:', formData);
    const response = await fetch('http://localhost:8000/api/media/submitForm', { // Update the URL
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
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
            <center><h1 className="title">Media and Entertainment</h1></center>
            <div className="qns">
              <center><h1>Fill the following</h1></center>
                <label name="qn1"><b>1. What aspect of media and entertainment are you interested in?</b><br/>
                <input type="checkbox" name="qn1" value="Content creation and production" 
                onChange={(e) => handleCheckboxChange(e, 'qn1')}/> Content creation and production <br />
                <input type="checkbox" name="qn1" value="Content distribution and streaming" 
                onChange={(e) => handleCheckboxChange(e, 'qn1')}/> Content distribution and streaming <br />
                <input type="checkbox" name="qn1" value="Audience engagement and analytics" 
                onChange={(e) => handleCheckboxChange(e, 'qn1')}/> Audience engagement and analytics <br />
                <input type="checkbox" name="qn1" value="Others" 
                onChange={(e) => handleCheckboxChange(e, 'qn1')}/> Others <br />
                </label>
                <label name="qn2"><b>2. What tasks or activities do you want to accomplish using cloud services? </b><br/>
                <input type="checkbox" name="qn2" value="Live Video Streaming and Broadcasting" 
                onChange={(e) => handleCheckboxChange(e, 'qn2')}/> Live Video Streaming and Broadcasting <br />
                <input type="checkbox" name="qn2" value="Content Monetization and Subscription Services" 
                onChange={(e) => handleCheckboxChange(e, 'qn2')}/> Content Monetization and Subscription Services <br />
                <input type="checkbox" name="qn2" value="News and Media Distribution" 
                onChange={(e) => handleCheckboxChange(e, 'qn2')}/> News and Media Distribution <br />
                <input type="checkbox" name="qn2" value="Digital Marketing and Advertising" 
                onChange={(e) => handleCheckboxChange(e, 'qn2')}/> Digital Marketing and Advertising <br />
                <input type="checkbox" name="qn2" value="Hosting Website" 
                onChange={(e) => handleCheckboxChange(e, 'qn2')}/> Hosting Website <br />
                </label>
                <label name="qn3"><b>3. Are you looking to enhance viewer engagement through interactive features like polls and Q&A?  </b><br/>
                <input type="text" name="qn3" onChange={(e) => handleTextChange(e, 'qn3')}/> <br />
                </label>
                <label><b>4. Would you like to implement a media chatbot for viewer inquiries and support?</b></label><br/>
                <input type="text" name="qn4" onChange={(e) => handleTextChange(e,'qn4')} /> <br />
                <label><b>5. Do you require a cloud solution for live streaming and event broadcasting to a global audience?</b></label><br/>
                <input type="text" name="qn5" onChange={(e) => handleTextChange(e,'qn5')}/> <br />
                <label><b>6. Do you need cloud-based tools for video editing and post-production tasks?  </b></label><br/>
                <input type="text" name="qn6" onChange={(e) => handleTextChange(e,'qn6')} /> <br />
                <label><b>7. Do you require a cloud solution for content localization and multilingual subtitles for global audiences?</b></label><br/>
                <input type="text" name="qn7" onChange={(e) => handleTextChange(e,'qn7')}/> <br />
                <label><b>8. Are you looking for a system to manage digital rights and content licensing for media distribution?</b></label><br/>
                <input type="text" name="qn8" onChange={(e) => handleTextChange(e,'qn8')}/> <br />
                <label><b>9. Are there any specific geographic regions / requirements for your users?</b></label><br/>
                <textarea name="qn9" onChange={(e) => handleTextChange(e,'qn9')}></textarea><br/>
                <label><b>10. Are you interested in managing and tracking viewer engagement and viewer feedback effectively?</b></label><br/>
                <input type="text" name="qn10" onChange={(e) => handleTextChange(e,'qn10')}/> <br />
                <center><button className="btn1">Submit</button></center>
            </div>
        </form>
    </div>
  )
}

