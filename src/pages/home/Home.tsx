import { Cover } from "./Cover"
import Category from "./category/Category"
import Priors from "./priors/Priors"
import Trending from "./trending/Trending"


export const Home = () => {
    return (
        <>
            <Cover />
            <Trending />
            <Category />
            <Priors />
        </>
    )
}
