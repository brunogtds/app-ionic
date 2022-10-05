import React from "react";
import { StepComponentProps } from "react-step-builder";

import { IonItem, IonLabel, IonInput, IonRadioGroup, IonRadio, IonSelect, IonSelectOption, IonButton, IonCheckbox, IonList, IonDatetime, IonNote, IonIcon, IonRange, IonToggle } from "@ionic/react";
import { IonContent, IonText } from '@ionic/react';

import '../../Forms.css';

import { useForm, Controller } from "react-hook-form";
import { useState } from 'react';

import { IonProgressBar } from '@ionic/react';

import { Redirect, useHistory } from 'react-router-dom'
import { toast } from '../../../../toast';

import { sunnyOutline } from 'ionicons/icons';

//imports user context do reactfire

import { useUser } from 'reactfire';
import firebase from 'firebase';

import { RangeValue } from '@ionic/core';
  

const Habitos4 = (props: StepComponentProps) => {

    const options = {
        cssClass: 'my-custom-interface'
    };

  
    const [rangeValue, setRangeValue] = useState<{
      lower: number;
      upper: number;
    }>({ lower: 0, upper: 0 });
   
      
   
  
    const { data: user } = useUser();
    const [dataUser, setData] = useState()

    const history = useHistory();
    const [loader, setLoader] = useState<boolean>(false)

    const [copiaHor, setCopiaHor] = useState(false);



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
            firebase.firestore().collection('users').doc(user.uid).set({

                FDonWD: String(props.state.FDonWD),
                fdQ: String(props.state.workQ),
                workDur: String(props.state.workDur),
                workChoice: Number(props.state.workChoice),
                workReg: String(props.state.workReg),
                workStart: String(props.state.workStart),

              
                sleepReg: String(props.state.sleepReg),
                sleepQual: String(props.state.sleepQual),
                feedReg: String(props.state.feedReg),
                feedStartWD: String(props.state.feedStartWD),
                feedEndWD: String(props.state.feedEndWD),             
                feedStartFD: String(props.state.feedStart),
                feedEndFD: String(props.state.feedEnd),
                snacks: String(props.state.snacks),
                hobbiesFreq: String(props.state.hobbiesFreq),
                exercise: String(props.state.exercise),
                exerciseFreq: String(props.state.exerciseFreq),
                exerciseReg: String(props.state.exerciseReg),
                exerciseDur: String(props.state.exerciseDur),
                exerciseTiming: String(props.state.exerciseTiming),
                beck02: String(props.state.beck02),
               
                lightReg: Number(props.state.lightReg),
                lightFreq: Number(props.state.lightReg),
                lightExposure: String(props.state.lightExposure),
                lightDurationIrreg: Number(props.state.lightDurationIrreg),
                lightExposureRegWknd: Number(props.state.lightExposureRegWknd),
                lightExposureReg: Number(props.state.lightExposureReg),
                lightExposureStart: String(props.state.lightExposureStart),
                lightExposureDuration: Number(props.state.lightExposureDuration),
                lightExposureCheckWorkD: Number(props.state.lightExposureCheckWorkD),
                lightExposureWorkStart: String(props.state.lightExposureWorkStart),
                lightExposureWorkDuration: Number(props.state.lightExposureWorkDuration),
                lightExposureWorkFDStart: String(props.state.lightExposureWorkFDStart),
                lightExposureWorkFDDuration: Number(props.state.lightExposureWorkFDDuration),
                lightExposureCheckWeekD: Number(props.state.lightExposureCheckWeekD),
                lightExposureWeekStart: String(props.state.lightExposureWeekStart),
                lightExposureWeekDuration: Number(props.state.lightExposureWeekDuration),
                lightExposureWkndStart: String(props.state.lightExposureWkndStart),
                lightExposureWkndDuration: Number(props.state.lightExposureWkndDuration),

                diaAtual_Boolean: Boolean(props.state.diaAtual_Boolean),
                dia_Anterior1_Boolean: Boolean(props.state.dia_Anterior1_Boolean),
                dia_Anterior2_Boolean: Boolean(props.state.dia_Anterior2_Boolean),
                dia_Anterior3_Boolean: Boolean(props.state.dia_Anterior3_Boolean),
                dia_Anterior4_Boolean: Boolean(props.state.dia_Anterior4_Boolean),
                dia_Anterior5_Boolean: Boolean(props.state.dia_Anterior5_Boolean),
                dia_Anterior6_Boolean: Boolean(props.state.dia_Anterior6_Boolean),
                dia_Anterior7_Boolean: Boolean(props.state.dia_Anterior7_Boolean),
                dia_Anterior8_Boolean: Boolean(props.state.dia_Anterior8_Boolean),
                dia_Anterior9_Boolean: Boolean(props.state.dia_Anterior9_Boolean),
                dia_Anterior10_Boolean: Boolean(props.state.dia_Anterior10_Boolean),
                dia_Anterior11_Boolean: Boolean(props.state.dia_Anterior11_Boolean),
                dia_Anterior12_Boolean: Boolean(props.state.dia_Anterior12_Boolean),
                dia_Anterior13_Boolean: Boolean(props.state.dia_Anterior13_Boolean),
                dia_Anterior14_Boolean: Boolean(props.state.dia_Anterior14_Boolean),
                   
                dateHabitosModule1: new Date()
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
                                            props.setState('sleepReg', e.detail.value)
                                    }}>
                                        <IonSelectOption value="muito irregulares">Muito irregulares</IonSelectOption>
                                        <IonSelectOption value="irregulares">Irregulares</IonSelectOption>
                                        <IonSelectOption value="regulares">Regulares</IonSelectOption>
                                        <IonSelectOption value="muito regulares">Muito regulares</IonSelectOption>
                                    </IonSelect>)} control={control} name={"sleepReg"} rules={{ required: true }} />
                             
                            </IonItem>

                            <IonLabel className="questions">Como você classificaria a qualidade do seu sono nas últimas duas semanas?</IonLabel>
                            <IonItem lines="none">

                                <Controller render={({ onChange }) => (
                                    <IonSelect interfaceOptions={options} className={"select-interface-option"} okText="ok" cancelText="Cancelar" placeholder="Por favor, selecione..." onIonChange={(e) => {
                                        console.log(e);
                                        onChange(e.detail.value);
                                        if (e.detail.value != undefined)
                                            props.setState('sleepQual', e.detail.value)
                                    }}>
                                        <IonSelectOption value="muito boa">Muito boa</IonSelectOption>
                                        <IonSelectOption value="boa">Boa</IonSelectOption>
                                        <IonSelectOption value="ruim">Ruim</IonSelectOption>
                                        <IonSelectOption value="muito ruim">Muito ruim</IonSelectOption>
                                    </IonSelect>)} control={control} name={"sleepQual"} rules={{ required: true }} />
                              
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

export default Habitos4;