import {
  CatalogFormFilter,
  ContainerLabel,
  FormFilterLabel,
  FormFilterSelect,
  FormFilterOption,
  ContainerInput,
  FormFilterInput,
  InputText,
  FormFilterButton,
} from './CatalogFilter.styled';
import React, { useState } from 'react';

const CatalogFilter = ({
  selectedBrand,
  setSelectedBrand,
  selectedPrice,
  setSelectedPrice,
  selectedFrom,
  setSelectedFrom,
  selectedTo,
  setSelectedTo,
}) => {
  const [tempSelectedBrand, setTempSelectedBrand] = useState(selectedBrand);
  const [tempSelectedPrice, setTempSelectedPrice] = useState(selectedPrice);

  const [fromValue, setFromValue] = useState(selectedFrom);
  const [toValue, setToValue] = useState(selectedTo);

  const carBrands = [
    'Buick',
    'Volvo',
    'HUMMER',
    'Subaru',
    'Mitsubishi',
    'Nissan',
    'Lincoln',
    'GMC',
    'Hyundai',
    'MINI',
    'Bentley',
    'Mercedes-Benz',
    'Aston Martin',
    'Pontiac',
    'Lamborghini',
    'Audi',
    'BMW',
    'Chevrolet',
    'Chrysler',
    'Kia',
    'Land',
  ];

  const rentPrice = [
    30, 40, 50, 60, 70, 80, 90, 100, 110, 120, 130, 140, 150, 160, 170, 180,
    190, 200, 210, 220, 230, 240, 250, 260, 270, 280, 290, 300, 310, 320, 330,
    340, 350, 360, 370, 380, 390, 400, 410, 420, 430, 440, 450, 460, 470, 480,
    490, 500,
  ];

  const applyFilter = e => {
    e.preventDefault();
    setSelectedBrand(tempSelectedBrand);
    setSelectedPrice(tempSelectedPrice);
    setSelectedFrom(fromValue);
    setSelectedTo(toValue);
  };

  return (
    <>
      <CatalogFormFilter autoComplete="on">
        <ContainerLabel>
          <FormFilterLabel htmlFor="carBrand">Car brand</FormFilterLabel>
          <FormFilterSelect
            id="carBrand"
            name="carBrand"
            value={tempSelectedBrand}
            onChange={e => setTempSelectedBrand(e.target.value)}
          >
            <FormFilterOption value="All brands" defaultValue>
              All brands
            </FormFilterOption>
            {carBrands?.map(item => (
              <FormFilterOption key={item} value={item}>
                {item}
              </FormFilterOption>
            ))}
          </FormFilterSelect>
        </ContainerLabel>

        <ContainerLabel>
          <FormFilterLabel htmlFor="carPrice">Price/ 1 hour</FormFilterLabel>
          <FormFilterSelect
            id="carPrice"
            name="carPrice"
            value={tempSelectedPrice}
            onChange={e => setTempSelectedPrice(e.target.value)}
            style={{ width: '125px' }}
          >
            <FormFilterOption value="To $" defaultValue>
              To $
            </FormFilterOption>
            {rentPrice?.map(item => (
              <FormFilterOption key={item} value={item}>
                {item}
              </FormFilterOption>
            ))}
          </FormFilterSelect>
        </ContainerLabel>

        <ContainerLabel>
          <FormFilterLabel style={{ marginBottom: '0px' }}>
            Car mileage / km
            <ContainerInput>
              <div style={{ position: 'relative' }}>
                <FormFilterInput
                  type="number"
                  id="from"
                  name="from"
                  value={fromValue}
                  onChange={e => setFromValue(e.target.value)}
                />
                <InputText>From</InputText>
              </div>
              <div style={{ position: 'relative' }}>
                <FormFilterInput
                  type="number"
                  id="to"
                  name="to"
                  value={toValue}
                  onChange={e => setToValue(e.target.value)}
                  style={{
                    borderRadius: '0px 14px 14px 0px',
                    border: 'none',
                    paddingLeft: '53px',
                  }}
                />
                <InputText>To</InputText>
              </div>
            </ContainerInput>
          </FormFilterLabel>
        </ContainerLabel>

        <FormFilterButton onClick={applyFilter}>Search</FormFilterButton>
      </CatalogFormFilter>
    </>
  );
};

export default CatalogFilter;