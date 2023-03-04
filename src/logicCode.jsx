function logicCode() {
  //First thing to do is declare the variables
  var Cc = 0.15375;
  var Ceb = 0.585;

  var marketSize2021 = 17.56;
  var marketSize2022 = 18.86;

  // Once we have our variables we can start doing the math
  var Pd = (Cc / Ceb) * 100;
  var Pgr = ((marketSize2022 - marketSize2021) / marketSize2021) * 100;
  console.log(Pgr);
  //Then we declare the functions

  return true;
}

export default logicCode;
