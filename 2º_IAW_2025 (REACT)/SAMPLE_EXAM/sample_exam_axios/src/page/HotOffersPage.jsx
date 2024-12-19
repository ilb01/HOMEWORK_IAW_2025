import Main from '../components/Main'

export default function HotOffersPage({page, products, search}){

    const filteredProducts = () => products.filter(product =>
        product.name.toLowerCase().includes(search) && 
            product.percentDiscount >= 30
    );

    return(
        <>
            <Main page={page} filteredProducts={filteredProducts} />
        </>
    )
}