import { Footer } from "../Footer";
import { Header } from "../Header";

//Children é um prop especial, que recebe o valor do que é passado no interior da tag de componente
export const DefaultTemplate = ({ children }) => {
   return (
      <>
         <Header />
         <main>{children}</main>
         <Footer />
      </>
   );
};
