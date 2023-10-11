import React from 'react';
import { useEffect } from 'react';
import { createPortal } from 'react-dom';
import {
  Overlay,
  ModalDiv,
  Close,
  ImgContainer,
  ItemImg,
  ItemTitleName,
  ItemInfo,
  ItemInfoFirst,
  ItemInfoSecond,
  Description,
  SecondTitle,
  ConditionsWrapper,
  Conditions,
  ModalButton,
} from './Modal.styled';

const modalRoot = document.querySelector('#modal-root');

const Modal = ({ onClose, car }) => {
  const {
    id,
    year,
    make,
    model,
    type,
    img,
    description,
    fuelConsumption,
    engineSize,
    accessories,
    functionalities,
    rentalPrice,
    address,
    rentalConditions,
    mileage,
  } = car;

  const addressParts = address.split(',');

  useEffect(() => {
    const handleKeydown = e => {
      if (e.code === 'Escape') {
        onClose();
      }
    };

    window.addEventListener('keydown', handleKeydown);

    return () => {
      window.removeEventListener('keydown', handleKeydown);
    };
  }, [onClose]);

  const handleBackdropClick = event => {
    if (event.target === event.currentTarget) {
      onClose();
    }
  };

  return createPortal(
    <Overlay onClick={handleBackdropClick}>
      <ModalDiv>
        <Close onClick={onClose} />

        <ImgContainer>
          <div>
            <ItemImg src={img} alt={`${make} ${model}`} />
          </div>
        </ImgContainer>

        <div style={{ marginBottom: '24px' }}>
          <ItemTitleName>
            <p>{make}</p>
            <p style={{ color: '#3470ff' }}>{model}</p>
            <p>{year}</p>
          </ItemTitleName>

          <ItemInfo>
            <ItemInfoFirst>
              <p>{addressParts[1].trim()}</p>
              <span>|</span>
              <p>{addressParts[addressParts.length - 1].trim()}</p>
              <span>|</span>
              <p>Id: {id}</p>
              <span>|</span>
              <p>Year: {year} </p>
              <span>|</span>
              <p>Type: {type}</p>
            </ItemInfoFirst>
            <ItemInfoSecond>
              <p>Fuel Consumption: {fuelConsumption}</p>
              <span>|</span>
              <p>Engine Size: {engineSize}</p>
            </ItemInfoSecond>
          </ItemInfo>

          <Description>{description}</Description>
        </div>

        <div style={{ marginBottom: '24px' }}>
          <SecondTitle>Accessories and functionalities:</SecondTitle>
          <ItemInfo>
            <ItemInfoFirst>
              {accessories.map((accessory, index, array) => (
                <React.Fragment key={index}>
                  <p>{accessory}</p>
                  {index < array.length - 1 && <span>|</span>}
                </React.Fragment>
              ))}
            </ItemInfoFirst>
            <ItemInfoSecond>
              {functionalities.map((functionality, index, array) => (
                <React.Fragment key={index}>
                  <p>{functionality}</p>
                  {index < array.length - 1 && <span>|</span>}
                </React.Fragment>
              ))}
            </ItemInfoSecond>
          </ItemInfo>
        </div>

        <div style={{ marginBottom: '24px' }}>
          <SecondTitle>Rental Conditions: </SecondTitle>
          <ConditionsWrapper>
            {rentalConditions.split('\n').map((condition, index) => (
              <Conditions key={index}>
                {condition.includes(':')
                  ? condition.split(':').map((part, i) =>
                      i === 0 ? (
                        <span key={i}>{part}: </span>
                      ) : (
                        <span key={i} style={{ color: '#3470ff' }}>
                          {part}
                        </span>
                      )
                    )
                  : condition}
              </Conditions>
            ))}

            <Conditions>
              Mileage: <span> </span>
              <span style={{ color: '#3470ff' }}>
                {mileage.toLocaleString('en-US')}
              </span>
            </Conditions>
            <Conditions>
              Price:{' '}
              <span style={{ color: '#3470ff' }}>{rentalPrice.slice(1)}$</span>
            </Conditions>
          </ConditionsWrapper>
        </div>

        <ModalButton href="tel:+380730000000">Rental car</ModalButton>
      </ModalDiv>
    </Overlay>,
    modalRoot
  );
};

export default Modal;
