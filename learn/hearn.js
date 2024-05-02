// console.log('Hello World');


// --------------------------------------------------------------------------
//ung dung quan ly trong nha hang
//

let dishes =
    [
        'thit cho', //0
        'gia cay',//1
        'tieu ho',//2
        'thit quay gion bi',//3
        'ma heo chien ron',//4
        'top mo chieu khuc',//5
    ];
    // console.log(dishes);
    // console.log('tong so mon an', dishes.length);

//---------------------------------------------------------------real

    // let dis = dishes[0];
    // console.log('ship cho son 1 lang', dis, 'kem xa');

    // real all , goi tat ca ca phan tu trong 1 mang ra
    //duyet qua mang

    // let person = 'son';
    // for( let i = 0; i <= dishes.length - 1; i++){
    //     person +=  ` an ${dishes[i]},`;
    // }
    // console.log(person);
    
    console.log(dishes);
// ----------------------------------------------------- create
//     //them dau, them 1 phan tu moi vao mang
//     dishes.unshift('xoi chim');
//     console.log(dishes);

//     //them cuoi, theem 1 phan tu vao cuoi mang 
//     dishes.push('mi indomie');
//     console.log(dishes);
// // ------------------------------------------------------ updates

//     //updates: cập nhập
//     dishes[3] = `tieu ho v2` //nhớ để ý các phần tử sau khi được thêm đầu, cuối.vị trí đã thay đổi.
//     console.log(dishes);
// // ------------------------------------------------------------delete
//     //xoa phan tu dau, arr.shift()
//     dishes.shift();
//     console.log(dishes);

//     //xoa phan tu cuoi, arr.pop()
//     dishes.pop();
//     console.log(dishes);

//     //xoa phan tu bai ki,arr.splice()
//     //index: vi tri phan tu muon xoa (x)
//     //number: so luong muon xoa (y),co the xoa nhieu tinh tu vi tri do
//     dishes.splice(2, 1);
//     console.log(dishes);

//     //thay the vi tri phan tu
//     dishes.splice(3, 1);
//     dishes.splice(3, 1,'KFC');
//     //them moi 1 phan tu vao vi tri mong muon
//     dishes.splice(3, 0, 'bun dau','banh da cua');

// -----------------------------------------------------------------------
// //
// let singers = [
//     'jack 5 cu',
//     'sep',
//     'keo con',
//     'den vau',
//     'ngoc sky',
// ];

// //
// let randomlist = [
//     10,
//     true,
//     false,
//     'hello',
//     undefined,
//     null,
// ];

// //

// let randomnumbers = [ 1, 2, 3, -4, 10];

// // console.log(randomlist);

//---------------------------------------------- split
// tach cac phan tu tong 1 mang: cach, -,v.v....

let sentence = 'hahahahaha';

let letters = sentence.split('');

console.log(letters);

//noi vao 1 mang

let full = letters.join(' ');
console.log(full);