import React from "react";
import { StepComponentProps } from "react-step-builder";


import { IonItem, IonLabel, IonRadioGroup, IonRadio, IonButton, IonDatetime, IonLoading, IonText, IonProgressBar } from "@ionic/react";
import { IonContent } from '@ionic/react';

import '../../Forms.css';

import { useForm, Controller } from "react-hook-form";

import { useState } from 'react';

import { useHistory } from 'react-router-dom'


//imports user context do reactfire

import { useUser } from 'reactfire';
import firebase from 'firebase';

const MCTQ2Post = (props: StepComponentProps) => {

    const { control, errors, formState } = useForm({ mode: "onChange" });


    const [loader] = useState<boolean>(false)

    return (
        <IonContent fullscreen color="background">

            <div>
                <IonLabel mode="md">

                    <form className={"ion-padding texto-default"}>
                        <IonLoading message="Por favor aguarde..." duration={2000} isOpen={loader} />

                        <IonLabel className="questions">Em dias livres, eu normalmente dormi às: </IonLabel>
                        <IonItem lines="none">

                            <Controller render={({ onChange }) => (
                                <IonDatetime placeholder="Por favor, selecione..." display-format="HH:mm " picker-format="HH:mm" minuteValues="0,5,10,15,20,25,30,35,40,45,50,55" onIonChange={(e) => {
                                    console.log(e);
                                    onChange(e.detail.value);
                                    if (e.detail.value != undefined)
                                        props.setState('sleepFDPost14', e.detail.value)
                                }}></IonDatetime>)} control={control} name={"sleepFDPost14"} rules={{ required: true }} />
                            {errors.sleepFDPost14 && <IonText color="danger">Campo obrigatório.</IonText>}
                        </IonItem>

                        <IonLabel className="questions">Em dias livres, quando não usei o despertador, eu normalmente acordei às: </IonLabel>
                        <IonItem lines="none">

                            <Controller render={({ onChange }) => (
                                <IonDatetime placeholder="Por favor, selecione..." display-format="HH:mm " picker-format="HH:mm" minuteValues="0,5,10,15,20,25,30,35,40,45,50,55" onIonChange={(e) => {
                                    console.log(e);
                                    onChange(e.detail.value);
                                    if (e.detail.value != undefined)
                                        props.setState('wakeUpFDPost14', e.detail.value)
                                }}></IonDatetime>)} control={control} name={"wakeUpFDPost14"} rules={{ required: true }} />
                            {errors.wakeUpFDPost14 && <IonText color="danger">Campo obrigatório.</IonText>}
                        </IonItem>

                        <IonLabel className="questions">Usei o despertador em dias livres:</IonLabel>
                        <IonItem lines="none" className={"ion-no-padding"}>


                            <Controller render={({ onChange }) => (
                                <IonRadioGroup onIonChange={(e) => {
                                    console.log(e);
                                    onChange(e.detail.value);
                                    if (e.detail.value != undefined)
                                        props.setState('alarmFDPost14', e.detail.value)
                                }}>

                                    <IonItem lines="none" className={"ion-no-padding"}>
                                        <IonLabel>Sim</IonLabel>
                                        <IonRadio slot="start" className={"radio-options"} color="primary" value="sim"></IonRadio>
                                    </IonItem>

                                    <IonItem lines="none" className={"ion-no-padding"}>
                                        <IonLabel>Não</IonLabel>
                                        <IonRadio slot="start" className={"radio-options"} color="primary" value="não"></IonRadio>
                                    </IonItem>

                                </IonRadioGroup>)} control={control} name={"alarmFDPost14"} rules={{ required: true }} />
                            {errors.alarmFD && <IonText color="danger">Campo obrigatório.</IonText>}

                        </IonItem>

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

export default MCTQ2Post;
