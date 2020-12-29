import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';


import Periodic from './Components/periodic';
import DetailsPage from './Components/detailsPage';

function RouterPage() {
    return (
        <Router>
            <React.Fragment>
                <Route path="/" exact strict component={Periodic} />
                <Route path="/details" exact strict component={DetailsPage} />
            </React.Fragment>
        </Router>
    )
}

export default RouterPage
