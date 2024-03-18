const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const port = 3000;

app.use(bodyParser.json());

app.post("/bhfl", (req, res) => {
  const inputArray = req.body.array;

  const evenNumbers = inputArray.filter((num) => num % 2 === 0);
  const oddNumbers = inputArray.filter((num) => num % 2 !== 0);

  const response = {
    status: "Success",
    user_id: 1235464,
    email_id: "example@email.com",
    college_roll_number: "12345",
    even_numbers: evenNumbers,
    odd_numbers: oddNumbers,
  };

  res.json(response);
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
