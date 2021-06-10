/*!

=========================================================
* Paper Kit React - v1.3.0
=========================================================

* Product Page: https://www.creative-tim.com/product/paper-kit-react

* Copyright 2021 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/paper-kit-react/blob/main/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
// nodejs library that concatenates strings
import classnames from 'classnames';
import React from 'react';
import { useHistory } from 'react-router-dom';
// reactstrap components
import {

    Container, Navbar, NavbarBrand,
} from 'reactstrap';

function IndexNavbar() {
    const history = useHistory();
    const [navbarColor, setNavbarColor] = React.useState('navbar-transparent');
    const [navbarCollapse, setNavbarCollapse] = React.useState(false);

    const toggleNavbarCollapse = () => {
        setNavbarCollapse(!navbarCollapse);
        document.documentElement.classList.toggle('nav-open');
    };

    React.useEffect(() => {
        const updateNavbarColor = () => {
            if (
                document.documentElement.scrollTop > 299
        || document.body.scrollTop > 299
            ) {
                setNavbarColor('');
            } else if (
                document.documentElement.scrollTop < 300
        || document.body.scrollTop < 300
            ) {
                setNavbarColor('navbar-transparent');
            }
        };

        window.addEventListener('scroll', updateNavbarColor);

        return function cleanup() {
            window.removeEventListener('scroll', updateNavbarColor);
        };
    });
    return (
        <Navbar className={classnames('fixed-top', navbarColor)} expand="lg">
            <Container>
                <div className="navbar-translate">
                    <NavbarBrand
                        data-placement="bottom"
                        title="Coded by Creative Tim"
                        onClick={() => {
                            history.push({ pathname: '/' });
                        }}
                    >
                        Home Page
                    </NavbarBrand>
                    <NavbarBrand
                        data-placement="bottom"
                        title="Coded by Creative Tim"
                        onClick={() => {
                            history.push({ pathname: '/register-page' });
                        }}
                    >
                        Login
                    </NavbarBrand>
                    <NavbarBrand
                        data-placement="bottom"
                        title="Coded by Creative Tim"
                        onClick={() => {
                            history.push({ pathname: '/landing-page' });
                        }}
                    >
                        Posts
                    </NavbarBrand>
                    <NavbarBrand
                        data-placement="bottom"
                        title="Coded by Creative Tim"
                        onClick={() => {
                            history.push({ pathname: '/profile-page' });
                        }}
                    >
                        Profile
                    </NavbarBrand>
                </div>
            </Container>
        </Navbar>
    );
}

export default IndexNavbar;
