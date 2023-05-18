import styled from '@emotion/styled';

export const ItemContact = styled.li`
    display: flex;
    justify-content: space-between;    
    padding: 5px;
    border-radius: 6px;
    font-weight: 600;

    &:nth-of-type(odd) {
    background-color: #ada3a5;
`;

export const ButtonRemoveContact = styled.button`
  padding: 5px;
  text-transform: uppercase;
  // background-color: #cfdbdb;
  background-color: #cfdbdb;
  border: none;
  border-radius: 6px;

  &:hover,
  &:focus {
    // background-color: #90d4d4;
    background-color: #c9ccd0;
  }
`;
