import './App.css';
import { Route, Routes, useLocation } from 'react-router-dom';
import { useMediaQuery } from 'usehooks-ts';
import { AnimatePresence } from 'framer-motion';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Events from './pages/Events';
import Chapters from './pages/Chapters';
import Contact from './pages/Contact';

/* Notes 4/14:
- TODO:
  1. Make compatible with mobile
  2. Build home page carousel
  3. Proper current chapters -- animated cards
  4. Build events
  5. Animations
  6. Email.js experiment
*/

/* Notes 4/19:
- TODO (making site responsive):
  1. home page
  2. chapters page
  3. navbar
*/

/*Making this responsive. Issues:
  - about us button on home page
*/

function App() {
  const location = useLocation();
  const locationArr = location.pathname?.split('/') ?? [];
  //testing only
  console.log(locationArr)


  const small = useMediaQuery('(max-width: 800px)');
  return (
    <AnimatePresence mode="wait">
      <div className="App">
        <Navbar></Navbar>
        <Routes location={location} key={locationArr[1]}>
          <Route exact path="/" element={<Home></Home>} />
          <Route exact path="/about" element={<About></About>} />
          <Route exact path="/chapters" element={<Chapters></Chapters>} />
          <Route exact path="/events" element={<Events></Events>} />
          <Route exact path="/contact-us" element={<Contact></Contact>} />
        </Routes>
        <Footer></Footer>
      </div>
    </AnimatePresence>
  );
}

export default App;
