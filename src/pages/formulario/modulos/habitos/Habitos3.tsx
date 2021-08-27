import React from "react";
import {StepComponentProps} from "react-step-builder";

import {IonItem, IonLabel, IonInput, IonRadioGroup, IonRadio, IonSelect, IonSelectOption, IonButton, IonCheckbox, IonList, IonDatetime} from "@ionic/react";
import { IonContent, IonText} from '@ionic/react';
 
import '../../Forms.css';

import { useForm, Controller } from "react-hook-form";
import {useState} from 'react';

import { IonProgressBar} from '@ionic/react';

const Habitos3 = (props: StepComponentProps) => {

    const options = {
        cssClass: 'my-custom-interface'
      };

    const {control, watch, handleSubmit, errors, formState} = useForm({mode: "onChange"});
    
    const [atividadeFisica, setAtividadeFisica]= useState();
    const [horarioAtividadeFisica, setHorarioAtividadeFisica]= useState();
 

        return (
            <IonContent fullscreen color="background">
                            
            <div className="ion-text-wrap">
               
                <form className="ion-padding texto-default">

                <div className="ion-text-wrap">
               


                <IonLabel className="questions">Com que frequência você praticou hobbies nas duas últimas semanas?</IonLabel>
                        <IonItem lines="none">
                           
                            <Controller render={({onChange}) => (
                            <IonSelect interfaceOptions={options} className={"select-interface-option"} okText="ok" cancelText="Cancelar" placeholder="Por favor, selecione..."  onIonChange={(e)=> {
                                console.log(e);
                                onChange(e.detail.value);
                                if (e.detail.value != undefined) {
                                props.setState('hobbiesFreq', e.detail.value )} }}>
                            <IonSelectOption value="nenhuma vez">Nenhuma vez</IonSelectOption>
                            <IonSelectOption value="em menos da metade dos dias">Em menos da metade dos dias</IonSelectOption>
                            <IonSelectOption value="em mais da metade dos dias">Em mais da metade dos dias</IonSelectOption>
                            <IonSelectOption value="todos os dias">Todos os dias</IonSelectOption>
                            </IonSelect> )} control={control} name={"hobbiesFreq"} rules={{required:true}}/>
                            {errors.hobbiesFreq && <IonText color="danger">Campo obrigatório.</IonText>}
                         </IonItem>

                         <IonLabel className="questions">Você praticou atividade física nas duas últimas semanas?</IonLabel>
                         <IonList>
                         
                         <IonItem lines="none" className={"ion-no-padding"}>
                            

                            <Controller render={({onChange}) => (
                            
                            <IonRadioGroup value={atividadeFisica} onIonChange={(e) => {setAtividadeFisica(e.detail.value); 
                                onChange(e.detail.value);
                                if (e.detail.value != undefined) {
                                props.setState('exercise', e.detail.value )}}}>

                                <IonItem lines="none" className={"ion-no-padding"}>
                                <IonLabel>Sim</IonLabel>
                                <IonRadio slot="start" className={"radio-options"} color="primary" value="sim" ></IonRadio>
                                </IonItem>
                               
                                <IonItem lines="none" className={"ion-no-padding"}>
                                <IonLabel>Não</IonLabel>
                                <IonRadio slot="start" className={"radio-options"} color="primary" value="não"></IonRadio>
                                </IonItem>
                               
                            </IonRadioGroup> )} control={control} name={"exercise"} rules={{required:true}}/>
                            {errors.exercise && <IonText color="danger">Campo obrigatório.</IonText>}
                        </IonItem> 


                        {/*ATIVIDADE FÍSICA -> SIM */}

                        {atividadeFisica == "sim" ? 
                        <IonItem lines="none">
                            <IonLabel className="questions">Com que frequência você praticou exercícios?</IonLabel>
                            </IonItem> :null}
                            {atividadeFisica == "sim" ? 
                            <IonItem lines="none" >
                            <Controller render={({onChange}) => (
                            <IonSelect interfaceOptions={options} className={"select-interface-option"} okText="ok" cancelText="Cancelar" placeholder="Por favor, selecione..." onIonChange={(e)=> {
                                console.log(e);
                                onChange(e.detail.value);
                                if (e.detail.value != undefined) {
                                props.setState('exerciseFreq', e.detail.value )} }}>
                            <IonSelectOption value="menos de 1 vez por semana">menos de 1 vezes por semana</IonSelectOption>
                            <IonSelectOption value="1 vez por semana">1 vez por semana</IonSelectOption>
                            <IonSelectOption value="2 vezes por semana">2 vezes por semana</IonSelectOption>
                            <IonSelectOption value="3 vezes por semana">3 vezes por semana</IonSelectOption>
                            <IonSelectOption value="4 vezes por semana">4 vezes por semana</IonSelectOption>
                            <IonSelectOption value="5 vezes por semana">5 vezes por semana</IonSelectOption>
                            <IonSelectOption value="6 vezes por semana">6 vezes por semana</IonSelectOption>
                            <IonSelectOption value="7 vezes por semana">7 vezes por semana</IonSelectOption>
                            
                            </IonSelect> )} control={control} name={"exerciseFreq"} rules={{required:true}}/>
                            {errors.exerciseFreq && <IonText color="danger">Campo obrigatório.</IonText>}
                         </IonItem>:null }

                         {atividadeFisica === "sim" ?
                         <IonItem lines="none">
                            <IonLabel className="questions">Quão regulares, nas últimas duas semanas, foram os horários que praticou exercício?</IonLabel>
                            </IonItem> :null}
                            {atividadeFisica == "sim" ? 
                            <IonItem lines="none">
                            <Controller render={({onChange}) => (
                            <IonSelect interfaceOptions={options} className={"select-interface-option"} okText="ok" cancelText="Cancelar" placeholder="Por favor, selecione..." value={horarioAtividadeFisica} onIonChange={(e) => {setHorarioAtividadeFisica(e.detail.value);
                                onChange(e.detail.value);
                                if (e.detail.value != undefined) {
                                props.setState('exerciseReg', e.detail.value )}}}>
                            <IonSelectOption value="muitoIrregulares">Muito irregulares</IonSelectOption>
                            <IonSelectOption value="irregulares">Irregulares</IonSelectOption>
                            <IonSelectOption value="regulares">Regulares</IonSelectOption>
                            <IonSelectOption value="muitoRegulares">Muito regulares</IonSelectOption>
                            </IonSelect> )} control={control} name={"exerciseReg"} rules={{required:true}}/>
                            {errors.exerciseReg && <IonText color="danger">Campo obrigatório.</IonText>}
                          </IonItem>:null }

                        {atividadeFisica === "sim" ? 
                         <IonItem lines="none">
                            <IonLabel className="questions">Qual foi, nas últimas duas semanas, a duração da sua atividade física em média?</IonLabel>
                            </IonItem> :null}
                            {atividadeFisica == "sim" ? 
                            <IonItem lines="none">
                            <Controller render={({onChange}) => (
                            <IonSelect interfaceOptions={options} className={"select-interface-option"} okText="ok" cancelText="Cancelar" placeholder="Por favor, selecione..." onIonChange={(e)=> {
                                console.log(e);
                                onChange(e.detail.value);
                                if (e.detail.value != undefined) {
                                props.setState('exerciseDur', e.detail.value )} }}>
                            <IonSelectOption value="menos de 1 hora">Menos de 1 hora</IonSelectOption>
                            <IonSelectOption value="1 hora">1 hora</IonSelectOption>
                            <IonSelectOption value="entre 1 e 2 horas">Entre 1 e 2 horas</IonSelectOption>
                            <IonSelectOption value="mais de 2 horas">Mais de 2 horas</IonSelectOption>
                            </IonSelect> )} control={control} name={"exerciseDur"} rules={{required:true}} />
                            {errors.exerciseDur && <IonText color="danger">Campo obrigatório.</IonText>}
                         </IonItem>:null }
                         </IonList>

                         {/*ATIVIDADE FÍSICA REGULAR -> */}

                         {((atividadeFisica === "sim") && ((horarioAtividadeFisica === "regulares") || (horarioAtividadeFisica === "muitoRegulares")) )? 

                         <IonItem lines="none">
                             <IonLabel className="questions">Em que horário, em média, nas últimas duas semanas, você começou a praticar exercícios?</IonLabel>
                             </IonItem> :null}
                            {((atividadeFisica === "sim") && ((horarioAtividadeFisica === "regulares") || (horarioAtividadeFisica === "muitoRegulares")) )?  
                            <IonItem lines="none">
                             <Controller render={({onChange}) => (
                             <IonDatetime placeholder="Por favor, selecione..." display-format="HH:mm " picker-format="HH:mm" minuteValues="0,5,10,15,20,25,30,35,40,45,50,55" onIonChange={(e)=> {
                                console.log(e);
                                onChange(e.detail.value);
                                if (e.detail.value != undefined) {
                                props.setState('exerciseTiming', e.detail.value )} }}></IonDatetime> )} control={control} name={"exerciseTiming"} rules={{required:true}} />
                                {errors.exerciseTiming && <IonText color="danger">Campo obrigatório.</IonText>}
                                
                                
                                
                         </IonItem> :null}

                         <div id="progress-bar-div" >
                            <IonProgressBar className={"progress-bar"} value={0.75} color="orange"></IonProgressBar>
                        </div>
                                        

                <IonButton onClick={props.prev} className="btnAnterior" size="default" shape="round" fill="outline">Anterior</IonButton>
                <IonButton disabled={formState.isValid === false}  onClick={props.next} size="default" shape="round" className={"btnProximo"} fill="outline">Próximo</IonButton>
                   
                   </div>
                </form>
                
            </div>
            </IonContent>
        )

}

export default Habitos3;