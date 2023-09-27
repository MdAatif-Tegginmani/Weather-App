import './App.css';
import Navbar from './components/Navbar';
import SearchBar from './components/SearchBar';
import Card from './components/Card';

function App() {
  const cardData = {
    title: 'This is the title of the card',
    description: 'This is the description of the card. It can be as long or as short as you want.',
    image: 'https://user-images.githubusercontent.com/10005174/206100272-0f288279-25a6-43f0-b759-01609f849d88.png',
  };
  return (
    <>
    <div className="app">
    <Navbar></Navbar>
    <SearchBar></SearchBar>
    <Card {...cardData} />

    </div>
    </>
  );
}

export default App;
