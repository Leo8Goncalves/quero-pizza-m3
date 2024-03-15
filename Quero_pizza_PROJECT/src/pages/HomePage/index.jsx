import { DefaultTemaplte } from "../../components/DefaultTemplate"
import { MenuSection } from "../../components/MenuSection"
import { TitleSection } from "../../components/TitleSection"

export const  HomePage = () => {
    return(
        <DefaultTemaplte>
            <TitleSection />
            <MenuSection />
        </DefaultTemaplte>
    )
}