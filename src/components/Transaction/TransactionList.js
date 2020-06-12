import React, { useContext } from 'react'
import {List, Text} from '@chakra-ui/core'
import TransactionItem from './TransactionItem';
import { TransactionContext } from '../../context/TransactionContext';

export default function TransactionList({ deleteTransaction}) {

  const {transaction} = useContext(TransactionContext)

  return (
    <List>
       <Text textAlign='center' fontSize="md">Transaction History</Text>
        { transaction.map(item => <TransactionItem key={item.id} item={item} deleteTransaction={deleteTransaction}/>)}
    </List>
  )
}
