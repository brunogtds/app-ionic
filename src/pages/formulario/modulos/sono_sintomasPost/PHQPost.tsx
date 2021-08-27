import React from "react";
import {StepComponentProps} from "react-step-builder";

import {IonItem, IonLabel, IonRadioGroup, IonRadio, IonButton, IonLoading, IonText} from "@ionic/react";
import { IonContent} from '@ionic/react';

import '../../Forms.css';

import { useForm, Controller } from "react-hook-form";

import { IonProgressBar} from '@ionic/react';

import {useState} from 'react';

import  {Redirect, useHistory } from 'react-router-dom'
import {toast} from '../../../../toast';

//imports user context do reactfire

import {useUser} from 'reactfire';
import firebase from 'firebase';




const PHQPost = (props: StepComponentProps) => {

    const {control, watch, handleSubmit, errors, formState} = useForm({mode: "onChange"});

    const {data: user}= useUser();
   const [dataUser, setData] = useState()

   const history= useHistory();
   const [loader, setLoader]= useState<boolean>(false)

  
 
    return(
        <IonContent fullscreen color="background"> 
         
        <div>
            <form className={"ion-padding texto-default"}>
            <IonLoading message="Por favor aguarde..." duration={2000} isOpen={loader}/>

          
            <IonLabel className="questions">Nas últimas duas semanas, quantos dias você teve pouco interesse ou pouco prazer em fazer as coisas?</IonLabel>
            <IonItem lines="none" className={"ion-no-padding"}>

 
                
                <Controller render={({onChange}) => (
                <IonRadioGroup onIonChange={(e)=> {
                    console.log(e);
                    onChange(e.detail.value); 
                    if (e.detail.value != undefined) {
                    props.setState('phq01Post14', e.detail.value )}}}>

                                <IonItem lines="none" className={"ion-no-padding"}>
                                <IonLabel>Nenhum dia</IonLabel>
                                <IonRadio slot="start" className={"radio-options"} color="primary" value="0"></IonRadio>
                                </IonItem>
                               
                                <IonItem lines="none" className={"ion-no-padding"}>
                                <IonLabel>Menos de uma semana</IonLabel>
                                <IonRadio slot="start" className={"radio-options"} color="primary" value="1"></IonRadio>
                                </IonItem>

                                <IonItem lines="none" className={"ion-no-padding"}>
                                <IonLabel>Uma semana ou mais</IonLabel>
                                <IonRadio slot="start" className={"radio-options"} color="primary" value="2"></IonRadio>
                                </IonItem>
                               
                                <IonItem lines="none" className={"ion-no-padding"}>
                                <IonLabel>Quase todos os dias</IonLabel>
                                <IonRadio slot="start" className={"radio-options"} color="primary" value= "3"></IonRadio>
                                </IonItem>
                               
                </IonRadioGroup> )} control={control} name='phq01Post14' rules={{required:true}}/>
                {errors.phq01Post14 && <IonText color="danger">Campo obrigatório.</IonText>}
            </IonItem>

            <IonLabel className="questions">Nas últimas duas semanas, quantos dias você se sentiu para baixo, deprimido(a) ou sem perspectiva?</IonLabel>
            <IonItem lines="none" className={"ion-no-padding"}>

 
            
            <Controller render={({onChange}) => (
           <IonRadioGroup onIonChange={(e)=> {
                    console.log(e);
                    onChange(e.detail.value); 
                    if (e.detail.value != undefined) {
                    props.setState('phq02Post14', e.detail.value )}}}>

                                <IonItem lines="none" className={"ion-no-padding"}>
                                <IonLabel>Nenhum dia</IonLabel>
                                <IonRadio slot="start" className={"radio-options"} color="primary" value="0"></IonRadio>
                                </IonItem>
                               
                                <IonItem lines="none" className={"ion-no-padding"}>
                                <IonLabel>Menos de uma semana</IonLabel>
                                <IonRadio slot="start" className={"radio-options"} color="primary" value="1"></IonRadio>
                                </IonItem>

                                <IonItem lines="none" className={"ion-no-padding"}>
                                <IonLabel>Uma semana ou mais</IonLabel>
                                <IonRadio slot="start" className={"radio-options"} color="primary" value="2"></IonRadio>
                                </IonItem>
                               
                                <IonItem lines="none" className={"ion-no-padding"}>
                                <IonLabel>Quase todos os dias</IonLabel>
                                <IonRadio slot="start" className={"radio-options"} color="primary" value= "3"></IonRadio>
                                </IonItem>
                               
                </IonRadioGroup> )} control={control} name='phq02Post14' rules={{required:true}}/>
                {errors.phq02Post14 && <IonText color="danger">Campo obrigatório.</IonText>}
            </IonItem>


            <IonLabel className="questions">Nas últimas duas semanas, quantos dias você teve dificuldade para pegar no sono ou permanecer dormindo ou dormiu mais do que de costume?</IonLabel>
            <IonItem lines="none" className={"ion-no-padding"}>

            
            <Controller render={({onChange}) => (
           <IonRadioGroup  onIonChange={(e)=> {
                    console.log(e);
                    onChange(e.detail.value); 
                    if (e.detail.value != undefined) {
                    props.setState('phq03Post14', e.detail.value )}}}>

                                <IonItem lines="none" className={"ion-no-padding"}>
                                <IonLabel>Nenhum dia</IonLabel>
                                <IonRadio slot="start" className={"radio-options"} color="primary" value="0"></IonRadio>
                                </IonItem>
                               
                                <IonItem lines="none" className={"ion-no-padding"}>
                                <IonLabel>Menos de uma semana</IonLabel>
                                <IonRadio slot="start" className={"radio-options"} color="primary" value="1"></IonRadio>
                                </IonItem>

                                <IonItem lines="none" className={"ion-no-padding"}>
                                <IonLabel>Uma semana ou mais</IonLabel>
                                <IonRadio slot="start" className={"radio-options"} color="primary" value="2"></IonRadio>
                                </IonItem>
                               
                                <IonItem lines="none" className={"ion-no-padding"}>
                                <IonLabel>Quase todos os dias</IonLabel>
                                <IonRadio slot="start" className={"radio-options"} color="primary" value= "3"></IonRadio>
                                </IonItem>
                               
                </IonRadioGroup> )} control={control} name='phq03Post14' rules={{required:true}}/>
                {errors.phq03Post14 && <IonText color="danger">Campo obrigatório.</IonText>}
            </IonItem>

            <IonLabel className="questions">Nas últimas duas semanas, quantos dias você se sentiu cansado(a) ou com pouca energia?</IonLabel>
            <IonItem lines="none" className={"ion-no-padding"}>

           
            <Controller render={({onChange}) => (
           <IonRadioGroup  onIonChange={(e)=> {
                    console.log(e);
                    onChange(e.detail.value); 
                    if (e.detail.value != undefined) {
                    props.setState('phq04Post14', e.detail.value )}}}>

                                <IonItem lines="none" className={"ion-no-padding"}>
                                <IonLabel>Nenhum dia</IonLabel>
                                <IonRadio slot="start" className={"radio-options"} color="primary" value="0"></IonRadio>
                                </IonItem>
                               
                                <IonItem lines="none" className={"ion-no-padding"}>
                                <IonLabel>Menos de uma semana</IonLabel>
                                <IonRadio slot="start" className={"radio-options"} color="primary" value="1"></IonRadio>
                                </IonItem>

                                <IonItem lines="none" className={"ion-no-padding"}>
                                <IonLabel>Uma semana ou mais</IonLabel>
                                <IonRadio slot="start" className={"radio-options"} color="primary" value="2"></IonRadio>
                                </IonItem>
                               
                                <IonItem lines="none" className={"ion-no-padding"}>
                                <IonLabel>Quase todos os dias</IonLabel>
                                <IonRadio slot="start" className={"radio-options"} color="primary" value= "3"></IonRadio>
                                </IonItem>
                               
                </IonRadioGroup> )} control={control} name='phq04Post14' rules={{required:true}}/>
                {errors.phq04Post14 && <IonText color="danger">Campo obrigatório.</IonText>}
            </IonItem>
                
            <IonLabel className="questions"> Nas últimas duas semanas, quantos dias você teve falta de apetite ou comeu demais?</IonLabel>
            <IonItem lines="none" className={"ion-no-padding"}>

            
            <Controller render={({onChange}) => (
           <IonRadioGroup onIonChange={(e)=> {
                    console.log(e);
                    onChange(e.detail.value); 
                    if (e.detail.value != undefined) {
                    props.setState('phq05Post14', e.detail.value )}}}>

                                <IonItem lines="none" className={"ion-no-padding"}>
                                <IonLabel>Nenhum dia</IonLabel>
                                <IonRadio slot="start" className={"radio-options"} color="primary" value="0"></IonRadio>
                                </IonItem>
                               
                                <IonItem lines="none" className={"ion-no-padding"}>
                                <IonLabel>Menos de uma semana</IonLabel>
                                <IonRadio slot="start" className={"radio-options"} color="primary" value="1"></IonRadio>
                                </IonItem>

                                <IonItem lines="none" className={"ion-no-padding"}>
                                <IonLabel>Uma semana ou mais</IonLabel>
                                <IonRadio slot="start" className={"radio-options"} color="primary" value="2"></IonRadio>
                                </IonItem>
                               
                                <IonItem lines="none" className={"ion-no-padding"}>
                                <IonLabel>Quase todos os dias</IonLabel>
                                <IonRadio slot="start" className={"radio-options"} color="primary" value= "3"></IonRadio>
                                </IonItem>
                               
                </IonRadioGroup> )} control={control} name='phq05Post14' rules={{required:true}}/>
                {errors.phq05Post14 && <IonText color="danger">Campo obrigatório.</IonText>}
            </IonItem>
                
            <IonLabel className="questions"> Nas últimas duas semanas, quantos dias você se sentiu mal consigo mesmo(a) ou achou que é um fracasso ou que decepcionou sua família ou a você mesmo(a)?</IonLabel>
            <IonItem lines="none" className={"ion-no-padding"}>

            
            <Controller render={({onChange}) => (
           <IonRadioGroup onIonChange={(e)=> {
                    console.log(e);
                    onChange(e.detail.value); 
                    if (e.detail.value != undefined) {
                    props.setState('phq06Post14', e.detail.value )}}}>

                                <IonItem lines="none" className={"ion-no-padding"}>
                                <IonLabel>Nenhum dia</IonLabel>
                                <IonRadio slot="start" className={"radio-options"} color="primary" value="0"></IonRadio>
                                </IonItem>
                               
                                <IonItem lines="none" className={"ion-no-padding"}>
                                <IonLabel>Menos de uma semana</IonLabel>
                                <IonRadio slot="start" className={"radio-options"} color="primary" value="1"></IonRadio>
                                </IonItem>

                                <IonItem lines="none" className={"ion-no-padding"}>
                                <IonLabel>Uma semana ou mais</IonLabel>
                                <IonRadio slot="start" className={"radio-options"} color="primary" value="2"></IonRadio>
                                </IonItem>
                               
                                <IonItem lines="none" className={"ion-no-padding"}>
                                <IonLabel>Quase todos os dias</IonLabel>
                                <IonRadio slot="start" className={"radio-options"} color="primary" value= "3"></IonRadio>
                                </IonItem>
                               
                </IonRadioGroup> )} control={control} name='phq06Post14' rules={{required:true}}/>
                {errors.phq06Post14 && <IonText color="danger">Campo obrigatório.</IonText>}
            </IonItem>

            <IonLabel className="questions"> Nas últimas duas semanas, quantos dias você teve dificuldade para se concentrar nas coisas (como ler o jornal ou ver televisão)?</IonLabel>
            <IonItem lines="none" className={"ion-no-padding"}>

           
            <Controller render={({onChange}) => (
           <IonRadioGroup onIonChange={(e)=> {
                    console.log(e);
                    onChange(e.detail.value); 
                    if (e.detail.value != undefined) {
                    props.setState('phq07Post14', e.detail.value )}}}>

                                <IonItem lines="none" className={"ion-no-padding"}>
                                <IonLabel>Nenhum dia</IonLabel>
                                <IonRadio slot="start" className={"radio-options"} color="primary" value="0"></IonRadio>
                                </IonItem>
                               
                                <IonItem lines="none" className={"ion-no-padding"}>
                                <IonLabel>Menos de uma semana</IonLabel>
                                <IonRadio slot="start" className={"radio-options"} color="primary" value="1"></IonRadio>
                                </IonItem>

                                <IonItem lines="none" className={"ion-no-padding"}>
                                <IonLabel>Uma semana ou mais</IonLabel>
                                <IonRadio slot="start" className={"radio-options"} color="primary" value="2"></IonRadio>
                                </IonItem>
                               
                                <IonItem lines="none" className={"ion-no-padding"}>
                                <IonLabel>Quase todos os dias</IonLabel>
                                <IonRadio slot="start" className={"radio-options"} color="primary" value= "3"></IonRadio>
                                </IonItem>
                               
                </IonRadioGroup> )} control={control} name='phq07Post14' rules={{required:true}}/>
                {errors.phq07Post14 && <IonText color="danger">Campo obrigatório.</IonText>}
            </IonItem>

            <IonLabel className="questions">Nas últimas duas semanas, quantos dias você teve lentidão para se movimentar ou falar (a ponto das outras pessoas perceberem), ou ao contrário, esteve tão agitado(a) que você ficava andando de um lado para o outro mais do que de costume?</IonLabel>
            <IonItem lines="none" className={"ion-no-padding"}>

            
            <Controller render={({onChange}) => (
           <IonRadioGroup onIonChange={(e)=> {
                    console.log(e);
                    onChange(e.detail.value); 
                    if (e.detail.value != undefined) {
                    props.setState('phq08Post14', e.detail.value )}}}>

                                <IonItem lines="none" className={"ion-no-padding"}>
                                <IonLabel>Nenhum dia</IonLabel>
                                <IonRadio slot="start" className={"radio-options"} color="primary" value="0"></IonRadio>
                                </IonItem>
                               
                                <IonItem lines="none" className={"ion-no-padding"}>
                                <IonLabel>Menos de uma semana</IonLabel>
                                <IonRadio slot="start" className={"radio-options"} color="primary" value="1"></IonRadio>
                                </IonItem>

                                <IonItem lines="none" className={"ion-no-padding"}>
                                <IonLabel>Uma semana ou mais</IonLabel>
                                <IonRadio slot="start" className={"radio-options"} color="primary" value="2"></IonRadio>
                                </IonItem>
                               
                                <IonItem lines="none" className={"ion-no-padding"}>
                                <IonLabel>Quase todos os dias</IonLabel>
                                <IonRadio slot="start" className={"radio-options"} color="primary" value= "3"></IonRadio>
                                </IonItem>
                               
                </IonRadioGroup> )} control={control} name='phq08Post14' rules={{required:true}}/>
                {errors.phq08Post14 && <IonText color="danger">Campo obrigatório.</IonText>}
            </IonItem>

            <IonLabel className="questions">Nas últimas duas semanas, quantos dias você pensou em se ferir de alguma maneira ou que seria melhor estar morto(a)?</IonLabel>
            <IonItem lines="none" className={"ion-no-padding"}>

            
            <Controller render={({onChange}) => (
           <IonRadioGroup onIonChange={(e)=> {
                    console.log(e);
                    onChange(e.detail.value); 
                    if (e.detail.value != undefined) {
                    props.setState('phq09Post14', e.detail.value )}}}>

                                <IonItem lines="none" className={"ion-no-padding"}>
                                <IonLabel>Nenhum dia</IonLabel>
                                <IonRadio slot="start" className={"radio-options"} color="primary" value="0"></IonRadio>
                                </IonItem>
                               
                                <IonItem lines="none" className={"ion-no-padding"}>
                                <IonLabel>Menos de uma semana</IonLabel>
                                <IonRadio slot="start" className={"radio-options"} color="primary" value="1"></IonRadio>
                                </IonItem>

                                <IonItem lines="none" className={"ion-no-padding"}>
                                <IonLabel>Uma semana ou mais</IonLabel>
                                <IonRadio slot="start" className={"radio-options"} color="primary" value="2"></IonRadio>
                                </IonItem>
                               
                                <IonItem lines="none" className={"ion-no-padding"}>
                                <IonLabel>Quase todos os dias</IonLabel>
                                <IonRadio slot="start" className={"radio-options"} color="primary" value= "3"></IonRadio>
                                </IonItem>
                               
                </IonRadioGroup> )} control={control} name='phq09Post14' rules={{required:true}}/>
                {errors.phq09Post14 && <IonText color="danger">Campo obrigatório.</IonText>}
            </IonItem>


            <IonLabel className="questions">Considerando as últimas duas semanas, os sintomas anteriores lhe causaram algum tipo de dificuldade para trabalhar ou estudar ou tomar conta das coisas em casa ou para se relacionar com as pessoas?</IonLabel>
            <IonItem lines="none" className={"ion-no-padding"}>

            
            <Controller render={({onChange}) => (
           <IonRadioGroup onIonChange={(e)=> {
                    console.log(e);
                    onChange(e.detail.value); 
                    if (e.detail.value != undefined) {
                    props.setState('phq10Post14', e.detail.value )}}}>

                                <IonItem lines="none" className={"ion-no-padding"}>
                                <IonLabel>Nenhum dia</IonLabel>
                                <IonRadio slot="start" className={"radio-options"} color="primary" value="0"></IonRadio>
                                </IonItem>
                               
                                <IonItem lines="none" className={"ion-no-padding"}>
                                <IonLabel>Menos de uma semana</IonLabel>
                                <IonRadio slot="start" className={"radio-options"} color="primary" value="1"></IonRadio>
                                </IonItem>

                                <IonItem lines="none" className={"ion-no-padding"}>
                                <IonLabel>Uma semana ou mais</IonLabel>
                                <IonRadio slot="start" className={"radio-options"} color="primary" value="2"></IonRadio>
                                </IonItem>
                               
                                <IonItem lines="none" className={"ion-no-padding"}>
                                <IonLabel>Quase todos os dias</IonLabel>
                                <IonRadio slot="start" className={"radio-options"} color="primary" value= "3"></IonRadio>
                                </IonItem>
                               
                </IonRadioGroup> )} control={control} name='phq10Post14' rules={{required:true}}/>
                {errors.phq10Post14 && <IonText color="danger">Campo obrigatório.</IonText>}
            </IonItem>

            <div id="progress-bar-div" >
                            <IonProgressBar className={"progress-bar"} value={0.8} color="orange"></IonProgressBar>
                        </div>

            <IonButton disabled={props.isFirst()}onClick={props.prev} className="btnAnterior" size="default" shape="round" fill="outline">Anterior</IonButton>
            <IonButton disabled={formState.isValid === false} onClick={props.next} size="default" shape="round"  className={"btnProximo"} fill="outline">Próximo</IonButton>
            </form>

        </div>

        </IonContent>
    )
}

export default PHQPost; 