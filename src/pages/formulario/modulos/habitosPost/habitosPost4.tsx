import React from "react";
import { StepComponentProps } from "react-step-builder";

import { IonItem, IonLabel, IonInput, IonRadioGroup, IonRadio, IonSelect, IonSelectOption, IonButton, IonCheckbox, IonList, IonDatetime, IonNote } from "@ionic/react";
import { IonContent, IonText } from '@ionic/react';

import '../../Forms.css';

import { useForm, Controller } from "react-hook-form";
import { useState } from 'react';

import { IonProgressBar } from '@ionic/react';

import { Redirect, useHistory } from 'react-router-dom'
import { toast } from '../../../../toast';

//imports user context do reactfire

import { useUser } from 'reactfire';
import firebase from 'firebase';

const HabitosPost4 = (props: StepComponentProps) => {
    const options = {
        cssClass: 'my-custom-interface'
    };

    const { data: user } = useUser();
    const [dataUser, setData] = useState()

    const history = useHistory();
    const [loader, setLoader] = useState<boolean>(false)

    const timeformat: Intl.DateTimeFormatOptions = {
        weekday: 'short',
        year: 'numeric',
        month: 'numeric',
        day: 'numeric',
    
    };

    var dia_Atual= new Date();
    var dia_Anterior1= new Date(new Date().setDate(new Date().getDate()-1));
    var dia_Anterior2= new Date(new Date().setDate(new Date().getDate()-2));
    var dia_Anterior3= new Date(new Date().setDate(new Date().getDate()-3));
    var dia_Anterior4= new Date(new Date().setDate(new Date().getDate()-4));
    var dia_Anterior5= new Date(new Date().setDate(new Date().getDate()-5));
    var dia_Anterior6= new Date(new Date().setDate(new Date().getDate()-6));
    var dia_Anterior7= new Date(new Date().setDate(new Date().getDate()-7));
    var dia_Anterior8= new Date(new Date().setDate(new Date().getDate()-8));
    var dia_Anterior9= new Date(new Date().setDate(new Date().getDate()-9));
    var dia_Anterior10= new Date(new Date().setDate(new Date().getDate()-10));
    var dia_Anterior11= new Date(new Date().setDate(new Date().getDate()-11));
    var dia_Anterior12= new Date(new Date().setDate(new Date().getDate()-12));
    var dia_Anterior13= new Date(new Date().setDate(new Date().getDate()-13));
    var dia_Anterior14= new Date(new Date().setDate(new Date().getDate()-14));

    async function updateUserDataQuest1(dataUser: any) {



        if (user) {
            firebase.firestore().collection('usersPost').doc(user.uid).set({


                FDonWDPost: String(props.state.FDonWDPost),
                fdQPost: String(props.state.workQPost),
                workDurPost: String(props.state.workDurPost),
                workChoicePost: Number(props.state.workChoicePost),
                workRegPost: String(props.state.workRegPost),
                workStartPost: String(props.state.workStartPost),

              
                sleepRegPost14: String(props.state.sleepRegPost14),
                sleepQualPost14: String(props.state.sleepQualPost14),
                feedRegPost14: String(props.state.feedRegPost14),
                feedStartWDPost14: String(props.state.feedStartWDPost14),
                feedEndWDPost14: String(props.state.feedEndWDPost14),
                feedStartFDPost14: String(props.state.feedStartFDPost14),
                feedEndFDPost14: String(props.state.feedEndFDPost14),
                feedFDYNPost14: String(props.state.feedFDYNPost14),
                feedStartPost14: String(props.state.feedStartPost14),
                feedEndPost14: String(props.state.feedEndPost14),
                snacksPost14: String(props.state.snacksPost14),

                hobbiesFreqPost14: String(props.state.hobbiesFreqPost14),
                exercisePost14: String(props.state.exercisePost14),
                execiseFreqPost14: String(props.state.exerciseFreq),
                exerciseRegPost14: String(props.state.exerciseRegPost14),
                exerciseDurPost14: String(props.state.exerciseDurPost14),
                ExerciseTimingPost14: String(props.state.ExerciseTimingPost14),

                    
                lightRegPost: Number(props.state.lightRegPost),
                lightFreqPost: Number(props.state.lightRegPost),
                lightExposurePost: String(props.state.lightExposurePost),
                lightDurationIrregPost: Number(props.state.lightDurationIrregPost),
                lightExposureRegWkndPost: Number(props.state.lightExposureRegWkndPost),
                lightExposureRegPost: Number(props.state.lightExposureRegPost),
                lightExposureStartPost: String(props.state.lightExposureStartPost),
                lightExposureDurationPost: Number(props.state.lightExposureDurationPost),
                lightExposureCheckWorkDPost: Number(props.state.lightExposureCheckWorkDPost),
                lightExposureWorkStartPost: String(props.state.lightExposureWorkStartPost),
                lightExposureWorkDurationPost: Number(props.state.lightExposureWorkDurationPost),
                lightExposureWorkFDStartPost: String(props.state.lightExposureWorkFDStartPost),
                lightExposureWorkFDDurationPost: Number(props.state.lightExposureWorkFDDurationPost),
                lightExposureCheckWeekDPost: Number(props.state.lightExposureCheckWeekDPost),
                lightExposureWeekStartPost: String(props.state.lightExposureWeekStartPost),
                lightExposureWeekDurationPost: Number(props.state.lightExposureWeekDurationPost),
                lightExposureWkndStartPost: String(props.state.lightExposureWkndStartPost),
                lightExposureWkndDurationPost: Number(props.state.lightExposureWkndDurationPost),

                diaAtual_BooleanPost14: Boolean(props.state.diaAtual_BooleanPost14),
                dia_Anterior1_BooleanPost14: Boolean(props.state.dia_Anterior1_BooleanPost14),
                dia_Anterior2_BooleanPost14: Boolean(props.state.dia_Anterior2_BooleanPost14),
                dia_Anterior3_BooleanPost14: Boolean(props.state.dia_Anterior3_BooleanPost14),
                dia_Anterior4_BooleanPost14: Boolean(props.state.dia_Anterior4_BooleanPost14),
                dia_Anterior5_BooleanPost14: Boolean(props.state.dia_Anterior5_BooleanPost14),
                dia_Anterior6_BooleanPost14: Boolean(props.state.dia_Anterior6_BooleanPost14),
                dia_Anterior7_BooleanPost14: Boolean(props.state.dia_Anterior7_BooleanPost14),
                dia_Anterior8_BooleanPost14: Boolean(props.state.dia_Anterior8_BooleanPost14),
                dia_Anterior9_BooleanPost14: Boolean(props.state.dia_Anterior9_BooleanPost14),
                dia_Anterior10_BooleanPost14: Boolean(props.state.dia_Anterior10_BooleanPost14),
                dia_Anterior11_BooleanPost14: Boolean(props.state.dia_Anterior11_BooleanPost14),
                dia_Anterior12_BooleanPost14: Boolean(props.state.dia_Anterior12_BooleanPost14),
                dia_Anterior13_BooleanPost14: Boolean(props.state.dia_Anterior13_BooleanPost14),
                dia_Anterior14_BooleanPost14: Boolean(props.state.dia_Anterior14_BooleanPost14),
    
                dateHabitosPost: new Date()
            }, { merge: true })
        }

        toast('Formulário submetido com sucesso!', 3000);


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

    const { control, watch, handleSubmit, errors, formState } = useForm({ mode: "onChange" });


    const [frequenciaLuzNatural, setFrequenciaLuzNatural] = useState();
    const [horarioLuzNatural, setHorarioLuzNatural] = useState();

    return (
        <IonContent fullscreen color="background">

            <div className="ion-text-wrap ">
                <IonLabel mode="md">


                    <form className="ion-padding texto-default">

                        <div className="ion-text-wrap">

                        <IonLabel className="questions">Como foram suas rotinas de sono nas últimas duas semanas? </IonLabel>
                            <IonItem lines="none">

                                <Controller render={({ onChange }) => (
                                    <IonSelect interfaceOptions={options} className={"select-interface-option"} okText="ok" cancelText="Cancelar" placeholder="Por favor, selecione..." onIonChange={(e) => {
                                        console.log(e);
                                        onChange(e.detail.value);
                                        if (e.detail.value != undefined)
                                            props.setState('sleepRegPost14', e.detail.value)
                                    }}>
                                        <IonSelectOption value="muito irregulares">Muito irregulares</IonSelectOption>
                                        <IonSelectOption value="irregulares">Irregulares</IonSelectOption>
                                        <IonSelectOption value="regulares">Regulares</IonSelectOption>
                                        <IonSelectOption value="muito regulares">Muito regulares</IonSelectOption>
                                    </IonSelect>)} control={control} name={"sleepRegPost14"} rules={{ required: true }} />
                              
                            </IonItem>

                            <IonLabel className="questions">Como você classificaria a qualidade do seu sono nas últimas duas semanas?</IonLabel>
                            <IonItem lines="none">

                                <Controller render={({ onChange }) => (
                                    <IonSelect interfaceOptions={options} className={"select-interface-option"} okText="ok" cancelText="Cancelar" placeholder="Por favor, selecione..." onIonChange={(e) => {
                                        console.log(e);
                                        onChange(e.detail.value);
                                        if (e.detail.value != undefined)
                                            props.setState('sleepQualPost14', e.detail.value)
                                    }}>
                                        <IonSelectOption value="muito boa">Muito boa</IonSelectOption>
                                        <IonSelectOption value="boa">Boa</IonSelectOption>
                                        <IonSelectOption value="ruim">Ruim</IonSelectOption>
                                        <IonSelectOption value="muito ruim">Muito ruim</IonSelectOption>
                                    </IonSelect>)} control={control} name={"sleepQualPost14"} rules={{ required: true }} />
                             
                            </IonItem>

                                    

                            
                        {formState.isValid === false ? 

                        <div className="preenchimentoObri">
                            <IonText  color="danger">Preencha todos campos obrigatórios para prosseguir</IonText>
                        </div>
                        
                        :null}

                                

                            <div id="progress-bar-div" >
                                <IonProgressBar className={"progress-bar"} value={1.0} color="orange"></IonProgressBar>
                            </div>


                            <IonButton onClick={props.prev} className="btnAnterior" size="default" shape="round" fill="outline">Anterior</IonButton>
                            <IonButton disabled={formState.isValid === false} onClick={onSubmit} size="default" shape="round" className={"btnProximo"} fill="outline">Submeter</IonButton>

                        </div>
                    </form>
                </IonLabel>
            </div>
        </IonContent>
    )


}

export default HabitosPost4;