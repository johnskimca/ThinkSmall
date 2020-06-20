import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
} from 'react-router-dom';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';
import {
    faPaperPlane, faBars, faList, faMapMarkedAlt,
} from '@fortawesome/free-solid-svg-icons';
import { connect } from 'react-redux';
import Home from './components/Home';
<<<<<<< HEAD
import Form from './components/Form/Form';
<<<<<<< HEAD
import Inbox from './components/inbox/Inbox';
import List from './components/List';
=======
=======
import BusinessForm from './components/Form/BusinessForm';
import RequestForm from './components/Form/RequestForm';
>>>>>>> eddcf3769b5ce0f7815a06ab0066f90b41227640
import VolunteerForm from './components/Form/VolunteerForm';
import Inbox from './components/Inbox/Inbox';
import BusinessesList from './components/BusinessesList';
import VolunteersList from './components/VolunteersList';
>>>>>>> 2a9f6c74539f3139f820c54e95748e0e2fae6b6f
import NavBar from './components/NavBar/NavBar';
import './App.css';
import Maps from './components/Maps';

library.add(fab, faPaperPlane, faBars, faList, faMapMarkedAlt);

function App({ switchState }) {
    return (
        <Router>
            <Switch>
                <Route path="/businesses">
                    <NavBar userType="business" />
                    {switchState ? <Maps /> : <BusinessesList />}
                    <BusinessForm />
                    <RequestForm />
                </Route>
                <Route path="/volunteers">
                    <NavBar userType="volunteer" />
                    <VolunteersList />
                    <VolunteerForm />
                </Route>
                <Route path="/inbox">
                    <Inbox />
                </Route>
                <Route path="*">
                    <NavBar />
                    <Home />
                </Route>
            </Switch>
        </Router>
    );
}

const mapStateToProps = ({ switchState }) => ({ switchState });

export default connect(mapStateToProps)(App);
