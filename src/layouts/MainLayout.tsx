import { Container } from '@chakra-ui/react'
import React from 'react'
import { Navigation } from '../components/Navigation'
import { Footer } from '../components/Footer'

interface MainLayoutProps {
  children: React.ReactNode
}

export const MainLayout: React.FC<MainLayoutProps> = ({ children }) => {
  return (
    <div>
      <Navigation />
      <Container maxW="6xl">{children}</Container>
      <Footer />
    </div>
  )
}
