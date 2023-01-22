//Javascript function to capitalise every first letter of words ///in a sentence using nested loops
function titleCase(str) {
  //split the sentence into an array
  let str2 = str.split(" ");
  let str3 =[];
  //make everything lowercase
  for (let i =0;i<str2.length;i++){
    str3[i] =str2[i].toLowerCase();
  }
  //capitalize every first letter
  let str4=[];
  for(let j=0;j<str3.length;j++){
    for(let k=0;k<str3[j].length;k++){
      if(k==0){
        str4 += str3[j][k].toUpperCase();
      }else{
        str4 += str3[j][k];
      }
    }
    if(j<str3.length-1){
    str4 += " ";
    }
  }
  str = str4;
  return str;
}
//console.log(str.split("'"));
console.log(titleCase("I'm a little tea pot"));