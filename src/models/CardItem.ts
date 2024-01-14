import {ReactElement} from "react";

export default interface CardItem {
    image: string,
    title: string,
    description: string,
    button?: ReactElement,
}