import React from "react";
import { Steps, Step } from "react-step-builder";

import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar} from '@ionic/react';
import '../../../Forms.css';

import Gad7 from './Gad7';
import Who5 from './Who5';
import PHQ from './PHQ';

  
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
                    <Step component={Gad7} /> 
                    <Step component={Who5} />
                    <Step component={PHQ} />  
    
                </Steps>
            

      </IonContent>

      </IonPage>
    );
  }
  

  export default App;