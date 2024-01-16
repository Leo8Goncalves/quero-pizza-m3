// TODO COMPONENTE DEVE INICIAR COM LETRA MAIÚSCULA!
import { products } from "../../../data/products";

import { ProductCard } from "./ProductCard";
import styles from "./style.module.css";

//A chave precisa ser um valor único para cada item da lista
export const ProductsSection = () => {
   return (
      <section id="products" className={styles.productSection}>
         <div className="container">
            <h2 className="title2">Produtos em destaque</h2>
            <ul className={styles.productList}>
               {products.map((product) => {
                  //A chave é obrigatória para o dom virtual conseguir diferenciar os diferentes itens
                  return (
                     <ProductCard
                        key={product.id}
                        title={product.name}
                        img={product.img}
                        price={product.price}
                     />
                  );
               })}
               {/* o output do map é semelhante ao exemplo abaixo:
               [
                  <ProductCard title="Otavio" img="#" price={10000} />,
                  <ProductCard title="Otavio" img="#" price={10000} />,
                  <ProductCard title="Otavio" img="#" price={10000} />,
               ]*/}
            </ul>
         </div>
      </section>
   );
};
