import css from './Home.module.css';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className={css.container}>
      <Link to="/catalog" className={css.btn}>
        RENT A CAR WITH PLEASURE
      </Link>
    </div>
  );
};

export default Home;
