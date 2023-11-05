const express = require('express');
const feedController = require('../controllers/feed');
const { exec } = require('child_process');

const router = express.Router();

// NOTE: This feature needs a separate server to handle the task, like Redis or AWS to separate services.
router.get('/scrap', async (req, res, next) => {
  res.setHeader('Content-Type', 'application/json');

  const child = exec('npm run scrap', (error, stdout, stderr) => {
    console.log(stdout, stderr, error);
    if (error) {
      console.error(`Error running the command: ${error.message}`);
      return res.status(500).send('Internal Server Error');
    }

    if (stderr) {
      console.error(`Command stderr: ${stderr}`);
      // You can handle the stderr output as needed
    }

    console.log(`Command stdout: ${stdout}`);
    // You can handle the stdout output as needed

    // Continue with the next middleware or send a response
    res.json({ message: 'Products Extracted!' });
  });

  // Handle termination of the child process (optional)
  child.on('exit', (code) => {
    console.log(`Child process exited with code ${code}`);
  });

  res.redirect('/');
});

module.exports = router;
