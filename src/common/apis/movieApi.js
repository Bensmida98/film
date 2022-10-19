import axios from "axios";
export default axios.create({
  basURL: "https://www.omdbapi.com/",
});
