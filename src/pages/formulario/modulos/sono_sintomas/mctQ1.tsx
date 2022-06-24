import React from "react";
import { StepComponentProps } from "react-step-builder";


import { IonItem, IonLabel, IonRadioGroup, IonRadio, IonSelect, IonSelectOption, IonButton, IonList, IonDatetime, IonText, IonProgressBar } from "@ionic/react";
import { IonContent, IonCard, IonCardContent } from '@ionic/react';

import '../../Forms.css';

import { useForm, Controller } from "react-hook-form";

import { useState } from 'react';


const MCTQ1 = (props: StepComponentProps) => {

    const options = {
        cssClass: 'my-custom-interface'
    };


    const { control, errors, formState } = useForm({ mode: "onChange" });

    const [nDiasTrabalhoSemana, setNDiasTrabalhoSemana] = useState();

    return (
        <IonContent fullscreen color="background">

            <div>
                <IonLabel mode="md">

                    <form className={"ion-padding texto-default"}>

                        <div className="texto-title">Sono</div>
                        <div className="texto-default">Para receber dicas personalizadas, preencha para sabermos mais sobre você, seu sono e seus hábitos!</div>


                        <IonLabel className="questions">Fiz plantão noturno.</IonLabel>

                        <IonItem lines="none" className={"ion-no-padding"}>

                            <Controller render={({ onChange }) => (
                                <IonRadioGroup onIonChange={(e) => {
                                    console.log(e);
                                    onChange(e.detail.value);
                                    if (e.detail.value != undefined)
                                        props.setState('nightShift', e.detail.value)
                                }}>

                                    <IonItem lines="none" className={"ion-no-padding"}>
                                        <IonLabel>Sim</IonLabel>
                                        <IonRadio slot="start" className={"radio-options"} color="primary" value="sim"></IonRadio>
                                    </IonItem>

                                    <IonItem lines="none" className={"ion-no-padding"}>
                                        <IonLabel>Não</IonLabel>
                                        <IonRadio slot="start" className={"radio-options"} color="primary" value="não"></IonRadio>
                                    </IonItem>

                                </IonRadioGroup>)}
                                control={control}
                                name={"nightShift"}
                                rules={{ required: true }}
                            />
                            
                        </IonItem>

                        <IonLabel className="questions">Trabalhei/estudei _ dias por semana.</IonLabel>
                        <IonItem lines="none">

                            <Controller render={({ onChange }) => (
                                <IonSelect interfaceOptions={options} className={"select-interface-option"} okText="ok" cancelText="Cancelar" placeholder="Por favor, selecione..." value={nDiasTrabalhoSemana} onIonChange={(e) => {
                                    setNDiasTrabalhoSemana(e.detail.value);
                                    onChange(e.detail.value);
                                    if (e.detail.value != undefined)
                                        props.setState('workDaysN', e.detail.value)
                                }}>
                                    <IonSelectOption value="0">0</IonSelectOption>
                                    <IonSelectOption value="1">1</IonSelectOption>
                                    <IonSelectOption value="2">2</IonSelectOption>
                                    <IonSelectOption value="3">3</IonSelectOption>
                                    <IonSelectOption value="4">4</IonSelectOption>
                                    <IonSelectOption value="5">5</IonSelectOption>
                                    <IonSelectOption value="6">6</IonSelectOption>
                                    <IonSelectOption value="7">7</IonSelectOption>
                                </IonSelect>


                            )}

                                control={control}
                                name="workDaysN"
                                rules={{ required: true }}

                            />
                          
                        </IonItem>


                        {/*DIAS DE TRABALHO ->0 */}



                        {nDiasTrabalhoSemana === "0" ?
                            <IonItem lines="none">
                                <IonLabel className="questions">Normalmente dormi às: </IonLabel>
                            </IonItem> : null}
                        {nDiasTrabalhoSemana === "0" ?
                            <IonItem lines="none">
                                <Controller render={({ onChange }) => (
                                    <IonDatetime placeholder="Por favor, selecione..." display-format="HH:mm " picker-format="HH:mm" minuteValues="0,5,10,15,20,25,30,35,40,45,50,55" onIonChange={(e) => {
                                        console.log(e);
                                        onChange(e.detail.value);
                                        if (e.detail.value != undefined)
                                            props.setState('sleepNoWork', e.detail.value)
                                    }}></IonDatetime>)} control={control} name={"sleepNoWork"} rules={{ required: true }} />
                            
                            </IonItem> : null}

                        {nDiasTrabalhoSemana === "0" ?
                            <IonItem lines="none">
                                <IonLabel className="questions">Normalmente acordei às: </IonLabel>
                            </IonItem> : null}
                        {nDiasTrabalhoSemana === "0" ?
                            <IonItem lines="none">
                                <Controller render={({ onChange }) => (
                                    <IonDatetime placeholder="Por favor, selecione..." display-format="HH:mm " picker-format="HH:mm" minuteValues="0,5,10,15,20,25,30,35,40,45,50,55" onIonChange={(e) => {
                                        console.log(e);
                                        onChange(e.detail.value);
                                        if (e.detail.value != undefined)
                                            props.setState('wakeUpNoWork', e.detail.value)
                                    }}></IonDatetime>)} control={control} name={"wakeUpNoWork"} rules={{ required: true }} />
                            
                            </IonItem> : null}

                        {nDiasTrabalhoSemana === "0" ?
                            <IonItem lines="none"><IonLabel className="questions">Usei o despertador:</IonLabel>
                            </IonItem> : null}
                        {nDiasTrabalhoSemana === "0" ?
                            <IonItem lines="none">
                                <Controller render={({ onChange }) => (
                                    <IonRadioGroup onIonChange={(e) => {
                                        console.log(e);
                                        onChange(e.detail.value);
                                        if (e.detail.value != undefined)
                                            props.setState('alarmNoWork', e.detail.value)
                                    }}>

                                        <IonItem lines="none" className={"ion-no-padding"}>
                                            <IonLabel>Sim</IonLabel>
                                            <IonRadio slot="start" className={"radio-options"} color="primary" value="sim"></IonRadio>
                                        </IonItem>

                                        <IonItem lines="none" className={"ion-no-padding"}>
                                            <IonLabel>Não</IonLabel>
                                            <IonRadio slot="start" className={"radio-options"} color="primary" value="não"></IonRadio>
                                        </IonItem>

                                    </IonRadioGroup>)} control={control} name={"alarmNoWork"} rules={{ required: true }} />
                               
                            </IonItem> : null}



                        {/*DIAS DE TRABALHO ->MAIS QUE 0 */}



                        {((nDiasTrabalhoSemana == "1") || (nDiasTrabalhoSemana == "2") || (nDiasTrabalhoSemana == "3") || (nDiasTrabalhoSemana == "4") || (nDiasTrabalhoSemana == "5") || (nDiasTrabalhoSemana == "6") || (nDiasTrabalhoSemana == "7")) ?
                            <IonItem lines="none">
                                <IonLabel className="questions">Em dias de trabalho/estudo, eu normalmente dormi às: </IonLabel>
                            </IonItem> : null}
                        {((nDiasTrabalhoSemana == "1") || (nDiasTrabalhoSemana == "2") || (nDiasTrabalhoSemana == "3") || (nDiasTrabalhoSemana == "4") || (nDiasTrabalhoSemana == "5") || (nDiasTrabalhoSemana == "6") || (nDiasTrabalhoSemana == "7")) ?
                            <IonItem lines="none">
                                <Controller render={({ onChange }) => (
                                    <IonDatetime placeholder="Por favor, selecione..." display-format="HH:mm " picker-format="HH:mm" minuteValues="0,5,10,15,20,25,30,35,40,45,50,55" onIonChange={(e) => {
                                        console.log(e);
                                        onChange(e.detail.value);
                                        if (e.detail.value != undefined)
                                            props.setState('sleepWD', e.detail.value)
                                    }}></IonDatetime>)} control={control} name={"sleepWD"} rules={{ required: true }} />
                               
                            </IonItem> : null}

                        {((nDiasTrabalhoSemana == "1") || (nDiasTrabalhoSemana == "2") || (nDiasTrabalhoSemana == "3") || (nDiasTrabalhoSemana == "4") || (nDiasTrabalhoSemana == "5") || (nDiasTrabalhoSemana == "6") || (nDiasTrabalhoSemana == "7")) ?
                            <IonItem lines="none">
                                <IonLabel className="questions">Em dias de trabalho/estudo, eu normalmente acordei às: </IonLabel>
                            </IonItem> : null}
                        {((nDiasTrabalhoSemana == "1") || (nDiasTrabalhoSemana == "2") || (nDiasTrabalhoSemana == "3") || (nDiasTrabalhoSemana == "4") || (nDiasTrabalhoSemana == "5") || (nDiasTrabalhoSemana == "6") || (nDiasTrabalhoSemana == "7")) ?
                            <IonItem lines="none">
                                <Controller render={({ onChange }) => (
                                    <IonDatetime placeholder="Por favor, selecione..." display-format="HH:mm " picker-format="HH:mm" minuteValues="0,5,10,15,20,25,30,35,40,45,50,55" onIonChange={(e) => {
                                        console.log(e);
                                        onChange(e.detail.value);
                                        if (e.detail.value != undefined)
                                            props.setState('wakeUpWD', e.detail.value)
                                    }}></IonDatetime>)} control={control} name={"wakeUpWD"} rules={{ required: true }} />
                             
                            </IonItem> : null}

                        {((nDiasTrabalhoSemana == "1") || (nDiasTrabalhoSemana == "2") || (nDiasTrabalhoSemana == "3") || (nDiasTrabalhoSemana == "4") || (nDiasTrabalhoSemana == "5") || (nDiasTrabalhoSemana == "6") || (nDiasTrabalhoSemana == "7")) ?
                            <IonItem lines="none">
                                <IonLabel className="questions">Usei o despertador em dias de trabalho:</IonLabel>
                            </IonItem> : null}
                        {((nDiasTrabalhoSemana == "1") || (nDiasTrabalhoSemana == "2") || (nDiasTrabalhoSemana == "3") || (nDiasTrabalhoSemana == "4") || (nDiasTrabalhoSemana == "5") || (nDiasTrabalhoSemana == "6") || (nDiasTrabalhoSemana == "7")) ?
                            <IonItem lines="none">
                                <Controller render={({ onChange }) => (
                                    <IonRadioGroup onIonChange={(e) => {
                                        console.log(e);
                                        onChange(e.detail.value);
                                        if (e.detail.value != undefined)
                                            props.setState('alarmWD', e.detail.value)
                                    }}>

                                        <IonItem lines="none" className={"ion-no-padding"}>
                                            <IonLabel>Sim</IonLabel>
                                            <IonRadio slot="start" className={"radio-options"} color="primary" value="sim"></IonRadio>
                                        </IonItem>

                                        <IonItem lines="none" className={"ion-no-padding"}>
                                            <IonLabel>Não</IonLabel>
                                            <IonRadio slot="start" className={"radio-options"} color="primary" value="não"></IonRadio>
                                        </IonItem>

                                    </IonRadioGroup>)} control={control} name={"alarmWD"} rules={{ required: true }} />
                               
                            </IonItem> : null}

                        {formState.isValid === false ? 

                        <div className="preenchimentoObri">
                            <IonText  color="danger">Preencha todos campos obrigatórios para prosseguir</IonText>
                        </div>
                        
                        :null}


                        <div id="progress-bar-div" >
                            <IonProgressBar className={"progress-bar"} value={0.16} color="orange"></IonProgressBar>
                        </div>

                        <IonButton disabled={props.isFirst()} onClick={props.prev} className="btnAnterior" size="default" shape="round" fill="outline">Anterior</IonButton>
                        <IonButton disabled={formState.isValid === false} onClick={props.next} size="default" shape="round" className={"btnProximo"} fill="outline">Próximo</IonButton>
                    </form>
                </IonLabel>
            </div>

        </IonContent>
    )
}

export default MCTQ1;
