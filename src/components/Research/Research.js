import React from 'react';

import { BlogCard, CardInfo, ExternalLinks, GridContainer, HeaderThree, Hr, Tag, TagList, TitleContent, UtilityList, Img } from './ResearchStyles';
import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import { research } from '../../constants/constants';
import SimpleImageSlider from "react-simple-image-slider";

const Research = () => (
  <Section id="research">
    <SectionDivider/>
    <br />
    <SectionTitle>Research Work</SectionTitle>
    <GridContainer>
      {research.map((d, i) => {
        return (
          <BlogCard key={i}>
              <SimpleImageSlider
              height={220}
              width={400}
              images={d.image}
              navMargin={0}
              navSize={30}
              autoPlay={false}
              autoPlayDelay={2.5}
              showNavs={true} />
          <TitleContent>
              <HeaderThree title>{d.title}</HeaderThree>
              <Hr />
            </TitleContent><CardInfo className="card-info">{d.description}</CardInfo><div>
              <TitleContent>Stack</TitleContent>
              <TagList>
                {d.tags.map((t, i) => {
                  return <Tag key={i}>{t}</Tag>;
                })}
              </TagList>
            </div><UtilityList>
              <ExternalLinks target="_blank" href={d.source}>Article</ExternalLinks>
              <ExternalLinks target="_blank" href={d.visit}>Source</ExternalLinks>
            </UtilityList>
          </BlogCard>
        );
      })}
    </GridContainer>
  </Section>
);

export default Research;