import React, { useEffect, useState } from "react";
import { Fontisto } from "@expo/vector-icons";
import { useAnimationState } from "moti";

import { 
  StarContent,
  StarText
 } from './styles';

interface Props{
  stars: number;
}

export function Star({stars}:Props) {
  const [scale, setScale] = useState(0);

  const contentAnimate = useAnimationState({
    expand: {
      height: 80,
    },
  });
  useEffect(() => {
    setTimeout(() => {
      setScale(1);
      contentAnimate.transitionTo("expand");
    }, 300);
  }, []);

  return (
    <StarContent
      delay={2000}
      from={{ scale, height: 60 }}
      animate={{ scale: 1 }}
      state={contentAnimate}
      transition={{ type: "timing" }}
    >
      <Fontisto name="star" size={22} />

      <StarText
        delay={2200}
        from={{ opacity: 0, top: 20 }}
        animate={{ opacity: 1, top: 45 }}
        transition={{ type: "timing", duration: 300 }}
      >
        {stars}
      </StarText>
    </StarContent>
  );
}