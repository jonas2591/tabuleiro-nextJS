import Subdivisao from "./Subdivisao";
import Styles from "../styles/Linha.module.css"
export default function Linha(props) {
    return (
        <div className={Styles.linha}>
            <Subdivisao preta={props.preta}/>
            <Subdivisao preta={!props.preta}/>
            <Subdivisao preta={props.preta}/>
            <Subdivisao preta={!props.preta}/>
            <Subdivisao preta={props.preta}/>
            <Subdivisao preta={!props.preta}/>
            <Subdivisao preta={props.preta}/>
        </div>
    )
}