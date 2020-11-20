import { BrowserRouter as Router, Link, Route, Switch } from 'react-router-dom';
import Clock from '../clock';
import Header from '../header'
import Logo from '../logo';
import Parts from '../parts';
import Posts from '../posts';
import Protagonists from '../protagonists';
import Title from '../title';
import PartsPage from '../pages/pageParts'
import {Smt} from './smt'

const Contacts = () => (
  <div>
    <h2>Contacts</h2>
  </div>
);

function AppJS() {
  return (
    <div className="App">
      <Router>
        <Header/>
        <Logo/>
        <Parts/>
        <Clock/>
        <Posts/>
        <Title text={'Главные герои JoJo Bizzare Adventure'}/>
        <Protagonists/>
        {/* <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/contacts">Contacts</Link></li>
        </ul>
        <Switch>
          <Route exact path='/' />
          <Route exact path='/parts' component={PartsPage} />
          <Route exact path='/smt' component={Smt} />
          <Route exact path="/contacts" component={Contacts} />

        </Switch> */}
      </Router>
      
    </div>
  );
}

export default AppJS;
