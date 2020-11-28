import axios from "axios";
let BASEURL = "https://randomuser.me/api/";


export default {
  search: function(query) {
    return axios.get(BASEURL + query);
  }
};