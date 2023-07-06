import './sidebar.scss';
import DashboardIcon from '@mui/icons-material/Dashboard';
import AirplaneTicketOutlinedIcon from '@mui/icons-material/AirplaneTicketOutlined';
import { Link } from 'react-router-dom';

const Sidebar = () => {
  return (
    <div className='sidebar'>
      <div className='top'>
        <img
          src={process.env.PUBLIC_URL + '/logo.svg'}
          height={'30px'}
          alt='logo'
        />

        <Link to='/' style={{ textDecoration: 'none' }}>
          <span className='logo'>Ticket App</span>
        </Link>
      </div>
      <hr />
      <div className='center'>
        <ul>
          <p className='title'>MAIN</p>
          <Link to='/' style={{ textDecoration: 'none' }}>
            <li>
              <DashboardIcon className='icon' />
              <span>Home</span>
            </li>
          </Link>
          <p className='title'>Ticket</p>
          <Link to='/tickets/create' style={{ textDecoration: 'none' }}>
            <li>
              <AirplaneTicketOutlinedIcon className='icon' />
              <span>Create Tickets</span>
            </li>
          </Link>
          <p className='title'>All Ticket</p>
          <Link to='/tickets' style={{ textDecoration: 'none' }}>
            <li>
              <AirplaneTicketOutlinedIcon className='icon' />
              <span>All Tickets</span>
            </li>
          </Link>
        </ul>
      </div>
    </div>
  );
};

export default Sidebar;
