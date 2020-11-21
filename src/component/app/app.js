import { BrowserRouter as Router, Route } from 'react-router-dom';
import Clock from '../clock';
import Header from '../header'
import Logo from '../logo';
import Parts from '../parts';
import Posts from '../posts';
import Protagonists from '../protagonists';


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
        <Route exact path='/' />
        <Route exact path='/parts' component={Parts} />
        <Route exact path='/characters' component={Protagonists} />
        <Route exact path='/comments' component={Posts} />
        <Clock/>


      </Router>
      
    </div>
  );
}

export default AppJS;
