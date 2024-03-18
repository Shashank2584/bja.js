<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta http-equiv="X-UA-Compatible" content="IE=edge">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Express Server Interaction</title>
</head>
<body>
<h1>Send Array to Express Server</h1>
<input type="text" id="arrayInput" placeholder="Enter array elements">
<button onclick="sendArray()">Send Array</button>
<p id="response"></p>

<script>
function sendArray() {
  const arrayInput = document.getElementById("arrayInput").value;
  const array = arrayInput.split(",").map(item => item.trim());

  fetch('http://localhost:3000/bhfl', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ array }),
  })
  .then(response => response.json())
  .then(data => {
    document.getElementById("response").innerHTML = JSON.stringify(data, null, 2);
  })
  .catch(error => {
    console.error('Error:', error);
  });
}
</script>
</body>
</html>
