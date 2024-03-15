import styles from "./style.module.css"

export const PizzaCard = ({ img, title }) => {
  return (
    <li>
      <img src={img} alt={title} />
      <div className={styles.pizzaCard}>
        <h3 className="title two">{title}</h3>
      </div>
    </li>
  );
};
