import {
  Container,
  Flex,
  List,
  ListItem,
  propNames,
  Text,
} from '@chakra-ui/react'
import { faGithub, faLinkedinIn } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

interface FooterProps {
  style: any
}

export const Footer: React.FC<FooterProps> = ({ style }) => {
  return (
    <footer style={style}>
      <Container maxW="6xl">
        <Flex flexDir={'column'} alignItems={'center'}>
          <Text fontSize={24}>Connect With Me</Text>
          <List
            display={'flex'}
            gap="16px"
            backgroundColor={'gray.200'}
            padding="12px"
            borderRadius={'12px'}
            margin="12px"
          >
            <ListItem>
              <a href="https://github.com/xiexieeric">
                <FontAwesomeIcon icon={faGithub} />
              </a>
            </ListItem>
            <ListItem>
              <a href="https://www.linkedin.com/in/xiexieeric/">
                <FontAwesomeIcon icon={faLinkedinIn} />
              </a>
            </ListItem>
          </List>
          <span>
            © {new Date().getFullYear()}, Built with{' '}
            <a href="https://www.gatsbyjs.org">Gatsby</a>
          </span>
        </Flex>
      </Container>
    </footer>
  )
}
