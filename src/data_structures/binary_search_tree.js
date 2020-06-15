class BSTNode {
  constructor({ key, value, parent, left = null, right = null }) {
    this.key = key;
    this.value = value;
    this.parent = parent;
    this.left = left;
    this.right = right;
  }
}

class BinarySearchTree {
  constructor(Node = BSTNode) {
    this.Node = Node;
    this._count = 0;
    this._root = undefined;
  }

  find(key) {
    let node = this._root;

    while (node) {
      if (key < node.key) {
        node = node.left;
      } else if (key > node.key) {
        node = node.right;
      } else if (key === node.key) {
        return node;
      } else {
        return undefined;
      }
    }
  }

  insert(key, value = true) {
    // New node
    let node = new this.Node({ key: key, value: value, parent: null});

    if (!this._root) {
      // Insert root, if no root node.
      this._count += 1;
      this._root = node;
      return;

    } else {
      this.insertNode(this._root, node);
    }
  }

  // Helper Function
  insertNode(root, node) {
    if (node.key < root.key) {
      // If no left child, insert node to the left.
      if (root.left === null) {
        root.left = node;
        this._count += 1;
      } else {
        // if not undefined - use recursive function to continue searching left.
        this.insertNode(root.left, node);
      }

    } else if (node.key > root.key) {
      // If no right child, insert node to the right.
        if (root.right === null) {
          root.right = node;
          this._count += 1;
        // if not undefined - use recursive function to continue searching right.
      } else {
        this.insertNode(root.right, node);
      }

    } else {
      // key === node.key
      // return undefined so it doesn't duplicate.
        node.key === root.key;
        return root.value = node.value;
        }
      return node;
  }

  lookup(key) {
    let node = this._root;

    while (node) {
      if (key < node.key) {
        node = node.left;
      } else if (key > node.key) {
        node = node.right;
      } else { // equal
        return node.value;
      }
    }
  }

  delete(key) {
    // TODO (tests first!)
  }

  count() {
    return this._count;
  }

  forEach(callback) {
    // This is a little different from the version presented in the video.
    // The form is similar, but it invokes the callback with more arguments
    // to match the interface for Array.forEach:
    //   callback({ key, value }, i, this)
    const visitSubtree = (node, callback, i = 0) => {
      if (node) {
        i = visitSubtree(node.left, callback, i);
        callback({ key: node.key, value: node.value }, i, this);
        i = visitSubtree(node.right, callback, i + 1);
      }
      return i;
    }
    visitSubtree(this._root, callback)
  }
}

export default BinarySearchTree;
