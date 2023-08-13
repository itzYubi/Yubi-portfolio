import React from 'react';
import { WorkExperienceData } from '../../constants/constants';
import { Section, SectionDivider, SectionTitle } from '../../styles/GlobalComponents';
import SimpleImageSlider from "react-simple-image-slider";
import { BlogCard, CardInfo, ExternalLinks, GridContainer, HeaderThree, Hr, Tag, TagList, TitleContent, UtilityList, Img, Intro } from './WorkExperienceStyles';

const WorkExperience = () => (
    <Section id="workExperience">
        <SectionDivider/>
        <br/>
        <SectionTitle>Work Experience</SectionTitle>
        <GridContainer>
            { WorkExperienceData.map((p, i) => {
                return (
                    <BlogCard key={i}>
                        <SimpleImageSlider style={"align-content: center;"}
                            height={220}
                            width={400}
                            images={p.image}
                            navMargin={0}
                            navSize={30}
                            autoPlay={true}
                            autoPlayDelay={2}
                            showNavs={false} />
                        <TitleContent>
                        <HeaderThree>{p.company}</HeaderThree>
                        <Intro>Role: {p.role}</Intro>
                        <Hr />
                        </TitleContent>
                        <CardInfo className="card-info">{p.description}</CardInfo>
                        <div>
                        <br></br>
                        <TitleContent>-------------- Tech Stack --------------</TitleContent>
                        <TagList>
                            {p.tags.map((t, i) => {
                            return <Tag key={i}>{t}</Tag>;
                            })}
                        </TagList>
                        </div>
                        <UtilityList>
                            <ExternalLinks>{p.startDate} - {p.endDate}</ExternalLinks>
                            <ExternalLinks target="_blank" href={p.website}>Company Website</ExternalLinks>
                        </UtilityList>
                    </BlogCard>
                );
            })

            }
        </GridContainer>
    </Section>
);

export default WorkExperience;