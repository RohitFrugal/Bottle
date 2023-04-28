function submitForm() {
  console.log("submit");

  const monthNames = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  var x = document.getElementById("dateinput");
  var date = x.value;
  var datearray = date.split("-");
  var year = datearray[0];
  var month = datearray[1];
  var day = datearray[2];

  var monthname = monthNames[parseInt(month) - 1].substring(0, 3).toUpperCase();
  var reportID = day + "" + monthname + "" + year;
  console.log(reportID)
  fetchReport(reportID);
}

const fetchReport = (reportID) => {
  axios
    .get("https://github.com/rohitfrugal/Bottle-Allure-Results/tree/main/" + reportID + "/")
    .then((response) => {
      console.log(response);
      window.open(
        "https://github.com/rohitfrugal/Bottle-Allure-Results/tree/main/" + reportID + "/"
      );
    })
    .catch((error) => {
      console.log(error);
      alert("Report not found");
    });
};
