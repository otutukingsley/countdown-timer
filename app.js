const daysEl = document.querySelector('.days');
const hoursEl = document.querySelector('.hours');
const minutesEl = document.querySelector('.minutes');
const secondsEl = document.querySelector('.seconds');

let jobDate = new Date('07-26-2021');

const updateTime = () => {
  //Get the Launch Date and Current Date
  let jobDate = new Date('2021-07-26');
  let currDate = new Date();
  //Get Launch Date and Current date in milli seconds
  let jobDateInMilliSecs = jobDate.getTime();
  let currDateInMilliSecs = currDate.getTime();
  // Get difference between Lauch Date and Current date in Milli secs
  let diffInMilliSecs = jobDateInMilliSecs - currDateInMilliSecs;
  //Convert difference to seconds
  let diffToSecs = diffInMilliSecs / 1000;
  //Convert Seconds to days
  let days = diffToSecs / 84600;
  //remainder of days
  let remainder = diffToSecs % 84600;
  //To get hours we do
  let hours = remainder / 3600;
  //Remainder of hours
  let remHours = remainder % 3600;
  //To get minutes we do
  let minutes = remHours / 60;
  //To get seconds
  let seconds = remHours % 60;
  //Rounding down the values of days, hours, minutes and seconds
  days = Math.floor(days);
  hours = Math.floor(hours);
  minutes = Math.floor(minutes);
  seconds = Math.floor(seconds);
  //Appending text content to the fields
  daysEl.textContent = days.toString().padStart(2, '0');
  hoursEl.textContent = hours.toString().padStart(2, '0');
  minutesEl.textContent = minutes.toString().padStart(2, '0');
  secondsEl.textContent = seconds.toString().padStart(2, '0');
};
setInterval(updateTime, 1000);
updateTime();
