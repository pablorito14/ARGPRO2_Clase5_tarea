import { useState } from 'react'
import {Box,Text,Link,Button,Center,Grid,GridItem} from '@chakra-ui/react'
import { motion,AnimatePresence } from 'framer-motion';
import { FaArrowDownLong,FaArrowUpLong } from 'react-icons/fa6';
import { Buttons } from '../Buttons/Buttons';

const MotionOperacion = ({xyInitial,xyAnimate,operacion,contador,color}) => {
  return (
    <motion.div initial={{...xyInitial,scale: 1}}
                animate={{...xyAnimate,scale: 0}} 
                transition={{ type:'spring',stiffness: 20 }}
                key={`${contador}`}>
        <Text as='strong' fontSize='5xl' color={color} position='absolute' textAlign='center'>{operacion}</Text>  
    </motion.div>
  )
}

const MotionDrag = () => {
  
  return (
    <Grid templateColumns='repeat(2,1fr)'
          borderWidth={3} borderColor='#4354658c' h='200px' w='full' 
          borderStyle='dashed' rounded='md'>
      <GridItem>
        <Center h='full' color='red.400' display='flex' flexDirection='column'>
          <FaArrowDownLong size='5rem'/>
          <Text>Deslizar abajo</Text>
        </Center>
      </GridItem>
      <GridItem>
        <Center h='full' color='green.400' display='flex' flexDirection='column'>
          <FaArrowUpLong size='5rem'/>
          <Text>Deslizar arriba</Text>
        </Center>
      </GridItem>
    </Grid>
  )
}

const ContadorResponsive = () => {

  const [contador,setContador] = useState(10);
  const [operacion,setOperacion] = useState('')

  const sumarContador = () => {
    setContador(contador+1);
    setOperacion('+1');
  }

  const resetContador = () => {
    setContador(0);
    setOperacion('0')
  }

  const restarContador = () => {
    if(contador > 0){
      setContador(contador-1);
      setOperacion('-1');
    }
  }

  document.onkeydown = function(e) {
    if(!e.repeat && e.key === 'ArrowUp'){
      sumarContador();
    } else if(!e.repeat && e.key === 'ArrowDown'){
      restarContador();
    }
    
  };

  return(

    <Center display='flex' flexDirection='column' gap='.75rem'>
      <Box display='flex' flexDirection='column' color='#435465'>
        
      
        <Text as='strong' fontSize='8xl' textAlign='center'>

            <motion.div initial={{opacity: 0,scale: 0.1}} animate={{opacity: 1,scale: 1}} 
                        transition={{duration: 0.5}} exit={{opacity:0,scale:2}}
                        key={contador}>{contador}</motion.div>
        </Text>
      </Box>
      <Grid templateColumns={{base: 'repeat(2,1fr)',md:'repeat(3,1fr)'}} gap='.75rem'>
        <GridItem colSpan={1}>
          {operacion == '-1' && <MotionOperacion 
          // xInicial={'0%'} xAnimate={'-50%'} 
          operacion={operacion} contador={contador} color={'red.400'}
          xyInitial={{x:'0%',y:-50}} xyAnimate={{x:'-50%',y:-50}} />}
          <Buttons contador={contador} handler={restarContador} texto={'Restar'} disabled={contador <= 0}/>
        </GridItem>
        <GridItem colSpan={1} order={{base:0, md:1}}>
          {operacion == '+1' && <MotionOperacion 
          // xInicial={'50%'} xAnimate={'50%'} 
          operacion={operacion} contador={contador} color={'green.400'}
          xyInitial={{x:'50%',y:-50}} xyAnimate={{x:'50%',y:-50}}/>}
          <Buttons contador={contador} handler={sumarContador} texto={'Sumar'}/>
        </GridItem>
        <GridItem colSpan={{base: 2,md:1}} order={{base:1, md:0}}>
          <Buttons contador={contador} handler={resetContador} texto={'Resetear'} disabled={contador <= 0}/>
        </GridItem>

      </Grid>

      <MotionDrag />
    </Center>

  )
}

export { ContadorResponsive }