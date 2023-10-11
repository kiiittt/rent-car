import styled from 'styled-components';
import { AiOutlineClose } from 'react-icons/ai';

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.8);
  z-index: 1200;
`;

export const ModalDiv = styled.div`
  position: relative;
  width: 541px;
  background-color: #ffffff;
  padding: 40px;
  border-radius: 24px;
`;

export const Close = styled(AiOutlineClose)`
  position: absolute;
  top: 16px;
  right: 16px;
  width: 24px;
  height: 24px;
  cursor: pointer;
`;

export const ImgContainer = styled.div`
  border-radius: 14px;
  margin-bottom: 14px;
  width: 461px;
  height: 248px;
  overflow: hidden;
`;

export const ItemImg = styled.img`
  object-fit: cover;
`;

export const ItemTitleName = styled.div`
  display: flex;
  gap: 3px;
  margin-bottom: 8px;
`;

export const ItemInfo = styled.div`
  color: #12141780;
  font-size: 12px;
  font-weight: 400;
  line-height: 18px;
  display: flex;
  flex-direction: column;
  gap: 4px;
  margin-bottom: 14px;
`;

export const ItemInfoFirst = styled.div`
  display: flex;
  gap: 6px;
`;

export const ItemInfoSecond = styled.div`
  display: flex;
  gap: 6px;
`;

export const Description = styled.div`
  font-size: 14px;
  font-weight: 400;
  line-height: 20px;
  color: #121417;
`;

export const SecondTitle = styled.h2`
  font-size: 14px;
  font-weight: 500;
  line-height: 20px;
  color: #121417;
  margin-bottom: 8px;
`;

export const ConditionsWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
`;

export const Conditions = styled.p`
  font-size: 12px;
  font-weight: 400;
  line-height: 18px;
  color: #363535;
  background-color: #f9f9f9;
  border-radius: 35px;
  padding: 7px 14px;
`;

export const ModalButton = styled.a`
  font-size: 14px;
  font-weight: 600;
  line-height: 20px;

  text-decoration: none;
  color: #ffffff;
  background-color: #3470ff;
  border-radius: 12px;
  padding: 12px 50px;

  &:hover {
    background-color: #0b44cd;
  }
  &:focus {
    background-color: #0b44cd;
  }
`;
