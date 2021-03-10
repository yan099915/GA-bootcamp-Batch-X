const { default: axios } = require("axios");

/*
  - npm install terelbih dahulu
  - hit service https://jsonplaceholder.typicode.com/todos dengan method get menggunakan axios
  - filter berdasarkan status completed nya menggunakan array method .map
  - setelah itu, bedakan id nya menjadi ganjil & genap,
  - return sesuai degan format data ini:


    return {
      "false": {
        ganjil: [],
        genap: []
      },
      "true": {
        ganjil: [],
        genap: []
      }
    }

  note:
  - dilarang menggunakan looping fora
*/


const getTasks = async () => {
  const url = 'https://jsonplaceholder.typicode.com/todos'
  const response = await axios.get(url)
  const words = response.data;

  const uncompletedeven = words.filter(word => word.completed == 0 && word.id % 2 == 0)
  const uncompletedodd = words.filter(word => word.completed == 0 && word.id % 2 == 1);
  const completedeven = words.filter(word => word.completed == 1 && word.id % 2 == 0);
  const completedodd = words.filter(word => word.completed == 1 && word.id % 2 == 0);
  
  var result1 = uncompletedeven.concat(uncompletedodd);
  var result2 = completedeven.concat(completedodd);

  return result1.concat(result2);
}

getTasks().then(data => console.log(data))