import React from "react";
import {StepComponentProps} from "react-step-builder";

import { IonItem, IonLabel, IonRadioGroup, IonRadio, IonButton, IonList, IonLoading, IonCard, IonCardContent, IonText} from "@ionic/react";
import { IonContent } from '@ionic/react';

import '../../Forms.css';

import { useForm, Controller } from "react-hook-form";


import { IonProgressBar} from '@ionic/react';
import {useState} from 'react';

import  {Redirect, useHistory } from 'react-router-dom'


//imports user context do reactfire

import {useUser} from 'reactfire';
import firebase from 'firebase';


const Gad7 = (props: StepComponentProps) => {

    const {control, watch, handleSubmit, errors, formState} = useForm({mode: "onChange"});

    const {data: user}= useUser();
   const [dataUser, setData] = useState()

   const history= useHistory();
   const [loader, setLoader]= useState<boolean>(false)

  
    return(
        <IonContent fullscreen color="light"> 
        
        <div>
            <form className={"ion-padding"}>
            <IonLoading message="Por favor aguarde..." duration={2000} isOpen={loader}/>

                       
            <IonCard color="secondary">
           
            <IonCardContent>
            
            Agora vamos falar sobre como você tem se sentido nas duas últimas semanas.
            
            </IonCardContent>
            </IonCard>
                      
          
                <IonLabel className="questions">Nas últimas duas semanas, com que frequência você foi incomodado pelos seguintes problemas: </IonLabel>
           

                <IonList>
                <IonLabel className="questions">Sentir-se nervoso, ansioso ou no limite.</IonLabel>
                 <IonItem>

                 <Controller render={({onChange}) => (

                             <IonRadioGroup onIonChange={(e)=> {
                                console.log(e);
                                onChange(e.detail.value);
                                if (e.detail.value != undefined) {
                                props.setState('gad7_gad01', e.detail.value )} }}>

                                <IonItem>
                                <IonLabel>Nenhuma vez</IonLabel>
                                <IonRadio className={"radio-options"} color="primary" value="0"></IonRadio>
                                </IonItem>
                               
                                <IonItem>
                                <IonLabel>Vários dias</IonLabel>
                                <IonRadio className={"radio-options"} color="primary" value="1"></IonRadio>
                                </IonItem>

                                <IonItem>
                                <IonLabel>Mais da metade dos dias</IonLabel>
                                <IonRadio className={"radio-options"} color="primary" value="2"></IonRadio>
                                </IonItem>
                               
                                <IonItem>
                                <IonLabel>Quase todos dias</IonLabel>
                                <IonRadio color="primary" value="3"></IonRadio>
                                </IonItem>
                               
                            </IonRadioGroup> )} control={control} name={"gad7_gad01"} rules={{required:true}}/>
                        
                    </IonItem>
                    {errors.gad7_gad01 && <IonText color="danger">Campo obrigatório.</IonText>}

                    <IonLabel className="questions">Não ser capaz de parar ou controlar as preocupações.</IonLabel>

                     <IonItem>

                             

                             <Controller render={({onChange}) => (

                             <IonRadioGroup onIonChange={(e)=> {
                                console.log(e);
                                onChange(e.detail.value);
                                if (e.detail.value != undefined) {
                                props.setState('gad7_gad02', e.detail.value )} }}>

                                <IonItem>
                                <IonLabel>Nenhuma vez</IonLabel>
                                <IonRadio className={"radio-options"} color="primary" value="0"></IonRadio>
                                </IonItem>
                               
                                <IonItem>
                                <IonLabel>Vários dias</IonLabel>
                                <IonRadio className={"radio-options"} color="primary" value="1"></IonRadio>
                                </IonItem>

                                <IonItem>
                                <IonLabel>Mais da metade dos dias</IonLabel>
                                <IonRadio className={"radio-options"} color="primary" value="2"></IonRadio>
                                </IonItem>
                               
                                <IonItem>
                                <IonLabel>Quase todos dias</IonLabel>
                                <IonRadio className={"radio-options"} color="primary" value="3"></IonRadio>
                                </IonItem>
                               
                            </IonRadioGroup> )} control={control} name={"gad7_gad02"} rules={{required:true}}/>
                            {errors.gad7_gad02 && <IonText color="danger">Campo obrigatório.</IonText>}
                    </IonItem>

                    <IonLabel className="questions">Preocupar-se muito com coisas diferentes.</IonLabel>
                     <IonItem>

                             

                            <Controller render={({onChange}) => (

                             <IonRadioGroup onIonChange={(e)=> {
                                console.log(e);
                                onChange(e.detail.value);
                                if (e.detail.value != undefined) {
                                props.setState('gad7_gad03', e.detail.value )} }}>

                                <IonItem>
                                <IonLabel>Nenhuma vez</IonLabel>
                                <IonRadio className={"radio-options"} color="primary" value="0"></IonRadio>
                                </IonItem>
                               
                                <IonItem>
                                <IonLabel>Vários dias</IonLabel>
                                <IonRadio className={"radio-options"} color="primary" value="1"></IonRadio>
                                </IonItem>

                                <IonItem>
                                <IonLabel>Mais da metade dos dias</IonLabel>
                                <IonRadio className={"radio-options"} color="primary" value="2"></IonRadio>
                                </IonItem>
                               
                                <IonItem>
                                <IonLabel>Quase todos dias</IonLabel>
                                <IonRadio className={"radio-options"} color="primary" value="3"></IonRadio>
                                </IonItem>
                               
                            </IonRadioGroup> )} control={control} name={"gad7_gad03"} rules={{required:true}}/>
                            {errors.gad7_gad03 && <IonText color="danger">Campo obrigatório.</IonText>}
                    </IonItem>

                    <IonLabel className="questions">Dificuldade de relaxar.</IonLabel>
                     <IonItem>

                            

                            <Controller render={({onChange}) => (

                             <IonRadioGroup  onIonChange={(e)=> {
                                console.log(e);
                                onChange(e.detail.value);
                                if (e.detail.value != undefined) {
                                props.setState('gad7_gad04', e.detail.value )} }}>

                                <IonItem>
                                <IonLabel>Nenhuma vez</IonLabel>
                                <IonRadio className={"radio-options"} color="primary" value="0"></IonRadio>
                                </IonItem>
                               
                                <IonItem>
                                <IonLabel>Vários dias</IonLabel>
                                <IonRadio className={"radio-options"} color="primary" value="1"></IonRadio>
                                </IonItem>

                                <IonItem>
                                <IonLabel>Mais da metade dos dias</IonLabel>
                                <IonRadio className={"radio-options"} color="primary" value="2"></IonRadio>
                                </IonItem>
                               
                                <IonItem>
                                <IonLabel>Quase todos dias</IonLabel>
                                <IonRadio className={"radio-options"} color="primary" value="3"></IonRadio>
                                </IonItem>
                               
                            </IonRadioGroup> )} control={control} name={"gad7_gad04"} rules={{required:true}}/>
                            {errors.gad7_gad04 && <IonText color="danger">Campo obrigatório.</IonText>}
                    </IonItem>

                    <IonLabel className="questions">Ser tão inquieto que é difícil ficar parado.</IonLabel>
                     <IonItem>
                     
                        <Controller render={({onChange}) => (

                             <IonRadioGroup  onIonChange={(e)=> {
                                console.log(e);
                                onChange(e.detail.value);
                                if (e.detail.value != undefined) {
                                props.setState('gad7_gad05', e.detail.value )} }}>

                                <IonItem>
                                <IonLabel>Nenhuma vez</IonLabel>
                                <IonRadio className={"radio-options"} color="primary" value="0"></IonRadio>
                                </IonItem>
                               
                                <IonItem>
                                <IonLabel>Vários dias</IonLabel>
                                <IonRadio className={"radio-options"} color="primary" value="1"></IonRadio>
                                </IonItem>

                                <IonItem>
                                <IonLabel>Mais da metade dos dias</IonLabel>
                                <IonRadio className={"radio-options"} color="primary" value="2"></IonRadio>
                                </IonItem>
                               
                                <IonItem>
                                <IonLabel>Quase todos dias</IonLabel>
                                <IonRadio className={"radio-options"} color="primary" value="3"></IonRadio>
                                </IonItem>
                               
                            </IonRadioGroup> )} control={control} name={"gad7_gad05"} rules={{required:true}}/>
                            {errors.gad7_gad05 && <IonText color="danger">Campo obrigatório.</IonText>}
                            

                                                        

                    </IonItem>


                    <IonLabel className="questions">Tonar-se facilmente irritado ou irritável.</IonLabel>
                     <IonItem>

                             

                            <Controller render={({onChange}) => (

                             <IonRadioGroup onIonChange={(e)=> {
                                console.log(e);
                                onChange(e.detail.value);
                                if (e.detail.value != undefined) {
                                props.setState('gad7_gad06', e.detail.value )} }}>

                                <IonItem>
                                <IonLabel>Nenhuma vez</IonLabel>
                                <IonRadio className={"radio-options"} color="primary" value="0"></IonRadio>
                                </IonItem>
                               
                                <IonItem>
                                <IonLabel>Vários dias</IonLabel>
                                <IonRadio className={"radio-options"} color="primary" value="1"></IonRadio>
                                </IonItem>

                                <IonItem>
                                <IonLabel>Mais da metade dos dias</IonLabel>
                                <IonRadio className={"radio-options"} color="primary" value="2"></IonRadio>
                                </IonItem>
                               
                                <IonItem>
                                <IonLabel>Quase todos dias</IonLabel>
                                <IonRadio className={"radio-options"} color="primary" value="3"></IonRadio>
                                </IonItem>
                               
                            </IonRadioGroup> )} control={control} name={"gad7_gad06"} rules={{required:true}}/>
                            {errors.gad7_gad06 && <IonText color="danger">Campo obrigatório.</IonText>}
                    </IonItem>

                    <IonLabel className="questions">Sentir medo como se algo terrível pudesse acontecer.</IonLabel>
                     <IonItem>

                             <Controller render={({onChange}) => (

                             <IonRadioGroup onIonChange={(e)=> {
                                console.log(e);
                                onChange(e.detail.value);
                                if (e.detail.value != undefined) {
                                props.setState('gad7_gad07', e.detail.value )} }}>

                                <IonItem>
                                <IonLabel>Nenhuma vez</IonLabel>
                                <IonRadio className={"radio-options"} color="primary" value="0"></IonRadio>
                                </IonItem>
                               
                                <IonItem>
                                <IonLabel>Vários dias</IonLabel>
                                <IonRadio className={"radio-options"} color="primary" value="1"></IonRadio>
                                </IonItem>

                                <IonItem>
                                <IonLabel>Mais da metade dos dias</IonLabel>
                                <IonRadio className={"radio-options"} color="primary" value="2"></IonRadio>
                                </IonItem>
                               
                                <IonItem>
                                <IonLabel>Quase todos dias</IonLabel>
                                <IonRadio className={"radio-options"} color="primary" value="3"></IonRadio>
                                </IonItem>
                               
                            </IonRadioGroup> )} control={control} name={"gad7_gad07"} rules={{required:true}}/>
                            {errors.gad7_gad07 && <IonText color="danger">Campo obrigatório.</IonText>}

                    </IonItem>
                    </IonList>



            <IonButton disabled={props.isFirst()}onClick={props.prev} size="large" fill="clear">Anterior</IonButton>
            <IonButton disabled={formState.isValid === false}  onClick={props.next} size="large" className={"btnProximo"} fill="clear">Próximo</IonButton>
            </form>

        </div>

        </IonContent>
    )
}

export default Gad7; 