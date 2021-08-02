import React from "react";
import {StepComponentProps} from "react-step-builder";


import { IonItem, IonLabel, IonRadioGroup, IonRadio, IonButton, IonDatetime, IonLoading, IonText} from "@ionic/react";
import { IonContent} from '@ionic/react';

import '../../Forms.css';

import { useForm, Controller } from "react-hook-form";

import {useState} from 'react';

import  {useHistory } from 'react-router-dom'


//imports user context do reactfire

import {useUser} from 'reactfire';
import firebase from 'firebase';

const MCTQ2Post = (props: StepComponentProps) => {

    const {control, errors, formState} = useForm({mode: "onChange"});
     
    
    const [loader]= useState<boolean>(false)
 
    return(
        <IonContent fullscreen color="light"> 
         
        <div>
            <form className={"ion-padding"}>
            <IonLoading message="Por favor aguarde..." duration={2000} isOpen={loader}/>

<IonLabel className="questions">Em dias livres, eu normalmente dormi às: </IonLabel>
<IonItem>
    
    <Controller render={({onChange}) => (
    <IonDatetime display-format="h:mm A" picker-format="h:mm A" onIonChange={(e)=> {
        console.log(e);
        onChange(e.detail.value); 
        if (e.detail.value != undefined) 
        props.setState('sleepFDPost14', e.detail.value )}}></IonDatetime> )} control={control} name={"sleepFDPost14"} rules={{required:true}}/>
        {errors.sleepFDPost14 && <IonText color="danger">Campo obrigatório.</IonText>}
</IonItem>

<IonLabel className="questions">Em dias livres, quando não usei o despertador, eu normalmente acordei às: </IonLabel>
<IonItem>
    
    <Controller render={({onChange}) => (
    <IonDatetime display-format="h:mm A" picker-format="h:mm A" onIonChange={(e)=> {
        console.log(e);
        onChange(e.detail.value);
        if (e.detail.value != undefined) 
        props.setState('wakeUpFDPost14', e.detail.value ) }}></IonDatetime> )} control={control} name={"wakeUpFDPost14"} rules={{required:true}}/>
        {errors.wakeUpFDPost14 && <IonText color="danger">Campo obrigatório.</IonText>}
</IonItem>

<IonLabel className="questions">Usei o despertador em dias livres:</IonLabel>
<IonItem>
    

    <Controller render={({onChange})=> (
    <IonRadioGroup onIonChange={(e)=> {
        console.log(e);
        onChange(e.detail.value);
        if (e.detail.value != undefined) 
        props.setState('alarmFDPost14', e.detail.value ) }}>

                    <IonItem>
                    <IonLabel>Sim</IonLabel>
                    <IonRadio className={"radio-options"} color="primary" value="sim"></IonRadio>
                    </IonItem>
                   
                    <IonItem>
                    <IonLabel>Não</IonLabel>
                    <IonRadio className={"radio-options"} color="primary" value="não"></IonRadio>
                    </IonItem>
                   
    </IonRadioGroup> )} control={control} name={"alarmFDPost14"} rules={{required:true}}/>
    {errors.alarmFD && <IonText color="danger">Campo obrigatório.</IonText>}

</IonItem>



<IonButton disabled={props.isFirst()}onClick={props.prev} size="large" fill="clear">Anterior</IonButton>
<IonButton disabled={formState.isValid === false} onClick={props.next} size="large" className={"btnProximo"} fill="clear">Próximo</IonButton>
</form>

</div>

</IonContent>
)
    }

export default MCTQ2Post; 