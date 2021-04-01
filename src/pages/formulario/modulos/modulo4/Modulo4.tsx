import React from "react";
import { Steps, Step } from "react-step-builder";

import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar} from '@ionic/react';
import '../../Forms.css';

import Step8 from '../modulo4/Step8';
import Step9 from '../modulo4/Step9';
  
  /*React-multi-step form 
  Cada página do formulário é um step no app*/
  
function App() {

   return (

    <IonPage>

        <IonHeader>
            <IonToolbar>
                <IonTitle><b>Módulo 4</b></IonTitle>
                  <div id="header-items">
                  </div>
            </IonToolbar>
        </IonHeader>


        <IonContent fullscreen>
           
                <Steps>
                    <Step component={Step8} /> 
                    <Step component={Step9} /> 
    
                </Steps>
            

      </IonContent>

      </IonPage>
    );
  }
  

  export default App;


