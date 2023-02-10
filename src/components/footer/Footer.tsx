import React from 'react'
import styled from 'styled-components'

const FooterWrapper = styled.footer`
  background-color: #333;
  color: #fff;
  padding: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
`

const FooterText = styled.p`
  margin: 0;
`

const Footer = () => (
  <FooterWrapper>
    <FooterText>
      This is the footer
    </FooterText>
  </FooterWrapper>
)

export default Footer