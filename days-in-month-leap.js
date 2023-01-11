// Write a program which tells the number of days in a month, now consider leap year.
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
        if ((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0) {
            console.log(29);
        } else {
            console.log(28);
        }
       
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