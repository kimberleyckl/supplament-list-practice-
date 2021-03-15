const fishOil_clicked = () => {
	document.getElementById("fishOil_page").style.display = "block";
	document.getElementById("vitaminC_page").style.display = "none";
	// document.getElementById("cart_page").style.display = "none";
	document.getElementById("delivery_page").style.display = "none";
	load_table(fishOil_products);
};

const vitaminC_clicked = () => {
	document.getElementById("fishOil_page").style.display = "none";
	document.getElementById("vitaminC_page").style.display = "block";
	document.getElementById("delivery_page").style.display = "none";
	// document.getElementById("cart_page").style.display = "none";
	load_table1(VC_products);
};

const delivery_clicked = () => {
	document.getElementById("fishOil_page").style.display = "none";
	document.getElementById("vitaminC_page").style.display = "none";
	document.getElementById("delivery_page").style.display = "block";
	// document.getElementById("cart_page").style.display = "none";
};

const cart_clicked = () => {
	document.getElementById("fishOil_page").style.display = "none";
	document.getElementById("vitaminC_page").style.display = "none";
	document.getElementById("delivery_page").style.display = "none";
	// document.getElementById("cart_page").style.display = "block";
};

// ===========================================================================================================
// ===============================================Fish Oil page===============================================
// ===========================================================================================================
// [[brand, strength, odourless, price, amount]]
const n = false;
const y = true;
let fishOil_products = [
	["Blackmores", 1000, n, 12, 200],
	["Blackmores", 1000, n, 30, 400],
	["Blackmores", 1000, y, 20, 200],
	["Blackmores", 1000, y, 32, 400],
	["Blackmores", 1000, y, 22, 500],
	["Cenovis", 1500, y, 19, 200],
	["Go Healthy", 1500, y, 10, 210],
	["Go Healthy", 1500, y, 31, 420],
	["Go Healthy", 2000, y, 18, 230],
	["Go Healthy", 2000, y, 12, 90],
	["Go Healthy", 1000, y, 27, 440],
	["Good Health", 1000, n, 10, 400],
	["Good Health", 1500, n, 30, 420],
	["Healtheries", 1000, n, 12, 200],
	["Healtheries", 1500, n, 15, 150],
	["Healtheries", 1500, n, 23, 270],
	["Healthy Care", 1000, n, 14, 400],
	["Healthy Care", 2000, y, 32, 400],
	["Microgenics", 1500, y, 23, 400],
	["Microgenics", 2000, y, 26, 340],
	["Nature's Own", 1500, y, 25, 200],
	["Nature's Own", 1000, y, 29, 400],
	["Nature's Own", 2000, y, 30, 200],
	["Nature's Own", 1000, y, 30, 500],
	["Nutra-Life", 1000, n, 9, 180],
	["Nutra-Life", 1000, n, 17, 400],
	["Red Seal", 1000, n, 12, 200],
	["Red Seal", 1500, n, 15, 125],
	["Swisse", 1500, y, 30, 400],
	["Swisse", 1500, y, 17, 200],
	["Swisse", 1000, y, 13, 200],
	["Swisse", 1000, y, 17, 500],
	["Wagner", 1000, n, 12, 400],
];

const fp = fishOil_products.map((product) => [
	product[0],
	product[1],
	product[2],
	product[3],
	product[4],
	(product[3] / product[4]).toFixed(2),
]);

fishOil_products = fishOil_products.map((product) => [
	product[0],
	product[1],
	product[2],
	product[3],
	product[4],
	(product[3] / product[4]).toFixed(2),
]);

const load_table = (fishOil_products) => {
	const fishOil_table = document.getElementById("fishOil_table");
	fishOil_table.innerHTML = " ";
	let table = document.createElement("table");
	const tableTitles = document.createElement("tr");

	const th_pic = document.createElement("th");
	th_pic.innerHTML = "參考圖";
	tableTitles.appendChild(th_pic);

	th_brand = document.createElement("th");
	th_brand.innerHTML = "<div id='sort_button' onclick='load_table(fp)'>牌子</div>";
	tableTitles.appendChild(th_brand);

	th_strength = document.createElement("th");
	th_strength.innerHTML = "<div id='sort_button' onclick='th_sort_clicked1(fishOil_products,1)'>濃度</div>";
	tableTitles.appendChild(th_strength);

	th_odourless = document.createElement("th");
	th_odourless.innerHTML = "<div id='sort_button' onclick='th_sort_clicked1(fishOil_products,2)'>無味</div>";
	tableTitles.appendChild(th_odourless);

	th_price = document.createElement("th");
	th_price.innerHTML = "<div id='sort_button' onclick='th_sort_clicked(fishOil_products,3)'>價格</div>";
	tableTitles.appendChild(th_price);

	th_amount = document.createElement("th");
	th_amount.innerHTML = "<div id='sort_button' onclick='th_sort_clicked1(fishOil_products,4)'>數量(粒)</div>";
	tableTitles.appendChild(th_amount);

	th_pricePC = document.createElement("th");
	th_pricePC.innerHTML = "<div id='sort_button' onclick='th_sort_clicked(fishOil_products,5)'>每粒價格</div>";
	tableTitles.appendChild(th_pricePC);

	table.appendChild(tableTitles);

	let products = fishOil_products.map((product) => {
		let tr = document.createElement("tr");
		let brand = document.createElement("td");
		brand.innerHTML = product[0];
		let strength = document.createElement("td");
		strength.innerHTML = product[1] + "mg";
		let odourless = document.createElement("td");
		if (product[2] == true) {
			odourless.innerHTML = "&#10004";
		} else {
			odourless.innerHTML = " ";
		}
		let price = document.createElement("td");
		price.innerHTML = "$" + product[3];
		let amount = document.createElement("td");
		amount.innerHTML = product[4] + "粒";
		let pricePerCapsule = document.createElement("td");
		pricePerCapsule.innerHTML = "$" + product[5];
		let pic = document.createElement("td");
		let inner = '<img  src="./images/' + product[0] + '.jpg" />';
		pic.innerHTML = inner;
		tr.appendChild(pic);
		tr.appendChild(brand);
		tr.appendChild(strength);
		tr.appendChild(odourless);
		tr.appendChild(price);
		tr.appendChild(amount);
		tr.appendChild(pricePerCapsule);
		table.appendChild(tr);
		return;
	});
	fishOil_table.appendChild(table);
};

