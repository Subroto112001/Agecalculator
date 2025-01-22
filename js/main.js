let AgeBox__DateHolder = document.querySelector(".AgeBox__DateHolder");
const AgeBox__calbtn = document.querySelector(".AgeBox__calbtn");
const AgeDisplayer = document.querySelector(".AgeBox__Display");

AgeBox__DateHolder.max = new Date().toISOString().split("T")[0];
function calcutating() {
  let birthdate = new Date(AgeBox__DateHolder.value);
  let date = birthdate.getDate();
  let Month = birthdate.getMonth() + 1;
  let Year = birthdate.getFullYear();

  let Nowday = new Date();
  let Nowdate = Nowday.getDate();
  let NowMonth = Nowday.getMonth() + 1;
  let NowYear = Nowday.getFullYear();

  let date1, month1, year1;
  year1 = NowYear - Year;

  if (NowMonth >= Month) {
    month1 = NowMonth - Month;
  } else {
    year1--;
    month1 = 12 + NowMonth - Month;
  }

  if (Nowdate >= date) {
    date1 = Nowdate - date;
  } else {
    month1--;
    date1 = dateget(y1, m1) + Nowdate - date;
  }
  if (month1 < 0) {
    month1 = 11;
    year1--;
  }

  console.log(date1, month1, year1);
  AgeDisplayer.innerHTML = `Your are ${year1} Year ${month1} Month and ${date1} Days Old `;
}

function dateget(year, month) {
  return new date(year, month, 0).getDate();
}
