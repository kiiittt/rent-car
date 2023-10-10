import CatalogFilter from 'components/CatalogFilter/CatalogFilter';
import CatalogList from 'components/CatalogList';
import LoadMoreBtn from 'components/LoadMoreBtn';
import { Container } from './Catalog.styled';

const Catalog = () => {
  return<Container>
    <CatalogFilter />
    <CatalogList />
    <LoadMoreBtn/>
  </Container>
};

export default Catalog;
