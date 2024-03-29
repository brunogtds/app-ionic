import React from "react";
import { StepComponentProps } from "react-step-builder";

import { IonItem, IonLabel, IonRadioGroup, IonRadio, IonButton, IonLoading, IonText } from "@ionic/react";
import { IonContent } from '@ionic/react';

import '../../Forms.css';

import { useForm, Controller } from "react-hook-form";


import { IonProgressBar } from '@ionic/react';

import { useState } from 'react';

import { Redirect, useHistory } from 'react-router-dom'


//imports user context do reactfire

import { useUser } from 'reactfire';
import firebase from 'firebase';



const Who5Final = (props: StepComponentProps) => {

    const { control, watch, handleSubmit, errors, formState } = useForm({ mode: "onChange" });

    const { data: user } = useUser();
    const [dataUser, setData] = useState()

    const history = useHistory();
    const [loader, setLoader] = useState<boolean>(false)

    return (
        <IonContent fullscreen color="background">

            <div>
                <IonLabel mode="md">

                    <form className={"ion-padding texto-default"}>
                        <IonLoading message="Por favor aguarde..." duration={2000} isOpen={loader} />


                        <IonLabel className="questions">Nas últimas duas semanas...</IonLabel>

                        <div>
                            <IonLabel className={"ion-text-wrapper questions"}>...eu estava alegre e de bom humor</IonLabel>
                        </div>
                        <IonItem lines="none" className={"ion-no-padding"}>


                            <Controller render={({ onChange }) => (
                                <IonRadioGroup onIonChange={(e) => {
                                    console.log(e);
                                    onChange(e.detail.value);
                                    if (e.detail.value != undefined) {
                                        props.setState('who5Final_SQ001', e.detail.value)
                                    }
                                }}>

                                    <IonItem lines="none" className={"ion-no-padding"}>
                                        <IonLabel>o tempo todo</IonLabel>
                                        <IonRadio slot="start" className={"radio-options"} color="primary" value="6"></IonRadio>
                                    </IonItem>

                                    <IonItem lines="none" className={"ion-no-padding"}>
                                        <IonLabel>a maioria do tempo</IonLabel>
                                        <IonRadio slot="start" className={"radio-options"} color="primary" value="5"></IonRadio>
                                    </IonItem>

                                    <IonItem lines="none" className={"ion-no-padding"}>
                                        <IonLabel>mais do que metade do tempo</IonLabel>
                                        <IonRadio slot="start" className={"radio-options"} color="primary" value="4"></IonRadio>
                                    </IonItem>

                                    <IonItem lines="none" className={"ion-no-padding"}>
                                        <IonLabel>menos do que metade do tempo</IonLabel>
                                        
                                        <IonRadio slot="start" className={"radio-options"} color="primary" value="3"></IonRadio>
                                    </IonItem>

                                    <IonItem lines="none" className={"ion-no-padding"}>
                                        <IonLabel>às vezes</IonLabel>
                                        <IonRadio slot="start" className={"radio-options"} color="primary" value="2"></IonRadio>
                                    </IonItem>

                                    <IonItem lines="none" className={"ion-no-padding"}>
                                        <IonLabel>em nenhum momento</IonLabel>
                                        <IonRadio slot="start" className={"radio-options"} color="primary" value="1"></IonRadio>
                                    </IonItem>

                                </IonRadioGroup>)} control={control} name={"who5Final_SQ001"} rules={{ required: true }} />
                         
                        </IonItem>
                        <IonLabel className={"ion-text-wrapper questions"}>...me senti calmo e relaxado</IonLabel>
                        <IonItem lines="none" className={"ion-no-padding"}>


                            <Controller render={({ onChange }) => (
                                <IonRadioGroup onIonChange={(e) => {
                                    console.log(e);
                                    onChange(e.detail.value);
                                    if (e.detail.value != undefined) {
                                        props.setState('who5Final_SQ002', e.detail.value)
                                    }
                                }}>

                                    <IonItem lines="none" className={"ion-no-padding"}>
                                        <IonLabel>o tempo todo</IonLabel>
                                        <IonRadio slot="start" className={"radio-options"} color="primary" value="6"></IonRadio>
                                    </IonItem>

                                    <IonItem lines="none" className={"ion-no-padding"}>
                                        <IonLabel>a maioria do tempo</IonLabel>
                                        <IonRadio slot="start" className={"radio-options"} color="primary" value="5"></IonRadio>
                                    </IonItem>

                                    <IonItem lines="none" className={"ion-no-padding"}>
                                        <IonLabel>mais do que metade do tempo</IonLabel>
                                        <IonRadio slot="start" className={"radio-options"} color="primary" value="4"></IonRadio>
                                    </IonItem>

                                    <IonItem lines="none" className={"ion-no-padding"}>
                                         <IonLabel>menos do que metade do tempo</IonLabel>
                                        <IonRadio slot="start" className={"radio-options"} color="primary" value="3"></IonRadio>
                                    </IonItem>

                                    <IonItem lines="none" className={"ion-no-padding"}>
                                        
                                        <IonLabel>às vezes</IonLabel>
                                        <IonRadio slot="start" className={"radio-options"} color="primary" value="2"></IonRadio>
                                    </IonItem>

                                    <IonItem lines="none" className={"ion-no-padding"}>
                                        <IonLabel>em nenhum momento</IonLabel>
                                        <IonRadio slot="start" className={"radio-options"} color="primary" value="1"></IonRadio>
                                    </IonItem>

                                </IonRadioGroup>)} control={control} name={"who5Final_SQ002"} rules={{ required: true }} />
                          
                        </IonItem>

                        <IonLabel className={"ion-text-wrapper questions"}>...me senti disposto e renovado ao acordar</IonLabel>
                        <IonItem lines="none" className={"ion-no-padding"}>


                            <Controller render={({ onChange }) => (
                                <IonRadioGroup onIonChange={(e) => {
                                    console.log(e);
                                    onChange(e.detail.value);
                                    if (e.detail.value != undefined) {
                                        props.setState('who5Final_SQ003', e.detail.value)
                                    }
                                }}>

                                    <IonItem lines="none" className={"ion-no-padding"}>
                                        <IonLabel>o tempo todo</IonLabel>
                                        <IonRadio slot="start" className={"radio-options"} color="primary" value="6"></IonRadio>
                                    </IonItem>

                                    <IonItem lines="none" className={"ion-no-padding"}>
                                        <IonLabel>a maioria do tempo</IonLabel>
                                        <IonRadio slot="start" className={"radio-options"} color="primary" value="5"></IonRadio>
                                    </IonItem>

                                    <IonItem lines="none" className={"ion-no-padding"}>
                                        <IonLabel>mais do que metade do tempo</IonLabel>
                                        <IonRadio slot="start" className={"radio-options"} color="primary" value="4"></IonRadio>
                                    </IonItem>

                                    <IonItem lines="none" className={"ion-no-padding"}>
                                         <IonLabel>menos do que metade do tempo</IonLabel>
                                        <IonRadio slot="start" className={"radio-options"} color="primary" value="3"></IonRadio>
                                    </IonItem>

                                    <IonItem lines="none" className={"ion-no-padding"}>
                                        
                                        <IonLabel>às vezes</IonLabel>
                                        <IonRadio slot="start" className={"radio-options"} color="primary" value="2"></IonRadio>
                                    </IonItem>

                                    <IonItem lines="none" className={"ion-no-padding"}>
                                        <IonLabel>em nenhum momento</IonLabel>
                                        <IonRadio slot="start" className={"radio-options"} color="primary" value="1"></IonRadio>
                                    </IonItem>

                                </IonRadioGroup>)} control={control} name={"who5Final_SQ003"} rules={{ required: true }} />
                       
                        </IonItem>

                        <IonLabel className={"ion-text-wrapper questions"}>...me senti cheio de energia e ativo</IonLabel>
                        <IonItem lines="none" className={"ion-no-padding"}>


                            <Controller render={({ onChange }) => (
                                <IonRadioGroup onIonChange={(e) => {
                                    console.log(e);
                                    onChange(e.detail.value);
                                    if (e.detail.value != undefined) {
                                        props.setState('who5Final_SQ004', e.detail.value)
                                    }
                                }}>

                                    <IonItem lines="none" className={"ion-no-padding"}>
                                        <IonLabel>o tempo todo</IonLabel>
                                        <IonRadio slot="start" className={"radio-options"} color="primary" value="6"></IonRadio>
                                    </IonItem>

                                    <IonItem lines="none" className={"ion-no-padding"}>
                                        <IonLabel>a maioria do tempo</IonLabel>
                                        <IonRadio slot="start" className={"radio-options"} color="primary" value="5"></IonRadio>
                                    </IonItem>

                                    <IonItem lines="none" className={"ion-no-padding"}>
                                        <IonLabel>mais do que metade do tempo</IonLabel>
                                        <IonRadio slot="start" className={"radio-options"} color="primary" value="4"></IonRadio>
                                    </IonItem>

                                    <IonItem lines="none" className={"ion-no-padding"}>
                                    <IonLabel>menos do que metade do tempo</IonLabel>
                                       
                                        <IonRadio slot="start" className={"radio-options"} color="primary" value="3"></IonRadio>
                                    </IonItem>

                                    <IonItem lines="none" className={"ion-no-padding"}>
                                    <IonLabel>às vezes</IonLabel>
                                        <IonRadio slot="start" className={"radio-options"} color="primary" value="2"></IonRadio>
                                    </IonItem>

                                    <IonItem lines="none" className={"ion-no-padding"}>
                                        <IonLabel>em nenhum momento</IonLabel>
                                        <IonRadio slot="start" className={"radio-options"} color="primary" value="1"></IonRadio>
                                    </IonItem>

                                </IonRadioGroup>)} control={control} name={"who5Final_SQ004"} rules={{ required: true }} />
                           
                        </IonItem>

                        <IonLabel className={"ion-text-wrapper questions"}>...o meu dia foi cheio de coisas que interessavam</IonLabel>
                        <IonItem lines="none" className={"ion-no-padding"}>


                            <Controller render={({ onChange }) => (
                                <IonRadioGroup onIonChange={(e) => {
                                    console.log(e);
                                    onChange(e.detail.value);
                                    if (e.detail.value != undefined) {
                                        props.setState('who5Final_SQ005', e.detail.value)
                                    }
                                }}>

                                    <IonItem lines="none" className={"ion-no-padding"}>
                                        <IonLabel>o tempo todo</IonLabel>
                                        <IonRadio slot="start" className={"radio-options"} color="primary" value="6"></IonRadio>
                                    </IonItem>

                                    <IonItem lines="none" className={"ion-no-padding"}>
                                        <IonLabel>a maioria do tempo</IonLabel>
                                        <IonRadio slot="start" className={"radio-options"} color="primary" value="5"></IonRadio>
                                    </IonItem>

                                    <IonItem lines="none" className={"ion-no-padding"}>
                                        <IonLabel>mais do que metade do tempo</IonLabel>
                                        <IonRadio slot="start" className={"radio-options"} color="primary" value="4"></IonRadio>
                                    </IonItem>

                                    <IonItem lines="none" className={"ion-no-padding"}>
                                    <IonLabel>menos do que metade do tempo</IonLabel>
                                        
                                        <IonRadio slot="start" className={"radio-options"} color="primary" value="3"></IonRadio>
                                    </IonItem>

                                    <IonItem lines="none" className={"ion-no-padding"}>
                                    <IonLabel>às vezes</IonLabel>
                                        <IonRadio slot="start" className={"radio-options"} color="primary" value="2"></IonRadio>
                                    </IonItem>

                                    <IonItem lines="none" className={"ion-no-padding"}>
                                        <IonLabel>em nenhum momento</IonLabel>
                                        <IonRadio slot="start" className={"radio-options"} color="primary" value="1"></IonRadio>
                                    </IonItem>

                                </IonRadioGroup>)} control={control} name={"who5Final_SQ005"} rules={{ required: true }} />
                    
                        </IonItem>

                          {formState.isValid === false ? 

                        <div className="preenchimentoObri">
                            <IonText  color="danger">Preencha todos campos obrigatórios para prosseguir</IonText>
                        </div>
                        
                        :null}


                        <div id="progress-bar-div" >
                            <IonProgressBar className={"progress-bar"} value={0.7} color="orange"></IonProgressBar>
                        </div>


                        <IonButton disabled={props.isFirst()} onClick={props.prev} className="btnAnterior" size="default" shape="round" fill="outline">Anterior</IonButton>
                        <IonButton disabled={formState.isValid === false} onClick={props.next} size="default" shape="round" className={"btnProximo"} fill="outline">Próximo</IonButton>
                    </form>
                </IonLabel>
            </div>

        </IonContent>
    )
}

export default Who5Final;

