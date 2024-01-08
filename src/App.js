import React, { useEffect, useState } from "react";
import MyApp from './components/MyApp';
import MyApp2 from "./components/MyApp2";
import Components1 from "./propsTutorial/Components1";
import Lesson1 from "./stateLesson/Lesson1";
import Counter from "./stateLesson/Counter";
import Lifecycle1 from "./lifecycleLesson/Lifecycle1";
import Backend from "./APITutorial/Backend";
import SassTutorial from './sassTutorial/SassTutorial';
import Blog from './Blog';
import About from "./About";
import Nav from "./Nav";
import { HashRouter, Route, Routes } from "react-router-dom";
import JsonApp from "./jsonLesson/JsonApp";
import ChartsComp from "./chartsLib/ChartsComp";
import UseState from "./hookTutorial/UseState";
import Modals from "./modalPlugin/Modals";
import CarouselAlice from "./PluginCarouselAlice/CarouselAlice";
import UseEffect from "./hookTutorial/UseEffect";
import AosTutorial1 from "./scrollEffect/AosTutorial1";
import LazyLoadImg from "./lazyLoadImage/LazyLoadImg";
import PostLesson from "./Methods/POST/PostLesson";
import GetLesson from "./Methods/GET/GetLesson";
import PutLesson from "./Methods/PUT/PutLesson";
import DeleteLesson from "./Methods/DELETE/DeleteLesson";
import Joke from "./skeletonTutorial/Joke";
import { Context } from "./contextTut/Context";
import Display from "./Display";
import LocalStorage from "./localStorage/LocalStorage";
// import './skeletonTutorial/style.css';


function App() {

    return (
        <>
            <LocalStorage />
        </>
    );

}

export default App;
