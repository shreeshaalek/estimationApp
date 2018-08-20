import reactDOM from "react-dom";
import React from "react";
import ProJPage from './pages/projectTasks';
import { Provider } from 'react-redux'
import storeFactory from './redux/store'
import routes  from './router'

let domContainer = document.getElementById('root')
const store = storeFactory({});

reactDOM.hydrate(
	<Provider store={store}>
	  {routes}
	</Provider>, domContainer);