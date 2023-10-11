// import React, { useState, useEffect } from 'react';
import FavoriteList from 'components/FavoriteList/FavoriteList';
import { FavoriteContainer } from './Favorites.styled';

const Favorite = () => {


  return (
    <FavoriteContainer>
      <FavoriteList />
    </FavoriteContainer>
  );
};

export default Favorite;
