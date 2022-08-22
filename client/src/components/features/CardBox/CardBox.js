import Card from 'react-bootstrap/Card';
import styles from './CardBox.module.scss';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';
import { IMAGES_URL } from '../../../config';

const CardBox = ({ title, price, localization, image, _id }) => {
  return (
    <Card className={styles.card_wrapper}>
      <Card.Img
        variant='top'
        src={IMAGES_URL + image}
        className={styles.card_image}
      />
      <Card.Body>
        <div className={styles.body}>
          <Card.Title>Price: {price}$</Card.Title>
          <Card.Subtitle className='my-3'>
            <b>{title}</b>
          </Card.Subtitle>
          <Card.Text className='mb-3'>
            <b>Localization: {localization}</b>
          </Card.Text>
        </div>
        <Link to={'/ad/' + _id}>
          <Button className={styles.button} variant='primary'>
            Read more
          </Button>
        </Link>
      </Card.Body>
    </Card>
  );
};

export default CardBox;
