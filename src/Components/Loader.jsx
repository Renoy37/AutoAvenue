import React from 'react';
import { metronome } from 'ldrs';

metronome.register();

const MetronomeComponent = () => (
  <div className='h-dvh'>
    <l-metronome size="90" speed="1.6" color="black"></l-metronome>
  </div>
);

export default MetronomeComponent;
