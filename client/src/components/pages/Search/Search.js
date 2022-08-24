import { useSelector, useDispatch } from 'react-redux';
import { getAllAds, searchAd } from '../../../redux/adsRedux';
import { useParams } from 'react-router';
import { useEffect } from 'react';
import { API_URL } from '../../../config';
import CardBox from '../../features/CardBox/CardBox';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
const Search = () => {
  const { searchPhrase } = useParams();
  const dispatch = useDispatch();
  const ads = useSelector(getAllAds);

  useEffect(() => {
    const options = {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
      credentials: 'include',
    };
    fetch(`${API_URL}api/ads/search/${searchPhrase}`, options)
      .then((res) => {
        dispatch(searchAd(res.data));
      })
      .catch((err) => {
        console.log(err);
      });
  });

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
