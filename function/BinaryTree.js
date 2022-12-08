// 二叉树遍历

// 递归遍历
// 前序遍历
function preOrderRecer(head) {
  if (head == null) return;
  // 第一次进入节点
  console.log(head.value);
  preOrderRecer(head.left);
  preOrderRecer(head.right);
}
// 中序遍历
function inOrderRecer(head) {
  if (head == null) return;
  preOrderRecer(head.left);
  // 第二次进入节点
  console.log(head.value);
  preOrderRecer(head.right);
}
// 后序遍历
function posOrderRecer(head) {
  if (head == null) return;
  preOrderRecer(head.left);
  preOrderRecer(head.right);
  // 第三次进入节点
  console.log(head.value);
}

// ----------------------------------------------------------------------------------------------------------

// 非递归遍历
// 前序遍历
function preOrderRecer(head) {
  if (head == null) return;
  // 准备一个栈
  const stack = [];
  stack.push(head);
  let cur;
  while (stack.length) {
    // 栈中弹出cur
    cur = stack.pop();
    // 处理（打印）cur
    console.log(cur);
    // 先后后左节点入栈（如果有）
    if (cur.right) stack.push(cur.right);
    if (cur.left) stack.push(cur.left);
  }
}

// 中序遍历
function inOrderRecer(head) {
  if (head == null) return;
  // 准备一个栈
  const stack = [];
  let cur = head;
  while (cur || stack.length) {
    // 1. 对每棵子树，整棵树左边界入栈
    if (cur) {
      stack.push(cur);
      cur = cur.left;
    } else {
      // 2. 依次弹出栈，处理（打印）节点
      cur = stack.pop();
      console.log(cur);
      // 右子树入栈（如果有）
      cur = cur.right;
    }
  }
}

// 后序遍历
function posOrderRecer(head) {
  if (head == null) return;
  // 当前栈
  const curStack = [];
  // 收集栈
  const resStack = [];
  curStack.push(head);
  let cur;
  while (curStack.length) {
    // 1. 弹出cur
    cur = curStack.pop();
    // 2. cur放入收集栈
    resStack.push(cur);
    // 3. 先左后右入当前栈（如果有）
    if (cur.left) curStack.push(cur.left);
    if (cur.right) curStack.push(cur.right);
  }
  // 收集栈全部出栈
  while (resStack.length) {
    cur = resStack.pop();
    // 处理（打印）cur
    console.log(cur);
  }
}

// 宽度优先遍历
function w(head) {
  if (head == null) return;
  const queue = [];
  queue.unshift(head);
  let cur;
  while (queue.length) {
    cur = queue.pop();
    console.log(cur);
    // 先左后右入队列
    if (cur.left) queue.unshift(cur.left);
    if (cur.right) queue.unshift(cur.right);
  }
}

// 是否完全二叉树
function isCBT(head) {
  if (head == null) return;
  const queue = [];
  queue.unshift(head);
  let cur;
  let l;
  let r;
  let leaf = false;
  while (queue.length) {
    cur = queue.pop();
    l = cur.left;
    r = cur.right;
    if (
      // 存在右子树而没有左子树
      (!l && r) ||
      // 存在不全子树，后面的节点需全部为叶子节点
      (leaf && (l || r))
    ) {
      return false;
    }
    if (cur.left) queue.unshift(cur.left);
    if (cur.right) queue.unshift(cur.right);
    if (!r) {
      leaf = true;
    }
  }
  return true;
}

// 是否满二叉树    最大深度l   节点数N   N = 2 ^ l -1
function isFull(head) {
  if (head == null) return true;

  let [height, nodes] = process(node);
  // return res[1] === Math.pow(2, res[0]) - 1 ? true : false;
  return nodes === (1 << height) - 1;

  function process(node) {
    if (node == null) return [0, 0];

    const leftData = process(node.left);
    const rightData = process(node.right);

    const height = Math.max(leftData[0], rightData[0]) + 1;
    const nodes = leftData[1] + rightData[1] + 1;

    return [height, nodes];
  }
}

// 给定一个二叉树的节点o1和o2, 返回他们的最低公共祖先节点
function lowestAncestor(head, o1, o2) {
  if (head == null || head == o1 || head == o2) {
    return head;
  }
  const left = lowestAncestor(head.left, o1, o2);
  const right = lowestAncestor(head.right, o1, o2);
  if (left != null && right != null) {
    return head;
  }
  return left != null ? left : right;
}