th_sort_clicked = (fishOil_products, num) => {
	fishOil_products.sort(function (a, b) {
		return a[num] - b[num];
	});
	load_table(fishOil_products);
};

th_sort_clicked1 = (fishOil_products, num) => {
	fishOil_products.sort(function (a, b) {
		return b[num] - a[num];
	});
	load_table(fishOil_products);
};

// ============================================================================================================
// ===============================================Vitamin C page===============================================
// ============================================================================================================
// [[brand, strength, price, amount, ]]
let VC_products = [
	["Healtheries", 500, 9, 60],
	["Healtheries", 1000, 11, 35],
	["Healtheries", 1000, 19, 100],
	["Healtheries", 1000, 14, 400],
	["Cenovis", 250, 11, 150],
	["Cenovis", 1000, 10, 60],
	["Swisse", 500, 19, 310],
	["Swisse", 1000, 27, 150],
	["Sanderson", 1300, 26, 200],
	["Sanderson", 1300, 17, 100],
	["Sanderson", 600, 8, 55],
	["Sanderson", 600, 13, 220],
	["Sanderson", 1150, 8, 35],
	["Nutra-life", 500, 20, 200],
	["Nutra-life", 1200, 22, 120],
	["Thompson's", 1000, 22, 60],
	["Thompson's", 1000, 30, 150],
	["Thompson's", 500, 18, 200],
];

const VC = VC_products.map((product) => [
	product[0],
	product[1],
	product[2],
	product[3],
	(product[2] / product[3]).toFixed(2),
]);

VC_products = VC_products.map((product) => [
	product[0],
	product[1],
	product[2],
	product[3],
	(product[2] / product[3]).toFixed(2),
]);

const load_table1 = (VC_products) => {
	const vitaminC_table = document.getElementById("vitaminC_table");
	vitaminC_table.innerHTML = " ";
	let table = document.createElement("table");
	const tableTitles = document.createElement("tr");

	const th_pic = document.createElement("th");
	th_pic.innerHTML = "參考圖";
	tableTitles.appendChild(th_pic);

	th_brand = document.createElement("th");
	th_brand.innerHTML = "<div id='sort_button' onclick='load_table1(VC)'>牌子</div>";
	tableTitles.appendChild(th_brand);

	th_strength = document.createElement("th");
	th_strength.innerHTML = "<div id='sort_button' onclick='th_sort_clicked4(VC_products,1)'>濃度</div>";
	tableTitles.appendChild(th_strength);

	th_price = document.createElement("th");
	th_price.innerHTML = "<div id='sort_button' onclick='th_sort_clicked3(VC_products,2)'>價格</div>";
	tableTitles.appendChild(th_price);

	th_amount = document.createElement("th");
	th_amount.innerHTML = "<div id='sort_button' onclick='th_sort_clicked4(VC_products,3)'>數量(粒)</div>";
	tableTitles.appendChild(th_amount);

	th_pricePC = document.createElement("th");
	th_pricePC.innerHTML = "<div id='sort_button' onclick='th_sort_clicked3(VC_products,4)'>每粒價格</div>";
	tableTitles.appendChild(th_pricePC);

	table.appendChild(tableTitles);

	let products = VC_products.map((product) => {
		let tr = document.createElement("tr");
		let brand = document.createElement("td");
		brand.innerHTML = product[0];
		let strength = document.createElement("td");
		strength.innerHTML = product[1] + "mg";
		let price = document.createElement("td");
		price.innerHTML = "$" + product[2];
		let amount = document.createElement("td");
		amount.innerHTML = product[3] + "粒";
		let pricePerCapsule = document.createElement("td");
		pricePerCapsule.innerHTML = "$" + product[4];
		let pic = document.createElement("td");
		let inner = '<img  src="./images/' + product[0] + 'C.jpg" />';
		pic.innerHTML = inner;
		tr.appendChild(pic);
		tr.appendChild(brand);
		tr.appendChild(strength);
		tr.appendChild(price);
		tr.appendChild(amount);
		tr.appendChild(pricePerCapsule);
		table.appendChild(tr);
		return;
	});
	vitaminC_table.appendChild(table);
};

th_sort_clicked3 = (fishOil_products, num) => {
	fishOil_products.sort(function (a, b) {
		return a[num] - b[num];
	});
	load_table1(fishOil_products);
};

th_sort_clicked4 = (fishOil_products, num) => {
	fishOil_products.sort(function (a, b) {
		return b[num] - a[num];
	});
	load_table1(fishOil_products);
};

// ===========================================================================================================
// ===============================================Delivery page===============================================
// ===========================================================================================================
