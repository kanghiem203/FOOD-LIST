import { getDataForm, showInfoDetailFood } from "./controller-v1.js";

const createFood = () =>{
    // console.log('thêm món');
    let dataForm = getDataForm();
    console.log("🚀 ~ createFood ~ dataForm:", dataForm);
    showInfoDetailFood(dataForm);
}
window.themMon = createFood; //btn Thêm Món