import axios from "axios";

export default axios.create({
  baseURL: "https://financialmodelingprep.com/api/v3/",
  responseType: "json",
  headers: { "Access-Control-Allow-Origin": "*" },
});
