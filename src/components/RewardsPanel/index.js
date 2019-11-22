import React, { useCallback, useState } from 'react';
import ContentRow from './partials/ContentRow';
import ContentHead from './partials/ContentHead';
import Table from './partials/Table';
import GrandTotal from './partials/GrandTotal';
import calculateRewardPoints from '../../utilities/calculateRewardPoints';

const RewardsPanel = ({transactions}) => {
  const [totalRewardsPoint, setTotalRewardsPoint] = useState(0);
  const [isTotalRewardsSet, setIsTotalRewardsSet] = useState(false);
  const [[transactionDetails]] = transactions;

  const transactionData = useCallback(() => {
    let totalPoints = totalRewardsPoint;

    transactions.map((monthsTransactions) => {
      monthsTransactions.map((dailyTransaction) => {
        totalPoints =  totalPoints + calculateRewardPoints(dailyTransaction.amount);
        return null;
      });

      return null
    })

    return totalPoints
  }, [totalRewardsPoint, transactions])

  if(!isTotalRewardsSet) {
    setTotalRewardsPoint(() => transactionData());
    setIsTotalRewardsSet(true);
  }

  return (
    <section className="section" style={{border: '3px solid #cecece', margin: '20px'}}>
    <div className="container">
    <header>
      <h2 className="title">
        {transactionDetails.name}
      </h2>
    </header>
      <Table className="table">
        <ContentHead headers={['Month', 'Number of Transactions', 'Reward Points']}/>
        <tbody>
          {
            transactions.map((monthsTransactions) => {
              const [{transactionDate}] = monthsTransactions;

              return (
              <ContentRow
                monthsTransactions={monthsTransactions}
                transactionDate={transactionDate}
              />);
            })
          }
        </tbody>
      </Table>

      <GrandTotal>
        Total Reward Point Earned: &nbsp;
        {totalRewardsPoint}
      </GrandTotal>
    </div>
  </section>
  )
}

export default RewardsPanel;