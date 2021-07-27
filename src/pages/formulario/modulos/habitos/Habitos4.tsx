import React from "react";
import {StepComponentProps} from "react-step-builder";

import {IonItem, IonLabel, IonInput, IonRadioGroup, IonRadio, IonSelect, IonSelectOption, IonButton, IonCheckbox, IonList, IonDatetime} from "@ionic/react";
import { IonContent, IonText} from '@ionic/react';
 
import '../../Forms.css';

import { useForm, Controller } from "react-hook-form";
import {useState} from 'react';

import { IonProgressBar} from '@ionic/react';

import  {Redirect, useHistory } from 'react-router-dom'
import {toast} from '../../../../toast';

//imports user context do reactfire

import {useUser} from 'reactfire';
import firebase from 'firebase';

const Habitos4 = (props: StepComponentProps) => {

    const {data: user}= useUser();
   const [dataUser, setData] = useState()

   const history= useHistory();
   const [loader, setLoader]= useState<boolean>(false)

  async function updateUserDataQuest1(dataUser: any){
    
 
    if(user){
        firebase.firestore().collection('users').doc(user.uid).set({
                        
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
            dateHabitosModule1 : new Date()
             }, {merge: true})
        }
    
        toast('Formulário submetido com sucesso!', 3000);
        
    
    }

    function voltaModulos (){
        history.push('/tab1');
    }
        
    const onSubmit = (data: any) => {
       setData(dataUser);
       setLoader(true);
       updateUserDataQuest1(dataUser);
       voltaModulos();
       (document.getElementById('button-forms-habitos') as HTMLInputElement).disabled = true;
       
    }

    const {control, watch, handleSubmit, errors, formState} = useForm({mode: "onChange"});
    
 
    const [frequenciaLuzNatural, setFrequenciaLuzNatural] = useState();
    const [horarioLuzNatural, setHorarioLuzNatural] = useState();

        return (
            <IonContent fullscreen color="light">
                           
            <div className="ion-text-wrap">
               
                <form className="ion-padding">

                <div className="ion-text-wrap">
                <IonLabel className="questions">Com que frequência você se expôs a luz natural (em um ambiente aberto) nas últimas duas semanas?</IonLabel>
                        <IonList>
                        

                         <IonItem>
                            
                            <Controller render={({onChange}) => (  
                            <IonSelect placeholder="Por favor, selecione..." value={frequenciaLuzNatural} onIonChange={(e) => {setFrequenciaLuzNatural(e.detail.value);
                                onChange(e.detail.value);
                                if (e.detail.value != undefined) {
                                props.setState('lightFreq', e.detail.value )}}}>
                            <IonSelectOption value="nunca">Nunca</IonSelectOption>
                            <IonSelectOption value="menosMetade">Em menos da metade dos dias</IonSelectOption>
                            <IonSelectOption value="maisMetade">Em mais da metade dos dias</IonSelectOption>
                            <IonSelectOption value="todosDias">Todos os dias</IonSelectOption>
                            </IonSelect> )} control={control} name={"lightFreq"} rules={{required:true}}/>
                            {errors.lightFreq && <IonText color="danger">Campo obrigatório.</IonText>}
                         </IonItem>

                        {/*LUZ -> QUALQUER RESPOSTA QUE NÃO SEJA NUNCA */}


                        {((frequenciaLuzNatural === "menosMetade") || (frequenciaLuzNatural === "maisMetade") || (frequenciaLuzNatural === "todosDias")) ? 
                        <IonItem>
                            <IonLabel className="questions">Nesses dias, a quantas horas de luz natural (em um ambiente aberto) você se expôs em média?</IonLabel>
                            <Controller render={({onChange}) => (  
                            <IonSelect placeholder="Por favor, selecione..." onIonChange={(e)=> {
                                console.log(e);
                                onChange(e.detail.value);
                                if (e.detail.value != undefined) {
                                props.setState('light', e.detail.value )}} }>
                            <IonSelectOption value="não me exponho a luz natural">Não me exponho a luz natural</IonSelectOption>
                            <IonSelectOption value="até meia hora">Até meia hora</IonSelectOption>
                            <IonSelectOption value="até 1 hora">Até 1 hora</IonSelectOption>
                            <IonSelectOption value="até 2 horas">Até 2 horas</IonSelectOption>
                            <IonSelectOption value="até 4 horas">Até 4 horas</IonSelectOption>
                            <IonSelectOption value="mais de 4 horas">Mais de 4 horas</IonSelectOption>
                            </IonSelect> )} control={control} name={"light"} rules={{required:true}}/>
                            {errors.light && <IonText color="danger">Campo obrigatório.</IonText>}
                         </IonItem>:null }

                         {((frequenciaLuzNatural === "menosMetade") || (frequenciaLuzNatural === "maisMetade") || (frequenciaLuzNatural === "todosDias")) ? 
                         <IonItem>
                            <IonLabel className="questions">Quão regulares foram os horários em que se expõe à luz natural?</IonLabel>
                            <Controller render={({onChange}) => (  
                            <IonSelect placeholder="Por favor, selecione..." onIonChange={(e)=> {
                                console.log(e);
                                onChange(e.detail.value);
                                if (e.detail.value != undefined) {
                                props.setState('lightReg', e.detail.value )}} }>
                            <IonSelectOption value="muito irregulares">Muito irregulares</IonSelectOption>
                            <IonSelectOption value="irregulares">Irregulares</IonSelectOption>
                            <IonSelectOption value="regulares">Regulares</IonSelectOption>
                            <IonSelectOption value="muito regulares">Muito regulares</IonSelectOption>
                            </IonSelect> )} control={control} name={"lightReg"} rules={{required:true}}/>
                            {errors.lightReg && <IonText color="danger">Campo obrigatório.</IonText>}
                         </IonItem>:null}

                        <IonList>
                         {((frequenciaLuzNatural === "menosMetade") || (frequenciaLuzNatural === "maisMetade") || (frequenciaLuzNatural === "todosDias")) ? 
                         <IonItem>
                            <IonLabel className="questions">Seus horários de se expor à luz foram diferentes em dias de trabalho comparados a dias livres (ou em dias de semana comparados a fins de semana)?</IonLabel>
                            <Controller render={({onChange}) => (
                            <IonRadioGroup value={horarioLuzNatural} onIonChange={(e) => { setHorarioLuzNatural(e.detail.value);
                                onChange(e.detail.value);
                                if (e.detail.value != undefined) {
                                    props.setState('lightwdfdyd', e.detail.value )}} }>

                                <IonItem>
                                <IonLabel>Sim</IonLabel>
                                <IonRadio className={"radio-options"} color="primary" value="sim"></IonRadio>
                                </IonItem>
                               
                                <IonItem>
                                <IonLabel>Não</IonLabel>
                                <IonRadio className={"radio-options"} color="primary" value="não"></IonRadio>
                                </IonItem>
                               
                            </IonRadioGroup> )} control={control} name={"lightwdfdyd"} rules={{required:true}}/>
                            {errors.lightwdfdyd && <IonText color="danger">Campo obrigatório.</IonText>}
                        </IonItem> :null}

                        {/*HORÁRIOS DE LUZ REGULARES -> SIM */}

                        {(((frequenciaLuzNatural === "menosMetade") || (frequenciaLuzNatural === "maisMetade") || (frequenciaLuzNatural === "todosDias")) && (horarioLuzNatural === "sim")) ? 
                        <IonItem>
                             <IonLabel className="questions">Nas últimas duas semanas, em que horário, em média, você se expôs à luz natural, nos dias trabalho ou de semana?</IonLabel>
                             <Controller render={({onChange}) => (
                             <IonDatetime display-format="h:mm A" picker-format="h:mm A" onIonChange={(e)=> {
                                console.log(e);
                                onChange(e.detail.value);
                                if (e.detail.value != undefined) {
                                props.setState('lightTiming', e.detail.value )}} }></IonDatetime> )} control={control} name={"lightTiming"} rules={{required:true}}/>
                               {errors.lightTiming && <IonText color="danger">Campo obrigatório.</IonText>}
                         </IonItem>:null}

                         {(((frequenciaLuzNatural === "menosMetade") || (frequenciaLuzNatural === "maisMetade") || (frequenciaLuzNatural === "todosDias")) && (horarioLuzNatural === "sim")) ?
                         <IonItem>
                             <IonLabel className="questions">Nas últimas duas semanas, em que horário, em média, você se expôs à luz natural, nos dias livres ou fins de semana?</IonLabel>
                             <Controller render={({onChange}) => (
                             <IonDatetime display-format="h:mm A" picker-format="h:mm A" onIonChange={(e)=> {
                                console.log(e);
                                onChange(e.detail.value);
                                if (e.detail.value != undefined) {
                                props.setState('lightTimingWD', e.detail.value )}} }></IonDatetime> )} control={control} name={"lightTimingWD"} rules={{required:true}}/>
                                {errors.lightTimingWD && <IonText color="danger">Campo obrigatório.</IonText>}
                         </IonItem>:null}
                        {/*HORÁRIOS DE LUZ REGULARES -> NÃO */}

                        {(((frequenciaLuzNatural === "menosMetade") || (frequenciaLuzNatural === "maisMetade") || (frequenciaLuzNatural === "todosDias")) && (horarioLuzNatural === "não")) ?
                        <IonItem>
                             <IonLabel className="questions">Em que horário, em média, você se expôs à luz natural, nas últimas duas semanas?</IonLabel>
                             <Controller render={({onChange}) => (
                             <IonDatetime display-format="h:mm A" picker-format="h:mm A" onIonChange={(e)=> {
                                console.log(e);
                                onChange(e.detail.value);
                                if (e.detail.value != undefined) {
                                props.setState('lightTimingFD', e.detail.value )}} }></IonDatetime> )} control={control} name={"lightTimingFD"} rules={{required:true}}/>
                                 {errors.lightTimingFD && <IonText color="danger">Campo obrigatório.</IonText>}
                         </IonItem> :null} </IonList>
                         </IonList>

                              
                        <IonLabel className="questions">Marque aquela que melhor descreve a maneira como você se sentiu nas últimas duas semanas.</IonLabel>
                        <IonItem>
                        
                        <Controller render={({onChange}) => (
                        <IonSelect placeholder="Por favor, selecione..." id={""} onIonChange={(e)=> {
                            console.log(e);
                            onChange(e.detail.value);
                            if (e.detail.value != undefined) {
                            props.setState('beck02', e.detail.value )} }}>
                        <IonSelectOption value="A1">Não estou especialmente desanimado com o futuro.</IonSelectOption>
                        <IonSelectOption value="A2">Eu me sinto desanimado quanto ao futuro.</IonSelectOption>
                        <IonSelectOption value="A3">Acho que nada tenho a esperar.</IonSelectOption>
                        <IonSelectOption value="A4">Acho o futuro sem esperança e tenho a impressão de que as coisas não podem melhorar.</IonSelectOption>
                        </IonSelect> )} control={control} name={"beck02"} rules={{required:true}}/>
                        {errors.beck02 && <IonText color="danger">Campo obrigatório.</IonText>}
                        </IonItem>
               

                <IonButton onClick={props.prev} size="large" fill="clear">Anterior</IonButton>
                <IonButton disabled={formState.isValid === false} onClick={onSubmit} size="large" className={"btnProximo"} fill="clear">Submeter</IonButton>
                   
                   </div>
                </form>
                
            </div>
            </IonContent>
        )

}

export default Habitos4;