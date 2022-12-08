// 归并排序
// 时间 O(nlogn) 空间O(n)

function mergeSort(arr) {
  if (!Array.isArray(arr) || arr.length < 2) return;
  process(arr, 0, arr.length - 1);
}

function process(arr, l, r) {
  if (l === r) return;
  let mid = l + ((r - l) >> 1);
  process(arr, l, mid);
  process(arr, mid + 1, r);
  merge(arr, l, mid, r);
}

function merge(arr, l, m, r) {
  let res = [];
  let i = 0;
  let p1 = l;
  let p2 = m + 1;
  while (p1 <= m && p2 <= r) {
    res[i++] = arr[p1] <= arr[p2] ? arr[p1++] : arr[p2++];
  }
  while (p1 <= m) {
    res[i++] = arr[p1++];
  }
  while (p2 <= r) {
    res[i++] = arr[p2++];
  }
  for (let index = 0; index < res.length; index++) {
    arr[l + index] = res[index];
  }
}

let arr = [1, 3, 2, 15, 4, 6, 9, 8];

mergeSort(arr);
console.log(arr);
