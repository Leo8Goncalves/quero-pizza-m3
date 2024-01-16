import Logo from "../../assets/Logo.svg";
import styles from "./style.module.css";

export const Header = () => {
   return (
      <header>
         <div className="container">
            <div className={styles.flexBox}>
               <img src={Logo} alt="Logo Fashion Store" />
            </div>
         </div>
      </header>
   );
};
