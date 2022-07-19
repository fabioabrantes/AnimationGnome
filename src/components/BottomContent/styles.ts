import { MotiView } from "moti";
import styled from 'styled-components/native';

export const Container = styled.View`
  width: 100%;
  align-items: center;
  position: absolute;
  bottom: 15px;
`;

export const RateTitleView = styled(MotiView)`
  margin-bottom: -5px;
`;

export const RateTitleText = styled.Text`
  font-size: 18px;
  font-family: ${({ theme }) => theme.fonts.light};
  color: white;
`;

export const RateValueView = styled(MotiView)`
  align-items: center;
`;

export const RateValueText = styled.Text`
  font-size: 40px;
  font-family: ${({ theme }) => theme.fonts.bold};
  color: white;
`;