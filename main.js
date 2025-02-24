const sortButton = document.getElementById("sort");

const sortInputArray = (event) => {
  event.preventDefault();

  const inputValues = [
    ...document.getElementsByClassName("values-dropdown")
  ].map((dropdown) => Number(dropdown.value));

  const sortedValues = selectionSort(inputValues);

  updateUI(sortedValues);
}

/*
(a, b) => a - b karşılaştırma fonksiyonu, iki değeri (a ve b) çıkartarak karşılaştırma yapar. 
Eğer a, b'den küçükse sonuç negatif olur ve a önce gelir; eğer a, b'den büyükse sonuç pozitif olur ve b önce gelir; eğer eşitse sonuç sıfır olur ve sıralama değişmez.
Bu şekilde sıralama, sayıların artan düzende yerleştirilmesini sağlar. 
Bu nedenle, bu yöntem sayısal verilerin doğru bir şekilde sıralanması için kullanılır.
*/ 
const sortedValues = inputValues.sort((a, b) => {
  return a-b
});

const updateUI = (array = []) => {
  array.forEach((num, i) => {
    const outputValueNode = document.getElementById(`output-value-${i}`);
    outputValueNode.innerText = num;
  })
}

//Bubble Sort
/**
Bubble sort, bir sıralama algoritmasıdır ve verileri sıralamak için kullanılır. 
Algoritma, sıradaki elemanları karşılaştırarak ve gerekirse yer değiştirerek çalışır. 
En büyük veya en küçük elemanı sıralanmış listenin sonuna iteratif olarak "baloncuk" gibi çıkararak sıralama işlemini gerçekleştirir. 
 */
const bubbleSort = (array) => {
  for (let i = 0; i < array.length; i++) {
    for (let j = 0; j < array.length - 1; j++) {
      if (array[j] > array[j + 1]) {
        const temp = array[j];
        array[j] = array[j + 1];
        array[j + 1] = temp;
      }
    }
  }

  return array;
}

//Selection Sort
/* 
Selection sort, bir sıralama algoritmasıdır. 
Bu algoritma, dizideki en küçük (veya en büyük) öğeyi bulur ve bu öğeyi dizinin başındaki (veya sonundaki) öğe ile takas eder. 
Bu işlem, tüm dizi sıralanana kadar tekrarlanır.

Algoritmanın adımları şunlardır:

Dizinin başlangıcında en küçük öğeyi bul.
Bu en küçük öğeyi dizinin ilk öğesi ile takas et.
Dizinin geri kalan kısmı için aynı adımları tekrara et.
Dizi tamamen sıralanana kadar bu işlemi devam ettir.
*/
const selectionSort = (array) => {
  for (let i = 0; i < array.length; i++) {
    let minIndex = i;

    for (let j = i + 1; j < array.length; j++) {
      if (array[j] < array[minIndex]) {
        minIndex = j;   
      }
    }
    const temp = array[i];
    array[i] = array[minIndex];
    array[minIndex] = temp;
  }
  return array
}

//Insertion Sort = Insertion sort algoritması, dizideki elemanları sıralamak için kullanılan basit bir sıralama algoritmasıdır. 
//Çalışma prensibi, diziyi parça parça sıralamak ve her yeni elemanı doğru pozisyona yerleştirmektir.
//Insertion sort'un zaman karmaşıklığı en kötü durumda O(n^2) iken, en iyi durumda O(n) ve ortalama durumda O(n^2) olarak kabul edilir.
const insertionSort = (array) => {
  for (let i = 1; i < array.length; i++) {
    const currValue = array[i];
    let j = i - 1;

    while (j >= 0 && array[j] > currValue) {
      array[j + 1] = array[j];
      j--;
    }
    array[j + 1] = currValue;
  }
return array
}

sortButton.addEventListener("click", sortInputArray);