import React from "react";
import styled, { keyframes } from "styled-components";
import PanIcon from "./PanIcon";
import PancakeIcon from "./PancakeIcon";
import { SpinnerProps } from "./types";

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`;

const float = keyframes`
	0% {
		transform: translatey(0px);
	}
	50% {
		transform: translatey(10px);
	}
	100% {
		transform: translatey(0px);
	}
`;

const pulse = keyframes`
	0% {
		transform: scale(0.8);
	}
	50% {
		transform: scale(1);
	}
	100% {
		transform: scale(0.8);
	}
`;

const Container = styled.div`
  position: relative;
`;

const RotatingPancakeIcon = styled(PancakeIcon)`
  position: absolute;
  top: 0;
  left: 0;
  animation: ${rotate} 2s linear infinite;
  transform: translate3d(0, 0, 0);
`;

const FloatingPanIcon = styled(PanIcon)`
  animation: ${float} 6s ease-in-out infinite;
  transform: translate3d(0, 0, 0);
`;

const PulseIcon = styled.img`
  animation: ${pulse} 2s linear infinite;
  transform: translate(-50%, -50%);
  width: 100px;
`;

const Spinner: React.FC<SpinnerProps> = ({ size = 128 }) => {
  return (
    <Container>
      {/* <RotatingPancakeIcon width={`${size * 0.5}px`} />
      <FloatingPanIcon width={`${size}px`} /> */}
      <PulseIcon src="/images/loading.png" alt="loading" />
    </Container>
  );
};

export default Spinner;
