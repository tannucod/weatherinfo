// let obj = {
//   name: "tannu",
//   course: "BIT",
//   semester: 1,
//   employed: "unemployed",

//   hello: function () {
//     console.log(`my name is ${this.name}`);
//   },
// };
// obj.hello();
// console.log(obj.name,obj.course)
// console.log(obj.employee,obj.semester)

const bttn = document.querySelector(".btn");
const cityInput = document.querySelector("#city");
const temp = document.querySelector("#temp-div");

bttn.addEventListener("click", async function () {
  let city = cityInput.value;
  const weatherInfo = await getWeatherinfor(city);
  console.log(weatherInfo.main.temp);
  temp.innerHTML = weatherInfo.main.temp + "*c";
  //   temp.innerHTML = city;
  //   console.log(cityInput);
  //   console.log(city);
  //   console.log("clicked");
});
async function getWeatherinfor(city) {
  const apiKey = "79e645a88a5e865e3644ec136cb3fe6d";

  const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`;

  const response = await fetch(apiUrl);
  const data = await response.json();
  return data;
  console.log(data);
  console.log(city);
}
getWeatherInfor("butwal");
