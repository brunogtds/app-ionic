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
    IonItemDivider,
    IonGrid,
    IonRow,
    IonCol
    
  } from "@ionic/react";
  import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';

  import './Forms.css';

import { useForm, Controller } from "react-hook-form";

import {useState, ChangeEvent} from 'react';
import { setConstantValue } from "typescript";

import { IonProgressBar} from '@ionic/react';

import { object, string, number } from 'yup';

const Step9 = (props: StepComponentProps) => {
    
    const {control, watch, handleSubmit} = useForm();

    return(
        <IonContent fullscreen> 
        <div>
            <form className={"ion-padding"}>

               <IonProgressBar value={0.9} buffer={0.9}></IonProgressBar>
            
            {/*
            <IonItem>
                <IonLabel>No mês passado, quantas vezes você...</IonLabel>

                <IonItem>
                       
                       <IonGrid fixed={true}>
                           <IonRow>
                               <IonCol> </IonCol>
                               <IonCol>0- nunca</IonCol>
                               <IonCol>1- quase nunca</IonCol>
                               <IonCol>2- algumas vezes</IonCol>
                               <IonCol>3- frequentemente</IonCol>
                               <IonCol>4- muito frequentemente</IonCol>
   
                            </IonRow>
                            <IonRadioGroup>
                            <IonRow>
                           
                               <IonCol>...ficou chateado(a) por causa de algo que aconteceu inesperadamente? </IonCol>
                                   
                                   <IonCol><IonRadio color="primary"></IonRadio></IonCol>
                                   <IonCol><IonRadio color="primary"></IonRadio></IonCol>
                                   <IonCol><IonRadio color="primary"></IonRadio></IonCol>
                                   <IonCol><IonRadio color="primary"></IonRadio></IonCol>
                                   <IonCol><IonRadio color="primary"></IonRadio></IonCol>
                                 
                             
                            </IonRow>
                            </IonRadioGroup> 
                            <IonRadioGroup>
                            <IonRow>
                            
                               <IonCol>...se sentiu incapaz de controlar as coisas importantes na sua vida?</IonCol>
                                   
                                   <IonCol><IonRadio color="primary"></IonRadio></IonCol>
                                   <IonCol><IonRadio color="primary"></IonRadio></IonCol>
                                   <IonCol><IonRadio color="primary"></IonRadio></IonCol>
                                   <IonCol><IonRadio color="primary"></IonRadio></IonCol>
                                   <IonCol><IonRadio color="primary"></IonRadio></IonCol>
                                   
                              
                            </IonRow>
                            </IonRadioGroup>  

                           <IonRadioGroup>
                             <IonRow>
                            
                               <IonCol>...se sentiu nervoso(a) ou estressado(a)? </IonCol>
                                   
                                   <IonCol><IonRadio color="primary"></IonRadio></IonCol>
                                   <IonCol><IonRadio color="primary"></IonRadio></IonCol>
                                   <IonCol><IonRadio color="primary"></IonRadio></IonCol>
                                   <IonCol><IonRadio color="primary"></IonRadio></IonCol>
                                   <IonCol><IonRadio color="primary"></IonRadio></IonCol>
                                   
                              
                            </IonRow>
                            </IonRadioGroup>

                            <IonRadioGroup>
                             <IonRow>
                            
                               <IonCol>...lidou com sucesso com os problemas e aborrecimentos do dia a dia?	 </IonCol>
                                   
                                   <IonCol><IonRadio color="primary"></IonRadio></IonCol>
                                   <IonCol><IonRadio color="primary"></IonRadio></IonCol>
                                   <IonCol><IonRadio color="primary"></IonRadio></IonCol>
                                   <IonCol><IonRadio color="primary"></IonRadio></IonCol>
                                   <IonCol><IonRadio color="primary"></IonRadio></IonCol>
                                   
                              
                            </IonRow>
                            </IonRadioGroup>

                            <IonRadioGroup>
                             <IonRow>
                            
                               <IonCol>...sentiu que estava lidando de forma eficaz com as mudanças importantes que estavam acontecendo na em sua vida? </IonCol>
                                   
                                   <IonCol><IonRadio color="primary"></IonRadio></IonCol>
                                   <IonCol><IonRadio color="primary"></IonRadio></IonCol>
                                   <IonCol><IonRadio color="primary"></IonRadio></IonCol>
                                   <IonCol><IonRadio color="primary"></IonRadio></IonCol>
                                   <IonCol><IonRadio color="primary"></IonRadio></IonCol>
                                 
                              
                            </IonRow>
                            </IonRadioGroup>

                            <IonRadioGroup>
                             <IonRow>
                            
                               <IonCol>...se sentiu confiante nas suas capacidades para lidar com os seus problemas pessoais? </IonCol>
                                   
                                   <IonCol><IonRadio color="primary"></IonRadio></IonCol>
                                   <IonCol><IonRadio color="primary"></IonRadio></IonCol>
                                   <IonCol><IonRadio color="primary"></IonRadio></IonCol>
                                   <IonCol><IonRadio color="primary"></IonRadio></IonCol>
                                   <IonCol><IonRadio color="primary"></IonRadio></IonCol>
                              
                              
                            </IonRow>
                            </IonRadioGroup>

                            <IonRadioGroup>
                             <IonRow>
                            
                               <IonCol>...sentiu que as coisas estavam ocorrendo a sua maneira (do seu jeito)?	 </IonCol>
                                   
                                   <IonCol><IonRadio color="primary"></IonRadio></IonCol>
                                   <IonCol><IonRadio color="primary"></IonRadio></IonCol>
                                   <IonCol><IonRadio color="primary"></IonRadio></IonCol>
                                   <IonCol><IonRadio color="primary"></IonRadio></IonCol>
                                   <IonCol><IonRadio color="primary"></IonRadio></IonCol>
                                  
                              
                            </IonRow>
                            </IonRadioGroup>

                            <IonRadioGroup>
                             <IonRow>
                            
                               <IonCol>...percebeu que não poderia lidar com todas as coisas que você tinha para fazer?	 </IonCol>
                                   
                                   <IonCol><IonRadio color="primary"></IonRadio></IonCol>
                                   <IonCol><IonRadio color="primary"></IonRadio></IonCol>
                                   <IonCol><IonRadio color="primary"></IonRadio></IonCol>
                                   <IonCol><IonRadio color="primary"></IonRadio></IonCol>
                                   <IonCol><IonRadio color="primary"></IonRadio></IonCol>
                                   
                              
                            </IonRow>
                            </IonRadioGroup>

                            <IonRadioGroup>
                             <IonRow>
                            
                               <IonCol>...foi capaz de controlar as irritações da sua vida?		 </IonCol>
                                   
                                   <IonCol><IonRadio color="primary"></IonRadio></IonCol>
                                   <IonCol><IonRadio color="primary"></IonRadio></IonCol>
                                   <IonCol><IonRadio color="primary"></IonRadio></IonCol>
                                   <IonCol><IonRadio color="primary"></IonRadio></IonCol>
                                   <IonCol><IonRadio color="primary"></IonRadio></IonCol>
                                   
                              
                            </IonRow>
                            </IonRadioGroup>

                            <IonRadioGroup>
                             <IonRow>
                            
                               <IonCol>...sentiu que estava no topo das coisas (no controle das coisas)?		 </IonCol>
                                   
                                   <IonCol><IonRadio color="primary"></IonRadio></IonCol>
                                   <IonCol><IonRadio color="primary"></IonRadio></IonCol>
                                   <IonCol><IonRadio color="primary"></IonRadio></IonCol>
                                   <IonCol><IonRadio color="primary"></IonRadio></IonCol>
                                   <IonCol><IonRadio color="primary"></IonRadio></IonCol>
                                   
                              
                            </IonRow>
                            </IonRadioGroup>

                            <IonRadioGroup>
                             <IonRow>
                            
                               <IonCol>...se irritou por coisas que aconteceram que estavam fora de seu controle?	 </IonCol>
                                   
                                   <IonCol><IonRadio color="primary"></IonRadio></IonCol>
                                   <IonCol><IonRadio color="primary"></IonRadio></IonCol>
                                   <IonCol><IonRadio color="primary"></IonRadio></IonCol>
                                   <IonCol><IonRadio color="primary"></IonRadio></IonCol>
                                   <IonCol><IonRadio color="primary"></IonRadio></IonCol>
                                   
                              
                            </IonRow>
                            </IonRadioGroup>

                            <IonRadioGroup>
                             <IonRow>
                            
                               <IonCol>...deu por si pensando nas coisas que tinha que fazer?	 </IonCol>
                                   
                                   <IonCol><IonRadio color="primary"></IonRadio></IonCol>
                                   <IonCol><IonRadio color="primary"></IonRadio></IonCol>
                                   <IonCol><IonRadio color="primary"></IonRadio></IonCol>
                                   <IonCol><IonRadio color="primary"></IonRadio></IonCol>
                                   <IonCol><IonRadio color="primary"></IonRadio></IonCol>
                                   
                              
                            </IonRow>
                            </IonRadioGroup>

                            <IonRadioGroup>
                             <IonRow>
                            
                               <IonCol>...foi capaz de controlar a maneira como gastar seu tempo?	 </IonCol>
                                   
                                   <IonCol><IonRadio color="primary"></IonRadio></IonCol>
                                   <IonCol><IonRadio color="primary"></IonRadio></IonCol>
                                   <IonCol><IonRadio color="primary"></IonRadio></IonCol>
                                   <IonCol><IonRadio color="primary"></IonRadio></IonCol>
                                   <IonCol><IonRadio color="primary"></IonRadio></IonCol>
                                   
                              
                            </IonRow>
                            </IonRadioGroup>

                            <IonRadioGroup>
                             <IonRow>
                            
                               <IonCol>...sentiu que as dificuldades estavam se acumulando tanto que você não poderia superá-las?	 </IonCol>
                                   
                                   <IonCol><IonRadio color="primary"></IonRadio></IonCol>
                                   <IonCol><IonRadio color="primary"></IonRadio></IonCol>
                                   <IonCol><IonRadio color="primary"></IonRadio></IonCol>
                                   <IonCol><IonRadio color="primary"></IonRadio></IonCol>
                                   <IonCol><IonRadio color="primary"></IonRadio></IonCol>
                                   
                              
                            </IonRow>
                            </IonRadioGroup>
                            
                       </IonGrid>
                       </IonItem>


            </IonItem> */}


            <IonItem>
              <IonLabel>No mês passado quantas vezes você...</IonLabel>
            </IonItem>

            <IonLabel>...ficou chateado(a) por causa de algo que aconteceu inesperadamente?</IonLabel>
             <IonItem>
                    
                <Controller render={({onChange}) => (
                             <IonRadioGroup onIonChange={(e)=> {
                                console.log(e);
                                onChange(e.detail.value);
                                if (e.detail.value != undefined) {
                                props.setState('pss_pss01', e.detail.value )} } }>

                                <IonItem>
                                <IonLabel>0- nunca</IonLabel>
                                <IonRadio color="primary" value="0"></IonRadio>
                                </IonItem>
                               
                                <IonItem>
                                <IonLabel>1- quase nunca</IonLabel>
                                <IonRadio color="primary" value="1"></IonRadio>
                                </IonItem>

                                <IonItem>
                                <IonLabel>2- algumas vezes</IonLabel>
                                <IonRadio color="primary" value="2"></IonRadio>
                                </IonItem>
                               
                                <IonItem>
                                <IonLabel>3- frequentemente</IonLabel>
                                <IonRadio color="primary" value="3"></IonRadio>
                                </IonItem>

                                <IonItem>
                                <IonLabel>4- muito frequentemente</IonLabel>
                                <IonRadio color="primary" value="4"></IonRadio>
                                </IonItem>
 
                            </IonRadioGroup> )} control={control} name={"pss_pss01"}/>
                    </IonItem>
                    
                    <IonLabel>...se sentiu incapaz de controlar as coisas importantes na sua vida?</IonLabel>
                    <IonItem>
                    

                    <Controller render={({onChange}) => (
                             <IonRadioGroup onIonChange={(e)=> {
                                console.log(e);
                                onChange(e.detail.value);
                                if (e.detail.value != undefined) {
                                props.setState('pss_pss02', e.detail.value )} } }>

                                <IonItem>
                                <IonLabel>0- nunca</IonLabel>
                                <IonRadio color="primary" value="0"></IonRadio>
                                </IonItem>
                               
                                <IonItem>
                                <IonLabel>1- quase nunca</IonLabel>
                                <IonRadio color="primary" value="1"></IonRadio>
                                </IonItem>

                                <IonItem>
                                <IonLabel>2- algumas vezes</IonLabel>
                                <IonRadio color="primary" value="2"></IonRadio>
                                </IonItem>
                               
                                <IonItem>
                                <IonLabel>3- frequentemente</IonLabel>
                                <IonRadio color="primary" value="3"></IonRadio>
                                </IonItem>

                                <IonItem>
                                <IonLabel>4- muito frequentemente</IonLabel>
                                <IonRadio color="primary" value="4"></IonRadio>
                                </IonItem>
 
                            </IonRadioGroup> )} control={control} name={"pss_pss02"}/>
                    </IonItem>

                    <IonLabel>...se sentiu nervoso(a) ou estressado(a)?</IonLabel>
                    <IonItem>
                    

                    <Controller render={({onChange}) => (
                             <IonRadioGroup onIonChange={(e)=> {
                                console.log(e);
                                onChange(e.detail.value);
                                if (e.detail.value != undefined) {
                                props.setState('pss_pss03', e.detail.value )} } }>

                                <IonItem>
                                <IonLabel>0- nunca</IonLabel>
                                <IonRadio color="primary" value="0"></IonRadio>
                                </IonItem>
                               
                                <IonItem>
                                <IonLabel>1- quase nunca</IonLabel>
                                <IonRadio color="primary" value="1"></IonRadio>
                                </IonItem>

                                <IonItem>
                                <IonLabel>2- algumas vezes</IonLabel>
                                <IonRadio color="primary" value="2"></IonRadio>
                                </IonItem>
                               
                                <IonItem>
                                <IonLabel>3- frequentemente</IonLabel>
                                <IonRadio color="primary" value="3"></IonRadio>
                                </IonItem>

                                <IonItem>
                                <IonLabel>4- muito frequentemente</IonLabel>
                                <IonRadio color="primary" value="4"></IonRadio>
                                </IonItem>
 
                            </IonRadioGroup> )} control={control} name={"pss_pss03"}/>
                    </IonItem>

                    <IonLabel>...lidou com sucesso com os problemas e aborrecimentos do dia a dia?</IonLabel>
                    <IonItem>
                    

                    <Controller render={({onChange}) => (
                             <IonRadioGroup onIonChange={(e)=> {
                                console.log(e);
                                onChange(e.detail.value);
                                if (e.detail.value != undefined) {
                                props.setState('pss_pss04', e.detail.value )} } }>

                                <IonItem>
                                <IonLabel>0- nunca</IonLabel>
                                <IonRadio color="primary" value="0"></IonRadio>
                                </IonItem>
                               
                                <IonItem>
                                <IonLabel>1- quase nunca</IonLabel>
                                <IonRadio color="primary" value="1"></IonRadio>
                                </IonItem>

                                <IonItem>
                                <IonLabel>2- algumas vezes</IonLabel>
                                <IonRadio color="primary" value="2"></IonRadio>
                                </IonItem>
                               
                                <IonItem>
                                <IonLabel>3- frequentemente</IonLabel>
                                <IonRadio color="primary" value="3"></IonRadio>
                                </IonItem>

                                <IonItem>
                                <IonLabel>4- muito frequentemente</IonLabel>
                                <IonRadio color="primary" value="4"></IonRadio>
                                </IonItem>
 
                            </IonRadioGroup> )} control={control} name={"pss_pss04"}/>
                    </IonItem>

                    <IonLabel>...sentiu que estava lidando de forma eficaz com as mudanças importantes que estavam acontecendo em sua vida?</IonLabel>
                    <IonItem>
                    
                    <Controller render={({onChange}) => (
                             <IonRadioGroup onIonChange={(e)=> {
                                console.log(e);
                                onChange(e.detail.value);
                                if (e.detail.value != undefined) {
                                props.setState('pss_pss05', e.detail.value )} } }>

                                <IonItem>
                                <IonLabel>0- nunca</IonLabel>
                                <IonRadio color="primary" value="0"></IonRadio>
                                </IonItem>
                               
                                <IonItem>
                                <IonLabel>1- quase nunca</IonLabel>
                                <IonRadio color="primary" value="1"></IonRadio>
                                </IonItem>

                                <IonItem>
                                <IonLabel>2- algumas vezes</IonLabel>
                                <IonRadio color="primary" value="2"></IonRadio>
                                </IonItem>
                               
                                <IonItem>
                                <IonLabel>3- frequentemente</IonLabel>
                                <IonRadio color="primary" value="3"></IonRadio>
                                </IonItem>

                                <IonItem>
                                <IonLabel>4- muito frequentemente</IonLabel>
                                <IonRadio color="primary" value="4"></IonRadio>
                                </IonItem>
 
                            </IonRadioGroup> )} control={control} name={"pss_pss05"}/>
                    </IonItem>

                    <IonLabel>...se sentiu confiante nas suas capacidades para lidar com os seus problemas pessoais?</IonLabel>
                    <IonItem>
                    
                    <Controller render={({onChange}) => (
                             <IonRadioGroup onIonChange={(e)=> {
                                console.log(e);
                                onChange(e.detail.value);
                                if (e.detail.value != undefined) {
                                props.setState('pss_pss06', e.detail.value )} } }>

                                <IonItem>
                                <IonLabel>0- nunca</IonLabel>
                                <IonRadio color="primary" value="0"></IonRadio>
                                </IonItem>
                               
                                <IonItem>
                                <IonLabel>1- quase nunca</IonLabel>
                                <IonRadio color="primary" value="1"></IonRadio>
                                </IonItem>

                                <IonItem>
                                <IonLabel>2- algumas vezes</IonLabel>
                                <IonRadio color="primary" value="2"></IonRadio>
                                </IonItem>
                               
                                <IonItem>
                                <IonLabel>3- frequentemente</IonLabel>
                                <IonRadio color="primary" value="3"></IonRadio>
                                </IonItem>

                                <IonItem>
                                <IonLabel>4- muito frequentemente</IonLabel>
                                <IonRadio color="primary" value="4"></IonRadio>
                                </IonItem>
 
                            </IonRadioGroup> )} control={control} name={"pss_pss06"}/>
                    </IonItem>

                    <IonLabel>...sentiu que as coisas estavam ocorrendo a sua maneira (do seu jeito)?</IonLabel>
                    <IonItem>
                    
                    <Controller render={({onChange}) => (
                             <IonRadioGroup onIonChange={(e)=> {
                                console.log(e);
                                onChange(e.detail.value);
                                if (e.detail.value != undefined) {
                                props.setState('pss_pss07', e.detail.value )} } }>

                                <IonItem>
                                <IonLabel>0- nunca</IonLabel>
                                <IonRadio color="primary" value="0"></IonRadio>
                                </IonItem>
                               
                                <IonItem>
                                <IonLabel>1- quase nunca</IonLabel>
                                <IonRadio color="primary" value="1"></IonRadio>
                                </IonItem>

                                <IonItem>
                                <IonLabel>2- algumas vezes</IonLabel>
                                <IonRadio color="primary" value="2"></IonRadio>
                                </IonItem>
                               
                                <IonItem>
                                <IonLabel>3- frequentemente</IonLabel>
                                <IonRadio color="primary" value="3"></IonRadio>
                                </IonItem>

                                <IonItem>
                                <IonLabel>4- muito frequentemente</IonLabel>
                                <IonRadio color="primary" value="4"></IonRadio>
                                </IonItem>
 
                            </IonRadioGroup> )} control={control} name={"pss_pss07"}/>
                    </IonItem>

                    <IonLabel>...percebeu que não poderia lidar com todas as coisas que você tinha para fazer?</IonLabel>
                    <IonItem>
                    <Controller render={({onChange}) => (
                             <IonRadioGroup onIonChange={(e)=> {
                                console.log(e);
                                onChange(e.detail.value);
                                if (e.detail.value != undefined) {
                                props.setState('pss_pss08', e.detail.value )} } }>

                                <IonItem>
                                <IonLabel>0- nunca</IonLabel>
                                <IonRadio color="primary" value="0"></IonRadio>
                                </IonItem>
                               
                                <IonItem>
                                <IonLabel>1- quase nunca</IonLabel>
                                <IonRadio color="primary" value="1"></IonRadio>
                                </IonItem>

                                <IonItem>
                                <IonLabel>2- algumas vezes</IonLabel>
                                <IonRadio color="primary" value="2"></IonRadio>
                                </IonItem>
                               
                                <IonItem>
                                <IonLabel>3- frequentemente</IonLabel>
                                <IonRadio color="primary" value="3"></IonRadio>
                                </IonItem>

                                <IonItem>
                                <IonLabel>4- muito frequentemente</IonLabel>
                                <IonRadio color="primary" value="4"></IonRadio>
                                </IonItem>
 
                            </IonRadioGroup> )} control={control} name={"pss_pss08"}/>
                    </IonItem>

                    <IonLabel>...foi capaz de controlar as irritações da sua vida?</IonLabel>
                    <IonItem>
                    

                    <Controller render={({onChange}) => (
                             <IonRadioGroup onIonChange={(e)=> {
                                console.log(e);
                                onChange(e.detail.value);
                                if (e.detail.value != undefined) {
                                props.setState('pss_pss09', e.detail.value )} } }>

                                <IonItem>
                                <IonLabel>0- nunca</IonLabel>
                                <IonRadio color="primary" value="0"></IonRadio>
                                </IonItem>
                               
                                <IonItem>
                                <IonLabel>1- quase nunca</IonLabel>
                                <IonRadio color="primary" value="1"></IonRadio>
                                </IonItem>

                                <IonItem>
                                <IonLabel>2- algumas vezes</IonLabel>
                                <IonRadio color="primary" value="2"></IonRadio>
                                </IonItem>
                               
                                <IonItem>
                                <IonLabel>3- frequentemente</IonLabel>
                                <IonRadio color="primary" value="3"></IonRadio>
                                </IonItem>

                                <IonItem>
                                <IonLabel>4- muito frequentemente</IonLabel>
                                <IonRadio color="primary" value="4"></IonRadio>
                                </IonItem>
 
                            </IonRadioGroup> )} control={control} name={"pss_pss09"}/>
                    </IonItem>

                    <IonLabel>...sentiu que estava no topo das coisas (no controle das coisas)?</IonLabel>
                    <IonItem>
                    
                    <Controller render={({onChange}) => (
                             <IonRadioGroup onIonChange={(e)=> {
                                console.log(e);
                                onChange(e.detail.value);
                                if (e.detail.value != undefined) {
                                props.setState('pss_pss10', e.detail.value )} } }>

                                <IonItem>
                                <IonLabel>0- nunca</IonLabel>
                                <IonRadio color="primary" value="0"></IonRadio>
                                </IonItem>
                               
                                <IonItem>
                                <IonLabel>1- quase nunca</IonLabel>
                                <IonRadio color="primary" value="1"></IonRadio>
                                </IonItem>

                                <IonItem>
                                <IonLabel>2- algumas vezes</IonLabel>
                                <IonRadio color="primary" value="2"></IonRadio>
                                </IonItem>
                               
                                <IonItem>
                                <IonLabel>3- frequentemente</IonLabel>
                                <IonRadio color="primary" value="3"></IonRadio>
                                </IonItem>

                                <IonItem>
                                <IonLabel>4- muito frequentemente</IonLabel>
                                <IonRadio color="primary" value="4"></IonRadio>
                                </IonItem>
 
                            </IonRadioGroup> )} control={control} name={"pss_pss10"}/>
                    </IonItem>

                    <IonLabel>...se irritou por coisas que aconteceram que estavam fora do seu controle?</IonLabel>
                    <IonItem>
                    
                    <Controller render={({onChange}) => (
                             <IonRadioGroup onIonChange={(e)=> {
                                console.log(e);
                                onChange(e.detail.value);
                                if (e.detail.value != undefined) {
                                props.setState('pss_pss11', e.detail.value )} } }>

                                <IonItem>
                                <IonLabel>0- nunca</IonLabel>
                                <IonRadio color="primary" value="0"></IonRadio>
                                </IonItem>
                               
                                <IonItem>
                                <IonLabel>1- quase nunca</IonLabel>
                                <IonRadio color="primary" value="1"></IonRadio>
                                </IonItem>

                                <IonItem>
                                <IonLabel>2- algumas vezes</IonLabel>
                                <IonRadio color="primary" value="2"></IonRadio>
                                </IonItem>
                               
                                <IonItem>
                                <IonLabel>3- frequentemente</IonLabel>
                                <IonRadio color="primary" value="3"></IonRadio>
                                </IonItem>

                                <IonItem>
                                <IonLabel>4- muito frequentemente</IonLabel>
                                <IonRadio color="primary" value="4"></IonRadio>
                                </IonItem>
 
                            </IonRadioGroup> )} control={control} name={"pss_pss11"}/>
                    </IonItem>

                    <IonLabel>...deu por si pensando nas coisas que tinha que fazer?</IonLabel>
                    <IonItem>
                    
                    <Controller render={({onChange}) => (
                             <IonRadioGroup onIonChange={(e)=> {
                                console.log(e);
                                onChange(e.detail.value);
                                if (e.detail.value != undefined) {
                                props.setState('pss_pss12', e.detail.value )} } }>

                                <IonItem>
                                <IonLabel>0- nunca</IonLabel>
                                <IonRadio color="primary" value="0"></IonRadio>
                                </IonItem>
                               
                                <IonItem>
                                <IonLabel>1- quase nunca</IonLabel>
                                <IonRadio color="primary" value="1"></IonRadio>
                                </IonItem>

                                <IonItem>
                                <IonLabel>2- algumas vezes</IonLabel>
                                <IonRadio color="primary" value="2"></IonRadio>
                                </IonItem>
                               
                                <IonItem>
                                <IonLabel>3- frequentemente</IonLabel>
                                <IonRadio color="primary" value="3"></IonRadio>
                                </IonItem>

                                <IonItem>
                                <IonLabel>4- muito frequentemente</IonLabel>
                                <IonRadio color="primary" value="4"></IonRadio>
                                </IonItem>
 
                            </IonRadioGroup> )} control={control} name={"pss_pss12"}/>
                    </IonItem>

                    <IonLabel>...foi capaz de controlar a maneira de como gastar seu tempo?</IonLabel>
                    <IonItem>
                    
                    <Controller render={({onChange}) => (
                             <IonRadioGroup onIonChange={(e)=> {
                                console.log(e);
                                onChange(e.detail.value);
                                if (e.detail.value != undefined) {
                                props.setState('pss_pss13', e.detail.value )} } }>

                                <IonItem>
                                <IonLabel>0- nunca</IonLabel>
                                <IonRadio color="primary" value="0"></IonRadio>
                                </IonItem>
                               
                                <IonItem>
                                <IonLabel>1- quase nunca</IonLabel>
                                <IonRadio color="primary" value="1"></IonRadio>
                                </IonItem>

                                <IonItem>
                                <IonLabel>2- algumas vezes</IonLabel>
                                <IonRadio color="primary" value="2"></IonRadio>
                                </IonItem>
                               
                                <IonItem>
                                <IonLabel>3- frequentemente</IonLabel>
                                <IonRadio color="primary" value="3"></IonRadio>
                                </IonItem>

                                <IonItem>
                                <IonLabel>4- muito frequentemente</IonLabel>
                                <IonRadio color="primary" value="4"></IonRadio>
                                </IonItem>
 
                            </IonRadioGroup> )} control={control} name={"pss_pss13"}/>
                    </IonItem>

                    <IonLabel>...sentiu que as dificuldades estavam se acumulando tanto que você não poderia superá-las?</IonLabel>
                    <IonItem>
                    
                    <Controller render={({onChange}) => (
                             <IonRadioGroup onIonChange={(e)=> {
                                console.log(e);
                                onChange(e.detail.value);
                                if (e.detail.value != undefined) {
                                props.setState('pss_pss14', e.detail.value )} } }>

                                <IonItem>
                                <IonLabel>0- nunca</IonLabel>
                                <IonRadio color="primary" value="0"></IonRadio>
                                </IonItem>
                               
                                <IonItem>
                                <IonLabel>1- quase nunca</IonLabel>
                                <IonRadio color="primary" value="1"></IonRadio>
                                </IonItem>

                                <IonItem>
                                <IonLabel>2- algumas vezes</IonLabel>
                                <IonRadio color="primary" value="2"></IonRadio>
                                </IonItem>
                               
                                <IonItem>
                                <IonLabel>3- frequentemente</IonLabel>
                                <IonRadio color="primary" value="3"></IonRadio>
                                </IonItem>

                                <IonItem>
                                <IonLabel>4- muito frequentemente</IonLabel>
                                <IonRadio color="primary" value="4"></IonRadio>
                                </IonItem>
 
                            </IonRadioGroup> )} control={control} name={"pss_pss14"}/>
                    </IonItem>
            
            <IonButton disabled={props.isFirst()}onClick={props.prev} size="large">Anterior</IonButton>
            <IonButton onClick={props.next} size="large" className={"btnProximo"}>Próximo</IonButton>
            </form>

        </div>

        </IonContent>
    )
}

export default Step9; 