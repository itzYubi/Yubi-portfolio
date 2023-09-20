import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection, Img } from './HeroStyles';
import Typewriter from "typewriter-effect";

const Hero = (props) => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
      I am <br />
        <Typewriter options={{
          autoStart: true,
          loop: true,
        }} onInit={(typewriter) => { typewriter
          .typeString("a developer.").pauseFor(1000).deleteAll()
          .typeString("Yubi").pauseFor(1000).deleteAll()
          .typeString("a designer.").pauseFor(1000).deleteAll()
          .typeString("a programmer.").pauseFor(1000).deleteAll()
          .start(); }} />
      </SectionTitle>
      <SectionText>
      Hello , my name is Utkarsh Bhandari. 
      I am a Software Engineer at AlgoSec. I recently completed my undergraduate from NIT Uttarakhand. I am a CS major.
      I am passionate about Software Development, Cryptography, Computer Networks and Network Security.
      </SectionText >
      <Button onClick={() => window.open("https://drive.google.com/drive/folders/1DNsvf8XBC6gbiOZ2rGvXUMM3xh4hfDj9", "_blank")} >Resume</Button>
    </LeftSection>

  </Section>
);

export default Hero;