import React from "react";
import { Steps, Step } from "react-step-builder";

import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar} from '@ionic/react';
import '../../Forms.css';

import HabitosPost1 from "./habitosPost1";
import HabitosPost2 from "./habitosPost2";
import HabitosPost3 from "./habitosPost3";
import HabitosPost4 from "./habitosPost4";
  
  /*React-multi-step form 
  Cada página do formulário é um step no app*/

/*progress bar*/


//Progress bar not working
//import 'react-circular-progressbar/dist/styles.css';

  
function App() {



   return (

    <IonPage>

        <IonHeader>
            <IonToolbar>
                <IonTitle><b>HÁBITOS</b></IonTitle>
                  <div id="header-items">
                    
                    
                  </div>
            </IonToolbar>
        </IonHeader>
  
        <IonContent fullscreen>
                
                <Steps>
                    <Step component={HabitosPost1} />
                    <Step component={HabitosPost2} /> 
                    <Step component={HabitosPost3} /> 
                    <Step component={HabitosPost4} /> 
                </Steps>
            

      </IonContent>

      </IonPage>
    );
  }
  

  export default App;