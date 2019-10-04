import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import Grid from '@material-ui/core/Grid';
import { pupils } from "./pupils";
import PupilCard from "./Components/PupilCard";
import Heading from "./Components/Heading";
 


const App = () => {


 return (
<>
    <Heading/>
    <Grid container justify="center" alignItems="center" spacing={2}>
    {pupils.map(pupil => {
        return (<Grid item>    
        <PupilCard 
        key={pupil.id}
        firstname={pupil.firstname} 
        surname={pupil.surname}
        photo={pupil.photo}
        behaviourPoints={pupil.behaviourPoints}
        assessmentOne={pupil.assessmentOne}
        assessmentTwo={pupil.assessmentTwo}
        assessmentThree={pupil.assessmentThree} 
        />
    </Grid>)})}

    </Grid>
 </>
 )}

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
