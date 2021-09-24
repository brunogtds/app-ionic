import React from "react";
import { StepComponentProps } from "react-step-builder";

import { IonItem, IonLabel, IonInput, IonRadioGroup, IonRadio, IonSelect, IonSelectOption, IonButton, IonCheckbox, IonList, IonDatetime } from "@ionic/react";
import { IonContent, IonText } from '@ionic/react';

import '../../Forms.css';

import { useForm, Controller } from "react-hook-form";
import { useState } from 'react';

import { IonProgressBar } from '@ionic/react';

const HabitosFinal1 = (props: StepComponentProps) => {

    const options = {
        cssClass: 'my-custom-interface'
    };

    const { control, watch, handleSubmit, errors, formState } = useForm({ mode: "onChange" });


    const [diasTrabalho, setDiasTrabalho] = useState();
    const [horasTrabalhoRegulares, setHorasTrabalhoRegulares] = useState();


    return (
        <IonContent fullscreen color="background">


            <div className="ion-text-wrap">
                <IonLabel mode="md">


                    <form className="ion-padding">

                        <div className="ion-text-wrap texto-default">
                            <div className="texto-title">Hábitos</div>
                            <div className="texto-default">Para continuar marcando suas atividades, preencha para sabermos mais sobre você e seus hábitos!</div>

                            <IonLabel className="questions">Em quantos dias você trabalhou ou estudou nas últimas duas semanas? </IonLabel>


                            <IonItem lines="none">

                                <Controller render={({ onChange }) => (
                                    <IonSelect interfaceOptions={options} className={"select-interface-option"} okText="ok" cancelText="Cancelar" placeholder="Por favor, selecione..." value={diasTrabalho} onIonChange={(e) => {
                                        setDiasTrabalho(e.detail.value);
                                        onChange(e.detail.value);
                                        if (e.detail.value != undefined)
                                            props.setState('workQFinal', e.detail.value)
                                    }}>
                                        <IonSelectOption value="0">0</IonSelectOption>
                                        <IonSelectOption value="1">1</IonSelectOption>
                                        <IonSelectOption value="2">2</IonSelectOption>
                                        <IonSelectOption value="3">3</IonSelectOption>
                                        <IonSelectOption value="4">4</IonSelectOption>
                                        <IonSelectOption value="5">5</IonSelectOption>
                                        <IonSelectOption value="6">6</IonSelectOption>
                                        <IonSelectOption value="7">7</IonSelectOption>
                                        <IonSelectOption value="8">8</IonSelectOption>
                                        <IonSelectOption value="9">9</IonSelectOption>
                                        <IonSelectOption value="10">10</IonSelectOption>
                                        <IonSelectOption value="11">11</IonSelectOption>
                                        <IonSelectOption value="12">12</IonSelectOption>
                                        <IonSelectOption value="13">13</IonSelectOption>
                                        <IonSelectOption value="14">14</IonSelectOption>
                                    </IonSelect>)} control={control} name={"workQFinal"} rules={{ required: true }} />
                                {errors.workQFinal && <IonText color="danger">Campo obrigatório.</IonText>}
                            </IonItem>

                            {/*MAIS QUE 0*/}

                            {((diasTrabalho === "1") || (diasTrabalho === "2") || (diasTrabalho === "3") || (diasTrabalho === "4") || (diasTrabalho === "5") || (diasTrabalho === "6") || (diasTrabalho === "7") || (diasTrabalho === "8") || (diasTrabalho === "9") || (diasTrabalho === "10") || (diasTrabalho === "11") || (diasTrabalho === "12") || (diasTrabalho === "13") || (diasTrabalho === "14")) ?

                                <IonItem lines="none">
                                    <IonLabel className="questions">Quantas horas em média você trabalhou/estudou nestes dias? </IonLabel>
                                </IonItem> : null}
                            {((diasTrabalho === "1") || (diasTrabalho === "2") || (diasTrabalho === "3") || (diasTrabalho === "4") || (diasTrabalho === "5") || (diasTrabalho === "6") || (diasTrabalho === "7") || (diasTrabalho === "8") || (diasTrabalho === "9") || (diasTrabalho === "10") || (diasTrabalho === "11") || (diasTrabalho === "12") || (diasTrabalho === "13") || (diasTrabalho === "14")) ?
                                <IonItem lines="none">
                                    <Controller render={({ onChange }) => (
                                        <IonSelect interfaceOptions={options} className={"select-interface-option"} okText="ok" cancelText="Cancelar" placeholder="Por favor, selecione..." onIonChange={(e) => {
                                            console.log(e);
                                            onChange(e.detail.value);
                                            if (e.detail.value != undefined)
                                                props.setState('workDurFinal', e.detail.value)
                                        }}>
                                            <IonSelectOption value="até 1 hora">até 1 hora</IonSelectOption>
                                            <IonSelectOption value="até 2 horas">até 2 horas</IonSelectOption>
                                            <IonSelectOption value="até 4 horas">até 4 horas</IonSelectOption>
                                            <IonSelectOption value="até 8 horas">até 8 horas</IonSelectOption>
                                            <IonSelectOption value="mais de 8 horas">mais de 8 horas</IonSelectOption>
                                        </IonSelect>)} control={control} name={"workDurFinal"} rules={{ required: true }} />
                                    {errors.workDurFinal && <IonText color="danger">Campo obrigatório.</IonText>}
                                </IonItem> : null}

                            {((diasTrabalho === "1") || (diasTrabalho === "2") || (diasTrabalho === "3") || (diasTrabalho === "4") || (diasTrabalho === "5") || (diasTrabalho === "6") || (diasTrabalho === "7") || (diasTrabalho === "8") || (diasTrabalho === "9") || (diasTrabalho === "10") || (diasTrabalho === "11") || (diasTrabalho === "12") || (diasTrabalho === "13") || (diasTrabalho === "14")) ?
                                <IonItem lines="none">
                                    <IonLabel className="questions">O quão regular foram seus horários de trabalho/estudo nas últimas duas semanas: </IonLabel>
                                </IonItem> : null}
                            {((diasTrabalho === "1") || (diasTrabalho === "2") || (diasTrabalho === "3") || (diasTrabalho === "4") || (diasTrabalho === "5") || (diasTrabalho === "6") || (diasTrabalho === "7") || (diasTrabalho === "8") || (diasTrabalho === "9") || (diasTrabalho === "10") || (diasTrabalho === "11") || (diasTrabalho === "12") || (diasTrabalho === "13") || (diasTrabalho === "14")) ?
                                <IonItem lines="none">
                                    <Controller render={({ onChange }) => (
                                        <IonSelect interfaceOptions={options} className={"select-interface-option"} okText="ok" cancelText="Cancelar" placeholder="Por favor, selecione..." value={horasTrabalhoRegulares} onIonChange={(e) => {
                                            setHorasTrabalhoRegulares(e.detail.value);
                                            onChange(e.detail.value);
                                            if (e.detail.value != undefined)
                                                props.setState('workRegFinal', e.detail.value)
                                        }}>
                                            <IonSelectOption value="muitoIrregulares">Muito irregulares</IonSelectOption>
                                            <IonSelectOption value="irregulares">Irregulares</IonSelectOption>
                                            <IonSelectOption value="regulares">Regulares</IonSelectOption>
                                            <IonSelectOption value="muitoRegulares">Muito regulares</IonSelectOption>
                                        </IonSelect>)} control={control} name={"workRegFinal"} rules={{ required: true }} />
                                    {errors.workRegFinal && <IonText color="danger">Campo obrigatório.</IonText>}
                                </IonItem> : null}



                            {/*REGULARES OU MUITO REGULARES: */}

                            {((diasTrabalho === "1") || (diasTrabalho === "2") || (diasTrabalho === "3") || (diasTrabalho === "4") || (diasTrabalho === "5") || (diasTrabalho === "6") || (diasTrabalho === "7") || (diasTrabalho === "8") || (diasTrabalho === "9") || (diasTrabalho === "10") || (diasTrabalho === "11") || (diasTrabalho === "12") || (diasTrabalho === "13") || (diasTrabalho === "14")) && ((horasTrabalhoRegulares === "regulares") || (horasTrabalhoRegulares === "muitoRegulares")) ?

                                <IonItem lines="none">
                                    <IonLabel className="questions">Em que horário, em média, você começou a trabalhar/estudar nas últimas duas semanas?</IonLabel>
                                </IonItem> : null}
                            {((diasTrabalho === "1") || (diasTrabalho === "2") || (diasTrabalho === "3") || (diasTrabalho === "4") || (diasTrabalho === "5") || (diasTrabalho === "6") || (diasTrabalho === "7") || (diasTrabalho === "8") || (diasTrabalho === "9") || (diasTrabalho === "10") || (diasTrabalho === "11") || (diasTrabalho === "12") || (diasTrabalho === "13") || (diasTrabalho === "14")) && ((horasTrabalhoRegulares === "regulares") || (horasTrabalhoRegulares === "muitoRegulares")) ?
                                <IonItem lines="none">
                                    <Controller render={({ onChange }) => (
                                        <IonDatetime display-format="HH:mm " picker-format="HH:mm" placeholder="Por favor, selecione..." minuteValues="0,5,10,15,20,25,30,35,40,45,50,55" onIonChange={(e) => {
                                            console.log(e);
                                            onChange(e.detail.value);
                                            if (e.detail.value != undefined)
                                                props.setState('workStartFinal', e.detail.value)
                                        }}></IonDatetime>)} control={control} name={"workStartFinal"} rules={{ required: true }} />
                                    {errors.workStartFinal && <IonText color="danger">Campo obrigatório.</IonText>}
                                </IonItem> : null}


                            <div id="progress-bar-div" >
                                <IonProgressBar className={"progress-bar"} value={0.25} color="orange"></IonProgressBar>
                            </div>

                            <IonButton onClick={props.prev} className="btnAnterior" size="default" shape="round" fill="outline" disabled={true}>Anterior</IonButton>
                            <IonButton disabled={formState.isValid === false} onClick={props.next} size="default" shape="round" className={"btnProximo"} fill="outline">Próximo</IonButton>

                        </div>
                    </form>
                </IonLabel>
            </div>
        </IonContent>
    )

}

export default HabitosFinal1;