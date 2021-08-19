function cryptoSquare(text) {
  let counter = 0;
  const initialMessage = text.replaceAll(" ", "");
  console.log(initialMessage);
  const message = initialMessage.split('');
  message.forEach(function(element) {
    counter++
  })
  return counter;
}

