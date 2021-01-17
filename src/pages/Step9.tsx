import React, { FormEvent } from "react";
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
    IonNote,
    IonItemDivider
    
  } from "@ionic/react";
  import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';

  import './Forms.css';

import { useForm, Controller } from "react-hook-form";

import {useState, ChangeEvent} from 'react';
import { setConstantValue } from "typescript";


import { object, string, number } from 'yup';

const Step9 = (props: StepComponentProps) => {
 
    return(
        <IonContent fullscreen> 
        <div>
            <form className={"ion-padding"}>
            
            <IonLabel>pagina 9</IonLabel>
            
            <IonButton disabled={props.isFirst()}onClick={props.prev}>Anterior</IonButton>
            <IonButton onClick={props.next}>Próximo</IonButton>
            </form>

        </div>

        </IonContent>
    )
}

export default Step9; 