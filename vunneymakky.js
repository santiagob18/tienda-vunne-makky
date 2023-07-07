
let products = [];
let total = 0;

const menupnavegacion = document.getElementById("menu-p-navegacion").style.display = "flex"
/*menu desplegable en el navbar*/
const menu_usuario = document.getElementById("menu_usuario")
const opciones = document.getElementById("opciones")
const carritodecompras = document.getElementById("carrito_de_compras")
const menu_desplegable_desktop = document.getElementById("menu_desplegable_desktop")
/*validacion del formulario*/
const form = document.getElementById("form").style.display = "none"
const usuariocreadocorrectamente = document.getElementById("usuario-creado-correctamente").style.display = "none"
const inputs = document.querySelectorAll("#form input")
const botonnomitir = document.getElementById("btn-omitir")
const ocultarsection = document.getElementById("btn-final-enviar")
/*seccion iniciar sesion*/
const sectioniniciarsesion = document.getElementById("iniciar-sesion").style.display = "none"
/*seccion de edicin de mi cuenta*/
const seccioneditarmicuenta = document.getElementById("seccion-editar-mi-cuenta").style.display = "none"
/*seccion menu mobile*/
/*seccion mi orden*/
const myorder = document.getElementById("my-order").style.display = "none"
const myorder2 = document.getElementById("my-order-2").style.display = "none"
const menumobile = document.getElementById("menumobile")
/*seccion catalogo de productos*/
const main = document.getElementById("main")
const productcontainer = document.getElementById("catalogo");

/*asides*/
const asidedescriptionproduct = document.getElementById("aside_description_product")
const aside_my_order_carrito = document.getElementById("aside_my_order_carrito")
const iconcloseasideproduct = document.getElementById("icon-close-aside-description-product")

const expresiones = {
	usuario: /^[a-zA-Z0-9\_\-]{4,16}$/, // Letras, numeros, guion y guion_bajo
	nombre: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
	password: /^.{4,12}$/, // 4 a 12 digitos.
	correo: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
	telefono: /^\d{7,14}$/ // 7 a 14 numeros.
}
const campos = {
	usuario: false,
	nombre: false,
	password: false,
	correo: false,
	telefono: false
}

function toggledesktopmenu (){
	asidedescriptionproduct.classList.add("inactive")
	aside_my_order_carrito.classList.add("inactive")
	menumobile.classList.add("inactive")
	menu_desplegable_desktop.classList.toggle("inactive")
}
menu_usuario.addEventListener("click", toggledesktopmenu)

function togglemenumobile (){
	asidedescriptionproduct.classList.add("inactive")
	aside_my_order_carrito.classList.add("inactive")
	menu_desplegable_desktop.classList.add("inactive")
	menumobile.classList.toggle("inactive")
}
opciones.addEventListener("click", togglemenumobile)

function showasidemiordercarrito() {
	asidedescriptionproduct.classList.add("inactive")
	menu_desplegable_desktop.classList.add("inactive")
	menumobile.classList.add("inactive")
	aside_my_order_carrito.classList.toggle("inactive")
}
carritodecompras.addEventListener("click", showasidemiordercarrito)


const productlistarray = [];

productlistarray.push({
	name: 'pantaloneta',
	price: 60000,
	image:'./imagenes/pantaloneta.jpg',
});
productlistarray.push({
	name: 'poleron',
	price: 70000,
	image: './imagenes/poleron-basico-hombre-1901.jpg',
});
productlistarray.push({
	name: 'poleron',
	price: 70000,
	image: './imagenes/poleron-basico-hombre-1901.jpg',
});
productlistarray.push({
	name: 'poleron',
	price: 70000,
	image: './imagenes/poleron-basico-hombre-1901.jpg',
});
productlistarray.push({
	name: 'poleron',
	price: 70000,
	image: './imagenes/poleron-basico-hombre-1901.jpg',
});
productlistarray.push({
	name: 'poleron',
	price: 70000,
	image: './imagenes/poleron-basico-hombre-1901.jpg',
});
productlistarray.push({
	name: 'poleron',
	price: 70000,
	image: './imagenes/poleron-basico-hombre-1901.jpg',
});
productlistarray.push({
	name: 'poleron',
	price: 70000,
	image: './imagenes/poleron-basico-hombre-1901.jpg',
});
productlistarray.push({
	name: 'poleron',
	price: 70000,
	image: './imagenes/poleron-basico-hombre-1901.jpg',
});
productlistarray.push({
	name: 'poleron',
	price: 70000,
	image: './imagenes/poleron-basico-hombre-1901.jpg',
});

/*<div class="product-content">         
                <img src="./imagenes/camisanegra.jpg" alt="camisa" class="img_product_catalogo">
            <div class="description_carrito">
              <div class="description_product">
                <p>CAMISA NEGRA</p>             
                <p>50.000$</p>
              </div>
              <figure class="icono_carrito_catalogo">
                <img src="./imagenes/iconocarritodecompras.svg" alt="icono">
              </figure>
            </div>
        </div>*/
		
