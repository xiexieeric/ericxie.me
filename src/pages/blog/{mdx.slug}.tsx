import { Box, Container } from '@chakra-ui/react'
import { graphql } from 'gatsby'
import { MDXRenderer } from 'gatsby-plugin-mdx'
import React from 'react'
import { MainLayout } from '../../layouts/MainLayout'

export default function PostPage({ data }) {
  const {
    body,
    frontmatter: { title },
  } = data.mdx
  return (
    <MainLayout>
      <Container>
        <Box as="h1" fontSize="4xl" marginBottom={'24px'}>
          {title}
        </Box>
        <MDXRenderer>{body}</MDXRenderer>
      </Container>
    </MainLayout>
  )
}

export const query = graphql`
  query POST_BY_SLUG($slug: String) {
    mdx(slug: { eq: $slug }) {
      id
      slug
      body
      frontmatter {
        date
        title
      }
    }
  }
`
