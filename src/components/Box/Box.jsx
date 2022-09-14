import styled from 'styled-components';
import {
  color,
  layout,
  space,
  border,
  typography,
  flexbox,
  background,
} from 'styled-system';

export const Box = styled('div')(
  color,
  space,
  layout,
  border,
  typography,
  flexbox,
  background
);
