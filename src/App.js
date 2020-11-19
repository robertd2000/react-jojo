import './App.css';
import Clock from './component/clock';
import Header from './component/header'
import Logo from './component/logo';
import Parts from './component/parts';
import Posts from './component/posts';
import Title from './component/title';
function App() {
  return (
    <div className="App">
      <Header/>
      <Logo/>
      <Parts/>
      <Clock/>
      <Posts/>
      <Title text={'Главные герои JoJo Bizzare Adventure'}/>
    </div>
  );
}

export default App;
