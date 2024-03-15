import { Footer } from "../Footer";
import { Header } from "../Header";

export const DefaultTemaplte = ({ children }) => {
  return (
    <div>
      <Header />
      <main>
        {children}
      </main>
      <Footer />
    </div>
  );
};
