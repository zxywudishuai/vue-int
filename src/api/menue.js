import axios from "axios"
let ApiMenue = {
    getCategories(){
        return axios.get("api/category/getcategories").then(res => res.data)
    },
    getMenues(id){
        return axios.get("api/menue/getMenues/"+id).then(res => res.data)
    },
    getAllMenues(){
        return axios.get("api/menue/getAllMenues").then(res => res.data)
    },
    getMenueDetails(id){
        return axios.get("api/menue/getMenueDetails/"+id).then(res => res.data[0])
    },
}
export default ApiMenue