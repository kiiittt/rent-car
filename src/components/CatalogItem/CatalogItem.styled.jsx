import styled from 'styled-components';
import { AiFillHeart } from 'react-icons/ai';

export const CatalogItem = styled.li`
  width: 274px;
  // max-height: 426px;
  list-style: none;
`;

export const ImgContainer = styled.div`
  position: relative;
  margin-bottom: 14px;
`;

export const HeartIcon = styled(AiFillHeart)`
  position: absolute;
  top: 18px;
  right: 18px;
  width: 18px;
  height: 18px;
  color: #3470ff;
  cursor: pointer;
`;

export const ItemImg = styled.img`
  object-fit: cover;
  height: 268px;
  border-radius: 14px;
`;

export const GradientOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: linear-gradient(
    180deg,
    rgba(18, 20, 23, 0.5) 2.5%,
    rgba(18, 20, 23, 0) 41.07%
  );
  border-radius: 14px;
  pointer-events: none;
`;

export const ItemTitle = styled.div`
  color: #121417;
  display: flex;
  justify-content: space-between;
  margin-bottom: 8px;
  margin-right: 9px;
`;

export const ItemTitleName = styled.div`
  display: flex;
  gap: 3px;
`;

export const ItemInfo = styled.div`
  color: #12141780;
  font-size: 12px;
  font-weight: 400;
  line-height: 18px;
  display: flex;
  flex-direction: column;
  gap: 4px;
  margin-bottom: 28px;
`;

export const ItemInfoFirst = styled.div`
  display: flex;
  gap: 6px;
`;

export const ItemInfoSecond = styled.div`
  display: flex;
  gap: 6px;
`;

export const InfoText = styled.p`
margin: 0;
`;

export const ItemButton = styled.button`
  font-size: 14px;
  font-weight: 500;
  line-height: 20px;
  color: #ffffff;
  background-color: #3470ff;
  padding-top: 12px;
  padding-bottom: 12px;
  border: none;
  border-radius: 12px;
  width: 100%;
  cursor: pointer;

  ::hover {
    background-color: #0b44cd;
  }
`;
