function factorial(value) {
    var returned = 1;
    for (i = 1; i <= value; i++) {
      returned *= i;
    }
    return returned;
  }
  
  function fibonacci(number) {
    if (number == 0) {
      return 0;
    }
    if (number == 1) {
      return 1;
    }
    return fibonacci(number - 1) + fibonacci(number - 2);
  }
  
  function sumNumbers(a) {
    let returned = 0;
    ("" + a).split("").forEach((i) => {
      returned += Number(i);
    });
    return returned;
  }
  
  function setFirstBG() {
    document.body.style.backgroundImage =
      "url(https://st4.depositphotos.com/1019178/20282/i/450/depositphotos_202821714-stock-photo-abstract-white-modern-background-of.jpg)";
  }
  
  function setSecondBG() {
    document.body.style.backgroundImage =
      "url(https://thumbs.dreamstime.com/b/two-colour-multi-hexagonal-line-pattern-seamless-repeat-background-could-be-used-background-pattern-white-light-blue-multi-115123202.jpg)";
  }
  
  function setThirdBG() {
    document.body.style.backgroundImage =
      "url(https://preview.pixlr.com/images/800wm/1312/2/1312129856.jpg)";
  }
  
  setFirstBG();
  
  document.getElementsByTagName("p")[0].addEventListener("click", setFirstBG);
  document.getElementsByTagName("p")[1].addEventListener("click", setSecondBG);
  document.getElementsByTagName("p")[2].addEventListener("click", setThirdBG);
  document.getElementById("clear").addEventListener("click", () => {
    document.getElementById("numb").value = "";
  });
  document.getElementById("eval").addEventListener("click", () => {
    val = document.getElementById("numb").value;
    document.getElementsByTagName("h3")[0].innerText =
      "Factorial: " +
      factorial(val) +
      "\nFibonacci: " +
      fibonacci(val) +
      "\nSum: " +
      sumNumbers(val);
  });