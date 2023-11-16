import { Box, Container, Center } from "@chakra-ui/react"
import { ContadorResponsive } from "../ContadorResponsive/ContadorResponsive"

const Main = () => {

  

  return(
      <Box display='flex' bg='#dbedff'
          justifyContent='center' 
          alignItems='center'
          minH='100dvh'>
        <Container maxW='md'>
          <ContadorResponsive />
        </Container>
      </Box>
  )
}

export { Main }