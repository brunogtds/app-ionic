import React from "react";
import {StepComponentProps} from "react-step-builder";


import { IonItem, IonLabel, IonRadioGroup, IonRadio, IonSelect, IonSelectOption, IonButton, IonList, IonDatetime, IonLoading, IonText} from "@ionic/react";
import { IonContent, IonRow, IonCol } from '@ionic/react';

import '../../../Forms.css';

import { useForm, Controller } from "react-hook-form";

import {useState} from 'react';

import { IonProgressBar} from '@ionic/react';

import  {Redirect, useHistory } from 'react-router-dom'
import {toast} from '../../../../../toast';

//imports user context do reactfire

import {useUser} from 'reactfire';
import firebase from 'firebase';

const MCTQ2 = (props: StepComponentProps) => {

    const {control, watch, handleSubmit, errors, formState} = useForm({mode: "onChange"});
    const {data: user}= useUser();
    const [dataUser, setData] = useState()
 
    const history= useHistory();
    const [loader, setLoader]= useState<boolean>(false)
 
  
    
    
 
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
        props.setState('sleepFD', e.detail.value )}}></IonDatetime> )} control={control} name={"sleepFD"} rules={{required:true}}/>
        {errors.sleepFD && <IonText color="danger">Campo obrigatório.</IonText>}
</IonItem>

<IonLabel className="questions">Em dias livres, quando não usei o despertador, eu normalmente acordei às: </IonLabel>
<IonItem>
    
    <Controller render={({onChange}) => (
    <IonDatetime display-format="h:mm A" picker-format="h:mm A" onIonChange={(e)=> {
        console.log(e);
        onChange(e.detail.value);
        if (e.detail.value != undefined) 
        props.setState('wakeUpFD', e.detail.value ) }}></IonDatetime> )} control={control} name={"wakeUpFD"} rules={{required:true}}/>
        {errors.wakeUpFD && <IonText color="danger">Campo obrigatório.</IonText>}
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
                    <IonRadio className={"radio-options"} color="primary" value="sim"></IonRadio>
                    </IonItem>
                   
                    <IonItem>
                    <IonLabel>Não</IonLabel>
                    <IonRadio className={"radio-options"} color="primary" value="não"></IonRadio>
                    </IonItem>
                   
    </IonRadioGroup> )} control={control} name={"alarmFD"} rules={{required:true}}/>
    {errors.alarmFD && <IonText color="danger">Campo obrigatório.</IonText>}

</IonItem>



<IonButton disabled={props.isFirst()}onClick={props.prev} size="large" fill="clear">Anterior</IonButton>
<IonButton disabled={formState.isValid === false} onClick={props.next} size="large" className={"btnProximo"} fill="clear">Próximo</IonButton>
</form>

</div>

</IonContent>
)
    }

export default MCTQ2; 