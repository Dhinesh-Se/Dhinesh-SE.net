import { Container, Text } from "@chakra-ui/layout";
import { FiClock } from 'react-icons/fi'
import Tags from './Tags'

export default function PostMetadata({ frontMatter, showAuthor, showClock, ...props }) {

  return (
    <Container {...props}>
      <Text
        css={{ display: 'inline' }}
        mr={2}
        fontSize="sm" 
        color="gray.500">
        {showAuthor ? 'Dhinesh VD • ' : null}
        {new Date(frontMatter.date)
          .toLocaleDateString(undefined, { month: 'long', day: 'numeric', year: 'numeric'})}
        {' • '}
        {showClock
          ? <>
              <FiClock style={{ 
                display: "inline",
                verticalAlign: "middle",
              }} />
              {' '}
            </>
          : null}
        {frontMatter.readingTime.text}
      </Text>
      <Tags tags={frontMatter.tags} />
    </Container>
  )
}