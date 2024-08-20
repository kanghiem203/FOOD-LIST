/**
 * "name": "Siamese",
    "type": false,
    "price": "526.00",
    "discount": 16595,
    "status": false,
    "img": "https://loremflickr.com/640/480/animals",
    "des": "The Nagasaki Lander is the trademarked name of several series of Nagasaki sport bikes, that started with the 1984 ABC800J",
    "id": "1"
  },
 */

const CHAY = true; //loại món: chay or mặn
const TINH_TRANG = true; //tình trạng món

export const renderFoodList = (arrFoods) => {
  console.log("🚀 ~ renderFoodList ~ arrFoods:", arrFoods);

  let contentHtml = "";
  // cách viết cũ
  // for (let i = 0; i < arrFoods.length; i++){
  //     let itemFood = arrFoods[i];
  //     let contentTr = `
  //     <tr>
  //         <td>${itemFood.id}</td>
  //         <td>${itemFood.name}</td>
  //         <td>${itemFood.type == CHAY ? 'Món chay' : 'Món mặn' }</td>
  //         <td>${itemFood.price}</td>
  //         <td>${itemFood.discount}</td>
  //         <td></td>
  //         <td>${itemFood.status == TINH_TRANG ? 'Còn món' : 'Hết món'}</td>

  //     </tr>
  //     `;
  //     contentHtml += contentTr ;
  // }

  // Cách viết mới
  arrFoods.forEach((itemFood) => {
    let contentTr = `
        <tr>
            <td>${itemFood.id}</td>
            <td>${itemFood.name}</td>
            <td>${itemFood.type == CHAY ? "Món chay" : "Món mặn"}</td>
            <td>${itemFood.price}</td>
            <td>${itemFood.discount}</td>
            <td></td>
            <td>${itemFood.status == TINH_TRANG ? "Còn món" : "Hết món"}</td>
            <td>
            <button onclick = "deleteFood('${
              itemFood.id
            }')" class ="btn btn-danger">Xóa</button>
            <button data-toggle="modal"
                data-target="#exampleModal" onclick="getDetailFood('${
                  itemFood.id
                }')" class ="btn btn-success">Sửa</button>
            <button class="btn btn-danger" onclick="addFoodToCart('${
                  itemFood.id
                }')">Add to Cart</button>
            </td>
        </tr>
        `;
    contentHtml += contentTr;
  });
  document.getElementById("tbodyFood").innerHTML = contentHtml;
};

export const showMessage = (message) => {
  Swal.fire({
    title: message,
    text: "",
    icon: "success",
  });
};
export const getDataFoodForm = () => {
  // console.log("data form");

  let id = document.getElementById("foodID").value;
  let name = document.getElementById("tenMon").value;
  let type = document.getElementById("loai").value == "loai1" ? true : false;
  let discount = document.getElementById("khuyenMai").value;
  let price = document.getElementById("giaMon").value;
  let status =
    document.getElementById("tinhTrang").value == "1" ? TINH_TRANG : false;
  let img = document.getElementById("hinhMon").value;
  let des = document.getElementById("moTa").value;

  let food = {
    id,
    name,
    type,
    discount,
    price,
    status,
    img,
    des,
  };
  return food;
  // console.log("🚀 ~ getDataFoodForm ~  food :",  food )
};

export const resetForm = () => {
  // console.log("reset form");

  document.getElementById("foodID").value = "";
  document.getElementById("tenMon").value = "";
  document.getElementById("loai").value = "";
  document.getElementById("khuyenMai").value = "";
  document.getElementById("giaMon").value = "";
  document.getElementById("tinhTrang").value = "";
  document.getElementById("hinhMon").value = "";
  document.getElementById("moTa").value = "";
};

export const showFoodDataToForm = (foodData) => {
  console.log("🚀 ~ showFoodDataToForm ~ foodData:", foodData);
  let { des, discount, id, img, name, price, status, type } = foodData;

  document.getElementById("foodID").value = id;
  document.getElementById("tenMon").value = name;
  document.getElementById("loai").value = type == "CHAY" ? "loai1" : "loai2";
  document.getElementById("khuyenMai").value = discount;
  document.getElementById("giaMon").value = price;
  document.getElementById("tinhTrang").value =
    status == "TINH_TRANG" ? "1" : "0";
  document.getElementById("hinhMon").value = img;
  document.getElementById("moTa").value = des;
};
export const showButton = (type) => {
  document.getElementById("btnThemMon").style.display =
    type == "create" ? "inline" : "none";
  document.getElementById("btnCapNhat").style.display =
    type == "update" ? "inline" : "none";
};
