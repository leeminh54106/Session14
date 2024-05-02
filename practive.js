// -------------------------------------------------------------------EX1:Đảo ngược các phần tử trong mảng
// let x = [-3, 5, 1, 3, 2, 10]; ///length = 6
// let first = 0;
// let last = x.length - 1; //last = 6
// while (first < last) { // 0 < 6
//     let b = x[first]; //b = x[0] <-3>

//     x[first] = x[last]; // 0 = 6 <-3 = 10>

//     x[last] = b; // 10 = b
//     first++;
//     last--;
//  }

//  document.write(x);

// -------------------------------------------------------------------EX2:Tìm giá trị trong mảng

//  let value = prompt("Enter a number: ");

//  let numbers = [-3, 5, 1, 3, 2, 10]; // length = 6

//  for (let i = 0; i < numbers.length; i++) {
//     if (value == numbers[i]) {
//         alert("Value " + numbers[i] + "found at " + i);
//     }
//  }

// -------------------------------------------------------------------EX3:LUYỆN TẬP VÀ THAO TÁC MẢNG

//  let array = [];
//  for(let i =0; i < 5; i++) {
//    array.push(i);
//  }
//  console.log("Sử dụng phương thức push()", array); // array =[0,1,2,3,4]

//  let a = 10;
//  array.unshift(a);
//  console.log("Sử dụng phương thức unshift()", array); // array=[10,0,1,2,3]

//  array.pop();
//  console.log("Sử dụng phương thức pop()", array); // aray=[10,0,1,2,3]

//  array.shift()
//  console.log("Sử dụng phương thức shift()", array); // array= [0,1,2,3]

//  array.splice(1,2)
//  console.log("Sử dụng phương thức splice()", array); // array =[0,3]

// -------------------------------------------------------------------EX4:TÌM GIÁ TRỊ TRONG MẢNG

// Tìm giá trị trong mảng
// let array = [1, 2, 3, 4, 5, 6];
// let n = prompt("Nhập vào số bất kỳ");

// let check = false;
// for(let i = 0; i < array.length; i++) 
// {
//   if(n == array[i]) {
//     check = true;
//   }
// }

// if (check == true) {
//   alert("Bingo");
// } else {
//   alert("Chúc bạn may mắn lần sau");
// }

// -------------------------------------------------------------------EX5:ĐẢO NGƯỢC CÁC PHẦN TỬ TRONG MẢNG

//   // VD: 1,3,5,12,65,98
// let n = prompt("Nhập vào đây số bất kỳ được ngăn cách bởi dấu ,");
// let convert = [];
//     convert = n.split(",");
// // console.log(convert);
// console.log("Chuyển đổi string sang array", convert.reverse()); // convert=[1,3,5,12,65,98]

// ---------------------------------
// // VD: 1,3,5,12,65,98
// let n = prompt("Nhập vào đây số bất kỳ được ngăn cách bởi dấu ,");
// let convert = n.split(",");
// consoloe.log("Chuyển đổi string sang array", convert); // convert=[1,3,5,12,65,98]

// let array =[];
// for(i = convert.length -1; i>= 0; i--) {
//   array.push(convert[i]);
//   console.log("Đảo ngược các phần tử", array); // array =[98,65,12,5,3,1]
// }

// -------------------------------------------------------------------EX6:TÌM PHẦN TỬ LỚN NHẤT TRONG MẢNG

// VD: -89,57,-20,36,24,75
// let a = prompt("Nhập vào đấy số bất kỳ ngắn cách bởi dấu ,");
// let convert = a.split(",");
// console.log("Chuyển đổi string sang array", convert); // convert=[-89,57,-20,36,24,75]

// let max = convert[0];
// for(let i =0; i < convert.length; i++) {
//   if(max < convert[i]) {
//     max = convert[i]
//   }
// }
// console.log(max);

// -------------------------------------------------------------------EX7:Sử dụng các hàm có sẵn của mảng

// Bài 1: Viết một chương trình JavaScript để nối tất cả các phần tử trong một mảng chuỗi lại với nhau.

// let color = ['red', 'blue', 'green'];
// // console.log(color);
// color = color.join();
// console.log(color);

// Bài 2: Viết một chương trình nhận một số nhập vào và chèn dấu (_) giữa 2 số chẵn.

// let x = "245468";
// let y = '';

// // console.log(x);

// for (i = 0; i < x.length; i++){
//   let check = x[i] % 2 === 0 && x[i+1] % 2 === 0;
//   if(check){
//     y+= x[i] + '-';

//   }else{
//     y += x[i]
//   }

// }
// console.log(y);

// Bài 3: Viết một chương trình nhập vào một chuỗi và 
// chuyển các ký tự chữ thường trong chuỗi vừa nhập sang thành dạng chữ hoa.

// let n = prompt('nhap in thuong vs in hoa vao');

// x = '';

// for(let i = 0; i < n.length; i++){
//   if(n[i] == n[i].toUpperCase()){
//     x += n[i].toLowerCase()

//   }else{
//     x += n[i].toUpperCase()
//   }

// }
// console.log(x);

// -------------------------------------------------------------------EX8:Từ điển

// let x = ['one','two','three','four'];

// let y = ['mot','hai','ba','bon'];

// let z = prompt('nhap tu 1 -4');


// if( x.indexOf(z) !== -1 ){

//   console.log(y[x.indexOf(z)]);

// } else if(y.indexOf(z) !== -1 ){
//   console.log(x[y.indexOf(z)]);
// }else{
//   alert('nhap lai');
// }

// -------------------------------------------------------------------EX9:Từ điển

const todoList = ['Go to bed at 11pm', 'Do homework at 8pm'];
let luachon = "";
do {
  luachon = prompt("Nhap lua chon");
  switch (luachon) {
    case "C":
      let todo = prompt("Nhap cong viec moi");
      todoList.push(todo);
      break;
    case "R":
      console.log(todoList);
      break;
    case "U":
      let indexUpdate = "";
      do {
        indexUpdate = +prompt("Nhap vi tri can update");
      } while (indexUpdate < 0 || indexUpdate >= todoList.length)

      let updateTodo = prompt("Nhap cong viec duoc update");
      todoList.splice(indexUpdate - 1, 1, updateTodo);
      break;
    case "D":
      let indexDel = "";
      do {
        indexDel = +prompt("Nhap vi tri can xoa");
      } while (indexDel < 0 || indexDel >= todoList.length)
      todoList.splice(indexDel - 1, 1)
      break;
    default:
      console.log("Ban can nhap dung: C/R/U/D");
      break;
  }

} while (luachon != "0");