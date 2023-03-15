import React, { useState, useEffect, useRef } from 'react';
import './style.scss';
import { useSpring, animated } from 'react-spring';

function Index() {
  function Number({ n }) {
    const { number } = useSpring({
      from: { number: 0 },
      number: n,
      delay: 200,
      config: { mass: 1, tension: 20, friction: 10 },
    });
    return (
      <animated.div className='animatedDiv'>{number.to(n => n.toFixed(0))}</animated.div>
    );
  }
  return (
    <div className='StatisticsPart'>
      <div className='container'>
        <div className='StatCardsWrapper'>
          <div
            className='StatCard'
            data-aos='flip-down'
            data-aos-duration='1000'
            data-aos-delay='50'
          >
            <strong className='StatNumber'>
              <Number n={60} />+
            </strong>
            <p className='StatType'>Investorlar</p>
          </div>
          <div
            className='StatCard'
            data-aos='flip-down'
            data-aos-duration='1000'
            data-aos-delay='50'
          >
            <strong className='StatNumber'>
              <Number n={700} />+
            </strong>
            <p className='StatType'>Sinflar</p>
          </div>
          <div
            className='StatCard'
            data-aos='flip-down'
            data-aos-duration='1000'
            data-aos-delay='50'
          >
            <strong className='StatNumber'>
              <Number n={88} />
            </strong>
            <p className='StatType'>Faol Sinflar</p>
          </div>
          <div
            className='StatCard'
            data-aos='flip-down'
            data-aos-duration='1000'
            data-aos-delay='50'
          >
            <strong className='StatNumber'>
              <Number n={99} />%
            </strong>
            <p className='StatType'>SInf ko'rsatgichlari</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Index;
