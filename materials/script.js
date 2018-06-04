$("document").ready(function(){
  var request = new XMLHttpRequest();

  request.open('GET', 'http://localhost/data.json', true);

  request.onload = function () {
	// begin accessing JSON data here
	var data = JSON.parse(this.response);

  $('#temperatureID').html(data.temperature);
  $('#humidityID').html(data.humidity);
  $('#pressureID').html(data.pressure);
  $('#forecast').html(data.forecast);
  var wind = data.winddir;
  switch(wind) {
    case '0':
      $('#windID').html("Північний");
      break;
    case '1':
      $('#windID').html("Пн-східний");
      break;
    case '2':
      $('#windID').html("Пн-східний");
      break;
    case '3':
      $('#windID').html("Пн-східний");
      break;
    case '4':
      $('#windID').html("Східний");
      break;
    case '5':
      $('#windID').html("Пд-східний");
      break;
    case '6':
      $('#windID').html("Пд-східний");
      break;
    case '7':
      $('#windID').html("Пд-східний");
      break;
    case '8':
      $('#windID').html("Південний");
      break;
    case '9':
      $('#windID').html("Пд-західний");
      break;
    case '10':
      $('#windID').html("Пд-західний");
      break;
    case '11':
      $('#windID').html("Пд-західний");
      break;
    case '12':
      $('#windID').html("Західний");
      break;
    case '13':
      $('#windID').html("Пн-західний");
      break;
    case '14':
      $('#windID').html("Пн-західний");
      break;
    case '15':
      $('#windID').html("Пн-західний");
      break;
    default:
      $('#windID').html("nevidomo");
      break;
  }
}

request.send();
});


function showForm(){
 	$('#set_but').hide();
	var settings = $('#set_block');
	settings.show();
	setTimeout(function(){
	settings.css('right', '0vw');
  settings.css('visibility', 'visible');
}, 0);
}
function hideForm(){
	$('#set_block').css('right', '');
	setTimeout(function(){
		$('#set_block').hide();
	}, 300);
	$('#set_but').show();
}
var items = document.getElementsByClassName("data_item");
var iArray = Array.from(items);

var gItems = document.getElementsByClassName("graphic_block");
var gArray = Array.from(gItems);

function change(elemnt) {
	for(var i = 0; i < iArray.length; i++){
		iArray[i].style.backgroundColor = '';
	}
	elemnt.style.backgroundColor = "#b9f0b4";
	var k;
	for(var i = 0; i < iArray.length; i++){
		if(iArray[i] === elemnt) {
			k = i;
			break;
		}
	}
	var bHolder = document.getElementById("holder");
	if(document.documentElement.clientWidth <= 750){
		for(var i = 0; i < iArray.length; i++) {
			iArray[i].style.marginBottom = "0";
		}

		 if(elemnt.style.marginBottom > "0px"){
		 	iArray[k].style.marginBottom = "";
		 	bHolder.style.height = "";
		} else {
			iArray[k].style.marginBottom = "110px";
			bHolder.style.height = "410px";
		}
	}
	for(var i = 0; i < gArray.length; i++){
		gArray[i].style.display = "";
	}
	gArray[k].style.display = "block";
}

var openFile = function(event) {
   var input = event.target;

   var reader = new FileReader();
   reader.onload = function(){
     var text = reader.result;
     $('#textid').html(reader.result.substring(0, 200));
   };
   reader.readAsText(input.files[0]);
 };

var ctx1 = document.getElementById("myChart1");
var myChart = new Chart(ctx1, {
    type: 'line',
    data: {
        labels: [1, 2, 3, 4, 5, 6],
        datasets: [{
						label: "Temperature",
            data: [22, 23, 23, 22, 24, 24],
            backgroundColor: "transparent",
            borderColor: "black", //rgb(7, 189, 7)
            borderWidth: 3
        }]
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero:true
                }
            }]
        }
    }
});
var ctx2 = document.getElementById("myChart2");
var myChart = new Chart(ctx2, {
    type: 'line',
		intersect: 'false',
    data: {
        labels: [1, 2, 3, 4, 5, 6],
        datasets: [{
						label: "Humidity",
            data: [53, 55, 60, 62, 65, 66],
            backgroundColor: "transparent",
            borderColor: "rgb(7, 189, 7)",
            borderWidth: 3
        }]
    },
    options:{
        scales: {
            yAxes: [{
								stacked: true,
                ticks: {
                    beginAtZero:true
                }
            }]
        }
    }
});
var ctx3 = document.getElementById("myChart3");
var myChart = new Chart(ctx3, {
    type: 'line',
		intersect: 'false',
    data: {
        labels: [1, 2, 3, 4, 5, 6],
        datasets: [{
						label: "Atmosphere preasure",
            data: [758, 760, 758, 760, 760, 759],
            backgroundColor: "transparent",
            borderColor: "rgb(7, 189, 7)",
            borderWidth: 3
        }]
    },
    options:{
        scales: {
            yAxes: [{
								stacked: true,
                ticks: {
                    beginAtZero:true
                }
            }]
        }
    }
});
