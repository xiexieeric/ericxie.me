import { Container } from '@chakra-ui/react'
import React from 'react'
import { Navigation } from '../components/Navigation'
import { Footer } from '../components/Footer'
import { Helmet } from 'react-helmet'

import favicon from '../images/wonderpal.png'

interface MainLayoutProps {
  children: React.ReactNode
}

export const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  return (
    <div>
      <Helmet>
        <link rel="shortcut icon" type="image/png" href={favicon} />
      </Helmet>
      <Navigation />
      <Container maxW="6xl" marginTop="36px">
        {children}
      </Container>
      <Footer style={{ marginTop: '36px' }} />
    </div>
  )
}
