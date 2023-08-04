import React from 'react';

import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import { Sa, Box, Boxes, BoxNum, BoxText } from './AcomplishmentsStyles';

const data = [
  { number: 'Specialist', text: 'CodeForces'},
  { number: '20+', text: 'Open Source Projects'},
  { number: '500+', text: 'Hours of Code', },
  { number: '10000+', text: 'Lines of Code', }
];

const Acomplishments = () => (
  <Section>
    <SectionDivider />
    <br/>
    <SectionTitle>Personal Achievements</SectionTitle>
    <Boxes>
      {data.map((card, index) => (
        <Box key={index}>
          <BoxNum>{`${card.number}`}</BoxNum>
          { (card.text === "CodeForces") ? (
            <BoxText>
              <Sa href="https://codeforces.com/profile/Clandestine_shh" target="_blank">
                {card.text}
              </Sa>
              &nbsp;&lt;- the link
            </BoxText>
           ) : (
            <BoxText>{card.text}</BoxText>
           )}
        </Box>
      ))}
    </Boxes>
  </Section>
);

export default Acomplishments;