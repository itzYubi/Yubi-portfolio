import React from 'react';

import { Section, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import Button from '../../styles/GlobalComponents/Button';
import { LeftSection } from './HeroStyles';
import Typewriter from "typewriter-effect";

const Hero = (props) => (
  <Section row nopadding>
    <LeftSection>
      <SectionTitle main center>
      I am a <br />
        <Typewriter options={{
          autoStart: true,
          loop: true,
        }} onInit={(typewriter) => { typewriter.typeString("developer.").pauseFor(1000).deleteAll().typeString("designer.").pauseFor(1000).deleteAll().typeString("programmer.").pauseFor(1000).deleteAll().start(); }} />
      </SectionTitle>
      <SectionText>
      Hello , my name is Utkarsh Bhandari. I am a Computer Science undergraduate at NIT Uttarakhand aspiring to be a software engineer. I am highly interested in Development, Cryptography and Network Security roles and research.
      </SectionText >
      <Button onClick={() => window.open("https://drive.google.com/drive/folders/1DNsvf8XBC6gbiOZ2rGvXUMM3xh4hfDj9", "_blank")} >Resume</Button>
    </LeftSection>

  </Section>
);

export default Hero;