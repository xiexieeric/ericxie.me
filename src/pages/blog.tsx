import { Box, Heading, Link, Text } from '@chakra-ui/react'
import { graphql, Link as GatsbyLink } from 'gatsby'
import * as React from 'react'
import { MainLayout } from '../layouts/MainLayout'
import moment from 'moment'

// markup
function BlogPage({ data }: { data: any }) {
  return (
    <MainLayout>
      <Text fontSize={'2xl'} fontWeight="bold" marginBottom="24px">
        Blog
      </Text>
      {data.allMdx.nodes.map(({ excerpt, frontmatter, slug, id }) => (
        <Box key={id} as="article" marginBottom="4">
          <Link as={GatsbyLink} to={`/blog/${slug}`}>
            <Heading fontSize="xl">{frontmatter.title}</Heading>{' '}
          </Link>
          <Box as="p">{moment(frontmatter.date).format('ll')}</Box>
        </Box>
      ))}
    </MainLayout>
  )
}

export default BlogPage

export const query = graphql`
  query SITE_INDEX_QUERY {
    allMdx(
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { published: { eq: true } } }
    ) {
      nodes {
        id
        excerpt(pruneLength: 250)
        frontmatter {
          title
          date
        }
        slug
      }
    }
  }
`
