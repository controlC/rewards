import React, { useEffect, useState } from 'react';

// Components
import RewardsPanel from '../../components/RewardsPanel/index.js';

// Services
import ThreeMonthsOfTransactionsService from '../../services';

// Simulate API Request
const makeApiRequest = () => ThreeMonthsOfTransactionsService();

const LandingPage = () => {
  const [transActions, setTransActions] = useState(null);
  const [isTransActionsReady, setIsTransActionsReady] = useState(false);

  useEffect(() => {
    if (!isTransActionsReady) {
      makeApiRequest([])
      .then((data) => {
        setTransActions(data);
        setIsTransActionsReady(true);
      });
    }
  }, [isTransActionsReady, transActions]);

  if(!isTransActionsReady) return null;

  return (
    <>
      {
        transActions.map((userTransaction) => {
          return <RewardsPanel transactions={userTransaction} />
        })
      }
    </>
  )
};

export default LandingPage;