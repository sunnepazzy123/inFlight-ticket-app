import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home/Home';
import Sidebar from './components/sidebar/Sidebar';
import Tickets from './pages/Ticket/Tickets/Tickets';
import CreateTicket from './pages/Ticket/Create/CreateTicket';

function App() {
  return (
    <div>
      <BrowserRouter>
        <div style={{ display: 'flex' }}>
          <Sidebar />
          <div style={{ flex: 6 }}>
            <Routes>
              <Route path='/'>
                <Route index element={<Home />} />
              </Route>
              <Route path='/tickets'>
                <Route index element={<Tickets />} />
                <Route path='create' element={<CreateTicket />} />
                <Route path=':id' element={<Tickets />} />
              </Route>
            </Routes>
          </div>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