function openasidedescriptionproduct() {
	menu_desplegable_desktop.classList.add("inactive")
	menumobile.classList.add("inactive")
	aside_my_order_carrito.classList.add("inactive")
	asidedescriptionproduct.classList.remove("inactive")
}
function closeasidedescriptionproduct() {
	asidedescriptionproduct.classList.add("inactive")
}
iconcloseasideproduct.addEventListener("click", closeasidedescriptionproduct)
for (product of productlistarray){

	const productcontent = document.createElement("div");
	productcontent.classList.add("product-content");

	const productimg = document.createElement("img");
	productimg.setAttribute("src", product.image);
	productimg.classList.add("img_product_catalogo")
	productimg.addEventListener("click", openasidedescriptionproduct)

	const descriptionproduct = document.createElement("div");
	descriptionproduct.classList.add("description_product");

	const descriptioncar = document.createElement("div");
	
	const productname = document.createElement("p");
	productname.innerText = product.name;
	productname.classList.add("description_carrito_p_1")

	const productprice = document.createElement("p");
	productprice.innerText = "$" + product.price;
	productprice.classList.add("description_carrito_p_2")

	descriptioncar.appendChild(productname);
	descriptioncar.appendChild(productprice);

	const productfigure = document.createElement("figure");
	
	const producticoncar = document.createElement("img");
	producticoncar.setAttribute("src", "./imagenes/iconocarritodecompras.svg");
	producticoncar.classList.add("icono_carrito_catalogo");

	productfigure.appendChild(producticoncar);

	descriptionproduct.appendChild(descriptioncar);
	descriptionproduct.appendChild(productfigure);

	productcontent.appendChild(productimg);
	
	productcontent.appendChild(descriptionproduct);

	productcontainer.appendChild(productcontent);
	
}

const validarformulario = (e) => {
	switch (e.target.name) {
		case "usuario":
			validarcampo(expresiones.usuario, e.target, "usuario");
		break;
		case "nombre":
			validarcampo(expresiones.nombre, e.target, "nombre");
		break;	
		case "password":
			validarcampo(expresiones.password, e.target, "password");
			validarpassword()
		break;	
		case "password2":
			validarpassword()
		break;	
		case "correo":
			validarcampo(expresiones.correo, e.target, "correo");
		break;	
		case "telefono":
			validarcampo(expresiones.telefono, e.target, "telefono");
		break;	
			
	}
	
}
const validarcampo = (expresion, input, campo) => {
	if(expresion.test(input.value)){
		document.getElementById(`form-${campo}`).classList.remove("form__usuario-incorrecto");
		document.getElementById(`form-${campo}`).classList.add("form__usuario-correcto");
		document.querySelector(`#form-${campo} i`).classList.add("❎");
		document.querySelector(`#form-${campo} i`).classList.remove("❎");
		document.querySelector(`#form-${campo} .form__error`).classList.remove("form__error-activo")
		campos [campo] = true;
	}
	else{
		document.getElementById(`form-${campo}`).classList.add("form__usuario-incorrecto")
		document.getElementById(`form-${campo}`).classList.remove("form__usuario-correcto")
		document.querySelector(`#form-${campo} i`).classList.add("❎")
		document.querySelector(`#form-${campo} i`).classList.remove("❎")
		document.querySelector(`#form-${campo} .form__error`).classList.add("form__error-activo")
		campos [campo] = false;
	}	
}
const validarpassword = () => {
	const inputpassword1 = document.getElementById("password")
	const inputpassword2 = document.getElementById("password2")
	if(inputpassword1.value !== inputpassword2.value){
		document.getElementById(`form-password2`).classList.add("form__usuario-incorrecto")
		document.getElementById(`form-password2`).classList.remove("form__usuario-correcto")
		document.querySelector(`#form-password2 i`).classList.add("❎")
		document.querySelector(`#form-password2 i`).classList.remove("❎")
		document.querySelector(`#form-password2 .form__error`).classList.add("form__error-activo")
		campos ["password"] = false;
	}
	else{
		document.getElementById(`form-password2`).classList.remove("form__usuario-incorrecto")
		document.getElementById(`form-password2`).classList.add("form__usuario-correcto")
		document.querySelector(`#form-password2 i`).classList.remove("❎")
		document.querySelector(`#form-password2 i`).classList.add("❎")
		document.querySelector(`#form-password2 .form__error`).classList.remove("form__error-activo")
		campos ["password"] = true;
	}
}
inputs.forEach((input) => {
input.addEventListener("keyup", validarformulario);
input.addEventListener("blur", validarformulario);
})

form.addEventListener("submit", (e) =>{
	e.preventDefault()
	const terminos = document.getElementById("input-terminos")
	if(campos.usuario && campos.nombre && campos.password && campos.correo  && terminos.checked){
		form.reset();
		document.getElementById("parrafo-btn-enviar").classList.add("parrafo_btn_enviar-activo")
		setTimeout(() => {
			document.getElementById("parrafo-btn-enviar").classList.remove("parrafo_btn_enviar-activo")
		}, 5000)
		document.getElementById("form_error_p").classList.remove("form_error_p-activo")
		/*ocultarsection.addEventListener("click", form.style.display = "none", document.getElementById("catalogo").style.display = "flex")*/
		form.addEventListener("click", form.style.display = "flex" )
	}
	
	else{
		document.getElementById("form_error_p").classList.add("form_error_p-activo")	
	}
})
function abrirformulario() {
	form.style.display = "flex", document.getElementById("catalogo").style.display = "none"	
}
function omitirform() {
	form.style.display = "none", document.getElementById("catalogo").style.display = "flex"
}

function add(product, price){
console.log(product, price)
products.push(product);
total = total + price
document.getElementById("checkout").innerHTML = `pagar $${total}`
}


