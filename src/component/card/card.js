
import style from './card.module.css';
export default function CardPanels({details}){
    return(
        <>
        <div className={style.side_textgen}>
         {details()}
        </div>
        </>
    )
}