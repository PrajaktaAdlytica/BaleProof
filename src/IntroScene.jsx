import React from 'react';
import {AbsoluteFill, Img, interpolate, useCurrentFrame, useVideoConfig, staticFile,Easing} from 'remotion';
const clamp={extrapolateLeft:'clamp',extrapolateRight:'clamp',easing:Easing.inOut(Easing.cubic)};
export function IntroScene(){
  const frame=useCurrentFrame(),{fps}=useVideoConfig();
  return <AbsoluteFill style={{backgroundColor:'#f5f2eb',overflow:'hidden'}}>
    <Img src={staticFile('images/intro-landscape-clean.webp')} style={{width:'100%',height:'100%',objectFit:'cover'}}/>
    {/* A soft editorial light pass reveals material, review and context; no equipment actuation. */}
    <AbsoluteFill style={{background:'linear-gradient(105deg,transparent 30%,rgba(255,247,221,.32) 49%,transparent 66%)',width:'160%',translate:`${interpolate(frame,[0,12*fps],[-65,65],clamp)}% 0`,mixBlendMode:'soft-light'}}/>
    <AbsoluteFill style={{background:'radial-gradient(ellipse at 58% 63%,rgba(255,247,225,.24),transparent 30%)',opacity:interpolate(frame,[3*fps,5*fps,7*fps],[0,1,0],clamp)}}/>
    <AbsoluteFill style={{background:'radial-gradient(ellipse at 85% 62%,rgba(255,247,225,.22),transparent 28%)',opacity:interpolate(frame,[7*fps,9*fps,12*fps],[0,1,0],clamp)}}/>
  </AbsoluteFill>;
}
