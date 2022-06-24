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

                workQ: String(props.state.workQ),
                workDur: String(props.state.workDur),
                
              
                sleepReg: String(props.state.sleepReg),
                sleepQual: String(props.state.sleepQual),
                feedReg: String(props.state.feedReg),
                feedStartWD: String(props.state.feedStartWD),
                feedEndWD: String(props.state.feedEndWD),
                feedfdyn: String(props.state.feedfdyn),
                feedStart: String(props.state.feedStart),
                feedEnd: String(props.state.feedEnd),
                snacks: String(props.state.snacks),
                hobbiesFreq: String(props.state.hobbiesFreq),
                exercise: String(props.state.exercise),
                exerciseFreq: String(props.state.exerciseFreq),
                exerciseReg: String(props.state.exerciseReg),
                exerciseDur: String(props.state.exerciseDur),
                exerciseTiming: String(props.state.exerciseTiming),
                beck02: String(props.state.beck02),
               
                lightReg: String(props.state.lightReg),
                lightExposure: String(props.state.lightExposure),

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
    
                diaAtual_LightQ: String(props.state.diaAtual_LightQ),
                dia_Anterior1_LightQ: String(props.state.dia_Anterior1_LightQ),
                dia_Anterior2_LightQ: String(props.state.dia_Anterior2_LightQ),
                dia_Anterior3_LightQ: String(props.state.dia_Anterior3_LightQ),
                dia_Anterior4_LightQ: String(props.state.dia_Anterior4_LightQ),
                dia_Anterior5_LightQ: String(props.state.dia_Anterior5_LightQ),
                dia_Anterior6_LightQ: String(props.state.dia_Anterior6_LightQ),
                dia_Anterior7_LightQ: String(props.state.dia_Anterior7_LightQ),
                dia_Anterior8_LightQ: String(props.state.dia_Anterior8_LightQ),
                dia_Anterior9_LightQ: String(props.state.dia_Anterior9_LightQ),
                dia_Anterior10_LightQ: String(props.state.dia_Anterior10_LightQ),
                dia_Anterior11_LightQ: String(props.state.dia_Anterior11_LightQ),
                dia_Anterior12_LightQ: String(props.state.dia_Anterior12_LightQ),
                dia_Anterior13_LightQ: String(props.state.dia_Anterior13_LightQ),
                dia_Anterior14_LightQ: String(props.state.dia_Anterior14_LightQ),

               
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

                        <IonLabel className="questions">Você se expôs à luz natural (em um ambiente aberto) nas duas últimas semanas?</IonLabel>
                        <IonNote>Considere apenas exposição à luz natural em um ambiente aberto, considerando também sacadas, terraços, pátio, jardim, etc.</IonNote>

                        <IonItem lines="none" className={"ion-no-padding"}>
                                    <Controller render={({ onChange }) => (
                                        <IonRadioGroup onIonChange={(e) => {
                                           
                                            onChange(e.detail.value);
                                            if (e.detail.value != undefined) {
                                                props.setState('lightExposure', e.detail.value)
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

                                        </IonRadioGroup>)} control={control} name={"lightExposure"} rules={{ required: true }} />
                            
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
                                                props.setState('lightReg', e.detail.value)
                                            }
                                        }}>
                                            <IonSelectOption value="muito irregulares">Muito irregulares</IonSelectOption>
                                            <IonSelectOption value="irregulares">Irregulares</IonSelectOption>
                                            <IonSelectOption value="regulares">Regulares</IonSelectOption>
                                            <IonSelectOption value="muito regulares">Muito regulares</IonSelectOption>
                                        </IonSelect>)} control={control} name={"lightReg"} rules={{ required: true }} />
                                    {errors.lightReg && <IonText color="danger">Campo obrigatório.</IonText>}
                                </IonItem> : null}

                                {(props.state.lightExposure === "sim") ?
                                <IonItem lines="none">
                                    <IonLabel className="questions">Marque quais foram os dias, os horários e por quanto tempo você se expôs a luz natural (em um ambiente aberto) nas duas últimas semanas.
                                    Pode ser marcado mais de um horário por dia.
                                    
                                    </IonLabel>

                                </IonItem> : null}

                                {/*}

                                {(props.state.lightExposure === "sim") ?
                                <IonItem lines="none">
                                   
                                    <IonNote>Se seus foram os mesmos em todos dias, preencha os horários no primeiro dia e a marque a opção REPETIR HORÁRIOS.</IonNote>
                                </IonItem> : null} */
                                    }

                                {(props.state.lightExposure === "sim") ?
                                <IonItem lines="none">
                                   
                                    <IonCheckbox className={"checkbox-options"} color="primary" value={props.getState("diaAtual_Boolean", false)} onIonChange={(e) => {

                                                    if (e.detail.checked) {
                                                        props.setState('diaAtual_Boolean', true)
                                                    } else {
                                                        props.setState('diaAtual_Boolean', false)
                                                    }
                                                }}></IonCheckbox>
                                                <IonLabel >{dia_Atual.toLocaleDateString("pt-br", timeformat)}</IonLabel>
                                                                     
                                </IonItem> : null}

                                {(props.state.diaAtual_Boolean === true) ? 
                                <IonItem lines="none">

                                    <Controller render={({ onChange }) => (
                                    <IonSelect interfaceOptions={options} ok-text="Ok" cancel-text="Cancelar" placeholder="Clique para selecionar os horários..." multiple={true}
                                         onIonChange={(e) => {
                                            onChange(e.detail.value);
                                            if (e.detail.value != undefined)
                                                props.setState('diaAtual_LightQ', e.detail.value)
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
                                    </IonSelect> )} control={control} name={"diaAtual_LightQ"} rules={{ required: true }} />
                                </IonItem> : null}
                                                           


                                {/*}
                                {(props.state.diaAtual_Boolean === true) ? 

                                <IonItem lines="none">
                                    <IonLabel>Repetir horários</IonLabel>
                                    <IonToggle slot="start" color="primary" onIonChange={(e) => {
                                        if (e.detail.checked){
                                            props.setState('dia_Anterior1_LightQ', props.state.dia_Anterior1_LightQ === props.state.diaAtual_LightQ);
                                            props.setState('dia_Anterior2_LightQ', props.state.dia_Anterior2_LightQ === props.state.diaAtual_LightQ);
                                            props.setState('dia_Anterior3_LightQ', props.state.dia_Anterior3_LightQ === props.state.diaAtual_LightQ);
                                        }
                                        
                                    }
                                        
                                    }/>
                                </IonItem>

                                :null} */}

                                {(props.state.lightExposure === "sim") ?
                                <IonItem lines="none">
                                   
                                    <IonCheckbox className={"checkbox-options"} color="primary" value={props.getState("dia_Anterior1_Boolean", false)} onIonChange={(e) => {

                                                    if (e.detail.checked) {
                                                        props.setState('dia_Anterior1_Boolean', true)
                                                    } else {
                                                        props.setState('dia_Anterior1_Boolean', false)
                                                    }
                                                }}></IonCheckbox>
                                                <IonLabel >{dia_Anterior1.toLocaleDateString("pt-br", timeformat)}</IonLabel>
                                                                     
                                </IonItem> : null}
                             
                                {(props.state.dia_Anterior1_Boolean === true) ? 

                                <IonItem lines="none">

                                    <Controller render={({ onChange }) => (
                                    <IonSelect interfaceOptions={options} ok-text="Ok" cancel-text="Cancelar" placeholder="Clique para selecionar os horários..." multiple={true}
                                         onIonChange={(e) => {
                                            onChange(e.detail.value);
                                            if (e.detail.value != undefined)
                                                props.setState('dia_Anterior1_LightQ', e.detail.value)
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
                                    </IonSelect> )} control={control} name={"dia_Anterior1_LightQ"} rules={{ required: true }} />
                                </IonItem> :null}

                                {(props.state.lightExposure === "sim") ?
                                <IonItem lines="none">
                                   
                                    <IonCheckbox  className={"checkbox-options"} color="primary" value={props.getState("dia_Anterior2_Boolean", false)} onIonChange={(e) => {

                                                    if (e.detail.checked) {
                                                        props.setState('dia_Anterior2_Boolean', true)
                                                    } else {
                                                        props.setState('dia_Anterior2_Boolean', false)
                                                    }
                                                }}></IonCheckbox>
                                                <IonLabel >{dia_Anterior2.toLocaleDateString("pt-br", timeformat)}</IonLabel>
                                                                     
                                </IonItem> : null}

                                {(props.state.dia_Anterior2_Boolean === true) ? 

                                <IonItem lines="none">

                                     <Controller render={({ onChange }) => (
                                    <IonSelect interfaceOptions={options} ok-text="Ok" cancel-text="Cancelar" placeholder="Clique para selecionar os horários..." multiple={true}
                                         onIonChange={(e) => {
                                            onChange(e.detail.value);
                                            if (e.detail.value != undefined)
                                                props.setState('dia_Anterior2_LightQ', e.detail.value)
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
                                    </IonSelect> )} control={control} name={"dia_Anterior2_LightQ"} rules={{ required: true }} />

                                </IonItem>

                                :null}

                                {(props.state.lightExposure === "sim")  ?
                                <IonItem lines="none">
                                   
                                    <IonCheckbox className={"checkbox-options"} color="primary" value={props.getState("dia_Anterior3_Boolean", false)} onIonChange={(e) => {

                                                    if (e.detail.checked) {
                                                        props.setState('dia_Anterior3_Boolean', true)
                                                    } else {
                                                        props.setState('dia_Anterior3_Boolean', false)
                                                    }
                                                }}></IonCheckbox>
                                                <IonLabel >{dia_Anterior3.toLocaleDateString("pt-br", timeformat)}</IonLabel>
                                                                     
                                </IonItem> : null}

                                {(props.state.dia_Anterior3_Boolean === true) ? 
                                
                                <IonItem lines="none">

                                     <Controller render={({ onChange }) => (
                                    <IonSelect interfaceOptions={options} ok-text="Ok" cancel-text="Cancelar" placeholder="Clique para selecionar os horários..." multiple={true}
                                         onIonChange={(e) => {
                                            onChange(e.detail.value);
                                            if (e.detail.value != undefined)
                                                props.setState('dia_Anterior3_LightQ', e.detail.value)
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
                                    </IonSelect> )} control={control} name={"dia_Anterior3_LightQ"} rules={{ required: true }} />

                                </IonItem>
                                
                                :null}

                                {(props.state.lightExposure === "sim") ?
                                <IonItem lines="none">
                                   
                                    <IonCheckbox className={"checkbox-options"} color="primary" value={props.getState("dia_Anterior4_Boolean", false)} onIonChange={(e) => {

                                                    if (e.detail.checked) {
                                                        props.setState('dia_Anterior4_Boolean', true)
                                                    } else {
                                                        props.setState('dia_Anterior4_Boolean', false)
                                                    }
                                                }}></IonCheckbox>
                                                <IonLabel >{dia_Anterior4.toLocaleDateString("pt-br", timeformat)}</IonLabel>
                                                                     
                                </IonItem> : null}

                                {(props.state.dia_Anterior4_Boolean === true) ? 

                                <IonItem lines="none">

                                    <Controller render={({ onChange }) => (
                                    <IonSelect interfaceOptions={options} ok-text="Ok" cancel-text="Cancelar" placeholder="Clique para selecionar os horários..." multiple={true}
                                         onIonChange={(e) => {
                                            onChange(e.detail.value);
                                            if (e.detail.value != undefined)
                                                props.setState('dia_Anterior4_LightQ', e.detail.value)
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
                                    </IonSelect> )} control={control} name={"dia_Anterior4_LightQ"} rules={{ required: true }} />

                                </IonItem>

                                :null}

                                {(props.state.lightExposure === "sim") ?
                                <IonItem lines="none">
                                   
                                    <IonCheckbox className={"checkbox-options"} color="primary" value={props.getState("dia_Anterior5_Boolean", false)} onIonChange={(e) => {

                                                    if (e.detail.checked) {
                                                        props.setState('dia_Anterior5_Boolean', true)
                                                    } else {
                                                        props.setState('dia_Anterior5_Boolean', false)
                                                    }
                                                }}></IonCheckbox>
                                                <IonLabel >{dia_Anterior5.toLocaleDateString("pt-br", timeformat)}</IonLabel>
                                                                     
                                </IonItem> : null}

                                {(props.state.dia_Anterior5_Boolean === true) ? 

                                <IonItem lines="none">

                                    <Controller render={({ onChange }) => (
                                    <IonSelect interfaceOptions={options} ok-text="Ok" cancel-text="Cancelar" placeholder="Clique para selecionar os horários..." multiple={true}
                                         onIonChange={(e) => {
                                            onChange(e.detail.value);
                                            if (e.detail.value != undefined)
                                                props.setState('dia_Anterior5_LightQ', e.detail.value)
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
                                    </IonSelect> )} control={control} name={"dia_Anterior5_LightQ"} rules={{ required: true }} />

                                </IonItem>
                                
                                :null}

                                {(props.state.lightExposure === "sim") ?
                                <IonItem lines="none">
                                   
                                    <IonCheckbox className={"checkbox-options"} color="primary" value={props.getState("dia_Anterior6_Boolean", false)} onIonChange={(e) => {

                                                    if (e.detail.checked) {
                                                        props.setState('dia_Anterior6_Boolean', true)
                                                    } else {
                                                        props.setState('dia_Anterior6_Boolean', false)
                                                    }
                                                }}></IonCheckbox>
                                                <IonLabel >{dia_Anterior6.toLocaleDateString("pt-br", timeformat)}</IonLabel>
                                                                     
                                </IonItem> : null}

                                {(props.state.dia_Anterior6_Boolean === true) ? 

                                <IonItem lines="none">

                                    <Controller render={({ onChange }) => (
                                    <IonSelect interfaceOptions={options} ok-text="Ok" cancel-text="Cancelar" placeholder="Clique para selecionar os horários..." multiple={true}
                                         onIonChange={(e) => {
                                            onChange(e.detail.value);
                                            if (e.detail.value != undefined)
                                                props.setState('dia_Anterior6_LightQ', e.detail.value)
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
                                    </IonSelect> )} control={control} name={"dia_Anterior6_LightQ"} rules={{ required: true }} />

                                </IonItem>
                                
                                :null}
                                
                                {(props.state.lightExposure === "sim") ?
                                <IonItem lines="none">
                                   
                                    <IonCheckbox className={"checkbox-options"} color="primary" value={props.getState("dia_Anterior7_Boolean", false)} onIonChange={(e) => {

                                                    if (e.detail.checked) {
                                                        props.setState('dia_Anterior7_Boolean', true)
                                                    } else {
                                                        props.setState('dia_Anterior7_Boolean', false)
                                                    }
                                                }}></IonCheckbox>
                                                <IonLabel >{dia_Anterior7.toLocaleDateString("pt-br", timeformat)}</IonLabel>
                                                                     
                                </IonItem> : null}

                                {(props.state.dia_Anterior7_Boolean === true) ? 

                                <IonItem lines="none">

                                     <Controller render={({ onChange }) => (
                                    <IonSelect interfaceOptions={options} ok-text="Ok" cancel-text="Cancelar" placeholder="Clique para selecionar os horários..." multiple={true}
                                         onIonChange={(e) => {
                                            onChange(e.detail.value);
                                            if (e.detail.value != undefined)
                                                props.setState('dia_Anterior7_LightQ', e.detail.value)
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
                                    </IonSelect> )} control={control} name={"dia_Anterior7_LightQ"} rules={{ required: true }} />

                                </IonItem>
                                
                                :null}

                                {(props.state.lightExposure === "sim") ?
                                <IonItem lines="none">
                                   
                                    <IonCheckbox className={"checkbox-options"} color="primary" value={props.getState("dia_Anterior8_Boolean", false)} onIonChange={(e) => {

                                                    if (e.detail.checked) {
                                                        props.setState('dia_Anterior8_Boolean', true)
                                                    } else {
                                                        props.setState('dia_Anterior8_Boolean', false)
                                                    }
                                                }}></IonCheckbox>
                                                <IonLabel >{dia_Anterior8.toLocaleDateString("pt-br", timeformat)}</IonLabel>
                                                                     
                                </IonItem> : null}

                                {(props.state.dia_Anterior8_Boolean === true) ? 

                                <IonItem lines="none">
                                    <Controller render={({ onChange }) => (
                                    <IonSelect interfaceOptions={options} ok-text="Ok" cancel-text="Cancelar" placeholder="Clique para selecionar os horários..." multiple={true}
                                         onIonChange={(e) => {
                                            onChange(e.detail.value);
                                            if (e.detail.value != undefined)
                                                props.setState('dia_Anterior8_LightQ', e.detail.value)
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
                                    </IonSelect> )} control={control} name={"dia_Anterior8_LightQ"} rules={{ required: true }} />
                                </IonItem>
                                
                                :null}

                                {(props.state.lightExposure === "sim") ?
                                <IonItem lines="none">
                                   
                                    <IonCheckbox className={"checkbox-options"} color="primary" value={props.getState("dia_Anterior9_Boolean", false)} onIonChange={(e) => {

                                                    if (e.detail.checked) {
                                                        props.setState('dia_Anterior9_Boolean', true)
                                                    } else {
                                                        props.setState('dia_Anterior9_Boolean', false)
                                                    }
                                                }}></IonCheckbox>
                                                <IonLabel >{dia_Anterior9.toLocaleDateString("pt-br", timeformat)}</IonLabel>
                                                                     
                                </IonItem> : null}

                                {(props.state.dia_Anterior9_Boolean === true) ? 

                                <IonItem lines="none">
                                    <Controller render={({ onChange }) => (
                                    <IonSelect interfaceOptions={options} ok-text="Ok" cancel-text="Cancelar" placeholder="Clique para selecionar os horários..." multiple={true}
                                         onIonChange={(e) => {
                                            onChange(e.detail.value);
                                            if (e.detail.value != undefined)
                                                props.setState('dia_Anterior9_LightQ', e.detail.value)
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
                                    </IonSelect> )} control={control} name={"dia_Anterior9_LightQ"} rules={{ required: true }} />
                                </IonItem>
                                
                                :null}

                                {(props.state.lightExposure === "sim") ?
                                <IonItem lines="none">
                                   
                                    <IonCheckbox className={"checkbox-options"} color="primary" value={props.getState("dia_Anterior10_Boolean", false)} onIonChange={(e) => {

                                                    if (e.detail.checked) {
                                                        props.setState('dia_Anterior10_Boolean', true)
                                                    } else {
                                                        props.setState('dia_Anterior10_Boolean', false)
                                                    }
                                                }}></IonCheckbox>
                                                <IonLabel >{dia_Anterior10.toLocaleDateString("pt-br", timeformat)}</IonLabel>
                                                                     
                                </IonItem> : null}

                                {(props.state.dia_Anterior10_Boolean === true) ? 

                                <IonItem lines="none">
                                    <Controller render={({ onChange }) => (
                                    <IonSelect interfaceOptions={options} ok-text="Ok" cancel-text="Cancelar" placeholder="Clique para selecionar os horários..." multiple={true}
                                         onIonChange={(e) => {
                                            onChange(e.detail.value);
                                            if (e.detail.value != undefined)
                                                props.setState('dia_Anterior10_LightQ', e.detail.value)
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
                                    </IonSelect> )} control={control} name={"dia_Anterior10_LightQ"} rules={{ required: true }} />

                                </IonItem>
                                
                                :null}

                                {(props.state.lightExposure === "sim") ?
                                <IonItem lines="none">
                                   
                                    <IonCheckbox className={"checkbox-options"} color="primary" value={props.getState("dia_Anterior11_Boolean", false)} onIonChange={(e) => {

                                                    if (e.detail.checked) {
                                                        props.setState('dia_Anterior11_Boolean', true)
                                                    } else {
                                                        props.setState('dia_Anterior11_Boolean', false)
                                                    }
                                                }}></IonCheckbox>
                                                <IonLabel >{dia_Anterior11.toLocaleDateString("pt-br", timeformat)}</IonLabel>
                                                                     
                                </IonItem> : null}

                                {(props.state.dia_Anterior11_Boolean === true) ? 

                                <IonItem lines="none">
                                    <Controller render={({ onChange }) => (
                                    <IonSelect interfaceOptions={options} ok-text="Ok" cancel-text="Cancelar" placeholder="Clique para selecionar os horários..." multiple={true}
                                         onIonChange={(e) => {
                                            onChange(e.detail.value);
                                            if (e.detail.value != undefined)
                                                props.setState('dia_Anterior11_LightQ', e.detail.value)
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
                                    </IonSelect> )} control={control} name={"dia_Anterior11_LightQ"} rules={{ required: true }} />
                            
                                </IonItem>
                                
                                :null}

                                {(props.state.lightExposure === "sim") ?
                                <IonItem lines="none">
                                   
                                    <IonCheckbox className={"checkbox-options"} color="primary" value={props.getState("dia_Anterior12_Boolean", false)} onIonChange={(e) => {

                                                    if (e.detail.checked) {
                                                        props.setState('dia_Anterior12_Boolean', true)
                                                    } else {
                                                        props.setState('dia_Anterior12_Boolean', false)
                                                    }
                                                }}></IonCheckbox>
                                                <IonLabel >{dia_Anterior12.toLocaleDateString("pt-br", timeformat)}</IonLabel>
                                                                     
                                </IonItem> : null}

                                {(props.state.dia_Anterior12_Boolean) === true ? 

                                <IonItem lines="none">

                                    <Controller render={({ onChange }) => (
                                    <IonSelect interfaceOptions={options} ok-text="Ok" cancel-text="Cancelar" placeholder="Clique para selecionar os horários..." multiple={true}
                                         onIonChange={(e) => {
                                            onChange(e.detail.value);
                                            if (e.detail.value != undefined)
                                                props.setState('dia_Anterior12_LightQ', e.detail.value)
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
                                    </IonSelect> )} control={control} name={"dia_Anterior12_LightQ"} rules={{ required: true }} />

                                </IonItem>
                                
                                :null}

                                {(props.state.lightExposure === "sim") ?
                                <IonItem lines="none">
                                   
                                    <IonCheckbox className={"checkbox-options"} color="primary" value={props.getState("dia_Anterior13_Boolean", false)} onIonChange={(e) => {

                                                    if (e.detail.checked) {
                                                        props.setState('dia_Anterior13_Boolean', true)
                                                    } else {
                                                        props.setState('dia_Anterior13_Boolean', false)
                                                    }
                                                }}></IonCheckbox>
                                                <IonLabel >{dia_Anterior13.toLocaleDateString("pt-br", timeformat)}</IonLabel>
                                                                     
                                </IonItem> : null}

                                {(props.state.dia_Anterior13_Boolean === true) ? 

                                <IonItem lines="none">

                                    <Controller render={({ onChange }) => (
                                    <IonSelect interfaceOptions={options} ok-text="Ok" cancel-text="Cancelar" placeholder="Clique para selecionar os horários..." multiple={true}
                                         onIonChange={(e) => {
                                            onChange(e.detail.value);
                                            if (e.detail.value != undefined)
                                                props.setState('dia_Anterior13_LightQ', e.detail.value)
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
                                    </IonSelect> )} control={control} name={"dia_Anterior13_LightQ"} rules={{ required: true }} />
                                </IonItem>
                                
                                :null}

                                
                                {(props.state.lightExposure === "sim") ?
                                <IonItem lines="none">
                                   
                                    <IonCheckbox className={"checkbox-options"} color="primary" value={props.getState("dia_Anterior14_Boolean", false)} onIonChange={(e) => {

                                                    if (e.detail.checked) {
                                                        props.setState('dia_Anterior14_Boolean', true)
                                                    } else {
                                                        props.setState('dia_Anterior14_Boolean', false)
                                                    }
                                                }}></IonCheckbox>
                                                <IonLabel >{dia_Anterior14.toLocaleDateString("pt-br", timeformat)}</IonLabel>
                                                                     
                                </IonItem> : null}

                                {(props.state.dia_Anterior14_Boolean === true) ? 

                                <IonItem lines="none">
                                    <Controller render={({ onChange }) => (
                                    <IonSelect interfaceOptions={options} ok-text="Ok" cancel-text="Cancelar" placeholder="Clique para selecionar os horários..." multiple={true}
                                         onIonChange={(e) => {
                                            onChange(e.detail.value);
                                            if (e.detail.value != undefined)
                                                props.setState('dia_Anterior14_LightQ', e.detail.value)
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
                                    </IonSelect> )} control={control} name={"dia_Anterior14_LightQ"} rules={{ required: true }} />
                                </IonItem>
                                
                                :null}


                                {/*

                                {(props.state.lightExposure === "sim") ?
                               <IonItem >
                                    
                                    
                                    <div className="container">
                                    <IonRange min={6} max={12} step={0.5} ticks={true} snaps dualKnobs={true} color="primary" onIonChange={e => setRangeValue(e.detail.value as any)}>
                                       {/*} <IonIcon size="small" slot="start" icon={sunnyOutline} /> 
                                        
                                    <IonIcon slot="end" icon={sunnyOutline} /> 

                                
                                       
                                    </IonRange>
                                    
                                  
                                  <div className="tickmarks">
                                       <p>6:00</p>
                                      
                                       <p>7:00</p>
                                                                        
                                       <p>8:00</p>
                                      
                                       <p>9:00</p>
                                     
                                       <p>10:00</p>
                                    
                                       <p>11:00</p>
                                   
                                       <p>12:00</p>
                                     
                                     {/*}  <p>12:30</p>
                                     
                                       <p>13:00</p>
                                     
                                       <p>13:30</p>
                                    
                                       <p>14:00</p>
                                      
                                       <p>14:30</p>
                                     
                                       <p>15:00</p>
                                     
                                       <p>15:30</p>
                                     
                                       <p>16:00</p>
                                     
                                       <p>16:30</p>
                                     
                                       <p>17:00</p>
                                      
                                       <p>17:30</p>
                                    
                                <p>18:00</p> 
                                   </div>
                                   </div> 
                                   
                                   </IonItem> : null}

                                    
                                   {(props.state.lightExposure === "sim") ?
                                <IonItem lines="none">
                                   <div className="container">
                                    <IonRange min={12} max={18} step={0.5} ticks={true} snaps dualKnobs={true} color="primary" onIonChange={e => setRangeValue(e.detail.value as any)}>
                                       {/*} <IonIcon size="small" slot="start" icon={sunnyOutline} /> 
                                        
                                    <IonIcon slot="end" icon={sunnyOutline} /> 

                                
                                       
                                    </IonRange>
                                    
                                  
                                  <div className="tickmarks">
                                       <p>12:00</p>
                                     
                                       <p>13:00</p>
                                     
                                      
                                    
                                       <p>14:00</p>
                                      
                                       
                                     
                                       <p>15:00</p>
                                     
                                      
                                     
                                       <p>16:00</p>
                                     
                                     
                                       <p>17:00</p>
                                      
                                       <p>18:00</p>
                                   </div>
                                   </div> 
                                  
                                                          
                                </IonItem> : null} */}

                            
                            
                            {/* 



                            <IonLabel className="questions">Com que frequência você se expôs a luz natural (em um ambiente aberto) nas últimas duas semanas?</IonLabel>



                            <IonItem lines="none">

                                <Controller render={({ onChange }) => (
                                    <IonSelect interfaceOptions={options} className={"select-interface-option"} okText="ok" cancelText="Cancelar" placeholder="Por favor, selecione..." value={frequenciaLuzNatural} onIonChange={(e) => {
                                        setFrequenciaLuzNatural(e.detail.value);
                                        onChange(e.detail.value);
                                        if (e.detail.value != undefined) {
                                            props.setState('lightFreq', e.detail.value)
                                        }
                                    }}>
                                        <IonSelectOption value="nunca">Nunca</IonSelectOption>
                                        <IonSelectOption value="menosMetade">Em menos da metade dos dias</IonSelectOption>
                                        <IonSelectOption value="maisMetade">Em mais da metade dos dias</IonSelectOption>
                                        <IonSelectOption value="todosDias">Todos os dias</IonSelectOption>
                                    </IonSelect>)} control={control} name={"lightFreq"} rules={{ required: true }} />
                                {errors.lightFreq && <IonText color="danger">Campo obrigatório.</IonText>}
                            </IonItem>

                            {/*LUZ -> QUALQUER RESPOSTA QUE NÃO SEJA NUNCA 


                            {((frequenciaLuzNatural === "menosMetade") || (frequenciaLuzNatural === "maisMetade") || (frequenciaLuzNatural === "todosDias")) ?
                                <IonItem lines="none">
                                    <IonLabel className="questions">Nesses dias, a quantas horas de luz natural (em um ambiente aberto) você se expôs em média?</IonLabel>
                                </IonItem> : null}
                            {((frequenciaLuzNatural === "menosMetade") || (frequenciaLuzNatural === "maisMetade") || (frequenciaLuzNatural === "todosDias")) ?
                                <IonItem lines="none">
                                    <Controller render={({ onChange }) => (
                                        <IonSelect interfaceOptions={options} className={"select-interface-option"} okText="ok" cancelText="Cancelar" placeholder="Por favor, selecione..." onIonChange={(e) => {
                                            console.log(e);
                                            onChange(e.detail.value);
                                            if (e.detail.value != undefined) {
                                                props.setState('light', e.detail.value)
                                            }
                                        }}>
                                            <IonSelectOption value="não me exponho a luz natural">Não me exponho a luz natural</IonSelectOption>
                                            <IonSelectOption value="até meia hora">Até meia hora</IonSelectOption>
                                            <IonSelectOption value="até 1 hora">Até 1 hora</IonSelectOption>
                                            <IonSelectOption value="até 2 horas">Até 2 horas</IonSelectOption>
                                            <IonSelectOption value="até 4 horas">Até 4 horas</IonSelectOption>
                                            <IonSelectOption value="mais de 4 horas">Mais de 4 horas</IonSelectOption>
                                        </IonSelect>)} control={control} name={"light"} rules={{ required: true }} />
                                    {errors.light && <IonText color="danger">Campo obrigatório.</IonText>}
                                </IonItem> : null}

                            {((frequenciaLuzNatural === "menosMetade") || (frequenciaLuzNatural === "maisMetade") || (frequenciaLuzNatural === "todosDias")) ?
                                <IonItem lines="none">
                                    <IonLabel className="questions">Quão regulares foram os horários em que se expõe à luz natural?</IonLabel>
                                </IonItem> : null}
                            {((frequenciaLuzNatural === "menosMetade") || (frequenciaLuzNatural === "maisMetade") || (frequenciaLuzNatural === "todosDias")) ?
                                <IonItem lines="none">
                                    <Controller render={({ onChange }) => (
                                        <IonSelect interfaceOptions={options} className={"select-interface-option"} okText="ok" cancelText="Cancelar" placeholder="Por favor, selecione..." onIonChange={(e) => {
                                            console.log(e);
                                            onChange(e.detail.value);
                                            if (e.detail.value != undefined) {
                                                props.setState('lightReg', e.detail.value)
                                            }
                                        }}>
                                            <IonSelectOption value="muito irregulares">Muito irregulares</IonSelectOption>
                                            <IonSelectOption value="irregulares">Irregulares</IonSelectOption>
                                            <IonSelectOption value="regulares">Regulares</IonSelectOption>
                                            <IonSelectOption value="muito regulares">Muito regulares</IonSelectOption>
                                        </IonSelect>)} control={control} name={"lightReg"} rules={{ required: true }} />
                                    {errors.lightReg && <IonText color="danger">Campo obrigatório.</IonText>}
                                </IonItem> : null}


                            {((frequenciaLuzNatural === "menosMetade") || (frequenciaLuzNatural === "maisMetade") || (frequenciaLuzNatural === "todosDias")) ?
                                <IonItem lines="none">
                                    <IonLabel className="questions">Seus horários de se expor à luz foram diferentes em dias de trabalho comparados a dias livres (ou em dias de semana comparados a fins de semana)?</IonLabel>
                                </IonItem> : null}
                            {((frequenciaLuzNatural === "menosMetade") || (frequenciaLuzNatural === "maisMetade") || (frequenciaLuzNatural === "todosDias")) ?
                                <IonItem lines="none" className={"ion-no-padding"}>
                                    <Controller render={({ onChange }) => (
                                        <IonRadioGroup value={horarioLuzNatural} onIonChange={(e) => {
                                            setHorarioLuzNatural(e.detail.value);
                                            onChange(e.detail.value);
                                            if (e.detail.value != undefined) {
                                                props.setState('lightwdfdyd', e.detail.value)
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

                                        </IonRadioGroup>)} control={control} name={"lightwdfdyd"} rules={{ required: true }} />
                                    {errors.lightwdfdyd && <IonText color="danger">Campo obrigatório.</IonText>}
                                </IonItem> : null}

                            {/*HORÁRIOS DE LUZ REGULARES -> SIM 

                            {(((frequenciaLuzNatural === "menosMetade") || (frequenciaLuzNatural === "maisMetade") || (frequenciaLuzNatural === "todosDias")) && (horarioLuzNatural === "sim")) ?
                                <IonItem lines="none">
                                    <IonLabel className="questions">Nas últimas duas semanas, em que horário, em média, você se expôs à luz natural, nos dias trabalho ou de semana?</IonLabel>
                                </IonItem> : null}
                            {(((frequenciaLuzNatural === "menosMetade") || (frequenciaLuzNatural === "maisMetade") || (frequenciaLuzNatural === "todosDias")) && (horarioLuzNatural === "sim")) ?
                                <IonItem lines="none">
                                    <Controller render={({ onChange }) => (
                                        <IonDatetime placeholder="Por favor, selecione..." display-format="HH:mm " picker-format="HH:mm" minuteValues="0,5,10,15,20,25,30,35,40,45,50,55" onIonChange={(e) => {
                                            console.log(e);
                                            onChange(e.detail.value);
                                            if (e.detail.value != undefined) {
                                                props.setState('lightTiming', e.detail.value)
                                            }
                                        }}></IonDatetime>)} control={control} name={"lightTiming"} rules={{ required: true }} />
                                    {errors.lightTiming && <IonText color="danger">Campo obrigatório.</IonText>}
                                </IonItem> : null}

                            {(((frequenciaLuzNatural === "menosMetade") || (frequenciaLuzNatural === "maisMetade") || (frequenciaLuzNatural === "todosDias")) && (horarioLuzNatural === "sim")) ?
                                <IonItem lines="none">
                                    <IonLabel className="questions">Nas últimas duas semanas, em que horário, em média, você se expôs à luz natural, nos dias livres ou fins de semana?</IonLabel>
                                </IonItem> : null}
                            {(((frequenciaLuzNatural === "menosMetade") || (frequenciaLuzNatural === "maisMetade") || (frequenciaLuzNatural === "todosDias")) && (horarioLuzNatural === "sim")) ?
                                <IonItem lines="none">
                                    <Controller render={({ onChange }) => (
                                        <IonDatetime placeholder="Por favor, selecione..." display-format="HH:mm " picker-format="HH:mm" minuteValues="0,5,10,15,20,25,30,35,40,45,50,55" onIonChange={(e) => {
                                            console.log(e);
                                            onChange(e.detail.value);
                                            if (e.detail.value != undefined) {
                                                props.setState('lightTimingWD', e.detail.value)
                                            }
                                        }}></IonDatetime>)} control={control} name={"lightTimingWD"} rules={{ required: true }} />
                                    {errors.lightTimingWD && <IonText color="danger">Campo obrigatório.</IonText>}
                                </IonItem> : null}
                            {/*HORÁRIOS DE LUZ REGULARES -> NÃO */}

                             {/*

                            {(((frequenciaLuzNatural === "menosMetade") || (frequenciaLuzNatural === "maisMetade") || (frequenciaLuzNatural === "todosDias")) && (horarioLuzNatural === "não")) ?
                                <IonItem lines="none">
                                    <IonLabel className="questions">Em que horário, em média, você se expôs à luz natural, nas últimas duas semanas?</IonLabel>
                                </IonItem> : null}
                            {(((frequenciaLuzNatural === "menosMetade") || (frequenciaLuzNatural === "maisMetade") || (frequenciaLuzNatural === "todosDias")) && (horarioLuzNatural === "não")) ?
                                <IonItem lines="none">
                                    <Controller render={({ onChange }) => (
                                        <IonDatetime placeholder="Por favor, selecione..." display-format="HH:mm " picker-format="HH:mm" minuteValues="0,5,10,15,20,25,30,35,40,45,50,55" onIonChange={(e) => {
                                            console.log(e);
                                            onChange(e.detail.value);
                                            if (e.detail.value != undefined) {
                                                props.setState('lightTimingFD', e.detail.value)
                                            }
                                        }}></IonDatetime>)} control={control} name={"lightTimingFD"} rules={{ required: true }} />
                                    {errors.lightTimingFD && <IonText color="danger">Campo obrigatório.</IonText>}
                                </IonItem> : null}


                            <IonLabel className="questions">Marque aquela que melhor descreve a maneira como você se sentiu nas últimas duas semanas.</IonLabel>
                            <IonItem lines="none">

                                <Controller render={({ onChange }) => (
                                    <IonSelect interfaceOptions={options} className={"select-interface-option"} okText="ok" cancelText="Cancelar" placeholder="Por favor, selecione..." id={""} onIonChange={(e) => {
                                        console.log(e);
                                        onChange(e.detail.value);
                                        if (e.detail.value != undefined) {
                                            props.setState('beck02', e.detail.value)
                                        }
                                    }}>
                                        <IonSelectOption value="A1">Não estou especialmente desanimado com o futuro.</IonSelectOption>
                                        <IonSelectOption value="A2">Eu me sinto desanimado quanto ao futuro.</IonSelectOption>
                                        <IonSelectOption value="A3">Acho que nada tenho a esperar.</IonSelectOption>
                                        <IonSelectOption value="A4">Acho o futuro sem esperança e tenho a impressão de que as coisas não podem melhorar.</IonSelectOption>
                                    </IonSelect>)} control={control} name={"beck02"} rules={{ required: true }} />
                                {errors.beck02 && <IonText color="danger">Campo obrigatório.</IonText>}
                            </IonItem> */}

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