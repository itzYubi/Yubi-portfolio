import React from 'react';
import { DiFirebase, DiCode, DiJenkins } from 'react-icons/di';
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
          <DiCode size="5rem" style={{marginLeft: '30px'}}/>
          </picture>
          <ListContainer>
            <ListTitle>Programming Languages and BackEnd</ListTitle>
            <ListParagraph>
              Experience with<br />
              C++, Java, Go, Spring, C, JavaScript, HTML, CSS, Angular, TypeScript
            </ListParagraph>
          </ListContainer>
        </ListItem>

        <ListItem>
          <picture >
          <DiJenkins size="5rem" style={{marginLeft: '30px'}}/>
          </picture>
          <ListContainer>
            <ListTitle>Automation</ListTitle>
            <ListParagraph>
              Experience with<br />
              Selenium, TestNG, Jenkins, Onprem and SaaS, UI & API Automation
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
              OracleDB, PostgreSQL, MySQL, MongoDB, Redis
            </ListParagraph>
          </ListContainer>
        </ListItem>

      </List>
  </Section>
);

export default Technologies;

