import { ListWrapper, CatalogListUl } from './CatalogList.styled';
import CatalogListItem from '../CatalogItem/CatalogItem';

const CatalogList = () => {
  return (
    <ListWrapper>
      <CatalogListUl>
        <CatalogListItem />
        <CatalogListItem />
        <CatalogListItem />
        <CatalogListItem />
        <CatalogListItem />
      </CatalogListUl>
    </ListWrapper>
  );
};

export default CatalogList;
