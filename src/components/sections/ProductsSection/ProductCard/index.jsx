import styles from "./style.module.css";

export const ProductCard = ({ title, img, price }) => {
    return(
        <li className={styles.productCard}>
            <img src={img} alt={title} />
            <h3 className="title3">{title}</h3>
            <span className="price">{price.toLocaleString('pt-BR', { style: 'currency', currency: "BRL"})}</span>
        </li>
    )
}