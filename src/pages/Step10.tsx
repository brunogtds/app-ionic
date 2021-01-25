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

import { IonProgressBar} from '@ionic/react';

import { object, string, number } from 'yup';

const submitForm = (data: any) => {
    
  } 

const Step10 = (props: StepComponentProps) => {
 
    return(
        <IonContent fullscreen> 
        <div>
            <form className={"ion-padding"}>

            <IonProgressBar value={1.0} buffer={1.0}></IonProgressBar>
            
            <IonLabel>pagina 10</IonLabel>

            <p>Email: {props.getState("email", "")}</p>
            <p>Idade: {props.state.idade}</p>
            <p>Recomendações...</p>
            
            <IonButton disabled={props.isFirst()} onClick={props.prev}>Anterior</IonButton>
            <IonButton disabled={props.isLast()} onClick={props.next}>Próximo</IonButton>
            <IonButton onClick={submitForm}>Submeter</IonButton>

            </form>

        </div>

        </IonContent>
    )
}

export default Step10; 