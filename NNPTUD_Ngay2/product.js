
// Câu 1: Khai báo constructor function Product
function Product(id, name, price, quantity, category, isAvailable) {
	this.id = id;
	this.name = name;
	this.price = price;
	this.quantity = quantity;
	this.category = category;
	this.isAvailable = isAvailable;
}

// Câu 2: Khởi tạo mảng products (ít nhất 6 sản phẩm, >=2 danh mục)
const products = [
	new Product(1, 'Smartphone X', 25000000, 10, 'Electronics', true),
	new Product(2, 'Laptop Pro', 45000000, 5, 'Electronics', true),
	new Product(3, 'Wireless Earbuds', 2000000, 0, 'Accessories', true),
	new Product(4, 'Charging Cable', 150000, 50, 'Accessories', true),
	new Product(5, 'Coffee Maker', 1200000, 3, 'Home Appliances', false),
	new Product(6, 'Office Chair', 3200000, 2, 'Furniture', true),
];

console.log('\n=== Danh sách sản phẩm (gốc) ===');
console.log(products);

// Câu 3: Tạo mảng mới chỉ chứa: name, price của mỗi sản phẩm.
const namesAndPrices = products.map(p => ({ name: p.name, price: p.price }));
console.log('\nCâu 3: Mảng chỉ chứa name và price:');
console.log(namesAndPrices);

// Câu 4: Lọc ra các sản phẩm còn hàng trong kho (quantity > 0).
const inStock = products.filter(p => p.quantity > 0);
console.log('\nCâu 4: Sản phẩm còn hàng (quantity > 0):');
console.log(inStock);

// Câu 5: Kiểm tra xem có ít nhất một sản phẩm có giá trên 30.000.000 hay không.
const hasExpensive = products.some(p => p.price > 30000000);
console.log('\nCâu 5: Có ít nhất 1 sản phẩm > 30.000.000 ? ', hasExpensive);

// Câu 6: Kiểm tra xem tất cả sản phẩm thuộc danh mục "Accessories" có đang được bán hay không.
const accessories = products.filter(p => p.category === 'Accessories');
const allAccessoriesAvailable = accessories.length > 0 && accessories.every(p => p.isAvailable === true);
console.log('\nCâu 6: Tất cả sản phẩm trong danh mục "Accessories" đều đang bán? ', allAccessoriesAvailable);

// Câu 7: Tính tổng giá trị kho hàng. Giá trị kho = price × quantity
const totalStockValue = products.reduce((sum, p) => sum + p.price * p.quantity, 0);
console.log('\nCâu 7: Tổng giá trị kho hàng =', totalStockValue);

// Câu 8: Dùng for...of duyệt mảng products và in ra: Tên sản phẩm – Danh mục – Trạng thái
console.log('\nCâu 8: Duyệt bằng for...of và in ra Tên – Danh mục – Trạng thái:');
for (const p of products) {
	console.log(`${p.name} – ${p.category} – ${p.isAvailable ? 'Đang bán' : 'Không bán'}`);
}

// Câu 9: Dùng for...in để in ra tên thuộc tính và giá trị tương ứng (với mỗi sản phẩm)
console.log('\nCâu 9: Dùng for...in in ra thuộc tính và giá trị của từng sản phẩm:');
for (const p of products) {
	console.log(`\n-- ${p.name} --`);
	for (const key in p) {
		if (Object.prototype.hasOwnProperty.call(p, key)) {
			console.log(`${key}: ${p[key]}`);
		}
	}
}

// Câu 10: Lấy danh sách tên các sản phẩm đang bán và còn hàng.
const sellingAndInStockNames = products
	.filter(p => p.isAvailable && p.quantity > 0)
	.map(p => p.name);
console.log('\nCâu 10: Tên các sản phẩm đang bán và còn hàng:');
console.log(sellingAndInStockNames);

// Export (nếu cần sử dụng như module)
if (typeof module !== 'undefined' && module.exports) {
	module.exports = { Product, products };
}
