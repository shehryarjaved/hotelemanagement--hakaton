import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Login from '../containers/Login';
import Signup from '../containers/Signup';
import Home from '../containers/Home';
import Booknow from '../components/Booknow'




function AppRouter() {
    return (
        <Router>
            <Switch>
            <Route exact path="/" component={Home} />
                <Route exact path="/login" component={Login} />
                <Route exact path="/signup" component={Signup} />
                <Route exact path="/user/:id" component={Home} />
                <Route exact path="/Booknow" component={Booknow} />
                
            </Switch>
        </Router>
    )
}

export default AppRouter;