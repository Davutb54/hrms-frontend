import axios from "axios";

export default class ProductService {
  getCandidates() {
    return axios.get("http://localhost:8080/api/candidates/getAll");
  }

  addCandidate(candidate) {
    return axios.post("http://localhost:8080/api/candidates/add", candidate);
  }
}
