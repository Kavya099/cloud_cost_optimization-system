const mongoose = require('mongoose');

const formDataSchema = new mongoose.Schema({
  responses: [
    {
      question: String,
      answer: mongoose.Schema.Types.Mixed, // This allows storing various data types
    }
  ]
});

const FormDataModel = mongoose.model('mediaFormData', formDataSchema);

const submitForm = async (req, res) => {
  try {
    console.log('Request Body:', req.body);
    const { qn1, qn2, qn3, qn4, qn5, qn6, qn7, qn8, qn9, qn10 } = req.body;

    // Creating an array of question-answer pairs
    const questionsAndAnswers = [
      { question: 'What aspect of media and entertainment are you interested in?', answer: qn1 },
      { question: 'What tasks or activities do you want to accomplish using cloud services?', answer: qn2 },
      { question: 'Are you looking to enhance viewer engagement through interactive features like polls and Q&A?', answer: qn3 },
      { question: 'Would you like to implement a media chatbot for viewer inquiries and support?', answer: qn4 },
      { question: 'Do you require a cloud solution for live streaming and event broadcasting to a global audience?', answer: qn5 },
      { question: 'Do you need cloud-based tools for video editing and post-production tasks?', answer: qn6 },
      { question: 'Do you require a cloud solution for content localization and multilingual subtitles for global audiences?', answer: qn7 },
      { question: 'Are you looking for a system to manage digital rights and content licensing for media distribution?', answer: qn8 },
      { question: 'Are there any specific geographic regions / requirements for your users?', answer: qn9 },
      { question: 'Are you interested in managing and tracking viewer engagement and viewer feedback effectively?', answer: qn10 }
    ];

    // Create a new FormDataModel instance
    const mediaformData = new FormDataModel({
      responses: questionsAndAnswers,
    });

    // Save the data to MongoDB
    await mediaformData.save();

    res.status(201).json({ success: true, message: 'Form data saved successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: 'Internal Server Error' });
  }
};

module.exports = mongoose.model('mediaController', formDataSchema);
module.exports = { submitForm };
