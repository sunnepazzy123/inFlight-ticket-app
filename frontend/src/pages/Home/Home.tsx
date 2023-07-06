import React from 'react';
import './home.scss';
import { Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();

  const handlerButton = () => {
    navigate('/tickets/create');
  };
  return (
    <div className='App'>
      <header className='App-header'>
        <img
          src={process.env.PUBLIC_URL! + '/logo.svg'}
          className='App-logo'
          alt='logo'
        />
        <p>Welcome to the Client Ticket Task!</p>
        <p>
          <b>Sunday Odibo</b>
        </p>
        <span className='App-span'>
          I did a bit of improvision but still follow the mockup
        </span>

        <Button
          onClick={handlerButton}
          color='primary'
          style={{ margin: '10px' }}
        >
          Click Me
        </Button>
      </header>
    </div>
  );
};

export default Home;
