// import { getData } from "./client/js/getData";
// import { postData } from "./client/js/postData";
// import { updateData } from "./client/js/updateData";

// Function called by event listener
export function handelSubmit(event) {
  event.preventDefault();

  const city = document.getElementById("city").value;
  const date = document.getElementById("date").value;

  getData(city, date).then((result) => {
    postData("/api", {
      city: result.city,
      temp: result.temp,
      weather_icon: result.weather_icon,
      weather_des: result.weather_des,
      photo: result.photo,
      date: result.date,
    });
    form.reset();
    updateData();
  });
}
