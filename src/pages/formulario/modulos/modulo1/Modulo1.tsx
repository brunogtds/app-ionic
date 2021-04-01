import React from "react";
import { Steps, Step } from "react-step-builder";

import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar} from '@ionic/react';
import '../../Forms.css';

import Step1 from '../modulo1/Step1';
import Step2 from '../modulo1/Step2';
  
  /*React-multi-step form 
  Cada página do formulário é um step no app*/
  
function App() {

   return (

    <IonPage>

        <IonHeader>
            <IonToolbar>
                <IonTitle><b>Módulo 1</b></IonTitle>
                  <div id="header-items">
                  </div>
            </IonToolbar>
        </IonHeader>


        <IonContent fullscreen>
           
                <Steps>
                    <Step component={Step1} /> 
                    <Step component={Step2} /> 
    
                </Steps>
            

      </IonContent>

      </IonPage>
    );
  }
  

  export default App;