/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './App';
import {name as appName} from './app.json';
import {store, persistor} from './src/Features/store';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
AppRegistry.registerComponent(appName, () => App);
