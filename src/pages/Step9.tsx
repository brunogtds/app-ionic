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


import { object, string, number } from 'yup';

const Step9 = (props: StepComponentProps) => {
 
    return(
        <IonContent fullscreen> 
        <div>
            <form className={"ion-padding"}>
            
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


            </IonItem>
            
            <IonButton disabled={props.isFirst()}onClick={props.prev}>Anterior</IonButton>
            <IonButton onClick={props.next}>Próximo</IonButton>
            </form>

        </div>

        </IonContent>
    )
}

export default Step9; 