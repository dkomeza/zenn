import { test, expect } from "bun:test";
import "@/app";

const PORT = process.env.PORT || 5000;

test("GET /status", async () => {
  try {
    const response = await fetch(`http://localhost:${PORT}/status`);
    const body = await response.json();
    expect(response.status).toBe(200);
    expect(body).toEqual({ status: "Okay" });
  } catch (error) {
    console.error(error);
  }
});
