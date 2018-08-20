import reactDOM from "react-dom";
import React from "react";
import HelloMessage from './pages/projectTasks';
import { Provider } from 'react-redux'
import storeFactory from './redux/store'

let domContainer = document.getElementById('root')
const store = storeFactory({});

reactDOM.hydrate(
	<Provider store={store}>
	   <HelloMessage/>
	</Provider>, domContainer);