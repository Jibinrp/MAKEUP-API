//creating main div with nav bar and buttons

var div = document.createElement('div')
div.setAttribute("id","main")
div.innerHTML = `<h1>MAKEUP ITEMS </h1><div class="row-cols-md-12" id="main">
<nav id="nav" class="navbar bg-light">
<form class="container-fluid justify-content-center">
    <input class="form-control me-2" type="text" id="enter" placeholder ="Search For Brands"> <br><br>
<button class="btn btn-outline-success me-2" type="button" id="search" onclick="foo()">
Search</button>
<button class="btn btn-outline-success me-2" type="button" id="reset" onclick="foo1()">
Rest Before next search</button>

</nav>
<h2>BRANDED LIST </h2>
<p style="color: blue;font-size: 20px;font-family: 'Courier New', Courier, monospace;">alva,almay,anna sui,ann,abelle,benefit,boosh,burt's bees,butter london,c'est moi,cargo cosmetics,china glaze,clinique,coastal classic creation,colourpop,covergirl,dalish,deciem,dior,
dr. hauschka,e.l.f.
essie,fenty,glossier,green people,iman,l'oreal,lotus cosmetics usa,maia's mineral galaxyl,marcelle,marienatie,maybelline,milani,mineral fusion,misa,mistura,moov,nudus,nyx,orly,pacifica,penny lane organics,physicians formula,piggy paint,pure anada,rejuva minerals,revlon,sally b's skin yummies,salon perfect,sante,sinful colours,smashbox,stila,suncoat,w3llpeople,wet n wild,zorah,zorah biocosmetiques

</p>
</div>`
document.body.append(div)

//getting Data via async/await from Makeup API using brand name as endpoint. Try Catch method user to fetch any error.

async function foo(){
   
    try {
    
    var getProduct = document.getElementById("enter").value
    let products = await fetch (`https://makeup-api.herokuapp.com/api/v1/products.json?brand=${getProduct}`)
    result = await products.json();
    let index = 0;

    //creating foreach loop to dynamically all the products under the brand

    result.forEach(element => {
        console.log(index);
        var img = document.createElement("img");
        var displayProduct = document.createElement('displayProduct');
        if(index===0) displayProduct.innerHTML = '';
        img.src = element.image_link;
        document.body.appendChild(img);
        displayProduct.innerHTML = `
        <div class="row">
        <div class="col-md-12" id="details">
         <p>Brand : ${element.brand}</p>
         <p>Name : ${element.name}</p>
         <p>Price : ${element.price}</p>
         <p>Product Link : ${element.product_link}</p>
         <p>Description : ${element.description}</p>
        </div>
        </div>`
        document.body.appendChild(displayProduct);
        index++;
    });
    console.log(index);
    }
    catch(error){
   alert(error);
    }
    
    }
   
  // to empty the data of previous search, window is realoaded with this function
    function foo1(){
        window.location.reload();
    }



