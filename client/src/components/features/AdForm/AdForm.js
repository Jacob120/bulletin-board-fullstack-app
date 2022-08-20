import React from 'react';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Button from 'react-bootstrap/Button';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';

export const AdForm = ({ action, actionText, ...props }) => {
  let navigate = useNavigate();
  const id = props.id;
  const [price, setPrice] = useState(props.price || '');
  const [title, setTitle] = useState(props.title || '');
  const [localization, setLocalization] = useState(props.localization || '');
  const [description, setdescription] = useState(props.description || '');
  const [date, setDate] = useState(props.date || '');
  const [src, setSrc] = useState(props.src || '');
  const [author, setAuthor] = useState(props.author || '');
  const [phoneNumber, setPhoneNumber] = useState(props.phoneNumber || '');

  const {
    register,
    handleSubmit: validate,
    formState: { errors },
  } = useForm();

  const handleSubmit = () => {
    if (description && date && description !== '<p><br></p>') {
      action({
        price,
        title,
        author,
        date,
        description,
        localization,
        id,
        src,
        phoneNumber,
      });
      navigate('/');
    }
  };

  return (
    <Form className='col-12 col-sm-3 mx-auto mt-3' onSubmit={handleSubmit}>
      <h1 className='my-4'>Placeholder</h1>

      <Form.Group className='mb-3' controlId='formPrice'>
        <Form.Label>Price</Form.Label>
        <Form.Control
          {...register('price', { required: true })}
          type='text'
          value={price}
          placeholder='Enter price'
          onChange={(e) => setPrice(e.target.value)}
        />
        {errors.price && (
          <small className='d-block form-text text-danger mt-2'>
            This field is required and accept only numbers.
          </small>
        )}
      </Form.Group>

      <Form.Group className='mb-3' controlId='formTitle'>
        <Form.Label>Title</Form.Label>
        <Form.Control
          {...register('title', {
            required: true,
            minLength: 10,
            maxLength: 50,
          })}
          value={title}
          type='text'
          placeholder='Enter title'
          onChange={(e) => setTitle(e.target.value)}
        />
        {errors.title && (
          <small className='d-block form-text text-danger mt-2'>
            This field is required and has to be at between 10 to 50 characters
            long.
          </small>
        )}
      </Form.Group>
    </Form>
  );
};
