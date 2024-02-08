const express = require('express');
const mongoose = require('mongoose');
const axios = require('axios'); 

const app = express();
app.use(express.json());


const mlFormDataSchema = new mongoose.Schema({
  responses: {
    type: Map,
    of: [mongoose.Schema.Types.Mixed],
  },
});
const MlFormDataModel = mongoose.model('mlFormData', mlFormDataSchema);

const submitMlForm = async (req, res) => {
  try {
    console.log('Request Body:', req.body);
    const { qn1, qn2, qn3, qn4, qn5, qn6, qn7, qn8, qn9, qn10, qn11, qn12, qn13 } = req.body;

    const questionsAndAnswers = {
      'What type of machine learning project are you working on?': qn1,
      'Would you like to use pre-built models?': qn2,
      'Do you need your models to be deployable on various devices?': qn3,
      'Do you want to build models without extensive machine learning knowledge?': qn4,
      'Do you prefer a drag-and-drop interface for model development?': qn5,
      'Will your project involve analyzing unstructured data like images or text?': qn6,
      'Will your machine learning models require periodic retraining?': qn7,
      'Will you be handling time-series data in your project?': qn8,
      'Are you interested in creating new content using generative AI, such as conversations, stories, images, videos, or music?': qn9,
      'Do you have sufficient data available for training machine learning models?': qn10,
      'Do you want to integrate machine learning into existing applications?': qn11,
      'Do you like to monitor your machine learning models?': qn12,
      'Do you want to handle data labeling and annotation within the cloud?': qn13
    };
    
    console.log('Questions and Answers:', questionsAndAnswers);
    const jsonQuestionsAndAnswers = JSON.stringify(questionsAndAnswers);
    console.log('JSON Questions and Answers:', jsonQuestionsAndAnswers);

    const mlFormData = new MlFormDataModel({
      responses: questionsAndAnswers,
    });

    await mlFormData.save({wtimeout: 20000});
    const externalLink = 'http://127.0.0.1:5000/upload';
    await axios.post(externalLink, { data: jsonQuestionsAndAnswers }, {
      headers: {
        'Content-Type': 'application/json',
      },

    });

    res.status(201).json({ success: true, message: 'ML Form data saved successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: 'Internal Server Error' });
  }
};

module.exports ={
  mlController:mongoose.model('mlController', mlFormDataSchema),
  submitMlForm,
 };
