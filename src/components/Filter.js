function Filter({setCategory}) {
    return (
        <div className="filter">
            <label htmlFor="category">Filter by category</label>
            <select id = "category" onChange={(e) => setCategory(e.target.value)}>
                <option value= "all">All</option>
                <option value= "electronics">Electronics</option>
                <option value= "jewelery">Jewelery</option>
                <option value= "men's clothing">Men's Clothing</option>
                <option value= "women's clothing"> Women's clothing</option>

            </select>   
        </div>
      
    )
}

export default Filter