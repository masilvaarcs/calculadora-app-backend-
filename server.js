const express = require('express');
const cors = require('cors');
const app = express();

// Configure CORS
// Only allow requests from the same domain and a specific domain
const corsOptions = {
  origin: ['http://localhost:3000'],
};

app.use(cors(corsOptions));
app.use(express.json());

app.post('/calculate', (req, res) => {
  const { num1, num2, operation } = req.body;
  let result;

  switch (operation) {
    case 'add':
      result = num1 + num2;
      break;
    case 'subtract':
      result = num1 - num2;
      break;
    case 'multiply':
      result = num1 * num2;
      break;
    case 'divide':
      result = num1 / num2;
      break;
    default:
      result = 'Invalid operation';
  }

  res.json({ result });
});

// Iniciar o servidor
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});