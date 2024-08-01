// import React from 'react'
// import numeral from 'numeral'



// const CurrencyFormat = ({amount}) => {
//   const formattedAmount = numeral(amount.format("$0,0.00"))
//     return <div>{formattedAmount}</div>
  
// }

// export default CurrencyFormat;

import React from 'react';
import numeral from 'numeral'; // Import the numeral library for formatting

const CurrencyFormat = ({ amount }) => {
  // Format the amount using numeral with the "$0,0.00" format
  const formattedAmount = numeral(amount).format('$0,0.00');

  // Return the formatted amount wrapped in a div element
  return <div>{formattedAmount}</div>;
};

export default CurrencyFormat;
