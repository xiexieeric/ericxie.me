import { Box, Container, Text } from '@chakra-ui/react'
import { Link } from 'gatsby'
import React from 'react'

interface NavigationProps {}

export const Navigation: React.FC<NavigationProps> = ({}) => {
  return (
    <Box height={'50px'}>
      <Container maxW="6xl">
        <Box display={'flex'} alignItems={'center'} gap={'20px'}>
          <Link to="/" style={{ display: 'inline' }}>
            <Text display={'inline'} fontSize={'36px'}>
              Eric Xie
            </Text>
          </Link>
          <Link to="/about" style={{ display: 'inline' }}>
            <Text display={'inline'}>About</Text>
          </Link>
          <Link to="/blog" style={{ display: 'inline' }}>
            <Text display={'inline'}>Blog</Text>
          </Link>
        </Box>
      </Container>
    </Box>
  )
}
