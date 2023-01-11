let date = new Date();

let year = date.getFullYear();
let month = (date.getMonth() + 1).toString().padStart(2, '0');
let day = date.getDate().toString().padStart(2, '0');
let hours = date.getHours().toString().padStart(2, '0');
let minutes = date.getMinutes().toString().padStart(2, '0');

// YYYY-MM-DD HH:mm format
let formattedDate1 = year + '-' + month + '-' + day + ' ' + hours + ':' + minutes;
console.log(formattedDate1);

// DD-MM-YYYY HH:mm format
let formattedDate2 = day + '-' + month + '-' + year + ' ' + hours + ':' + minutes;
console.log(formattedDate2);

// DD/MM/YYYY HH:mm format
let formattedDate3 = day + '/' + month + '/' + year + ' ' + hours + ':' + minutes;
console.log(formattedDate3);
