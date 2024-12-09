import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../actions/authActions';

const Dashboard = () => {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);

  return (
    <div>
      <h1>Welcome, {user?.name || 'User'}!</h1>
      <button onClick={() => dispatch(logout())}>Logout</button>
    </div>
  );
};

export default Dashboard;
