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


const ISIPost = (props: StepComponentProps) => {
    const { control, watch, handleSubmit, errors, formState } = useForm({ mode: "onChange" });
    const [problemasSono, setProblemasSono] = useState();

    const { data: user } = useUser();
    const [dataUser, setData] = useState()

    const history = useHistory();
    const [loader, setLoader] = useState<boolean>(false)

    async function updateUserDataQuest1(dataUser: any) {


        if (user) {
            firebase.firestore().collection('usersPost').doc(user.uid).set({
                NightShiftPost14: String(props.state.NightShiftPost14), //STEP 4 
                workDaysNPost14: String(props.state.workDaysNPost14),
                sleepNoWorkPost14: String(props.state.sleepNoWorkPost14),
                wakeUpNoWorkPost14: String(props.state.wakeUpNoWorkPost14),
                AlarmNoWorkPost14: String(props.state.AlarmNoWorkPost14),
                sleepWDPost14: String(props.state.sleepWDPost14),
                wakeUpWDPost14: String(props.state.wakeUpWDPost14),
                alarmWDPost14: String(props.state.alarmWDPost14),
                sleepFDPost14: String(props.state.sleepFDPost14),
                wakeUpFDPost14: String(props.state.wakeUpFDPost14),
                alarmFDPost14: String(props.state.alarmFDPost14),
                gad7Post14_gad01: Number(props.state.gad7Post14_gad01), //STEP 5
                gad7Post14_gad02: Number(props.state.gad7Post14_gad02),
                gad7Post14_gad03: Number(props.state.gad7Post14_gad03),
                gad7Post14_gad04: Number(props.state.gad7Post14_gad04),
                gad7Post14_gad05: Number(props.state.gad7Post14_gad05),
                gad7Post14_gad06: Number(props.state.gad7Post14_gad06),
                gad7Post14_gad07: Number(props.state.gad7Post14_gad07),
                who5Post14_SQ001: Number(props.state.who5Post14_SQ001), //STEP 6 
                who5Post14_SQ002: Number(props.state.who5Post14_SQ002),
                who5Post14_SQ003: Number(props.state.who5Post14_SQ003),
                who5Post14_SQ004: Number(props.state.who5Post14_SQ004),
                who5Post14_SQ005: Number(props.state.who5Post14_SQ005),
                phq01Post14: Number(props.state.phq01Post14), //STEP 7
                phq02Post14: Number(props.state.phq02Post14),
                phq03Post14: Number(props.state.phq03Post14),
                phq04Post14: Number(props.state.phq04Post14),
                phq05Post14: Number(props.state.phq05Post14),
                phq06Post14: Number(props.state.phq06Post14),
                phq07Post14: Number(props.state.phq07Post14),
                phq08Post14: Number(props.state.phq08Post14),
                phq09Post14: Number(props.state.phq09Post14),
                phq10Post14: Number(props.state.phq10Post14),
                rmeq01Post: Number(props.state.rmeq01Post),
                rmeq02Post: Number(props.state.rmeq02Post),
                rmeq03Post: Number(props.state.rmeq03Post),
                rmeq04Post: Number(props.state.rmeq04Post),
                rmeq05Post: Number(props.state.rmeq05Post),

                sleepProblemPost14: String(props.state.sleepProblemPost14), //STEP 8 
                isiPost14_isi01: Number(props.state.isiPost14_isi01),
                isiPost14_isi02: Number(props.state.isiPost14_isi02),
                isiPost14_isi03: Number(props.state.isiPost14_isi03),
                sleepQualPost: Number(props.state.sleepQualPost),
                dateSonoSintomasPost: new Date()
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
                                        props.setState('sleepProblemPost14', e.detail.value)
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
                                </IonRadioGroup>)} control={control} name={"sleepProblemPost14"} rules={{ required: true }} />
                         
                        </IonItem>

                        {problemasSono == "sim" ?
                            <IonItem lines="none">

                                <IonLabel className="questions">Por favor, avalie a gravidade da sua insônia nas duas últimas semanas, em relação a:</IonLabel>
                            </IonItem>
                            : null}

                        {problemasSono == "sim" ?


                            <IonItem lines="none" >

                                <IonLabel className="questions">Dificuldade de pegar no sono.</IonLabel>
                            </IonItem> : null}
                        {problemasSono == "sim" ?
                            <IonItem lines="none" >
                                <Controller render={({ onChange }) => (
                                    <IonRadioGroup onIonChange={(e) => {
                                        console.log(e);
                                        onChange(e.detail.value);
                                        if (e.detail.value != undefined) {
                                            props.setState('isiPost14_isi01', e.detail.value)
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

                                    </IonRadioGroup>)} control={control} name='isiPost14_isi01' rules={{ required: true }} />
                             
                            </IonItem> : null}

                        {problemasSono == "sim" ?
                            <IonItem lines="none" >

                                <IonLabel className="questions">Dificuldade de manter o sono.</IonLabel>
                            </IonItem> : null}
                        {problemasSono == "sim" ?
                            <IonItem lines="none" >
                                <Controller render={({ onChange }) => (
                                    <IonRadioGroup onIonChange={(e) => {
                                        console.log(e);
                                        onChange(e.detail.value);
                                        if (e.detail.value != undefined) {
                                            props.setState('isiPost14_isi02', e.detail.value)
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

                                    </IonRadioGroup>)} control={control} name='isiPost14_isi02' rules={{ required: true }} />
                              
                            </IonItem> : null}

                        {problemasSono == "sim" ?
                            <IonItem lines="none" >

                                <IonLabel className="questions">Problema de despertar muito cedo.</IonLabel>
                            </IonItem> : null}
                        {problemasSono == "sim" ?
                            <IonItem lines="none" >
                                <Controller render={({ onChange }) => (
                                    <IonRadioGroup onIonChange={(e) => {
                                        console.log(e);
                                        onChange(e.detail.value);
                                        if (e.detail.value != undefined) {
                                            props.setState('isiPost14_isi03', e.detail.value)
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

                                    </IonRadioGroup>)} control={control} name='isiPost14_isi03' rules={{ required: true }} />
                             
                            </IonItem>

                            : null}


                        <IonLabel className="questions">Como você classificaria a qualidade do seu sono nas últimas duas semanas?</IonLabel>
                        <IonItem lines="none" className={"ion-no-padding"}>


                            <Controller render={({ onChange }) => (
                                <IonRadioGroup onIonChange={(e) => {
                                    onChange(e.detail.value);
                                    if (e.detail.value != undefined) {
                                        props.setState('sleepQualPost', e.detail.value)
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
                                </IonRadioGroup>)} control={control} name={"sleepQualPost"} rules={{ required: true }} />
                           
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

export default ISIPost;
