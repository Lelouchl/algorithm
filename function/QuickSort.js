// 快速排序  3.0
// 时间O(nlogn)  空间O(logn)

function quickSort(arr) {
  if (!Array.isArray(arr) || arr.length < 2) return;
  quick(arr, 0, arr.length - 1);
}

function quick(arr, l, r) {
  if (l < r) {
    swap(arr, l + Math.floor(Math.random() * (r - l + 1)), r);
    const equal = partition(arr, l, r);
    quick(arr, l, equal[0] - 1); // 小于目标区域
    quick(arr, equal[1] + 1, r); // 大于目标区域
  }
}

// 三分arr区间
// [小于目标，等于目标，大于目标]
// 返回等于目标的区间首尾下标
function partition(arr, l, r) {
  let less = l - 1; // 左边界
  let more = r; // 右边界
  // l为当前位置  与右边界相遇即结束
  while (l < more) {
    // l < num  l和左区域下一个交换 左区域右扩(++less)  l++;
    if (arr[l] < arr[r]) {
      swap(arr, ++less, l++);
      // l > num  l和右区域前一个交换  右区域左扩(--more)  l不变
    } else if (arr[l] > arr[r]) {
      swap(arr, --more, l);
      // l = num l++
    } else {
      l++;
    }
  }
  swap(arr, more, r);
  return [less + 1, more];
}

let arr = [1, 3, 2, 15, 4, 6, 9, 8];

quickSort(arr);
console.log(arr);
