const crypto = require("crypto");

//
//hashHex: creates and returns sha3-512 hash with given input in hex format. Returns a String.
//
function hashHex(input){
  return crypto.createHash("sha3-512").update(input).digest("hex");
}

exports.deterministicPartitionKey = (event) => {
  const TRIVIAL_PARTITION_KEY = "0";
  const MAX_PARTITION_KEY_LENGTH = 256;
  let candidate;

  if(!event)
    return TRIVIAL_PARTITION_KEY

  if(!event.partitionKey){
    const data = JSON.stringify(event);
    candidate = hashHex(data)
    return candidate
  }
 
  candidate = event.partitionKey;
  if (typeof candidate !== "string") {
    candidate = JSON.stringify(candidate);
  }
  if (candidate.length > MAX_PARTITION_KEY_LENGTH) {
    candidate = hashHex(candidate)
  }
  return candidate
};