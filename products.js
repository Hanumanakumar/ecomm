function request(file,callback){
	var xhr=new XMLHttpRequest();
	xhr.overrideMimeType("application/json");
	xhr.open("GET",file, true);
	xhr.onreadystatechange=function(){
		if(xhr.readyState===4 && xhr.status=="200"){
			callback(xhr.responseText);
		}
	};
	xhr.send();
}

request("data.json", function(text){
	let data=JSON.parse(text);
	console.log(data);
	products(data.products);
	shirts(data.shirts);
	kids(data.kids);
})

var body=document.getElementById("body");

// var heading=document.createElement("h1");
// h1.textContent=""


function products(info){
	var mobile_section=document.createElement("section");
	mobile_section.style.border="3px solid #ddd";
	mobile_section.setAttribute("id","men");
	body.appendChild(mobile_section);


	var main=document.createElement("div");
main.classList.add("flex_parent");
mobile_section.appendChild(main);
	for(var i=0; i<info.length; i++){
var product_div=document.createElement("div");
product_div.classList.add("flex_child");
main.appendChild(product_div);
var image=document.createElement("img");
image.classList.add("img");
image.src=info[i].image;
product_div.appendChild(image);
var name=document.createElement("h2");
name.textContent=info[i].name;
product_div.appendChild(name);
var price=document.createElement("p");
price.textContent=info[i].Price;
product_div.appendChild(price);
var button=document.createElement("button");
button.style.padding="3%";
button.textContent="Add to Cart";
button.style.background="#96B722";
button.style.color="#fff";
product_div.appendChild(button);
button.style.width="100%";
button.style.fontWeight="550";
button.style.boxShadow="3px 3px 3px #ddd";
}
}

function shirts(item){
	var shirts_section=document.createElement("section");
	shirts_section.setAttribute("id","shirts");
	shirts_section.style.border="3px solid #ddd";
	body.appendChild(shirts_section);

var main_shirts=document.createElement("div");
main_shirts.classList.add("flex_parent");
shirts_section.appendChild(main_shirts);


for(var i=0; i<item.length; i++){
var product_shirt=document.createElement("div");
product_shirt.classList.add("flex_child");
main_shirts.appendChild(product_shirt);
var image=document.createElement("img");
image.classList.add("img");
image.src=item[i].image;
product_shirt.appendChild(image);
var brand=document.createElement("h2");
brand.textContent=item[i].brand;
product_shirt.appendChild(brand);
var price=document.createElement("p");
price.innerHTML="Rs:"+item[i].price;
product_shirt.appendChild(price);
var button=document.createElement("button");
button.style.padding="3%";
button.textContent="Add to Cart";
button.style.background="#96B722";
button.style.color="#fff";
product_shirt.appendChild(button);
button.style.width="100%";
button.style.fontWeight="550";
button.style.boxShadow="3px 3px 3px #ddd";
// var button=document.createElement("button");
// button.style.padding="2%";
// button.textContent="Add to Cart";
// button.style.background="blue";
// button.style.color="#fff";
// product_div.appendChild(button);
// button.style.width="100%";
// button.style.fontWeight="550";
// button.style.boxShadow="3px 3px 3px #000";
}
}


function kids(kid){
	var kid_section=document.createElement("section");
	kid_section.setAttribute("id","kids");
	kid_section.style.border="3px solid #ddd";
	body.appendChild(kid_section);

var main_kids=document.createElement("div");
main_kids.classList.add("flex_parent");
kid_section.appendChild(main_kids);


for(var i=0; i<kid.length; i++){
var product_kids=document.createElement("div");
product_kids.classList.add("flex_child");
main_kids.appendChild(product_kids);
var image=document.createElement("img");
image.classList.add("img");
image.src=kid[i].image;
product_kids.appendChild(image);
var brand=document.createElement("h2");
brand.textContent=kid[i].brand;
product_kids.appendChild(brand);
var price=document.createElement("p");
price.innerHTML="Rs:"+kid[i].price;
product_kids.appendChild(price);
var button=document.createElement("button");
button.style.padding="3%";
button.textContent="Add to Cart";
button.style.background="#96B722";
button.style.color="#fff";
product_kids.appendChild(button);
button.style.width="100%";
button.style.fontWeight="550";
button.style.boxShadow="3px 3px 3px #ddd";
}
}










