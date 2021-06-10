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
import React from 'react';
import IndexHeader from '../components/Headers/IndexHeader';
// reactstrap components
// core components
import IndexNavbar from '../components/Navbars/IndexNavbar';
import SectionDark from './index-sections/SectionDark';
import SectionExamples from './index-sections/SectionExamples';
import SectionLogin from './index-sections/SectionLogin';

function Index() {
    document.documentElement.classList.remove('nav-open');
    React.useEffect(() => {
        document.body.classList.add('index');
        return function cleanup() {
            document.body.classList.remove('index');
        };
    });
    return (
        <>
            <IndexNavbar />
            <IndexHeader />
            <div className="main">
                <SectionDark />
                <SectionLogin />
                <SectionExamples />

            </div>
        </>
    );
}

export default Index;
