import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Clock from './component/clock';
import Header from './component/header'
import Logo from './component/logo';
import Parts from './component/parts';
import Posts from './component/posts';
import Protagonists from './component/protagonists';
import Title from './component/title';
import PartsPage from './component/pages/pageParts'
import AppJS from './component/app'

function App() {
  return (
    <AppJS/>
  )
}

// function App() {
//   return (
//     <div className="App">
//       <Router>
//         <Header/>
//         <Logo/>
//         <Parts/>
//         <Clock/>
//         <Posts/>
//         <Title text={'Главные герои JoJo Bizzare Adventure'}/>
//         <Protagonists/>
//         <Switch>
//           <Route exact path='/' />
//           <Route exact path='/parts' component={PartsPage} />

//         </Switch>
//       </Router>
      
//     </div>
//   );
// }

export default App;
