import React from "react";


import { Steps, Step } from "react-step-builder";

  import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar} from '@ionic/react';



  import '../Forms.css';



 import Step1 from '../14days/Step1';
 import Step2 from '../14days/Step2';
 import Step3 from '../14days/Step3';
 import Step4 from '../14days/Step4';
 import Step5 from '../14days/Step5';
 import Step6 from '../14days/Step6';
 import Step7 from '../14days/Step7';
 import Step8 from '../14days/Step8';
 import Step9 from '../14days/Step9';
 import Step10 from '../14days/Step10';
  
  /*React-multi-step form 
  Cada página do formulário é um step no app*/
  
  function App() {

    return (

    <IonPage>

        <IonHeader>
            <IonToolbar>
                <IonTitle><b>AppSono</b></IonTitle>
                  <div id="header-items">
                   
                  </div>
            </IonToolbar>
        </IonHeader>


        <IonContent fullscreen>
           
                <Steps>
               <Step component={Step1} /> 
                <Step component={Step2} /> 
                <Step component= {Step3}/>
                <Step component= {Step4}/>
                <Step component= {Step5}/>
                <Step component= {Step6}/>
                <Step component= {Step7}/>
                <Step component= {Step8}/>
                <Step component= {Step9}/> 
                <Step component= {Step10}/>
                
                </Steps>
            

      </IonContent>

      </IonPage>
    );
  }
  

  export default App;