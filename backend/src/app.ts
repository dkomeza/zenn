import express from "express";

const app = express();

// Required to make sure that the container is healthy
app.get("/status", (_req, res) => {
  res
    .send({
      status: "Okay",
    })
    .status(200);
});

app.listen(5000, () => {
  console.log("Server is running on http://localhost:5000");
});
