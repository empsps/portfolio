import './css/global.scss';
import './App.scss';
import { Home } from './pages/Home';
import { Navbar } from './components/Navbar/Navbar';

export const App = () => {
  return (
    <div>
      <Navbar />
      <Home />
    </div>
  );
};
