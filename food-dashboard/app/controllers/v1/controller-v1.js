export const getDataForm = () =>{

    // 1. Lấy thông tin từ form
    // => hiển thị thông tin lấy được lên foodDetail
    const id = document.getElementById('foodID').value;
    const tenMon = document.getElementById('tenMon').value;
    const loai = document.getElementById('loai').value;
    const giaMon = document.getElementById('giaMon').value;
    const khuyenMai = document.getElementById('khuyenMai').value;
    const tinhTrang = document.getElementById('tinhTrang').value;
    const hinhMon = document.getElementById('hinhMon').value;
    const moTa = document.getElementById('moTa').value;

    const giaKm = giaMon *(1 - khuyenMai);


    // Khi tạo ob có key value trùng nhau => lược bỏ value lấy key
    const foodForm ={
        id,
        tenMon,
        loai,
        giaMon,
        khuyenMai,
        tinhTrang,
        hinhMon,
        moTa,
        giaKm,

    }
    // console.log("🚀 ~ getDataForm ~ foodForm:", foodForm);
   
    return foodForm;
}

let loaiMonAn ={
    loai1: 'chay',
    loai2: 'mặn',
}

export const showInfoDetailFood = (foodForm) => {
    // console.log("🚀 ~ showInfoDetailFood ~ foodForm:", foodForm);

    // ------------bóc tách object
    // Cách viết mới
    let {id, tenMon, loai, giaMon, khuyenMai, tinhTrang, hinhMon, moTa, giaKm} = foodForm;
    document.getElementById('spMa').innerHTML = id;
    document.getElementById('spTenMon').innerHTML = tenMon;

    document.getElementById('spLoaiMon').innerHTML = loaiMonAn[loai];

    document.getElementById('imgMonAn').innerHTML = hinhMon;
    document.getElementById('pMoTa').innerHTML = moTa;

    document.getElementById('spGia').innerHTML = giaMon;
    document.getElementById('spKM').innerHTML = khuyenMai * 100 + '%';
    document.getElementById('spGiaKM').innerHTML = giaKm;

    document.getElementById('spTT').innerHTML = tinhTrang == 0 ? 'hết' : 'còn';





    // Cách viết cũ
    // document.getElementById('spMa').innerHTML = foodForm.id;
    // document.getElementById('spTenMon').innerHTML = foodForm.tenMon;
    // document.getElementById('spLoaiMon').innerHTML = foodForm.loai;
    // document.getElementById('spGia').innerHTML = foodForm.giaMon;
    // document.getElementById('spKM').innerHTML = foodForm.khuyenMai;
    // document.getElementById('spTT').innerHTML = foodForm.tinhTrang;
    // document.getElementById('imgMonAn').innerHTML = foodForm.hinhMon;
    // document.getElementById('pMoTa').innerHTML = foodForm.moTa;
    // document.getElementById('spGiaKM').innerHTML = foodForm.giaKm;


    
}