import React from 'react';
import styled, { keyframes } from 'styled-components';

const Centerloader = styled.div`
  padding-left: 50px;
`;

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
`;
const Spinner = styled.div`
  border: 6px solid #f3f3f3;
  border-radius: 50%;
  width: 30px;
  height: 30px;
  -webkit-animation: ${rotate} 2s linear infinite;
  animation: ${rotate} 2s linear infinite;
  border-right: 6px solid #0000ff;
`;
const Wrapper = styled.div`
  position: absolute;
  top: 45%;
  left: 45%;
`;

const Loader = () => {
  return (
    <Wrapper>
      <Centerloader>
        <Spinner />
        <br />
      </Centerloader>
    </Wrapper>
  );
};
export default Loader;
