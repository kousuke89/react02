import { VFC } from "react"
import { useHistory } from "react-router"

export const Page1DetailA:VFC = () => {
    const history = useHistory();
    const onClickBack = () => history.goBack();
    return (
        <div>
            <h1>Page1DetailAページです</h1>
            <button onClick={onClickBack}>back</button>
        </div>
    )

}
