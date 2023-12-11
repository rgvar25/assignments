/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  Transaction - an object like { itemName, category, price, timestamp }.
  Output - [{ category1 - total_amount_spent_on_category1 }, { category2 - total_amount_spent_on_category2 }]
*/

function calculateTotalSpentByCategory(transactions) {

  let mapped = {}
  transactions.forEach(transaction => {

    let { category, price } = transaction

    if (!mapped[category]) {
      mapped[category] = price
    } else {
      mapped[category] += price
    }
  });

  

  console.log(Object.keys(mapped).map((element) => ({[element] : mapped[element]})));

  return Object.keys(mapped).map((element) => ({category : element, totalSpent:mapped[element] }))

  
}

module.exports = calculateTotalSpentByCategory;
