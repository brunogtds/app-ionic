import React from "react";
import {StepComponentProps} from "react-step-builder";

import {IonItem, IonLabel, IonRadioGroup, IonRadio, IonButton, IonLoading, IonText} from "@ionic/react";
import { IonContent} from '@ionic/react';

import '../../../Forms.css';
import { useForm, Controller } from "react-hook-form";
import {useState} from 'react';

import { IonProgressBar} from '@ionic/react';



import  {Redirect, useHistory } from 'react-router-dom'
import {toast} from '../../../../../toast';

//imports user context do reactfire

import {useUser} from 'reactfire';
import firebase from 'firebase';


const ISI = (props: StepComponentProps) => {
    const {control, watch, handleSubmit, errors, formState} = useForm({mode: "onChange"});
    const [problemasSono, setProblemasSono] = useState();

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
            alarmFD: String(props.state.alarmFD), 
            sleepProblem: String(props.state.sleepProblem), //STEP 8 
            isi_isi01: Number(props.state.isi_isi01),
            isi_isi02: Number(props.state.isi_isi02),
            isi_isi03: Number(props.state.isi_isi03),  }, {merge: true})
        }
    
        toast('Formulário submetido com sucesso!', 4000);
        
    
    }

    function voltaModulos (){
        history.push('/sonoSintomas');
    }
        
    const onSubmit = (data: any) => {
       setData(dataUser);
       setLoader(true);
       updateUserDataQuest1(dataUser);
       voltaModulos();
       (document.getElementById('button-forms-sono') as HTMLInputElement).disabled = true;
       
    }
 
 
    return(
        <IonContent fullscreen color="light"> 
         
        <div>
            <form className={"ion-padding"} onSubmit={handleSubmit(onSubmit)}>
            <IonLoading message="Por favor aguarde..." duration={2000} isOpen={loader}/>

            
            <IonLabel className="questions">Você tem tido problemas com seu sono?</IonLabel>
            <IonItem>
                

                <Controller render={({onChange}) => (
                            <IonRadioGroup value={problemasSono} onIonChange={(e) => {setProblemasSono(e.detail.value);
                                onChange(e.detail.value);
                                if (e.detail.value != undefined) {
                                props.setState('sleepProblem', e.detail.value )}}}>

                                <IonItem>
                                <IonLabel>Sim</IonLabel>
                                <IonRadio color="primary" value="sim"></IonRadio>
                                </IonItem>
                               
                                <IonItem>
                                <IonLabel>Não</IonLabel>
                                <IonRadio color="primary" value="não"></IonRadio>
                                </IonItem>
                            </IonRadioGroup> )} control={control} name={"sleepProblem"} rules={{required:true}}/>
                            {errors.sleepProblem && <IonText color="danger">Campo obrigatório.</IonText>}
            </IonItem>

            {problemasSono == "sim" ?
            <IonItem>

            <IonLabel className="questions">Por favor, avalie a gravidade da sua insônia nas duas últimas semanas, em relação a:</IonLabel>
            </IonItem>
            :null }

            {problemasSono == "sim" ?
            
                
                <IonItem>

                             <IonLabel className="questions">Dificuldade de pegar no sono.</IonLabel>
                           
                             <Controller render={({onChange}) => (
                             <IonRadioGroup onIonChange={(e)=> {
                                console.log(e);
                                onChange(e.detail.value); 
                                if (e.detail.value != undefined) {
                                props.setState('isi_isi01', e.detail.value )}}}>

                                <IonItem>
                                <IonLabel>Nenhuma</IonLabel>
                                <IonRadio color="primary" value="0"></IonRadio>
                                </IonItem>
                               
                                <IonItem>
                                <IonLabel>Leve</IonLabel>
                                <IonRadio color="primary" value="1"></IonRadio>
                                </IonItem>

                                <IonItem>
                                <IonLabel>Moderada</IonLabel>
                                <IonRadio color="primary" value="2"></IonRadio>
                                </IonItem>
                               
                                <IonItem>
                                <IonLabel>Grave</IonLabel>
                                <IonRadio color="primary" value="3"></IonRadio>
                                </IonItem>

                                <IonItem>
                                <IonLabel>Muito grave</IonLabel>
                                <IonRadio color="primary" value="4"></IonRadio>
                                </IonItem>
      
                            </IonRadioGroup> )} control={control} name='isi_isi01' rules={{required:true}}/>
                            {errors.isi_isi01 && <IonText color="danger">Campo obrigatório.</IonText>}
                    </IonItem> :null }

                    {problemasSono == "sim" ?
                <IonItem>

                             <IonLabel className="questions">Dificuldade de manter o sono.</IonLabel>

                             <Controller render={({onChange}) => (
                             <IonRadioGroup onIonChange={(e)=> {
                                console.log(e);
                                onChange(e.detail.value); 
                                if (e.detail.value != undefined) {
                                props.setState('isi_isi02', e.detail.value )}}}>

                                <IonItem>
                                <IonLabel>Nenhuma</IonLabel>
                                <IonRadio color="primary" value="0"></IonRadio>
                                </IonItem>
                               
                                <IonItem>
                                <IonLabel>Leve</IonLabel>
                                <IonRadio color="primary" value="1"></IonRadio>
                                </IonItem>

                                <IonItem>
                                <IonLabel>Moderada</IonLabel>
                                <IonRadio color="primary" value="2"></IonRadio>
                                </IonItem>
                               
                                <IonItem>
                                <IonLabel>Grave</IonLabel>
                                <IonRadio color="primary" value="3"></IonRadio>
                                </IonItem>

                                <IonItem>
                                <IonLabel>Muito grave</IonLabel>
                                <IonRadio color="primary" value="4"></IonRadio>
                                </IonItem>
      
                            </IonRadioGroup> )} control={control} name='isi_isi02' rules={{required:true}}/>
                            {errors.isi_isi02 && <IonText color="danger">Campo obrigatório.</IonText>}
                    </IonItem> :null }

                    {problemasSono == "sim" ?
                    <IonItem>

                             <IonLabel className="questions">Problema de despertar muito cedo.</IonLabel>

                             <Controller render={({onChange}) => (
                             <IonRadioGroup onIonChange={(e)=> {
                                console.log(e);
                                onChange(e.detail.value); 
                                if (e.detail.value != undefined) {
                                props.setState('isi_isi03', e.detail.value )}}}>

                                <IonItem>
                                <IonLabel>Nenhuma</IonLabel>
                                <IonRadio color="primary" value="0"></IonRadio>
                                </IonItem>
                               
                                <IonItem>
                                <IonLabel>Leve</IonLabel>
                                <IonRadio color="primary" value="1"></IonRadio>
                                </IonItem>

                                <IonItem>
                                <IonLabel>Moderada</IonLabel>
                                <IonRadio color="primary" value="2"></IonRadio>
                                </IonItem>
                               
                                <IonItem>
                                <IonLabel>Grave</IonLabel>
                                <IonRadio color="primary" value="3"></IonRadio>
                                </IonItem>

                                <IonItem>
                                <IonLabel>Muito grave</IonLabel>
                                <IonRadio color="primary" value="4"></IonRadio>
                                </IonItem>
      
                            </IonRadioGroup> )} control={control} name='isi_isi03' rules={{required:true}}/>
                            {errors.isi_isi03 && <IonText color="danger">Campo obrigatório.</IonText>}
                    </IonItem>
            
            :null }
            
            <IonButton disabled={props.isFirst()}onClick={props.prev} size="large" fill="clear">Anterior</IonButton>
            <IonButton disabled={formState.isValid === false}  onClick={onSubmit} size="large" className={"btnProximo"} fill="clear">Submeter</IonButton>
            </form>

        </div>

        </IonContent>
    )
}

export default ISI; 