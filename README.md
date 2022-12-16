# Google Cloud Functions with Node.js and Express

## Run locally

You will need Node and `npm` installed locally in order to be able to run the app. First, install node dependencies

    npm install

To run the app

    node index.js

The Express app will now be running on port 5555 and can be accessed on http://localhost:5555. The following endpoints will be accessible:

    http://localhost:5555/users
    http://localhost:5555/users/{userId}

## Deploy to Google Cloud

To deploy run

./deploy.sh

