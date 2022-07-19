import React, { useEffect, useState } from 'react';
import { CountUp } from "use-count-up";

import { 
  Container,
  RateTitleView,
  RateTitleText,
  RateValueView,
  RateValueText,
} from './styles';

interface Props {
  currentWins: number;
}

export function BottomContent({currentWins}:Props) {
  const [isCounting, setIsCounting] = useState(false);

  useEffect(() => {
    setTimeout(() => setIsCounting(true), 1600);
  }, []);

  return (
    <Container>
      <RateTitleView
        delay={2000}
        from={{ height: 0 }}
        animate={{ height: 20 }}
        transition={{ type: "timing", duration: 600 }}
      >
        <RateTitleText>Win rate</RateTitleText>
      </RateTitleView>

      <RateValueView
        delay={1700}
        from={{ height: 0 }}
        animate={{ height: 55 }}
        transition={{ type: "timing", duration: 600 }}
      >
        <RateValueText>
          <CountUp
            key={`${currentWins}`}
            isCounting={isCounting}
            start={currentWins - 40}
            end={currentWins}
            duration={1}
          />
          %
        </RateValueText>
      </RateValueView>
    </Container>
  );
}