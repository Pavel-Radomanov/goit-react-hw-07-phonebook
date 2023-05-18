import styled from '@emotion/styled';
import { Form, Field } from 'formik';

export const FormWrp = styled(Form)`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 400px;
  border: 3px;
  border-radius: 6px;
  padding: 10px;

  background-color: #808e9e;
`;

export const LabelForm = styled.label`
  margin-bottom: 10px;
  padding: 10px;
  font-size: 18px;
  text-transform: uppercase;
  width: 100%;
`;

export const InputForm = styled(Field)`
  width: 100%;
  font-size: 18px;
  background-color: white;
  border: none;
  border-radius: 6px;
  &:focus-visible {
    outline: none;
  }

  &:hover,
  &:focus {
    background-color: #c9ccd0;
  }
`;

export const InputError = styled.span`
  font-size: 12px;
  font-weight: 700;
  color: orange;
`;

export const ButtonForm = styled.button`
  padding: 5px;
  text-transform: uppercase;
  background-color: #cfdbdb;
  border: none;
  border-radius: 6px;
  &:hover,
  &:focus {
    background-color: #c9ccd0;
  }
`;
// background-color: #90d4d4;
// background-color: #808e9e;
// background-color: #c9ccd0;
