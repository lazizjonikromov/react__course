import React from "react";
import MyApp from './components/MyApp';
import MyApp2 from "./components/MyApp2";
import Components1 from "./propsTutorial/Components1";
import Lesson1 from "./stateLesson/Lesson1";
import Counter from "./stateLesson/Counter";
import Lifecycle1 from "./lifecycleLesson/Lifecycle1";
import Backend from "./APITutorial/Backend";
import SassTutorial from './sassTutorial/SassTutorial';


function App() {
    return (
        <div className="App">
            {/* <MyApp />
            <MyApp2 /> */}
            {/* <Components1 name="Laziz" age="17"/>
            <Components2 text="Profesional Frontend Developer"/> */}
            {/* <Lesson1 /> */}
            {/* <Counter /> */}
            {/* <Lifecycle1 /> */}
            {/* <Backend /> */}
            <SassTutorial />
        </div>
    );
}

export default App;
