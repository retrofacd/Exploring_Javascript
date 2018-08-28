var tableData = data;

var tbody = d3.select("tbody");

console.log(data);

data.forEach(function(ufoReport) {
  console.log(ufoReport);
  var row = tbody.append("tr");
  Object.entries(ufoReport).forEach(function([key, value]) {
    console.log(value);
    var cell = tbody.append("td");
    cell.text(value);
  });
});

var date = data.map(dateRange => dateRange.datetime);
var city = data.map(dateRange => dateRange.city);
var state = data.map(dateRange => dateRange.state);
var country = data.map(dateRange => dateRange.country);
var shape = data.map(dateRange => dateRange.shape);
var durationMinutes = data.map(dateRange => dateRange.durationMinutes);
var comments = data.map(dateRange => dateRange.comments);

var table = d3.select("#summary");
var tbody = table.select("tbody");
var trow = tbody.append("tr");
var cell = tbody.append("td");

cell.text(date);
cell.text(city);
cell.text(state);
cell.text(country);
cell.text(shape);
cell.text(durationMinutes);
cell.text(comments);

var submit = d3.select("#submit");
var inputElement = d3.select("#date-time-input");
var inputValue = inputElement.property("value");
var tbody = d3.select("tbody");

function buttonClick() {
    console.log("A submit request was received");
    d3.event.preventDefault();
    var inputElement = d3.select("#date-time-input");
    var inputValue = inputElement.property("value");
    console.log(inputValue);
    console.log(data);
    console.log("submit");
  }

// var clearRows = document.getElementById("data-table");
// clearRows.remove();

var filteredData = data.filter(dateRange => dateRange.datetime === inputValue);

  filteredData.forEach(function(filtertable) {
    console.log(filtertable);
    var row = tbody.append("tr");
    Object.entries(filtertable).forEach(function([key, value]) {
      console.log(value);
      var cell = tbody.append("td");
      cell.text(value);
    });
  });

  var submit = d3.select("#submit");
  var inputElement = d3.select("#date-time-input");
  var inputValue = inputElement.property("value");

  console.log(inputValue);
  console.log(data);
  console.log(filteredData);


var filterdate = filteredData.map(dateRange => dateRange.city);
var filtercity = filteredData.map(dateRange => dateRange.city);
var filterstate = filteredData.map(dateRange => dateRange.state);
var filtercountry = filteredData.map(dateRange => dateRange.country);
var filtershape = filteredData.map(dateRange => dateRange.shape);
var filterdurationMinutes = filteredData.map(dateRange => dateRange.durationMinutes);
var filtercomments = filteredData.map(dateRange => dateRange.comments);
var filterages = filteredData.map(person => person.age);


d3.selectAll("#fltrbtn").on("click", buttonClick); {
    var submit = d3.select("#submit");
    var tbody = table.select("tbody");
    var row = tbody.append("tr");
    var cell = tbody.append("td");

    cell.text(filterdate);
    cell.text(filtercity);
    cell.text(filterstate);
    cell.text(filtercountry);
    cell.text(filtershape);
    cell.text(filterdurationMinutes);
    cell.text(filtercomments);
}

console.log(filteredData);
