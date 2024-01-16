import styles from "./style.module.css"

export const NewsletterForm = () => {
    //Javascript + HTML no JSX
    return(
        <form className={`form ${styles.form}`}>
            <input type="email" name="email" id="email" placeholder="E-mail" />
            <button type="submit" className="btn">Cadastrar-se</button>
        </form>
    )
}