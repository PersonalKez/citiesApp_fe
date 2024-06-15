
const endpoint = "http://localhost:3000";

function fetchData() {
  console.log("API Activated!")
    fetch(endpoint + "/cities")
      .then((response) => response.json())
      .then(data => renderData(data.cities))
  }

  function renderData(data) {
    const cityList = document.getElementById("cityTable");
    console.log(cityList);
    console.log(data);
    data
      .map(
        (city) =>{
          let new_row = cityList.insertRow(-1);
          let c1 = new_row.insertCell();
          let c2 = new_row.insertCell();
          let c3 = new_row.insertCell();
          c1.innerHTML = city.city_name;
          c2.innerHTML = city.date.substring(0,10) ;
          c3.innerHTML = city.country;
        }
      );
  }

  fetchData();

// form functions

function formHandler(form) {
  const requestBody = {
    city_name: form.city_name.value,
    date: form.date.value,
    country: form.country.value,
  };
  console.log("Sending: ", requestBody);
  console.log("Action selected: ", action.value);
  switch(action.value){
    case "edit":
      requestBody["new_city_name"] = form.new_city_name.value;
      fetch(endpoint + "/edit", {method: "PUT", body: JSON.stringify(requestBody), headers: {'Content-Type': 'application/json'}})
      break;
    case "create":
      fetch(endpoint + "/create", {method: "POST", body: JSON.stringify(requestBody), headers: {'Content-Type': 'application/json'}});
      break;
    case "delete":
      fetch(endpoint + "/delete/" + requestBody.city_name, {method: "DELETE"});
      break;
  }
}