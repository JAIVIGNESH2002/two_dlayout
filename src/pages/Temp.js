import React from 'react'
import { Button, ButtonGroup } from '@chakra-ui/react'
import { Tooltip } from '@chakra-ui/react'
import img from './armchair-3-1@2x.png'
export default function Temp() {
  return (
    <div>
        <div>Temp</div>
        <div>Temp</div>
        <Tooltip hasArrow label='Search places' bg='gray.300' color='black' placement='top'>
          {/* <Button colorScheme="teal">Button</Button> */}
          <img src={img} />
        </Tooltip>
    </div>
  )
}
