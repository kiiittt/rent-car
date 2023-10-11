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
import Modal from '../Modal/Modal';

const CatalogListItem = () => {
  const [cars, setCars] = useState([]);
  const [favoriteCars, setFavoriteCars] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  
  const openModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  useEffect(() => {
    fetch('https://65240384ea560a22a4e9413d.mockapi.io/auto')
      .then(response => response.json())
      .then(data => setCars(data))
      .catch(error => console.error('Error', error));
  }, []);

  useEffect(() => {
    const savedFavoriteCars =
      JSON.parse(localStorage.getItem('favoriteCars')) || [];
    setFavoriteCars(savedFavoriteCars);
  }, []);

  const handleHeartClick = car => {
    const carIndex = favoriteCars.findIndex(item => item.id === car.id);

    if (carIndex === -1) {
      const updatedFavoriteCars = [...favoriteCars, car];
      setFavoriteCars(updatedFavoriteCars);
      localStorage.setItem('favoriteCars', JSON.stringify(updatedFavoriteCars));
    } else {
      const updatedFavoriteCars = [...favoriteCars];
      updatedFavoriteCars.splice(carIndex, 1);
      setFavoriteCars(updatedFavoriteCars);
      localStorage.setItem('favoriteCars', JSON.stringify(updatedFavoriteCars));
    }
  };

  return (
    <>
      {cars.map(car => (
        <CatalogItem key={car.id}>
          <ImgContainer>
            <HeartIcon
              onClick={() => handleHeartClick(car)}
              className={
                favoriteCars.some(item => item.id === car.id) ? 'favorite' : ''
              }
            />
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
          <ItemButton onClick={openModal}>Learn more</ItemButton>
          {isModalOpen && <Modal onClose={openModal} car={car} />}
        </CatalogItem>
      ))}
    </>
  );
};

export default CatalogListItem;
