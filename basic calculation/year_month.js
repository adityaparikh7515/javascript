// convert days into year,month and remaining days.

let days=Number(prompt("enter your days."))

let year=parseInt(days/365)
let remaining_day=parseInt(days%365)
let month=parseInt(remaining_day/30)
remaining_day=parseInt(remaining_day%30)

console.log("year is:"+year,"month is: "+month,"remaining_day is: "+remaining_day);
