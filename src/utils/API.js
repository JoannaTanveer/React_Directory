import axios from "axios";

const API = {
  // Gets all users
  getUsers: () => {
    return axios.get("https://randomuser.me/api/?results=25&nat=us")
      .then(res => {
        if (res.status === 200) {
          return res.data.results.map(data => {return {
            last: data.name.last,
            first: data.name.first,
            username: data.login.username,
            email: data.email,
            phone: data.phone,
            uuid: data.login.uuid,
          }});
        } 
        return [];
      })
      .catch(err => console.log(err));
  },
};

export default API;

