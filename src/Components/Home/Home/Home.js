import React from 'react';
import Footer from '../../Shared/Footer/Footer';
import Aboutus from '../Aboutus/Aboutus';
import Chooseus from '../Chooseus/Chooseus';
import Header from '../Header/Header';
import Programs from '../Programs/Programs';
import Strength from '../Strength/Strength';

const Home = () => {
    return (
        <div>
           <Header></Header>
           <Strength></Strength>
           <Aboutus></Aboutus>
           <Programs></Programs>
           <Chooseus></Chooseus>
           <Footer></Footer>
        </div>
    );
};

export default Home;