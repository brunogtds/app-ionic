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




const PHQ = (props: StepComponentProps) => {

    const {control, watch, handleSubmit, errors, formState} = useForm({mode: "onChange"});

    const {data: user}= useUser();
   const [dataUser, setData] = useState()

   const history= useHistory();
   const [loader, setLoader]= useState<boolean>(false)

  async function updateUserDataQuest1(dataUser: any){
    
 
    if(user){
        firebase.firestore().collection('users').doc(user.uid).set({
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
            phq01: Number(props.state.pqhp01), //STEP 7
            phq02: Number(props.state.pqhp02), 
            phq03: Number(props.state.pqhp03), 
            phq04: Number(props.state.pqhp04), 
            phq05: Number(props.state.pqhp05), 
            phq06: Number(props.state.pqhp06), 
            phq07: Number(props.state.pqhp07), 
            phq08: Number(props.state.pqhp08), 
            phq09: Number(props.state.pqhp09), 
            phq10: Number(props.state.pqhp10),  }, {merge: true})
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
       (document.getElementById('button-forms-sintomas') as HTMLInputElement).disabled = true;
       
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
                    props.setState('phq01', e.detail.value )}}}>

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
                               
                </IonRadioGroup> )} control={control} name='phq01' rules={{required:true}}/>
                {errors.phq01 && <IonText color="danger">Campo obrigatório.</IonText>}
            </IonItem>

            <IonLabel className="questions">Nas últimas duas semanas, quantos dias você se sentiu para baixo, deprimido(a) ou sem perspectiva?</IonLabel>
            <IonItem>

 
            
            <Controller render={({onChange}) => (
           <IonRadioGroup onIonChange={(e)=> {
                    console.log(e);
                    onChange(e.detail.value); 
                    if (e.detail.value != undefined) {
                    props.setState('phq02', e.detail.value )}}}>

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
                               
                </IonRadioGroup> )} control={control} name='phq02' rules={{required:true}}/>
                {errors.phq02 && <IonText color="danger">Campo obrigatório.</IonText>}
            </IonItem>


            <IonLabel className="questions">Nas últimas duas semanas, quantos dias você teve dificuldade para pegar no sono ou permanecer dormindo ou dormiu mais do que de costume?</IonLabel>
            <IonItem>

            
            <Controller render={({onChange}) => (
           <IonRadioGroup  onIonChange={(e)=> {
                    console.log(e);
                    onChange(e.detail.value); 
                    if (e.detail.value != undefined) {
                    props.setState('phq03', e.detail.value )}}}>

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
                               
                </IonRadioGroup> )} control={control} name='phq03' rules={{required:true}}/>
                {errors.phq03 && <IonText color="danger">Campo obrigatório.</IonText>}
            </IonItem>

            <IonLabel className="questions">Nas últimas duas semanas, quantos dias você se sentiu cansado(a) ou com pouca energia?</IonLabel>
            <IonItem>

           
            <Controller render={({onChange}) => (
           <IonRadioGroup  onIonChange={(e)=> {
                    console.log(e);
                    onChange(e.detail.value); 
                    if (e.detail.value != undefined) {
                    props.setState('phq04', e.detail.value )}}}>

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
                               
                </IonRadioGroup> )} control={control} name='phq04' rules={{required:true}}/>
                {errors.phq04 && <IonText color="danger">Campo obrigatório.</IonText>}
            </IonItem>
                
            <IonLabel className="questions"> Nas últimas duas semanas, quantos dias você teve falta de apetite ou comeu demais?</IonLabel>
            <IonItem>

            
            <Controller render={({onChange}) => (
           <IonRadioGroup onIonChange={(e)=> {
                    console.log(e);
                    onChange(e.detail.value); 
                    if (e.detail.value != undefined) {
                    props.setState('phq05', e.detail.value )}}}>

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
                               
                </IonRadioGroup> )} control={control} name='phq05' rules={{required:true}}/>
                {errors.phq05 && <IonText color="danger">Campo obrigatório.</IonText>}
            </IonItem>
                
            <IonLabel className="questions"> Nas últimas duas semanas, quantos dias você se sentiu mal consigo mesmo(a) ou achou que é um fracasso ou que decepcionou sua família ou a você mesmo(a)?</IonLabel>
            <IonItem>

            
            <Controller render={({onChange}) => (
           <IonRadioGroup onIonChange={(e)=> {
                    console.log(e);
                    onChange(e.detail.value); 
                    if (e.detail.value != undefined) {
                    props.setState('phq06', e.detail.value )}}}>

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
                               
                </IonRadioGroup> )} control={control} name='phq06' rules={{required:true}}/>
                {errors.phq06 && <IonText color="danger">Campo obrigatório.</IonText>}
            </IonItem>

            <IonLabel className="questions"> Nas últimas duas semanas, quantos dias você teve dificuldade para se concentrar nas coisas (como ler o jornal ou ver televisão)?</IonLabel>
            <IonItem>

           
            <Controller render={({onChange}) => (
           <IonRadioGroup onIonChange={(e)=> {
                    console.log(e);
                    onChange(e.detail.value); 
                    if (e.detail.value != undefined) {
                    props.setState('phq07', e.detail.value )}}}>

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
                               
                </IonRadioGroup> )} control={control} name='phq07' rules={{required:true}}/>
                {errors.phq07 && <IonText color="danger">Campo obrigatório.</IonText>}
            </IonItem>

            <IonLabel className="questions">Nas últimas duas semanas, quantos dias você teve lentidão para se movimentar ou falar (a ponto das outras pessoas perceberem), ou ao contrário, esteve tão agitado(a) que você ficava andando de um lado para o outro mais do que de costume?</IonLabel>
            <IonItem>

            
            <Controller render={({onChange}) => (
           <IonRadioGroup onIonChange={(e)=> {
                    console.log(e);
                    onChange(e.detail.value); 
                    if (e.detail.value != undefined) {
                    props.setState('phq08', e.detail.value )}}}>

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
                               
                </IonRadioGroup> )} control={control} name='phq08' rules={{required:true}}/>
                {errors.phq08 && <IonText color="danger">Campo obrigatório.</IonText>}
            </IonItem>

            <IonLabel className="questions">Nas últimas duas semanas, quantos dias você pensou em se ferir de alguma maneira ou que seria melhor estar morto(a)?</IonLabel>
            <IonItem>

            
            <Controller render={({onChange}) => (
           <IonRadioGroup onIonChange={(e)=> {
                    console.log(e);
                    onChange(e.detail.value); 
                    if (e.detail.value != undefined) {
                    props.setState('phq09', e.detail.value )}}}>

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
                               
                </IonRadioGroup> )} control={control} name='phq09' rules={{required:true}}/>
                {errors.phq09 && <IonText color="danger">Campo obrigatório.</IonText>}
            </IonItem>


            <IonLabel className="questions">Considerando as últimas duas semanas, os sintomas anteriores lhe causaram algum tipo de dificuldade para trabalhar ou estudar ou tomar conta das coisas em casa ou para se relacionar com as pessoas?</IonLabel>
            <IonItem>

            
            <Controller render={({onChange}) => (
           <IonRadioGroup onIonChange={(e)=> {
                    console.log(e);
                    onChange(e.detail.value); 
                    if (e.detail.value != undefined) {
                    props.setState('phq10', e.detail.value )}}}>

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
                               
                </IonRadioGroup> )} control={control} name='phq10' rules={{required:true}}/>
                {errors.phq10 && <IonText color="danger">Campo obrigatório.</IonText>}
            </IonItem>

            <IonButton disabled={props.isFirst()}onClick={props.prev} size="large" fill="clear">Anterior</IonButton>
            <IonButton disabled={formState.isValid === false} onClick={onSubmit} size="large" className={"btnProximo"} fill="clear">Submeter</IonButton>
            </form>

        </div>

        </IonContent>
    )
}

export default PHQ; 