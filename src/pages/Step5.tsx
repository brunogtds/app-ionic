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

const Step5 = (props: StepComponentProps) => {

    const {control, watch, handleSubmit} = useForm();
 
    return(
        <IonContent fullscreen> 
        <div>
            <form className={"ion-padding"}>

            <IonProgressBar value={0.5} buffer={0.5}></IonProgressBar>
            
            <IonItem>
                <IonLabel>Nas últimas duas semanas, com que frequência você foi incomodado pelos seguintes problemas: </IonLabel>
            </IonItem>


            <IonItem>
            <IonGrid fixed={true}>
                            <IonRow>
                                <IonCol> </IonCol>
                                <IonCol>Nenhuma vez</IonCol>
                                <IonCol>Vários dias</IonCol>
                                <IonCol>Mais da metade dos dias</IonCol>
                                <IonCol>Quase todos os dias</IonCol>
                             
                             </IonRow>
                             <IonRadioGroup>
                             <IonRow>
                            
                                <IonCol>Sentir-se nervoso, ansioso ou no limite.</IonCol>
                                    
                                    <IonCol><IonRadio color="primary"></IonRadio></IonCol>
                                    <IonCol><IonRadio color="primary"></IonRadio></IonCol>
                                    <IonCol><IonRadio color="primary"></IonRadio></IonCol>
                                    <IonCol><IonRadio color="primary"></IonRadio></IonCol>
                                   
                              
                             </IonRow>
                             </IonRadioGroup> 
                             <IonRadioGroup>
                             <IonRow>
                             
                                <IonCol>Não ser capaz de parar ou controlar as preocupações. </IonCol>
                                    
                                    <IonCol><IonRadio color="primary"></IonRadio></IonCol>
                                    <IonCol><IonRadio color="primary"></IonRadio></IonCol>
                                    <IonCol><IonRadio color="primary"></IonRadio></IonCol>
                                    <IonCol><IonRadio color="primary"></IonRadio></IonCol>
                                   
                               
                             </IonRow>
                             </IonRadioGroup>  

                            <IonRadioGroup>
                              <IonRow>
                             
                                <IonCol>Preocupar-se muito com coisas diferentes. </IonCol>
                                    
                                    <IonCol><IonRadio color="primary"></IonRadio></IonCol>
                                    <IonCol><IonRadio color="primary"></IonRadio></IonCol>
                                    <IonCol><IonRadio color="primary"></IonRadio></IonCol>
                                    <IonCol><IonRadio color="primary"></IonRadio></IonCol>
                                   
                               
                             </IonRow>
                             </IonRadioGroup>

                             <IonRadioGroup>
                              <IonRow>
                             
                                <IonCol>Dificuldade de relaxar	. </IonCol>
                                    
                                    <IonCol><IonRadio color="primary"></IonRadio></IonCol>
                                    <IonCol><IonRadio color="primary"></IonRadio></IonCol>
                                    <IonCol><IonRadio color="primary"></IonRadio></IonCol>
                                    <IonCol><IonRadio color="primary"></IonRadio></IonCol>
                                   
                               
                             </IonRow>
                             </IonRadioGroup>

                             <IonRadioGroup>
                              <IonRow>
                             
                                <IonCol>Ser tão inquieto que é difícil ficar parado. </IonCol>
                                    
                                    <IonCol><IonRadio color="primary"></IonRadio></IonCol>
                                    <IonCol><IonRadio color="primary"></IonRadio></IonCol>
                                    <IonCol><IonRadio color="primary"></IonRadio></IonCol>
                                    <IonCol><IonRadio color="primary"></IonRadio></IonCol>
                                
                               
                             </IonRow>
                             </IonRadioGroup>

                             <IonRadioGroup>
                              <IonRow>
                             
                                <IonCol>Tornar-se facilmente irritado ou irritável. </IonCol>
                                    
                                    <IonCol><IonRadio color="primary"></IonRadio></IonCol>
                                    <IonCol><IonRadio color="primary"></IonRadio></IonCol>
                                    <IonCol><IonRadio color="primary"></IonRadio></IonCol>
                                    <IonCol><IonRadio color="primary"></IonRadio></IonCol>
                                 
                               
                             </IonRow>
                             </IonRadioGroup>

                             <IonRadioGroup>
                              <IonRow>
                             
                                <IonCol>Sentir medo como se algo terrível pudesse acontecer. </IonCol>
                                    
                                    <IonCol><IonRadio color="primary"></IonRadio></IonCol>
                                    <IonCol><IonRadio color="primary"></IonRadio></IonCol>
                                    <IonCol><IonRadio color="primary"></IonRadio></IonCol>
                                    <IonCol><IonRadio color="primary"></IonRadio></IonCol>
                                
                               
                             </IonRow>
                             </IonRadioGroup>

                            
                           

                            
                             
                        </IonGrid>
            </IonItem>            
            <IonButton disabled={props.isFirst()}onClick={props.prev}>Anterior</IonButton>
            <IonButton onClick={props.next}>Próximo</IonButton>
            </form>

        </div>

        </IonContent>
    )
}

export default Step5; 