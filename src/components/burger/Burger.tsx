import {slide as Menu} from 'react-burger-menu'
import './burger.scss'

const Burger = (props: any) => {
    return <>
        <Menu right>
            {props.children}
        </Menu>
    </>
}

export default Burger;