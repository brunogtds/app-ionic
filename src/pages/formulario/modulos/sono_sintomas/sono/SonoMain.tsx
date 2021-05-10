import React from "react";
import { Steps, Step } from "react-step-builder";

import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar} from '@ionic/react';
import '../../../Forms.css';

import mctQ1 from './mctQ1';
import mctQ2 from './mctQ2';
import ISI from './ISI';
  
  /*React-multi-step form 
  Cada página do formulário é um step no app*/
  
function App() {

   return (

    <IonPage>

        <IonHeader>
            <IonToolbar>
                <IonTitle><b>SONO E SINTOMAS</b></IonTitle>
                  <div id="header-items">
                  </div>
            </IonToolbar>
        </IonHeader>


        <IonContent fullscreen>
           
                <Steps>
                    <Step component={mctQ1} /> 
                    <Step component={mctQ2}/>
                    
                    <Step component={ISI} /> 
                </Steps>
            

      </IonContent>

      </IonPage>
    );
  }
  

  export default App;


