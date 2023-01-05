import React, { useState } from 'react';
import styled, { css } from 'styled-components';

import starImg from './images/icon-star.svg';
import successImg from './images/illustration-thank-you.svg';

const rates = [1, 2, 3, 4, 5];

const App = () => {
  const [activeRate, setActiveRate] = useState(false);
  const [isSubmmit, setIsSubmmit] = useState(false);

  const handleActive = (rate) => {
    if (activeRate === rate) {
      setActiveRate(false);
    } else {
      setActiveRate(rate);
    }
  };

  const handleSubmit = () => {
    if (activeRate) {
      setIsSubmmit(true);
    } else {
      setIsSubmmit(false);
      alert('You need to choose a rate!');
    }
  };

  return (
    <Wrapper>
      <ComponentWrapper>
        {isSubmmit ? (
          <>
            <SuccessImage center>
              <img src={successImg} alt="successImg" />
            </SuccessImage>
            <SelectedWrapper center>
              <p>You selected {activeRate} out of 5</p>
            </SelectedWrapper>
            <TextWrapper center>
              <p className="title">Thank You</p>
              <p center className="text">
                We appreciate you taking the time to give a rating. If you ever
                need more support, don't hesitate to get in touch!
              </p>
            </TextWrapper>
          </>
        ) : (
          <>
            <StarWrapper>
              <img src={starImg} alt="star" />
            </StarWrapper>
            <TextWrapper>
              <p className="title">How did we do?</p>
              <p className="text">
                Please let us now how we did with your support request. All
                feedback is appreciated to help as imporce our offering
              </p>
            </TextWrapper>
            <RatingWrapper>
              {rates.map((rate, index) => {
                return (
                  <button
                    key={index}
                    onClick={() => handleActive(rate)}
                    className={`rate ${activeRate === rate ? 'active' : ''}`}
                  >
                    {rate}
                  </button>
                );
              })}
            </RatingWrapper>
            <SubmitButton onClick={() => handleSubmit()}>Submit</SubmitButton>
          </>
        )}
      </ComponentWrapper>
    </Wrapper>
  );
};

export default App;

const Wrapper = styled.div`
  min-height: 100vh;
  background-color: var(--very-dark--blue--color);

  display: flex;
  align-items: center;
  justify-content: center;
`;

const ComponentWrapper = styled.div`
  max-width: 350px;
  width: 350px;
  min-height: 300px;
  background-color: var(--dark-blue-color);
  border-radius: 15px;
  padding: 1.5rem 2.5rem;

  display: flex;
  flex-direction: column;
  justify-content: space-between;

  ${(props) =>
    props.center &&
    css`
      align-items: center;
    `}
`;

const StarWrapper = styled.div`
  width: 36px;
  background-color: var(--very-dark--blue--color);
  padding: 0.5rem;
  height: 36px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: rgba(0, 0, 0, 0.2) 0px 2px 8px 0px;
`;

const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  ${(props) =>
    props.center &&
    css`
      align-items: center;
    `}

  .title {
    font-size: 1.5rem;
    color: var(--white-color);
  }

  .text {
    font-size: 0.8rem;
    color: var(--medium-grey-color);
    text-align: ${(props) => (props.center ? 'center' : 'justify')};
    line-height: 1rem;
  }
`;

export const RatingWrapper = styled.div`
  display: flex;
  justify-content: space-between;

  .rate {
    background-color: var(--very-dark--blue--color);
    color: var(--medium-grey-color);
    box-shadow: rgba(0, 0, 0, 0.2) 0px 2px 8px 0px;
    width: 36px;
    height: 36px;
    border-radius: 50%;
    transition: all 0.25s ease-in-out;
    display: flex;
    align-items: center;
    justify-content: center;

    cursor: pointer;

    &:hover {
      background-color: var(--orange-color);
      color: var(--white-color);
    }

    &.active {
      background-color: var(--medium-grey-color);
      color: var(--very-dark--blue--color);
    }
  }
`;

const SubmitButton = styled.button`
  padding: 0.75rem;
  border-radius: 15px;
  text-transform: uppercase;
  letter-spacing: 0.25rem;
  color: var(--white-color);
  background-color: var(--orange-color);
  transition: all 0.25s ease-in-out;
  border: none;
  cursor: pointer;

  &:hover {
    background-color: var(--white-color);
    color: var(--orange-color);
  }
`;

const SuccessImage = styled.div`
  text-align: ${(props) => (props.center ? 'center' : 'justify')};
`;

const SelectedWrapper = styled.div`
  background-color: var(--very-dark--blue--color);
  padding: 0.5rem 0.75rem;
  border-radius: 15px;
  color: var(--orange-color);
  text-align: ${(props) => (props.center ? 'center' : 'justify')};
`;
