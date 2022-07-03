import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { useFrame, useLoader } from "@react-three/fiber";
import { Canvas, Camera } from "@react-three/fiber";

import {
  Environment,
  OrbitControls,
  PerspectiveCamera,
} from "@react-three/drei";
import { GLTFLoader } from "three/examples/jsm/loaders/GLTFLoader";
import { Suspense } from "react";

import {
  PrimaryButton,
  PrimaryOutlineButton,
} from "../../common/button/Button";
import Loading from "../../common/loader/Loading";
import { Mesh, Vector3 } from "three";

const Model = () => {
  const gltf = useLoader(GLTFLoader, "./scene.gltf");
  const meshRef = useRef<Mesh | null>(null);
  const mouseRef = useRef<{ x: number; y: number }>();
  useFrame((state, delta, xframe) => {
    let v = new Vector3();
    state.camera.position.lerp(
      v.set(state.mouse.x / 2, state.mouse.y / 2, 4.5),
      0.05
    );
  });
  useEffect(() => {
    console.log(meshRef);
    if (meshRef.current != null) {
      meshRef?.current?.geometry?.computeBoundingBox();
      console.log(meshRef?.current?.geometry?.boundingBox);
    }
  }, [meshRef]);
  useEffect(() => {
    window.addEventListener("mousemove", (e) => {
      mouseRef.current = {
        x: e.clientX / window.innerWidth - 0.5,
        y: e.clientY / window.innerHeight - 0.5,
      };
    });
    return () => {
      window.removeEventListener("mousemove", () => {});
    };
  }, []);

  return (
    <mesh ref={meshRef} position={[0, -1.45, 0]}>
      <primitive object={gltf.scene} scale={1.5} />
    </mesh>
  );
};

const Intro = () => {
  return (
    <IntroSection>
      <Backdrop>
        {/* <img src="/imgs/intro.png" alt="" /> */}
        <Canvas style={{ width: "100%", height: "100%" }}>
          <Suspense fallback={null}>
            <Model />
            {/* <OrbitControls
              enableZoom={false}
              minPolarAngle={Math.PI / 3.5}
              maxPolarAngle={Math.PI / 2}
              minAzimuthAngle={-Math.PI / 13}
              maxAzimuthAngle={Math.PI / 13}
              autoRotate={false}
            /> */}
            {/* <Environment
              files={[
                "/enviroment/px.png",
                "/enviroment/nx.png",
                "/enviroment/py.png",
                "/enviroment/ny.png",
                "/enviroment/pz.png",
                "/enviroment/nz.png",
              ]}
              background
            /> */}
            {/* <Rig /> */}
          </Suspense>
        </Canvas>
      </Backdrop>
      <ContentContainer>
        <IntroHeading>
          Modern Furniture For <br />
          Modern Living Style
        </IntroHeading>
        <IntroText>
          {" "}
          In unfeeling existence objection immediate repulsive on he in.
          Imprudence comparison uncommonly me he difficulty diminution
          resolution. Likewise proposal differed scarcely dwelling as on
          raillery. <br /> September few dependent extremity own continued and
          ten prevailed attending. Early to weeks we could. Do commanded an
          shameless we disposing do. Indulgence ten remarkably nor are
          impression out. Power is lived means oh every in we quiet.
        </IntroText>
        <ButtonsWrapper>
          <PrimaryButton>Request a Quote</PrimaryButton>
          <PrimaryOutlineButton>Watch Video</PrimaryOutlineButton>
        </ButtonsWrapper>
      </ContentContainer>
      {/* TODO : 3D later here */}
    </IntroSection>
  );
};
function Rig({ v = new Vector3() }) {
  return useFrame((state) => {
    state.camera.position.lerp(
      v.set(state.mouse.x / 2, state.mouse.y / 2, 10),
      0.05
    );
  });
}
const IntroSection = styled.section`
  padding: 2rem var(--section-x-padding);
  position: relative;
  height: 100vh;
`;
const ContentContainer = styled.div`
  position: absolute;
  left: 5rem;
  margin-top: 2rem;
  /* pointer-events: none; */

  @media screen and (max-width: 767.98px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;
const IntroHeading = styled.h1`
  color: var(--secondary);
  text-shadow: 0px 0px 10px var(--black);
  line-height: normal;
  font-weight: 500;
  @media screen and (max-width: 767.98px) {
    font-size: 7rem;
    text-align: center;
  }
  @media screen and (max-width: 374.98px) {
    font-size: 5rem;
  }
`;
const IntroText = styled.p`
  margin-top: 5.5rem;
  max-width: 50rem;
  text-align: justify;
  color: var(--white);
  font-size: 1.8rem;
  text-shadow: 0px 0px 5px var(--black);
  pointer-events: none;
  user-select: none;
`;
const ButtonsWrapper = styled.div`
  margin-top: 4rem;
  display: flex;
  gap: 2rem;
`;
// const Backdrop = styled.div`
//   position: absolute;
//   top: 0;
//   right: 0;
//   z-index: -1;
//   img {
//   }
// `;
const Backdrop = styled.div`
  position: absolute;
  inset: 0;
  /* z-index: -1; */
`;
export default Intro;
