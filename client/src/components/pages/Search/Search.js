import { useSelector, useDispatch } from 'react-redux';
import {
  getAllAds,
  searchAd,
  updateAds,
  fetchAdvertBySearchPhrase,
} from '../../../redux/adsRedux';
import { useParams } from 'react-router';
import { useEffect } from 'react';

import CardBox from '../../features/CardBox/CardBox';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Search = () => {
  const { searchPhrase } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAdvertBySearchPhrase(searchPhrase));
  }, []);

  return (
    <Row xs={1} md={4} className='g-3 my-5'>
      {ads.map((ad) => (
        <Col key={ad._id}>
          <CardBox {...ad} />
        </Col>
      ))}
    </Row>
  );
};

export default Search;
