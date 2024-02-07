import React, { useState } from 'react'
import './domain.css'

export default function Machine_learning() {

  const [mlFormData, setMlFormData] = useState({
    qn1: [],
    qn2: '',
    qn3: '',
    qn4: '',
    qn5: '',
    qn6: '',
    qn7: '',
    qn8: '',
    qn9: '',
    qn10: '',
    qn11: '',
    qn12: '',
    qn13: '',
  });

  const handleCheckboxChange = (event, question) => {
    const value = event.target.value;
    const updatedmlFormData = { ...mlFormData, [question]: [...mlFormData[question], value] };
    setMlFormData(updatedmlFormData);
  };

  const handleRadioChange = (event, question) => {
    const value = event.target.value;
    setMlFormData({ ...mlFormData, [question]: value });
  };
  // Media.js
const handleSubmit = async (e) => {
e.preventDefault();

try {
  console.log('Form Data:', mlFormData);
  const response = await fetch('http://localhost:8000/api/ml/submitMlForm', { // Update the URL
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(mlFormData),
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
            <center><h1 className="title">Machine Learning</h1></center>
            <div className="qns">
            <center><h1>Fill the following</h1></center>
                <label><b>1. What type of machine learning project are you working on?</b><br/>
                <input type="checkbox" name="qn1" value="Image recognition" onChange={(e) => handleCheckboxChange(e, 'qn1')}  /> Image recognition <br />
                <input type="checkbox" name="qn1" value="Natural language processing"  onChange={(e) => handleCheckboxChange(e, 'qn1')} /> Natural language processing <br />
                <input type="checkbox" name="qn1" value="Predictive analytics"  onChange={(e) => handleCheckboxChange(e, 'qn1')} /> Predictive analytics <br />
                <input type="checkbox" name="qn1" value="Other"  onChange={(e) => handleCheckboxChange(e, 'qn1')}  /> Other <br />
                </label>
                <label><b>2.	Would you like to use pre-built models?  </b><br/>
                <input type="radio" name="qn2" value="Yes" onChange={(e) => handleRadioChange(e, 'qn2')} /> Yes <br />
                <input type="radio" name="qn2" value="No" onChange={(e) => handleRadioChange(e, 'qn2')} /> No <br />
                </label>
                <label><b>3. Do you need your models to be deployable on various devices?</b><br/>
                <input type="radio" name="qn3" value="Yes" onChange={(e) => handleRadioChange(e, 'qn3')} /> Yes <br />
                <input type="radio" name="qn3" value="No" onChange={(e) => handleRadioChange(e, 'qn3')} /> No <br />
                </label>
                <label><b>4.	Do you want to build models without extensive machine learning knowledge?</b><br/>
                <input type="radio" name="qn4" value="Yes" onChange={(e) => handleRadioChange(e, 'qn4')} /> Yes <br />
                <input type="radio" name="qn4" value="No" onChange={(e) => handleRadioChange(e, 'qn4')} /> No <br />
                </label>
                <label><b>5.	Do you prefer a drag-and-drop interface for model development?</b><br/>
                <input type="radio" name="qn5" value="Yes" onChange={(e) => handleRadioChange(e, 'qn5')} /> Yes <br />
                <input type="radio" name="qn5" value="No" onChange={(e) => handleRadioChange(e, 'qn5')} /> No <br />
                </label>
                <label><b>6.	Will your project involve analyzing unstructured data like images or text?</b><br/>
                <input type="radio" name="qn6" value="Yes" onChange={(e) => handleRadioChange(e, 'qn6')} /> Yes <br />
                <input type="radio" name="qn6" value="No" onChange={(e) => handleRadioChange(e, 'qn6')} /> No <br />
                </label>
                <label><b>7.	Will your machine learning models require periodic retraining?</b><br/>
                <input type="radio" name="qn7" value="Yes" onChange={(e) => handleRadioChange(e, 'qn7')} /> Yes <br />
                <input type="radio" name="qn7" value="No" onChange={(e) => handleRadioChange(e, 'qn7')} /> No <br />
                </label>
                <label><b>8.	Will you be handling time-series data in your project?</b><br/>
                <input type="radio" name="qn8" value="Yes" onChange={(e) => handleRadioChange(e, 'qn8')} /> Yes <br />
                <input type="radio" name="qn8" value="No" onChange={(e) => handleRadioChange(e, 'qn8')} /> No <br />
                </label>
                <label><b>9.	 Are you interested in creating new content using generative AI, such as conversations, stories, images, videos, or music? </b><br/>
                <input type="radio" name="qn9" value="Yes" onChange={(e) => handleRadioChange(e, 'qn9')} /> Yes <br />
                <input type="radio" name="qn9" value="No" onChange={(e) => handleRadioChange(e, 'qn9')} /> No <br />
                </label>
                <label><b>10. Do you have sufficient data available for training machine learning models? </b><br/>
                <input type="radio" name="qn10" value="Yes" onChange={(e) => handleRadioChange(e, 'qn10')} /> Yes <br />
                <input type="radio" name="qn10" value="No" onChange={(e) => handleRadioChange(e, 'qn10')} /> No <br />
                </label>
                <label><b>11. Do you want to integrate machine learning into existing applications? </b><br />
                <input type="radio" name="qn11" value="Yes" onChange={(e) => handleRadioChange(e, 'qn11')} /> Yes <br />
                <input type="radio" name="qn11" value="No" onChange={(e) => handleRadioChange(e, 'qn11')} /> No <br />
                </label>
                <label><b>12. Do you like to monitor your machine learning models? </b><br />
                <input type="radio" name="qn12" value="Yes" onChange={(e) => handleRadioChange(e, 'qn12')} /> Yes <br />
                <input type="radio" name="qn12" value="No" onChange={(e) => handleRadioChange(e, 'qn12')} /> No <br />
                </label>
                <label><b>13. Do you want to handle data labeling and annotation within the cloud? </b><br />
                <input type="radio" name="qn13" value="Yes" onChange={(e) => handleRadioChange(e, 'qn13')} /> Yes <br />
                <input type="radio" name="qn13" value="No" onChange={(e) => handleRadioChange(e, 'qn13')} /> No <br />
                </label>
                <center><button className="btn1">Submit</button></center>
            </div>
        </form>
    </div>
  )
}

