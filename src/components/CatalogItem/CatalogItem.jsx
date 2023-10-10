import {
  CatalogItem,
  ImgContainer,
  HeartIcon,
  ItemImg,
  GradientOverlay,
  ItemTitle,
  ItemTitleName,
  ItemInfo,
  ItemInfoFirst,
  ItemInfoSecond,
  ItemButton,
  InfoText,
} from './CatalogItem.styled';
import React, { useState, useEffect } from 'react';

const CatalogListItem = () => {
  const [cars, setCars] = useState([]);

  useEffect(() => {
    fetch('https://65240384ea560a22a4e9413d.mockapi.io/auto')
      .then(response => response.json())
      .then(data => setCars(data))
      .catch(error => console.error('Error', error));
  }, []);

  return (
    <>
      {cars.map(car => (
        <CatalogItem key={car.id}>
          <ImgContainer>
            <HeartIcon />
            <ItemImg src={car.img} alt="" width="274" />
            <GradientOverlay />
          </ImgContainer>
          <ItemTitle>
            <ItemTitleName>
              <p>{car.make}</p>
              <p style={{ color: '#3470ff' }}>{car.model},</p>
              <p>{car.year}</p>
            </ItemTitleName>
            <p>{car.price}</p>
          </ItemTitle>
          <ItemInfo>
            <ItemInfoFirst>
              <InfoText>Location</InfoText>
              <InfoText>Country</InfoText>
              <InfoText>Rentals</InfoText>
              <InfoText>Premium</InfoText>
            </ItemInfoFirst>
            <ItemInfoSecond>
              <InfoText>Category</InfoText>
              <InfoText>Model</InfoText>
              <InfoText>Number</InfoText>
              <InfoText>Feature</InfoText>
            </ItemInfoSecond>
          </ItemInfo>
          <ItemButton>Learn more</ItemButton>
        </CatalogItem>
      ))}
    </>
  );
};

export default CatalogListItem;
