// 堆排序   时间 O(nlogn)  空间  O(1)
// 完全二叉树
// i节点     左子节点    2i+1
//           右子节点    2i+2
//           父节点      ( i-1 )/2     or   (i-1) >> 1;

function heapSort(arr) {
  if (!Array.isArray(arr) || arr.length < 2) return;
  // for (let index = 0; index < arr.length; index++) {
  //   // O(n)
  //   heapInsert(arr, index); // O(logn)
  // }

  let heapSize = arr.length;
  // O(n)
  for (let i = arr.length - 1; i >= 0; i--) {
    heapify(arr, i, heapSize);
  }
  swap(arr, 0, --heapSize);
  while (heapSize > 0) {
    // O(n)
    heapify(arr, 0, heapSize); // O(logn)
    swap(arr, 0, --heapSize); // O(1)
  }
}

// 大根堆插入
function heapInsert(arr, index) {
  if (index === 0) return;
  while (arr[index] > arr[(index - 1) >> 1]) {
    swap(arr, index, (index - 1) >> 1);
    index = (index - 1) >> 1;
  }
}

// 某个数在index,能否继续往下移动
function heapify(arr, index, heapSize) {
  let left = index * 2 + 1; // 左子节点下标
  // 是否越界，通过表示还有子节点
  while (left < heapSize) {
    // 左右子节点的最大值
    let largest =
      left + 1 < heapSize && arr[left + 1] > arr[left] ? left + 1 : left;
    // 比较largest和父节点
    largest = arr[largest] > arr[index] ? largest : index;
    if (largest === index) break;
    swap(arr, index, largest);
    index = largest;
    left = largest * 2 + 1;
  }
}

let arr = [1, 3, 2, 15, 4, 6, 9, 8];
heapSort(arr);
console.log(arr);
