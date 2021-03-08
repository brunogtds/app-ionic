import React from "react";
import {StepComponentProps} from "react-step-builder";

import { IonItem, IonLabel, IonInput, IonSelect, IonSelectOption, IonButton, IonCheckbox, IonList, IonDatetime, IonNote, IonTextarea} from "@ionic/react";
import { IonContent} from '@ionic/react';
import '../Forms.css';

import { useForm, Controller } from "react-hook-form";

import {useState} from 'react';


import { IonProgressBar} from '@ionic/react';

//imports user context do reactfire

import {useUser} from 'reactfire';
import firebase from 'firebase';
import thinking from '../../../img/thinking.png';

import {toast} from '../../../toast';

/*STEP 1 => Página 1 do formulário
Se user autenticado entrou aqui -> createDataBaseQuest 1 cria a entrada na tabela users no Firebase  */

const Step6P2 = (props: StepComponentProps) => {

    const {data: user}= useUser();
    const [dataUser, setData] = useState()

  function updateUserDataQuest2(dataUser: any){

    if(user){
        firebase.firestore().collection('usersPost').doc(user.uid).set({
            weightPost: Number(props.state.weightPost), //STEP 1
            disordersChange: String(props.state.disordersChange), 
            medsChange: String(props.state.medsChange),
            medsUsedChange: String(props.state.medsUsedChange),
            medsOffChange: String(props.state.medsOffChange),
            medsOffUsedChange: String(props.state.medsOffUsedChange),
            psychotherPost: String(props.state.psychotherPost),
            alcoholChange: Number(props.state.alcoholChange),
            stimulantsChange: Number(props.state.stimulantsChange),
            smokeChange: Number(props.state.smokeChange),
            socialDistPost: Number(props.state.socialDistPost), //STEP 2 
            workqPost: String(props.state.workqPost),
            workDurPost: String(props.state.workDurPost),
            workChoicePost: String(props.state.workChoicePost),
            workRegPost: String(props.state.workRegPost),
            workStartPost: String(props.state.workStartPost),
            beck02Post: String(props.state.beck02Post),
            worriesPost_PRcont: Number(props.state.worriesPost_PRcont),
            worriesPost_PRJob: Number(props.state.worriesPost_PRJob),
            worriesPost_PRincome: Number(props.state.worriesPost_PRincome),
            worriesPost_PRrelationship: Number(props.state.worriesPost_PRrelationship),
            worriesPost_PRcontSomeone: Number(props.state.worriesPost_PRcontSomeone),
            worriesPost_PRfamilyFrontLine: Number(props.state.worriesPost_PRfamilyFrontLine),
            worriesPost_PRlife: Number(props.state.worriesPost_PRlife),
            worriesPost_PRcontact: Number(props.state.worriesPost_PRcontact),
            worriesPost_PRchildren: Number(props.state.worriesPost_PRchildren),
            covidPost: String(props.state.covidPost),
            covidDiagnDate: String(props.state.covidDiagnDate),
            covidSuspDate: String(props.state.covidSuspDate),
            quarantineRoomPost: String(props.state.quarantineRoomPost),
            quarantineRoomDurPos: String(props.state.quarantineRoomDurPos),
            gad7Post_gad01: Number(props.state.gad7Post_gad01), //STEP 3
            gad7Post_gad02: Number(props.state.gad7Post_gad02),
            gad7Post_gad03: Number(props.state.gad7Post_gad03),
            gad7Post_gad04: Number(props.state.gad7Post_gad04),
            gad7Post_gad05: Number(props.state.gad7Post_gad05),
            gad7Post_gad06: Number(props.state.gad7Post_gad06),
            gad7Post_gad07: Number(props.state.gad7Post_gad07),
            phq01Post: Number(props.state.pqhp01Post), //STEP 4
            phq02Post: Number(props.state.pqhp02Post), 
            phq03Post: Number(props.state.pqhp03Post), 
            phq04Post: Number(props.state.pqhp04Post), 
            phq05Post: Number(props.state.pqhp05Post), 
            phq06Post: Number(props.state.pqhp06Post), 
            phq07Post: Number(props.state.pqhp07Post), 
            phq08Post: Number(props.state.pqhp08Post), 
            phq09Post: Number(props.state.pqhp09Post), 
            phq10Post: Number(props.state.pqhp10Post), 
            nightShiftPre: String(props.state.nightShiftPre), //STEP 5 
            workDaysNPre: Number(props.state.workDaysNPre),
            sleepWDPre: String(props.state.sleepWDPre),
            wakeUpWDPre: String(props.state.wakeUpWDPre),
            alarmWDPre: String(props.state.alarmWDPre),
            sleepNoWorkWD: String(props.state.sleepNoWorkWD),
            wakeUpNoWorkWD: String(props.state.wakeUpNoWorkWD),
            alarmNoWorkWD: String(props.state.alarmNoWorkWD),
            sleepFDPre: String(props.state.sleepFDPre),
            wakeUpFDPre: String(props.state.wakeUpFDPre),
            alarmFDPre: String(props.state.alarmFDPre),
            sleepQualPre: Number(props.state.sleepQualPre),
            openQuestion: String(props.state.openQuestion), //STEP 6 
            openQuestionFuture: String(props.state.openQuestionFuture),

        
        }, {merge: true})
    
            toast('Formulário submetido com sucesso!', 4000);
}
  }

  const onSubmit = (data: any) => {
    setData(dataUser);
    updateUserDataQuest2(dataUser);
 }
                                  
  const {control, watch, handleSubmit} = useForm();

    

    return (
        <IonContent fullscreen> 
        
        <div>
            <form className={"ion-padding"} onSubmit={handleSubmit(onSubmit)}>

            <IonProgressBar value={1.0} buffer={1.0}></IonProgressBar>
                        

            <div className={"ion-text-center"}>
            <img src={thinking} height="100px" width="100px" />
            </div>
            <div>
            <p>Obrigado por participar do estudo! Clique em submeter para finalizar a pesquisa. </p>
           
            </div>

            <IonItem>
                <IonLabel>Caso você deseje fazer algum comentário, ou nos contar algo que julgue importante que aconteceu
                    com você durante o período em que participou do estudo:
                </IonLabel>
                
            </IonItem>

            <IonItem>
                <Controller render={({onChange}) => (
                <IonTextarea placeholder={"Use este espaço"} onIonChange={(e)=> {
                                     
                    if (e.detail.value != undefined) 
                    props.setState('openQuestion', e.detail.value ) }}/> )}
                control={control}
                name={"openQuestion"}
                />
            </IonItem>

            <IonItem>
                <IonLabel>Caso você tenha previsão de retorno às atividades normais ou ao "novo normal", você pode nos contar aqui. Se 
                    quiser, você pode também nos contar como se sente em relação a essas perspectivas de retorno.
                </IonLabel>
               
            </IonItem> 

            <IonItem>
                <Controller render={({onChange}) => (
                    <IonTextarea placeholder={"Use este espaço"} onIonChange={(e)=> {
                                        
                        if (e.detail.value != undefined) 
                        props.setState('openQuestion', e.detail.value ) }}/> )}
                    control={control}
                    name={"openQuestionFuture"}
                    />
            </IonItem>
            
            
         
            
            <IonButton disabled={props.isFirst()} onClick={props.prev} size="large">Anterior</IonButton>
         
            <IonButton size="large" className={"btnProximo"}>Submeter</IonButton>

            </form>

        </div>

        </IonContent>
    )


}

export default Step6P2;