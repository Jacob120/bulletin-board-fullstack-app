import Home from './components/pages/Home/Home';
import Header from './components/views/Header';
import Container from 'react-bootstrap/Container';

const App = () => {
  return (
    <main>
      <Header />
      <Container>
        <Home />
      </Container>
    </main>
  );
};

export default App;
