const express = require('express');
const app = express();

app.use(express.json()); // parse JSON requests

// Define the /bfhl endpoint
app.post('/bfhl', (req, res) => {
  // TO DO: Implement the logic to process the input data here
  res.json({}); // Return an empty response for now
});

app.get('/bfhl', (req, res) => {
  res.json({ operation_code: 1 }); // Return the hardcoded response
});

// Start the server
const port = 3001;
app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});
app.get('/', (req, res) => {
  res.send('Welcome to my server!');
});