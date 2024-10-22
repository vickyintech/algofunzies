// Leetcode: https://leetcode.com/problems/search-a-2d-matrix/description/


function searchMatrix(matrix, target) { 
    // sorted, target -> BS
    // Start with ROW AND COL

    const ROW = matrix.length - 1, COL = matrix[0].length - 1 
    let top = 0, bottom = ROW
    while (top <= bottom) { 
        let currentRow = Math.floor((top + bottom) / 2) 
        if (target < matrix[currentRow][COL]) {
            // search up 
            bottom = currentRow - 1
        } else if (target > maxtrix[currentRow][0]) {
            //search down 
            top = currentRow + 1
        } else { 
            break
        }
    }

    if (!(top <= bottom)) { return false }
    
    let currentRow = Math.floor((top + bottom) / 2)
    
    let left = 0, right = COL

    while (left <= right) {
        let mid = Math.floor((left+right)/2)
        if (matrix[currentRow][mid] > target) {
            right = mid - 1
        } else if (matrix[currentRow][mid] < target) {
            left = mid + 1
        } else { 
            return true 
        }
    }
    return false 

}
