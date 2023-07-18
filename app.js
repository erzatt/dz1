var month = prompt("введите месяц");
var day = prompt("введите день");

if ((day <= 0 || day > 31) || (day >=28 && month === '02')) {
  console.log("не правилный день");
} else if (
  month !== "01" &&
  month !== "02" &&
  month !== "03" &&
  month !== "04" &&
  month !== "05" &&
  month !== "06" &&
  month !== "07" &&
  month !== "08  " &&
  month !== "09" &&
  month !== " 10" &&
  month !== "11" &&
  month !== "12"
) {
  console.log("напишите правильный номер месяца");
} else {
  if ((month === "01" && day >= 20) || (month === "02" && day <= 16)) {
    console.log("Ваш знак зодиака Козерог");
  } else if ((month === "02" && day >= 16) || (month === "03" && day <= 11)) {
    console.log("Ваш знак зодиака водолей");
  } else if ((month === "03" && day >= 11) || (month === "04" && day <= 18)) {
    console.log("Ваш знак зодиака fish");
  } else if ((month === "04" && day >= 18) || (month === "05" && day <= 18)) {
    console.log("Ваш знак зодиака oven");
  } else if ((month === "05" && day >= 13) || (month === "06" && day <= 21)) {
    console.log("Ваш знак зодиака teletz");
  } else if ((month === "06" && day >= 21) || (month === "07" && day <= 20)) {
    console.log("Ваш знак зодиака bliznethy");
  } else if ((month === "07" && day >= 20) || (month === "08" && day <= 10)) {
    console.log("Ваш знак зодиака rak");
  } else if ((month === "08" && day >= 10) || (month === "09" && day <= 16)) {
    console.log("Ваш знак зодиака lev");
  } else if ((month === "09" && day >= 16) || (month === "10" && day <= 30)) {
    console.log("Ваш знак зодиака deva");
  } else if ((month === "10" && day >= 30) || (month === "11" && day <= 23)) {
    console.log("Ваш знак зодиака Весы");
  } else if ((month === "11" && day >= 23) || (month === "11" && day <= 29)) {
    console.log("Ваш знак зодиака Скорпион");
  } else if ((month === "11" && day >= 29) || (month === "12" && day <= 17)) {
    console.log("Ваш знак зодиака Змееносец");
  } else if ((month === "12" && day >= 17) || (month === "01" && day <= 20)) {
    console.log("Ваш знак зодиака Стрелец");
  }
}
