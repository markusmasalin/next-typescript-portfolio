import { ReactNode } from 'react'
import Footer from './footer/Footer'
import Header from './header/Header'

type Props = {
    children?: ReactNode
  }
  
const Layout = ({ children }: Props) => {
  return (
    <>
      <Header />
      <main>{children}</main>
      <Footer />
    </>
  )
}

export default Layout;