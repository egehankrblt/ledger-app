const express = require('express');
const bodyParser = require('body-parser');
const { createAccountsTable } = require('./config/db');
const userRoutes = require('./routes/userRoutes');
const errorHandler = require('./errorMiddleware'); // Import the error handling middleware

const app = express();

// Middleware
app.use(bodyParser.json());

// Routes
app.use('/api/accounts', userRoutes);

// Error handling middleware
app.use(errorHandler); // Use the error handling middleware

// Start server
const PORT = process.env.PORT || 3001;
app.listen(PORT, async () => {
  console.log(`Server is running on port ${PORT}`);
  await createAccountsTable();
});
