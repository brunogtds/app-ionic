import React from "react";
import {StepComponentProps} from "react-step-builder";


import { IonItem, IonLabel, IonRadioGroup, IonRadio, IonSelect, IonSelectOption, IonButton, IonList, IonDatetime, IonLoading} from "@ionic/react";
import { IonContent, IonRow, IonCol } from '@ionic/react';

import '../../Forms.css';

import { useForm, Controller } from "react-hook-form";

import {useState} from 'react';

import { IonProgressBar} from '@ionic/react';

import  {Redirect, useHistory } from 'react-router-dom'
import {toast} from '../../../../toast';

//imports user context do reactfire

import {useUser} from 'reactfire';
import firebase from 'firebase';

const Step9 = (props: StepComponentProps) => {

    const {control, watch, handleSubmit} = useForm();
    const {data: user}= useUser();
    const [dataUser, setData] = useState()
 
    const history= useHistory();
    const [loader, setLoader]= useState<boolean>(false)
 
   async function updateUserDataQuest1(dataUser: any){
     
  
     if(user){
         firebase.firestore().collection('users').doc(user.uid).set({
            nightShift: String(props.state.nightShift), //STEP 4 
            workDaysN: String(props.state.workDaysN),
            sleepWD: String(props.state.sleepWD),
            wakeUpWD: String(props.state.wakeUpWD),
            alarmWD: String(props.state.alarmWD),
            sleepOnWork: String(props.state.sleepOnWork),
            wakeUpOnWork: String(props.state.wakeUpOnWork),
            alarmOnWork: String(props.state.alarmOnWork),
            sleepFD: String(props.state.sleepFD),
            wakeUpFD: String(props.state.wakeUpFD),
            alarmFD: String(props.state.alarmFD),   }, {merge: true})
         }
     
         toast('Formulário submetido com sucesso!', 4000);
         
     
     }
 
     function voltaModulos (){
         history.push('/modulos');
     }
         
     const onSubmit = (data: any) => {
        setData(dataUser);
        setLoader(true);
        updateUserDataQuest1(dataUser);
        voltaModulos();
        
     }
 
 
    return(
        <IonContent fullscreen> 
         <IonItem>
       
        
         </IonItem>
        <div>
            <form className={"ion-padding"} onSubmit={handleSubmit(onSubmit)}>
            <IonLoading message="Por favor aguarde..." duration={2000} isOpen={loader}/>

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
<IonButton onClick={onSubmit} size="large" className={"btnProximo"}>Submeter</IonButton>
</form>

</div>

</IonContent>
)
}

export default Step9; 