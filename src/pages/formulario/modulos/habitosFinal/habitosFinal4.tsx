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

const HabitosFinal4 = (props: StepComponentProps) => {

    const options = {
        cssClass: 'my-custom-interface'
      };

    const {data: user}= useUser();
   const [dataUser, setData] = useState()

   const history= useHistory();
   const [loader, setLoader]= useState<boolean>(false)

  async function updateUserDataQuest1(dataUser: any){
    
 
    if(user){
        firebase.firestore().collection('usersFinal').doc(user.uid).set({
                        
            workQFinal: String(props.state.workQFinal),
            workDurFinal: String(props.state.workDurFinal),
            workRegFinal: String(props.state.workRegFinal),
            workStartFinal: String(props.state.workStartFinal),
            sleepRegFinal: String(props.state.sleepRegFinal),
            sleepQualFinal: String(props.state.sleepQualFinal),
            feedRegFinal: String(props.state.feedRegFinal),
            feedStartWDFinal: String(props.state.feedStartWDFinal),
            feedEndWDFinal: String(props.state.feedEndWDFinal),
            feedStartFDFinal: String(props.state.feedStartFDFinal),
            feedEndFDFinal: String(props.state.feedEndFDFinal),
            feedFDYNFinal: String(props.state.feedFDYNFinal),
            feedStartFinal: String(props.state.feedStartFinal),
            feedEndFinal: String(props.state.feedEndFinal),
            snacksFinal: String(props.state.snacksFinal),

            hobbiesFreqFinal: String(props.state.hobbiesFreqFinal),
            exerciseFinal: String(props.state.exerciseFinal),
            exerciseFreqFinal: String(props.state.exerciseFreqFinal),
            exerciseRegFinal: String(props.state.exerciseRegFinal),
            exerciseDurFinal: String(props.state.exerciseDurFinal),
            ExerciseTimingFinal: String(props.state.ExerciseTimingFinal),

            lightFreqFinal: String(props.state.lightFreqFinal),
            lightPostFinal: String(props.state.lightPostFinal),
            lightRegFinal: String(props.state.lightRegFinal),
            lightWDFDYDFinal: String(props.state.lightWDFDYDFinal),
            lightTimingFinal: String(props.state.lightTimingFinal),
            lightTimingWDFinal: String(props.state.lightTimingWDFinal),
            lightTimingFDFinal: String(props.state.lightTimingFDFinal),
            beck02Final: String(props.state.beck02Final),
            dateHabitosFinal : new Date()
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
    }

    const {control, watch, handleSubmit, errors, formState} = useForm({mode: "onChange"});
    
 
    const [frequenciaLuzNatural, setFrequenciaLuzNatural] = useState();
    const [horarioLuzNatural, setHorarioLuzNatural] = useState();

        return (
            <IonContent fullscreen color="background">
                           
            <div className="ion-text-wrap">
               
                <form className="ion-padding texto-default">

                <div className="ion-text-wrap">
                <IonLabel className="questions">Com que frequência você se expôs a luz natural (em um ambiente aberto) nas últimas duas semanas?</IonLabel>
                        
                        

                         <IonItem lines="none">
                            
                            <Controller render={({onChange}) => (  
                            <IonSelect interfaceOptions={options} className={"select-interface-option"} okText="ok" cancelText="Cancelar" placeholder="Por favor, selecione..." value={frequenciaLuzNatural} onIonChange={(e) => {setFrequenciaLuzNatural(e.detail.value);
                                onChange(e.detail.value);
                                if (e.detail.value != undefined) {
                                props.setState('lightFreqFinal', e.detail.value )}}}>
                            <IonSelectOption value="nunca">Nunca</IonSelectOption>
                            <IonSelectOption value="menosMetade">Em menos da metade dos dias</IonSelectOption>
                            <IonSelectOption value="maisMetade">Em mais da metade dos dias</IonSelectOption>
                            <IonSelectOption value="todosDias">Todos os dias</IonSelectOption>
                            </IonSelect> )} control={control} name={"lightFreqFinal"} rules={{required:true}}/>
                            {errors.lightFreqFinal && <IonText color="danger">Campo obrigatório.</IonText>}
                         </IonItem>

                        {/*LUZ -> QUALQUER RESPOSTA QUE NÃO SEJA NUNCA */}


                        {((frequenciaLuzNatural === "menosMetade") || (frequenciaLuzNatural === "maisMetade") || (frequenciaLuzNatural === "todosDias")) ? 
                        <IonItem lines="none">
                            <IonLabel className="questions">Nesses dias, a quantas horas de luz natural (em um ambiente aberto) você se expôs em média?</IonLabel>
                            </IonItem>:null}
                            {((frequenciaLuzNatural === "menosMetade") || (frequenciaLuzNatural === "maisMetade") || (frequenciaLuzNatural === "todosDias")) ? 
                            <IonItem lines="none">
                            <Controller render={({onChange}) => (  
                            <IonSelect interfaceOptions={options} className={"select-interface-option"} okText="ok" cancelText="Cancelar" placeholder="Por favor, selecione..." onIonChange={(e)=> {
                                console.log(e);
                                onChange(e.detail.value);
                                if (e.detail.value != undefined) {
                                props.setState('lightPostFinal', e.detail.value )}} }>
                            <IonSelectOption value="não me exponho a luz natural">Não me exponho a luz natural</IonSelectOption>
                            <IonSelectOption value="até meia hora">Até meia hora</IonSelectOption>
                            <IonSelectOption value="até 1 hora">Até 1 hora</IonSelectOption>
                            <IonSelectOption value="até 2 horas">Até 2 horas</IonSelectOption>
                            <IonSelectOption value="até 4 horas">Até 4 horas</IonSelectOption>
                            <IonSelectOption value="mais de 4 horas">Mais de 4 horas</IonSelectOption>
                            </IonSelect> )} control={control} name={"lightPostFinal"} rules={{required:true}}/>
                            {errors.lightPostFinal && <IonText color="danger">Campo obrigatório.</IonText>}
                         </IonItem>:null }

                         {((frequenciaLuzNatural === "menosMetade") || (frequenciaLuzNatural === "maisMetade") || (frequenciaLuzNatural === "todosDias")) ? 
                         <IonItem lines="none">
                            <IonLabel className="questions">Quão regulares foram os horários em que se expõe à luz natural?</IonLabel>
                            </IonItem>:null}
                            {((frequenciaLuzNatural === "menosMetade") || (frequenciaLuzNatural === "maisMetade") || (frequenciaLuzNatural === "todosDias")) ? 
                            <IonItem lines="none">
                            <Controller render={({onChange}) => (  
                            <IonSelect interfaceOptions={options} className={"select-interface-option"} okText="ok" cancelText="Cancelar" placeholder="Por favor, selecione..." onIonChange={(e)=> {
                                console.log(e);
                                onChange(e.detail.value);
                                if (e.detail.value != undefined) {
                                props.setState('lightRegFinal', e.detail.value )}} }>
                            <IonSelectOption value="muito irregulares">Muito irregulares</IonSelectOption>
                            <IonSelectOption value="irregulares">Irregulares</IonSelectOption>
                            <IonSelectOption value="regulares">Regulares</IonSelectOption>
                            <IonSelectOption value="muito regulares">Muito regulares</IonSelectOption>
                            </IonSelect> )} control={control} name={"lightRegFinal"} rules={{required:true}}/>
                            {errors.lightRegFinal && <IonText color="danger">Campo obrigatório.</IonText>}
                         </IonItem>:null}

                       
                         {((frequenciaLuzNatural === "menosMetade") || (frequenciaLuzNatural === "maisMetade") || (frequenciaLuzNatural === "todosDias")) ? 
                         <IonItem lines="none">
                            <IonLabel className="questions">Seus horários de se expor à luz foram diferentes em dias de trabalho comparados a dias livres (ou em dias de semana comparados a fins de semana)?</IonLabel>
                                    </IonItem>:null}
                                    {((frequenciaLuzNatural === "menosMetade") || (frequenciaLuzNatural === "maisMetade") || (frequenciaLuzNatural === "todosDias")) ?
                                    <IonItem lines="none" className={"ion-no-padding"}>
                            <Controller render={({onChange}) => (
                            <IonRadioGroup value={horarioLuzNatural} onIonChange={(e) => { setHorarioLuzNatural(e.detail.value);
                                onChange(e.detail.value);
                                if (e.detail.value != undefined) {
                                    props.setState('lightWDFDYDFinal', e.detail.value )}} }>

                                <IonItem lines="none">
                                <IonLabel>Sim</IonLabel>
                                <IonRadio slot="start" className={"radio-options"} color="primary" value="sim"></IonRadio>
                                </IonItem>
                               
                                <IonItem lines="none">
                                <IonLabel>Não</IonLabel>
                                <IonRadio slot="start" className={"radio-options"} color="primary" value="não"></IonRadio>
                                </IonItem>
                               
                            </IonRadioGroup> )} control={control} name={"lightWDFDYDFinal"} rules={{required:true}}/>
                            {errors.lightWDFDYDFinal&& <IonText color="danger">Campo obrigatório.</IonText>}
                        </IonItem> :null}

                        {/*HORÁRIOS DE LUZ REGULARES -> SIM */}

                        {(((frequenciaLuzNatural === "menosMetade") || (frequenciaLuzNatural === "maisMetade") || (frequenciaLuzNatural === "todosDias")) && (horarioLuzNatural === "sim")) ? 
                        <IonItem lines="none">
                             <IonLabel className="questions">Nas últimas duas semanas, em que horário, em média, você se expôs à luz natural, nos dias trabalho ou de semana?</IonLabel>
                             </IonItem>:null}
                             {(((frequenciaLuzNatural === "menosMetade") || (frequenciaLuzNatural === "maisMetade") || (frequenciaLuzNatural === "todosDias")) && (horarioLuzNatural === "sim")) ? 
                             <IonItem lines="none">
                             <Controller render={({onChange}) => (
                             <IonDatetime placeholder="Por favor, selecione..." display-format="HH:mm " picker-format="HH:mm" minuteValues="0,5,10,15,20,25,30,35,40,45,50,55" onIonChange={(e)=> {
                                console.log(e);
                                onChange(e.detail.value);
                                if (e.detail.value != undefined) {
                                props.setState('lightTimingFinal', e.detail.value )}} }></IonDatetime> )} control={control} name={"lightTimingFinal"} rules={{required:true}}/>
                               {errors.lightTimingFinal && <IonText color="danger">Campo obrigatório.</IonText>}
                         </IonItem>:null}

                         {(((frequenciaLuzNatural === "menosMetade") || (frequenciaLuzNatural === "maisMetade") || (frequenciaLuzNatural === "todosDias")) && (horarioLuzNatural === "sim")) ?
                         <IonItem lines="none">
                             <IonLabel className="questions">Nas últimas duas semanas, em que horário, em média, você se expôs à luz natural, nos dias livres ou fins de semana?</IonLabel>
                             </IonItem>:null}
                             {(((frequenciaLuzNatural === "menosMetade") || (frequenciaLuzNatural === "maisMetade") || (frequenciaLuzNatural === "todosDias")) && (horarioLuzNatural === "sim")) ?
                             <IonItem lines="none">
                             <Controller render={({onChange}) => (
                             <IonDatetime placeholder="Por favor, selecione..." display-format="HH:mm " picker-format="HH:mm" minuteValues="0,5,10,15,20,25,30,35,40,45,50,55" onIonChange={(e)=> {
                                console.log(e);
                                onChange(e.detail.value);
                                if (e.detail.value != undefined) {
                                props.setState('lightTimingWDFinal', e.detail.value )}} }></IonDatetime> )} control={control} name={"lightTimingWDFinal"} rules={{required:true}}/>
                                {errors.lightTimingWDFinal && <IonText color="danger">Campo obrigatório.</IonText>}
                         </IonItem>:null}
                        {/*HORÁRIOS DE LUZ REGULARES -> NÃO */}

                        {(((frequenciaLuzNatural === "menosMetade") || (frequenciaLuzNatural === "maisMetade") || (frequenciaLuzNatural === "todosDias")) && (horarioLuzNatural === "não")) ?
                        <IonItem lines="none">
                             <IonLabel className="questions">Em que horário, em média, você se expôs à luz natural, nas últimas duas semanas?</IonLabel>
                             </IonItem>:null}
                             {(((frequenciaLuzNatural === "menosMetade") || (frequenciaLuzNatural === "maisMetade") || (frequenciaLuzNatural === "todosDias")) && (horarioLuzNatural === "não")) ?
                             <IonItem lines="none">
                             <Controller render={({onChange}) => (
                             <IonDatetime placeholder="Por favor, selecione..." display-format="HH:mm " picker-format="HH:mm" minuteValues="0,5,10,15,20,25,30,35,40,45,50,55" onIonChange={(e)=> {
                                console.log(e);
                                onChange(e.detail.value);
                                if (e.detail.value != undefined) {
                                props.setState('lightTimingFDFinal', e.detail.value )}} }></IonDatetime> )} control={control} name={"lightTimingFDFinal"} rules={{required:true}}/>
                                 {errors.lightTimingFDFinal && <IonText color="danger">Campo obrigatório.</IonText>}
                         </IonItem> :null}
                      

                              
                        <IonLabel className="questions">Marque aquela que melhor descreve a maneira como você se sentiu nas últimas duas semanas.</IonLabel>
                        <IonItem lines="none">
                        
                        <Controller render={({onChange}) => (
                        <IonSelect interfaceOptions={options} className={"select-interface-option"} okText="ok" cancelText="Cancelar" placeholder="Por favor, selecione..." id={""} onIonChange={(e)=> {
                            console.log(e);
                            onChange(e.detail.value);
                            if (e.detail.value != undefined) {
                            props.setState('beck02Final', e.detail.value )} }}>
                        <IonSelectOption value="A1">Não estou especialmente desanimado com o futuro.</IonSelectOption>
                        <IonSelectOption value="A2">Eu me sinto desanimado quanto ao futuro.</IonSelectOption>
                        <IonSelectOption value="A3">Acho que nada tenho a esperar.</IonSelectOption>
                        <IonSelectOption value="A4">Acho o futuro sem esperança e tenho a impressão de que as coisas não podem melhorar.</IonSelectOption>
                        </IonSelect> )} control={control} name={"beck02Final"} rules={{required:true}}/>
                        {errors.beck02Final && <IonText color="danger">Campo obrigatório.</IonText>}
                        </IonItem>
               
                        <div id="progress-bar-div" >
                            <IonProgressBar className={"progress-bar"} value={1.0} color="orange"></IonProgressBar>
                        </div>

                <IonButton onClick={props.prev} className="btnAnterior" size="default" shape="round" fill="outline">Anterior</IonButton>
                <IonButton disabled={formState.isValid === false} onClick={onSubmit} size="default" shape="round" className={"btnProximo"} fill="outline">Submeter</IonButton>
                   
                   </div>
                </form>
                
            </div>
            </IonContent>
        )

}

export default HabitosFinal4;