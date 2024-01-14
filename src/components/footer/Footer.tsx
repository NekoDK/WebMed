import style from './footer.module.scss';

const Footer = (props: {
    logoText: string,
}) => {
    return <footer className={style.footer}>
        <div className={style.column}>
            <div className={style.logoContainer}>
                <div className={style.logo}>{'T'}</div>
                {props.logoText}
            </div>

            <div>
                HealthCare provides progressive, and affordable healthcare, accessible on mobile and online
            </div>

            <div>
                ©HealthCare PTY LTD 2023. All rights reserved
            </div>
        </div>

        <div className={style.column}>
            <div className={style.title}>Company</div>
            <a href='#!'>About</a>
            <a href='#!'>Testimonials</a>
            <a href='#!'>Find a doctor</a>
            <a href='#!'>Apps</a>
        </div>

        <div className={style.column}>
            <div className={style.title}>Region</div>
            <a href='#!'>Indonesia</a>
            <a href='#!'>Singapore</a>
            <a href='#!'>Hongkong</a>
            <a href='#!'>Canada</a>
        </div>

        <div className={style.column}>
            <div className={style.title}>Help</div>
            <a href='#!'>Help center</a>
            <a href='#!'>Contact support</a>
            <a href='#!'>Instructions</a>
            <a href='#!'>How it works</a>
        </div>
    </footer>
}

export default Footer;