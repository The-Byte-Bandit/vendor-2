import React from 'react'
import SendMoneyCard from '../components/sendMoneyCard'
import TransactionPinCard from '../components/transactionPinCard'
import TransactionSummaryCard from '../components/transactionSummaryCard'
import WithdrawCard from '../components/withdrawCard'
import TransactionSuccesfulCard from '../components/succesfulCard'

function ComingSoon() {
  return (
    <div className='flex justify-center w-full h-full'>
      {/* <SendMoneyCard/> */}
      {/* <TransactionPinCard/> */}
      {/* <TransactionSummaryCard/> */}
      {/* <WithdrawCard/> */}
      <TransactionSuccesfulCard/>
    
    </div>
  )
}

export default ComingSoon