import Banner from "../../../assets/Banner.jpg";
import styles from "./style.module.css";

export const BannerSection = () => {
   return (
      <section id="banner" className={styles.bannerSection}>
         <div className="container">
            <div className={styles.flexBox}>
               <img src={Banner} alt="Banner Principal" />
               <div>
                  <h1 className="title1">Fashion Store</h1>
                  <p className="paragraph">
                     Fique por dentro das nossas últimas promoções e novidades
                  </p>
                  <a className="btn" href="#">
                     Confira as ofertas
                  </a>
               </div>
            </div>
         </div>
      </section>
   );
};
