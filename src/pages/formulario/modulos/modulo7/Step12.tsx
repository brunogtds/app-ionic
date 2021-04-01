import React from "react";
import {StepComponentProps} from "react-step-builder";

import {IonItem, IonLabel, IonRadioGroup, IonRadio, IonButton, IonLoading} from "@ionic/react";
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




const Step12 = (props: StepComponentProps) => {

    const {control, watch, handleSubmit} = useForm();

    const {data: user}= useUser();
   const [dataUser, setData] = useState()

   const history= useHistory();
   const [loader, setLoader]= useState<boolean>(false)

  async function updateUserDataQuest1(dataUser: any){
    
 
    if(user){
        firebase.firestore().collection('users').doc(user.uid).set({
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
        history.push('/modulos');
    }
        
    const onSubmit = (data: any) => {
       setData(dataUser);
       setLoader(true);
       updateUserDataQuest1(dataUser);
       voltaModulos();
       
    }
 
 
    return(
        <IonContent fullscreen> 
         <IonItem>
       
        
        </IonItem>
        <div>
            <form className={"ion-padding"} onSubmit={handleSubmit(onSubmit)}>
            <IonLoading message="Por favor aguarde..." duration={2000} isOpen={loader}/>

                 
            
            <IonItem>
                <IonLabel className="questions">Agora vamos falar sobre como você tem se sentido nas duas últimas semanas.</IonLabel>
            </IonItem>
            
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
                                <IonRadio color="primary" value="0"></IonRadio>
                                </IonItem>
                               
                                <IonItem>
                                <IonLabel>Menos de uma semana</IonLabel>
                                <IonRadio color="primary" value="1"></IonRadio>
                                </IonItem>

                                <IonItem>
                                <IonLabel>Uma semana ou mais</IonLabel>
                                <IonRadio color="primary" value="2"></IonRadio>
                                </IonItem>
                               
                                <IonItem>
                                <IonLabel>Quase todos os dias</IonLabel>
                                <IonRadio color="primary" value= "3"></IonRadio>
                                </IonItem>
                               
                </IonRadioGroup> )} control={control} name='phq01'/>
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
                                <IonRadio color="primary" value="0"></IonRadio>
                                </IonItem>
                               
                                <IonItem>
                                <IonLabel>Menos de uma semana</IonLabel>
                                <IonRadio color="primary" value="1"></IonRadio>
                                </IonItem>

                                <IonItem>
                                <IonLabel>Uma semana ou mais</IonLabel>
                                <IonRadio color="primary" value="2"></IonRadio>
                                </IonItem>
                               
                                <IonItem>
                                <IonLabel>Quase todos os dias</IonLabel>
                                <IonRadio color="primary" value= "3"></IonRadio>
                                </IonItem>
                               
                </IonRadioGroup> )} control={control} name='phq02'/>
            </IonItem>


            <IonLabel className="questions">Nas últimas duas semanas, quantos dias você teve dificuldade para pegar no sono ou permanecer dormindo ou dormiu mais do que de costume?</IonLabel>
            <IonItem>

            
            <Controller render={({onChange}) => (
           <IonRadioGroup onIonChange={(e)=> {
                    console.log(e);
                    onChange(e.detail.value); 
                    if (e.detail.value != undefined) {
                    props.setState('phq03', e.detail.value )}}}>

                                <IonItem>
                                <IonLabel>Nenhum dia</IonLabel>
                                <IonRadio color="primary" value="0"></IonRadio>
                                </IonItem>
                               
                                <IonItem>
                                <IonLabel>Menos de uma semana</IonLabel>
                                <IonRadio color="primary" value="1"></IonRadio>
                                </IonItem>

                                <IonItem>
                                <IonLabel>Uma semana ou mais</IonLabel>
                                <IonRadio color="primary" value="2"></IonRadio>
                                </IonItem>
                               
                                <IonItem>
                                <IonLabel>Quase todos os dias</IonLabel>
                                <IonRadio color="primary" value= "3"></IonRadio>
                                </IonItem>
                               
                </IonRadioGroup> )} control={control} name='phq03'/>
            </IonItem>

            <IonLabel className="questions">Nas últimas duas semanas, quantos dias você se sentiu cansado(a) ou com pouca energia?</IonLabel>
            <IonItem>

           
            <Controller render={({onChange}) => (
           <IonRadioGroup onIonChange={(e)=> {
                    console.log(e);
                    onChange(e.detail.value); 
                    if (e.detail.value != undefined) {
                    props.setState('phq04', e.detail.value )}}}>

                                <IonItem>
                                <IonLabel>Nenhum dia</IonLabel>
                                <IonRadio color="primary" value="0"></IonRadio>
                                </IonItem>
                               
                                <IonItem>
                                <IonLabel>Menos de uma semana</IonLabel>
                                <IonRadio color="primary" value="1"></IonRadio>
                                </IonItem>

                                <IonItem>
                                <IonLabel>Uma semana ou mais</IonLabel>
                                <IonRadio color="primary" value="2"></IonRadio>
                                </IonItem>
                               
                                <IonItem>
                                <IonLabel>Quase todos os dias</IonLabel>
                                <IonRadio color="primary" value= "3"></IonRadio>
                                </IonItem>
                               
                </IonRadioGroup> )} control={control} name='phq04'/>
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
                                <IonRadio color="primary" value="0"></IonRadio>
                                </IonItem>
                               
                                <IonItem>
                                <IonLabel>Menos de uma semana</IonLabel>
                                <IonRadio color="primary" value="1"></IonRadio>
                                </IonItem>

                                <IonItem>
                                <IonLabel>Uma semana ou mais</IonLabel>
                                <IonRadio color="primary" value="2"></IonRadio>
                                </IonItem>
                               
                                <IonItem>
                                <IonLabel>Quase todos os dias</IonLabel>
                                <IonRadio color="primary" value= "3"></IonRadio>
                                </IonItem>
                               
                </IonRadioGroup> )} control={control} name='phq05'/>
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
                                <IonRadio color="primary" value="0"></IonRadio>
                                </IonItem>
                               
                                <IonItem>
                                <IonLabel>Menos de uma semana</IonLabel>
                                <IonRadio color="primary" value="1"></IonRadio>
                                </IonItem>

                                <IonItem>
                                <IonLabel>Uma semana ou mais</IonLabel>
                                <IonRadio color="primary" value="2"></IonRadio>
                                </IonItem>
                               
                                <IonItem>
                                <IonLabel>Quase todos os dias</IonLabel>
                                <IonRadio color="primary" value= "3"></IonRadio>
                                </IonItem>
                               
                </IonRadioGroup> )} control={control} name='phq06'/>
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
                                <IonRadio color="primary" value="0"></IonRadio>
                                </IonItem>
                               
                                <IonItem>
                                <IonLabel>Menos de uma semana</IonLabel>
                                <IonRadio color="primary" value="1"></IonRadio>
                                </IonItem>

                                <IonItem>
                                <IonLabel>Uma semana ou mais</IonLabel>
                                <IonRadio color="primary" value="2"></IonRadio>
                                </IonItem>
                               
                                <IonItem>
                                <IonLabel>Quase todos os dias</IonLabel>
                                <IonRadio color="primary" value= "3"></IonRadio>
                                </IonItem>
                               
                </IonRadioGroup> )} control={control} name='phq07'/>
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
                                <IonRadio color="primary" value="0"></IonRadio>
                                </IonItem>
                               
                                <IonItem>
                                <IonLabel>Menos de uma semana</IonLabel>
                                <IonRadio color="primary" value="1"></IonRadio>
                                </IonItem>

                                <IonItem>
                                <IonLabel>Uma semana ou mais</IonLabel>
                                <IonRadio color="primary" value="2"></IonRadio>
                                </IonItem>
                               
                                <IonItem>
                                <IonLabel>Quase todos os dias</IonLabel>
                                <IonRadio color="primary" value= "3"></IonRadio>
                                </IonItem>
                               
                </IonRadioGroup> )} control={control} name='phq08'/>
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
                                <IonRadio color="primary" value="0"></IonRadio>
                                </IonItem>
                               
                                <IonItem>
                                <IonLabel>Menos de uma semana</IonLabel>
                                <IonRadio color="primary" value="1"></IonRadio>
                                </IonItem>

                                <IonItem>
                                <IonLabel>Uma semana ou mais</IonLabel>
                                <IonRadio color="primary" value="2"></IonRadio>
                                </IonItem>
                               
                                <IonItem>
                                <IonLabel>Quase todos os dias</IonLabel>
                                <IonRadio color="primary" value= "3"></IonRadio>
                                </IonItem>
                               
                </IonRadioGroup> )} control={control} name='phq09'/>
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
                                <IonRadio color="primary" value="0"></IonRadio>
                                </IonItem>
                               
                                <IonItem>
                                <IonLabel>Menos de uma semana</IonLabel>
                                <IonRadio color="primary" value="1"></IonRadio>
                                </IonItem>

                                <IonItem>
                                <IonLabel>Uma semana ou mais</IonLabel>
                                <IonRadio color="primary" value="2"></IonRadio>
                                </IonItem>
                               
                                <IonItem>
                                <IonLabel>Quase todos os dias</IonLabel>
                                <IonRadio color="primary" value= "3"></IonRadio>
                                </IonItem>
                               
                </IonRadioGroup> )} control={control} name='phq10'/>
            </IonItem>

            <IonButton disabled={props.isFirst()}onClick={props.prev} size="large">Anterior</IonButton>
            <IonButton onClick={onSubmit} size="large" className={"btnProximo"}>Submeter</IonButton>
            </form>

        </div>

        </IonContent>
    )
}

export default Step12; 