import React from "react";
import {StepComponentProps} from "react-step-builder";

import { IonItem, IonLabel, IonRadioGroup, IonRadio, IonButton, IonList} from "@ionic/react";
import { IonContent } from '@ionic/react';

import '../../Forms.css';

import { useForm, Controller } from "react-hook-form";

import { IonProgressBar} from '@ionic/react';


const Step10 = (props: StepComponentProps) => {

    const {control, watch, handleSubmit} = useForm();
 
    return(
        <IonContent fullscreen> 
         <IonItem>
       
        
        </IonItem>
        <div>
            <form className={"ion-padding"}>

            
            <IonItem>
                <IonLabel className="questions">Nas últimas duas semanas, com que frequência você foi incomodado pelos seguintes problemas: </IonLabel>
            </IonItem>

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

                    <IonLabel className="questions">Dificuldade de relaxar.</IonLabel>
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

                    <IonLabel className="questions">Ser tão inquieto que é difícil ficar parado.</IonLabel>
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
            <IonButton onClick={props.next} size="large" className={"btnProximo"}>Submeter</IonButton>
            </form>

        </div>

        </IonContent>
    )
}

export default Step10; 