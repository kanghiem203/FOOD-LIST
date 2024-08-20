import { createFoodApi, deleteFoodApi, getDetailFoodApi, getListFoodApi, updateFoodApi } from "../../services/services.js";
import { getDataFoodForm, renderFoodList, resetForm, showButton, showFoodDataToForm, showMessage } from "./controller-v2.js";



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
    // Xóa thành công render lại foodlist
    fetchListFood();
    showMessage("Delete Successful!")


   })
   .catch((err) =>{

   });
  
}
window.deleteFood = deleteFood;
// POST
const createFood = () =>{
    
    let foodForm = getDataFoodForm();

    createFoodApi(foodForm)
    .then(
        (res) => {
            console.log("🚀 ~ createFood ~ res:", res)
            showMessage("Thêm thành công!");
            $("#exampleModal").modal("hide");
            resetForm();
            fetchListFood();
                
        }
    ).catch(
        (err) => {
            console.log("🚀 ~ createFood ~ err:", err)
            
        }
    );

}
window.themMon = createFood;

// get: id
const getDetailFood = (idClick) => {
    showButton('update');
// console.log("🚀 ~ getDetailFood ~ id:", id);
getDetailFoodApi(idClick)
.then(
    (res) => {
        console.log("🚀 ~ getDetailFood ~ res:", res);
        let foodDetail = res.data;
        showFoodDataToForm(foodDetail);
        
    }
)
.catch(
    (err) => {
        console.log("🚀 ~ getDetailFood ~ err:", err);
        
        
    }
);

}
window.getDetailFood = getDetailFood;

// UPDATE => push
/**
 * 1. Lấy data từ form
 */
const updateFood = () =>{
    // console.log('yes');
    let foodData = getDataFoodForm();
    updateFoodApi(foodData)
    .then(
        (res) => {
            console.log("🚀 ~ updateFood ~ (res):", (res));
            showMessage("Cập nhật thành công!");
            $("#exampleModal").modal("hide");
            resetForm();
            resetForm();
            fetchListFood();

           
            
        }
    )
    .catch(
        (err) => {
            console.log("🚀 ~ updateFood ~ err:", err);
            
            
        }
    );
    

}
window.updateFood = updateFood;


const arrCart = [];

const addFoodToCart = (id) =>{
    
    getDetailFoodApi(id)
    .then(
        (res) => {
            console.log("🚀 ~ addFoodToCart ~ res:", res);
            let foodDetail = res.data;
            let foodIndex = arrCart.find((item) =>item.id == foodDetail.id);
            if(!foodIndex){
            arrCart.push({...foodDetail, soLuong: 1});
            }else{
                foodIndex.soLuong += 1;

            }

            console.log("🚀 ~ addFoodToCart ~ arrCart:", arrCart);

        
            
        }
    )
    .catch(
        (err) => {
            console.log("🚀 ~ addFoodToCart ~ err:", err)
        
            
        }

    );
}
window.addFoodToCart = addFoodToCart;

