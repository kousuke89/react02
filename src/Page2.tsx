import { VFC } from "react"
import { Link } from "react-router-dom"

export const Page2:VFC = () => {
    const arr = [...Array(100)];
    const st = Object.keys(arr);
    console.log(st)
    return (
        <div>
            <h1>Page2ページです</h1>
            <Link to={{pathname:"/page2/999", state: st}}>link</Link>
            <br />
            <Link to="/page2/999?name=hogehoge&age=fugafuga">link</Link>
        </div>
    )

}
