/**
 * @format
 */

import {AppRegistry} from 'react-native';
// import App from './App';
// import App from './src/components/LoginPage';
import App from './src/components/main';
// import App from './src/components/search';

import {name as appName} from './app.json';

AppRegistry.registerComponent(appName, () => App);
