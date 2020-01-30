import React, { Component, Fragment } from 'react';
import { Container } from 'semantic-ui-react';
import { Route } from 'react-router-dom';

import EventDashboard from '../../features/Event/EventDashboard/EventDashboard';
import NavBar from '../../features/nav/NavBar/NavBar';
import HomePage from '../../features/Home/HomePage';
import EventDetailedPage from '../../features/Event/EventDetailed/EventDetailedPage';
import PeopleDashboard from '../../features/User/PeopleDashboard/PeopleDashboard';
import SettingsDashboard from '../../features/User/Settings/SettingsDashboard';
import UserDetailedPage from '../../features/User/UserDetailed/UserDetailedPage';
import EventForm from '../../features/Event/EventForm/EventForm';

class App extends Component {
    render() {
        return (
            <Fragment>
                <Route exact path="/" component={HomePage} />
                <Route
                    path="/(.+)"
                    render={() => (
                        <Fragment>
                            <NavBar />
                            <Container className="main">
                                <Route
                                    path="/events"
                                    component={EventDashboard}
                                />
                                <Route
                                    path="/events/:id"
                                    component={EventDetailedPage}
                                />
                                <Route
                                    path="/people"
                                    component={PeopleDashboard}
                                />
                                <Route
                                    path="/profile/:id"
                                    component={UserDetailedPage}
                                />
                                <Route
                                    path="/settings"
                                    component={SettingsDashboard}
                                />
                                <Route
                                    path="/createEvent"
                                    component={EventForm}
                                />
                            </Container>
                        </Fragment>
                    )}
                />
            </Fragment>
        );
    }
}

export default App;
