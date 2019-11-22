import React from 'react';
import calculateRewardPoints from '../../../utilities/calculateRewardPoints';
import getMonthFromString from '../../../utilities/getMonthFromString';;

const ContentRow = ({monthsTransactions, transactionDate}) => {
  let accumulatedPoints = 0;

  monthsTransactions.map((dailyTransaction) => {
    accumulatedPoints =  accumulatedPoints + calculateRewardPoints(dailyTransaction.amount);
    return null;
  });

  return (
    <tr>
      <td>{getMonthFromString(transactionDate)}</td>
      <td>{monthsTransactions.length}</td>
      <td>{accumulatedPoints}</td>
    </tr>
  )
}

export default ContentRow;