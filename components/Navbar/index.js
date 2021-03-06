import Link from 'next/link'
import { useEffect, useState } from 'react';
import { FaBars } from 'react-icons/fa';
import { ExtLink, MobileIcon, NavbarBtn, NavbarBtnLink, NavbarContainer, NavbarItem, NavbarLinks, NavbarLogo, NavbarMenu, NavbarWrapper } from "./NavbarStyles";
import { animateScroll as scroll } from 'react-scroll';

const Navbar = ({ toggle }) => {
	const [scrollNav, setScrollNav] = useState(false)
  const changeNav = () => {
    if(window.scrollY >= 60) {
      setScrollNav(true)
    } else {
      setScrollNav(false)
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', changeNav)
  }, [])

  const toggleHome = () => {
    scroll.scrollToTop();
  }

	return ( 
		<NavbarContainer scrollNav={scrollNav}>
			<NavbarWrapper>
				<Link href="/" passHref>
					<NavbarLogo onClick={toggleHome}>MeuProf</NavbarLogo>
				</Link>
				<MobileIcon onClick={toggle}>
					<FaBars color="#fff" />
				</MobileIcon>
				<NavbarMenu>
					<NavbarItem>
						<NavbarLinks to='teachers'
          			smooth={true} duration={500} spy={true} exact='true' offset={-60}
						>Professores</NavbarLinks>
					</NavbarItem>
					<NavbarItem>
						<NavbarLinks to='highlights'
             		smooth={true} duration={500} spy={true} exact='true' offset={-60}
						>Motivos</NavbarLinks>
					</NavbarItem>
					<NavbarItem>
						<NavbarLinks to='perks'
								smooth={true} duration={500} spy={true} exact='true' offset={-60}
						>Vantagens</NavbarLinks>
					</NavbarItem>
					<NavbarItem>
						<NavbarLinks to='start'
								smooth={true} duration={500} spy={true} exact='true' offset={-60}
						>Enem</NavbarLinks>
					</NavbarItem>

					<NavbarBtn>
						<ExtLink href="https://api.whatsapp.com/send?phone=5586995185757&text=Ol%C3%A1!%20Gostaria%20de%20conhecer%20mais%20sobre%20o%20MeuProf.%0APode%20me%20ajudar%3F" target="blank" passHref >
							<NavbarBtnLink>Contato</NavbarBtnLink>
						</ExtLink>
					</NavbarBtn>
				</NavbarMenu>
				
				
			</NavbarWrapper>
		</NavbarContainer>
		);
}
 
export default Navbar;