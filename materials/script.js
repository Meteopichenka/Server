$("document").ready(function(){
  var xhr = new XMLHttpRequest();
  xhr.open('GET', 'http://localhost/getData.php', false);
  xhr.send();
});

function createCORSRequest(method, url) {
  var xhr = new XMLHttpRequest();
  if ("withCredentials" in xhr) {
    // XHR for Chrome/Firefox/Opera/Safari.
    xhr.open(method, url, true);
  } else if (typeof XDomainRequest != "undefined") {
    // XDomainRequest for IE.
    xhr = new XDomainRequest();
    xhr.open(method, url);
  } else {
    // CORS not supported.
    xhr = null;
  }
  return xhr;
}

// Helper method to parse the title tag from the response.
function getTitle(text) {
  return text.match('<title>(.*)?</title>')[1];
}

// Make the actual CORS request.
function makeCorsRequest() {
  // This is a sample server that supports CORS.
  var url = 'http://html5rocks-cors.s3-website-us-east-1.amazonaws.com/index.html';

  var xhr = createCORSRequest('GET', 'http://localhost/test/hello.txt');
  if (!xhr) {
    alert('CORS not supported');
    return;
  }

  // Response handlers.
  xhr.onload = function() {
    var text = xhr.responseText;
    var title = getTitle(text);
    alert('Response from CORS request to ' + url + ': ' + title);
  };

  xhr.onerror = function() {
    alert('Woops, there was an error making the request.');
  };

  xhr.send();
}

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
            data: [11, 10, 10, 12, 13, 15],
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
            data: [736, 740, 740, 740, 740, 740],
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
