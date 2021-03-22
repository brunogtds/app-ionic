import React from "react";
import { Steps, Step } from "react-step-builder";

import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar} from '@ionic/react';
import '../../Forms.css';

import Step5 from '../../modulos/modulo3/Step5';
import Step6 from '../../modulos/modulo3/Step6';
import Step7 from '../../modulos/modulo3/Step7';
  
  /*React-multi-step form 
  Cada página do formulário é um step no app*/
  
function App() {

   return (

    <IonPage>

        <IonHeader>
            <IonToolbar>
                <IonTitle><b>Módulo 3</b></IonTitle>
                  <div id="header-items">
                  </div>
            </IonToolbar>
        </IonHeader>


        <IonContent fullscreen>
           
                <Steps>
                    <Step component={Step5}/> 
                    <Step component={Step6}/>
                    <Step component={Step7}/> 
    
                </Steps>
            

      </IonContent>

      </IonPage>
    );
  }
  

  export default App;