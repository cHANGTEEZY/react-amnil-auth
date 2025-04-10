const mode = "prod";

const BASE_URL =
  mode === "prod"
    ? "https://delightful-persistent-fowl.glitch.me"
    : "http://localhost:3000";

export default BASE_URL;
