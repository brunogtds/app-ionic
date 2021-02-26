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

const Step8 = (props: StepComponentProps) => {
    const {control, watch, handleSubmit} = useForm();
    const [problemasSono, setProblemasSono] = useState();
 
    return(
        <IonContent fullscreen> 
        <div>
            <form className={"ion-padding"}>

            <IonProgressBar value={0.8} buffer={0.8}></IonProgressBar>
            
            <IonItem>
                <IonLabel>Você tem tido problemas com seu sono?</IonLabel>

                <Controller render={({onChange}) => (
                            <IonRadioGroup value={problemasSono} onIonChange={(e) => {setProblemasSono(e.detail.value);
                                if (e.detail.value != undefined) {
                                props.setState('sleepProblem', e.detail.value )}}}>

                                <IonItem>
                                <IonLabel>Sim</IonLabel>
                                <IonRadio color="primary" value="sim"></IonRadio>
                                </IonItem>
                               
                                <IonItem>
                                <IonLabel>Não</IonLabel>
                                <IonRadio color="primary" value="não"></IonRadio>
                                </IonItem>
                            </IonRadioGroup> )} control={control} name={"sleepProblem"}/>
            </IonItem>

              {/*
            
            <IonItem>
                <IonLabel>Por favor, avalie a gravidade da sua insônia nas duas últiams semanas, em relação a:</IonLabel>
                <IonGrid fixed={true}>
                            <IonRow>
                                <IonCol> </IonCol>
                                <IonCol>Nenhuma</IonCol>
                                <IonCol>Leve</IonCol>
                                <IonCol>Moderada</IonCol>
                                <IonCol>Grave</IonCol>
                                <IonCol>Muito grave</IonCol>
  
                             </IonRow>
                             <IonRadioGroup>
                             <IonRow>
                            
                                <IonCol>Dificuldade de pegar no sono.</IonCol>
                                    
                                    <IonCol><IonRadio color="primary"></IonRadio></IonCol>
                                    <IonCol><IonRadio color="primary"></IonRadio></IonCol>
                                    <IonCol><IonRadio color="primary"></IonRadio></IonCol>
                                    <IonCol><IonRadio color="primary"></IonRadio></IonCol>
                                    <IonCol><IonRadio color="primary"></IonRadio></IonCol>
                                   
                              
                             </IonRow>
                             </IonRadioGroup> 
                             <IonRadioGroup>
                             <IonRow>
                             
                                <IonCol>Dificuldade de manter o sono.	 </IonCol>
                                    
                                <IonCol><IonRadio color="primary"></IonRadio></IonCol>
                                    <IonCol><IonRadio color="primary"></IonRadio></IonCol>
                                    <IonCol><IonRadio color="primary"></IonRadio></IonCol>
                                    <IonCol><IonRadio color="primary"></IonRadio></IonCol>
                                    <IonCol><IonRadio color="primary"></IonRadio></IonCol>
                               
                             </IonRow>
                             </IonRadioGroup>  

                            <IonRadioGroup>
                              <IonRow>
                             
                                <IonCol>Problema de despertar muito cedo. </IonCol>
                                    
                                <IonCol><IonRadio color="primary"></IonRadio></IonCol>
                                    <IonCol><IonRadio color="primary"></IonRadio></IonCol>
                                    <IonCol><IonRadio color="primary"></IonRadio></IonCol>
                                    <IonCol><IonRadio color="primary"></IonRadio></IonCol>
                                    <IonCol><IonRadio color="primary"></IonRadio></IonCol>
                               
                             </IonRow>
                             </IonRadioGroup>

   
            </IonGrid> 
            </IonItem>*/}

            {problemasSono == "sim" ?
            <IonItem>

            <IonLabel>Por favor, avalie a gravidade da sua insônia nas duas últiams semanas, em relação a:</IonLabel>
            </IonItem>
            :null }

            {problemasSono == "sim" ?
            
                
                <IonItem>

                             <IonLabel>Dificuldade de pegar no sono.</IonLabel>
                             <Controller render={({onChange}) => (
                             <IonRadioGroup onIonChange={(e)=> {
                                console.log(e);
                                onChange(e.detail.value); 
                                if (e.detail.value != undefined) {
                                props.setState('isi_isi01', e.detail.value )}}}>

                                <IonItem>
                                <IonLabel>Nenhuma</IonLabel>
                                <IonRadio color="primary" value="0"></IonRadio>
                                </IonItem>
                               
                                <IonItem>
                                <IonLabel>Leve</IonLabel>
                                <IonRadio color="primary" value="1"></IonRadio>
                                </IonItem>

                                <IonItem>
                                <IonLabel>Moderada</IonLabel>
                                <IonRadio color="primary" value="2"></IonRadio>
                                </IonItem>
                               
                                <IonItem>
                                <IonLabel>Grave</IonLabel>
                                <IonRadio color="primary" value="3"></IonRadio>
                                </IonItem>

                                <IonItem>
                                <IonLabel>Muito grave</IonLabel>
                                <IonRadio color="primary" value="4"></IonRadio>
                                </IonItem>
      
                            </IonRadioGroup> )} control={control} name='isi_isi01'/>
                    </IonItem>  :null }

                    {problemasSono == "sim" ?
                <IonItem>

                             <IonLabel>Dificuldade de manter o sono.</IonLabel>

                             <Controller render={({onChange}) => (
                             <IonRadioGroup onIonChange={(e)=> {
                                console.log(e);
                                onChange(e.detail.value); 
                                if (e.detail.value != undefined) {
                                props.setState('isi_isi02', e.detail.value )}}}>

                                <IonItem>
                                <IonLabel>Nenhuma</IonLabel>
                                <IonRadio color="primary" value="0"></IonRadio>
                                </IonItem>
                               
                                <IonItem>
                                <IonLabel>Leve</IonLabel>
                                <IonRadio color="primary" value="1"></IonRadio>
                                </IonItem>

                                <IonItem>
                                <IonLabel>Moderada</IonLabel>
                                <IonRadio color="primary" value="2"></IonRadio>
                                </IonItem>
                               
                                <IonItem>
                                <IonLabel>Grave</IonLabel>
                                <IonRadio color="primary" value="3"></IonRadio>
                                </IonItem>

                                <IonItem>
                                <IonLabel>Muito grave</IonLabel>
                                <IonRadio color="primary" value="4"></IonRadio>
                                </IonItem>
      
                            </IonRadioGroup> )} control={control} name='isi_isi02'/>
                    </IonItem> :null }

                    {problemasSono == "sim" ?
                    <IonItem>

                             <IonLabel>Problema de despertar muito cedo.</IonLabel>

                             <Controller render={({onChange}) => (
                             <IonRadioGroup onIonChange={(e)=> {
                                console.log(e);
                                onChange(e.detail.value); 
                                if (e.detail.value != undefined) {
                                props.setState('isi_isi03', e.detail.value )}}}>

                                <IonItem>
                                <IonLabel>Nenhuma</IonLabel>
                                <IonRadio color="primary" value="0"></IonRadio>
                                </IonItem>
                               
                                <IonItem>
                                <IonLabel>Leve</IonLabel>
                                <IonRadio color="primary" value="1"></IonRadio>
                                </IonItem>

                                <IonItem>
                                <IonLabel>Moderada</IonLabel>
                                <IonRadio color="primary" value="2"></IonRadio>
                                </IonItem>
                               
                                <IonItem>
                                <IonLabel>Grave</IonLabel>
                                <IonRadio color="primary" value="3"></IonRadio>
                                </IonItem>

                                <IonItem>
                                <IonLabel>Muito grave</IonLabel>
                                <IonRadio color="primary" value="4"></IonRadio>
                                </IonItem>
      
                            </IonRadioGroup> )} control={control} name='isi_isi03'/>
                    </IonItem>

           
            
            
            
            :null }
            
            <IonButton disabled={props.isFirst()}onClick={props.prev} size="large">Anterior</IonButton>
            <IonButton onClick={props.next} size="large" className={"btnProximo"}>Próximo</IonButton>
            </form>

        </div>

        </IonContent>
    )
}

export default Step8; 