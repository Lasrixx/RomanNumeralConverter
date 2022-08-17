function convertToRoman(input) {
    let num = input;
    let rNum;
    let rNumArr = [];
    let converted = false;
  
    while(converted == false){
      if(num == 0){
        converted = true;
      }
      else if(num-1000 >= 0){
        num-=1000;
        rNumArr.push("M");
      }
      else if(num-900 >= 0){
        num-=900;
        rNumArr.push("CM");
      }
      else if(num-500 >= 0){
        num-=500;
        rNumArr.push("D");
      }
      else if(num-400 >= 0){
        num -= 400;
        rNumArr.push("CD");
      }
      else if(num-100 >= 0){
        num-= 100;
        rNumArr.push("C");
      }
      else if(num-90 >= 0){
        num -= 90;
        rNumArr.push("XC");
      }
      else if(num-50 >= 0){
        num -= 50;
        rNumArr.push("L");
      }
      else if(num - 40 >= 0){
        num-=40;
        rNumArr.push("XL");
      }
      else if(num - 10 >= 0){
        num-=10;
        rNumArr.push("X");
      }
      else if(num-9 >= 0 ){
        num-=9;
        rNumArr.push("IX");
      }
      else if(num-5 >= 0){
        num-=5;
        rNumArr.push("V");
      }
      else if(num-4 >= 0){
        num-=4;
        rNumArr.push("IV");
      }
      else if(num-1 >= 0){
        num-=1;
        rNumArr.push("I");
      }
    }
    rNum = rNumArr.join("");
    console.log(rNum);
    return rNum;
  }
  
  convertToRoman(36);