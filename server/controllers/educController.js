const express = require('express');
const mongoose = require('mongoose');


const app = express();
app.use(express.json());

const eduFormDataSchema = new mongoose.Schema({
  responses: {
    type: Map,
    of: [mongoose.Schema.Types.Mixed],
},
});

const EduFormDataModel = mongoose.model('eduFormData', eduFormDataSchema);

const submitEduForm = async (req, res) => {
  try {
    console.log('Request Body:', req.body);
    const { qn1, qn2, qn3, qn4, qn5, qn6, qn7, qn8, qn9, qn10, qn11 } = req.body;

    const questionsAndAnswers = { 
      'What educational area are you interested in?': qn1,
      'What tasks or activities do you want to accomplish using cloud services?': qn2,//ans not proper
      'Do you require a cloud solution for online testing and examination management?': qn3,
      'Would you like to implement a virtual library system for students to access digital resources and books?': qn4,
      'Do you require a cloud solution for managing educational research and data analysis projects?': qn5,
      'Do you require cloud-based tools for remote student counseling and support services?': qn6,
      'Are you interested in a cloud service for interactive virtual labs and science experiments for students?': qn7,
      'What is the expected geographical distribution of your users?': qn8,
      'Would you like to implement chatbot for managing queries?': qn9,
      'Do you require a cloud service for secure student identity verification and authentication?': qn10,
      'What is your expected user load?': qn11
    };

    console.log('Questions and Answers:', questionsAndAnswers);

    const eduFormData = new EduFormDataModel({
      responses: questionsAndAnswers,
    });

    await eduFormData.save();

    res.status(201).json({ success: true, message: 'Education Form data saved successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: 'Internal Server Error' });
  }
};

module.exports ={ 
  educController:mongoose.model('educController', eduFormDataSchema),
  submitEduForm,
};
