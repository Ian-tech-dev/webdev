//remove falsy values from an array(false,null,0,undefined,"",//NaN)
function bouncer(arr) {
  let arr2=[...arr];
  for(let i=0;i<arr2.length;i++){
    if(Boolean(arr2[i])== false ){
//remove the element
  arr2.splice(i,1);
  i-=1;

    }
  }
  return arr2;
}


console.log(bouncer([7, "ate", "", false, 9]));