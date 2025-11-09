array = [7,4,5,1,3]

MAX_LENGTH = 5

function quickSortASC(arr, left = 0, right = arr.length - 1) {
  if (left >= right) return;

  const pivotIndex = partitionASC(arr, left, right);

  quickSortASC(arr, left, pivotIndex - 1);  // 왼쪽 부분 정렬
  quickSortASC(arr, pivotIndex + 1, right); // 오른쪽 부분 정렬

  return arr;
}

function partitionASC(arr, left, right) {
  const pivot = arr[right]; // 마지막 원소를 피벗으로 선택
  let i = left - 1;

  for (let j = left; j < right; j++) {
    if (arr[j] <= pivot) {
      i++;
      [arr[i], arr[j]] = [arr[j], arr[i]]; // swap
    }
  }

  [arr[i + 1], arr[right]] = [arr[right], arr[i + 1]]; // 피벗을 제자리로 이동
  return i + 1; // 피벗의 최종 위치 반환
}

function quickSortDesc(arr, left = 0, right = arr.length - 1) {
  if (left >= right) return;

  const pivotIndex = partitionDesc(arr, left, right);

  quickSortDesc(arr, left, pivotIndex - 1);   // 왼쪽 영역 정렬
  quickSortDesc(arr, pivotIndex + 1, right);  // 오른쪽 영역 정렬

  return arr;
}

function partitionDesc(arr, left, right) {
  const pivot = arr[right]; // 마지막 원소를 피벗으로 선택
  let i = left - 1;

  for (let j = left; j < right; j++) {
    if (arr[j] >= pivot) { // 내림차순이므로 부등호 방향 반대로!
      i++;
      [arr[i], arr[j]] = [arr[j], arr[i]]; // swap
    }
  }

  [arr[i + 1], arr[right]] = [arr[right], arr[i + 1]];
  return i + 1;
}

quickSortASC(array)
console.log("===선택정렬 오름차순===")
console.log(array)

console.log()

quickSortDesc(array)
console.log("===선택정렬 내림차순===")
console.log(array)