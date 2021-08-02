import React from "react";
import { Steps, Step } from "react-step-builder";

import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar} from '@ionic/react';
import '../../Forms.css';

import ISIFinal from './ISIFinal';
import MCTQ1Final from "./mctQ1Final";
import MCTQ2Final from "./mctq2Final";

import Gad7Final from './Gad7Final';
import PHQFinal from './PHQFinal';
import Who5Final from './Who5Final'

  
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
                    
                    <Step component={MCTQ1Final} />
                    <Step component={MCTQ2Final} />  
                    <Step component={Gad7Final}/>
                    <Step component={Who5Final}/>
                    <Step component={PHQFinal}/>
                    <Step component={ISIFinal} /> 
                </Steps>
            

      </IonContent>

      </IonPage>
    );
  }
  

  export default App;