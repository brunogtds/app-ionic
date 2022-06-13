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

                workQPost14: String(props.state.workQPost14),
                workDurPost14: String(props.state.workDurPost14),
                workRegPost14: String(props.state.workRegPost14),
                workStartPost14: String(props.state.workStartPost14),
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

                lightFreqPost14: String(props.state.lightFreqPost14),
                lightPost14: String(props.state.lightPost14),
                lightRegPost14: String(props.state.lightRegPost14),
                lightWDFDYDPost14: String(props.state.lightWDFDYDPost14),
                lightTimingPost14: String(props.state.lightTimingPost14),
                lightTimingWDPost14: String(props.state.lightTimingWDPost14),
                lightTimingFDPost14: String(props.state.lightTimingFDPost14),
                beck02Post14: String(props.state.beck02Post14),

                lightExposurePost14: String(props.state.lightExposurePost14),

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
    
                diaAtual_LightQPost14: String(props.state.diaAtual_LightQPost14),
                dia_Anterior1_LightQPost14: String(props.state.dia_Anterior1_LightQPost14),
                dia_Anterior2_LightQPost14: String(props.state.dia_Anterior2_LightQPost14),
                dia_Anterior3_LightQPost14: String(props.state.dia_Anterior3_LightQPost14),
                dia_Anterior4_LightQPost14: String(props.state.dia_Anterior4_LightQPost14),
                dia_Anterior5_LightQPost14: String(props.state.dia_Anterior5_LightQPost14),
                dia_Anterior6_LightQPost14: String(props.state.dia_Anterior6_LightQPost14),
                dia_Anterior7_LightQPost14: String(props.state.dia_Anterior7_LightQPost14),
                dia_Anterior8_LightQPost14: String(props.state.dia_Anterior8_LightQPost14),
                dia_Anterior9_LightQPost14: String(props.state.dia_Anterior9_LightQPost14),
                dia_Anterior10_LightQPost14: String(props.state.dia_Anterior10_LightQPost14),
                dia_Anterior11_LightQPost14: String(props.state.dia_Anterior11_LightQPost14),
                dia_Anterior12_LightQPost14: String(props.state.dia_Anterior12_LightQPost14),
                dia_Anterior13_LightQPost14: String(props.state.dia_Anterior13_LightQPost14),
                dia_Anterior14_LightQPost14: String(props.state.dia_Anterior14_LightQPost14),

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

                        <IonLabel className="questions">Você se expôs à luz natural (em um ambiente aberto) nas duas últimas semanas?</IonLabel>
                        <IonNote>Considere apenas exposição à luz natural em um ambiente aberto, considerando também sacadas, terraços, pátio, jardim, etc.</IonNote>

                        <IonItem lines="none" className={"ion-no-padding"}>
                                    <Controller render={({ onChange }) => (
                                        <IonRadioGroup onIonChange={(e) => {
                                           
                                            onChange(e.detail.value);
                                            if (e.detail.value != undefined) {
                                                props.setState('lightExposurePost14', e.detail.value)
                                            }
                                        }}>

                                            <IonItem lines="none">
                                                <IonLabel>Sim</IonLabel>
                                                <IonRadio slot="start" className={"radio-options"} color="primary" value="sim"></IonRadio>
                                            </IonItem>

                                            <IonItem lines="none">
                                                <IonLabel>Não</IonLabel>
                                                <IonRadio slot="start" className={"radio-options"} color="primary" value="não"></IonRadio>
                                            </IonItem>

                                        </IonRadioGroup>)} control={control} name={"lightExposurePost14"} rules={{ required: true }} />
                            
                                </IonItem>


                            {(props.state.lightExposure === "sim") ?
                                <IonItem lines="none">
                                    <IonLabel className="questions">Quão regulares foram os horários em que se expõe à luz natural?</IonLabel>
                                </IonItem> : null}
                            {(props.state.lightExposure === "sim") ?
                                <IonItem lines="none">
                                    <Controller render={({ onChange }) => (
                                        <IonSelect interfaceOptions={options} className={"select-interface-option"} okText="ok" cancelText="Cancelar" placeholder="Clique para selecionar..." onIonChange={(e) => {
                                            console.log(e);
                                            onChange(e.detail.value);
                                            if (e.detail.value != undefined) {
                                                props.setState('lightRegPost14', e.detail.value)
                                            }
                                        }}>
                                            <IonSelectOption value="muito irregulares">Muito irregulares</IonSelectOption>
                                            <IonSelectOption value="irregulares">Irregulares</IonSelectOption>
                                            <IonSelectOption value="regulares">Regulares</IonSelectOption>
                                            <IonSelectOption value="muito regulares">Muito regulares</IonSelectOption>
                                        </IonSelect>)} control={control} name={"lightRegPost14"} rules={{ required: true }} />
                                    {errors.lightRegPost14 && <IonText color="danger">Campo obrigatório.</IonText>}
                                </IonItem> : null}

                                {(props.state.lightExposurePost14 === "sim") ?
                                <IonItem lines="none">
                                    <IonLabel className="questions">Marque quais foram os dias, os horários e por quanto tempo você se expôs a luz natural (em um ambiente aberto) nas duas últimas semanas.
                                    Pode ser marcado mais de um horário por dia.
                                    
                                    </IonLabel>

                                </IonItem> : null}

                                {(props.state.lightExposurePost14 === "sim") ?
                                <IonItem lines="none">
                                   
                                    <IonNote>Se seus foram os mesmos em todos dias, preencha os horários no primeiro dia e a opção REPETIR HORÁRIOS no final.</IonNote>
                                </IonItem> : null}

                                {(props.state.lightExposurePost14 === "sim") ?
                                <IonItem lines="none">
                                   
                                    <IonCheckbox className={"checkbox-options"} color="primary" value={props.getState("diaAtual_BooleanPost14", false)} onIonChange={(e) => {

                                                    if (e.detail.checked) {
                                                        props.setState('diaAtual_BooleanPost14', true)
                                                    } else {
                                                        props.setState('diaAtual_BooleanPost14', false)
                                                    }
                                                }}></IonCheckbox>
                                                <IonLabel >{dia_Atual.toLocaleDateString("pt-br", timeformat)}</IonLabel>
                                                                     
                                </IonItem> : null}

                                {(props.state.diaAtual_BooleanPost14 === true) ? 
                                <IonItem lines="none">

                                    <Controller render={({ onChange }) => (
                                    <IonSelect interfaceOptions={options} ok-text="Ok" cancel-text="Cancelar" placeholder="Clique para selecionar os horários..." multiple={true}
                                         onIonChange={(e) => {
                                            onChange(e.detail.value);
                                            if (e.detail.value != undefined)
                                                props.setState('diaAtual_LightQPost14', e.detail.value)
                                        }}>
                                        <IonSelectOption value={1}>6:00 - 6:30</IonSelectOption>
                                        <IonSelectOption value={2}>6:30 - 7:00</IonSelectOption>
                                        <IonSelectOption value={3}>7:30 - 8:00</IonSelectOption>
                                        <IonSelectOption value={4}>8:00 - 8:30</IonSelectOption>
                                        <IonSelectOption value={5}>8:30 - 9:00</IonSelectOption>
                                        <IonSelectOption value={6}>9:00 - 9:30</IonSelectOption>
                                        <IonSelectOption value={7}>9:30 - 10:00</IonSelectOption>
                                        <IonSelectOption value={8}>10:00 - 10:30</IonSelectOption>
                                        <IonSelectOption value={9}>10:30 - 11:00</IonSelectOption>
                                        <IonSelectOption value={10}>11:00 - 11:30</IonSelectOption>
                                        <IonSelectOption value={11}>11:30 - 12:00</IonSelectOption>
                                        <IonSelectOption value={12}>12:00 - 12:30</IonSelectOption>
                                        <IonSelectOption value={13}>12:30 - 13:00</IonSelectOption>
                                        <IonSelectOption value={14}>13:00 - 13:30</IonSelectOption>
                                        <IonSelectOption value={15}>13:30 - 14:00</IonSelectOption>
                                        <IonSelectOption value={16}>14:00 - 14:30</IonSelectOption>
                                        <IonSelectOption value={17}>14:30 - 15:00</IonSelectOption>
                                        <IonSelectOption value={18}>15:00 - 15:30</IonSelectOption>
                                        <IonSelectOption value={19}>15:30 - 16:00</IonSelectOption>
                                        <IonSelectOption value={20}>16:00 - 16:30</IonSelectOption>
                                        <IonSelectOption value={21}>16:30 - 17:00</IonSelectOption>
                                        <IonSelectOption value={22}>17:00 - 17:30</IonSelectOption>
                                        <IonSelectOption value={23}>17:30 - 18:00</IonSelectOption>
                                    </IonSelect> )} control={control} name={"diaAtual_LightQPost14"} rules={{ required: true }} />
                                </IonItem> : null}


                                {(props.state.lightExposurePost14 === "sim") ?
                                <IonItem lines="none">
                                   
                                    <IonCheckbox className={"checkbox-options"} color="primary" value={props.getState("dia_Anterior1_BooleanPost14", false)} onIonChange={(e) => {

                                                    if (e.detail.checked) {
                                                        props.setState('dia_Anterior1_BooleanPost14', true)
                                                    } else {
                                                        props.setState('dia_Anterior1_BooleanPost14', false)
                                                    }
                                                }}></IonCheckbox>
                                                <IonLabel >{dia_Anterior1.toLocaleDateString("pt-br", timeformat)}</IonLabel>
                                                                     
                                </IonItem> : null}
                             
                                {(props.state.dia_Anterior1_BooleanPost14 === true) ? 

                                <IonItem lines="none">

                                    <Controller render={({ onChange }) => (
                                    <IonSelect interfaceOptions={options} ok-text="Ok" cancel-text="Cancelar" placeholder="Clique para selecionar os horários..." multiple={true}
                                         onIonChange={(e) => {
                                            onChange(e.detail.value);
                                            if (e.detail.value != undefined)
                                                props.setState('dia_Anterior1_LightQPost14', e.detail.value)
                                        }}>
                                        <IonSelectOption value={1}>6:00 - 6:30</IonSelectOption>
                                        <IonSelectOption value={2}>6:30 - 7:00</IonSelectOption>
                                        <IonSelectOption value={3}>7:30 - 8:00</IonSelectOption>
                                        <IonSelectOption value={4}>8:00 - 8:30</IonSelectOption>
                                        <IonSelectOption value={5}>8:30 - 9:00</IonSelectOption>
                                        <IonSelectOption value={6}>9:00 - 9:30</IonSelectOption>
                                        <IonSelectOption value={7}>9:30 - 10:00</IonSelectOption>
                                        <IonSelectOption value={8}>10:00 - 10:30</IonSelectOption>
                                        <IonSelectOption value={9}>10:30 - 11:00</IonSelectOption>
                                        <IonSelectOption value={10}>11:00 - 11:30</IonSelectOption>
                                        <IonSelectOption value={11}>11:30 - 12:00</IonSelectOption>
                                        <IonSelectOption value={12}>12:00 - 12:30</IonSelectOption>
                                        <IonSelectOption value={13}>12:30 - 13:00</IonSelectOption>
                                        <IonSelectOption value={14}>13:00 - 13:30</IonSelectOption>
                                        <IonSelectOption value={15}>13:30 - 14:00</IonSelectOption>
                                        <IonSelectOption value={16}>14:00 - 14:30</IonSelectOption>
                                        <IonSelectOption value={17}>14:30 - 15:00</IonSelectOption>
                                        <IonSelectOption value={18}>15:00 - 15:30</IonSelectOption>
                                        <IonSelectOption value={19}>15:30 - 16:00</IonSelectOption>
                                        <IonSelectOption value={20}>16:00 - 16:30</IonSelectOption>
                                        <IonSelectOption value={21}>16:30 - 17:00</IonSelectOption>
                                        <IonSelectOption value={22}>17:00 - 17:30</IonSelectOption>
                                        <IonSelectOption value={23}>17:30 - 18:00</IonSelectOption>
                                    </IonSelect> )} control={control} name={"dia_Anterior1_LightQPost14"} rules={{ required: true }} />
                                </IonItem> :null}

                                {(props.state.lightExposurePost14 === "sim") ?
                                <IonItem lines="none">
                                   
                                    <IonCheckbox  className={"checkbox-options"} color="primary" value={props.getState("dia_Anterior2_BooleanPost14", false)} onIonChange={(e) => {

                                                    if (e.detail.checked) {
                                                        props.setState('dia_Anterior2_BooleanPost14', true)
                                                    } else {
                                                        props.setState('dia_Anterior2_BooleanPost14', false)
                                                    }
                                                }}></IonCheckbox>
                                                <IonLabel >{dia_Anterior2.toLocaleDateString("pt-br", timeformat)}</IonLabel>
                                                                     
                                </IonItem> : null}

                                {(props.state.dia_Anterior2_BooleanPost14 === true) ? 

                                <IonItem lines="none">

                                     <Controller render={({ onChange }) => (
                                    <IonSelect interfaceOptions={options} ok-text="Ok" cancel-text="Cancelar" placeholder="Clique para selecionar os horários..." multiple={true}
                                         onIonChange={(e) => {
                                            onChange(e.detail.value);
                                            if (e.detail.value != undefined)
                                                props.setState('dia_Anterior2_LightQPost14', e.detail.value)
                                        }}>
                                        <IonSelectOption value={1}>6:00 - 6:30</IonSelectOption>
                                        <IonSelectOption value={2}>6:30 - 7:00</IonSelectOption>
                                        <IonSelectOption value={3}>7:30 - 8:00</IonSelectOption>
                                        <IonSelectOption value={4}>8:00 - 8:30</IonSelectOption>
                                        <IonSelectOption value={5}>8:30 - 9:00</IonSelectOption>
                                        <IonSelectOption value={6}>9:00 - 9:30</IonSelectOption>
                                        <IonSelectOption value={7}>9:30 - 10:00</IonSelectOption>
                                        <IonSelectOption value={8}>10:00 - 10:30</IonSelectOption>
                                        <IonSelectOption value={9}>10:30 - 11:00</IonSelectOption>
                                        <IonSelectOption value={10}>11:00 - 11:30</IonSelectOption>
                                        <IonSelectOption value={11}>11:30 - 12:00</IonSelectOption>
                                        <IonSelectOption value={12}>12:00 - 12:30</IonSelectOption>
                                        <IonSelectOption value={13}>12:30 - 13:00</IonSelectOption>
                                        <IonSelectOption value={14}>13:00 - 13:30</IonSelectOption>
                                        <IonSelectOption value={15}>13:30 - 14:00</IonSelectOption>
                                        <IonSelectOption value={16}>14:00 - 14:30</IonSelectOption>
                                        <IonSelectOption value={17}>14:30 - 15:00</IonSelectOption>
                                        <IonSelectOption value={18}>15:00 - 15:30</IonSelectOption>
                                        <IonSelectOption value={19}>15:30 - 16:00</IonSelectOption>
                                        <IonSelectOption value={20}>16:00 - 16:30</IonSelectOption>
                                        <IonSelectOption value={21}>16:30 - 17:00</IonSelectOption>
                                        <IonSelectOption value={22}>17:00 - 17:30</IonSelectOption>
                                        <IonSelectOption value={23}>17:30 - 18:00</IonSelectOption>
                                    </IonSelect> )} control={control} name={"dia_Anterior2_LightQPost14"} rules={{ required: true }} />

                                </IonItem>

                                :null}

                                {(props.state.lightExposurePost14 === "sim") ?
                                <IonItem lines="none">
                                   
                                    <IonCheckbox className={"checkbox-options"} color="primary" value={props.getState("dia_Anterior3_BooleanPost14", false)} onIonChange={(e) => {

                                                    if (e.detail.checked) {
                                                        props.setState('dia_Anterior3_BooleanPost14', true)
                                                    } else {
                                                        props.setState('dia_Anterior3_BooleanPost14', false)
                                                    }
                                                }}></IonCheckbox>
                                                <IonLabel >{dia_Anterior3.toLocaleDateString("pt-br", timeformat)}</IonLabel>
                                                                     
                                </IonItem> : null}

                                {(props.state.dia_Anterior3_BooleanPost14 === true) ? 
                                
                                <IonItem lines="none">

                                     <Controller render={({ onChange }) => (
                                    <IonSelect interfaceOptions={options} ok-text="Ok" cancel-text="Cancelar" placeholder="Clique para selecionar os horários..." multiple={true}
                                         onIonChange={(e) => {
                                            onChange(e.detail.value);
                                            if (e.detail.value != undefined)
                                                props.setState('dia_Anterior3_LightQPost14', e.detail.value)
                                        }}>
                                        <IonSelectOption value={1}>6:00 - 6:30</IonSelectOption>
                                        <IonSelectOption value={2}>6:30 - 7:00</IonSelectOption>
                                        <IonSelectOption value={3}>7:30 - 8:00</IonSelectOption>
                                        <IonSelectOption value={4}>8:00 - 8:30</IonSelectOption>
                                        <IonSelectOption value={5}>8:30 - 9:00</IonSelectOption>
                                        <IonSelectOption value={6}>9:00 - 9:30</IonSelectOption>
                                        <IonSelectOption value={7}>9:30 - 10:00</IonSelectOption>
                                        <IonSelectOption value={8}>10:00 - 10:30</IonSelectOption>
                                        <IonSelectOption value={9}>10:30 - 11:00</IonSelectOption>
                                        <IonSelectOption value={10}>11:00 - 11:30</IonSelectOption>
                                        <IonSelectOption value={11}>11:30 - 12:00</IonSelectOption>
                                        <IonSelectOption value={12}>12:00 - 12:30</IonSelectOption>
                                        <IonSelectOption value={13}>12:30 - 13:00</IonSelectOption>
                                        <IonSelectOption value={14}>13:00 - 13:30</IonSelectOption>
                                        <IonSelectOption value={15}>13:30 - 14:00</IonSelectOption>
                                        <IonSelectOption value={16}>14:00 - 14:30</IonSelectOption>
                                        <IonSelectOption value={17}>14:30 - 15:00</IonSelectOption>
                                        <IonSelectOption value={18}>15:00 - 15:30</IonSelectOption>
                                        <IonSelectOption value={19}>15:30 - 16:00</IonSelectOption>
                                        <IonSelectOption value={20}>16:00 - 16:30</IonSelectOption>
                                        <IonSelectOption value={21}>16:30 - 17:00</IonSelectOption>
                                        <IonSelectOption value={22}>17:00 - 17:30</IonSelectOption>
                                        <IonSelectOption value={23}>17:30 - 18:00</IonSelectOption>
                                    </IonSelect> )} control={control} name={"dia_Anterior3_LightQPost14"} rules={{ required: true }} />

                                </IonItem>
                                
                                :null}

                                {(props.state.lightExposurePost14 === "sim") ?
                                <IonItem lines="none">
                                   
                                    <IonCheckbox className={"checkbox-options"} color="primary" value={props.getState("dia_Anterior4_BooleanPost14", false)} onIonChange={(e) => {

                                                    if (e.detail.checked) {
                                                        props.setState('dia_Anterior4_BooleanPost14', true)
                                                    } else {
                                                        props.setState('dia_Anterior4_BooleanPost14', false)
                                                    }
                                                }}></IonCheckbox>
                                                <IonLabel >{dia_Anterior4.toLocaleDateString("pt-br", timeformat)}</IonLabel>
                                                                     
                                </IonItem> : null}

                                {(props.state.dia_Anterior4_BooleanPost14 === true) ? 

                                <IonItem lines="none">

                                    <Controller render={({ onChange }) => (
                                    <IonSelect interfaceOptions={options} ok-text="Ok" cancel-text="Cancelar" placeholder="Clique para selecionar os horários..." multiple={true}
                                         onIonChange={(e) => {
                                            onChange(e.detail.value);
                                            if (e.detail.value != undefined)
                                                props.setState('dia_Anterior4_LightQPost14', e.detail.value)
                                        }}>
                                        <IonSelectOption value={1}>6:00 - 6:30</IonSelectOption>
                                        <IonSelectOption value={2}>6:30 - 7:00</IonSelectOption>
                                        <IonSelectOption value={3}>7:30 - 8:00</IonSelectOption>
                                        <IonSelectOption value={4}>8:00 - 8:30</IonSelectOption>
                                        <IonSelectOption value={5}>8:30 - 9:00</IonSelectOption>
                                        <IonSelectOption value={6}>9:00 - 9:30</IonSelectOption>
                                        <IonSelectOption value={7}>9:30 - 10:00</IonSelectOption>
                                        <IonSelectOption value={8}>10:00 - 10:30</IonSelectOption>
                                        <IonSelectOption value={9}>10:30 - 11:00</IonSelectOption>
                                        <IonSelectOption value={10}>11:00 - 11:30</IonSelectOption>
                                        <IonSelectOption value={11}>11:30 - 12:00</IonSelectOption>
                                        <IonSelectOption value={12}>12:00 - 12:30</IonSelectOption>
                                        <IonSelectOption value={13}>12:30 - 13:00</IonSelectOption>
                                        <IonSelectOption value={14}>13:00 - 13:30</IonSelectOption>
                                        <IonSelectOption value={15}>13:30 - 14:00</IonSelectOption>
                                        <IonSelectOption value={16}>14:00 - 14:30</IonSelectOption>
                                        <IonSelectOption value={17}>14:30 - 15:00</IonSelectOption>
                                        <IonSelectOption value={18}>15:00 - 15:30</IonSelectOption>
                                        <IonSelectOption value={19}>15:30 - 16:00</IonSelectOption>
                                        <IonSelectOption value={20}>16:00 - 16:30</IonSelectOption>
                                        <IonSelectOption value={21}>16:30 - 17:00</IonSelectOption>
                                        <IonSelectOption value={22}>17:00 - 17:30</IonSelectOption>
                                        <IonSelectOption value={23}>17:30 - 18:00</IonSelectOption>
                                    </IonSelect> )} control={control} name={"dia_Anterior4_LightQPost14"} rules={{ required: true }} />

                                </IonItem>

                                :null}

                                {(props.state.lightExposurePost14 === "sim") ?
                                <IonItem lines="none">
                                   
                                    <IonCheckbox className={"checkbox-options"} color="primary" value={props.getState("dia_Anterior5_BooleanPost14", false)} onIonChange={(e) => {

                                                    if (e.detail.checked) {
                                                        props.setState('dia_Anterior5_BooleanPost14', true)
                                                    } else {
                                                        props.setState('dia_Anterior5_BooleanPost14', false)
                                                    }
                                                }}></IonCheckbox>
                                                <IonLabel >{dia_Anterior5.toLocaleDateString("pt-br", timeformat)}</IonLabel>
                                                                     
                                </IonItem> : null}

                                {(props.state.dia_Anterior5_BooleanPost14 === true) ? 

                                <IonItem lines="none">

                                    <Controller render={({ onChange }) => (
                                    <IonSelect interfaceOptions={options} ok-text="Ok" cancel-text="Cancelar" placeholder="Clique para selecionar os horários..." multiple={true}
                                         onIonChange={(e) => {
                                            onChange(e.detail.value);
                                            if (e.detail.value != undefined)
                                                props.setState('dia_Anterior5_LightQPost14', e.detail.value)
                                        }}>
                                        <IonSelectOption value={1}>6:00 - 6:30</IonSelectOption>
                                        <IonSelectOption value={2}>6:30 - 7:00</IonSelectOption>
                                        <IonSelectOption value={3}>7:30 - 8:00</IonSelectOption>
                                        <IonSelectOption value={4}>8:00 - 8:30</IonSelectOption>
                                        <IonSelectOption value={5}>8:30 - 9:00</IonSelectOption>
                                        <IonSelectOption value={6}>9:00 - 9:30</IonSelectOption>
                                        <IonSelectOption value={7}>9:30 - 10:00</IonSelectOption>
                                        <IonSelectOption value={8}>10:00 - 10:30</IonSelectOption>
                                        <IonSelectOption value={9}>10:30 - 11:00</IonSelectOption>
                                        <IonSelectOption value={10}>11:00 - 11:30</IonSelectOption>
                                        <IonSelectOption value={11}>11:30 - 12:00</IonSelectOption>
                                        <IonSelectOption value={12}>12:00 - 12:30</IonSelectOption>
                                        <IonSelectOption value={13}>12:30 - 13:00</IonSelectOption>
                                        <IonSelectOption value={14}>13:00 - 13:30</IonSelectOption>
                                        <IonSelectOption value={15}>13:30 - 14:00</IonSelectOption>
                                        <IonSelectOption value={16}>14:00 - 14:30</IonSelectOption>
                                        <IonSelectOption value={17}>14:30 - 15:00</IonSelectOption>
                                        <IonSelectOption value={18}>15:00 - 15:30</IonSelectOption>
                                        <IonSelectOption value={19}>15:30 - 16:00</IonSelectOption>
                                        <IonSelectOption value={20}>16:00 - 16:30</IonSelectOption>
                                        <IonSelectOption value={21}>16:30 - 17:00</IonSelectOption>
                                        <IonSelectOption value={22}>17:00 - 17:30</IonSelectOption>
                                        <IonSelectOption value={23}>17:30 - 18:00</IonSelectOption>
                                    </IonSelect> )} control={control} name={"dia_Anterior5_LightQPost14"} rules={{ required: true }} />

                                </IonItem>
                                
                                :null}

                                {(props.state.lightExposurePost14 === "sim") ?
                                <IonItem lines="none">
                                   
                                    <IonCheckbox className={"checkbox-options"} color="primary" value={props.getState("dia_Anterior6_BooleanPost14", false)} onIonChange={(e) => {

                                                    if (e.detail.checked) {
                                                        props.setState('dia_Anterior6_BooleanPost14', true)
                                                    } else {
                                                        props.setState('dia_Anterior6_BooleanPost14', false)
                                                    }
                                                }}></IonCheckbox>
                                                <IonLabel >{dia_Anterior6.toLocaleDateString("pt-br", timeformat)}</IonLabel>
                                                                     
                                </IonItem> : null}

                                {(props.state.dia_Anterior6_BooleanPost14 === true) ? 

                                <IonItem lines="none">

                                    <Controller render={({ onChange }) => (
                                    <IonSelect interfaceOptions={options} ok-text="Ok" cancel-text="Cancelar" placeholder="Clique para selecionar os horários..." multiple={true}
                                         onIonChange={(e) => {
                                            onChange(e.detail.value);
                                            if (e.detail.value != undefined)
                                                props.setState('dia_Anterior6_LightQPost14', e.detail.value)
                                        }}>
                                        <IonSelectOption value={1}>6:00 - 6:30</IonSelectOption>
                                        <IonSelectOption value={2}>6:30 - 7:00</IonSelectOption>
                                        <IonSelectOption value={3}>7:30 - 8:00</IonSelectOption>
                                        <IonSelectOption value={4}>8:00 - 8:30</IonSelectOption>
                                        <IonSelectOption value={5}>8:30 - 9:00</IonSelectOption>
                                        <IonSelectOption value={6}>9:00 - 9:30</IonSelectOption>
                                        <IonSelectOption value={7}>9:30 - 10:00</IonSelectOption>
                                        <IonSelectOption value={8}>10:00 - 10:30</IonSelectOption>
                                        <IonSelectOption value={9}>10:30 - 11:00</IonSelectOption>
                                        <IonSelectOption value={10}>11:00 - 11:30</IonSelectOption>
                                        <IonSelectOption value={11}>11:30 - 12:00</IonSelectOption>
                                        <IonSelectOption value={12}>12:00 - 12:30</IonSelectOption>
                                        <IonSelectOption value={13}>12:30 - 13:00</IonSelectOption>
                                        <IonSelectOption value={14}>13:00 - 13:30</IonSelectOption>
                                        <IonSelectOption value={15}>13:30 - 14:00</IonSelectOption>
                                        <IonSelectOption value={16}>14:00 - 14:30</IonSelectOption>
                                        <IonSelectOption value={17}>14:30 - 15:00</IonSelectOption>
                                        <IonSelectOption value={18}>15:00 - 15:30</IonSelectOption>
                                        <IonSelectOption value={19}>15:30 - 16:00</IonSelectOption>
                                        <IonSelectOption value={20}>16:00 - 16:30</IonSelectOption>
                                        <IonSelectOption value={21}>16:30 - 17:00</IonSelectOption>
                                        <IonSelectOption value={22}>17:00 - 17:30</IonSelectOption>
                                        <IonSelectOption value={23}>17:30 - 18:00</IonSelectOption>
                                    </IonSelect> )} control={control} name={"dia_Anterior6_LightQPost14"} rules={{ required: true }} />

                                </IonItem>
                                
                                :null}
                                
                                {(props.state.lightExposurePost14 === "sim") ?
                                <IonItem lines="none">
                                   
                                    <IonCheckbox className={"checkbox-options"} color="primary" value={props.getState("dia_Anterior7_BooleanPost14", false)} onIonChange={(e) => {

                                                    if (e.detail.checked) {
                                                        props.setState('dia_Anterior7_BooleanPost14', true)
                                                    } else {
                                                        props.setState('dia_Anterior7_BooleanPost14', false)
                                                    }
                                                }}></IonCheckbox>
                                                <IonLabel >{dia_Anterior7.toLocaleDateString("pt-br", timeformat)}</IonLabel>
                                                                     
                                </IonItem> : null}

                                {(props.state.dia_Anterior7_BooleanPost14 === true) ? 

                                <IonItem lines="none">

                                     <Controller render={({ onChange }) => (
                                    <IonSelect interfaceOptions={options} ok-text="Ok" cancel-text="Cancelar" placeholder="Clique para selecionar os horários..." multiple={true}
                                         onIonChange={(e) => {
                                            onChange(e.detail.value);
                                            if (e.detail.value != undefined)
                                                props.setState('dia_Anterior7_LightQPost14', e.detail.value)
                                        }}>
                                        <IonSelectOption value={1}>6:00 - 6:30</IonSelectOption>
                                        <IonSelectOption value={2}>6:30 - 7:00</IonSelectOption>
                                        <IonSelectOption value={3}>7:30 - 8:00</IonSelectOption>
                                        <IonSelectOption value={4}>8:00 - 8:30</IonSelectOption>
                                        <IonSelectOption value={5}>8:30 - 9:00</IonSelectOption>
                                        <IonSelectOption value={6}>9:00 - 9:30</IonSelectOption>
                                        <IonSelectOption value={7}>9:30 - 10:00</IonSelectOption>
                                        <IonSelectOption value={8}>10:00 - 10:30</IonSelectOption>
                                        <IonSelectOption value={9}>10:30 - 11:00</IonSelectOption>
                                        <IonSelectOption value={10}>11:00 - 11:30</IonSelectOption>
                                        <IonSelectOption value={11}>11:30 - 12:00</IonSelectOption>
                                        <IonSelectOption value={12}>12:00 - 12:30</IonSelectOption>
                                        <IonSelectOption value={13}>12:30 - 13:00</IonSelectOption>
                                        <IonSelectOption value={14}>13:00 - 13:30</IonSelectOption>
                                        <IonSelectOption value={15}>13:30 - 14:00</IonSelectOption>
                                        <IonSelectOption value={16}>14:00 - 14:30</IonSelectOption>
                                        <IonSelectOption value={17}>14:30 - 15:00</IonSelectOption>
                                        <IonSelectOption value={18}>15:00 - 15:30</IonSelectOption>
                                        <IonSelectOption value={19}>15:30 - 16:00</IonSelectOption>
                                        <IonSelectOption value={20}>16:00 - 16:30</IonSelectOption>
                                        <IonSelectOption value={21}>16:30 - 17:00</IonSelectOption>
                                        <IonSelectOption value={22}>17:00 - 17:30</IonSelectOption>
                                        <IonSelectOption value={23}>17:30 - 18:00</IonSelectOption>
                                    </IonSelect> )} control={control} name={"dia_Anterior7_LightQPost14"} rules={{ required: true }} />

                                </IonItem>
                                
                                :null}

                                {(props.state.lightExposurePost14 === "sim") ?
                                <IonItem lines="none">
                                   
                                    <IonCheckbox className={"checkbox-options"} color="primary" value={props.getState("dia_Anterior8_BooleanPost14", false)} onIonChange={(e) => {

                                                    if (e.detail.checked) {
                                                        props.setState('dia_Anterior8_BooleanPost14', true)
                                                    } else {
                                                        props.setState('dia_Anterior8_BooleanPost14', false)
                                                    }
                                                }}></IonCheckbox>
                                                <IonLabel >{dia_Anterior8.toLocaleDateString("pt-br", timeformat)}</IonLabel>
                                                                     
                                </IonItem> : null}

                                {(props.state.dia_Anterior8_BooleanPost14 === true) ? 

                                <IonItem lines="none">
                                    <Controller render={({ onChange }) => (
                                    <IonSelect interfaceOptions={options} ok-text="Ok" cancel-text="Cancelar" placeholder="Clique para selecionar os horários..." multiple={true}
                                         onIonChange={(e) => {
                                            onChange(e.detail.value);
                                            if (e.detail.value != undefined)
                                                props.setState('dia_Anterior8_LightQPost14', e.detail.value)
                                        }}>
                                        <IonSelectOption value={1}>6:00 - 6:30</IonSelectOption>
                                        <IonSelectOption value={2}>6:30 - 7:00</IonSelectOption>
                                        <IonSelectOption value={3}>7:30 - 8:00</IonSelectOption>
                                        <IonSelectOption value={4}>8:00 - 8:30</IonSelectOption>
                                        <IonSelectOption value={5}>8:30 - 9:00</IonSelectOption>
                                        <IonSelectOption value={6}>9:00 - 9:30</IonSelectOption>
                                        <IonSelectOption value={7}>9:30 - 10:00</IonSelectOption>
                                        <IonSelectOption value={8}>10:00 - 10:30</IonSelectOption>
                                        <IonSelectOption value={9}>10:30 - 11:00</IonSelectOption>
                                        <IonSelectOption value={10}>11:00 - 11:30</IonSelectOption>
                                        <IonSelectOption value={11}>11:30 - 12:00</IonSelectOption>
                                        <IonSelectOption value={12}>12:00 - 12:30</IonSelectOption>
                                        <IonSelectOption value={13}>12:30 - 13:00</IonSelectOption>
                                        <IonSelectOption value={14}>13:00 - 13:30</IonSelectOption>
                                        <IonSelectOption value={15}>13:30 - 14:00</IonSelectOption>
                                        <IonSelectOption value={16}>14:00 - 14:30</IonSelectOption>
                                        <IonSelectOption value={17}>14:30 - 15:00</IonSelectOption>
                                        <IonSelectOption value={18}>15:00 - 15:30</IonSelectOption>
                                        <IonSelectOption value={19}>15:30 - 16:00</IonSelectOption>
                                        <IonSelectOption value={20}>16:00 - 16:30</IonSelectOption>
                                        <IonSelectOption value={21}>16:30 - 17:00</IonSelectOption>
                                        <IonSelectOption value={22}>17:00 - 17:30</IonSelectOption>
                                        <IonSelectOption value={23}>17:30 - 18:00</IonSelectOption>
                                    </IonSelect> )} control={control} name={"dia_Anterior8_LightQPost14"} rules={{ required: true }} />
                                </IonItem>
                                
                                :null}

                                {(props.state.lightExposurePost14 === "sim") ?
                                <IonItem lines="none">
                                   
                                    <IonCheckbox className={"checkbox-options"} color="primary" value={props.getState("dia_Anterior9_BooleanPost14", false)} onIonChange={(e) => {

                                                    if (e.detail.checked) {
                                                        props.setState('dia_Anterior9_BooleanPost14', true)
                                                    } else {
                                                        props.setState('dia_Anterior9_BooleanPost14', false)
                                                    }
                                                }}></IonCheckbox>
                                                <IonLabel >{dia_Anterior9.toLocaleDateString("pt-br", timeformat)}</IonLabel>
                                                                     
                                </IonItem> : null}

                                {(props.state.dia_Anterior9_BooleanPost14 === true) ? 

                                <IonItem lines="none">
                                    <Controller render={({ onChange }) => (
                                    <IonSelect interfaceOptions={options} ok-text="Ok" cancel-text="Cancelar" placeholder="Clique para selecionar os horários..." multiple={true}
                                         onIonChange={(e) => {
                                            onChange(e.detail.value);
                                            if (e.detail.value != undefined)
                                                props.setState('dia_Anterior9_LightQPost14', e.detail.value)
                                        }}>
                                        <IonSelectOption value={1}>6:00 - 6:30</IonSelectOption>
                                        <IonSelectOption value={2}>6:30 - 7:00</IonSelectOption>
                                        <IonSelectOption value={3}>7:30 - 8:00</IonSelectOption>
                                        <IonSelectOption value={4}>8:00 - 8:30</IonSelectOption>
                                        <IonSelectOption value={5}>8:30 - 9:00</IonSelectOption>
                                        <IonSelectOption value={6}>9:00 - 9:30</IonSelectOption>
                                        <IonSelectOption value={7}>9:30 - 10:00</IonSelectOption>
                                        <IonSelectOption value={8}>10:00 - 10:30</IonSelectOption>
                                        <IonSelectOption value={9}>10:30 - 11:00</IonSelectOption>
                                        <IonSelectOption value={10}>11:00 - 11:30</IonSelectOption>
                                        <IonSelectOption value={11}>11:30 - 12:00</IonSelectOption>
                                        <IonSelectOption value={12}>12:00 - 12:30</IonSelectOption>
                                        <IonSelectOption value={13}>12:30 - 13:00</IonSelectOption>
                                        <IonSelectOption value={14}>13:00 - 13:30</IonSelectOption>
                                        <IonSelectOption value={15}>13:30 - 14:00</IonSelectOption>
                                        <IonSelectOption value={16}>14:00 - 14:30</IonSelectOption>
                                        <IonSelectOption value={17}>14:30 - 15:00</IonSelectOption>
                                        <IonSelectOption value={18}>15:00 - 15:30</IonSelectOption>
                                        <IonSelectOption value={19}>15:30 - 16:00</IonSelectOption>
                                        <IonSelectOption value={20}>16:00 - 16:30</IonSelectOption>
                                        <IonSelectOption value={21}>16:30 - 17:00</IonSelectOption>
                                        <IonSelectOption value={22}>17:00 - 17:30</IonSelectOption>
                                        <IonSelectOption value={23}>17:30 - 18:00</IonSelectOption>
                                    </IonSelect> )} control={control} name={"dia_Anterior9_LightQPost14"} rules={{ required: true }} />
                                </IonItem>
                                
                                :null}

                                {(props.state.lightExposurePost14 === "sim") ?
                                <IonItem lines="none">
                                   
                                    <IonCheckbox className={"checkbox-options"} color="primary" value={props.getState("dia_Anterior10_BooleanPost14", false)} onIonChange={(e) => {

                                                    if (e.detail.checked) {
                                                        props.setState('dia_Anterior10_BooleanPost14', true)
                                                    } else {
                                                        props.setState('dia_Anterior10_BooleanPost14', false)
                                                    }
                                                }}></IonCheckbox>
                                                <IonLabel >{dia_Anterior10.toLocaleDateString("pt-br", timeformat)}</IonLabel>
                                                                     
                                </IonItem> : null}

                                {(props.state.dia_Anterior10_BooleanPost14 === true) ? 

                                <IonItem lines="none">
                                    <Controller render={({ onChange }) => (
                                    <IonSelect interfaceOptions={options} ok-text="Ok" cancel-text="Cancelar" placeholder="Clique para selecionar os horários..." multiple={true}
                                         onIonChange={(e) => {
                                            onChange(e.detail.value);
                                            if (e.detail.value != undefined)
                                                props.setState('dia_Anterior10_LightQPost14', e.detail.value)
                                        }}>
                                        <IonSelectOption value={1}>6:00 - 6:30</IonSelectOption>
                                        <IonSelectOption value={2}>6:30 - 7:00</IonSelectOption>
                                        <IonSelectOption value={3}>7:30 - 8:00</IonSelectOption>
                                        <IonSelectOption value={4}>8:00 - 8:30</IonSelectOption>
                                        <IonSelectOption value={5}>8:30 - 9:00</IonSelectOption>
                                        <IonSelectOption value={6}>9:00 - 9:30</IonSelectOption>
                                        <IonSelectOption value={7}>9:30 - 10:00</IonSelectOption>
                                        <IonSelectOption value={8}>10:00 - 10:30</IonSelectOption>
                                        <IonSelectOption value={9}>10:30 - 11:00</IonSelectOption>
                                        <IonSelectOption value={10}>11:00 - 11:30</IonSelectOption>
                                        <IonSelectOption value={11}>11:30 - 12:00</IonSelectOption>
                                        <IonSelectOption value={12}>12:00 - 12:30</IonSelectOption>
                                        <IonSelectOption value={13}>12:30 - 13:00</IonSelectOption>
                                        <IonSelectOption value={14}>13:00 - 13:30</IonSelectOption>
                                        <IonSelectOption value={15}>13:30 - 14:00</IonSelectOption>
                                        <IonSelectOption value={16}>14:00 - 14:30</IonSelectOption>
                                        <IonSelectOption value={17}>14:30 - 15:00</IonSelectOption>
                                        <IonSelectOption value={18}>15:00 - 15:30</IonSelectOption>
                                        <IonSelectOption value={19}>15:30 - 16:00</IonSelectOption>
                                        <IonSelectOption value={20}>16:00 - 16:30</IonSelectOption>
                                        <IonSelectOption value={21}>16:30 - 17:00</IonSelectOption>
                                        <IonSelectOption value={22}>17:00 - 17:30</IonSelectOption>
                                        <IonSelectOption value={23}>17:30 - 18:00</IonSelectOption>
                                    </IonSelect> )} control={control} name={"dia_Anterior10_LightQPost14"} rules={{ required: true }} />

                                </IonItem>
                                
                                :null}

                                {(props.state.lightExposurePost14 === "sim") ?
                                <IonItem lines="none">
                                   
                                    <IonCheckbox className={"checkbox-options"} color="primary" value={props.getState("dia_Anterior11_BooleanPost14", false)} onIonChange={(e) => {

                                                    if (e.detail.checked) {
                                                        props.setState('dia_Anterior11_BooleanPost14', true)
                                                    } else {
                                                        props.setState('dia_Anterior11_BooleanPost14', false)
                                                    }
                                                }}></IonCheckbox>
                                                <IonLabel >{dia_Anterior11.toLocaleDateString("pt-br", timeformat)}</IonLabel>
                                                                     
                                </IonItem> : null}

                                {(props.state.dia_Anterior11_BooleanPost14 === true) ? 

                                <IonItem lines="none">
                                    <Controller render={({ onChange }) => (
                                    <IonSelect interfaceOptions={options} ok-text="Ok" cancel-text="Cancelar" placeholder="Clique para selecionar os horários..." multiple={true}
                                         onIonChange={(e) => {
                                            onChange(e.detail.value);
                                            if (e.detail.value != undefined)
                                                props.setState('dia_Anterior11_LightQPost14', e.detail.value)
                                        }}>
                                        <IonSelectOption value={1}>6:00 - 6:30</IonSelectOption>
                                        <IonSelectOption value={2}>6:30 - 7:00</IonSelectOption>
                                        <IonSelectOption value={3}>7:30 - 8:00</IonSelectOption>
                                        <IonSelectOption value={4}>8:00 - 8:30</IonSelectOption>
                                        <IonSelectOption value={5}>8:30 - 9:00</IonSelectOption>
                                        <IonSelectOption value={6}>9:00 - 9:30</IonSelectOption>
                                        <IonSelectOption value={7}>9:30 - 10:00</IonSelectOption>
                                        <IonSelectOption value={8}>10:00 - 10:30</IonSelectOption>
                                        <IonSelectOption value={9}>10:30 - 11:00</IonSelectOption>
                                        <IonSelectOption value={10}>11:00 - 11:30</IonSelectOption>
                                        <IonSelectOption value={11}>11:30 - 12:00</IonSelectOption>
                                        <IonSelectOption value={12}>12:00 - 12:30</IonSelectOption>
                                        <IonSelectOption value={13}>12:30 - 13:00</IonSelectOption>
                                        <IonSelectOption value={14}>13:00 - 13:30</IonSelectOption>
                                        <IonSelectOption value={15}>13:30 - 14:00</IonSelectOption>
                                        <IonSelectOption value={16}>14:00 - 14:30</IonSelectOption>
                                        <IonSelectOption value={17}>14:30 - 15:00</IonSelectOption>
                                        <IonSelectOption value={18}>15:00 - 15:30</IonSelectOption>
                                        <IonSelectOption value={19}>15:30 - 16:00</IonSelectOption>
                                        <IonSelectOption value={20}>16:00 - 16:30</IonSelectOption>
                                        <IonSelectOption value={21}>16:30 - 17:00</IonSelectOption>
                                        <IonSelectOption value={22}>17:00 - 17:30</IonSelectOption>
                                        <IonSelectOption value={23}>17:30 - 18:00</IonSelectOption>
                                    </IonSelect> )} control={control} name={"dia_Anterior11_LightQPost14"} rules={{ required: true }} />
                            
                                </IonItem>
                                
                                :null}

                                {(props.state.lightExposurePost14 === "sim") ?
                                <IonItem lines="none">
                                   
                                    <IonCheckbox className={"checkbox-options"} color="primary" value={props.getState("dia_Anterior12_BooleanPost14", false)} onIonChange={(e) => {

                                                    if (e.detail.checked) {
                                                        props.setState('dia_Anterior12_BooleanPost14', true)
                                                    } else {
                                                        props.setState('dia_Anterior12_BooleanPost14', false)
                                                    }
                                                }}></IonCheckbox>
                                                <IonLabel >{dia_Anterior12.toLocaleDateString("pt-br", timeformat)}</IonLabel>
                                                                     
                                </IonItem> : null}

                                {(props.state.dia_Anterior12_BooleanPost14) === true ? 

                                <IonItem lines="none">

                                    <Controller render={({ onChange }) => (
                                    <IonSelect interfaceOptions={options} ok-text="Ok" cancel-text="Cancelar" placeholder="Clique para selecionar os horários..." multiple={true}
                                         onIonChange={(e) => {
                                            onChange(e.detail.value);
                                            if (e.detail.value != undefined)
                                                props.setState('dia_Anterior12_LightQPost14', e.detail.value)
                                        }}>
                                        <IonSelectOption value={1}>6:00 - 6:30</IonSelectOption>
                                        <IonSelectOption value={2}>6:30 - 7:00</IonSelectOption>
                                        <IonSelectOption value={3}>7:30 - 8:00</IonSelectOption>
                                        <IonSelectOption value={4}>8:00 - 8:30</IonSelectOption>
                                        <IonSelectOption value={5}>8:30 - 9:00</IonSelectOption>
                                        <IonSelectOption value={6}>9:00 - 9:30</IonSelectOption>
                                        <IonSelectOption value={7}>9:30 - 10:00</IonSelectOption>
                                        <IonSelectOption value={8}>10:00 - 10:30</IonSelectOption>
                                        <IonSelectOption value={9}>10:30 - 11:00</IonSelectOption>
                                        <IonSelectOption value={10}>11:00 - 11:30</IonSelectOption>
                                        <IonSelectOption value={11}>11:30 - 12:00</IonSelectOption>
                                        <IonSelectOption value={12}>12:00 - 12:30</IonSelectOption>
                                        <IonSelectOption value={13}>12:30 - 13:00</IonSelectOption>
                                        <IonSelectOption value={14}>13:00 - 13:30</IonSelectOption>
                                        <IonSelectOption value={15}>13:30 - 14:00</IonSelectOption>
                                        <IonSelectOption value={16}>14:00 - 14:30</IonSelectOption>
                                        <IonSelectOption value={17}>14:30 - 15:00</IonSelectOption>
                                        <IonSelectOption value={18}>15:00 - 15:30</IonSelectOption>
                                        <IonSelectOption value={19}>15:30 - 16:00</IonSelectOption>
                                        <IonSelectOption value={20}>16:00 - 16:30</IonSelectOption>
                                        <IonSelectOption value={21}>16:30 - 17:00</IonSelectOption>
                                        <IonSelectOption value={22}>17:00 - 17:30</IonSelectOption>
                                        <IonSelectOption value={23}>17:30 - 18:00</IonSelectOption>
                                    </IonSelect> )} control={control} name={"dia_Anterior12_LightQPost14"} rules={{ required: true }} />

                                </IonItem>
                                
                                :null}

                                {(props.state.lightExposurePost14 === "sim") ?
                                <IonItem lines="none">
                                   
                                    <IonCheckbox className={"checkbox-options"} color="primary" value={props.getState("dia_Anterior13_BooleanPost14", false)} onIonChange={(e) => {

                                                    if (e.detail.checked) {
                                                        props.setState('dia_Anterior13_BooleanPost14', true)
                                                    } else {
                                                        props.setState('dia_Anterior13_BooleanPost14', false)
                                                    }
                                                }}></IonCheckbox>
                                                <IonLabel >{dia_Anterior13.toLocaleDateString("pt-br", timeformat)}</IonLabel>
                                                                     
                                </IonItem> : null}

                                {(props.state.dia_Anterior13_BooleanPost14 === true) ? 

                                <IonItem lines="none">

                                    <Controller render={({ onChange }) => (
                                    <IonSelect interfaceOptions={options} ok-text="Ok" cancel-text="Cancelar" placeholder="Clique para selecionar os horários..." multiple={true}
                                         onIonChange={(e) => {
                                            onChange(e.detail.value);
                                            if (e.detail.value != undefined)
                                                props.setState('dia_Anterior13_LightQPost14', e.detail.value)
                                        }}>
                                        <IonSelectOption value={1}>6:00 - 6:30</IonSelectOption>
                                        <IonSelectOption value={2}>6:30 - 7:00</IonSelectOption>
                                        <IonSelectOption value={3}>7:30 - 8:00</IonSelectOption>
                                        <IonSelectOption value={4}>8:00 - 8:30</IonSelectOption>
                                        <IonSelectOption value={5}>8:30 - 9:00</IonSelectOption>
                                        <IonSelectOption value={6}>9:00 - 9:30</IonSelectOption>
                                        <IonSelectOption value={7}>9:30 - 10:00</IonSelectOption>
                                        <IonSelectOption value={8}>10:00 - 10:30</IonSelectOption>
                                        <IonSelectOption value={9}>10:30 - 11:00</IonSelectOption>
                                        <IonSelectOption value={10}>11:00 - 11:30</IonSelectOption>
                                        <IonSelectOption value={11}>11:30 - 12:00</IonSelectOption>
                                        <IonSelectOption value={12}>12:00 - 12:30</IonSelectOption>
                                        <IonSelectOption value={13}>12:30 - 13:00</IonSelectOption>
                                        <IonSelectOption value={14}>13:00 - 13:30</IonSelectOption>
                                        <IonSelectOption value={15}>13:30 - 14:00</IonSelectOption>
                                        <IonSelectOption value={16}>14:00 - 14:30</IonSelectOption>
                                        <IonSelectOption value={17}>14:30 - 15:00</IonSelectOption>
                                        <IonSelectOption value={18}>15:00 - 15:30</IonSelectOption>
                                        <IonSelectOption value={19}>15:30 - 16:00</IonSelectOption>
                                        <IonSelectOption value={20}>16:00 - 16:30</IonSelectOption>
                                        <IonSelectOption value={21}>16:30 - 17:00</IonSelectOption>
                                        <IonSelectOption value={22}>17:00 - 17:30</IonSelectOption>
                                        <IonSelectOption value={23}>17:30 - 18:00</IonSelectOption>
                                    </IonSelect> )} control={control} name={"dia_Anterior13_LightQPost14"} rules={{ required: true }} />
                                </IonItem>
                                
                                :null}

                                
                                {(props.state.lightExposurePost14 === "sim") ?
                                <IonItem lines="none">
                                   
                                    <IonCheckbox className={"checkbox-options"} color="primary" value={props.getState("dia_Anterior14_BooleanPost14", false)} onIonChange={(e) => {

                                                    if (e.detail.checked) {
                                                        props.setState('dia_Anterior14_BooleanPost14', true)
                                                    } else {
                                                        props.setState('dia_Anterior14_BooleanPost14', false)
                                                    }
                                                }}></IonCheckbox>
                                                <IonLabel >{dia_Anterior14.toLocaleDateString("pt-br", timeformat)}</IonLabel>
                                                                     
                                </IonItem> : null}

                                {(props.state.dia_Anterior14_BooleanPost14 === true) ? 

                                <IonItem lines="none">
                                    <Controller render={({ onChange }) => (
                                    <IonSelect interfaceOptions={options} ok-text="Ok" cancel-text="Cancelar" placeholder="Clique para selecionar os horários..." multiple={true}
                                         onIonChange={(e) => {
                                            onChange(e.detail.value);
                                            if (e.detail.value != undefined)
                                                props.setState('dia_Anterior14_LightQPost14', e.detail.value)
                                        }}>
                                        <IonSelectOption value={1}>6:00 - 6:30</IonSelectOption>
                                        <IonSelectOption value={2}>6:30 - 7:00</IonSelectOption>
                                        <IonSelectOption value={3}>7:30 - 8:00</IonSelectOption>
                                        <IonSelectOption value={4}>8:00 - 8:30</IonSelectOption>
                                        <IonSelectOption value={5}>8:30 - 9:00</IonSelectOption>
                                        <IonSelectOption value={6}>9:00 - 9:30</IonSelectOption>
                                        <IonSelectOption value={7}>9:30 - 10:00</IonSelectOption>
                                        <IonSelectOption value={8}>10:00 - 10:30</IonSelectOption>
                                        <IonSelectOption value={9}>10:30 - 11:00</IonSelectOption>
                                        <IonSelectOption value={10}>11:00 - 11:30</IonSelectOption>
                                        <IonSelectOption value={11}>11:30 - 12:00</IonSelectOption>
                                        <IonSelectOption value={12}>12:00 - 12:30</IonSelectOption>
                                        <IonSelectOption value={13}>12:30 - 13:00</IonSelectOption>
                                        <IonSelectOption value={14}>13:00 - 13:30</IonSelectOption>
                                        <IonSelectOption value={15}>13:30 - 14:00</IonSelectOption>
                                        <IonSelectOption value={16}>14:00 - 14:30</IonSelectOption>
                                        <IonSelectOption value={17}>14:30 - 15:00</IonSelectOption>
                                        <IonSelectOption value={18}>15:00 - 15:30</IonSelectOption>
                                        <IonSelectOption value={19}>15:30 - 16:00</IonSelectOption>
                                        <IonSelectOption value={20}>16:00 - 16:30</IonSelectOption>
                                        <IonSelectOption value={21}>16:30 - 17:00</IonSelectOption>
                                        <IonSelectOption value={22}>17:00 - 17:30</IonSelectOption>
                                        <IonSelectOption value={23}>17:30 - 18:00</IonSelectOption>
                                    </IonSelect> )} control={control} name={"dia_Anterior14_LightQPost14"} rules={{ required: true }} />
                                </IonItem>
                                
                                :null}

                                    

                            
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