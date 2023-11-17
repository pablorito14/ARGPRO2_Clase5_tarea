import { useState } from 'react'
import {Box,Text,Center,Grid,GridItem} from '@chakra-ui/react'
import { motion} from 'framer-motion';
import { FaArrowDownLong,FaArrowUpLong } from 'react-icons/fa6';
import { Buttons } from '../Buttons/Buttons';

const MotionOperacion = ({operacion,contador,color}) => {

  return (
    <motion.div initial={{ x:'50%', y:0,scale:1 }}
                animate={{ x:'50%', y:0,scale:0 }}
                transition={{ type:'spring',stiffness: 20 }}
                key={`${contador}`}>
        <Text as='strong' fontSize='5xl' color={color} position='fixed' textAlign='center'>{operacion}</Text>  
    </motion.div>
  )
}



const MotionDrag = ({restar,sumar}) => {

  const [dragDown,setDragDown] = useState(0);
  const [dragUp,setDragUp] = useState(0)

  const captureStartDrag = (e,info) => {
    setDragDown(info.point.y);
    setDragUp(info.point.y);
  }

  const captureDownEndDrag = (e,info) => {
    if(dragDown < info.point.y){
      restar();
    }
  }

  const captureUpEndDrag = (e,info) => {
    if(dragUp > info.point.y){
      sumar();
    }
  }
  

  return (
    <Grid templateColumns='repeat(2,1fr)'
          borderWidth={3} borderColor='#4354658c' w='full' 
          borderStyle='dashed' rounded='md'>
      <GridItem my='auto' py='auto'>
        <motion.div drag='y' dragConstraints={{left:0,right:0,top:0,bottom:0}}
                    onDragStart={captureStartDrag} onDragEnd={captureDownEndDrag}
                    dragElastic={{top:0,bottom:0.2}}>
        <Center  py='auto' color='red.400'
                display='flex' h='200px' flexDirection='column'>
            <FaArrowDownLong size='5rem'/>
            <Text>Deslizar abajo</Text>
        </Center>
          </motion.div>
      </GridItem>
      <GridItem>
      <motion.div drag='y' dragConstraints={{left:0,right:0,top:0,bottom:0}}
                    onDragStart={captureStartDrag} onDragEnd={captureUpEndDrag}
                    dragElastic={{top:0.2,bottom:0}}>
          <Center color='green.400'
                  display='flex' h='200px' flexDirection='column'>
            <FaArrowUpLong size='5rem'/>
            <Text>Deslizar arriba</Text>
          </Center>
        </motion.div>
      </GridItem>
    </Grid>
  )
}

const ContadorResponsive = () => {

  const [contador,setContador] = useState(0);
  const [operacion,setOperacion] = useState('');
  const [color,setColor] = useState('');

  const sumarContador = () => {
    setContador(contador+1);
    setOperacion('+1');
    setColor('green.400');
  }

  const restarContador = () => {
    if(contador > 0){
      setContador(contador-1);
      setOperacion('-1');
      setColor('red.400');
    }
  }

  const resetContador = () => {
    setContador(0);
    setOperacion('0')
    setColor('gray.400');
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
      <Box display='flex' flexDirection='column' color='#435465' w='full'>

        <MotionOperacion operacion={operacion} contador={contador} color={color}/>

        <Text as='strong' fontSize='8xl' textAlign='center'>
            <motion.div initial={{opacity: 0,scale: 0.1}} animate={{opacity: 1,scale: 1}} 
                        transition={{duration: 0.5}} exit={{opacity:0,scale:2}}
                        key={contador}>{contador}</motion.div>
        </Text>
      </Box>
      <Grid templateColumns={{base: 'repeat(2,1fr)',md:'repeat(3,1fr)'}} gap='.75rem'>
        <GridItem colSpan={1}>
          <Buttons contador={contador} handler={restarContador} texto={'Restar'} disabled={contador <= 0}/>
        </GridItem>
        <GridItem colSpan={1} order={{base:0, md:1}}>
          <Buttons contador={contador} handler={sumarContador} texto={'Sumar'}/>
        </GridItem>
        <GridItem colSpan={{base: 2,md:1}} order={{base:1, md:0}}>
          <Buttons contador={contador} handler={resetContador} texto={'Resetear'} disabled={contador <= 0}/>
        </GridItem>

      </Grid>
      <Box w='full' display={{base:'block',lg:'none'}}>
        <MotionDrag restar={restarContador} sumar={sumarContador} />
      </Box>
    </Center>

  )
}

export { ContadorResponsive }