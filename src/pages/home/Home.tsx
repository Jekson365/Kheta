import { Cover } from "./Cover"
import Category from "./category/Category"
import Priors from "./priors/Priors"
import Trending from "./trending/Trending"
import { useEffect } from "react"


export const Home = () => {
    useEffect(() => {
        window.scrollTo(0, 0)
    }, [])

    return (
        <>
            <Cover />
            <Trending />
            <Category />
            <Priors />
        </>
    )
}
