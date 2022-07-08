const { deterministicPartitionKey } = require("./dpk");


describe("deterministicPartitionKey", () => {
  it("Returns the literal '0' when given no input", () => {
    const trivialKey = deterministicPartitionKey();
    expect(trivialKey).toBe("0");
  });
});

describe("deterministicPartitionKey", () => {
  it("Returns deterministic cypher every time", () => {
    const trivialKey = deterministicPartitionKey("test");
    expect(trivialKey).toBe("0fa3727b22cbb0a5271dddfcb7d414a1a512284913ccd690b198751de8100b1ea1935c1b63c35837696f8e73709431de092894581bec9bbfe6532106733af6d8");
  });
});

describe("deterministicPartitionKey", () => {
  it("Keys that are too long are re-made", () => {
    const trivialKey = deterministicPartitionKey({partitionKey:"0fa3727b22cbb0a5271dddfcb7d414a1a512284913ccd690b198751de8100b1ea1935c1b63c35837696f8e73709431de092894581bec9bbfe6532106733af6d876dsa0fa3727b22cbb0a5271dddfcb7d414a1a512284913ccd690b198751de8100b1ea1935c1b63c35837696f8e73709431de092894581bec9bbfe6532106733af6d876dsa"});
    expect(trivialKey).toBe("483bb3e50cf5f33517979f923831a51df1e7f69d9257e6c336182cc9688ce819db67bf7ebc1c468a991c71087346e3b99309a020b2c0e6c47796fc6b04466eb2");
  });
});