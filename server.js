const express = require('express');
const cors = require('cors');  
const bodyParser = require('body-parser');
const path = require('path');
const compression = require('compression');
const enforce = require('express-sslify');

if(process.env.NODE_ENV !== 'production') require('dotenv').config();

const app = express();
const port = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(cors());

// Payment route
const configureRoutes = require('./routes');
configureRoutes(app);

if (process.env.NODE_ENV === 'production') {
  // use gzip compression and chunk files
  app.use(compression());
  // sslify
  app.use(enforce.HTTPS({ trustProtoHeader: true })); 
  // Serve any static files
  app.use(express.static(path.join(__dirname, 'client/build')));
  // Handle React routing, return all requests to React app
  app.get('*', function(req, res) {
    res.sendFile(path.join(__dirname, 'client/build', 'index.html'))
  })
}

// Add routes to service-workers
app.get('/service-worker.js', (req, res) => {
  res.sendFile(path.resolve(__dirname, '..', 'build', 'service-worker.js'));
});

app.listen(port, error => {
  if (error) throw error;
  console.log(`Server running on port ${port}`);
});




