console.log('Задача 1. Пакування товарів');

function isEnoughCapacity(products, containerSize) {
  const quantityArr = Object.values(products); //[2, 3, 1]
  let quantity = 0;
  for (let i = 0; i < quantityArr.length; i++) {
    /*  console.log(
      `${quantity} + ${quantityArr[i]} = ${quantity + quantityArr[i]}`
    ); */
    quantity += quantityArr[i];
  }
  const result = quantity <= containerSize ? true : false;
  //   console.log(`Result : ${quantity} <= ${containerSize} => ${result}`);

  return result;
}
console.log(isEnoughCapacity({ apples: 2, grapes: 3, carrots: 1 }, 8)); // true
console.log(isEnoughCapacity({ apples: 4, grapes: 6, lime: 16 }, 12)); // false
console.log(isEnoughCapacity({ apples: 1, lime: 5, tomatoes: 3 }, 14)); // true
console.log(isEnoughCapacity({ apples: 18, potatoes: 5, oranges: 2 }, 7)); // false
