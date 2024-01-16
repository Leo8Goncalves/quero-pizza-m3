import styles from "./style.module.css";

export const Footer = () => {
   return (
      <footer className={styles.footer}>
         <div className="container">
            <p className="paragraph center white">
               Todos os direitos reservados - <strong>Kenzie Academy Brasil</strong>
            </p>
         </div>
      </footer>
   );
};
