import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
} from 'react-router-dom'
import { useState } from 'react'
import Home from './pages/home'
import {pages, MAXPAGE} from './pages/pageList'
import 'bootstrap/dist/css/bootstrap.css'
import './App.css'


function PageRenderer(props) {
    const id = parseInt(props.match.params.id)
    const Comp = pages[id]
    return <Comp match={props.match} />
}

function App() {
    return (
        <Router>
            <div>
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route path="/page/:id" component={PageRenderer} />
                </Switch>
            </div>
        </Router>
    );
}

export default App;
