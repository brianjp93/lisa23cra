import {
    BrowserRouter as Router,
    Switch,
    Route,
} from 'react-router-dom'
import Home from './pages/home'
import LisaIsDumb from './pages/lisaIsDumb'
import {pages} from './pages/pageList'
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
                    <Route path='/dumb' component={LisaIsDumb} />
                </Switch>
            </div>
        </Router>
    );
}

export default App;
