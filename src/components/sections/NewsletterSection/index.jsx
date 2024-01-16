import { NewsletterForm } from "./NewsletterForm";
import styles from "./style.module.css";

export const NewsletterSection = () => {
   return (
      <section id="newsletter" className={styles.newsletterSection}>
         <div className="container sm">
            <h2 className="title2 center">Inscreva-se na Newsletter</h2>
            <NewsletterForm />
         </div>
      </section>
   );
};
