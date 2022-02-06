module.exports = ({ env }) => ({
  host: env("HOST", "46.41.141.83"),
  port: env.int("PORT", 1337),
});
