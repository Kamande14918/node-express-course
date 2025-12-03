const express = require("express");
const app = express();
const {products} = require("./data")

app.use(express.static("./public"));

app.get("/api/v1/test", (req, res) =>{
    res.json({message: "It worked!"});
})
app.get("/api/v1/products", (req, res) =>{
    res.json(products)
})
// get product by id
app.get("/api/v1/products/:productID", (req, res) =>{
    const idToFind = parseInt(req.params.productID);
    const product = products.find((item) => item.id === idToFind)
    if(!product){
        return res.status(404).json({message:"Product not found"})
    } else {
        return res.status(200).json(product)
    }
})
// query parameters
app.get("/api/v1/query", (req, res) =>{
    const {search, limit, maxPrice,regex} = req.query;
    let sortedProducts = [...products];
    if(search){
        sortedProducts = sortedProducts.filter((product) =>{
            return product.name.includes(search)
        })
    }
    if(limit){
        sortedProducts = sortedProducts.slice(0, parseInt(limit))
    }
    if(sortedProducts.length <1 ){
        return res.status(200).json({success:true, data:[]})
    }
    if(maxPrice){
        sortedProducts = sortedProducts.filter((product) =>{
            return product.price <= parseFloat(maxPrice)
        }) 
    } 
    if(regex){
        const re = new RegExp(regex, "i");
        sortedProducts = sortedProducts.filter((product) =>{
             re.test(product.name)
        })
    }

    //  searching for products with regular expressions
    
    res.status(200).json(sortedProducts)
})
app.listen(3000, () =>{
    console.log("Server is listening on port 3000...");
})