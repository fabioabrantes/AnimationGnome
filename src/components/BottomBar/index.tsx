import React,{useEffect,useState} from 'react';
import { useWindowDimensions } from "react-native";

import icon from "../../assets/caveira.png";
import Bottom from "../../assets/bottomFill.svg";

import { 
  BottomContainer,
  BottomCircle,
  BottomCircleIcon,
  BottomContent,
  BottomText,
  ArrowsView,
  Arrow
} from './styles';

export function BottomBar() {
  const { width } = useWindowDimensions();
  const [translateY, setTranslateY] = useState(100);

  useEffect(() => {
    setTimeout(() => setTranslateY(0), 1000);
  }, []);

  return (
    <BottomContainer
      from={{ translateY }}
      animate={{ translateY: 0 }}
      delay={1000}
      transition={{ type: "timing", duration: 600 }}
    >
      <BottomCircle>
        <BottomCircleIcon
          source={icon}
          from={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          delay={1600}
        />
      </BottomCircle>

      <Bottom width={width} color="white" style={{ position: "absolute" }} />

      <BottomContent
        delay={1000}
        from={{ translateY: 80, opacity: 0 }}
        animate={{ translateY: 0, opacity: 1 }}
        transition={{ type: "timing", duration: 800 }}
      >
        <BottomText>Let's Go</BottomText>
        
        <ArrowsView>
          <Arrow color="#4d4d4d" />
          <Arrow color="gray" />
          <Arrow color="white" />
        </ArrowsView>
      </BottomContent>
    </BottomContainer>
  );
}