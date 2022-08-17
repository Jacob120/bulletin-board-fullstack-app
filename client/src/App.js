import Home from './components/pages/Home/Home';
import AdPage from './components/pages/AdPage/AdPage';
import NotFound from './components/pages/NotFound/NotFound';
import Header from './components/views/Header';
import Container from 'react-bootstrap/Container';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { fetchData } from './redux/adsRedux';
import { Routes, Route } from 'react-router-dom';

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => dispatch(fetchData()), [dispatch]);

  return (
    <main>
      <Header />
      <Container>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/ad/:adId' element={<AdPage />} />
          {/* <Route path='/ads/:adId' element={<EditAdInfo />} />
        <Route path='/ads/add' element={<AddAdForm />} /> */}
          <Route path='*' element={<NotFound />} />
        </Routes>
      </Container>
    </main>
  );
};

export default App;
