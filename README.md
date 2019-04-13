# calgary-weather

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app). It consumes the [Open Weather App API](https://openweathermap.org/).
The application enables you view the weather in calgary every three hours for two to three consecutive days (2 - 3) days.


## Steps to setup the app
In your terminal run `git clone https://github.com/fmustapha/calgary-weather.git`

Next, change directory to the app folder.

Rename the `.sample.env` file to `.env` and set the API key with your API key from [Open Weather App API](https://openweathermap.org/).

Run `npm install` to install app dependencies

Run `npm test` to run app test

Run `npm start` to start the app

## Read additional notes on Create React App below
## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: https://facebook.github.io/create-react-app/docs/code-splitting

### Analyzing the Bundle Size

This section has moved here: https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size

### Making a Progressive Web App

This section has moved here: https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app

### Advanced Configuration

This section has moved here: https://facebook.github.io/create-react-app/docs/advanced-configuration

### Deployment on Heroku

- Sign up for Heroku
    Follow the instructions on the site to setup a new account if you have none. Ensure to confirm your account in your email box to activate your account.
- Install Heroku CLI. Follow instructions here to install Heroku for your operating system.
- Enter the following command in your terminal to verify that you have correctly installed Heroku on your computer.
    `heroku --version`
    You should see your heroku version like so --> heroku/7.22.1 darwin-x64 node-v11.9.0
- Create Heroku git repository
    Go to your terminal and navigate to the application folder.
    On your terminal run the following commands:
        `heroku login`
        `heroku create calgary-weather --buildpack mars/create-react-app`
        `heroku config:set REACT_APP_KEY=”your api key”`
        `heroku config:set REACT_APP_CITY_ID=”Calgary city id - 5913490”`
        `git remote -v (confirm that a remote named heroku has been set for your app)
        `git push heroku develop:master (this deploys the apps develop branch to the master branch on heroku).

### `npm run build` fails to minify

This section has moved here: https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify

