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

const HabitosFinal4 = (props: StepComponentProps) => {

    const options = {
        cssClass: 'my-custom-interface'
    };

    const { data: user } = useUser();
    const [dataUser, setData] = useState()

    const history = useHistory();
    const [loader, setLoader] = useState<boolean>(false)

    async function updateUserDataQuest1(dataUser: any) {


        if (user) {
            firebase.firestore().collection('usersFinal').doc(user.uid).set({

                
                FDonWDFinal: String(props.state.FDonWDFinal),
                fdQFinal: String(props.state.workQFinal),
                workDurFinal: String(props.state.workDurFinal),
                workChoiceFinal: Number(props.state.workChoiceFinal),
                workRegFinal: String(props.state.workRegFinal),
                workStartFinal: String(props.state.workStartFinal),

               
                sleepRegFinal: String(props.state.sleepRegFinal),
                sleepQualFinal: String(props.state.sleepQualFinal),
                feedRegFinal: String(props.state.feedRegFinal),
                feedStartWDFinal: String(props.state.feedStartWDFinal),
                feedEndWDFinal: String(props.state.feedEndWDFinal),
                feedStartFDFinal: String(props.state.feedStartFDFinal),
                feedEndFDFinal: String(props.state.feedEndFDFinal),
                feedFDYNFinal: String(props.state.feedFDYNFinal),
                feedStartFinal: String(props.state.feedStartFinal),
                feedEndFinal: String(props.state.feedEndFinal),
                snacksFinal: String(props.state.snacksFinal),

                hobbiesFreqFinal: String(props.state.hobbiesFreqFinal),
                exerciseFinal: String(props.state.exerciseFinal),
                exerciseFreqFinal: String(props.state.exerciseFreqFinal),
                exerciseRegFinal: String(props.state.exerciseRegFinal),
                exerciseDurFinal: String(props.state.exerciseDurFinal),
                ExerciseTimingFinal: String(props.state.ExerciseTimingFinal),

                lightRegFinal: Number(props.state.lightRegFinal),
                lightFreqFinal: Number(props.state.lightRegFinal),
                lightExposureFinal: String(props.state.lightExposureFinal),
                lightDurationIrregFinal: Number(props.state.lightDurationIrregFinal),
                lightExposureRegWkndFinal: Number(props.state.lightExposureRegWkndFinal),
                lightExposureRegFinal: Number(props.state.lightExposureRegFinal),
                lightExposureStartFinal: String(props.state.lightExposureStartFinal),
                lightExposureDurationFinal: Number(props.state.lightExposureDurationFinal),
                lightExposureCheckWorkDFinal: Number(props.state.lightExposureCheckWorkDFinal),
                lightExposureWorkStartFinal: String(props.state.lightExposureWorkStartFinal),
                lightExposureWorkDurationFinal: Number(props.state.lightExposureWorkDurationFinal),
                lightExposureWorkFDStartFinal: String(props.state.lightExposureWorkFDStartFinal),
                lightExposureWorkFDDurationFinal: Number(props.state.lightExposureWorkFDDurationFinal),
                lightExposureCheckWeekDFinal: Number(props.state.lightExposureCheckWeekDFinal),
                lightExposureWeekStartFinal: String(props.state.lightExposureWeekStartFinal),
                lightExposureWeekDurationFinal: Number(props.state.lightExposureWeekDurationFinal),
                lightExposureWkndStartFinal: String(props.state.lightExposureWkndStartFinal),
                lightExposureWkndDurationFinal: Number(props.state.lightExposureWkndDurationFinal),

                diaAtual_BooleanFinal: Boolean(props.state.diaAtual_BooleanFinal),
                dia_Anterior1_BooleanFinal: Boolean(props.state.dia_Anterior1_BooleanFinal),
                dia_Anterior2_BooleanFinal: Boolean(props.state.dia_Anterior2_BooleanFinal),
                dia_Anterior3_BooleanFinal: Boolean(props.state.dia_Anterior3_BooleanFinal),
                dia_Anterior4_BooleanFinal: Boolean(props.state.dia_Anterior4_BooleanFinal),
                dia_Anterior5_BooleanFinal: Boolean(props.state.dia_Anterior5_BooleanFinal),
                dia_Anterior6_BooleanFinal: Boolean(props.state.dia_Anterior6_BooleanFinal),
                dia_Anterior7_BooleanFinal: Boolean(props.state.dia_Anterior7_BooleanFinal),
                dia_Anterior8_BooleanFinal: Boolean(props.state.dia_Anterior8_BooleanFinal),
                dia_Anterior9_BooleanFinal: Boolean(props.state.dia_Anterior9_BooleanFinal),
                dia_Anterior10_BooleanFinal: Boolean(props.state.dia_Anterior10_BooleanFinal),
                dia_Anterior11_BooleanFinal: Boolean(props.state.dia_Anterior11_BooleanFinal),
                dia_Anterior12_BooleanFinal: Boolean(props.state.dia_Anterior12_BooleanFinal),
                dia_Anterior13_BooleanFinal: Boolean(props.state.dia_Anterior13_BooleanFinal),
                dia_Anterior14_BooleanFinal: Boolean(props.state.dia_Anterior14_BooleanFinal),
    
                dateHabitosFinal: new Date()
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
                                            props.setState('sleepRegFinal', e.detail.value)
                                    }}>
                                        <IonSelectOption value="muito irregulares">Muito irregulares</IonSelectOption>
                                        <IonSelectOption value="irregulares">Irregulares</IonSelectOption>
                                        <IonSelectOption value="regulares">Regulares</IonSelectOption>
                                        <IonSelectOption value="muito regulares">Muito regulares</IonSelectOption>
                                    </IonSelect>)} control={control} name={"sleepRegFinal"} rules={{ required: true }} />
                        
                            </IonItem>

                            <IonLabel className="questions">Como você classificaria a qualidade do seu sono nas últimas duas semanas?</IonLabel>
                            <IonItem lines="none">

                                <Controller render={({ onChange }) => (
                                    <IonSelect interfaceOptions={options} className={"select-interface-option"} okText="ok" cancelText="Cancelar" placeholder="Por favor, selecione..." onIonChange={(e) => {
                                        console.log(e);
                                        onChange(e.detail.value);
                                        if (e.detail.value != undefined)
                                            props.setState('sleepQualFinal', e.detail.value)
                                    }}>
                                        <IonSelectOption value="muito boa">Muito boa</IonSelectOption>
                                        <IonSelectOption value="boa">Boa</IonSelectOption>
                                        <IonSelectOption value="ruim">Ruim</IonSelectOption>
                                        <IonSelectOption value="muito ruim">Muito ruim</IonSelectOption>
                                    </IonSelect>)} control={control} name={"sleepQualFinal"} rules={{ required: true }} />
                     
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

export default HabitosFinal4;