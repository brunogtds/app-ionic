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

const Step6 = (props: StepComponentProps) => {

    const {control, watch, handleSubmit} = useForm();
 
    return(
        <IonContent fullscreen> 
        <div>
            <form className={"ion-padding"}>

            <IonProgressBar value={0.6} buffer={0.6}></IonProgressBar>
            
            <IonItem>
                 <IonLabel>Por favor, marque a alternativa que melhor descreva como a Sra./Sr. tenha se sentido nas últimas duas semanas.</IonLabel>
            </IonItem>
            
            <IonItem>
                <IonLabel>Nas últimas duas semanas...</IonLabel>
            </IonItem>

            <IonItem>
            <IonGrid fixed={true}>
                            <IonRow>
                                <IonCol> </IonCol>
                                <IonCol>o tempo todo</IonCol>
                                <IonCol>a maioria do tempo</IonCol>
                                <IonCol>mais do que a metade do tempo</IonCol>
                                <IonCol>às vezes</IonCol>
                                <IonCol>menos do que a metade do tempo</IonCol>
                                <IonCol>em nenhum momento</IonCol>
                             
                             </IonRow>
                             <IonRadioGroup>
                             <IonRow>
                            
                                <IonCol>... eu estava alegre e de bom humor.</IonCol>
                                    
                                    <IonCol><IonRadio color="primary"></IonRadio></IonCol>
                                    <IonCol><IonRadio color="primary"></IonRadio></IonCol>
                                    <IonCol><IonRadio color="primary"></IonRadio></IonCol>
                                    <IonCol><IonRadio color="primary"></IonRadio></IonCol>
                                    <IonCol><IonRadio color="primary"></IonRadio></IonCol>
                                    <IonCol><IonRadio color="primary"></IonRadio></IonCol>
                              
                             </IonRow>
                             </IonRadioGroup> 
                             <IonRadioGroup>
                             <IonRow>
                             
                                <IonCol>... me senti calmo e relaxado </IonCol>
                                    
                                    <IonCol><IonRadio color="primary"></IonRadio></IonCol>
                                    <IonCol><IonRadio color="primary"></IonRadio></IonCol>
                                    <IonCol><IonRadio color="primary"></IonRadio></IonCol>
                                    <IonCol><IonRadio color="primary"></IonRadio></IonCol>
                                    <IonCol><IonRadio color="primary"></IonRadio></IonCol>
                                    <IonCol><IonRadio color="primary"></IonRadio></IonCol>
                               
                             </IonRow>
                             </IonRadioGroup>  

                            <IonRadioGroup>
                              <IonRow>
                             
                                <IonCol>... me senti disposto e renovado ao acordar </IonCol>
                                    
                                    <IonCol><IonRadio color="primary"></IonRadio></IonCol>
                                    <IonCol><IonRadio color="primary"></IonRadio></IonCol>
                                    <IonCol><IonRadio color="primary"></IonRadio></IonCol>
                                    <IonCol><IonRadio color="primary"></IonRadio></IonCol>
                                    <IonCol><IonRadio color="primary"></IonRadio></IonCol>
                                    <IonCol><IonRadio color="primary"></IonRadio></IonCol>
                               
                             </IonRow>
                             </IonRadioGroup>

                             <IonRadioGroup>
                              <IonRow>
                             
                                <IonCol>... me senti cheio de energia e ativo </IonCol>
                                    
                                    <IonCol><IonRadio color="primary"></IonRadio></IonCol>
                                    <IonCol><IonRadio color="primary"></IonRadio></IonCol>
                                    <IonCol><IonRadio color="primary"></IonRadio></IonCol>
                                    <IonCol><IonRadio color="primary"></IonRadio></IonCol>
                                    <IonCol><IonRadio color="primary"></IonRadio></IonCol>
                                    <IonCol><IonRadio color="primary"></IonRadio></IonCol>
                               
                             </IonRow>
                             </IonRadioGroup>

                             <IonRadioGroup>
                              <IonRow>
                             
                                <IonCol>... o meu dia foi cheio de coisas que me interessavam	 </IonCol>
                                    
                                    <IonCol><IonRadio color="primary"></IonRadio></IonCol>
                                    <IonCol><IonRadio color="primary"></IonRadio></IonCol>
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

export default Step6; 

