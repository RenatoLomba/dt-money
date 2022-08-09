import { FC } from 'react'

import { Header } from '../../components/header'
import { TransactionsContainer } from './styles'

export const TransactionsPage: FC = () => {
  return (
    <TransactionsContainer>
      <Header />

      <h1>Transactions</h1>
    </TransactionsContainer>
  )
}
