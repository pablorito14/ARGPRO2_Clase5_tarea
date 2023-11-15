import {Container,Heading,Box} from '@chakra-ui/react'


const Header = () => {
  return(
    <Box as='header' bg='#435465' color='#dbedff' position='fixed' w='full'>
      <Container maxW='3xl' py='.25rem'>
        <Heading>Contador Responsive</Heading>
      </Container>
    </Box>
  )
}

export { Header }