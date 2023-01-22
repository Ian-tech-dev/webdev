let arr3=[];
function frankenSplice(arr1, arr2, n) {
  for(let i=0;i<arr1.length;i++){
    arr2.splice(n,0,arr1[i]);
    n+=1
  }
  arr3=[...arr2]
  arr2.splice(n-arr1.length,arr1.length);
  return arr3;
}

console.log(frankenSplice([1, 2, 3], [4, 5, 6], 1));