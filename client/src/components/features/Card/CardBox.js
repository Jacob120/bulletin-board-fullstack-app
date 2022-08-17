import Card from 'react-bootstrap/Card';
import styles from './CardBox.module.scss';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';

const CardBox = ({ title, price, localization, photo, _id }) => {
  return (
    <Card className={styles.card_wrapper}>
      <Card.Img variant='top' src='client\src\uploads\Example.jpg' />
      <Card.Body>
        <Card.Title>Price: {price}$</Card.Title>
        <Card.Subtitle className='mb-1'>
          <b>Title: {title}</b>
        </Card.Subtitle>
        <Card.Text className='mb-1'>
          <b>Localization: {localization}</b>
        </Card.Text>
        <Link to={'/ad/' + _id}>
          <Button variant='primary'>Read more</Button>
        </Link>
      </Card.Body>
    </Card>
  );
};

export default CardBox;
