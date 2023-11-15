import { useState } from 'react'
import {Box,Text,Link,Button,Center} from '@chakra-ui/react'
import { motion,AnimatePresence } from 'framer-motion';
import { Buttons } from '../Buttons/Buttons';

const MotionOperacion = ({xInicial,xAnimate,operacion,contador,color}) => {
  return (
    <motion.div initial={{x:xInicial,y:-50,scale: 1}}
                animate={{x:xAnimate,y:-50,scale: 0}} 
                transition={{ type:'spring',stiffness: 20 }}
                key={`${contador}`}>
        <Text as='strong' fontSize='5xl' color={color} position='absolute' textAlign='center'>{operacion}</Text>  
    </motion.div>
  )
}

const ContadorResponsive = () => {

  const [contador,setContador] = useState(0);
  const [operacion,setOperacion] = useState('')

  const sumarContador = () => {
    setContador(contador+1);
    setOperacion('+1');
  }
  const restarContador = () => {
    setContador(contador-1);
    setOperacion('-1');
  }

  return(

    <Center display='flex' flexDirection='column' gap='.75rem'>
      <Box display='flex' flexDirection='column' color='#435465'>
        
      
        <Text as='strong' fontSize='8xl' textAlign='center'>

            <motion.div initial={{opacity: 0,scale: 0.1}} animate={{opacity: 1,scale: 1}} 
                        transition={{duration: 0.5}} exit={{opacity:0,scale:2}}
                        key={contador}>{contador}</motion.div>
        </Text>
      </Box>
      <Box display='flex' gap='.75rem'>
        <Box>
          {operacion == '-1' && <MotionOperacion xInicial={'0%'} xAnimate={'-50%'} operacion={operacion} contador={contador} color={'red.400'}/>
          // <motion.div
          //             initial={{x:'0%',y:-50,scale: 1}}
          //             animate={{x:'-50%',y:-50,scale: 0}} 
          //             transition={{ type:'spring',stiffness: 20 }}
          //             key={`${contador}`}>
          //   <Text as='strong' fontSize='5xl' color='red.400' position='fixed' textAlign='center'>{operacion}</Text>  
          // </motion.div>
          }
          <Buttons contador={contador} handler={restarContador} texto={'Restar'} disabled={contador <= 0}/>
        </Box>
        <Box>
          {operacion == '+1' && <MotionOperacion xInicial={'50%'} xAnimate={'50%'} operacion={operacion} contador={contador} color={'green.400'}/>
          // <motion.div

          //             initial={{x:'50%',y:-50,scale: 1}}
          //             animate={{x:'50%',y:-50,scale: 0}} 
          //             transition={{ type:'spring',stiffness: 20 }}
          //             key={`${contador}`}>
          //   <Text as='strong' fontSize='5xl' color='green.400' position='absolute' textAlign='center'>{operacion}</Text>  
          // </motion.div>
          }
          <Buttons contador={contador} handler={sumarContador} texto={'Sumar'}/>
        </Box>

      </Box>
    </Center>

  )
}

export { ContadorResponsive }