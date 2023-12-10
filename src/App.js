import './App.css';
import { BrowserRouter,Route, Routes } from 'react-router-dom';
import SignInComponent from './component/sign.component';
import TimerComponent from './component/timer.component';

function App() {
  return (
    <div className=''>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<SignInComponent/>}/>
        <Route path='/timer' element={<TimerComponent/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
