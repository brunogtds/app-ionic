import React from "react";
import {StepComponentProps} from "react-step-builder";

import { Steps, Step } from "react-step-builder";

import { IonApp,
    IonItem,
    IonLabel,
    IonInput,
    IonRadioGroup,
    IonListHeader,
    IonRadio,
    IonSelect,
    IonSelectOption,
    IonRange,
    IonButton,
    IonCard,
    IonCardTitle,
    IonCardContent,
    IonCheckbox,
    IonList,
    IonDatetime,
    IonSlides,
    IonSlide,
  
    
  } from "@ionic/react";
  import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';



  import './Forms.css';

  import Step1 from '../pages/Step1';
  import Step2 from '../pages/Step2';
  import Step3 from '../pages/Step3';
  import Step4 from '../pages/Step4';
  import Step5 from '../pages/Step5';
  import Step6 from '../pages/Step6';
  import Step7 from '../pages/Step7';
  import Step8 from '../pages/Step8';
  import Step9 from '../pages/Step9';
  import Step10 from '../pages/Step10';

  function App() {
    return (

    <IonPage>

        <IonHeader>
            <IonToolbar>
                <IonTitle>AppSono</IonTitle>
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