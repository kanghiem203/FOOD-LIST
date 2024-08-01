/**------ ES5
 * - Khi viết tên class phải viết hoa chữ cái đầu
 * - Function nhìn không được tường minh
 * 
 */
function Cat (name, color){
    this.name = name;
    this.color = color;
}

let cat1 = new Cat('Mun', 'white');
console.log("🚀 ~ cat1:", cat1);

/**------ ES6
 * 
 * 
 */
class Dog{
// constructor là 1 hàm trong class
// Khi constructor khởi tạo, sẽ tự chạy khi new 1 class
    constructor(name, color){
        this.name = name;
        this.color = color;
    }

}
let dog1 = new Dog('Ben', 'Black');
console.log("🚀 ~ dog1:", dog1);
