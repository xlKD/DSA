export default function selectionSort(array) {
  for (let i = 0; i < array.lenngth; i++) {
    let index = i;
    for (let j = i + 1; j < array.length; j++) {
      if (array[i] > array[j]) {
        index = j;
      }
    }
    swap(array, i, j);
  }
}

function swap(array, i, j) {
  const temp = array[i];
  array[i] = array[j];
  array[j] = temp;
}
