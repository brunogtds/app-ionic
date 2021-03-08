import React from "react";


import { Steps, Step } from "react-step-builder";

  import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar} from '@ionic/react';



  import '../Forms.css';



 import Step1P2 from '../14daysP2/Step1P2';
 import Step2P2 from '../14daysP2/Step2P2';
 import Step3P2 from '../14daysP2/Step3P2';
 import Step4P2 from '../14daysP2/Step4P2';
 import Step5P2 from '../14daysP2/Step5P2';
 import Step6P2 from '../14daysP2/Step6P2';

  
  /*React-multi-step form 
  Cada página do formulário é um step no app*/
  
  function Main14DaysP2() {

    return (

    <IonPage>

        <IonHeader>
            <IonToolbar>
                <IonTitle>AppSono</IonTitle>
                  <div id="header-items">
                   
                  </div>
            </IonToolbar>
        </IonHeader>


        <IonContent fullscreen>
           
                <Steps>
                <Step component={Step1P2} /> 
                <Step component={Step2P2} /> 
                <Step component={Step3P2} /> 
                <Step component={Step4P2} /> 
                <Step component={Step5P2} /> 
                <Step component={Step6P2} /> 
                
                </Steps>
            

      </IonContent>

      </IonPage>
    );
  }
  

  export default Main14DaysP2;