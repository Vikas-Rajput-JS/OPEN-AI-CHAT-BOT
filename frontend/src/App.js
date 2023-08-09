import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import SignUp from './Components/SignUp';
import Chat from './Components/Chat';
import Welcome from './Components/Welcome';
import LogIn from './Components/LogIn';

function App() {
  return (
    <div className="App w-[100%] h-[100vh] bg-slate-500">
 <BrowserRouter>
 <Routes>
  <Route path='/' element={<SignUp/>}/>
  <Route path='/Welcome' element={<Welcome/>}/>
  <Route path='/Chat' element={<Chat/>}/>
  <Route path='/Login' element={<LogIn/>}/>
 </Routes>
 </BrowserRouter>
    </div>
  );
}

export default App;
