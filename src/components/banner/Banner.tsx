import styles from './banner.module.scss';
import {ReactElement} from 'react';
import dots from '../../assets/images/ic_dots.svg';

const Banner = (props: {
    title: string,
    content: string,
    button: ReactElement,
    illustration: string,
    type?: 'normal' | 'reverse',
    separator?: boolean,
}) => {

    const stack = <>
        <div className={styles.stack}>
            <div className={styles.title}>{props.title}</div>

            {
                props.separator && <hr/>
            }

            {props.content}

            {props.button}
        </div>
    </>

    const illustration = <>
        <div className={styles.illustration}>
            <img alt='illustration' src={props.illustration}/>
        </div>
    </>

    return <>
        <section className={`${styles.banner} ${props.type === 'reverse' ? styles.reverse : ''}`}>
            <img alt='dots' className={`${styles.dots} ${props.type === 'reverse' ? styles.reverse : ''}`} src={dots}
                 width={130} height={115}/>
            {
                props.type === 'reverse' ?
                    <>
                        {illustration}
                        {stack}
                    </>
                    :
                    <>
                        {stack}
                        {illustration}
                    </>
            }
        </section>
    </>
}

export default Banner;