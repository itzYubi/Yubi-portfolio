import React from 'react';
import { AiFillGithub, AiFillInstagram, AiFillLinkedin } from 'react-icons/ai';

import { SocialIcons } from '../Header/HeaderStyles';
import { CompanyContainer, FooterWrapper, LinkColumn, LinkItem, LinkList, LinkTitle, Slogan, SocialContainer, SocialIconsContainer } from './FooterStyles';

const Footer = () => {
  return (
    <FooterWrapper>
      <LinkList>
        <LinkColumn>
          <LinkTitle>Call (+91 Extension)</LinkTitle>
          <LinkItem href="tel:9897238030">9897238030</LinkItem>
        </LinkColumn>
        <LinkColumn>
          <LinkTitle>Email</LinkTitle>
          <LinkItem href="mailto:utkarsh.b1358@gmail.com">
          utkarsh.b1358@gmail.com
          </LinkItem>
        </LinkColumn>
      </LinkList>
      <SocialIconsContainer>
        <CompanyContainer>
          <Slogan>Thanks for the visit!</Slogan>
        </CompanyContainer>
        <SocialContainer>
          <SocialIcons target="_blank" href="https://github.com/itzYubi">
            <AiFillGithub size="3rem" />
          </SocialIcons>
          <SocialIcons target="_blank" href="https://www.linkedin.com/in/utkarsh-bhandari/">
            <AiFillLinkedin size="3rem" />
          </SocialIcons>
          <SocialIcons target="_blank" href="https://www.instagram.com/its__ub_/?hl=en">
            <AiFillInstagram size="3rem" />
          </SocialIcons>
        </SocialContainer>
      </SocialIconsContainer>
    </FooterWrapper>
  );
};

export default Footer;