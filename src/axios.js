import axios from "axios";

const instance = axios.create({
  baseURL: "https://amazon-backend-clone.herokuapp.com", //API (Cloud functional) URL
});

export default instance;

/*"http://localhost:5001/clone-8c9f9/us-central1/api") 

we can also connect with firebase function as a backend with firebase blaze account"*/
