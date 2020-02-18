// 1.9.1
alert(null || 2 || undefined);      // 2
alert(alert(1) || 2 || alert(3));   // 1, 2
alert(1 && null && 2);              // null
alert(alert(1) && alert(2));        // 1, undefined
alert(null || 2 && 3 || 4);         // 3

// 1.9.2
let age = prompt("How old are you?")

if (age >= 18 && age <= 60) {
    alert("Your age is between 18-60.");
}

// 1.9.3
let age2 = prompt("How old are you?")

if (age2 >= 0 && age2 <= 17 || age2 >= 61 && age2 <= 150 ) {
    alert("Your age is not between 18-60.");
}

// 1.9.4
if (-1 || 0) alert('first');      // ถูกรัน
if (-1 && 0) alert('second');     // ไม่ถูกรัน
if (null || -1 && 1) alert('third');  // ถูกรัน

// 1.9.5
let user = prompt("What role are you?");
let password = "codecamp#5";
let inputPassword;

if (user === "Admin") {
  inputPassword = prompt('Please enter your password.');
  if (inputPassword === password) {
    alert("ยินดีต้อนรับ");
  } else if (inputPassword === "") {
    alert("cancel");
  } else {
    alert("Wrong password");
  }
} else if (user === "") {
  alert("ยกเลิก");
} else if (!(user === "Admin")) {
  alert("ผมไม่รู้จักคุณ");
}

// 1.9.6
let aNumber = prompt('Insert number');

while (!(aNumber >=1 && aNumber <= 100)) aNumber = prompt('Insert number');

let bNumber = prompt('Guess the number');

while (!(bNumber === aNumber)) {
  if (bNumber > aNumber) {
    bNumber = prompt('Insert less number');
  } else {
    bNumber = prompt('Insert larger number.');
  }
}