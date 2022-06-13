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


const ISIFinal = (props: StepComponentProps) => {
    const { control, watch, handleSubmit, errors, formState } = useForm({ mode: "onChange" });
    const [problemasSono, setProblemasSono] = useState();

    const { data: user } = useUser();
    const [dataUser, setData] = useState()

    const history = useHistory();
    const [loader, setLoader] = useState<boolean>(false)

    async function updateUserDataQuest1(dataUser: any) {


        if (user) {
            firebase.firestore().collection('usersFinal').doc(user.uid).set({
                NightShiftFinal: String(props.state.NightShiftFinal), //STEP 4 
                workDaysNFinal: String(props.state.workDaysNFinal),
                sleepNoWorkFinal: String(props.state.sleepNoWorkFinal),
                wakeUpNoWorkFinal: String(props.state.wakeUpNoWorkFinal),
                AlarmNoWorkFinal: String(props.state.AlarmNoWorkFinal),
                sleepWDFinal: String(props.state.sleepWDFinal),
                wakeUpWDFinal: String(props.state.wakeUpWDFinal),
                alarmWDFinal: String(props.state.alarmWDFinal),
                sleepFDFinal: String(props.state.sleepFDFinal),
                wakeUpFDFinal: String(props.state.wakeUpFDFinal),
                alarmFDFinal: String(props.state.alarmFDFinal),
                gad7Final_gad01: Number(props.state.gad7Final_gad01), //STEP 5
                gad7Final_gad02: Number(props.state.gad7Final_gad02),
                gad7Final_gad03: Number(props.state.gad7Final_gad03),
                gad7Final_gad04: Number(props.state.gad7Final_gad04),
                gad7Final_gad05: Number(props.state.gad7Final_gad05),
                gad7Final_gad06: Number(props.state.gad7Final_gad06),
                gad7Final_gad07: Number(props.state.gad7Final_gad07),
                who5Final_SQ001: Number(props.state.who5Final_SQ001), //STEP 6 
                who5Final_SQ002: Number(props.state.who5Final_SQ002),
                who5Final_SQ003: Number(props.state.who5Final_SQ003),
                who5Final_SQ004: Number(props.state.who5Final_SQ004),
                who5Final_SQ005: Number(props.state.who5Final_SQ005),
                phq01Final: Number(props.state.phq01Final), //STEP 7
                phq02Final: Number(props.state.phq02Final),
                phq03Final: Number(props.state.phq03Final),
                phq04Final: Number(props.state.phq04Final),
                phq05Final: Number(props.state.phq05Final),
                phq06Final: Number(props.state.phq06Final),
                phq07Final: Number(props.state.phq07Final),
                phq08Final: Number(props.state.phq08Final),
                phq09Final: Number(props.state.phq09Final),
                phq10Final: Number(props.state.phq10Final),
                sleepProblemFinal: String(props.state.sleepProblemFinal), //STEP 8 
                isiFinal_isi01: Number(props.state.isiFinal_isi01),
                isiFinal_isi02: Number(props.state.isiFinal_isi02),
                isiFinal_isi03: Number(props.state.isiFinal_isi03),
                sleepQualFinal: Number(props.state.sleepQualFinal),
                dateSonoSintomasFinal: new Date()
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
                                        props.setState('sleepProblemFinal', e.detail.value)
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
                                </IonRadioGroup>)} control={control} name={"sleepProblemFinal"} rules={{ required: true }} />
                            
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
                                            props.setState('isiFinal_isi01', e.detail.value)
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

                                    </IonRadioGroup>)} control={control} name='isiFinal_isi01' rules={{ required: true }} />
                           
                            </IonItem> : null}

                        {problemasSono == "sim" ?
                            <IonItem lines="none">

                                <IonLabel className="questions">Dificuldade de manter o sono.</IonLabel>
                            </IonItem> : null}
                        {problemasSono == "sim" ?
                            <IonItem lines="none">
                                <Controller render={({ onChange }) => (
                                    <IonRadioGroup onIonChange={(e) => {
                                        console.log(e);
                                        onChange(e.detail.value);
                                        if (e.detail.value != undefined) {
                                            props.setState('isiFinal_isi02', e.detail.value)
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

                                    </IonRadioGroup>)} control={control} name='isiFinal_isi02' rules={{ required: true }} />
                             
                            </IonItem> : null}

                        {problemasSono == "sim" ?
                            <IonItem lines="none">

                                <IonLabel className="questions">Problema de despertar muito cedo.</IonLabel>
                            </IonItem> : null}
                        {problemasSono == "sim" ?
                            <IonItem lines="none">
                                <Controller render={({ onChange }) => (
                                    <IonRadioGroup onIonChange={(e) => {
                                        console.log(e);
                                        onChange(e.detail.value);
                                        if (e.detail.value != undefined) {
                                            props.setState('isiFinal_isi03', e.detail.value)
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

                                    </IonRadioGroup>)} control={control} name='isiFinal_isi03' rules={{ required: true }} />
                              
                            </IonItem>

                            : null}

                        <IonLabel className="questions">Como você classificaria a qualidade do seu sono nas últimas duas semanas?</IonLabel>
                        <IonItem lines="none" className={"ion-no-padding"}>


                            <Controller render={({ onChange }) => (
                                <IonRadioGroup onIonChange={(e) => {
                                    onChange(e.detail.value);
                                    if (e.detail.value != undefined) {
                                        props.setState('sleepQualFinal', e.detail.value)
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
                                </IonRadioGroup>)} control={control} name={"sleepQualFinal"} rules={{ required: true }} />
                          
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

export default ISIFinal;
