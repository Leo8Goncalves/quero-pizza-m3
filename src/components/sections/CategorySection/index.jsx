import { CategoryCard } from "./CategoryCard";
import { categories } from "../../../data/categories";
import styles from "./style.module.css";

//CategoryCard();
//Props - valores de Javascript

export const CategorySection = () => {
   return (
      <section id="categorias" className={styles.categorySection}>
         <div className="container">
            <h2 className="title2">Categorias</h2>
            <ul className={styles.categoryList}>
               {categories.map((category) => (
                  <CategoryCard key={category.id} title={category.name} img={category.img} />
               ))}
            </ul>
         </div>
      </section>
   );
};

//CategoryCard("Sapatos", "#");
//CategoryCard("Bolsas", "#");
