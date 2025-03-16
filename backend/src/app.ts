import express from "express";

const app = express();
const PORT = Bun.env.PORT || 5000;

// Required to make sure that the container is healthy
app.get("/status", (_req, res) => {
  res
    .send({
      status: "Okay",
    })
    .status(200);
});

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
