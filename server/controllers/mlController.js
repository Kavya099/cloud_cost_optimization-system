const express = require('express');
const mongoose = require('mongoose');


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

    const questionsAndAnswers = [
      { question: 'What type of machine learning project are you working on?', answer: qn1 },
      { question: 'Would you like to use pre-built models?', answer: qn2 },
      { question: 'Do you need your models to be deployable on various devices?', answer: qn3 },
      { question: 'Do you want to build models without extensive machine learning knowledge?', answer: qn4 },
      { question: 'Do you prefer a drag-and-drop interface for model development?', answer: qn5 },
      { question: 'Will your project involve analyzing unstructured data like images or text?', answer: qn6 },
      { question: 'Will your machine learning models require periodic retraining?', answer: qn7 },
      { question: 'Will you be handling time-series data in your project?', answer: qn8 },
      { question: 'Are you interested in creating new content using generative AI, such as conversations, stories, images, videos, or music?', answer: qn9 },
      { question: 'Do you have sufficient data available for training machine learning models?', answer: qn10 },
      { question: 'Do you want to integrate machine learning into existing applications?', answer: qn11 },
      { question: 'Do you like to monitor your machine learning models?', answer: qn12},
      { question: 'Do you want to handle data labeling and annotation within the cloud?', answer: qn13},
    ];

    const mlFormData = new MlFormDataModel({
      responses: questionsAndAnswers,
    });

    await mlFormData.save();

    res.status(201).json({ success: true, message: 'ML Form data saved successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: 'Internal Server Error' });
  }
};

module.exports ={
  mlController:mongoose.model('mlController', mlFormDataSchema),
  submitMlForm
 };
