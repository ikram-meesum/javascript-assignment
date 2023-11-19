function filterArray() {
  let numbers = [1, 3, 4, 6, 8, 9];
  alert("Current Array is: " + numbers);

  let even = [];
  numbers.forEach((element) => {
    if (element % 2 == 0) even.push(element);
  });
  alert("Even value is: " + even);
}

function includeArray() {
  //console.log("include array");
  const findItem = [];
  const fruits = ["hassan", "salman", "kamran", "rashid", "faizan", "noor"];
  for (const element of fruits) {
    if (element.includes("an")) {
      findItem.push(element);
    }
  }
  alert("Following items has been found \r\n" + findItem);
}

function removeDuplicate() {
  const duplicate = [1, 3, 4, 6, 8, 9, 1, 3, 5, 7, 10, 9];
  alert("Current Array\r\n" + duplicate);

  let uniqueNumber = [...new Set(duplicate)];
  alert("Unique Array\r\n" + uniqueNumber);
}

function daysName() {
  console.log("days");
  const dayNumber = Number(
    prompt("Please enter the day number between 0 to 6")
  );
  console.log(dayNumber);
  switch (dayNumber) {
    case 0:
      alert("Sunday");
      break;
    case 1:
      alert("Monday");
      break;
    case 2:
      alert("Tuesday");
      break;
    case 3:
      alert("Wednesday");
      break;
    case 4:
      alert("Thursday");
      break;
    case 5:
      alert("Friday");
      break;
    case 6:
      alert("Saturday");
      break;
    default:
      alert("Please enter the valid number between 0 to 6\r\nTry again");
      break;
  }
}

function checkWeekend() {
  const selectedDate = document.getElementById("dateElement").value;
  if (selectedDate == "" || selectedDate == null) {
    alert("Please select any date for check weekend day");
  } else {
    const today = new Date(selectedDate);

    if (today.getDay() == 6) {
      Swal.fire({
        icon: "success",
        title: "Hurray!",
        text: "Yes, selected date is saturday weekend.",
      });
    } else {
      alert("Not weekend date.");
    }
  }
}

function cylindrical() {
  const radius = Number(prompt("Please enter the radius value"));
  const height = Number(prompt("Please enter valid height"));
  const result = Math.PI * radius ** 2 * height;
  alert(
    "Radius : " +
      radius +
      "\r\nHeight : " +
      height +
      "\r\nAnswer : " +
      result.toFixed(4)
  );
}

function sortNumber() {
  const numbers = [40, 100, 1, 5, 25, 10];
  alert("Current number before sort is\r\n" + numbers);

  alert(
    "Sorted Values\r\n" +
      numbers.sort(function (a, b) {
        return a - b;
      })
  );
}

function modifyArray() {
  let numbers = [21, -1, 3, 50, -2, 10];
  console.log(numbers);
  alert("Current array before modification\r\n" + numbers);
  let finalArray = [];

  numbers.forEach((num) => {
    if (num < 0) {
      //console.log("Negative number", num);
      finalArray.push(0);
    } else {
      finalArray.push(num);
    }
  });
  alert("After modification\r\n" + finalArray);
  console.log("final: ", finalArray);
}

function sortObjArray() {
  console.log("sort ojb arry");
  let library = [
    {
      author: "Bill Gates",
      title: "The Road Ahead",
      libraryId: 1234,
    },
    { author: "Steve Jobs", title: "Walter Isaacson", libraryId: 4263 },
    {
      author: "Suzanne Collins",
      title: "Mockingjay The Final Book of Hunger Game",
      libraryId: 3245,
    },
  ];
  console.log(library);
  alert("Before sort\r\n" + JSON.stringify(library));

  library.sort((a, b) => {
    if (a.title.toLowerCase() < b.title.toLowerCase()) {
      return -1;
    }
  });
  console.log(library);
  alert("After sort\r\n" + JSON.stringify(library));
}

function findBookByName() {
  console.log("find book");
  let library = [
    {
      author: "Bill Gates",
      title: "The Road Ahead",
      libraryId: 1234,
    },
    { author: "Steve Jobs", title: "Walter Isaacson", libraryId: 4263 },
    {
      author: "Suzanne Collins",
      title: "Mockingjay The Final Book of Hunger Game",
      libraryId: 3245,
    },
  ];
  console.log(library);
  const search = prompt("Please enter the book title");

  var filteredArray = library.filter(function (element) {
    return element.title.toLowerCase() === search.toLowerCase();
  });
  console.log("abc", filteredArray);
  if (filteredArray.length > 0) {
    alert("Found\r\n" + JSON.stringify(filteredArray));
  } else {
    alert("Not Found");
  }
  console.log(filteredArray);
}
