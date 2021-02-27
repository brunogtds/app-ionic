import React from "react";
import {StepComponentProps} from "react-step-builder";

import {IonButton, } from "@ionic/react";
import { IonContent, IonLoading } from '@ionic/react';
import './Forms.css';

import { useForm} from "react-hook-form";

import {useState} from 'react';


import { IonProgressBar} from '@ionic/react';

import thinking from '../../img/thinking.png';
import {useUser} from 'reactfire';
import firebase from 'firebase';

import {toast} from '../../toast';

/*STEP 10 => função updataUserDataQuest1 envia os dados após o onSubmit para a tabela no FireStore*/

const Step10 = (props: StepComponentProps) => {

  const {data: user}= useUser();
  const [dataUser, setData] = useState()
  const {control, watch, handleSubmit} = useForm();
  const [loader, setLoader]= useState<boolean>(false)

  function updateUserDataQuest1(dataUser: any){
    
    setLoader(true);

    if(user){
        firebase.firestore().collection('users').doc(user.uid).set({
            age: Number(props.state.age), //STEP 1
            sex: String(props.state.sex),
            dateMenstruation: String(props.state.dateMenstruation),
            weight: Number(props.state.weight),
            height: Number(props.state.height),
            BRstate: String(props.state.BRstate),
            occupation: String(props.state.occupation),
            currentOccupation: String(props.state.currentOccupation),
            schooling: String(props.state.schooling),
            married: String(props.state.married),
            depend: Number(props.state.depend),
            isolationComp: String(props.state.isolationComp),
            area: String(props.state.area),
            disorders: String(props.state.disorders), //STEP 2 
            meds: String(props.state.meds),
            medsUsed: String(props.state.medsUsed),
            medsOff: String(props.state.medsOff),
            medsOffUsed: String(props.state.medsOffUsed),
            psychother: String(props.state.psychoter),
            smoke: String(props.state.smoke),
            cigarrets: String(props.state.cigarrets),
            smokeDur: Number(props.state.smokeDur),
            smokeBef: String(props.state.smokeBef),
            cigarretsBef: String(props.state.cigarretsBef),
            smokeBefDur: Number(props.state.smokeBefDur),
            smokeStop: Number(props.state.smokeStop),
            alcohol: String(props.state.alcohol),
            cage01: String(props.state.cage01),
            cage02: String(props.state.cage02),
            cage03: String(props.state.cage03),
            cage04: String(props.state.cage04),
            drugs: String(props.state.drugs),
            drugsUsed: String(props.state.drugsUsed),
            drugDur: Number(props.state.drugDur),
            stimulants: String(props.state.stimulants),
            stimulantTiming: String(props.state.stimulantTiming),
            socialDist: String(props.state.socialDist), //STEP 3
            quarantine: String(props.state.qurantine),
            quarantineDur: String(props.state.quarantineDur),
            quarantineRoom: String(props.state.quarantineRoom),
            quarantineRoomDur: String(props.state.quarantineRoomDur),
            quarantineOutDur: String(props.state.quarantineOutDur),
            internet: String(props.state.internet),
            contactN: String(props.state.contactN),
            workQ: String(props.state.workQ),
            workDur: String(props.state.workWeek),
            workChoice: String(props.state.workChooseHour),
            workReg: String(props.state.workReg),
            workStart: String(props.state.workStart),
            sleepReg: String(props.state.sleepReg),
            sleepQual: String(props.state.sleepQual),
            feedReg: String(props.state.feedReg),
            feedStartWD: String(props.state.feedStartWD),
            feedEndWD: String(props.state.feedEndWD),
            feedfdyn: String(props.state.fdyn),
            feedStart: String(props.state.feedStart),
            feedEnd: String(props.state.feedEnd),
            snacks: String(props.state.snacks),
            hobbiesFreq: String(props.state.hobbiesFreq),
            exercise: String(props.state.exercise),
            exerciseFreq: String(props.state.exerciseFreq),
            exerciseReg: String(props.state.exerciseReg),
            exerciseDur: String(props.state.exerciseDur),
            exerciseTiming: String(props.state.exerciseTiming),
            lightFreq: String(props.state.lightFreq),
            light: String(props.state.light),
            lightReg: String(props.state.lightReg),
            lightwdfdyd: String(props.state.lightwdfdyd),
            lightTiming: String(props.state.lightTiming),
            lightTimingWD: String(props.state.lightTimingWD),
            lightTimingFD: String(props.state.lightTimingFD),
            beck02: String(props.state.beck02),
            worries_PRcont: Number(props.state.worries_PRcont),
            worries_PRJob: Number(props.state.worries_PRJob),
            worries_PRincome: Number(props.state.worries_PRincome),
            worries_PRrelationship: Number(props.state.worries_PRrelationship),
            worries_PRcontSomeone: Number(props.state.worries_PRcontSomeone),
            worries_PRfamilyFrontLine: Number(props.state.worries_PRfamilyFrontLine),
            worries_PRlife: Number(props.state.worries_PRlife),
            worries_PRcontact: Number(props.state.worries_PRcontact),
            worries_PRchildren: Number(props.state.worries_PRchildren),
            covid: String(props.state.covid),
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
            gad7_gad01: Number(props.state.gad7_gad01), //STEP 5
            gad7_gad02: Number(props.state.gad7_gad02),
            gad7_gad03: Number(props.state.gad7_gad03),
            gad7_gad04: Number(props.state.gad7_gad04),
            gad7_gad05: Number(props.state.gad7_gad05),
            gad7_gad06: Number(props.state.gad7_gad06),
            gad7_gad07: Number(props.state.gad7_gad07),
            who5_SQ001: Number(props.state.who5_SQ001), //STEP 6 
            who5_SQ002: Number(props.state.who5_SQ002),
            who5_SQ003: Number(props.state.who5_SQ003),
            who5_SQ004: Number(props.state.who5_SQ004),
            who5_SQ005: Number(props.state.who5_SQ005),
            php01: Number(props.state.pqhp01), //STEP 7
            php02: Number(props.state.pqhp02), 
            php03: Number(props.state.pqhp03), 
            php04: Number(props.state.pqhp04), 
            php05: Number(props.state.pqhp05), 
            php06: Number(props.state.pqhp06), 
            php07: Number(props.state.pqhp07), 
            php08: Number(props.state.pqhp08), 
            php09: Number(props.state.pqhp09), 
            php10: Number(props.state.pqhp10), 
            sleepProblem: String(props.state.sleepProblem), //STEP 8 
            isi_isi01: Number(props.state.isi_isi01),
            isi_isi02: Number(props.state.isi_isi02),
            isi_isi03: Number(props.state.isi_isi03),
            pss_pss01: Number(props.state.pss_pss01), //STEP 9
            pss_pss02: Number(props.state.pss_pss02),
            pss_pss03: Number(props.state.pss_pss03),
            pss_pss04: Number(props.state.pss_pss04),
            pss_pss05: Number(props.state.pss_pss05),
            pss_pss06: Number(props.state.pss_pss06),
            pss_pss07: Number(props.state.pss_pss07),
            pss_pss08: Number(props.state.pss_pss08),
            pss_pss09: Number(props.state.pss_pss09),
            pss_pss10: Number(props.state.pss_pss10),
            pss_pss11: Number(props.state.pss_pss11),
            pss_pss12: Number(props.state.pss_pss12),
            pss_pss13: Number(props.state.pss_pss13),
            pss_pss14: Number(props.state.pss_pss14),
        }, {merge: true})
    }

    toast('Formulário submetido com sucesso!', 4000);
    setLoader(false);

}

const onSubmit = (data: any) => {
   setData(dataUser);
   updateUserDataQuest1(dataUser);
}


 
    return(
        <IonContent fullscreen> 
        <IonLoading message="Por favor aguarde..." duration={0} isOpen={loader}/>
        <div>
            <form className={"ion-padding"} onSubmit={handleSubmit(onSubmit)}>

            <IonProgressBar value={1.0} buffer={1.0}></IonProgressBar>
            

            <div className={"ion-text-center"}>
            <img src={thinking} height="100px" width="100px" />
            </div>
            <div>
            <p>Obrigado por participar do estudo! Clique em submeter para finalizar a pesquisa. </p>
            <p>Em 15 dias será disponibilizado um novo questionário contendo a parte final do estudo. Enquanto isso você também pode utilizar a aba de recomendações,
              para recomendações sobre COVID-19, bons hábitos e sono.
             </p>
            </div>
            
            
         
            
            <IonButton disabled={props.isFirst()} onClick={props.prev} size="large">Anterior</IonButton>
         
            <IonButton onClick={onSubmit} size="large" className={"btnProximo"}>Submeter</IonButton>

            </form>

        </div>

        </IonContent>
    )
}

export default Step10; 