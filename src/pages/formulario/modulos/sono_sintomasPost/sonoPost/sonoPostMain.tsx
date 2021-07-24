import React from "react";
import { Steps, Step } from "react-step-builder";

import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar} from '@ionic/react';
import '../../../Forms.css';

import ISIPost from './ISIPost';
import MCTQ1Post from "./mctQ1Post";
import MCTQ2Post from "./mctq2Post";
  
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
                    
                    <Step component={MCTQ1Post} />
                    <Step component={MCTQ2Post} />  
                    <Step component={ISIPost} /> 
                </Steps>
            

      </IonContent>

      </IonPage>
    );
  }
  

  export default App;