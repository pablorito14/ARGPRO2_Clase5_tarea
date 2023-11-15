import { Button,Text } from '@chakra-ui/react'
import { motion } from 'framer-motion';

const Buttons = ({handler,texto,disabled}) => {
  return(
   <>
    <motion.div whileHover={{ scale: 0.9}} whileTap={{scale: 1.1}} 
                  transition={{ type: "spring", stiffness: 400, damping: 17 }}>
      <Button color='#dbedff' size='lg' px='2rem' bg='#435465' colorScheme='none'
              textTransform='uppercase' onClick={handler}
              isDisabled={disabled}>{texto}</Button>
    </motion.div>
  </> 
  )
}

export { Buttons }