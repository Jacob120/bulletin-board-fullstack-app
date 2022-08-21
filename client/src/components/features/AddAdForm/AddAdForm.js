import React from 'react';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { AdForm } from '../AdForm/AdForm';
import { addAd } from '../../../redux/adsRedux';
import { API_URL } from '../../../config';

const AddAdForm = () => {
  const dispatch = useDispatch();
  let navigate = useNavigate();

  const handleSubmit = (ad) => {
    dispatch(addAd(ad));
    const options = {
      method: 'POST',
      body: ad,
    };
    fetch(`${API_URL}api/ads`, options);
    navigate('/');
  };

  return <AdForm action={handleSubmit} actionText='Add new advertisement' />;
};

export default AddAdForm;
