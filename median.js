// Diberikan sebuah function findMedian(arr) yang menerima sebuah array angka.
// Function akan me-return median dari deret angka tersebut.
// Median adalah nilai tengah dari sebuah deret bilangan.
// Contoh, median atau dari [8, 6, 4, 2, 1]
// adalah 4 yang merupakan nilai yang ada di posisi tengah dari deret tersebut.
// Median dari deret yang berjumlah genap adalah rata-rata dari dua nilai tengah.
// Contoh, median dari [1, 5, 6, 8] adalah 5.5, karena (5 + 6 / 2).

function findMedian(arr) {
  //  math.floor mengembalikan bilangan bulat dibawah.
  // contoh arr.length = 5 / 2 yg harusnya 2.5 menjadi 2
    let mid = Math.floor(arr.length / 2)
    // nilai2 pada array disortir terlebih dahulu dari kecil ke yg besar.
    // ... = spread syntax
      nilai = [...arr].sort((a, b) => a - b)
      // jika nilai dari arr.length / 2 tersisa 0 ambil nilai dalam array index tengah
      // jika tidak tersisa 0 jalankan index urutan tengah -1 index, 
      // ditambah index urutan tengah lalu dibagi 2
    return arr.length % 2 !== 0 ? nilai[mid] : (nilai[mid - 1] + nilai[mid]) / 2
}

// TEST CASES
console.log(findMedian([1, 2, 3, 4, 5])); // 3
console.log(findMedian([1, 3, 4, 10, 12, 13])); // 7
console.log(findMedian([3, 4, 7, 6, 10])); // 6
console.log(findMedian([1, 3, 3])); // 3
console.log(findMedian([7, 7, 8, 8])); // 7.5