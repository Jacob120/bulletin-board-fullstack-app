import React from 'react';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import CardBox from '../../features/Card/CardBox';

const Home = () => {
  return (
    <div>
      <Row className='justify-content-end mt-3'>
        <Col>
          <h1> Bulletin Board</h1>
        </Col>
        <Col className='d-flex flex-row-reverse p-2'>
          {/* <Link to="/post/add"> */}
          <Button variant='outline-info'>Placeholder</Button> {/* </Link> */}
        </Col>
      </Row>
      <Row xs={1} md={4} className='g-3 '>
        <Col>
          <CardBox />
        </Col>{' '}
        <Col>
          <CardBox />
        </Col>{' '}
        <Col>
          <CardBox />
        </Col>{' '}
        <Col>
          <CardBox />
        </Col>{' '}
        <Col>
          <CardBox />
        </Col>
      </Row>
    </div>
  );
};

export default Home;
