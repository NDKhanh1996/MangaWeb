import axios from "axios";

class Bookservice {
    static async getListComic() {
        return await axios.post('http://localhost:8080/book/')
    }
    static async addComic(data) {
        return await axios.post('http://localhost:8080/book/add', data)
    }
    static async editComic(id, data){
        return await axios.put(`http://localhost:8080/book/update/${id}`, data)
    }
}

export default Bookservice