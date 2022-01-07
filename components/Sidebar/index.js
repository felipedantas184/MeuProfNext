import { SidebarContainer, Icon, CloseIcon, SidebarWrapper, SidebarMenu, SidebarLink, SidebarRoute, SideBtnWrap, ExtLink, SidebarHeading } from './SidebarStyles'

const Sidebar = ({isOpen,toggle}) => {
  return (
    <SidebarContainer isOpen={isOpen}>
      <Icon onClick={toggle}>
        <CloseIcon />
      </Icon>
      <SidebarWrapper>
        <SidebarHeading>MeuProf</SidebarHeading>
        <SidebarMenu>
          <div></div>
          <SidebarLink to='teachers' onClick={toggle}>Professores</SidebarLink>
          <SidebarLink to='highlights' onClick={toggle}>Motivos</SidebarLink>
          <SidebarLink to='perks' onClick={toggle}>Vantagens</SidebarLink>
          <SidebarLink to='start' onClick={toggle}>Enem</SidebarLink>
        </SidebarMenu>
        <SideBtnWrap>
          <ExtLink href="https://api.whatsapp.com/send?phone=5586995185757&text=Ol%C3%A1!%20Gostaria%20de%20conhecer%20mais%20sobre%20o%20MeuProf.%0APode%20me%20ajudar%3F" target="blank" passHref >
            <SidebarRoute>Contato</SidebarRoute>
          </ExtLink>
        </SideBtnWrap>
      </SidebarWrapper>
    </SidebarContainer>
  )
}

export default Sidebar
