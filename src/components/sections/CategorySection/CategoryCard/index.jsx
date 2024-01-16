import styles from "./style.module.css"

export const CategoryCard = ({ title, img }) => {
   //Props transporta valores de Javascript
   return (
      <li className={styles.categoryCard}>
         <img src={img} alt={title} />
         <h3 className="title3 center">{title}</h3>
      </li>
   );
};
//PROPS - tipo uns parâmetro lá!

/*
function message(message){
    console.log(message);
}

message("Oi");
message("Tudo bem?");
*/
