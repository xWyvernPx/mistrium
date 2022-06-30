import React from "react";
import styled, { css } from "styled-components";

const LoadingWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: #fff;
  z-index: 9999;
`;
function createCSS() {
  let styles = "";

  for (let i = 0; i < 6; i += 1) {
    styles = `
         &:nth-child(${i + 1}) {
        filter: blur(0px);
        animation: blur-text 1.5s (${i / 5}) + s infinite linear alternate;
      }
       `;
  }

  return css`
    ${styles}
  `;
}
const LoaderTextWrapper = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
  text-align: center;
  width: 100%;
  height: 100px;
  line-height: 100px;
  span {
    display: inline-block;
    margin: 0 5px;
    color: #000;
    font-size: 2rem;
    font-family: "Quattrocento Sans", sans-serif;
    &:nth-child(1) {
      filter: blur(0px);
      animation: blur-text 1.5s 0s infinite linear alternate;
    }
    &:nth-child(2) {
      filter: blur(0px);
      animation: blur-text 1.5s 0.2s infinite linear alternate;
    }
    &:nth-child(3) {
      filter: blur(0px);
      animation: blur-text 1.5s 0.4s infinite linear alternate;
    }
    &:nth-child(4) {
      filter: blur(0px);
      animation: blur-text 1.5s 0.6s infinite linear alternate;
    }
    &:nth-child(5) {
      filter: blur(0px);
      animation: blur-text 1.5s 0.8s infinite linear alternate;
    }
    &:nth-child(6) {
      filter: blur(0px);
      animation: blur-text 1.5s 1s infinite linear alternate;
    }
    &:nth-child(7) {
      filter: blur(0px);
      animation: blur-text 1.5s 1.2s infinite linear alternate;
    }
  }
  @keyframes blur-text {
    0% {
      filter: blur(0px);
    }
    100% {
      filter: blur(4px);
    }
  }
`;

const Loading = () => {
  return (
    <LoadingWrapper>
      <LoaderTextWrapper>
        <span>L</span>
        <span>O</span>
        <span>A</span>
        <span>D</span>
        <span>I</span>
        <span>N</span>
        <span>G</span>
      </LoaderTextWrapper>
    </LoadingWrapper>
  );
};

export default Loading;
