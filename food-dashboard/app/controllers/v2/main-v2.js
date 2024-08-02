import { deleteFoodApi, getListFoodApi } from "../../services/services.js";
import { renderFoodList } from "./controller-v2.js";



const fetchListFood = () =>{
    getListFoodApi()
    .then((res) => {
    console.log("🚀 ~ res:", res);
    let listFood = res.data;
    renderFoodList(listFood);
    
    })
    .catch((err) => {
    console.log("🚀 ~ err:", err)

    });

};
fetchListFood();

// GET, DELETE, PUT, POST

// DELETE
const deleteFood = (id) => {
    console.log("🚀 ~ deleteFood ~ id:", id);
    // viết api delete
    deleteFoodApi(id)
   .then((res) => {
    console.log('Respone:', res);
    // Delete successfull
    fetchListFood();


   })
   .catch((err) =>{

   });
  
}
window.deleteFood = deleteFood;