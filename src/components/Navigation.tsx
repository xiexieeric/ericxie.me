import { Box, Container, Text, Image } from '@chakra-ui/react'
import { Link } from 'gatsby'
import React from 'react'

import wonderpal from '../images/wonderpal.png'

interface NavigationProps {}

export const Navigation: React.FC<NavigationProps> = ({}) => {
  return (
    <Box bgColor={'gray.600'} padding="12px">
      <Container maxW="6xl">
        <Box display={'flex'} alignItems={'center'} gap={'20px'} color="white">
          <Link to="/" style={{ display: 'inline' }}>
            <Image
              src={wonderpal}
              height={'36px'}
              display="inline"
              borderRadius="full"
              verticalAlign={'text-bottom'}
              marginRight="12px"
            />
            <Text
              display={['none', null, 'inline']}
              fontSize="3xl"
              fontWeight={'bold'}
            >
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
