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

                workQFinal: String(props.state.workQFinal),
                workDurFinal: String(props.state.workDurFinal),
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

                lightFreqFinal: String(props.state.lightFreqFinal),
                lightPostFinal: String(props.state.lightPostFinal),
                lightRegFinal: String(props.state.lightRegFinal),
                lightWDFDYDFinal: String(props.state.lightWDFDYDFinal),
                lightTimingFinal: String(props.state.lightTimingFinal),
                lightTimingWDFinal: String(props.state.lightTimingWDFinal),
                lightTimingFDFinal: String(props.state.lightTimingFDFinal),
                beck02Final: String(props.state.beck02Final),


                lightExposureFinal: String(props.state.lightExposureFinal),

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
    
                diaAtual_LightQFinal: String(props.state.diaAtual_LightQFinal),
                dia_Anterior1_LightQFinal: String(props.state.dia_Anterior1_LightQFinal),
                dia_Anterior2_LightQFinal: String(props.state.dia_Anterior2_LightQFinal),
                dia_Anterior3_LightQFinal: String(props.state.dia_Anterior3_LightQFinal),
                dia_Anterior4_LightQFinal: String(props.state.dia_Anterior4_LightQFinal),
                dia_Anterior5_LightQFinal: String(props.state.dia_Anterior5_LightQFinal),
                dia_Anterior6_LightQFinal: String(props.state.dia_Anterior6_LightQFinal),
                dia_Anterior7_LightQFinal: String(props.state.dia_Anterior7_LightQFinal),
                dia_Anterior8_LightQFinal: String(props.state.dia_Anterior8_LightQFinal),
                dia_Anterior9_LightQFinal: String(props.state.dia_Anterior9_LightQFinal),
                dia_Anterior10_LightQFinal: String(props.state.dia_Anterior10_LightQFinal),
                dia_Anterior11_LightQFinal: String(props.state.dia_Anterior11_LightQFinal),
                dia_Anterior12_LightQFinal: String(props.state.dia_Anterior12_LightQFinal),
                dia_Anterior13_LightQFinal: String(props.state.dia_Anterior13_LightQFinal),
                dia_Anterior14_LightQFinal: String(props.state.dia_Anterior14_LightQFinal),





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

                        <IonLabel className="questions">Você se expôs à luz natural (em um ambiente aberto) nas duas últimas semanas?</IonLabel>
                        <IonNote>Considere apenas exposição à luz natural em um ambiente aberto, considerando também sacadas, terraços, pátio, jardim, etc.</IonNote>

                        <IonItem lines="none" className={"ion-no-padding"}>
                                    <Controller render={({ onChange }) => (
                                        <IonRadioGroup onIonChange={(e) => {
                                           
                                            onChange(e.detail.value);
                                            if (e.detail.value != undefined) {
                                                props.setState('lightExposureFinal', e.detail.value)
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

                                        </IonRadioGroup>)} control={control} name={"lightExposureFinal"} rules={{ required: true }} />
                            
                                </IonItem>


                            {(props.state.lightExposureFinal === "sim") ?
                                <IonItem lines="none">
                                    <IonLabel className="questions">Quão regulares foram os horários em que se expõe à luz natural?</IonLabel>
                                </IonItem> : null}
                            {(props.state.lightExposureFinal === "sim") ?
                                <IonItem lines="none">
                                    <Controller render={({ onChange }) => (
                                        <IonSelect interfaceOptions={options} className={"select-interface-option"} okText="ok" cancelText="Cancelar" placeholder="Clique para selecionar..." onIonChange={(e) => {
                                            console.log(e);
                                            onChange(e.detail.value);
                                            if (e.detail.value != undefined) {
                                                props.setState('lightRegFinal', e.detail.value)
                                            }
                                        }}>
                                            <IonSelectOption value="muito irregulares">Muito irregulares</IonSelectOption>
                                            <IonSelectOption value="irregulares">Irregulares</IonSelectOption>
                                            <IonSelectOption value="regulares">Regulares</IonSelectOption>
                                            <IonSelectOption value="muito regulares">Muito regulares</IonSelectOption>
                                        </IonSelect>)} control={control} name={"lightRegFinal"} rules={{ required: true }} />
                                    {errors.lightRegFinal && <IonText color="danger">Campo obrigatório.</IonText>}
                                </IonItem> : null}

                                {(props.state.lightExposureFinal === "sim") ?
                                <IonItem lines="none">
                                    <IonLabel className="questions">Marque quais foram os dias, os horários e por quanto tempo você se expôs a luz natural (em um ambiente aberto) nas duas últimas semanas.
                                    Pode ser marcado mais de um horário por dia.
                                    
                                    </IonLabel>

                                </IonItem> : null}

                                {(props.state.lightExposureFinal === "sim") ?
                                <IonItem lines="none">
                                   
                                    <IonNote>Se seus foram os mesmos em todos dias, preencha os horários no primeiro dia e a opção REPETIR HORÁRIOS no final.</IonNote>
                                </IonItem> : null}

                                {(props.state.lightExposureFinal === "sim") ?
                                <IonItem lines="none">
                                   
                                    <IonCheckbox className={"checkbox-options"} color="primary" value={props.getState("diaAtual_BooleanFinal", false)} onIonChange={(e) => {

                                                    if (e.detail.checked) {
                                                        props.setState('diaAtual_BooleanFinal', true)
                                                    } else {
                                                        props.setState('diaAtual_BooleanFinal', false)
                                                    }
                                                }}></IonCheckbox>
                                                <IonLabel >{dia_Atual.toLocaleDateString("pt-br", timeformat)}</IonLabel>
                                                                     
                                </IonItem> : null}

                                {(props.state.diaAtual_BooleanFinal === true) ? 
                                <IonItem lines="none">

                                    <Controller render={({ onChange }) => (
                                    <IonSelect interfaceOptions={options} ok-text="Ok" cancel-text="Cancelar" placeholder="Clique para selecionar os horários..." multiple={true}
                                         onIonChange={(e) => {
                                            onChange(e.detail.value);
                                            if (e.detail.value != undefined)
                                                props.setState('diaAtual_LightQFinal', e.detail.value)
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
                                    </IonSelect> )} control={control} name={"diaAtual_LightQFinal"} rules={{ required: true }} />
                                </IonItem> : null}

                                {(props.state.lightExposureFinal === "sim") ?
                                <IonItem lines="none">
                                   
                                    <IonCheckbox className={"checkbox-options"} color="primary" value={props.getState("dia_Anterior1_BooleanFinal", false)} onIonChange={(e) => {

                                                    if (e.detail.checked) {
                                                        props.setState('dia_Anterior1_BooleanFinal', true)
                                                    } else {
                                                        props.setState('dia_Anterior1_BooleanFinal', false)
                                                    }
                                                }}></IonCheckbox>
                                                <IonLabel >{dia_Anterior1.toLocaleDateString("pt-br", timeformat)}</IonLabel>
                                                                     
                                </IonItem> : null}
                             
                                {(props.state.dia_Anterior1_BooleanFinal === true) ? 

                                <IonItem lines="none">

                                    <Controller render={({ onChange }) => (
                                    <IonSelect interfaceOptions={options} ok-text="Ok" cancel-text="Cancelar" placeholder="Clique para selecionar os horários..." multiple={true}
                                         onIonChange={(e) => {
                                            onChange(e.detail.value);
                                            if (e.detail.value != undefined)
                                                props.setState('dia_Anterior1_LightQFinal', e.detail.value)
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
                                    </IonSelect> )} control={control} name={"dia_Anterior1_LightQFinal"} rules={{ required: true }} />
                                </IonItem> :null}

                                {(props.state.lightExposureFinal === "sim") ?
                                <IonItem lines="none">
                                   
                                    <IonCheckbox  className={"checkbox-options"} color="primary" value={props.getState("dia_Anterior2_BooleanFinal", false)} onIonChange={(e) => {

                                                    if (e.detail.checked) {
                                                        props.setState('dia_Anterior2_BooleanFinal', true)
                                                    } else {
                                                        props.setState('dia_Anterior2_BooleanFinal', false)
                                                    }
                                                }}></IonCheckbox>
                                                <IonLabel >{dia_Anterior2.toLocaleDateString("pt-br", timeformat)}</IonLabel>
                                                                     
                                </IonItem> : null}

                                {(props.state.dia_Anterior2_BooleanFinal === true) ? 

                                <IonItem lines="none">

                                     <Controller render={({ onChange }) => (
                                    <IonSelect interfaceOptions={options} ok-text="Ok" cancel-text="Cancelar" placeholder="Clique para selecionar os horários..." multiple={true}
                                         onIonChange={(e) => {
                                            onChange(e.detail.value);
                                            if (e.detail.value != undefined)
                                                props.setState('dia_Anterior2_LightQFinal', e.detail.value)
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
                                    </IonSelect> )} control={control} name={"dia_Anterior2_LightQFinal"} rules={{ required: true }} />

                                </IonItem>

                                :null}

                                {(props.state.lightExposureFinal === "sim") ?
                                <IonItem lines="none">
                                   
                                    <IonCheckbox className={"checkbox-options"} color="primary" value={props.getState("dia_Anterior3_BooleanFinal", false)} onIonChange={(e) => {

                                                    if (e.detail.checked) {
                                                        props.setState('dia_Anterior3_BooleanFinal', true)
                                                    } else {
                                                        props.setState('dia_Anterior3_BooleanFinal', false)
                                                    }
                                                }}></IonCheckbox>
                                                <IonLabel >{dia_Anterior3.toLocaleDateString("pt-br", timeformat)}</IonLabel>
                                                                     
                                </IonItem> : null}

                                {(props.state.dia_Anterior3_BooleanFinal === true) ? 
                                
                                <IonItem lines="none">

                                     <Controller render={({ onChange }) => (
                                    <IonSelect interfaceOptions={options} ok-text="Ok" cancel-text="Cancelar" placeholder="Clique para selecionar os horários..." multiple={true}
                                         onIonChange={(e) => {
                                            onChange(e.detail.value);
                                            if (e.detail.value != undefined)
                                                props.setState('dia_Anterior3_LightQFinal', e.detail.value)
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
                                    </IonSelect> )} control={control} name={"dia_Anterior3_LightQFinal"} rules={{ required: true }} />

                                </IonItem>
                                
                                :null}

                                {(props.state.lightExposureFinal === "sim") ?
                                <IonItem lines="none">
                                   
                                    <IonCheckbox className={"checkbox-options"} color="primary" value={props.getState("dia_Anterior4_BooleanFinal", false)} onIonChange={(e) => {

                                                    if (e.detail.checked) {
                                                        props.setState('dia_Anterior4_BooleanFinal', true)
                                                    } else {
                                                        props.setState('dia_Anterior4_BooleanFinal', false)
                                                    }
                                                }}></IonCheckbox>
                                                <IonLabel >{dia_Anterior4.toLocaleDateString("pt-br", timeformat)}</IonLabel>
                                                                     
                                </IonItem> : null}

                                {(props.state.dia_Anterior4_BooleanFinal === true) ? 

                                <IonItem lines="none">

                                    <Controller render={({ onChange }) => (
                                    <IonSelect interfaceOptions={options} ok-text="Ok" cancel-text="Cancelar" placeholder="Clique para selecionar os horários..." multiple={true}
                                         onIonChange={(e) => {
                                            onChange(e.detail.value);
                                            if (e.detail.value != undefined)
                                                props.setState('dia_Anterior4_LightQFinal', e.detail.value)
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
                                    </IonSelect> )} control={control} name={"dia_Anterior4_LightQFinal"} rules={{ required: true }} />

                                </IonItem>

                                :null}

                                {(props.state.lightExposureFinal === "sim") ?
                                <IonItem lines="none">
                                   
                                    <IonCheckbox className={"checkbox-options"} color="primary" value={props.getState("dia_Anterior5_BooleanFinal", false)} onIonChange={(e) => {

                                                    if (e.detail.checked) {
                                                        props.setState('dia_Anterior5_BooleanFinal', true)
                                                    } else {
                                                        props.setState('dia_Anterior5_BooleanFinal', false)
                                                    }
                                                }}></IonCheckbox>
                                                <IonLabel >{dia_Anterior5.toLocaleDateString("pt-br", timeformat)}</IonLabel>
                                                                     
                                </IonItem> : null}

                                {(props.state.dia_Anterior5_BooleanFinal === true) ? 

                                <IonItem lines="none">

                                    <Controller render={({ onChange }) => (
                                    <IonSelect interfaceOptions={options} ok-text="Ok" cancel-text="Cancelar" placeholder="Clique para selecionar os horários..." multiple={true}
                                         onIonChange={(e) => {
                                            onChange(e.detail.value);
                                            if (e.detail.value != undefined)
                                                props.setState('dia_Anterior5_LightQFinal', e.detail.value)
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
                                    </IonSelect> )} control={control} name={"dia_Anterior5_LightQFinal"} rules={{ required: true }} />

                                </IonItem>
                                
                                :null}

                                {(props.state.lightExposureFinal === "sim") ?
                                <IonItem lines="none">
                                   
                                    <IonCheckbox className={"checkbox-options"} color="primary" value={props.getState("dia_Anterior6_BooleanFinal", false)} onIonChange={(e) => {

                                                    if (e.detail.checked) {
                                                        props.setState('dia_Anterior6_BooleanFinal', true)
                                                    } else {
                                                        props.setState('dia_Anterior6_BooleanFinal', false)
                                                    }
                                                }}></IonCheckbox>
                                                <IonLabel >{dia_Anterior6.toLocaleDateString("pt-br", timeformat)}</IonLabel>
                                                                     
                                </IonItem> : null}

                                {(props.state.dia_Anterior6_BooleanFinal === true) ? 

                                <IonItem lines="none">

                                    <Controller render={({ onChange }) => (
                                    <IonSelect interfaceOptions={options} ok-text="Ok" cancel-text="Cancelar" placeholder="Clique para selecionar os horários..." multiple={true}
                                         onIonChange={(e) => {
                                            onChange(e.detail.value);
                                            if (e.detail.value != undefined)
                                                props.setState('dia_Anterior6_LightQFinal', e.detail.value)
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
                                    </IonSelect> )} control={control} name={"dia_Anterior6_LightQFinal"} rules={{ required: true }} />

                                </IonItem>
                                
                                :null}
                                
                                {(props.state.lightExposureFinal === "sim") ?
                                <IonItem lines="none">
                                   
                                    <IonCheckbox className={"checkbox-options"} color="primary" value={props.getState("dia_Anterior7_BooleanFinal", false)} onIonChange={(e) => {

                                                    if (e.detail.checked) {
                                                        props.setState('dia_Anterior7_BooleanFinal', true)
                                                    } else {
                                                        props.setState('dia_Anterior7_BooleanFinal', false)
                                                    }
                                                }}></IonCheckbox>
                                                <IonLabel >{dia_Anterior7.toLocaleDateString("pt-br", timeformat)}</IonLabel>
                                                                     
                                </IonItem> : null}

                                {(props.state.dia_Anterior7_BooleanFinal === true) ? 

                                <IonItem lines="none">

                                     <Controller render={({ onChange }) => (
                                    <IonSelect interfaceOptions={options} ok-text="Ok" cancel-text="Cancelar" placeholder="Clique para selecionar os horários..." multiple={true}
                                         onIonChange={(e) => {
                                            onChange(e.detail.value);
                                            if (e.detail.value != undefined)
                                                props.setState('dia_Anterior7_LightQFinal', e.detail.value)
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
                                    </IonSelect> )} control={control} name={"dia_Anterior7_LightQFinal"} rules={{ required: true }} />

                                </IonItem>
                                
                                :null}

                                {(props.state.lightExposureFinal === "sim") ?
                                <IonItem lines="none">
                                   
                                    <IonCheckbox className={"checkbox-options"} color="primary" value={props.getState("dia_Anterior8_BooleanFinal", false)} onIonChange={(e) => {

                                                    if (e.detail.checked) {
                                                        props.setState('dia_Anterior8_BooleanFinal', true)
                                                    } else {
                                                        props.setState('dia_Anterior8_BooleanFinal', false)
                                                    }
                                                }}></IonCheckbox>
                                                <IonLabel >{dia_Anterior8.toLocaleDateString("pt-br", timeformat)}</IonLabel>
                                                                     
                                </IonItem> : null}

                                {(props.state.dia_Anterior8_BooleanFinal === true) ? 

                                <IonItem lines="none">
                                    <Controller render={({ onChange }) => (
                                    <IonSelect interfaceOptions={options} ok-text="Ok" cancel-text="Cancelar" placeholder="Clique para selecionar os horários..." multiple={true}
                                         onIonChange={(e) => {
                                            onChange(e.detail.value);
                                            if (e.detail.value != undefined)
                                                props.setState('dia_Anterior8_LightQFinal', e.detail.value)
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
                                    </IonSelect> )} control={control} name={"dia_Anterior8_LightQFinal"} rules={{ required: true }} />
                                </IonItem>
                                
                                :null}

                                {(props.state.lightExposureFinal === "sim") ?
                                <IonItem lines="none">
                                   
                                    <IonCheckbox className={"checkbox-options"} color="primary" value={props.getState("dia_Anterior9_BooleanFinal", false)} onIonChange={(e) => {

                                                    if (e.detail.checked) {
                                                        props.setState('dia_Anterior9_BooleanFinal', true)
                                                    } else {
                                                        props.setState('dia_Anterior9_BooleanFinal', false)
                                                    }
                                                }}></IonCheckbox>
                                                <IonLabel >{dia_Anterior9.toLocaleDateString("pt-br", timeformat)}</IonLabel>
                                                                     
                                </IonItem> : null}

                                {(props.state.dia_Anterior9_BooleanFinal === true) ? 

                                <IonItem lines="none">
                                    <Controller render={({ onChange }) => (
                                    <IonSelect interfaceOptions={options} ok-text="Ok" cancel-text="Cancelar" placeholder="Clique para selecionar os horários..." multiple={true}
                                         onIonChange={(e) => {
                                            onChange(e.detail.value);
                                            if (e.detail.value != undefined)
                                                props.setState('dia_Anterior9_LightQFinal', e.detail.value)
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
                                    </IonSelect> )} control={control} name={"dia_Anterior9_LightQFinal"} rules={{ required: true }} />
                                </IonItem>
                                
                                :null}

                                {(props.state.lightExposureFinal === "sim") ?
                                <IonItem lines="none">
                                   
                                    <IonCheckbox className={"checkbox-options"} color="primary" value={props.getState("dia_Anterior10_BooleanFinal", false)} onIonChange={(e) => {

                                                    if (e.detail.checked) {
                                                        props.setState('dia_Anterior10_BooleanFinal', true)
                                                    } else {
                                                        props.setState('dia_Anterior10_BooleanFinal', false)
                                                    }
                                                }}></IonCheckbox>
                                                <IonLabel >{dia_Anterior10.toLocaleDateString("pt-br", timeformat)}</IonLabel>
                                                                     
                                </IonItem> : null}

                                {(props.state.dia_Anterior10_BooleanFinal === true) ? 

                                <IonItem lines="none">
                                    <Controller render={({ onChange }) => (
                                    <IonSelect interfaceOptions={options} ok-text="Ok" cancel-text="Cancelar" placeholder="Clique para selecionar os horários..." multiple={true}
                                         onIonChange={(e) => {
                                            onChange(e.detail.value);
                                            if (e.detail.value != undefined)
                                                props.setState('dia_Anterior10_LightQFinal', e.detail.value)
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
                                    </IonSelect> )} control={control} name={"dia_Anterior10_LightQFinal"} rules={{ required: true }} />

                                </IonItem>
                                
                                :null}

                                {(props.state.lightExposureFinal === "sim") ?
                                <IonItem lines="none">
                                   
                                    <IonCheckbox className={"checkbox-options"} color="primary" value={props.getState("dia_Anterior11_BooleanFinal", false)} onIonChange={(e) => {

                                                    if (e.detail.checked) {
                                                        props.setState('dia_Anterior11_BooleanFinal', true)
                                                    } else {
                                                        props.setState('dia_Anterior11_BooleanFinal', false)
                                                    }
                                                }}></IonCheckbox>
                                                <IonLabel >{dia_Anterior11.toLocaleDateString("pt-br", timeformat)}</IonLabel>
                                                                     
                                </IonItem> : null}

                                {(props.state.dia_Anterior11_BooleanFinal === true) ? 

                                <IonItem lines="none">
                                    <Controller render={({ onChange }) => (
                                    <IonSelect interfaceOptions={options} ok-text="Ok" cancel-text="Cancelar" placeholder="Clique para selecionar os horários..." multiple={true}
                                         onIonChange={(e) => {
                                            onChange(e.detail.value);
                                            if (e.detail.value != undefined)
                                                props.setState('dia_Anterior11_LightQFinal', e.detail.value)
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
                                    </IonSelect> )} control={control} name={"dia_Anterior11_LightQFinal"} rules={{ required: true }} />
                            
                                </IonItem>
                                
                                :null}

                                {(props.state.lightExposureFinal === "sim") ?
                                <IonItem lines="none">
                                   
                                    <IonCheckbox className={"checkbox-options"} color="primary" value={props.getState("dia_Anterior12_BooleanFinal", false)} onIonChange={(e) => {

                                                    if (e.detail.checked) {
                                                        props.setState('dia_Anterior12_BooleanFinal', true)
                                                    } else {
                                                        props.setState('dia_Anterior12_BooleanFinal', false)
                                                    }
                                                }}></IonCheckbox>
                                                <IonLabel >{dia_Anterior12.toLocaleDateString("pt-br", timeformat)}</IonLabel>
                                                                     
                                </IonItem> : null}

                                {(props.state.dia_Anterior12_BooleanFinal) === true ? 

                                <IonItem lines="none">

                                    <Controller render={({ onChange }) => (
                                    <IonSelect interfaceOptions={options} ok-text="Ok" cancel-text="Cancelar" placeholder="Clique para selecionar os horários..." multiple={true}
                                         onIonChange={(e) => {
                                            onChange(e.detail.value);
                                            if (e.detail.value != undefined)
                                                props.setState('dia_Anterior12_LightQFinal', e.detail.value)
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
                                    </IonSelect> )} control={control} name={"dia_Anterior12_LightQFinal"} rules={{ required: true }} />

                                </IonItem>
                                
                                :null}

                                {(props.state.lightExposureFinal === "sim") ?
                                <IonItem lines="none">
                                   
                                    <IonCheckbox className={"checkbox-options"} color="primary" value={props.getState("dia_Anterior13_BooleanFinal", false)} onIonChange={(e) => {

                                                    if (e.detail.checked) {
                                                        props.setState('dia_Anterior13_BooleanFinal', true)
                                                    } else {
                                                        props.setState('dia_Anterior13_BooleanFinal', false)
                                                    }
                                                }}></IonCheckbox>
                                                <IonLabel >{dia_Anterior13.toLocaleDateString("pt-br", timeformat)}</IonLabel>
                                                                     
                                </IonItem> : null}

                                {(props.state.dia_Anterior13_BooleanFinal === true) ? 

                                <IonItem lines="none">

                                    <Controller render={({ onChange }) => (
                                    <IonSelect interfaceOptions={options} ok-text="Ok" cancel-text="Cancelar" placeholder="Clique para selecionar os horários..." multiple={true}
                                         onIonChange={(e) => {
                                            onChange(e.detail.value);
                                            if (e.detail.value != undefined)
                                                props.setState('dia_Anterior13_LightQFinal', e.detail.value)
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
                                    </IonSelect> )} control={control} name={"dia_Anterior13_LightQFinal"} rules={{ required: true }} />
                                </IonItem>
                                
                                :null}

                                
                                {(props.state.lightExposureFinal === "sim") ?
                                <IonItem lines="none">
                                   
                                    <IonCheckbox className={"checkbox-options"} color="primary" value={props.getState("dia_Anterior14_BooleanFinal", false)} onIonChange={(e) => {

                                                    if (e.detail.checked) {
                                                        props.setState('dia_Anterior14_BooleanFinal', true)
                                                    } else {
                                                        props.setState('dia_Anterior14_BooleanFinal', false)
                                                    }
                                                }}></IonCheckbox>
                                                <IonLabel >{dia_Anterior14.toLocaleDateString("pt-br", timeformat)}</IonLabel>
                                                                     
                                </IonItem> : null}

                                {(props.state.dia_Anterior14_BooleanFinal === true) ? 

                                <IonItem lines="none">
                                    <Controller render={({ onChange }) => (
                                    <IonSelect interfaceOptions={options} ok-text="Ok" cancel-text="Cancelar" placeholder="Clique para selecionar os horários..." multiple={true}
                                         onIonChange={(e) => {
                                            onChange(e.detail.value);
                                            if (e.detail.value != undefined)
                                                props.setState('dia_Anterior14_LightQFinal', e.detail.value)
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
                                    </IonSelect> )} control={control} name={"dia_Anterior14_LightQFinal"} rules={{ required: true }} />
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

export default HabitosFinal4;