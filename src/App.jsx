import './App.css';
import Navbar from './components/navbar';
import SideBar from './components/SideBar';
import { Outlet } from 'react-router-dom'
import { Provider } from 'react-redux';
import store from './redux/store'
 



function App() {
  return (
    <Provider store={store}>
      <div className="App">
      <Navbar/>
      <div className="container">
      <SideBar/>
      <Outlet/>
      </div>
    </div>
    </Provider>
    
  );
}

export default App;
