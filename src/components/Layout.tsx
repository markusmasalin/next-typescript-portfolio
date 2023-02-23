import { ReactNode } from 'react'
import styled from 'styled-components'
import Footer from './footer/Footer'
import NavBar from './header/NavBar'


type Props = {
    children?: ReactNode
}

const ContentDiv = styled.div`
  min-height: 800px;
`
  
const Layout = ({ children }: Props) => {
  return (
    <>
      <NavBar />
      <ContentDiv>  
        <main>{children}</main>

      </ContentDiv>
     
      <Footer />
    </>
  )
}

export default Layout;