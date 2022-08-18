import { getAdById } from '../../../redux/adsRedux';
import { useSelector, useDispatch } from 'react-redux';
import { useParams, Link, Navigate } from 'react-router-dom';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import styles from './AdPage.module.scss';

const AdPage = () => {
  const dispatch = useDispatch();
  const { adId } = useParams();
  const adData = useSelector((state) => getAdById(state, adId));
  console.log(adData);
  return (
    <div>
      <Row className='d-flex justify-content-center mt-5'>
        <Col xs='12' lg='5'>
          <Card className={styles.card_wrapper}>
            <Card.Body>
              <Card.Title className='mb-3'>Price: {adData.price}$</Card.Title>
              <Card.Subtitle className='mb-3'>
                <b>Title: {adData.title}</b>
              </Card.Subtitle>
              <Card.Text className='mb-3'>
                <b>Localization: {adData.localization}</b>
              </Card.Text>
              <Card.Text>{adData.description}</Card.Text>
              <Card.Text>Published: {adData.date}</Card.Text>
              <Card.Text>Author: Placeholder</Card.Text>
              <Card.Text>Avatar</Card.Text>
              <Card.Text>Phone number: </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col xs='12' lg='4'>
          {/* <Link to={'/edit/' + adId}> */}
          <Button variant='outline-info' className='m-2'>
            Edit
          </Button>
          {/* </Link> */}
          <Button variant='outline-danger'>Delete</Button>
        </Col>
      </Row>
    </div>
  );
};

export default AdPage;
