import { MotiImage, MotiView } from "moti";
import styled from 'styled-components/native';

export const Container = styled(MotiView)`
   bottom: -140px;
`;

export const AvatarImage = styled(MotiImage).attrs({
  resizeMode: "cover",
})`
  width: 500px;
`;