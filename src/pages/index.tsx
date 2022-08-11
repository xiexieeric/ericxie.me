import { Box, Image, Text, Flex, Icon, Button } from '@chakra-ui/react'
import * as React from 'react'
import { MainLayout } from '../layouts/MainLayout'
import propic from '../images/eric.jpg'
import ggbridge from '../images/ggbridge.png'

// markup
const IndexPage = () => {
  return (
    <MainLayout>
      <Box>
        <Flex alignItems={'center'} justifyContent={'space-between'}>
          <Box>
            <Text fontSize={'36px'} fontWeight={'bold'}>
              Hi! I'm Eric
            </Text>
            <Text marginTop={'24px'} fontSize={'24px'} color={'gray'}>
              I'm a software developer who also enjoys climbing, mechanical
              keyboards, and Call of Duty: Warzone
            </Text>
            <Text marginTop={'24px'} fontSize={'24px'} color={'gray'}>
              I'm based in San Francisco{' '}
              <Image src={ggbridge} height={36} alt="golden gate bridge icon" />
            </Text>
          </Box>
          <Image borderRadius="full" boxSize="300px" src={propic} />
        </Flex>
        <Button colorScheme={'primary'}>Press Me!</Button>
      </Box>
    </MainLayout>
  )
}

export default IndexPage
