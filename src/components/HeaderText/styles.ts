import styled from 'styled-components/native';
import { MotiText, MotiView } from "moti";

export const Container = styled.View`
  width: 100%;
  position: absolute;
  top: 80px;
  padding-left: 30px;
  overflow: hidden;
`;

export const TitleContent = styled(MotiView)`
  margin-bottom: 8px;
  overflow: hidden;
  height: 80px;
`;

export const TitleText = styled(MotiText)`
  font-family: ${({ theme }) => theme.fonts.bold};
  font-size: 28px;
  line-height: 40px;
  color: white;
`;

export const DescContent = styled(MotiView)`
  margin-bottom: 8px;
  overflow: hidden;
  height: 22px;
`;

export const DescText = styled(MotiText)`
  font-family: ${({ theme }) => theme.fonts.regular};
  font-size: 16px;
  color: white;
`;
