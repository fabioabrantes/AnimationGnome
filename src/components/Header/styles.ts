import styled from 'styled-components/native';
import { MotiView } from "moti";

export const Container = styled(MotiView)`
  width: 100%;
  flex-direction: row;
  justify-content: space-between;
  position: absolute;
  top: 25px;
  padding-left: 32px;
  padding-right: 20px;
`;

export const Profile = styled.Image.attrs({
  resizeMode: "contain",
})`
  height: 45px;
  width: 45px;
  border-radius: 60px;
`;