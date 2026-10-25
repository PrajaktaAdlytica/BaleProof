export const INTRO_FPS = 60;
export const INTRO_SECONDS = 12;
export const INTRO_FRAMES = INTRO_FPS * INTRO_SECONDS;
export const ease = (value) => {const p=Math.max(0,Math.min(1,value));return p*p*(3-2*p);};
