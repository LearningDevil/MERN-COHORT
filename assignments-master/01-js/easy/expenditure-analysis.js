/*
  Implement a function `calculateTotalSpentByCategory` which takes a list of transactions as parameter
  and return a list of objects where each object is unique category-wise and has total price spent as its value.
  transactions is an array where each
  Transaction - an object like 
        {
		id: 1,
		timestamp: 1656076800000,
		price: 10,
		category: 'Food',
		itemName: 'Pizza',
	}
  Output - [{ category: 'Food', totalSpent: 10 }] // Can have multiple categories, only one example is mentioned here
*/

// function calculateTotalSpentByCategory(transactions) {
//   let TotalCategories = {};
//   for(let i = 0; i<transactions.length;i++){
//     const {category, price} = transactions[i]; // De-structuring "category" & "price" from transactions
//     if(TotalCategories[category]){ // Check if the category already exists in the object or not
//       TotalCategories[category] += price; // If exists
//     }else{// If not exists
//       TotalCategories[category] = price;
//     }
//   }
  
//   let result = [];
//   for(let category in TotalCategories){
//     result.push({category: category, totalSpent: TotalCategories[category]})
//   }
//   return result;
// }
function calculateTotalSpentByCategory(transactions){
    return transactions.reduce((acc, {category, price}) =>{
        const existing = acc.find(item => item.category === category)
        if(existing){
            existing.totalSpent += price
        }else{
            acc.push({category: category, totalSpent: price})
        }
        return acc
    }, []);
}


module.exports = calculateTotalSpentByCategory;
