// Algoexpert: https://www.algoexpert.io/questions/spiral-traverse
// Leet code:  https://leetcode.com/problems/spiral-matrix/description/

/*
    [
        [1,2,3],
        [4,5,6],
        [7,8,9]
    ]
    */

function spiralTraverse(matrix) {
  let results = []
  let sr = 0
  let er = matrix.length - 1
  let sc = 0
  let ec = matrix[0].length -1 

  while(sr <= er && sc <= ec) {
        
        for ( let col = sc; col<= ec; col ++) {
            result.push(matrix[sr][col])
        }
        for ( let row = sr+1; row <= er; row ++) {
            result.push(matrix[row][ec])
        }
        for ( let col = ec-1; col>= sc; col --) {
            if(sr === er) break
            result.push(matrix[er][col])
        }
        for ( let row = er-1; row > sr; row --) {
            if(sc === ec) break 
            result.push(matrix[row][sc])
        }
        sr ++
        er --
        sc++
        ec--

    }
    
    return results

}