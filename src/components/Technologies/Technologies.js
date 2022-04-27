import React from 'react';
import { DiFirebase, DiCode, DiReact, DiZend } from 'react-icons/di';
import { Section, SectionDivider, SectionText, SectionTitle } from '../../styles/GlobalComponents';
import { List, ListContainer, ListItem, ListParagraph, ListTitle } from './TechnologiesStyles';

const Technologies = () =>  (
  <Section id="tech">
    <SectionDivider />
    <br/>
    <SectionTitle>Technologies</SectionTitle>
    <SectionText>
        I've worked on a wide range of Technologies from Back-end to Design.
      </SectionText>
      <List>
        <ListItem>
          <picture >
          <DiCode size="5rem" style={{marginLeft: '55px'}}/>
          </picture>
          <ListContainer>
            <ListTitle>Programming Languages and BackEnd</ListTitle>
            <ListParagraph>
              Experience with<br />
              C++, Java, Spring, JavaScript, C
            </ListParagraph>
          </ListContainer>
        </ListItem>

        <ListItem>
          <picture >
          <DiReact size="5rem" style={{marginLeft: '30px'}}/>
          </picture>
          <ListContainer>
            <ListTitle>FrontEnd</ListTitle>
            <ListParagraph>
              Experience with<br />
              React.js
            </ListParagraph>
          </ListContainer>
        </ListItem>

        <ListItem>
          <picture >
          <DiFirebase size="5rem" style={{ marginLeft: '30px'}}/>
          </picture>
          <ListContainer>
            <ListTitle>Database</ListTitle>
            <ListParagraph>
              Experience with<br />
              OracleDB, PostgreSQL, MySQL
            </ListParagraph>
          </ListContainer>
        </ListItem>

      </List>
  </Section>
);

export default Technologies;

