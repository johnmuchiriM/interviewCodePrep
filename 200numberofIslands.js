/**
 * @param {character[][]} grid
 * @return {number}
 */
const numIslands = (grid) => {
    let countIslands = 0;
    
    for (let rowIndex in grid){
        for(let colIndex in grid[rowIndex]){
            if(grid[rowIndex][colIndex] === '1'){
                countIslands++;
                teraform(parseInt(rowIndex),parseInt(colIndex), grid)
            }            
        }
    }

    return countIslands;
 
};


//convert things arounds us to water
const teraform = (rowIndex, colIndex, grid)=>{
    
    if(grid[rowIndex] === undefined || grid[rowIndex][colIndex]=== undefined || grid[rowIndex][colIndex]==='0') return;
    
    grid[rowIndex][colIndex] = '0';
    
    teraform(rowIndex+1,colIndex,grid);
    teraform(rowIndex-1,colIndex,grid);
    teraform(rowIndex,colIndex+1,grid);
    teraform(rowIndex,colIndex-1,grid);
}