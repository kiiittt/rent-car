import CatalogFilter from 'components/CatalogFilter/CatalogFilter';
import CatalogList from 'components/CatalogList';
import LoadMoreBtn from 'components/LoadMoreBtn';
import { Container } from './Catalog.styled';
import React, { useState } from 'react';


const Catalog = () => {
  const [selectedBrand, setSelectedBrand] = useState('All brands');
  const [selectedPrice, setSelectedPrice] = useState('To $');
  const [selectedFrom, setSelectedFrom] = useState(0);
  const [selectedTo, setSelectedTo] = useState(0);
  return (
    <Container>
      <CatalogFilter
        selectedBrand={selectedBrand}
        setSelectedBrand={setSelectedBrand}
        selectedPrice={selectedPrice}
        setSelectedPrice={setSelectedPrice}
        selectedFrom={selectedFrom}
        setSelectedFrom={setSelectedFrom}
        selectedTo={selectedTo}
        setSelectedTo={setSelectedTo}
      />
      <CatalogList />
      <LoadMoreBtn />
    </Container>
  );
};

export default Catalog;
