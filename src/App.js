import React, {useState} from 'react'
import { BrowserRouter as Router, Route, Routes, Navigate } from "react-router-dom";
import Login from './components/Login/Login';
import WorkerPanel from './components/WorkerPanel/WorkerPanel';
import AdminPanel from './components/WorkerPanel/AdminPanel';
import TableUser from './components/Table/TableUser';
import FormUser from './components/Form/FormUser';
import { UserLoginContext } from './components/LoginContext/LoginContext';
import { Button, Result } from 'antd';
import './App.css';

const App = () => {
  const [authenticated, isAuthenticated] = useState(false);
  const [admin, isAdmin] = useState(false);

  return (
    <>
  <UserLoginContext.Provider value={{authenticated, isAuthenticated, admin, isAdmin}}>
    {
      admin === false ? (
        <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route  path='/worker-panel' element={authenticated ? <WorkerPanel/> : <Navigate to="/"/>}>
            <Route path='rental' element={<TableUser title='Aktualne wypożyczenia'/>}/>
            <Route path="rent" element={<FormUser title='Wypożycz' buttonTitle='Wypożycz'/>} />
            <Route path="return" element={<TableUser title='Zwrot' buttonTitle='Zwrot'/>} />
            <Route path="service" element={<FormUser title='Serwis' buttonTitle='Serwis    '/>} />
            <Route path="sale" element={<h1>Sale</h1>} />
            <Route path="daily-report" element={<h1>Daily report</h1>} />
          </Route>
          <Route path='*' element={
          <Result
            status="404"
            title="404"
            subTitle="Sorry, the page you visited does not exist."
            extra={<Button type="primary" onClick={()=> window.location = '/'}>Back Home</Button>}
        />} />
        </Routes>
      </Router>
      ) : (
        <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route  path='/worker-panel-admin' element={authenticated ? <AdminPanel/> : <Navigate to="/"/>}>
            <Route path='rental' element={<TableUser title='Aktualne wypożyczenia'/>}/>
            <Route path="rent" element={<FormUser title='Wypożycz' buttonTitle='Wypożycz'/>} />
            <Route path="return" element={<TableUser title='Zwrot' buttonTitle='Zwrot'/>} />
            <Route path="service" element={<FormUser title='Serwis' buttonTitle='Serwis'/>} />
            <Route path="sale" element={<h1>Sale</h1>} />
            <Route path="daily-report" element={<h1>Daily report</h1>} />
            <Route path="New function" element={<h1>Nowa funkcja</h1>} />
          </Route>
          <Route path='*' element={
          <Result
            status="404"
            title="404"
            subTitle="Sorry, the page you visited does not exist."
            extra={<Button type="primary" onClick={()=> window.location = '/'}>Back Home</Button>}
        />} />
        </Routes>
      </Router>
      )
    }
  </UserLoginContext.Provider>
  </>
  )
}

export default App;
