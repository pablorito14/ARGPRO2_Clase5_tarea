import {Box,Container, Text} from '@chakra-ui/react';

const Footer = () => {
  return(
    <Box as='footer' bg='#435465' color='#dbedff' position='fixed' w='full' bottom='0'>
      <Container maxW='3xl' py='.25rem'>
        <Text>Pablo Rito</Text>
      </Container>
    </Box>
  )
}

export { Footer }