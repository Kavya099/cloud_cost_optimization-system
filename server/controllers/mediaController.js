const express = require('express');
const mongoose = require('mongoose');
const axios = require('axios'); 


const app = express();
app.use(express.json());

const formDataSchema = new mongoose.Schema({
  responses: {
    type: Map,
    of: [mongoose.Schema.Types.Mixed],
  },
});

const FormDataModel = mongoose.model('mediaFormData', formDataSchema);

const submitForm = async (req, res) => {
  try {
    console.log('Request Body:', req.body);
    const { qn1, qn2, qn3, qn4, qn5, qn6, qn7, qn8, qn9, qn10 } = req.body;

    // Creating an array of question-answer pairs
    const questionsAndAnswers = {
      'What aspect of media and entertainment are you interested in?': qn1,
      'What tasks or activities do you want to accomplish using cloud services?': qn2,
      'Are you looking to enhance viewer engagement through interactive features like polls and Q&A?': qn3,
      'Would you like to implement a media chatbot for viewer inquiries and support?': qn4,
      'Do you require a cloud solution for live streaming and event broadcasting to a global audience?': qn5,
      'Do you need cloud-based tools for video editing and post-production tasks?': qn6,
      'Do you require a cloud solution for content localization and multilingual subtitles for global audiences?': qn7,
      'Are you looking for a system to manage digital rights and content licensing for media distribution?': qn8,
      'Are there any specific geographic regions / requirements for your users?': qn9,
      'Are you interested in managing and tracking viewer engagement and viewer feedback effectively?': qn10
    };

    console.log('Questions and Answers:', questionsAndAnswers);
    const jsonQuestionsAndAnswers = JSON.stringify(questionsAndAnswers);
    console.log('JSON Questions and Answers:', jsonQuestionsAndAnswers);
    // Create a new FormDataModel instance
    const mediaformData = new FormDataModel({
      responses: questionsAndAnswers,
    });

    // Save the data to MongoDB
    await mediaformData.save({wtimeout: 20000});
    const externalLink = 'http://127.0.0.1:5000/upload';
    await axios.post(externalLink, { data: jsonQuestionsAndAnswers }, {
      headers: {
        'Content-Type': 'application/json',
      },

    });

    res.status(201).json({ success: true, message: 'Form data saved successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: 'Internal Server Error' });
  }
};

module.exports = {
  mediaController: mongoose.model('mediaController', formDataSchema),
 submitForm 
};
