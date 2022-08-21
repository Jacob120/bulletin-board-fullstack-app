import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import CardBox from '../../features/CardBox/CardBox';
import { useSelector } from 'react-redux';
import { getAllAds } from '../../../redux/adsRedux';
import { getUser } from '../../../redux/usersRedux';
import { Link } from 'react-router-dom';

const Home = () => {
  const ads = useSelector(getAllAds);
  const user = useSelector(getUser);
  console.log(ads);
  return (
    <div>
      <Row className='justify-content-end mt-3'>
        <Col>
          <h1 className='mb-3'> Advertisements</h1>
        </Col>
        <Col className='d-flex flex-row-reverse p-2'>
          {user && (
            <Link to='/ad/add'>
              <Button variant='primary'>Add new advertisement</Button>{' '}
            </Link>
          )}
        </Col>
      </Row>
      <Row xs={1} md={4} className='g-3 '>
        {ads.map((ad) => (
          <Col key={ad._id}>
            <CardBox {...ad} />
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default Home;
