import axios from "axios";

export default class ImageService{
    addImage(image,file){
        let data = new FormData()
        data.append('file',file,image.publicId)
        return axios.post("http://localhost:8080/api/images/add?id="+image.id+"&publicId="+image.publicId,data)
    }
}