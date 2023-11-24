const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const PORT = 3001 //any port

//Midleware to pasrse JSON in request body
app.use(bodyParser.json());

// Enable CORS for all routes
app.use(cors());
//Simple in-memort storage for form submissions
const submissions = []

// Endpoint to handle form submissions
app.post('/submit-form', (req, res) => {
    const formData = req.body;
    submissions.push(formData);
    console.log('Form data submitted:', formData);
    res.status(200).json({ message: 'Form submitted successfully' });
  });
  
  // Start the server
  app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
  });
