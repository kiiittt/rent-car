import React, { useEffect, useState } from 'react';
import {
  FavoriteListWrapper,
  FavoriteListUl,
  NoCar,
} from './FavoriteList.styled';
import CatalogListItem from '../CatalogItem/CatalogItem';

const FavoriteList = () => {
  const [favoriteItems, setFavoriteItems] = useState([]);

  useEffect(() => {
    const favorites = JSON.parse(localStorage.getItem('favorites')) || [];
    setFavoriteItems(favorites);
  }, []);

  return (
    <FavoriteListWrapper>
      {favoriteItems.length === 0 ? (
        <NoCar>No selected cars</NoCar>
      ) : (
        <FavoriteListUl>
          {favoriteItems.map((car, index) => (
            <CatalogListItem key={index} car={car} />
          ))}
        </FavoriteListUl>
      )}
    </FavoriteListWrapper>
  );
};

export default FavoriteList;
