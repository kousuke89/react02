import { VFC } from "react"
import { Link } from "react-router-dom"

export const Page1:VFC = () => {

    return (
        <div>
            <h1>Page1ページです</h1>
            <Link to="/page1/detailA">detailA</Link>
            <Link to="/page1/detailB">detailB</Link>
        </div>
    )
    
}