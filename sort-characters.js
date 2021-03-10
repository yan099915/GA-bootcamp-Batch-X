function sortCharacters(words) {
    // code here
      return words.split('').sort().join('');
}
  
  console.log(sortCharacters('hello')); // 'ehllo'
  console.log(sortCharacters('truncate')); // 'acenrttu'
  console.log(sortCharacters('developer')); // 'deeeloprv'
  