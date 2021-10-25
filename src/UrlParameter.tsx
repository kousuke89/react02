import { useParams,useLocation } from "react-router"

export const UrlParameter = () => {
    const { id } = useParams<{id:string}>();
    const { search, state } = useLocation();//そのままだとクエリパラメータが文字列として渡ってくる
    const query = new URLSearchParams(search);//文字列から各パラメータを個別に扱えるように変換
    console.log(query.get('name'), query.get('age'));

    console.log(state)//stateを渡している


    return (
        <div>
            <h1>UrlParameterのページです</h1>
            <p>パラメーターは{id}です</p>
        </div>
    )
}
