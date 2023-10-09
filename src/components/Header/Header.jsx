// import React, { useState } from 'react';
import { Container, NavigationLink } from './Header.styled';

export default function Header() {
  return (
    <Container>
      <NavigationLink to={'/'}>Home</NavigationLink>
      <NavigationLink to={'/catalog'}>Catalog</NavigationLink>
      <NavigationLink to={'/favorites'}>Favorites</NavigationLink>
    </Container>
  );
}
