import React, { Component } from 'react';
//css
import classes from './Header.css';

//MenuButton
import MenuButton from './../../Compo/MenuButton/MenuButton';
//Logo
import Logo from './../../Compo/Logo/Logo';
//Nav
import Nav from './../../Compo/Nav/Nav';
//SideNav
import SideNav from './../../Compo/Sidenav/Sidenav';
//Auxi
import Auxi from './../../hoc/Auxi/Auxi';

class Header extends Component {
    state = {
        showButton: true,
        showSideNav: false
    }
    handleMenuClick = () => {
        let x = !this.state.showSideNav
        this.setState({ showSideNav: x })
        alert('clicked')
    }
    render() {
        return (
            <Auxi>
                <div className={classes.Header}>
                    {/* <SideNav /> */}
                    <MenuButton
                        clicked={this.handleMenuClick}
                        show={this.state.showButton} />

                    <Logo />

                    <Nav />
                </div>
            </Auxi>

        )
    }
};

export default Header;