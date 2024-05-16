<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
<!--   <title>🏠 Banglore Home Price Prediction 📈</title> -->
</head>
<body>
  <h1 align="center">🏠 Banglore Home Price Prediction 📈</h1>

  <p align="center">A Flask application for predicting home prices in Bangalore, India.</p>

  <p align="center">
    <a href="#introduction">Introduction</a> •
    <a href="#installation">Installation</a> •
    <a href="#usage">Usage</a> •
    <a href="#api-endpoints">API Endpoints</a> •
    <a href="#technologies-used">Technologies Used</a> •
    <a href="#contributing">Contributing</a> 
  </p>

  ---

  <h2>🚀 Introduction</h2>

  <p>Banglore Home Price Prediction is a Flask application that predicts home prices based on various factors such as square footage, number of bedrooms and bathrooms, location and for that I have used ML algorithms.</p>

  <h2>💻 Installation</h2>

  <p>To run this Flask application locally, follow these steps:</p>

  <ol>
    <li>Clone this repository to your local machine.</li>
    <li>Install the required dependencies using <code>pip install -r requirements.txt</code>.</li>
    <li>Run the Flask server using <code>python server.py</code>.</li>
    <li>Access the application in your web browser at <code>http://localhost:5000</code>.</li>
  </ol>

  <h2>📝 Usage</h2>

  <p>Once the Flask server is running, you can access the application in your web browser. Enter the required details in the input fields and dropdown menu, then click the "Estimate Price" button to get the predicted home price.</p>

  <h2>🛠️ API Endpoints</h2>

  <h3>POST /predict_home_price</h3>

  <p>Predicts home price based on input parameters.</p>

  <p>Parameters:</p>
  <ul>
    <li><code>total_sqft</code>: Total square footage of the property</li>
    <li><code>location</code>: Location of the property</li>
    <li><code>bhk</code>: Number of bedrooms</li>
    <li><code>bath</code>: Number of bathrooms</li>
  </ul>

  <p>Response:</p>
  <pre><code>
  {
    "estimated_price": 7500000
  }
  </code></pre>

  <h2>🛠️ Technologies Used</h2>

  <ul>
    <li>Flask</li>
    <li>Python</li>
    <li>JavaScript</li>
    <li>HTML</li>
    <li>CSS</li>
    <li>jQuery</li>
  </ul>

  <h2>🤝 Contributing</h2>

  <p>Contributions are welcome! If you find any issues or have suggestions for improvements, please open an issue or submit a pull request.</p>

</body>
</html>
