import './App.css';
import Home from './pages/Home';
import About from "./pages/About"
import Work from './pages/Work';
import Price from './pages/Price';
import Single from './pages/Single';
import Review from './pages/Review';
import MealKits from './pages/MealKits';
import GetTouch from './pages/GetTouch';

function App() {
  return (
    <div className="App">
      <Home/>
      <About/>
      <Work/>
      <Price/>
      <Single/>
      <Review/>
      <MealKits/>
      <GetTouch/>
    </div>
  );
}

export default App;
