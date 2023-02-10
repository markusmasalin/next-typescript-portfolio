import { ReactNode } from 'react'
import Footer from './footer/Footer'
import NavBar from './header/NavBar'


type Props = {
    children?: ReactNode
  }
  
const Layout = ({ children }: Props) => {
  return (
    <>
      <NavBar />
      <main>{children}</main>
      <Footer />
    </>
  )
}

export default Layout;