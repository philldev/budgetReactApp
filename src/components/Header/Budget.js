import React from 'react'
import { Heading } from '@chakra-ui/core'
import NumberFormat from 'react-number-format'

export default function Budget({budget}) {
  return (
    <Heading  color={budget > 0 ? "teal.500" : "orange.500"} as="h2" size="lg">
        <NumberFormat
          value={budget}
          displayType={"text"}
          thousandSeparator={true}
          prefix={budget > 0 ? "+ $" : " $"}
        />
      </Heading>
  )
}
