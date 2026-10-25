import React from 'react';
import {registerRoot,Composition} from 'remotion';
import {IntroScene} from '../src/IntroScene';
registerRoot(() => <Composition id="EvidenceLandscape" component={IntroScene} durationInFrames={720} fps={60} width={1920} height={1080} />);
