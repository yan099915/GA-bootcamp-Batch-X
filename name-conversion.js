
/*
 @nama merupakan adalah sebuah string yang berisikan nama user.
  bisa lebih dari 2 kata
  jika @nama tidak terdiri dari 2 kata, maka akan me-return 'Nama Invalid'

 @pilihan adalah sebuah string yang berisikan salah satu kata berikut:
  - depan -> konversi nama belakang nya menjadi singkat
    contoh: wahyu endy santoso -> wahyu endy S.

  - belakang -> konversi nama depan nya menjadi singkat
    contoh: wahyu endy santoso -> W. endy santoso

  - lengkap -> namanya tidak perlu di singkat
    contoh: wahyu endy santoso -> wahyu endy santoso

   Selain 3 kata tersebut, maka function akan me-return 'Pilihan Invalid'

DILARANG:
1. Dilarang menggunakan built-in function:
    split, slice, splice, join, reverse, substring, substr, indexOf, lastIndexOf,
    includes, some, every, find
2. Dilarang menggunakan regex
*/
function konversiName(nama, pilihan) {
// cek dulu apakah nama dalam string terdapat lebih dari 3 kata dengan menghitung jumlah spasinya?
// jika lebih dari 3 data lihat parameter pada pilihan
    let resultArray = [];              //1 declare variable array kosong
    let tempString = '';               //2 declare variable string kosong
    for(var i = 0; i< nama.length;i++){ //3 looping
        if(nama[i] !== ' '){            //4 jika dalam nama tidak ada spasi 
          tempString += nama[i];        //5 masukan nama ke tempString
        } else if(tempString.trim()){                       
          resultArray.push(tempString);//6 jika ada masukan tempString ke 
          tempString = "";             //7 kosongkan kembali tempString
        }
    }
    if(tempString){                      //new step
      resultArray.push(tempString);
    }
    // return resultArray;                //8
  // jika spasi lebih dari nol maka cek pilihan
    if(resultArray.length > 1 ) {
      if(pilihan == 'depan') {
        return resultArray[0][0] +" "+resultArray[1]+" "+resultArray[2]
      } else if(pilihan == 'belakang'){
        return resultArray[0]+" "+resultArray[1]+" "+resultArray[2]+" "+resultArray[3][0]
      }
    } else {
      return 'Nama Invalid'
    }
}

console.log(konversiName('Adryan Ahmad Noorrahman', 'depan'));
console.log(konversiName('Muhammad Rahmat Irvan Rizal', 'belakang'));
console.log(konversiName('wahyu', 'depan'));