import style from "./card.module.scss";
import {ReactElement} from "react";

const Card = (props: {
    image: string,
    title: string,
    description: string,
    imageFull?: boolean,
    button?: ReactElement,
    arrowButton?: string,
}) => {
    return <>
        <div className={style.card}>
            <div className={`${style.image} ${props.imageFull ? style.full : ''}`}>
                <img alt={props.title} src={props.image}/>
            </div>
            <div className={style.content}>
                <div className={style.title}>
                    {props.title}
                </div>
                {props.description}
                <div className={style.container}>
                    {props.button}
                    <img className={style.img}
                         src={props.arrowButton}
                         width={props.arrowButton ? 15 : 0}
                         height={props.arrowButton ? 15 : 0}
                         alt={props.arrowButton}
                    />
                </div>
            </div>
        </div>
    </>
}

export default Card;