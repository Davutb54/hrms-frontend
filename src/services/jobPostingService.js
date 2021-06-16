import axios from "axios";

export default class JobPostingService{
    getActiveJobPostings(){
        return axios.get("http://localhost:8080/api/jobPostings/getActives")
    }

    getActivesJobPostingsByEmployer(id){
        return axios.get("http://localhost:8080/api/jobPostings/getActivesByEmployer?employerId="+id)
    }

    getActivesSortedByReleaseDate(){
        return axios.get("http://localhost:8080/api/jobPostings/getActivesSortedByReleaseDate")
    }

    deactiveJobPosting(jobPosting){
        return axios.post("http://localhost:8080/api/jobPostings/deactive?jobPosting="+jobPosting)
    }

    addJobPosting(jobPosting){
        return axios.post("http://localhost:8080/api/jobPostings/add?jobPosting="+jobPosting)
    }
}