import React, {useEffect} from 'react';
import {Player} from '@remotion/player';
import {IntroScene} from './IntroScene';
import {INTRO_FPS,INTRO_FRAMES} from './intro-timing';
export default function IntroPlayer({playerRef,onFrame,onEnded,onPlaying,paused}) {
  useEffect(()=>{
    const p=playerRef.current;
    if(!p)return;
    const frame=(e)=>onFrame(e.detail.frame);
    const play=()=>onPlaying(true), pause=()=>onPlaying(false);
    p.addEventListener('frameupdate',frame);
    p.addEventListener('ended',onEnded);
    p.addEventListener('play',play);p.addEventListener('pause',pause);
    const section=document.getElementById('intro');
    let visible=false;
    const sync=()=>{
      if(visible&&!document.hidden&&!paused&&p.getCurrentFrame()<INTRO_FRAMES-1)p.play();
      else p.pause();
    };
    const observer=new IntersectionObserver(([entry])=>{visible=entry.isIntersecting&&entry.intersectionRatio>=0.4;sync();},{threshold:0.4});
    if(section)observer.observe(section);
    document.addEventListener('visibilitychange',sync);
    return()=>{observer.disconnect();document.removeEventListener('visibilitychange',sync);p.removeEventListener('frameupdate',frame);p.removeEventListener('ended',onEnded);p.removeEventListener('play',play);p.removeEventListener('pause',pause);};
  },[playerRef,onFrame,onEnded,onPlaying,paused]);
  return <Player ref={playerRef} component={IntroScene} durationInFrames={INTRO_FRAMES} fps={INTRO_FPS} compositionWidth={1920} compositionHeight={1080} controls={false} initiallyMuted={true} numberOfSharedAudioTags={0} autoPlay={false} loop={false} moveToBeginningWhenEnded={false} clickToPlay={false} doubleClickToFullscreen={false} spaceKeyToPlayOrPause={false} style={{width:'100%',height:'100%'}} />;
}
