import React from 'react'
import { Button, ButtonGroup } from '@chakra-ui/react'
import { Tooltip } from '@chakra-ui/react'
export default function Temp() {
  return (
    <div>
        <div>Temp</div>
        <div>Temp</div>
        <Tooltip hasArrow label='Search places' bg='gray.300' color='black' placement='top'>
          <Button colorScheme="teal">Button</Button>
        </Tooltip>
    </div>
  )
}
