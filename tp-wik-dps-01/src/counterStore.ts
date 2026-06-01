export interface CounterStore {
  increment(): void;
  getTotalRequests(): number;
}

export class InMemoryCounterStore implements CounterStore {
  private totalRequests = 0;

  increment(): void {
    this.totalRequests++;
  }

  getTotalRequests(): number {
    return this.totalRequests;
  }
}