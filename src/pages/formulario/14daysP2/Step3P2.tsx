import React from "react";
import {StepComponentProps} from "react-step-builder";

import { IonItem, IonLabel, IonInput, IonSelect, IonSelectOption, IonButton, IonCheckbox, IonList, IonDatetime, IonNote, IonRadioGroup, IonRadio} from "@ionic/react";
import { IonContent} from '@ionic/react';
import '../Forms.css';

import { useForm, Controller } from "react-hook-form";

import {useState} from 'react';


import { IonProgressBar} from '@ionic/react';

//imports user context do reactfire

import {useUser} from 'reactfire';
import firebase from 'firebase';

/*STEP 1 => Página 1 do formulário
Se user autenticado entrou aqui -> createDataBaseQuest 1 cria a entrada na tabela users no Firebase  */

const Step3P2 = (props: StepComponentProps) => {

    const {data: user}= useUser();
    const [dataUser, setData] = useState()


                                  
  const {control, watch, handleSubmit} = useForm();

    

    return (
        <IonContent fullscreen> 
        <div>
            <form className={"ion-padding"}>

            <IonProgressBar value={0.48} buffer={0.48}></IonProgressBar>
            
            <IonItem>
                <IonLabel>Nas últimas duas semanas, com que frequência você foi incomodado pelos seguintes problemas: </IonLabel>
            </IonItem>

                <IonList>
                <IonLabel>Sentir-se nervoso, ansioso ou no limite.</IonLabel>
                 <IonItem>

                 <Controller render={({onChange}) => (

                             <IonRadioGroup onIonChange={(e)=> {
                                console.log(e);
                                onChange(e.detail.value);
                                if (e.detail.value != undefined) {
                                props.setState('gad7Post_gad01', e.detail.value )} }}>

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
                               
                            </IonRadioGroup> )} control={control} name={"gad7Post_gad01"}/>
                    </IonItem>

                    <IonLabel>Não ser capaz de parar ou controlar as preocupações.</IonLabel>

                     <IonItem>

                             

                             <Controller render={({onChange}) => (

                             <IonRadioGroup onIonChange={(e)=> {
                                console.log(e);
                                onChange(e.detail.value);
                                if (e.detail.value != undefined) {
                                props.setState('gad7Post_gad02', e.detail.value )} }}>

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
                               
                            </IonRadioGroup> )} control={control} name={"gad7Post_gad02"}/>
                    </IonItem>

                    <IonLabel>Preocupar-se muito com coisas diferentes.</IonLabel>
                     <IonItem>

                             

                            <Controller render={({onChange}) => (

                             <IonRadioGroup onIonChange={(e)=> {
                                console.log(e);
                                onChange(e.detail.value);
                                if (e.detail.value != undefined) {
                                props.setState('gad7Post_gad03', e.detail.value )} }}>

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
                               
                            </IonRadioGroup> )} control={control} name={"gad7Post_gad03"}/>
                    </IonItem>

                    <IonLabel>Dificuldade de relaxar.</IonLabel>
                     <IonItem>

                            

                            <Controller render={({onChange}) => (

                             <IonRadioGroup onIonChange={(e)=> {
                                console.log(e);
                                onChange(e.detail.value);
                                if (e.detail.value != undefined) {
                                props.setState('gad7Post_gad04', e.detail.value )} }}>

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
                               
                            </IonRadioGroup> )} control={control} name={"gad7Post_gad04"}/>
                    </IonItem>

                    <IonLabel>Ser tão inquieto que é difícil ficar parado.</IonLabel>
                     <IonItem>
                     
                        <Controller render={({onChange}) => (

                             <IonRadioGroup onIonChange={(e)=> {
                                console.log(e);
                                onChange(e.detail.value);
                                if (e.detail.value != undefined) {
                                props.setState('gad7Post_gad05', e.detail.value )} }}>

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
                               
                            </IonRadioGroup> )} control={control} name={"gad7Post_gad05"}/>
                            

                                                        

                    </IonItem>


                    <IonLabel>Tonar-se facilmente irritado ou irritável.</IonLabel>
                     <IonItem>

                             

                            <Controller render={({onChange}) => (

                             <IonRadioGroup onIonChange={(e)=> {
                                console.log(e);
                                onChange(e.detail.value);
                                if (e.detail.value != undefined) {
                                props.setState('gad7Post_gad06', e.detail.value )} }}>

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
                               
                            </IonRadioGroup> )} control={control} name={"gad7Post_gad06"}/>
                    </IonItem>

                    <IonLabel>Sentir medo como se algo terrível pudesse acontecer.</IonLabel>
                     <IonItem>

                             <Controller render={({onChange}) => (

                             <IonRadioGroup onIonChange={(e)=> {
                                console.log(e);
                                onChange(e.detail.value);
                                if (e.detail.value != undefined) {
                                props.setState('gad7Post_gad07', e.detail.value )} }}>

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
                               
                            </IonRadioGroup> )} control={control} name={"gad7Post_gad07"}/>

                    </IonItem>
                    </IonList>



            <IonButton disabled={props.isFirst()}onClick={props.prev} size="large">Anterior</IonButton>
            <IonButton onClick={props.next} size="large" className={"btnProximo"}>Próximo</IonButton>
            </form>

        </div>

        </IonContent>
    )


}

export default Step3P2;