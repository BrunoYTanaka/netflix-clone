import React from 'react'
import logo from '../../assets/svg/logo.svg'
import { Icon } from 'react-icons-kit'
import { ic_keyboard_arrow_right } from 'react-icons-kit/md/ic_keyboard_arrow_right'
import { NavLink, Link } from 'react-router-dom'
import { Container } from './styles'
import Button from '../Button'

const Header = () => {
    return (
        <Container className="header-container">
            <div className="header-top">
                <img src={logo} alt="" />
                <NavLink className="signIn-btn" to="">
                    Sign In
                 </NavLink>
            </div>
            <div className="header-content">
                <h1>See what's next.</h1>
                <h2>WATCH ANYWHERE. CANCEL ANYTIME</h2>
                <Button className="main-offer-btn" to="" primary>
                    TRY IT KNOW
                    <Icon className="Icon" icon={ic_keyboard_arrow_right}
                        size={37}
                    />


                </Button>
            </div>
        </Container>
    )
}

export default Header
