import React from 'react'

import { 
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from 'react-router-dom';
import PagesTweets from './Tweets/Search/Search'

const Root = () => {
    return (
        <Router>
            {/* Éo switch que faz match com as rotas */}
            <Switch>
                <Route path="/" component={PagesTweets}/>                
            </Switch>
        </Router>
    );
};

export default Root;