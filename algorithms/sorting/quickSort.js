export default function quickSort(array, left, right) {
  if (left < right) {
    const pivot = getPivot(array, left, right);

    quickSort(array, left, pivot - 1);
    quickSort(array, pivot + 1, right);
  }
}

function getPivot(array, left, right) {
  const pivot = right;
  let i = left - 1;

  for (let j = left; j < pivot; j++) {
    if (array[j] < array[pivot]) {
      i++;
      swap(array, i, j);
    }
  }

  swap(array, i + 1, pivot); 
  return i;
}

function swap(array, i, j) {
  const temp = array[i];
  array[i] = array[j];
  array[j] = temp;
}
