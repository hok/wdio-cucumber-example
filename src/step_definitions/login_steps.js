import { Given } from 'cucumber';
import LoginPage from '../pages/login_page';

// The data can come several places. For example, environment variables,
// data file and usually shouldn't be hardcoded.
const userName = process.env.USER_EMAIL;
const password = process.env.USER_PASSWORD;

Given('the user is on the login page', function() {
  LoginPage.open();
});

Given('the user is logged in', function() {
  LoginPage.login(userName, password);
});
