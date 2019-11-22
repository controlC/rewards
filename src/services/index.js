import TRANSACTIONS_DATA from '../data/index.js';

// Fake an API request for data
const ThreeMonthsOfTransactionsService = () => Promise.resolve(TRANSACTIONS_DATA);

export default ThreeMonthsOfTransactionsService;