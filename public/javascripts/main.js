(function() {
  var httpRequest;
  document.getElementById("send").addEventListener('click', makeRequest);

  function makeRequest() {
  	let endpoint = "";
    httpRequest = new XMLHttpRequest();
    httpRequest.onreadystatechange = alertContents;

    let request = JSON.stringify({
    	"from": document.getElementById("from").value,
    	"to": document.getElementById("to").value,
    	"text": document.getElementById("source").value
    });

    httpRequest.open('POST', endpoint);
    httpRequest.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
    httpRequest.send(request);
  }

  function alertContents() {
    if (httpRequest.readyState === XMLHttpRequest.DONE) {
      if (httpRequest.status !== 200) {
      	alert('There was a problem with the request.');
      	return;
      }

      let response = JSON.parse(httpRequest.responseText);
      document.getElementById("response").innerHTML = response['text'];
    }
  }
})();
