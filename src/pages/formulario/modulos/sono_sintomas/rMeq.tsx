import React from "react";
import { StepComponentProps } from "react-step-builder";


import { IonItem, IonLabel, IonRadioGroup, IonRadio, IonButton, IonDatetime, IonLoading, IonText, IonProgressBar, IonNote, IonRange } from "@ionic/react";
import { IonContent } from '@ionic/react';

import '../../Forms.css';

import { useForm, Controller } from "react-hook-form";

import { useState } from 'react';

import { useHistory } from 'react-router-dom'


//imports user context do reactfire

import { useUser } from 'reactfire';
import firebase from 'firebase';


  

const RMeq = (props: StepComponentProps) => {

    const { control, errors, formState } = useForm({ mode: "onChange" });


    const [loader] = useState<boolean>(false)

    

    return (
        <IonContent fullscreen color="background">

            <div>
                <IonLabel mode="md">

                    <form className={"ion-padding texto-default"}>
                        <IonLoading message="Por favor aguarde..." duration={2000} isOpen={loader} />

                        <IonLabel className="questions">Considerando apenas seu bem-estar pessoal e com liberdade total de planejar seu dia, a que horas você se levantaria? </IonLabel>
                       
                        <IonItem lines="none" className={"ion-no-padding"}>

                        <div className="container">
                                    
                                    <Controller render={({ onChange }) => (
                                    <IonRange min={0} max={7} step={0.5} ticks={true} onIonChange={(e) => props.setState('sd1', e.detail.value as number)} pin snaps color="primary">
                                    
                                    </IonRange> )} control={control} name={"sd1"}  />
                                    
                                  
                                  <div className="tickmarksSDS">
                                       <p>05</p>
                                      
                                       <p>06</p>
                                                                        
                                       <p>07</p>
                                      
                                       <p>08</p>
                                     
                                       <p>09</p>

                                       <p>10</p>
                                  
                                       <p>11</p>

                                       <p>12</p>
                                    
                                   </div>
                                   </div> 

                        </IonItem>

                          {formState.isValid === false ? 

                        <div className="preenchimentoObri">
                            <IonText  color="danger">Preencha todos campos obrigatórios para prosseguir</IonText>
                        </div>
                        
                        :null}


                        <div id="progress-bar-div" >
                            <IonProgressBar className={"progress-bar"} value={0.32} color="orange"></IonProgressBar>
                        </div>

                        <IonButton disabled={props.isFirst()} onClick={props.prev} className="btnAnterior" size="default" shape="round" fill="outline">Anterior</IonButton>
                        <IonButton disabled={formState.isValid === false} onClick={props.next} size="default" shape="round" className={"btnProximo"} fill="outline">Próximo</IonButton>
                    </form>
                </IonLabel>
            </div>

        </IonContent>
    )
}

export default RMeq;
