// index.js
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 8000;
const mediaRoutes = require('./routes/mediaRoutes');
const htformRoutes = require('./routes/htformRoutes');
const ecomRoutes = require('./routes/ecomRoutes');
const educRoutes = require('./routes/educRoutes');
const finRoutes = require('./routes/finRoutes');
const mlRoutes = require('./routes/mlRoutes');


app.use(cors({
  origin: 'http://localhost:3000', // Replace with your React app's origin
}));

app.use(bodyParser.json());

app.use(express.json());

mongoose.connect("mongodb+srv://kavya992002:kavya@cloud.c3qsiva.mongodb.net/", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => {
  console.log('MongoDB Connected');
}).catch((err) => {
  console.error('MongoDB Connection Error', err);
});

app.use('/api/media', mediaRoutes);
app.use('/api/hform', htformRoutes);
app.use('/api/ecom', ecomRoutes);
app.use('/api/educ', educRoutes);
app.use('/api/fin', finRoutes);
app.use('/api/ml', mlRoutes);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
