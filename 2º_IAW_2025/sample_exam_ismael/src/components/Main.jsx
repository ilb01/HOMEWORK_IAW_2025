import Banner from "./Banner"
import Productos from "../data/productos.json"


export default function Main() {
    const rutaFoto = "/assets/images/products/"
    return (
        <main>
            <Banner />
            <h2>New Products</h2>
            {Productos.map((product) => (
                <section class="product-grid">
                    <article class="card">
                    {product.offer === "50%" && (
                        <div class="offer">50%</div>
                    )}
                        <div class="info-1">
                            <img src={rutaFoto + product.image} alt={product.name} />
                            <h3>{product.name}</h3>
                            <h4>{product.description}</h4>
                        </div>
                        <div class="info2">
                            <div class="showcase-rating">
                                <i class="fa-solid fa-star"></i>
                                <i class="fa-solid fa-star"></i>
                                <i class="fa-solid fa-star"></i>
                                <i class="fa-solid fa-star grey-star"></i>
                                <i class="fa-solid fa-star grey-star"></i>
                            </div>
                            <div class="price-box">
                                <p class="price">{product.price} &euro; <del>{product.originalPrice} &euro;</del> </p>
                                <button>Add</button>
                            </div>
                        </div>
                    </article>
                </section>))}
        </main>
    )
}