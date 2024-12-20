#
Trending News Articles
This is a full-stack application that fetches trending news from the News API and includes a backend with CRUD functionality.

Use Javascript, React, Axios, CSS
News API: Fetches trending news articles. request for the API key

 How to run the application
Install Node.js and npm install all the necessary dependencies


Set up the backend API endpoint to point to the  local backend. That is change the local host address to the deployed link address of the backend. (Replace the local API base URL (e.g., http://localhost:5000) with the public URL of your deployed back-end API (e.g., https://your-backend-app.onrender.com)).

To run the application locally, navigate to the frontend directory and run npm start


Deployment
Push the code to your GitHub repository.
Go to Render sign up or signin.
Click on "New" and select "static site".
Choose your backend GitHub repository.
Set the build command to npm install and npm run build.
Link your MongoDB database (you can use MongoDB Atlas or another MongoDB service).
Set environment variables: 
NEWS_API_KEY: Your News API key.
MONGO_URI: The connection string for your MongoDB database.
Finally click deploy





