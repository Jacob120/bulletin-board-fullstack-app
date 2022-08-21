import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { AdForm } from '../AdForm/AdForm';

export const EditAdForm = () => {
  const dispatch = useDispatch();
  let navigate = useNavigate();
  const { adId } = useParams();

  return <div>EditAdForm</div>;
};
