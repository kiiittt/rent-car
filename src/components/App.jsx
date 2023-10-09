import { Route, Routes } from 'react-router-dom';
import SharedLayout from './SharedLayout';
import Home from 'pages/Home';
import Catalog from 'pages/Catalog';
import Favorite from 'pages/Favorites/Favorites';

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<SharedLayout/>}>
        <Route index element={<Home />} />
        <Route path="catalog" element={<Catalog />} />
        <Route path="favorites" element={<Favorite />} />
        <Route path="*" element={<Home />} />
      </Route>
    </Routes>
  );
};