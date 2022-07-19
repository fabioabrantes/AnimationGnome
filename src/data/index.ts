import theme from '../global/styles/theme'
import { ImageSourcePropType } from "react-native";

export interface Gnome {
  name: string;
  description: string;
  wins: number;
  stars: number;
  avatar: ImageSourcePropType;
  color: string;
  tintBlack?: boolean;
  offsetX?: number;
  offsetY?: number;
  height?: number;
}

export default [
  {
    name: "Flame\nGold Gnome",
    description: 'Victim flames',
    wins: 93,
    stars: 9.5,
    avatar: require('../assets/flame.png'),
    color: theme.colors.flame_gold,
    tintBlack: true,
    offsetX: -10,
    offsetY: 8
  },
  {
    name: "Ice Dimond\nGnome",
    description: 'Cold kingdom',
    wins: 69,
    stars: 9.1,
    avatar: require('../assets/ice.png'),
    color: theme.colors.ice_diamond,
    height: 350,
    offsetX: -85,
  },
  {
    name: "Fire Ruby\nGnome",
    description: 'Fire lightning',
    wins: 88,
    stars: 7.9,
    avatar: require('../assets/fire.png'),
    color: theme.colors.fire_ruby,
    height: 400,
    offsetX:  10,
    offsetY: 8,
  },
  {
    name: "Poisonous\nSteel Gnome",
    description: 'Emerald kingdom',
    wins: 95,
    stars: 9.1,
    avatar: require('../assets/steel.png'),
    color: theme.colors.poisonous_steel,
    height: 500,
    offsetX: -25,
    offsetY: -8,
  },
]