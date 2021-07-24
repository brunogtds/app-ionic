import React from "react";
import {StepComponentProps} from "react-step-builder";

import {IonItem, IonLabel, IonRadioGroup, IonRadio, IonButton, IonLoading, IonText} from "@ionic/react";
import { IonContent} from '@ionic/react';

import '../../../Forms.css';

import { useForm, Controller } from "react-hook-form";

import { IonProgressBar} from '@ionic/react';

import {useState} from 'react';

import  {Redirect, useHistory } from 'react-router-dom'
import {toast} from '../../../../../toast';

//imports user context do reactfire

import {useUser} from 'reactfire';
import firebase from 'firebase';




const PHQPost = (props: StepComponentProps) => {

    const {control, watch, handleSubmit, errors, formState} = useForm({mode: "onChange"});

    const {data: user}= useUser();
   const [dataUser, setData] = useState()

   const history= useHistory();
   const [loader, setLoader]= useState<boolean>(false)

  async function updateUserDataQuest1(dataUser: any){
    
 
    if(user){
        firebase.firestore().collection('users').doc(user.uid).set({
            gad7Post14_gad01: Number(props.state.gad7Post14_gad01), //STEP 5
            gad7Post14_gad02: Number(props.state.gad7Post14_gad02),
            gad7Post14_gad03: Number(props.state.gad7Post14_gad03),
            gad7Post14_gad04: Number(props.state.gad7Post14_gad04),
            gad7Post14_gad05: Number(props.state.gad7Post14_gad05),
            gad7Post14_gad06: Number(props.state.gad7Post14_gad06),
            gad7Post14_gad07: Number(props.state.gad7Post14_gad07),
            who5Post14_SQ001: Number(props.state.who5Post14_SQ001), //STEP 6 
            who5Post14_SQ002: Number(props.state.who5Post14_SQ002),
            who5Post14_SQ003: Number(props.state.who5Post14_SQ003),
            who5Post14_SQ004: Number(props.state.who5Post14_SQ004),
            who5Post14_SQ005: Number(props.state.who5Post14_SQ005),
            phq01Post14: Number(props.state.phq01Post14), //STEP 7
            phq02Post14: Number(props.state.phq02Post14), 
            phq03Post14: Number(props.state.phq03Post14), 
            phq04Post14: Number(props.state.phq04Post14), 
            phq05Post14: Number(props.state.phq05Post14), 
            phq06Post14: Number(props.state.phq06Post14), 
            phq07Post14: Number(props.state.phq07Post14), 
            phq08Post14: Number(props.state.phq08Post14), 
            phq09Post14: Number(props.state.phq09Post14), 
            phq10Post14: Number(props.state.phq10Post14),
            dateSintomasModule1 : new Date()
        
        }, {merge: true})
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
      //(document.getElementById('button-forms-sintomas') as HTMLInputElement).disabled = true;
       
    }
 
 
    return(
        <IonContent fullscreen color="light"> 
         
        <div>
            <form className={"ion-padding"} onSubmit={handleSubmit(onSubmit)}>
            <IonLoading message="Por favor aguarde..." duration={2000} isOpen={loader}/>

          
            <IonLabel className="questions">Nas últimas duas semanas, quantos dias você teve pouco interesse ou pouco prazer em fazer as coisas?</IonLabel>
            <IonItem>

 
                
                <Controller render={({onChange}) => (
                <IonRadioGroup onIonChange={(e)=> {
                    console.log(e);
                    onChange(e.detail.value); 
                    if (e.detail.value != undefined) {
                    props.setState('phq01Post14', e.detail.value )}}}>

                                <IonItem>
                                <IonLabel>Nenhum dia</IonLabel>
                                <IonRadio className={"radio-options"} color="primary" value="0"></IonRadio>
                                </IonItem>
                               
                                <IonItem>
                                <IonLabel>Menos de uma semana</IonLabel>
                                <IonRadio className={"radio-options"} color="primary" value="1"></IonRadio>
                                </IonItem>

                                <IonItem>
                                <IonLabel>Uma semana ou mais</IonLabel>
                                <IonRadio className={"radio-options"} color="primary" value="2"></IonRadio>
                                </IonItem>
                               
                                <IonItem>
                                <IonLabel>Quase todos os dias</IonLabel>
                                <IonRadio className={"radio-options"} color="primary" value= "3"></IonRadio>
                                </IonItem>
                               
                </IonRadioGroup> )} control={control} name='phq01Post14' rules={{required:true}}/>
                {errors.phq01Post14 && <IonText color="danger">Campo obrigatório.</IonText>}
            </IonItem>

            <IonLabel className="questions">Nas últimas duas semanas, quantos dias você se sentiu para baixo, deprimido(a) ou sem perspectiva?</IonLabel>
            <IonItem>

 
            
            <Controller render={({onChange}) => (
           <IonRadioGroup onIonChange={(e)=> {
                    console.log(e);
                    onChange(e.detail.value); 
                    if (e.detail.value != undefined) {
                    props.setState('phq02Post14', e.detail.value )}}}>

                                <IonItem>
                                <IonLabel>Nenhum dia</IonLabel>
                                <IonRadio className={"radio-options"} color="primary" value="0"></IonRadio>
                                </IonItem>
                               
                                <IonItem>
                                <IonLabel>Menos de uma semana</IonLabel>
                                <IonRadio className={"radio-options"} color="primary" value="1"></IonRadio>
                                </IonItem>

                                <IonItem>
                                <IonLabel>Uma semana ou mais</IonLabel>
                                <IonRadio className={"radio-options"} color="primary" value="2"></IonRadio>
                                </IonItem>
                               
                                <IonItem>
                                <IonLabel>Quase todos os dias</IonLabel>
                                <IonRadio className={"radio-options"} color="primary" value= "3"></IonRadio>
                                </IonItem>
                               
                </IonRadioGroup> )} control={control} name='phq02Post14' rules={{required:true}}/>
                {errors.phq02Post14 && <IonText color="danger">Campo obrigatório.</IonText>}
            </IonItem>


            <IonLabel className="questions">Nas últimas duas semanas, quantos dias você teve dificuldade para pegar no sono ou permanecer dormindo ou dormiu mais do que de costume?</IonLabel>
            <IonItem>

            
            <Controller render={({onChange}) => (
           <IonRadioGroup  onIonChange={(e)=> {
                    console.log(e);
                    onChange(e.detail.value); 
                    if (e.detail.value != undefined) {
                    props.setState('phq03Post14', e.detail.value )}}}>

                                <IonItem>
                                <IonLabel>Nenhum dia</IonLabel>
                                <IonRadio className={"radio-options"} color="primary" value="0"></IonRadio>
                                </IonItem>
                               
                                <IonItem>
                                <IonLabel>Menos de uma semana</IonLabel>
                                <IonRadio className={"radio-options"} color="primary" value="1"></IonRadio>
                                </IonItem>

                                <IonItem>
                                <IonLabel>Uma semana ou mais</IonLabel>
                                <IonRadio className={"radio-options"} color="primary" value="2"></IonRadio>
                                </IonItem>
                               
                                <IonItem>
                                <IonLabel>Quase todos os dias</IonLabel>
                                <IonRadio className={"radio-options"} color="primary" value= "3"></IonRadio>
                                </IonItem>
                               
                </IonRadioGroup> )} control={control} name='phq03Post14' rules={{required:true}}/>
                {errors.phq03Post14 && <IonText color="danger">Campo obrigatório.</IonText>}
            </IonItem>

            <IonLabel className="questions">Nas últimas duas semanas, quantos dias você se sentiu cansado(a) ou com pouca energia?</IonLabel>
            <IonItem>

           
            <Controller render={({onChange}) => (
           <IonRadioGroup  onIonChange={(e)=> {
                    console.log(e);
                    onChange(e.detail.value); 
                    if (e.detail.value != undefined) {
                    props.setState('phq04Post14', e.detail.value )}}}>

                                <IonItem>
                                <IonLabel>Nenhum dia</IonLabel>
                                <IonRadio className={"radio-options"} color="primary" value="0"></IonRadio>
                                </IonItem>
                               
                                <IonItem>
                                <IonLabel>Menos de uma semana</IonLabel>
                                <IonRadio className={"radio-options"} color="primary" value="1"></IonRadio>
                                </IonItem>

                                <IonItem>
                                <IonLabel>Uma semana ou mais</IonLabel>
                                <IonRadio className={"radio-options"} color="primary" value="2"></IonRadio>
                                </IonItem>
                               
                                <IonItem>
                                <IonLabel>Quase todos os dias</IonLabel>
                                <IonRadio className={"radio-options"} color="primary" value= "3"></IonRadio>
                                </IonItem>
                               
                </IonRadioGroup> )} control={control} name='phq04Post14' rules={{required:true}}/>
                {errors.phq04Post14 && <IonText color="danger">Campo obrigatório.</IonText>}
            </IonItem>
                
            <IonLabel className="questions"> Nas últimas duas semanas, quantos dias você teve falta de apetite ou comeu demais?</IonLabel>
            <IonItem>

            
            <Controller render={({onChange}) => (
           <IonRadioGroup onIonChange={(e)=> {
                    console.log(e);
                    onChange(e.detail.value); 
                    if (e.detail.value != undefined) {
                    props.setState('phq05Post14', e.detail.value )}}}>

                                <IonItem>
                                <IonLabel>Nenhum dia</IonLabel>
                                <IonRadio className={"radio-options"} color="primary" value="0"></IonRadio>
                                </IonItem>
                               
                                <IonItem>
                                <IonLabel>Menos de uma semana</IonLabel>
                                <IonRadio className={"radio-options"} color="primary" value="1"></IonRadio>
                                </IonItem>

                                <IonItem>
                                <IonLabel>Uma semana ou mais</IonLabel>
                                <IonRadio className={"radio-options"} color="primary" value="2"></IonRadio>
                                </IonItem>
                               
                                <IonItem>
                                <IonLabel>Quase todos os dias</IonLabel>
                                <IonRadio className={"radio-options"} color="primary" value= "3"></IonRadio>
                                </IonItem>
                               
                </IonRadioGroup> )} control={control} name='phq05Post14' rules={{required:true}}/>
                {errors.phq05Post14 && <IonText color="danger">Campo obrigatório.</IonText>}
            </IonItem>
                
            <IonLabel className="questions"> Nas últimas duas semanas, quantos dias você se sentiu mal consigo mesmo(a) ou achou que é um fracasso ou que decepcionou sua família ou a você mesmo(a)?</IonLabel>
            <IonItem>

            
            <Controller render={({onChange}) => (
           <IonRadioGroup onIonChange={(e)=> {
                    console.log(e);
                    onChange(e.detail.value); 
                    if (e.detail.value != undefined) {
                    props.setState('phq06Post14', e.detail.value )}}}>

                                <IonItem>
                                <IonLabel>Nenhum dia</IonLabel>
                                <IonRadio className={"radio-options"} color="primary" value="0"></IonRadio>
                                </IonItem>
                               
                                <IonItem>
                                <IonLabel>Menos de uma semana</IonLabel>
                                <IonRadio className={"radio-options"} color="primary" value="1"></IonRadio>
                                </IonItem>

                                <IonItem>
                                <IonLabel>Uma semana ou mais</IonLabel>
                                <IonRadio className={"radio-options"} color="primary" value="2"></IonRadio>
                                </IonItem>
                               
                                <IonItem>
                                <IonLabel>Quase todos os dias</IonLabel>
                                <IonRadio className={"radio-options"} color="primary" value= "3"></IonRadio>
                                </IonItem>
                               
                </IonRadioGroup> )} control={control} name='phq06Post14' rules={{required:true}}/>
                {errors.phq06Post14 && <IonText color="danger">Campo obrigatório.</IonText>}
            </IonItem>

            <IonLabel className="questions"> Nas últimas duas semanas, quantos dias você teve dificuldade para se concentrar nas coisas (como ler o jornal ou ver televisão)?</IonLabel>
            <IonItem>

           
            <Controller render={({onChange}) => (
           <IonRadioGroup onIonChange={(e)=> {
                    console.log(e);
                    onChange(e.detail.value); 
                    if (e.detail.value != undefined) {
                    props.setState('phq07Post14', e.detail.value )}}}>

                                <IonItem>
                                <IonLabel>Nenhum dia</IonLabel>
                                <IonRadio className={"radio-options"} color="primary" value="0"></IonRadio>
                                </IonItem>
                               
                                <IonItem>
                                <IonLabel>Menos de uma semana</IonLabel>
                                <IonRadio className={"radio-options"} color="primary" value="1"></IonRadio>
                                </IonItem>

                                <IonItem>
                                <IonLabel>Uma semana ou mais</IonLabel>
                                <IonRadio className={"radio-options"} color="primary" value="2"></IonRadio>
                                </IonItem>
                               
                                <IonItem>
                                <IonLabel>Quase todos os dias</IonLabel>
                                <IonRadio className={"radio-options"} color="primary" value= "3"></IonRadio>
                                </IonItem>
                               
                </IonRadioGroup> )} control={control} name='phq07Post14' rules={{required:true}}/>
                {errors.phq07Post14 && <IonText color="danger">Campo obrigatório.</IonText>}
            </IonItem>

            <IonLabel className="questions">Nas últimas duas semanas, quantos dias você teve lentidão para se movimentar ou falar (a ponto das outras pessoas perceberem), ou ao contrário, esteve tão agitado(a) que você ficava andando de um lado para o outro mais do que de costume?</IonLabel>
            <IonItem>

            
            <Controller render={({onChange}) => (
           <IonRadioGroup onIonChange={(e)=> {
                    console.log(e);
                    onChange(e.detail.value); 
                    if (e.detail.value != undefined) {
                    props.setState('phq08Post14', e.detail.value )}}}>

                                <IonItem>
                                <IonLabel>Nenhum dia</IonLabel>
                                <IonRadio className={"radio-options"} color="primary" value="0"></IonRadio>
                                </IonItem>
                               
                                <IonItem>
                                <IonLabel>Menos de uma semana</IonLabel>
                                <IonRadio className={"radio-options"} color="primary" value="1"></IonRadio>
                                </IonItem>

                                <IonItem>
                                <IonLabel>Uma semana ou mais</IonLabel>
                                <IonRadio className={"radio-options"} color="primary" value="2"></IonRadio>
                                </IonItem>
                               
                                <IonItem>
                                <IonLabel>Quase todos os dias</IonLabel>
                                <IonRadio className={"radio-options"} color="primary" value= "3"></IonRadio>
                                </IonItem>
                               
                </IonRadioGroup> )} control={control} name='phq08Post14' rules={{required:true}}/>
                {errors.phq08Post14 && <IonText color="danger">Campo obrigatório.</IonText>}
            </IonItem>

            <IonLabel className="questions">Nas últimas duas semanas, quantos dias você pensou em se ferir de alguma maneira ou que seria melhor estar morto(a)?</IonLabel>
            <IonItem>

            
            <Controller render={({onChange}) => (
           <IonRadioGroup onIonChange={(e)=> {
                    console.log(e);
                    onChange(e.detail.value); 
                    if (e.detail.value != undefined) {
                    props.setState('phq09Post14', e.detail.value )}}}>

                                <IonItem>
                                <IonLabel>Nenhum dia</IonLabel>
                                <IonRadio className={"radio-options"} color="primary" value="0"></IonRadio>
                                </IonItem>
                               
                                <IonItem>
                                <IonLabel>Menos de uma semana</IonLabel>
                                <IonRadio className={"radio-options"} color="primary" value="1"></IonRadio>
                                </IonItem>

                                <IonItem>
                                <IonLabel>Uma semana ou mais</IonLabel>
                                <IonRadio className={"radio-options"} color="primary" value="2"></IonRadio>
                                </IonItem>
                               
                                <IonItem>
                                <IonLabel>Quase todos os dias</IonLabel>
                                <IonRadio className={"radio-options"} color="primary" value= "3"></IonRadio>
                                </IonItem>
                               
                </IonRadioGroup> )} control={control} name='phq09Post14' rules={{required:true}}/>
                {errors.phq09Post14 && <IonText color="danger">Campo obrigatório.</IonText>}
            </IonItem>


            <IonLabel className="questions">Considerando as últimas duas semanas, os sintomas anteriores lhe causaram algum tipo de dificuldade para trabalhar ou estudar ou tomar conta das coisas em casa ou para se relacionar com as pessoas?</IonLabel>
            <IonItem>

            
            <Controller render={({onChange}) => (
           <IonRadioGroup onIonChange={(e)=> {
                    console.log(e);
                    onChange(e.detail.value); 
                    if (e.detail.value != undefined) {
                    props.setState('phq10Post14', e.detail.value )}}}>

                                <IonItem>
                                <IonLabel>Nenhum dia</IonLabel>
                                <IonRadio className={"radio-options"} color="primary" value="0"></IonRadio>
                                </IonItem>
                               
                                <IonItem>
                                <IonLabel>Menos de uma semana</IonLabel>
                                <IonRadio className={"radio-options"} color="primary" value="1"></IonRadio>
                                </IonItem>

                                <IonItem>
                                <IonLabel>Uma semana ou mais</IonLabel>
                                <IonRadio className={"radio-options"} color="primary" value="2"></IonRadio>
                                </IonItem>
                               
                                <IonItem>
                                <IonLabel>Quase todos os dias</IonLabel>
                                <IonRadio className={"radio-options"} color="primary" value= "3"></IonRadio>
                                </IonItem>
                               
                </IonRadioGroup> )} control={control} name='phq10Post14' rules={{required:true}}/>
                {errors.phq10Post14 && <IonText color="danger">Campo obrigatório.</IonText>}
            </IonItem>

            <IonButton disabled={props.isFirst()}onClick={props.prev} size="large" fill="clear">Anterior</IonButton>
            <IonButton disabled={formState.isValid === false} onClick={onSubmit} size="large" className={"btnProximo"} fill="clear">Submeter</IonButton>
            </form>

        </div>

        </IonContent>
    )
}

export default PHQPost; 