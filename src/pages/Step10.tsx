import React, { FormEvent } from "react";
import {StepComponentProps} from "react-step-builder";

import { Steps, Step } from "react-step-builder";

import { IonLabel,IonButton, } from "@ionic/react";
  import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';

  import './Forms.css';

import { useForm, Controller } from "react-hook-form";

import {useState, ChangeEvent} from 'react';
import { setConstantValue } from "typescript";

import { IonProgressBar, IonItem} from '@ionic/react';

import { object, string, number } from 'yup';

const submitForm = (data: any) => {
    
  } 

const Step10 = (props: StepComponentProps) => {
 
    return(
        <IonContent fullscreen> 
        <div>
            <form className={"ion-padding"}>

            <IonProgressBar value={1.0} buffer={1.0}></IonProgressBar>

            <IonItem>
            
            <IonLabel>Final do Formulário. Inserir texto final.</IonLabel>

            </IonItem>
         
            
            <IonButton disabled={props.isFirst()} onClick={props.prev} size="large">Anterior</IonButton>
            <IonButton disabled={props.isLast()} onClick={props.next} size="large">Próximo</IonButton>
            <IonButton onClick={submitForm} size="large">Submeter</IonButton>

            </form>

        </div>

        </IonContent>
    )
}

export default Step10; 