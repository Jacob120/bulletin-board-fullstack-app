import React from 'react';
import { API_URL } from '../../../config';
import { logOut } from '../../../redux/usersRedux';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Logout = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    const options = {
      method: 'DELETE',
    };

    fetch(`${API_URL}auth/logout`, options).then(() => {
      dispatch(logOut);
      setTimeout(() => {
        navigate('/');
      }, 3000);
    });
  }, [dispatch]);

  return null;
};

export default Logout;
