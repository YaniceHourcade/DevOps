import "dotenv/config";
import express from "express";
import os from "os";

const app = express();
const port = process.env.PING_LISTEN_PORT || 3000;
const instanceId = process.env.INSTANCE_ID || os.hostname();

interface CounterStore {
  increment(): void;
  getTotalRequests(): number;
}

class InMemoryCounterStore implements CounterStore {
  private totalRequests = 0;

  increment(): void {
    this.totalRequests++;
  }

  getTotalRequests(): number {
    return this.totalRequests;
  }
}

const counterStore = new InMemoryCounterStore();

app.use((req, res, next) => {
  counterStore.increment();
  next();
});

app.get("/ping", (req, res) => {
  res.status(200).json(req.headers);
});

app.get("/stats", (req, res) => {
  res.status(200).json({
    totalRequests: counterStore.getTotalRequests(),
    uptime: Math.floor(process.uptime()),
    instanceId: instanceId,
  });
});

app.use((req, res) => {
  res.sendStatus(404);
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});