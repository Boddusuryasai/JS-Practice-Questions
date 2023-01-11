//Write a program which tells the number of days in a month.

function month(month) {
  switch (month) {
    case "January":
    case "March":
    case "May":
    case "July":
    case "August":
    case "October":
    case "December":
      console.log(31);
      break;
    case "February":
      console.log(28);
      break;
    case "April":
    case "June":
    case "September":
    case "November":
      console.log(30);
      break;
    default:
      console.log("please enter a valid month");
  }
}
month("January")