import logo from './Umine-logo.png';
import './App.css';

//importamos componentes.
import CompShowTasks from './task/ShowTasks';
import CompEditTask from './task/EditTask';
import CompCreateTask from './task/CreateTask';
import CompRegister from './Register';
import { BrowserRouter, Route, Routes } from 'react-router-dom';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={ <CompRegister /> } />
            <Route path='/create' element={ <CompCreateTask />} />
            <Route path='/edit/:id' element={ <CompEditTask />} />
          <Route path='/task' element={ <CompShowTasks /> } />
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
