function cryptoSquare(text) {
  let counter = 0;
  const initialMessage = text.replaceAll(" ", "");
  console.log(initialMessage);
  const message = initialMessage.split('');
  message.forEach(function(element) {
    counter++
  })
  console.log(counter)
  let finalCounter = Math.sqrt(counter);
  return Math.ceil(finalCounter);
}
  function sliceNDice(message) {
  let cryptoArray = [] 
  for (let index = 0; index < message.length; index += finalCounter) {
    cryptoArray.push (message[index]);
    return cryptoArray;
  }
}

