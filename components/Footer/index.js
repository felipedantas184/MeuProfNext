import React from 'react'
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter, FaYoutube } from 'react-icons/fa'
import { FooterContainer, FooterWrap, FooterLinkWrapper, FooterLinkItems, FooterLinkContainer, FooterLinkTitle, FooterLink, SocialIconLink, SocialIcons, SocialLogo, SocialMedia, SocialMediaWrap, WebsiteRights } from './FooterStyles'
import { animateScroll as scroll } from 'react-scroll';
import Link from 'next/link';

const Footer = () => {
  const toggleHome = () => {
    scroll.scrollToTop();
  }

  return (
    <FooterContainer>
      <FooterWrap>
        <FooterLinkContainer>
          <FooterLinkWrapper>
            <FooterLinkItems>
              <FooterLinkTitle>About us</FooterLinkTitle>
                <Link href="/" passHref>
									<FooterLink>How it works</FooterLink>
								</Link>
	              <Link href="/" passHref>
									<FooterLink>Testimonials</FooterLink>
								</Link>
	              <Link href="/" passHref>
									<FooterLink>Carrers</FooterLink>
								</Link>
	              <Link href="/" passHref>
									<FooterLink>Investor</FooterLink>
								</Link>
	              <Link href="/" passHref>
									<FooterLink>Terms of Service</FooterLink>
								</Link>
	          </FooterLinkItems>
            <FooterLinkItems>
              <FooterLinkTitle>Contact Us</FooterLinkTitle>
                <Link href="/" passHref>
									<FooterLink>Contact</FooterLink>
								</Link>
	              <Link href="/" passHref>
									<FooterLink>Support</FooterLink>
								</Link>
	              <Link href="/" passHref>
									<FooterLink>Destinations</FooterLink>
								</Link>
	              <Link href="/" passHref>
									<FooterLink>Sponsorships</FooterLink>
								</Link>
	          </FooterLinkItems>
          </FooterLinkWrapper>

          <FooterLinkWrapper>
            <FooterLinkItems>
              <FooterLinkTitle>Videos</FooterLinkTitle>
                <Link href="/" passHref>
									<FooterLink>Submit Video</FooterLink>
								</Link>
	              <Link href="/" passHref>
									<FooterLink>Ambassadors</FooterLink>
								</Link>
	              <Link href="/" passHref>
									<FooterLink>Agency</FooterLink>
								</Link>
	              <Link href="/" passHref>
									<FooterLink>Influencer</FooterLink>
								</Link>
	          </FooterLinkItems>
            <FooterLinkItems>
              <FooterLinkTitle>Social Media</FooterLinkTitle>
                <Link href="/" passHref>
									<FooterLink>Instagram</FooterLink>
								</Link>
	              <Link href="/" passHref>
									<FooterLink>Facebook</FooterLink>
								</Link>
	              <Link href="/" passHref>
									<FooterLink>Youtube</FooterLink>
								</Link>
	              <Link href="/" passHref>
									<FooterLink>Twitter</FooterLink>
								</Link>
	          </FooterLinkItems>
          </FooterLinkWrapper>
        </FooterLinkContainer>
        <SocialMedia>
          <SocialMediaWrap>
            <Link href='/' passHref onClick={toggleHome}>
							<SocialLogo>
								MeuProf
							</SocialLogo>
            </Link>
            <WebsiteRights>MeuProf © {new Date().getFullYear()} All rights reserved.</WebsiteRights>
            <SocialIcons>
              <SocialIconLink href='/' target='_blank' arial-label='Facebook'>
                <FaFacebook />
              </SocialIconLink>
              <SocialIconLink href='//www.instagram.com/leonardtcomdt/' target='_blank' arial-label='Instagram'>
                <FaInstagram/>
              </SocialIconLink>
              <SocialIconLink href='//www.youtube.com/channel/UCF6Cz50AqAJcg6JC5LDRElg/videos?view_as=subscriber' target='_blank' arial-label='Youtube'>
                <FaYoutube />
              </SocialIconLink>
              <SocialIconLink href='/' target='_blank' arial-label='Twitter'>
                <FaTwitter/>
              </SocialIconLink>
              <SocialIconLink href='//www.linkedin.com/in/leonardtlauenstein/' target='_blank' arial-label='Linkedin'>
                <FaLinkedin />
              </SocialIconLink>
            </SocialIcons>
          </SocialMediaWrap>
        </SocialMedia>
      </FooterWrap>
    </FooterContainer>
  )
}

export default Footer
