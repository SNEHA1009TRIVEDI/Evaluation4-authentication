const redis = require("redis");
exports.insertIntoRedis = async (token) => {
  const config = {
    socket: {
      host: process.env.REDIS_HOST,
      port: process.env.REDIS_PORT,
    },
  };
  const client = redis.createClient(config);
  await client.connect().then(() => console.log("Connected to Redis"));
  await client.set(token, token);
  const value = await client.get(token);
  await client.disconnect();
  return value;
};
