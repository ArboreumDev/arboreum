import React, { useEffect } from "react";
import styled from "styled-components";
import PartnerStrip from "./PartnerStrip";
import Motif from "./motif";

let canvasNode: any;

interface BGProps {
  height: number;
}

const DivBG = styled.div`
  background-image: linear-gradient(135deg, #53a3fa 0%, #15e7b6 75%);
`;

const DivContainer = styled.div<BGProps>`
  margin: 0 auto;
  max-width: 1440px;
  z-index: 10;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 150px 20px;
  margin-top: -${(props: BGProps) => props.height}px;

  @media (max-width: 990px) {
    padding: 100px 20px;
  }
`;

const TextContainer = styled.div`
  margin: 0 20px;
`;

/* 
const ButtonBlock = styled.div`
  display: flex;
  justify-content: center;
`;
const Button = styled.div`
  display: flex;
  font-size: 16px;
  padding: 10px 30px;
  border-radius: 50px;
  border: 1px solid #ed135a;
  color: #ed135a;
  background-color: #fff;
  box-shadow: 0 0px 10px -3px rgba(0, 0, 0, 0.4);
  transition: all 0.5s ease;
  &:hover {
    color: #fff;
    background-color: #ed135a;
  }
`;
*/

const H1 = styled.h1`
  color: #ffffff;
  text-align: center;
  margin-bottom: 20px;
`;

const H3 = styled.h3`
  color: #ffffff;
  text-align: center;
  margin: 20px auto 20px auto;
  font-size: 24px;
  font-family: "Roboto", sans-serif;
  max-width: 720px;
`;

const Map: React.FunctionComponent<{}> = () => {
  useEffect(() => {
    const height: number = 582,
      width: any = document.getElementById("heroBanner")?.clientWidth;

    let context: any = canvasNode.getContext("2d"),
      radius = 2.5,
      minDistance = 40,
      maxDistance = 60,
      minDistance2 = minDistance * minDistance,
      maxDistance2 = maxDistance * maxDistance;

    canvasNode.width = width;
    canvasNode.height = height;
    let tau = 2 * Math.PI,
      n = Math.round(width / 10),
      particles = new Array(n);

    for (let i = 0; i < n; ++i) {
      particles[i] = {
        x: Math.random() * width,
        y: Math.random() * height,
        vx: 0,
        vy: 0,
      };
    }

    setInterval(() => {
      context.save();
      context.clearRect(0, 0, width, height);

      for (let i = 0; i < n; ++i) {
        context.fillStyle = "white";
        let p = particles[i];
        p.x += p.vx;
        if (p.x < -maxDistance) p.x += width + maxDistance * 2;
        else if (p.x > width + maxDistance) p.x -= width + maxDistance * 2;
        p.y += p.vy;
        if (p.y < -maxDistance) p.y += height + maxDistance * 2;
        else if (p.y > height + maxDistance) p.y -= height + maxDistance * 2;
        p.vx += 0.2 * (Math.random() - 0.5) - 0.01 * p.vx;
        p.vy += 0.2 * (Math.random() - 0.5) - 0.01 * p.vy;
        context.globalAlpha = 0.8;
        context.beginPath();
        context.arc(p.x, p.y, radius, 0, tau);
        context.fill();
      }

      for (let i = 0; i < n; ++i) {
        for (let j = i + 1; j < n; ++j) {
          context.strokeStyle = "white";
          let pi = particles[i],
            pj = particles[j],
            dx = pi.x - pj.x,
            dy = pi.y - pj.y,
            d2 = dx * dx + dy * dy;
          if (d2 < maxDistance2) {
            context.globalAlpha =
              d2 > minDistance2
                ? (maxDistance2 - d2) / (maxDistance2 - minDistance2)
                : 0.8;
            context.beginPath();
            context.moveTo(pi.x, pi.y);
            context.lineTo(pj.x, pj.y);
            context.stroke();
          }
        }
      }

      context.restore();
    }, 50);
  });
  return (
    <>
      <DivBG id="heroBanner">
        <canvas ref={(node) => (canvasNode = node)} />
        <DivContainer height={582}>
          <TextContainer>
            <H1>Invest In Someone Good</H1>
            <Motif fillColor="#fff" />
            <H3>
            AI Powered, Pro-Social Credit Unions
            </H3>
          </TextContainer>
        </DivContainer>
      </DivBG>
      <PartnerStrip />
    </>
  );
};

export default Map;
