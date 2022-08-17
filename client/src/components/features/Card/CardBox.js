import Card from 'react-bootstrap/Card';
import styles from './CardBox.module.scss';
import Button from 'react-bootstrap/Button';

const CardBox = () => {
  return (
    <Card className={styles.card_wrapper}>
      <Card.Img variant='top' src='client\src\uploads\Example.jpg' />
      <Card.Body>
        <Card.Title>Price: 25$</Card.Title>
        <Card.Text className='mb-1'>
          <b>Localization: Kielce, Polska</b>
        </Card.Text>
        <Button variant='outline-info'>Placeholder</Button> {/* </Link> */}
      </Card.Body>
    </Card>
  );
};

export default CardBox;
