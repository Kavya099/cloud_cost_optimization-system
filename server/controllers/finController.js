const express = require('express');
const mongoose = require('mongoose');
const axios = require('axios'); 

const app = express();
app.use(express.json());

const finFormDataSchema = new mongoose.Schema({
    responses: {
        type: Map,
        of: [mongoose.Schema.Types.Mixed],
    },
});

const finFormDataModel = mongoose.model('finFormData', finFormDataSchema);

const submitFinForm = async (req, res) => {
    try {
        console.log('Request Body:', req.body);
        const { qn1, qn2, qn3, qn4, qn5, qn6, qn7, qn8, qn9, qn10 } = req.body;

        const questionsAndAnswers = {
            'What area of financial services are you interested in?': qn1,
            'What tasks or activities do you want to accomplish using cloud services?': qn2,
            'Would you like to implement a financial chatbot for customer inquiries and support?': qn3,
            'Are you looking for a system to manage and track insurance claims and customer policy details?': qn4,
            'What is the expected geographical distribution of your users?': qn5,
            'Do you have any existing software?': qn6,
            'What is your expected user load?': qn7,
            'Are you looking to use a cloud solution for handling payments and currency exchange across borders?': qn8,
            'Would you like to implement a system for secure document management and collaboration among your financial team and clients?': qn9,
            'Do you require cloud tools for managing customer financial transactions and accounting?': qn10
        };

        console.log('Questions and Answers:', questionsAndAnswers);
        const jsonQuestionsAndAnswers = JSON.stringify(questionsAndAnswers);
        console.log('JSON Questions and Answers:', jsonQuestionsAndAnswers);


        const finFormData = new finFormDataModel({
            responses: questionsAndAnswers,
        });

        await finFormData.save({wtimeout: 20000});

        const externalLink = 'http://127.0.0.1:5000/upload';
        await axios.post(externalLink, { data: jsonQuestionsAndAnswers }, {
          headers: {
            'Content-Type': 'application/json',
          },
    
        });

        res.status(201).json({success: true, message: 'Finance Form data saved successfully'});
    } catch (error) {
        console.error(error);
        res.status(500).json({success: false, message: 'Internal Server Error'});
    }
};

module.exports = {
    finController:mongoose.model('finController', finFormDataSchema),
    submitFinForm, 
};