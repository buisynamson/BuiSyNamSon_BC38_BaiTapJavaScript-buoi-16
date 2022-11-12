function ex1() {
  var i = 1;
  var sum = 0;
  while (sum < 10000) {
    sum += i;
    i++;
  }
  console.log(i - 1);
  var result = "Số nguyên dương nhỏ nhất: " + (i - 1);
  console.log(result);
  document.getElementById("result").innerHTML = result;
  document.getElementById("result").className = "info";
}
ex1();

function ex2() {
  var x = document.getElementById("numX").value * 1;
  var n = document.getElementById("numN").value * 1;
  var i = 1;
  var sum = 0;
  var T = 1;
  while (i <= n) {
    T *= x;
    sum += T;
    i++;
  }
  console.log(sum);
  var result = "Tổng là: " + sum;
  console.log(result);
  document.getElementById("resultEx2").innerHTML = result;
  document.getElementById("resultEx2").className = "info";
}
ex2();

function ex3() {
  var m = document.getElementById("numM").value * 1;
  if (m < 1) {
    var result = "Số m phải lớn hơn hoặc bằng 1, nhập lại m ! ";
    document.getElementById("resultEx3").innerHTML = result;
    document.getElementById("resultEx3").className = "info";
  } else {
    var p = 1;
    for (i = 1; i <= m; i++) {
      p = p * i;
    }
    result = "m! = " + p;
    document.getElementById("resultEx3").innerHTML = result;
    document.getElementById("resultEx3").className = "info";
  }
}
ex3();

function ex4() {

}

function ex5() {
  var a = document.getElementById("numA").value * 1;
  var flag = true;
  if (a < 2) {
    flag = false;
  } else if (a === 2) {
    flag = true;
  } else if (a % 2 === 0) {
    flag = false;
  } else {
    for (var i = 3; i < a - 1; i += 2) {
      if (a % i == 0) {
        flag = false;
        break;
      }
    }
  }
  if (flag==true) {
    var result = a+" là số nguyên tố";
    document.getElementById("resultEx5").innerHTML = result;
  } else {
    result = a+ " không phải số nguyên tố";
    document.getElementById("resultEx5").innerHTML = result;
  }
}

