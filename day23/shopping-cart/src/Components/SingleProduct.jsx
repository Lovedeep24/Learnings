import styles from "./SingleProduct.module.css";
function SingleProduct({ id, title, category, description, image, price }) {
    // return <div className={styles.singleProduct}>{title}</div>;
    return(
      <div className={styles.singleProduct}>
        <div className={styles.imgAndDesc}>
         <img className={styles.image} src={image} alt={title}></img>
         <p className={styles.description}>{description}</p>
        </div>
      <div className={styles.priceAndBuyBtn}>
        <h2 className={styles.price}>&#x20B9;{price}</h2>
        <button className={styles.addToCartBtn}>Add to cart</button>
      </div>

      </div>
    )
    
  }
  export default SingleProduct;