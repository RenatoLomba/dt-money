import { FC } from 'react'

import { Header } from '../../components/header'
import { Summary } from '../../components/summary'
import { TransactionsContainer } from './styles'

export const TransactionsPage: FC = () => {
  return (
    <TransactionsContainer>
      <Header />

      <Summary />

      <h1>Transactions</h1>
    </TransactionsContainer>
  )
}
