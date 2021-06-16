import axios from "axios";

export default class CvService {
  getAllSortedByExperience() {
    return axios.get("http://localhost:8080/api/cvs/getAllSortedByExperience");
  }

  getAllSortedByGraduate() {
    return axios.get("http://localhost:8080/api/cvs/getAllSortedByGraduate");
  }

  getByCandidate(id) {
    return axios.get(
      "http://localhost:8080/api/cvs/getByCandidate?candidateId=" + id
    );
  }

  addCv(cv) {
    return axios.post("http://localhost:8080/api/cvs/add", cv);
  }
}
