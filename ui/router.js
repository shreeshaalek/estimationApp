import { Router, Route, BrowserRouter } from 'react-router-dom';
import React from "react";
import ProJPage from './pages/projectTasks';
import studPage from './pages/studListPage';

const routes = (
    <BrowserRouter>
        <Route path="/" component={ProJPage}>
        </Route>
        {/* <Route path="/studListPage" component={studPage}/>
        <Route path="/projPage" component={ProJPage}/> */}
    </BrowserRouter>
);

export default routes;