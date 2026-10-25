import React,{lazy,Suspense,useRef,useState,useCallback,useEffect,useLayoutEffect} from 'react';
import {ArrowDown,ArrowUpRight,Pause,Play} from '@phosphor-icons/react';
import gsap from 'gsap';
import {lockPageScroll,scrollPageTo} from './motion';
import {INTRO_FPS,INTRO_FRAMES,INTRO_SECONDS,ease} from './intro-timing';
import './intro.css';
const IntroPlayer=lazy(()=>import('./IntroPlayer'));
export default function Intro({motion}) {
  const player=useRef(null),section=useRef(null),closing=useRef(false);
  const [frame,setFrame]=useState(0),[ended,setEnded]=useState(false),[leaving,setLeaving]=useState(false),[playing,setPlaying]=useState(false),[paused,setPaused]=useState(false);
  const updateFrame=useCallback(f=>{if(f<3)scrollPageTo(0,true);setFrame(f);},[]);
  const updatePlaying=useCallback(value=>setPlaying(value),[]);
  const finish=useCallback(()=>{
    if(closing.current)return;
    closing.current=true;setPaused(true);setPlaying(false);setLeaving(true);player.current?.pause();
  },[]);
  // The opening is a fixed film over the real hero. Nothing in the document moves.
  useLayoutEffect(()=>{
    if(ended)return;
    const header=document.querySelector('.site-header');
    const covered=[...document.querySelectorAll('#main > :not(#intro),#site-footer')];
    const previousOverflow=document.body.style.overflow;
    covered.forEach(el=>el.inert=true);if(header)header.inert=true;
    window.scrollTo({top:0,left:0,behavior:'instant'});
    lockPageScroll(true);document.body.style.overflow='hidden';
    return()=>{covered.forEach(el=>el.inert=false);if(header)header.inert=false;document.body.style.overflow=previousOverflow;lockPageScroll(false);};
  },[ended]);
  useEffect(()=>{
    if(!leaving||ended)return;
    const header=document.querySelector('.site-header');
    header?.classList.add('intro-nav-visible');
    const tween=gsap.to(section.current,{opacity:0,duration:motion?1.8:0,ease:'power2.inOut',onComplete:()=>{
      setEnded(true);
    }});
    return()=>tween.kill();
  },[leaving,ended,motion]);
  useEffect(()=>{if(ended)document.querySelector('#home-story h1')?.focus({preventScroll:true});},[ended]);
  useEffect(()=>()=>{document.querySelector('.site-header')?.classList.remove('intro-nav-visible');},[]);
  useEffect(()=>{scrollPageTo(0,true);},[]);
  const seconds=frame/INTRO_FPS;
  const phase=seconds<4?0:seconds<8?1:2;
  const focus=seconds<4?.22+ease(seconds/4)*.30:seconds<8?.52+ease((seconds-4)/4)*.28:.80;
  const wordStyle=(index)=>{
    const p=motion?ease((seconds-.5-index*.24)/1.5):1;
    return {opacity:p,transform:`translate3d(0,${(1-p)*14}px,0)`};
  };
  if(ended)return null;
  return <section ref={section} id="intro" data-lenis-prevent style={{'--intro-focus':focus}} className={`evidence-intro ${motion?'':'intro-static'} ${leaving?'intro-leaving':''}`} aria-labelledby="intro-heading">
    <div className="intro-art" aria-hidden="true">
      <img className="intro-poster" src="/images/intro-landscape-clean.webp" alt="" fetchPriority="high" />
      {motion&&<Suspense fallback={null}><IntroPlayer playerRef={player} onFrame={updateFrame} onEnded={finish} onPlaying={updatePlaying} paused={paused}/></Suspense>}
    </div>
    <img className="intro-brand" src="/brand/baleproof-horizontal-burgundy.svg" alt="BaleProof"/>
    <button className="intro-skip" onClick={finish} disabled={leaving}>{motion?'Skip intro':'Explore BaleProof'}<ArrowUpRight size={18}/></button>
    <div className="intro-copy">
      <p className="intro-kicker">The evidence landscape</p>
      <h2 id="intro-heading" aria-label="From scattered material to a traceable story.">
        <span className="intro-line" aria-hidden="true">{['From','scattered','material'].map((word,i)=><span className="intro-word" key={word} style={wordStyle(i)}>{word}{' '}</span>)}</span>
        <em className="intro-line" aria-hidden="true">{['to','a','traceable','story.'].map((word,i)=><span className="intro-word" key={word} style={wordStyle(i+3)}>{word}{' '}</span>)}</em>
      </h2>
      <p className="intro-support" style={{opacity:motion?ease((seconds-3.5)/1.4):1}}>One source. One bale. A record people can review.</p>
    </div>
    <div className="intro-story" aria-hidden="true">
      {['Observe the material.','Review the source.','Carry the context.'].map((line,i)=>{
        const start=i*4;
        const opacity=motion?ease((seconds-start-.5)/1.2)*(1-ease((seconds-start-3.2)/.8)):(i===1?1:0);
        return <span key={line} style={{opacity,transform:`translateY(${(1-opacity)*8}px)`}}><small>0{i+1}</small>{line}</span>;
      })}
    </div>
    <div className="intro-footer">
      <div className="intro-chapters" aria-label="Intro sequence">
        {['Observe','Review','Context'].map((name,i)=><span key={name} className={phase===i?'active':''}>0{i+1} <b>{name}</b></span>)}
      </div>
      <div className="intro-controls">
        {motion&&<button disabled={leaving} onClick={()=>setPaused(!paused)} aria-label={playing?'Pause intro':'Play intro'}>{playing?<Pause size={16}/>:<Play size={16}/>}<span>{playing?'Pause':'Play'}</span></button>}
        <button disabled={leaving} className="intro-continue" onClick={finish}>Explore BaleProof<ArrowDown size={17}/></button>
      </div>
    </div>
    <p className="intro-disclosure">Illustrative concept · Human review · No equipment control</p>
    <div className="intro-progress" role="progressbar" aria-label="Intro progress" aria-valuemin={0} aria-valuemax={INTRO_SECONDS} aria-valuenow={Math.min(INTRO_SECONDS,Math.round(seconds))}><span style={{width:`${frame/(INTRO_FRAMES-1)*100}%`}}/></div>
  </section>;
}
