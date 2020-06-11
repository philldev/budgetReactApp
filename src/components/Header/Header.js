import React, { useContext } from 'react'
import {Heading} from '@chakra-ui/core';
import { TransactionContext } from '../../context/TransactionContext';

export default function Header() {

  const transaction = useContext(TransactionContext)

  const budget = transaction.length > 0 ? transaction.map(t => t.value).reduce((acc, curr) => acc + curr) : 0

  return (
    <>
    <Heading as="h2" size="lg">
    Your available budget in June 2020
    </Heading>
    <Heading color={budget > 0 ? "teal.500" : "orange.500"} as="h2" size="xl">
  {budget > 0 ? '+' : '-'} {budget}
    </Heading>
    </>
  )
}
