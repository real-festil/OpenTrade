import axios from "axios";

export default axios.create({
  baseURL:
    "https://cors-anywhere.herokuapp.com/https://financialmodelingprep.com/api/v3/",
  responseType: "json",
  headers: { "Access-Control-Allow-Origin": "*" },
});
