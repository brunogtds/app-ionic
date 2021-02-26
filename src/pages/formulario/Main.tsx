import React, {useState} from "react";
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
  import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonText, IonLoading } from '@ionic/react';



  import './Forms.css';

  import Step1 from '../../pages/formulario/Step1';
  import Step2 from '../../pages/formulario/Step2';
  import Step3 from '../../pages/formulario/Step3';
  import Step4 from '../../pages/formulario/Step4';
  import Step5 from '../../pages/formulario/Step5';
  import Step6 from '../../pages/formulario/Step6';
  import Step7 from '../../pages/formulario/Step7';
  import Step8 from '../../pages/formulario/Step8';
  import Step9 from '../../pages/formulario/Step9';
  import Step10 from '../../pages/formulario/Step10';

  import {AuthCheck} from 'reactfire';
  import {useUser} from 'reactfire';

  import  { useHistory } from 'react-router-dom';
  import {logoutUser} from '../../firebaseConfig/firebaseConfig';
  import {toast} from '../../toast';
  
  
  function App() {

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