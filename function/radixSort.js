function radixSort(arr) {
  if (!Array.isArray(arr) || arr.length < 2) return;
  radixSortRange(arr, 0, arr.length - 1, maxbits(arr));
}

function radixSortRange(arr, l, r, digit) {
  const radix = 10;
  let i = 0;
  let j = 0;
  let bucket = [];
  for (let index = 1; index <= digit; index++) {
    let count = new Array(radix).fill(0);
    // 获取每一位的数字的个数
    // count[i]  当前位置（index）<= i 的数字有多少个
    for (i = l; i <= r; i++) {
      j = getDigit(arr[i], index);
      count[j]++;
    }
    // 前缀和数组
    for (i = 1; i < radix; i++) {
      count[i] = count[i] + count[i - 1];
    }
    for (i = r; i >= l; i--) {
      j = getDigit(arr[i], index);
      bucket[count[j] - 1] = arr[i];
      count[j]--;
    }
    for (i = l, j = 0; i <= r; i++, j++) {
      arr[i] = bucket[j];
    }
  }
}

// 取index位置的数
function getDigit(num, index) {
  return Math.floor(num / Math.pow(10, index - 1)) % 10;
}

function maxbits(arr) {
  let max = -Infinity;
  for (const num of arr) {
    max = Math.max(max, num);
  }
  let res = 0;
  while (max != 0) {
    res++;
    max = Math.floor(max / 10);
  }
  return res;
}

let arr = [1, 3, 213, 15, 42, 6, 9, 81];
radixSort(arr);
console.log(arr);

// ----------------------------------------------------------------------------------------------------------
