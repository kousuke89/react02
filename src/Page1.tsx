import { VFC } from "react"
import { Link, useHistory } from "react-router-dom"

export const Page1:VFC = () => {
    const history = useHistory();
    const onClickDetailA = () => history.push('/page1/detailA');
    console.log(history)
    return (
        <div>
            <h1>Page1ページです</h1>
            <Link to="/page1/detailA">detailA</Link>
            <Link to="/page1/detailB">detailB</Link>
            <br />
            <button onClick={onClickDetailA}>DetailA</button>
        </div>
    )

}
