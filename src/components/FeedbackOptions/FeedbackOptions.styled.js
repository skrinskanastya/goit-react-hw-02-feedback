import { styled } from 'styled-components';

export const OptionsList = styled.ul`
  display: flex;
  gap: 15px;
  list-style: none;
  padding: 0;
`;

export const OptionsBtn = styled.button`
  padding: 5px;
  background-color: transparent;
  box-shadow: 0px 2px 1px 0px rgba(46, 47, 66, 0.08),
    0px 1px 1px 0px rgba(46, 47, 66, 0.16),
    0px 1px 6px 0px rgba(46, 47, 66, 0.08);
  border-radius: 5px;
  border: 1px lightgray solid;
`;
