let products = [
    { id: 1, name: "Milk", count: 100 },
    { id: 2, name: "Orange", count: 100 },
    { id: 3, name: "Butter", count: 100 }
  ];
  
products.push({ id: 4, name: "Cheese", count: 50 });
products = products.filter(product => product.id !== 2);
let product3 = products.find(product => product.id === 3);
  if (product3) {
    product3.count = 0;
  }
let searchKey = "Butter";
let found = products.find(p => p.name === searchKey);
  
  if (found) {
    console.log("Sản phẩm tìm thấy:", found);
  } else {
    console.log("Không có dữ liệu bạn tìm kiếm");
  }
  