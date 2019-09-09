import axios from "axios"
let ApiShop = {
    getShopDetails(id){
        return axios.get("api/shop/getShopDetails/"+id).then(res => res.data[0])
    },
}
export default ApiShop