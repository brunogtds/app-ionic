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
                
                </Steps>
            

      </IonContent>

      </IonPage>
    );
  }
  

  export default App;