# 1. Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

### 1.0.1. `Todo before building or running the app`

Create a `.env.local` file in the src directory.
Store your Google API key here. 
```
REACT_APP_API_KEY=YOUR_API_KEY
```
The API Key should have access to Youtube Data API

## 1.1. Available Scripts

In the project directory, you can run:

### 1.1.1. `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### 1.1.2. `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

# 2. Future enhancements/ potential bugs

Need to update the fetch request to handle the case where there a more than 50 results returned. Need to use `nextPageToken` which is returned as a respnse from the api request.
