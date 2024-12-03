function ProductList({products, addToCart}){

    return (
        <div className="product-list">
            {products.map((product) => (
                <div key={product.id} className="product-card">
                    <img className="product-img" src = {product.image} alt={product.title}/>
                    <h3>{product.title}</h3>
                    <p>${product.price}</p>
                    <button onClick={() => addToCart(product)}>Add to Cart</button>
                </div>
            ))}
        </div>
    )

}

export default ProductList