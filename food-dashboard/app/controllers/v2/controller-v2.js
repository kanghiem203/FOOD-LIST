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
            <td>${itemFood.type == CHAY ? 'Món chay' : 'Món mặn' }</td>
            <td>${itemFood.price}</td>
            <td>${itemFood.discount}</td>
            <td></td>
            <td>${itemFood.status == TINH_TRANG ? 'Còn món' : 'Hết món'}</td>
            <td>
            <button onclick = "deleteFood('${itemFood.id}')" class ="btn btn-danger">Xóa</button>
            <button class ="btn btn-success">Sửa</button>
            </td>
        </tr>
        `;
        contentHtml += contentTr ;
  
    });
    document.getElementById('tbodyFood').innerHTML = contentHtml;
   
}