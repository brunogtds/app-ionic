import React from "react";
import {StepComponentProps} from "react-step-builder";


import { IonItem, IonLabel, IonRadioGroup, IonRadio, IonSelect, IonSelectOption, IonButton, IonList, IonDatetime} from "@ionic/react";
import { IonContent, IonRow, IonCol } from '@ionic/react';

import '../../Forms.css';

import { useForm, Controller } from "react-hook-form";

import {useState} from 'react';

import { IonProgressBar} from '@ionic/react';



const Step9 = (props: StepComponentProps) => {

    const {control, watch, handleSubmit} = useForm();

 
 
    return(
        <IonContent fullscreen> 
         <IonItem>
       
        
         </IonItem>
        <div>
            <form className={"ion-padding"}>

<IonLabel className="questions">Em dias livres, eu normalmente dormi às: </IonLabel>
<IonItem>
    
    <Controller render={({onChange}) => (
    <IonDatetime display-format="h:mm A" picker-format="h:mm A" onIonChange={(e)=> {
        console.log(e);
        onChange(e.detail.value); 
        if (e.detail.value != undefined) 
        props.setState('sleepFD', e.detail.value )}}></IonDatetime> )} control={control} name={"sleepFD"}/>
</IonItem>

<IonLabel className="questions">Em dias livres, quando não usei o despertador, eu normalmente acordei às: </IonLabel>
<IonItem>
    
    <Controller render={({onChange}) => (
    <IonDatetime display-format="h:mm A" picker-format="h:mm A" onIonChange={(e)=> {
        console.log(e);
        onChange(e.detail.value);
        if (e.detail.value != undefined) 
        props.setState('wakeUpFD', e.detail.value ) }}></IonDatetime> )} control={control} name={"wakeUpFD"}/>
</IonItem>

<IonLabel className="questions">Usei o despertador em dias livres:</IonLabel>
<IonItem>
    

    <Controller render={({onChange})=> (
    <IonRadioGroup onIonChange={(e)=> {
        console.log(e);
        onChange(e.detail.value);
        if (e.detail.value != undefined) 
        props.setState('alarmFD', e.detail.value ) }}>

                    <IonItem>
                    <IonLabel>Sim</IonLabel>
                    <IonRadio color="primary" value="sim"></IonRadio>
                    </IonItem>
                   
                    <IonItem>
                    <IonLabel>Não</IonLabel>
                    <IonRadio color="primary" value="não"></IonRadio>
                    </IonItem>
                   
    </IonRadioGroup> )} control={control} name={"alarmFD"}/>
</IonItem>



<IonButton disabled={props.isFirst()}onClick={props.prev} size="large">Anterior</IonButton>
<IonButton onClick={props.next} size="large" className={"btnProximo"}>Submeter</IonButton>
</form>

</div>

</IonContent>
)
}

export default Step9; 