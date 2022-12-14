import axios from "axios";

const MainUrl = axios.create({
  baseURL: process.env.REACT_APP_SERVER_API,
  headers: {
    Authorization: "bearer " + process.env.REACT_APP_SECRET_TOKEN,
  },
});

export default MainUrl