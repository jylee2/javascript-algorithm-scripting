/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {TreeNode}
 */
var invertTree = function(root) {
    let queue = []
    queue.push(root)

    while (queue.length) {
        let currentNode = queue.shift()
        if (currentNode) {
            [currentNode.left, currentNode.right] = [currentNode.right, currentNode.left]

            if (currentNode.left) {
                queue.push(currentNode.left)
            }
            if (currentNode.right) {
                queue.push(currentNode.right)
            }
        }
    }

    return root
};

console.log(`${invertTree([4,2,7,1,3,6,9])}`)