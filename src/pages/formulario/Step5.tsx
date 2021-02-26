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


            {/*
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
            </IonItem>            */}


                <IonList>
                <IonLabel>Sentir-se nervoso, ansioso ou no limite.</IonLabel>
                 <IonItem>

                 <Controller render={({onChange}) => (

                             <IonRadioGroup onIonChange={(e)=> {
                                console.log(e);
                                onChange(e.detail.value);
                                if (e.detail.value != undefined) {
                                props.setState('gad7_gad01', e.detail.value )} }}>

                                <IonItem>
                                <IonLabel>Nenhuma vez</IonLabel>
                                <IonRadio color="primary" value="0"></IonRadio>
                                </IonItem>
                               
                                <IonItem>
                                <IonLabel>Vários dias</IonLabel>
                                <IonRadio color="primary" value="1"></IonRadio>
                                </IonItem>

                                <IonItem>
                                <IonLabel>Mais da metade dos dias</IonLabel>
                                <IonRadio color="primary" value="2"></IonRadio>
                                </IonItem>
                               
                                <IonItem>
                                <IonLabel>Quase todos dias</IonLabel>
                                <IonRadio color="primary" value="3"></IonRadio>
                                </IonItem>
                               
                            </IonRadioGroup> )} control={control} name={"gad7_gad01"}/>
                    </IonItem>

                    <IonLabel>Não ser capaz de parar ou controlar as preocupações.</IonLabel>

                     <IonItem>

                             

                             <Controller render={({onChange}) => (

                             <IonRadioGroup onIonChange={(e)=> {
                                console.log(e);
                                onChange(e.detail.value);
                                if (e.detail.value != undefined) {
                                props.setState('gad7_gad02', e.detail.value )} }}>

                                <IonItem>
                                <IonLabel>Nenhuma vez</IonLabel>
                                <IonRadio color="primary" value="0"></IonRadio>
                                </IonItem>
                               
                                <IonItem>
                                <IonLabel>Vários dias</IonLabel>
                                <IonRadio color="primary" value="1"></IonRadio>
                                </IonItem>

                                <IonItem>
                                <IonLabel>Mais da metade dos dias</IonLabel>
                                <IonRadio color="primary" value="2"></IonRadio>
                                </IonItem>
                               
                                <IonItem>
                                <IonLabel>Quase todos dias</IonLabel>
                                <IonRadio color="primary" value="3"></IonRadio>
                                </IonItem>
                               
                            </IonRadioGroup> )} control={control} name={"gad7_gad02"}/>
                    </IonItem>

                    <IonLabel>Preocupar-se muito com coisas diferentes.</IonLabel>
                     <IonItem>

                             

                            <Controller render={({onChange}) => (

                             <IonRadioGroup onIonChange={(e)=> {
                                console.log(e);
                                onChange(e.detail.value);
                                if (e.detail.value != undefined) {
                                props.setState('gad7_gad03', e.detail.value )} }}>

                                <IonItem>
                                <IonLabel>Nenhuma vez</IonLabel>
                                <IonRadio color="primary" value="0"></IonRadio>
                                </IonItem>
                               
                                <IonItem>
                                <IonLabel>Vários dias</IonLabel>
                                <IonRadio color="primary" value="1"></IonRadio>
                                </IonItem>

                                <IonItem>
                                <IonLabel>Mais da metade dos dias</IonLabel>
                                <IonRadio color="primary" value="2"></IonRadio>
                                </IonItem>
                               
                                <IonItem>
                                <IonLabel>Quase todos dias</IonLabel>
                                <IonRadio color="primary" value="3"></IonRadio>
                                </IonItem>
                               
                            </IonRadioGroup> )} control={control} name={"gad7_gad03"}/>
                    </IonItem>

                    <IonLabel>Dificuldade de relaxar.</IonLabel>
                     <IonItem>

                            

                            <Controller render={({onChange}) => (

                             <IonRadioGroup onIonChange={(e)=> {
                                console.log(e);
                                onChange(e.detail.value);
                                if (e.detail.value != undefined) {
                                props.setState('gad7_gad04', e.detail.value )} }}>

                                <IonItem>
                                <IonLabel>Nenhuma vez</IonLabel>
                                <IonRadio color="primary" value="0"></IonRadio>
                                </IonItem>
                               
                                <IonItem>
                                <IonLabel>Vários dias</IonLabel>
                                <IonRadio color="primary" value="1"></IonRadio>
                                </IonItem>

                                <IonItem>
                                <IonLabel>Mais da metade dos dias</IonLabel>
                                <IonRadio color="primary" value="2"></IonRadio>
                                </IonItem>
                               
                                <IonItem>
                                <IonLabel>Quase todos dias</IonLabel>
                                <IonRadio color="primary" value="3"></IonRadio>
                                </IonItem>
                               
                            </IonRadioGroup> )} control={control} name={"gad7_gad04"}/>
                    </IonItem>

                    <IonLabel>Ser tão inquieto que é difícil ficar parado.</IonLabel>
                     <IonItem>
                     
                        <Controller render={({onChange}) => (

                             <IonRadioGroup onIonChange={(e)=> {
                                console.log(e);
                                onChange(e.detail.value);
                                if (e.detail.value != undefined) {
                                props.setState('gad7_gad05', e.detail.value )} }}>

                                <IonItem>
                                <IonLabel>Nenhuma vez</IonLabel>
                                <IonRadio color="primary" value="0"></IonRadio>
                                </IonItem>
                               
                                <IonItem>
                                <IonLabel>Vários dias</IonLabel>
                                <IonRadio color="primary" value="1"></IonRadio>
                                </IonItem>

                                <IonItem>
                                <IonLabel>Mais da metade dos dias</IonLabel>
                                <IonRadio color="primary" value="2"></IonRadio>
                                </IonItem>
                               
                                <IonItem>
                                <IonLabel>Quase todos dias</IonLabel>
                                <IonRadio color="primary" value="3"></IonRadio>
                                </IonItem>
                               
                            </IonRadioGroup> )} control={control} name={"gad7_gad05"}/>
                            

                                                        

                    </IonItem>


                    <IonLabel>Tonar-se facilmente irritado ou irritável.</IonLabel>
                     <IonItem>

                             

                            <Controller render={({onChange}) => (

                             <IonRadioGroup onIonChange={(e)=> {
                                console.log(e);
                                onChange(e.detail.value);
                                if (e.detail.value != undefined) {
                                props.setState('gad7_gad06', e.detail.value )} }}>

                                <IonItem>
                                <IonLabel>Nenhuma vez</IonLabel>
                                <IonRadio color="primary" value="0"></IonRadio>
                                </IonItem>
                               
                                <IonItem>
                                <IonLabel>Vários dias</IonLabel>
                                <IonRadio color="primary" value="1"></IonRadio>
                                </IonItem>

                                <IonItem>
                                <IonLabel>Mais da metade dos dias</IonLabel>
                                <IonRadio color="primary" value="2"></IonRadio>
                                </IonItem>
                               
                                <IonItem>
                                <IonLabel>Quase todos dias</IonLabel>
                                <IonRadio color="primary" value="3"></IonRadio>
                                </IonItem>
                               
                            </IonRadioGroup> )} control={control} name={"gad7_gad06"}/>
                    </IonItem>

                    <IonLabel>Sentir medo como se algo terrível pudesse acontecer.</IonLabel>
                     <IonItem>

                             <Controller render={({onChange}) => (

                             <IonRadioGroup onIonChange={(e)=> {
                                console.log(e);
                                onChange(e.detail.value);
                                if (e.detail.value != undefined) {
                                props.setState('gad7_gad07', e.detail.value )} }}>

                                <IonItem>
                                <IonLabel>Nenhuma vez</IonLabel>
                                <IonRadio color="primary" value="0"></IonRadio>
                                </IonItem>
                               
                                <IonItem>
                                <IonLabel>Vários dias</IonLabel>
                                <IonRadio color="primary" value="1"></IonRadio>
                                </IonItem>

                                <IonItem>
                                <IonLabel>Mais da metade dos dias</IonLabel>
                                <IonRadio color="primary" value="2"></IonRadio>
                                </IonItem>
                               
                                <IonItem>
                                <IonLabel>Quase todos dias</IonLabel>
                                <IonRadio color="primary" value="3"></IonRadio>
                                </IonItem>
                               
                            </IonRadioGroup> )} control={control} name={"gad7_gad07"}/>

                    </IonItem>
                    </IonList>



            <IonButton disabled={props.isFirst()}onClick={props.prev} size="large">Anterior</IonButton>
            <IonButton onClick={props.next} size="large" className={"btnProximo"}>Próximo</IonButton>
            </form>

        </div>

        </IonContent>
    )
}

export default Step5; 