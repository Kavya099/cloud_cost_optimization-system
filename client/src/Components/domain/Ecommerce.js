import React, {useState} from 'react'
import './domain.css'

export default function Ecommerce() {
  const [ecomformData, setEcomFormData] = useState({
    qn1: [],
    qn2: [],
    qn3: '',
    qn4: '',
    qn5: '',
    qn6: [],
    qn7: '',
    qn8: '',
    qn9: '',
    qn10: '',
    qn11: [],
    qn12: '',
    qn13: '',
    qn14: '',
  });

  const handleCheckboxChange = (event, question) => {
    const value = event.target.value;
    const updatedFormData = { ...ecomformData, [question]: [...ecomformData[question], value] };
    setEcomFormData(updatedFormData);
  };

  const handleRadioChange = (event, question) => {
    const value = event.target.value;
    setEcomFormData({ ...ecomformData, [question]: value });
  }

  // Media.js
const handleSubmit = async (e) => {
e.preventDefault();

try {
  console.log('Form Data:', ecomformData);
  const response = await fetch('http://localhost:8000/api/ecom/submitEcomForm', { // Update the URL
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(ecomformData),
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
          <center><h1 className="title">Ecommerce</h1></center>
            <div className="qns">
              <center><h1>Fill the following</h1></center><br/>
                <label><b>1. What is your primary goal ?</b><br/>
                <input type="checkbox" name="qn1" value="Increase online sales and revenue" 
                onChange={(e) => handleCheckboxChange(e, 'qn1')} /> Increase online sales and revenue <br />
                <input type="checkbox" name="qn1" value="Enhance customer experience and engagement" 
                onChange={(e) => handleCheckboxChange(e, 'qn1')} /> Enhance customer experience and engagement <br />
                <input type="checkbox" name="qn1" value="Improve inventory management and supply chain" 
                onChange={(e) => handleCheckboxChange(e, 'qn1')}  /> Improve inventory management and supply chain <br />
                <input type="checkbox" name="qn1" value="Others" 
                onChange={(e) => handleCheckboxChange(e, 'qn1')} /> Others <br />
                </label>
                <label><b>2. What tasks or activities do you want to accomplish using cloud services? </b><br/>
                <input type="checkbox" name="qn2" value="Hosting Website"
                onChange={(e) => handleCheckboxChange(e, 'qn2')} /> Hosting Website <br />
                <input type="checkbox" name="qn2" value="Data analytics and personalization"
                onChange={(e) => handleCheckboxChange(e, 'qn2')} /> Data analytics and personalization <br />
                <input type="checkbox" name="qn2" value="Secure payment processing"
                onChange={(e) => handleCheckboxChange(e, 'qn2')} /> Secure payment processing    <br />
                <input type="checkbox" name="qn2" value="Cybersecurity and fraud prevention"
                onChange={(e) => handleCheckboxChange(e, 'qn2')} /> Cybersecurity and fraud prevention   <br />
                </label>
                <label><b>3. What is the expected peak sales period?   </b><br/>
                <input type="radio" name="qn3" value="Yes" onChange={(e) => handleRadioChange(e, 'qn3')} /> Yes <br />
                <input type="radio" name="qn3" value="No" onChange={(e) => handleRadioChange(e, 'qn3')} /> No <br />
                </label>
                <label><b>4. Are you interested in making your website load faster and ensuring a better experience for your visitors?  </b><br/>
                <input type="radio" name="qn4" value="Yes" onChange={(e) => handleRadioChange(e, 'qn4')} /> Yes <br />
                <input type="radio" name="qn4" value="No" onChange={(e) => handleRadioChange(e, 'qn4')} /> No <br />
                </label>
                <label><b>5. Would you like to implement an ecommerce chatbot for customer inquiries and support?  </b><br/>
                <input type="radio" name="qn5" value="Yes" onChange={(e) => handleRadioChange(e, 'qn5')} /> Yes <br />
                <input type="radio" name="qn5" value="No" onChange={(e) => handleRadioChange(e, 'qn5')} /> No <br />
                </label>
                <label><b>6. What is the expected geographical distribution of your users?</b><br/>
                <input type="checkbox" name="qn6" value="Local / Regional"
                onChange={(e) => handleCheckboxChange(e, 'qn6')} /> Local / Regional <br />
                <input type="checkbox" name="qn6" value="National" 
                onChange={(e) => handleCheckboxChange(e, 'qn6')}/> National <br />
                <input type="checkbox" name="qn6" value="Global"
                onChange={(e) => handleCheckboxChange(e, 'qn6')} /> Global <br />
                </label>
                <label><b>7. Do you require cloud-based tools for inventory demand forecasting and stock optimization?  </b><br/>
                <input type="radio" name="qn7" value="Yes" onChange={(e) => handleRadioChange(e, 'qn7')} /> Yes <br />
                <input type="radio" name="qn7" value="No" onChange={(e) => handleRadioChange(e, 'qn7')} /> No <br />
                </label>
                <label><b>8. Are you interested in customer sentiment analysis and social media monitoring ?   </b><br/>
                <input type="radio" name="qn8" value="Yes" onChange={(e) => handleRadioChange(e, 'qn8')} /> Yes <br />
                <input type="radio" name="qn8" value="No" onChange={(e) => handleRadioChange(e, 'qn8')} /> No <br />
                </label>
                <label><b>9. Are you looking for a solution to manage customer reviews and feedback effectively?   </b><br/>
                <input type="radio" name="qn9" value="Yes" onChange={(e) => handleRadioChange(e, 'qn9')} /> Yes <br />
                <input type="radio" name="qn9" value="No" onChange={(e) => handleRadioChange(e, 'qn9')} /> No <br />
                </label>
                <label><b>10. Are you looking for a system to manage returns and refunds efficiently?</b><br/>
                <input type="radio" name="qn10" value="Yes" onChange={(e) => handleRadioChange(e, 'qn10')} /> Yes <br />
                <input type="radio" name="qn10" value="No" onChange={(e) => handleRadioChange(e, 'qn10')} /> No <br />
                </label>
                <label><b>11. How often you would like to know the updates of your usage?</b><br/>
                <input type="checkbox" name="qn11" value="Daily" onChange={(e) => handleCheckboxChange(e, 'qn11')} />Daily  <br/>
                <input type="checkbox" name="qn11" value="Weekly" onChange={(e) => handleCheckboxChange(e, 'qn11')} />Weekly <br />
                <input type="checkbox" name="qn11" value="Monthly" onChange={(e) => handleCheckboxChange(e, 'qn11')} />Monthly  <br/>
                <input type="checkbox" name="qn11" value="Ondemand" onChange={(e) => handleCheckboxChange(e, 'qn11')} />Ondemand <br />
                </label>
                <label><b>12. Do you have any existing software?</b><br/>
                <input type="radio" name="qn12" value="Yes" onChange={(e) => handleRadioChange(e, 'qn12')} /> Yes <br />
                <input type="radio" name="qn12" value="No" onChange={(e) => handleRadioChange(e, 'qn12')} /> No <br />
                </label>
                <label><b>13. Are you looking for a system to optimize pricing strategies and discounts for your products?  </b><br/>
                <input type="radio" name="qn13" value="Yes" onChange={(e) => handleRadioChange(e, 'qn13')} /> Yes <br />
                <input type="radio" name="qn13" value="No" onChange={(e) => handleRadioChange(e, 'qn13')} /> No <br />
                </label>
                <label><b>14. Would you like to enhance the customer shopping experience through mobile apps ?</b><br/>
                <input type="radio" name="qn14" value="Yes" onChange={(e) => handleRadioChange(e, 'qn14')} /> Yes <br />
                <input type="radio" name="qn14" value="No" onChange={(e) => handleRadioChange(e, 'qn14')} /> No <br />
                </label>
                <center><button  className="btn1" >Submit</button></center>
            </div>
        </form>
    </div>
  )
}

