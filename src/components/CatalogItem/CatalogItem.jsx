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

const CatalogListItem = () => {
  return (
    <>
      <CatalogItem>
        <ImgContainer>
          <HeartIcon />
          <ItemImg
            src="https://cdn.forbes.ru/files/c/1082x683/photo_galleries/1920-02_tcm-3173-1834873.jpg__1582289253__55999.webp"
            alt=""
            width="274"
          />
          <GradientOverlay />
        </ImgContainer>
        <ItemTitle>
          <ItemTitleName>
            <p>Make</p>
            <p style={{ color: '#3470ff' }}>Model,</p>
            <p>Year</p>
          </ItemTitleName>
          <p>Price</p>
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
    </>
  );
};

export default CatalogListItem;
