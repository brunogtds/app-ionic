import React, { FormEvent } from "react";
import {StepComponentProps} from "react-step-builder";

import { Steps, Step } from "react-step-builder";

import { IonApp,
    IonItem,
    IonLabel,
    IonInput,
    IonRadioGroup,
    IonListHeader,
    IonRadio,
    IonSelect,
    IonSelectOption,
    IonRange,
    IonButton,
    IonCard,
    IonCardTitle,
    IonCardContent,
    IonCheckbox,
    IonList,
    IonDatetime,
    IonSlides,
    IonSlide,
    IonNote,
    IonItemDivider
    
  } from "@ionic/react";
  import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';

  import './Forms.css';

import { useForm, Controller } from "react-hook-form";

import {useState, ChangeEvent} from 'react';
import { setConstantValue } from "typescript";

import { IonProgressBar} from '@ionic/react';

import { object, string, number } from 'yup';

const Step7 = (props: StepComponentProps) => {

    const {control, watch, handleSubmit} = useForm();
 
    return(
        <IonContent fullscreen> 
        <div>
            <form className={"ion-padding"}>

                 <IonProgressBar value={0.7} buffer={0.1}></IonProgressBar>
            
            <IonItem>
                <IonLabel>Agora vamos falar sobre como você tem se sentido nas duas últimas semanas.</IonLabel>
            </IonItem>
            
            <IonItem>

 
                <IonLabel>Nas últimas duas semanas, quantos dias você teve pouco interesse ou pouco prazer em fazer as coisas?</IonLabel>
                <Controller render={({onChange}) => (
                <IonRadioGroup onIonChange={(e)=> {
                    console.log(e);
                    onChange(e.detail.value) }}>

                                <IonItem>
                                <IonLabel>Nenhum dia</IonLabel>
                                <IonRadio color="primary" value="nenhum dia"></IonRadio>
                                </IonItem>
                               
                                <IonItem>
                                <IonLabel>Menos de uma semana</IonLabel>
                                <IonRadio color="primary" value="menos de uma semana"></IonRadio>
                                </IonItem>

                                <IonItem>
                                <IonLabel>Uma semana ou mais</IonLabel>
                                <IonRadio color="primary" value="uma semana ou mais"></IonRadio>
                                </IonItem>
                               
                                <IonItem>
                                <IonLabel>Quase todos os dias</IonLabel>
                                <IonRadio color="primary" value= "quase todos os dias"></IonRadio>
                                </IonItem>
                               
                </IonRadioGroup> )} control={control} name="1Question"/>
            </IonItem>

            <IonItem>

 
            <IonLabel>Nas últimas duas semanas, quantos dias você se sentiu para baixo, deprimido(a) ou sem perspectiva?</IonLabel>
            <Controller render={({onChange}) => (
            <IonRadioGroup onIonChange={(e)=> {
                console.log(e);
                onChange(e.detail.value) }}>

                            <IonItem>
                            <IonLabel>Nenhum dia</IonLabel>
                            <IonRadio color="primary" value="nenhum dia"></IonRadio>
                            </IonItem>
                        
                            <IonItem>
                            <IonLabel>Menos de uma semana</IonLabel>
                            <IonRadio color="primary" value="menos de uma semana"></IonRadio>
                            </IonItem>

                            <IonItem>
                            <IonLabel>Uma semana ou mais</IonLabel>
                            <IonRadio color="primary" value="uma semana ou mais"></IonRadio>
                            </IonItem>
                        
                            <IonItem>
                            <IonLabel>Quase todos os dias</IonLabel>
                            <IonRadio color="primary" value= "quase todos os dias"></IonRadio>
                            </IonItem>
                        
            </IonRadioGroup> )} control={control} name="2Question"/>
            </IonItem>

            <IonItem>

            <IonLabel>Nas últimas duas semanas, quantos dias você teve dificuldade para pegar no sono ou permanecer dormindo ou dormiu mais do que de costume?</IonLabel>
            <Controller render={({onChange}) => (
            <IonRadioGroup onIonChange={(e)=> {
                console.log(e);
                onChange(e.detail.value) }}>

                            <IonItem>
                            <IonLabel>Nenhum dia</IonLabel>
                            <IonRadio color="primary" value="nenhum dia"></IonRadio>
                            </IonItem>
                        
                            <IonItem>
                            <IonLabel>Menos de uma semana</IonLabel>
                            <IonRadio color="primary" value="menos de uma semana"></IonRadio>
                            </IonItem>

                            <IonItem>
                            <IonLabel>Uma semana ou mais</IonLabel>
                            <IonRadio color="primary" value="uma semana ou mais"></IonRadio>
                            </IonItem>
                        
                            <IonItem>
                            <IonLabel>Quase todos os dias</IonLabel>
                            <IonRadio color="primary" value= "quase todos os dias"></IonRadio>
                            </IonItem>
                        
            </IonRadioGroup> )} control={control} name="3Question"/>
            </IonItem>

            <IonItem>

            <IonLabel>Nas últimas duas semanas, quantos dias você se sentiu cansado(a) ou com pouca energia?</IonLabel>
            <Controller render={({onChange}) => (
            <IonRadioGroup onIonChange={(e)=> {
                console.log(e);
                onChange(e.detail.value) }}>

                            <IonItem>
                            <IonLabel>Nenhum dia</IonLabel>
                            <IonRadio color="primary" value="nenhum dia"></IonRadio>
                            </IonItem>
                        
                            <IonItem>
                            <IonLabel>Menos de uma semana</IonLabel>
                            <IonRadio color="primary" value="menos de uma semana"></IonRadio>
                            </IonItem>

                            <IonItem>
                            <IonLabel>Uma semana ou mais</IonLabel>
                            <IonRadio color="primary" value="uma semana ou mais"></IonRadio>
                            </IonItem>
                        
                            <IonItem>
                            <IonLabel>Quase todos os dias</IonLabel>
                            <IonRadio color="primary" value= "quase todos os dias"></IonRadio>
                            </IonItem>
                        
            </IonRadioGroup> )} control={control} name="4Question"/>
            </IonItem>
                
            <IonItem>

            <IonLabel> Nas últimas duas semanas, quantos dias você teve falta de apetite ou comeu demais?</IonLabel>
            <Controller render={({onChange}) => (
            <IonRadioGroup onIonChange={(e)=> {
                console.log(e);
                onChange(e.detail.value) }}>

                            <IonItem>
                            <IonLabel>Nenhum dia</IonLabel>
                            <IonRadio color="primary" value="nenhum dia"></IonRadio>
                            </IonItem>
                        
                            <IonItem>
                            <IonLabel>Menos de uma semana</IonLabel>
                            <IonRadio color="primary" value="menos de uma semana"></IonRadio>
                            </IonItem>

                            <IonItem>
                            <IonLabel>Uma semana ou mais</IonLabel>
                            <IonRadio color="primary" value="uma semana ou mais"></IonRadio>
                            </IonItem>
                        
                            <IonItem>
                            <IonLabel>Quase todos os dias</IonLabel>
                            <IonRadio color="primary" value= "quase todos os dias"></IonRadio>
                            </IonItem>
                        
            </IonRadioGroup> )} control={control} name="5Question"/>
            </IonItem>
                
            <IonItem>

            <IonLabel> Nas últimas duas semanas, quantos dias você se sentiu mal consigo mesmo(a) ou achou que é um fracasso ou que decepcionou sua família ou a você mesmo(a)?</IonLabel>
            <Controller render={({onChange}) => (
            <IonRadioGroup onIonChange={(e)=> {
                console.log(e);
                onChange(e.detail.value) }}>

                            <IonItem>
                            <IonLabel>Nenhum dia</IonLabel>
                            <IonRadio color="primary" value="nenhum dia"></IonRadio>
                            </IonItem>
                        
                            <IonItem>
                            <IonLabel>Menos de uma semana</IonLabel>
                            <IonRadio color="primary" value="menos de uma semana"></IonRadio>
                            </IonItem>

                            <IonItem>
                            <IonLabel>Uma semana ou mais</IonLabel>
                            <IonRadio color="primary" value="uma semana ou mais"></IonRadio>
                            </IonItem>
                        
                            <IonItem>
                            <IonLabel>Quase todos os dias</IonLabel>
                            <IonRadio color="primary" value= "quase todos os dias"></IonRadio>
                            </IonItem>
                        
            </IonRadioGroup> )} control={control} name="6Question"/>
            </IonItem>

            <IonItem>

            <IonLabel> Nas últimas duas semanas, quantos dias você teve dificuldade para se concentrar nas coisas (como ler o jornal ou ver televisão)?</IonLabel>
            <Controller render={({onChange}) => (
            <IonRadioGroup onIonChange={(e)=> {
                console.log(e);
                onChange(e.detail.value) }}>

                            <IonItem>
                            <IonLabel>Nenhum dia</IonLabel>
                            <IonRadio color="primary" value="nenhum dia"></IonRadio>
                            </IonItem>
                        
                            <IonItem>
                            <IonLabel>Menos de uma semana</IonLabel>
                            <IonRadio color="primary" value="menos de uma semana"></IonRadio>
                            </IonItem>

                            <IonItem>
                            <IonLabel>Uma semana ou mais</IonLabel>
                            <IonRadio color="primary" value="uma semana ou mais"></IonRadio>
                            </IonItem>
                        
                            <IonItem>
                            <IonLabel>Quase todos os dias</IonLabel>
                            <IonRadio color="primary" value= "quase todos os dias"></IonRadio>
                            </IonItem>
                        
            </IonRadioGroup> )} control={control} name="7Question"/>
            </IonItem>

            <IonItem>

            <IonLabel>Nas últimas duas semanas, quantos dias você teve lentidão para se movimentar ou falar (a ponto das outras pessoas perceberem), ou ao contrário, esteve tão agitado(a) que você ficava andando de um lado para o outro mais do que de costume?</IonLabel>
            <Controller render={({onChange}) => (
            <IonRadioGroup onIonChange={(e)=> {
                console.log(e);
                onChange(e.detail.value) }}>

                            <IonItem>
                            <IonLabel>Nenhum dia</IonLabel>
                            <IonRadio color="primary" value="nenhum dia"></IonRadio>
                            </IonItem>
                        
                            <IonItem>
                            <IonLabel>Menos de uma semana</IonLabel>
                            <IonRadio color="primary" value="menos de uma semana"></IonRadio>
                            </IonItem>

                            <IonItem>
                            <IonLabel>Uma semana ou mais</IonLabel>
                            <IonRadio color="primary" value="uma semana ou mais"></IonRadio>
                            </IonItem>
                        
                            <IonItem>
                            <IonLabel>Quase todos os dias</IonLabel>
                            <IonRadio color="primary" value= "quase todos os dias"></IonRadio>
                            </IonItem>
                        
            </IonRadioGroup> )} control={control} name="8Question"/>
            </IonItem>

            <IonItem>

            <IonLabel>Nas últimas duas semanas, quantos dias você pensou em se ferir de alguma maneira ou que seria melhor estar morto(a)?</IonLabel>
            <Controller render={({onChange}) => (
            <IonRadioGroup onIonChange={(e)=> {
                console.log(e);
                onChange(e.detail.value) }}>

                            <IonItem>
                            <IonLabel>Nenhum dia</IonLabel>
                            <IonRadio color="primary" value="nenhum dia"></IonRadio>
                            </IonItem>
                        
                            <IonItem>
                            <IonLabel>Menos de uma semana</IonLabel>
                            <IonRadio color="primary" value="menos de uma semana"></IonRadio>
                            </IonItem>

                            <IonItem>
                            <IonLabel>Uma semana ou mais</IonLabel>
                            <IonRadio color="primary" value="uma semana ou mais"></IonRadio>
                            </IonItem>
                        
                            <IonItem>
                            <IonLabel>Quase todos os dias</IonLabel>
                            <IonRadio color="primary" value= "quase todos os dias"></IonRadio>
                            </IonItem>
                        
            </IonRadioGroup> )} control={control} name="9Question"/>
            </IonItem>

            <IonItem>

            <IonLabel>Considerando as últimas duas semanas, os sintomas anteriores lhe causaram algum tipo de dificuldade para trabalhar ou estudar ou tomar conta das coisas em casa ou para se relacionar com as pessoas?</IonLabel>
            <Controller render={({onChange}) => (
            <IonRadioGroup onIonChange={(e)=> {
                console.log(e);
                onChange(e.detail.value) }}>

                            <IonItem>
                            <IonLabel>Nenhuma dificuldade</IonLabel>
                            <IonRadio color="primary" value="nenhum dia"></IonRadio>
                            </IonItem>
                        
                            <IonItem>
                            <IonLabel>Pouca dificuldade</IonLabel>
                            <IonRadio color="primary" value="menos de uma semana"></IonRadio>
                            </IonItem>

                            <IonItem>
                            <IonLabel>Muita dificuldade</IonLabel>
                            <IonRadio color="primary" value="uma semana ou mais"></IonRadio>
                            </IonItem>
                        
                            <IonItem>
                            <IonLabel>Extrema dificuldade</IonLabel>
                            <IonRadio color="primary" value= "quase todos os dias"></IonRadio>
                            </IonItem>
                        
            </IonRadioGroup> )} control={control} name="10Question"/>
            </IonItem>

            <IonButton disabled={props.isFirst()}onClick={props.prev}>Anterior</IonButton>
            <IonButton onClick={props.next}>Próximo</IonButton>
            </form>

        </div>

        </IonContent>
    )
}

export default Step7; 