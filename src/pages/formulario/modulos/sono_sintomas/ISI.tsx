import React from "react";
import { StepComponentProps } from "react-step-builder";

import { IonItem, IonLabel, IonRadioGroup, IonRadio, IonButton, IonLoading, IonText } from "@ionic/react";
import { IonContent } from '@ionic/react';

import '../../Forms.css';
import { useForm, Controller } from "react-hook-form";
import { useState } from 'react';

import { IonProgressBar } from '@ionic/react';



import { Redirect, useHistory } from 'react-router-dom'
import { toast } from '../../../../toast';

//imports user context do reactfire

import { useUser } from 'reactfire';
import firebase from 'firebase';


const ISI = (props: StepComponentProps) => {
    const { control, watch, handleSubmit, errors, formState } = useForm({ mode: "onChange" });
    const [problemasSono, setProblemasSono] = useState();

    const { data: user } = useUser();
    const [dataUser, setData] = useState()

    const history = useHistory();
    const [loader, setLoader] = useState<boolean>(false)

    async function updateUserDataQuest1(dataUser: any) {


        if (user) {
            firebase.firestore().collection('users').doc(user.uid).set({
                nightShift: String(props.state.nightShift), //STEP 4 
                workDaysN: String(props.state.workDaysN),
                sleepWD: String(props.state.sleepWD),
                wakeUpWD: String(props.state.wakeUpWD),
                alarmWD: String(props.state.alarmWD),
                sleepNoWork: String(props.state.sleepNoWork),
                wakeUpNoWork: String(props.state.wakeUpNoWork),
                alarmNoWork: String(props.state.alarmNoWork),
                sleepFD: String(props.state.sleepFD),
                wakeUpFD: String(props.state.wakeUpFD),
                alarmFD: String(props.state.alarmFD),
                sleepProblem: String(props.state.sleepProblem), //STEP 8 
                gad7_gad01: Number(props.state.gad7_gad01), //STEP 5
                gad7_gad02: Number(props.state.gad7_gad02),
                gad7_gad03: Number(props.state.gad7_gad03),
                gad7_gad04: Number(props.state.gad7_gad04),
                gad7_gad05: Number(props.state.gad7_gad05),
                gad7_gad06: Number(props.state.gad7_gad06),
                gad7_gad07: Number(props.state.gad7_gad07),
                who5_SQ001: Number(props.state.who5_SQ001), //STEP 6 
                who5_SQ002: Number(props.state.who5_SQ002),
                who5_SQ003: Number(props.state.who5_SQ003),
                who5_SQ004: Number(props.state.who5_SQ004),
                who5_SQ005: Number(props.state.who5_SQ005),
                phq01: Number(props.state.phq01), //STEP 7
                phq02: Number(props.state.phq02),
                phq03: Number(props.state.phq03),
                phq04: Number(props.state.phq04),
                phq05: Number(props.state.phq05),
                phq06: Number(props.state.phq06),
                phq07: Number(props.state.phq07),
                phq08: Number(props.state.phq08),
                phq09: Number(props.state.phq09),
                phq10: Number(props.state.phq10),
                isi_isi01: Number(props.state.isi_isi01),
                isi_isi02: Number(props.state.isi_isi02),
                isi_isi03: Number(props.state.isi_isi03),
                sleepQual: Number(props.state.sleepQual),
                rmeq01: Number(props.state.rmeq01),
                rmeq02: Number(props.state.rmeq02),
                rmeq03: Number(props.state.rmeq03),
                rmeq04: Number(props.state.rmeq04),
                rmeq05: Number(props.state.rmeq05),
                dateSonoSintomasModule1: new Date()
            }, { merge: true })
        }

        toast('Formulário submetido com sucesso!', 4000);


    }

    function voltaModulos() {
        history.push('/tab1');
    }

    const onSubmit = (data: any) => {
        setData(dataUser);
        setLoader(true);
        updateUserDataQuest1(dataUser);
        voltaModulos();

    }


    return (
        <IonContent fullscreen color="background">

            <div>
                <IonLabel mode="md">

                    <form className={"ion-padding texto-default"} onSubmit={handleSubmit(onSubmit)}>
                        <IonLoading message="Por favor aguarde..." duration={2000} isOpen={loader} />


                        <IonLabel className="questions">Você tem tido problemas com seu sono?</IonLabel>
                        <IonItem lines="none" className={"ion-no-padding"}>


                            <Controller render={({ onChange }) => (
                                <IonRadioGroup value={problemasSono} onIonChange={(e) => {
                                    setProblemasSono(e.detail.value);
                                    onChange(e.detail.value);
                                    if (e.detail.value != undefined) {
                                        props.setState('sleepProblem', e.detail.value)
                                    }
                                }}>

                                    <IonItem lines="none" className={"ion-no-padding"}>
                                        <IonLabel>Sim</IonLabel>
                                        <IonRadio slot="start" className={"radio-options"} color="primary" value="sim"></IonRadio>
                                    </IonItem>

                                    <IonItem lines="none" className={"ion-no-padding"}>
                                        <IonLabel>Não</IonLabel>
                                        <IonRadio slot="start" className={"radio-options"} color="primary" value="não"></IonRadio>
                                    </IonItem>
                                </IonRadioGroup>)} control={control} name={"sleepProblem"} rules={{ required: true }} />
                       
                        </IonItem>

                        {problemasSono == "sim" ?
                            <IonItem lines="none">

                                <IonLabel className="questions">Por favor, avalie a gravidade da sua insônia nas duas últimas semanas, em relação a:</IonLabel>
                            </IonItem>
                            : null}

                        {problemasSono == "sim" ?


                            <IonItem lines="none">

                                <IonLabel className="questions">Dificuldade de pegar no sono.</IonLabel>
                            </IonItem> : null}
                        {problemasSono == "sim" ?
                            <IonItem lines="none">
                                <Controller render={({ onChange }) => (
                                    <IonRadioGroup onIonChange={(e) => {
                                        console.log(e);
                                        onChange(e.detail.value);
                                        if (e.detail.value != undefined) {
                                            props.setState('isi_isi01', e.detail.value)
                                        }
                                    }}>

                                        <IonItem lines="none" className={"ion-no-padding"}>
                                            <IonLabel>Nenhuma</IonLabel>
                                            <IonRadio slot="start" className={"radio-options"} color="primary" value="0"></IonRadio>
                                        </IonItem>

                                        <IonItem lines="none" className={"ion-no-padding"}>
                                            <IonLabel>Leve</IonLabel>
                                            <IonRadio slot="start" className={"radio-options"} color="primary" value="1"></IonRadio>
                                        </IonItem>

                                        <IonItem lines="none" className={"ion-no-padding"}>
                                            <IonLabel>Moderada</IonLabel>
                                            <IonRadio slot="start" className={"radio-options"} color="primary" value="2"></IonRadio>
                                        </IonItem>

                                        <IonItem lines="none" className={"ion-no-padding"}>
                                            <IonLabel>Grave</IonLabel>
                                            <IonRadio slot="start" className={"radio-options"} color="primary" value="3"></IonRadio>
                                        </IonItem>

                                        <IonItem lines="none" className={"ion-no-padding"}>
                                            <IonLabel>Muito grave</IonLabel>
                                            <IonRadio slot="start" className={"radio-options"} color="primary" value="4"></IonRadio>
                                        </IonItem>

                                    </IonRadioGroup>)} control={control} name='isi_isi01' rules={{ required: true }} />
                            
                            </IonItem> : null}

                        {problemasSono == "sim" ?
                            <IonItem lines="none">

                                <IonLabel className="questions">Dificuldade de manter o sono.</IonLabel>
                            </IonItem> : null}
                        {problemasSono == "sim" ?
                            <IonItem lines="none" >
                                <Controller render={({ onChange }) => (
                                    <IonRadioGroup onIonChange={(e) => {
                                        console.log(e);
                                        onChange(e.detail.value);
                                        if (e.detail.value != undefined) {
                                            props.setState('isi_isi02', e.detail.value)
                                        }
                                    }}>

                                        <IonItem lines="none" className={"ion-no-padding"}>
                                            <IonLabel>Nenhuma</IonLabel>
                                            <IonRadio slot="start" className={"radio-options"} color="primary" value="0"></IonRadio>
                                        </IonItem>

                                        <IonItem lines="none" className={"ion-no-padding"}>
                                            <IonLabel>Leve</IonLabel>
                                            <IonRadio slot="start" className={"radio-options"} color="primary" value="1"></IonRadio>
                                        </IonItem>

                                        <IonItem lines="none" className={"ion-no-padding"}>
                                            <IonLabel>Moderada</IonLabel>
                                            <IonRadio slot="start" className={"radio-options"} color="primary" value="2"></IonRadio>
                                        </IonItem>

                                        <IonItem lines="none" className={"ion-no-padding"}>
                                            <IonLabel>Grave</IonLabel>
                                            <IonRadio slot="start" className={"radio-options"} color="primary" value="3"></IonRadio>
                                        </IonItem>

                                        <IonItem lines="none" className={"ion-no-padding"}>
                                            <IonLabel>Muito grave</IonLabel>
                                            <IonRadio slot="start" className={"radio-options"} color="primary" value="4"></IonRadio>
                                        </IonItem>

                                    </IonRadioGroup>)} control={control} name='isi_isi02' rules={{ required: true }} />
                               
                            </IonItem> : null}

                        {problemasSono == "sim" ?
                            <IonItem lines="none">

                                <IonLabel className="questions">Problema de despertar muito cedo.</IonLabel>
                            </IonItem> : null}
                        {problemasSono == "sim" ?
                            <IonItem lines="none" >
                                <Controller render={({ onChange }) => (
                                    <IonRadioGroup onIonChange={(e) => {
                                        console.log(e);
                                        onChange(e.detail.value);
                                        if (e.detail.value != undefined) {
                                            props.setState('isi_isi03', e.detail.value)
                                        }
                                    }}>

                                        <IonItem lines="none" className={"ion-no-padding"}>
                                            <IonLabel>Nenhuma</IonLabel>
                                            <IonRadio slot="start" className={"radio-options"} color="primary" value="0"></IonRadio>
                                        </IonItem>

                                        <IonItem lines="none" className={"ion-no-padding"}>
                                            <IonLabel>Leve</IonLabel>
                                            <IonRadio slot="start" className={"radio-options"} color="primary" value="1"></IonRadio>
                                        </IonItem>

                                        <IonItem lines="none" className={"ion-no-padding"}>
                                            <IonLabel>Moderada</IonLabel>
                                            <IonRadio slot="start" className={"radio-options"} color="primary" value="2"></IonRadio>
                                        </IonItem>

                                        <IonItem lines="none" className={"ion-no-padding"}>
                                            <IonLabel>Grave</IonLabel>
                                            <IonRadio slot="start" className={"radio-options"} color="primary" value="3"></IonRadio>
                                        </IonItem>

                                        <IonItem lines="none" className={"ion-no-padding"}>
                                            <IonLabel>Muito grave</IonLabel>
                                            <IonRadio slot="start" className={"radio-options"} color="primary" value="4"></IonRadio>
                                        </IonItem>

                                    </IonRadioGroup>)} control={control} name='isi_isi03' rules={{ required: true }} />
                            
                            </IonItem>

                            : null}


                        <IonLabel className="questions">Como você classificaria a qualidade do seu sono nas últimas duas semanas?</IonLabel>
                        <IonItem lines="none" className={"ion-no-padding"}>


                            <Controller render={({ onChange }) => (
                                <IonRadioGroup onIonChange={(e) => {
                                    onChange(e.detail.value);
                                    if (e.detail.value != undefined) {
                                        props.setState('sleepQual', e.detail.value)
                                    }
                                }}>

                                    <IonItem lines="none" className={"ion-no-padding"}>
                                        <IonLabel>Muito boa</IonLabel>
                                        <IonRadio slot="start" className={"radio-options"} color="primary" value="0"></IonRadio>
                                    </IonItem>

                                    <IonItem lines="none" className={"ion-no-padding"}>
                                        <IonLabel>Boa</IonLabel>
                                        <IonRadio slot="start" className={"radio-options"} color="primary" value="1"></IonRadio>
                                    </IonItem>

                                    <IonItem lines="none" className={"ion-no-padding"}>
                                        <IonLabel>Ruim</IonLabel>
                                        <IonRadio slot="start" className={"radio-options"} color="primary" value="2"></IonRadio>
                                    </IonItem>

                                    <IonItem lines="none" className={"ion-no-padding"}>
                                        <IonLabel>Muito ruim</IonLabel>
                                        <IonRadio slot="start" className={"radio-options"} color="primary" value="3"></IonRadio>
                                    </IonItem>
                                </IonRadioGroup>)} control={control} name={"sleepQual"} rules={{ required: true }} />
                         
                        </IonItem>

                          {formState.isValid === false ? 

                        <div className="preenchimentoObri">
                            <IonText  color="danger">Preencha todos campos obrigatórios para prosseguir</IonText>
                        </div>
                        
                        :null}


                        <div id="progress-bar-div" >
                            <IonProgressBar className={"progress-bar"} value={1.0} color="orange"></IonProgressBar>
                        </div>

                        <IonButton disabled={props.isFirst()} onClick={props.prev} className="btnAnterior" size="default" shape="round" fill="outline">Anterior</IonButton>
                        <IonButton disabled={formState.isValid === false} onClick={onSubmit} size="default" shape="round" className={"btnProximo"} fill="outline">Submeter</IonButton>
                    </form>
                </IonLabel>
            </div>

        </IonContent>
    )
}

export default ISI;
