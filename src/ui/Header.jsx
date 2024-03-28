import { Link } from 'react-router-dom';
import SearchOrder from '../features/order/SearchOrder';

function Header() {
  return (
    <header>
      <Link to="/">React Pizz Co.</Link>
      <SearchOrder />
      <p>Mahdi</p>
    </header>
  );
}

export default Header;
