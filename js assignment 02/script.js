// Q.1  SMALL LETTER

// let myname = prompt("Please enter the any name in upper case");
// alert(myname.toLowerCase());

// Q.2  INITIALIZE AND CONSOLE THE ARRAY

let colors = ["white", "black", "red", "blue", "green"];
console.log(colors);

//Q.2-A
// let addcolor = prompt("Please enter the any color name in begining");
// colors.unshift(addcolor);
// alert(colors);

//Q.2-B
// let addcolor = prompt("Please enter the any color name in the end");
// colors.push(addcolor);
// alert(colors);

// Q.2-C
// let color1 = prompt("Please enter the any color name in the begining");
// let color2 = prompt("Please enter the any second color name in the begining");

// colors.unshift(color1, color2);
// alert(colors);

// Q.2-D
// colors.shift();
// alert(colors);

// Q.2-E
// colors.pop();
// alert(colors);

// Q.2-F
// let index = prompt("Please enter the index for add color name");
// let color_name = prompt("Please enter the color name");

// colors.splice(index, 0, color_name);
// alert(colors);

// Q.2-G
// let index = prompt("Please enter the index for delete color name");
// let deleteQty = prompt("Enter the quantity you wants to delete color name");

// colors.splice(index, deleteQty);
// alert(colors);

// Q-3
let matrics = prompt("Please enter the number for display matrics");
const num = matrics;
const identityMatrix = (num = 1) => {
  const res = [];
  for (let i = 0; i < num; i++) {
    if (!res[i]) {
      res[i] = [];
      //console.log("i: ", i);
    }
    for (let j = 0; j < num; j++) {
      if (i === j) {
        res[i][j] = 1;
      } else {
        res[i][j] = 0;
      }
    }
  }
  return res;
};
console.log(identityMatrix(num));

//============================================

// let username = prompt("Please enter your name");
// let age = prompt("Please enter your age");
// let email = prompt("Please enter your valid email");

// let result = `${username} is ${age} years old you can contact him/her on ${email}`;
// alert(result);

// Q-4
for (i = 5; i >= 1; i--) {
  for (k = 1; k <= i; k++) {
    document.write(k);
  }
  document.write("<br/>");
}
document.write("<br/>");

// DONE
for (i = 5; i >= 1; i--) {
  for (k = 1; k <= i; k++) {
    document.write("*");
  }
  document.write("<br/>");
}

let city = "Hyderabad";
console.log(city.replace("Hyderabad", "Islamabad"));
