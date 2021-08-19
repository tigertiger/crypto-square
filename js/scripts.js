function cryptoSquare(text) {
  let counter = 0;
  const message = text.split('');
  message.forEach(function(element) {
    counter++
  })
  return counter;
}