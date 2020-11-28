import { STATE_LOGIN, STATE_SIGNUP } from '../components/AuthForm';
import GAListener from '../components/GAListener';
import { EmptyLayout, LayoutRoute, MainLayout } from '../components/Layout';
import PageSpinner from '../components/PageSpinner';
import AuthPage from '../pages/AuthPage';
import React from 'react';
import componentQueries from 'react-component-queries';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import '../styles/reduction.scss';

const AlertPage = React.lazy(() => import('../pages/AlertPage'));
const AuthModalPage = React.lazy(() => import('../pages/AuthModalPage'));
const BadgePage = React.lazy(() => import('../pages/BadgePage'));
const ButtonGroupPage = React.lazy(() => import('../pages/ButtonGroupPage'));
const ButtonPage = React.lazy(() => import('../pages/ButtonPage'));
const CardPage = React.lazy(() => import('../pages/CardPage'));
const ChartPage = React.lazy(() => import('../pages/ChartPage'));
const DashboardPage = React.lazy(() => import('../pages/DashboardPage'));
const DropdownPage = React.lazy(() => import('../pages/DropdownPage'));
const FormPage = React.lazy(() => import('../pages/FormPage'));
const InputGroupPage = React.lazy(() => import('../pages/InputGroupPage'));
const ModalPage = React.lazy(() => import('../pages/ModalPage'));
const ProgressPage = React.lazy(() => import('../pages/ProgressPage'));
const TablePage = React.lazy(() => import('../pages/TablePage'));
const TypographyPage = React.lazy(() => import('../pages/TypographyPage'));
const WidgetPage = React.lazy(() => import('../pages/WidgetPage'));


const getBasename = () => {
    return `/admindashboard/${process.env.PUBLIC_URL.split('/').pop()}`;
};

class Homeadmin extends React.Component {
    render() {
        return (
            <BrowserRouter basename={getBasename()}>
                <GAListener>
                    <Switch>
                        <LayoutRoute
                            exact
                            path="/admindashboard/login"
                            layout={EmptyLayout}
                            component={props => (
                                <AuthPage {...props} authState={STATE_LOGIN} />
                            )}
                        />
                        <LayoutRoute
                            exact
                            path="/admindashboard/signup"
                            layout={EmptyLayout}
                            component={props => (
                                <AuthPage {...props} authState={STATE_SIGNUP} />
                            )}
                        />

                        <MainLayout breakpoint={this.props.breakpoint}>
                            <React.Suspense fallback={<PageSpinner />}>
                                <Route exact path="/admindashboard" component={DashboardPage} />
                                <Route exact path="/admindashboard/login-modal" component={AuthModalPage} />
                                <Route exact path="/admindashboard/buttons" component={ButtonPage} />
                                <Route exact path="/admindashboard/cards" component={CardPage} />
                                <Route exact path="/admindashboard/widgets" component={WidgetPage} />
                                <Route exact path="/admindashboard/typography" component={TypographyPage} />
                                <Route exact path="/admindashboard/alerts" component={AlertPage} />
                                <Route exact path="/admindashboard/tables" component={TablePage} />
                                <Route exact path="/admindashboard/badges" component={BadgePage} />
                                <Route
                                    exact
                                    path="/admindashboard/button-groups"
                                    component={ButtonGroupPage}
                                />
                                <Route exact path="/admindashboard/dropdowns" component={DropdownPage} />
                                <Route exact path="/admindashboard/progress" component={ProgressPage} />
                                <Route exact path="/admindashboard/modals" component={ModalPage} />
                                <Route exact path="/admindashboard/forms" component={FormPage} />
                                <Route exact path="/admindashboard/input-groups" component={InputGroupPage} />
                                <Route exact path="/admindashboard/charts" component={ChartPage} />
                            </React.Suspense>
                        </MainLayout>
                        <Redirect to="/" />
                    </Switch>
                </GAListener>
            </BrowserRouter>
        );
    }
}

const query = ({ width }) => {
    if (width < 575) {
        return { breakpoint: 'xs' };
    }

    if (576 < width && width < 767) {
        return { breakpoint: 'sm' };
    }

    if (768 < width && width < 991) {
        return { breakpoint: 'md' };
    }

    if (992 < width && width < 1199) {
        return { breakpoint: 'lg' };
    }

    if (width > 1200) {
        return { breakpoint: 'xl' };
    }

    return { breakpoint: 'xs' };
};

export default componentQueries(query)(Homeadmin);
