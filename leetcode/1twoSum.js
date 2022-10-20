/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}                                                                                                                                       
 */

// The time complexity of looping through an array will be O(n) and space complexity will be? 

const twoSum = (nums, target) => {
    let storage = {};
    
    for (let [index, num] of nums.entries()){
        if(storage[num] !== undefined) return [storage[num],index];
        storage[target-num] = index;
        
    }
};

// Example
// [2,7,11,15]
// index = 0
// num =2

// storage ={
//     '7':0,
// }