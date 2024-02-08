const express = require('express');
const mongoose = require('mongoose');
const axios = require('axios'); 


const app = express();
app.use(express.json());

const ecomFormDataSchema = new mongoose.Schema({
  responses: {
    type: Map,
    of: [mongoose.Schema.Types.Mixed],
},
});

const EcomFormDataModel = mongoose.model('EcomFormData', ecomFormDataSchema);

const submitEcomForm = async (req, res) => {
  try {
    console.log('Request Body:', req.body);
    const { qn1, qn2, qn3, qn4, qn5, qn6, qn7, qn8, qn9, qn10, qn11, qn12, qn13, qn14 } = req.body;

    const questionsAndAnswers = {
      'What is your primary goal?': qn1,
      'What tasks or activities do you want to accomplish using cloud services?': qn2,
      'What is the expected peak sales period?': qn3,
      'Are you interested in making your website load faster and ensuring a better experience for your visitors?': qn4,
      'Would you like to implement an ecommerce chatbot for customer inquiries and support?': qn5,
      'What is the expected geographical distribution of your users?': qn6,
      'Do you require cloud-based tools for inventory demand forecasting and stock optimization?': qn7,
      'Are you interested in customer sentiment analysis and social media monitoring?': qn8,
      'Are you looking for a solution to manage customer reviews and feedback effectively?': qn9,
      'Are you looking for a system to manage returns and refunds efficiently?': qn10,
      'How often you would like to know the updates of your usage?': qn11,
      'Do you have any existing software?': qn12,
      'Are you looking for a system to optimize pricing strategies and discounts for your products?': qn13,
      'Would you like to enhance the customer shopping experience through mobile apps?': qn14
    };

    console.log('Questions and Answers:', questionsAndAnswers);
    const jsonQuestionsAndAnswers = JSON.stringify(questionsAndAnswers);
    console.log('JSON Questions and Answers:', jsonQuestionsAndAnswers);

    const ecomFormData = new EcomFormDataModel({
      responses: questionsAndAnswers,
    });

    await ecomFormData.save({wtimeout: 20000});
    const externalLink = 'http://127.0.0.1:5000/upload';
    await axios.post(externalLink, { data: jsonQuestionsAndAnswers }, {
      headers: {
        'Content-Type': 'application/json',
      },

    });

    res.status(201).json({ success: true, message: 'Ecommerce Form data saved successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: 'Internal Server Error' });
  }
};

module.exports ={
  ecomController: mongoose.model('ecomController', ecomFormDataSchema),
  submitEcomForm,
};

