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
var ctx1 = document.getElementById("myChart1");
var myChart = new Chart(ctx1, {
    type: 'line',
    data: {
        labels: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
        datasets: [{
						label: "Temperature",
            data: [3, 5, 55, 12, 30, -7, 5, 40, 20, 33],
            backgroundColor: "transparent",
            borderColor: "rgb(7, 189, 7)",
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
        labels: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
        datasets: [{
						label: "Wind power",
            data: [3, 5, 55, 12, 30, -7, 40, 40, 20, 33],
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
        labels: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
        datasets: [{
						label: "Atmosphere preasure",
            data: [3, 5, 55, 12, 30, -7, 30, 40, 20, 33],
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
var ctx4 = document.getElementById("myChart4");
var myChart = new Chart(ctx4, {
    type: 'line',
		intersect: 'false',
    data: {
        labels: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
        datasets: [{
						label: "Humidity",
            data: [3, 5, 55, 12, 30, -7, 0, 40, 20, 33],
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
