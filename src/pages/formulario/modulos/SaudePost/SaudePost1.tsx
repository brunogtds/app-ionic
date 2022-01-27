import React from "react";
import { StepComponentProps } from "react-step-builder";

import { IonItem, IonLabel, IonInput, IonRadioGroup, IonRadio, IonButton, IonCheckbox, IonList, IonTextarea, IonProgressBar, IonNote } from "@ionic/react";
import { IonContent, IonText } from '@ionic/react';

import '../../Forms.css';

import { useForm, Controller } from "react-hook-form";
import { useState } from 'react';
import { useUser } from "reactfire";
import firebase from "firebase";

const SaudePost1 = (props: StepComponentProps) => {

    const { data: user } = useUser();
    const [dataUser, setData] = useState();

    const { control, errors, formState } = useForm({ mode: "onChange" });

    const [medsChange, setmedsChange] = useState();
    const [selectedMedsNoOrientation, setSelectedMedsNoOrientation] = useState();

    function createDatabaseQuest2() {

        if (user) {
            firebase.firestore().collection('usersPost').doc(user.uid).set({
                email: user.email,
            }, { merge: true });
        }
    }

    if (user) {
        createDatabaseQuest2();
    }

    return (
        <IonContent fullscreen color="background">
            <div>
                <IonLabel mode="md">

                    <form className="ion-padding texto-default" >

                        <div className="texto-title">Saúde</div>
                        <div className="texto-default">Para continuar marcando suas atividades, preencha para sabermos mais sobre você e sua saúde!</div>

                        <IonLabel className="questions">Você conseguiu finalizar sua meta principal?
                        </IonLabel>

                        <IonItem className={"ion-no-padding"} lines="none">


                            <Controller render={({ onChange }) => (
                                <IonRadioGroup onIonChange={(e) => {
                                    if (e.detail.value != undefined)
                                        props.setState('meta01coleta01Complete', e.detail.value)
                                }}>

                                    <IonItem lines="none" className={"ion-no-padding"}>
                                        <IonLabel>Sim</IonLabel>
                                        <IonRadio slot="start" className={"radio-options"} color="primary" value="sim"></IonRadio>
                                    </IonItem>


                                    <IonItem lines="none" className={"ion-no-padding"}>
                                        <IonLabel>Não</IonLabel>
                                        <IonRadio slot="start" className={"radio-options"} color="primary" value="não"></IonRadio>
                                    </IonItem>
                                </IonRadioGroup>
                            )}
                                control={control}
                                name={"meta01coleta01Complete"}
                            />
                        </IonItem>

                        <IonLabel className="questions">Peso (em kg):</IonLabel>
                        {errors.weightPost && <IonText color="danger"> Campo obrigatório.</IonText>}
                        <IonItem lines="none">

                            <Controller render={({ onChange }) => (
                                <IonInput placeholder="Digite um valor aproximado" type="number" id="weightPost" onIonChange={(e) => {
                                    console.log(e);
                                    onChange(e.detail.value);
                                    if (e.detail.value != undefined)
                                        props.setState('weightPost', e.detail.value)
                                }} />
                            )}
                                name="weightPost"
                                control={control}
                                rules={{ required: true }} />

                        </IonItem>

                        <IonLabel className="questions">Você teve alguma doença diagnosticada depois que entrou no estudo?</IonLabel>

                       <IonItem className={"ion-no-padding"}>


                            <Controller render={({ onChange }) => (

                                <IonList className={"ion-no-padding"}>

                                    <IonItem lines="none"  >
                                        <IonCheckbox className={"checkbox-options"} color="primary" value={props.getState("disordersChange", "")} onIonChange={(e) => {

                                            console.log(e);
                                            onChange(e.detail.value);
                                            if (e.detail.value != undefined)
                                                if (props.state.disordersChange !== undefined)
                                                    props.setState('disordersChange', props.state.disordersChange + ' nenhuma')
                                                else 
                                                    props.setState('disordersChange', 'nenhuma')
                                        }}></IonCheckbox>
                                        <IonLabel >Nenhuma</IonLabel>
                                    </IonItem>

                                    <IonItem lines="none">
                                        <IonCheckbox className={"checkbox-options"} color="primary" value={props.getState("disordersChange", "")} onIonChange={(e) => {
                                            console.log(e);
                                            onChange(e.detail.value);
                                            if (e.detail.value != undefined)
                                                if (props.state.disordersChange !== undefined)
                                                    props.setState('disordersChange', props.state.disordersChange + ' diabetes')
                                                else 
                                                    props.setState('disordersChange', 'diabetes')
                                        }}></IonCheckbox>
                                        <IonLabel>Diabetes</IonLabel>
                                    </IonItem>

                                    <IonItem lines="none">
                                        <IonCheckbox className={"checkbox-options"} color="primary" value={props.getState("disordersChange", "")} onIonChange={(e) => {
                                            console.log(e);
                                            onChange(e.detail.value);
                                            if (e.detail.value != undefined)
                                                if (props.state.disordersChange !== undefined)
                                                    props.setState('disordersChange', props.state.disordersChange + ' hipertensão')
                                                else 
                                                    props.setState('disordersChange', 'hipertensão')
                                        }}></IonCheckbox>
                                        <IonLabel>Hipertensão</IonLabel>
                                    </IonItem>

                                    <IonItem lines="none">
                                        <IonCheckbox className={"checkbox-options"} color="primary" value={props.getState("disordersChange", "")} onIonChange={(e) => {
                                            console.log(e);
                                            onChange(e.detail.value);
                                            if (e.detail.value != undefined)
                                                if (props.state.disordersChange !== undefined)
                                                    props.setState('disordersChange', props.state.disordersChange + ' asma')
                                                else 
                                                    props.setState('disordersChange', 'asma')
                                        }}></IonCheckbox>
                                        <IonLabel>Asma</IonLabel>
                                    </IonItem>

                                    <IonItem lines="none">
                                        <IonCheckbox className={"checkbox-options"} color="primary" value={props.getState("disordersChange", "")} onIonChange={(e) => {
                                            console.log(e);
                                            onChange(e.detail.value);
                                           if (e.detail.value != undefined)
                                                if (props.state.disordersChange !== undefined)
                                                    props.setState('disordersChange', props.state.disordersChange + ' depressão')
                                                else 
                                                    props.setState('disordersChange', 'depressão')
                                        }}></IonCheckbox>
                                        <IonLabel>Depressão</IonLabel>
                                    </IonItem>

                                    <IonItem lines="none">
                                        <IonCheckbox className={"checkbox-options"} color="primary" value={props.getState("disordersChange", "")} onIonChange={(e) => {
                                            console.log(e);
                                            onChange(e.detail.value);
                                             if (e.detail.value != undefined)
                                                if (props.state.disordersChange !== undefined)
                                                    props.setState('disordersChange', props.state.disordersChange + ' imunodeficiência')
                                                else 
                                                    props.setState('disordersChange', 'imunodeficiência')
                                        }}></IonCheckbox>
                                        <IonLabel>Imunodeficiência</IonLabel>
                                    </IonItem>

                                    <IonItem lines="none">

                                        <IonInput placeholder="Outros" type="text" onIonChange={(e) => {
                                            if (e.detail.value != undefined)
                                                if (props.state.disordersChange !== undefined)
                                                    props.setState('disordersChange', props.state.disordersChange + " " + e.detail.value)
                                                else 
                                                    props.setState('disordersChange', e.detail.value)
                                        }} />
                                    </IonItem>
                                </IonList>
                            )}

                                control={control}
                                // rules={{required: true}}
                                name={"disordersChange"}

                            />
                            <div>
                                {/*errors.disorders && <IonText color="danger">Campo obrigatório.</IonText>*/}
                            </div>

                        </IonItem>

                        <IonLabel className="questions">Você começou a fazer uso frequente de alguma medicação por orientação médica,
                            depois que entrou no estudo?
                        </IonLabel>
                        <IonList>

                            <IonItem className={"ion-no-padding"} lines="none">


                                <Controller render={({ onChange }) => (
                                    <IonRadioGroup value={medsChange} onIonChange={(e) => {
                                        setmedsChange(e.detail.value);
                                        if (e.detail.value != undefined)
                                            props.setState('medsChange', e.detail.value)
                                    }}>

                                        <IonItem lines="none" className={"ion-no-padding"}>
                                            <IonLabel>Sim</IonLabel>
                                            <IonRadio slot="start" className={"radio-options"} color="primary" value="sim"></IonRadio>
                                        </IonItem>


                                        <IonItem lines="none" className={"ion-no-padding"}>
                                            <IonLabel>Não</IonLabel>
                                            <IonRadio slot="start" className={"radio-options"} color="primary" value="não"></IonRadio>
                                        </IonItem>
                                    </IonRadioGroup>
                                )}
                                    control={control}
                                    name={"medsChange"}
                                />
                            </IonItem>

                            {medsChange === "sim" ?

                                <IonItem lines="none">
                                    <Controller render={({ onChange }) => (
                                        <IonTextarea placeholder="Quais medicações?" onIonChange={(e) => {
                                            console.log(e);
                                            onChange(e.detail.value);
                                            if (e.detail.value != undefined)
                                                props.setState('medsUsedChange', e.detail.value)
                                        }} />)} control={control} name={'medsUsedChange'} />
                                </IonItem> : null
                            }
                        </IonList>

                        <IonLabel className="questions">Você começou a fazer uso frequente de alguma medicação sem orientação médica,
                            depois que entrou no estudo?</IonLabel>
                        <IonList>
                            <IonItem className={"ion-no-padding"} lines="none">

                                <Controller render={({ onChange }) => (
                                    <IonRadioGroup value={selectedMedsNoOrientation} onIonChange={(e) => {
                                        setSelectedMedsNoOrientation(e.detail.value);
                                        if (e.detail.value != undefined)
                                            props.setState('medsOffChange', e.detail.value)
                                    }}>

                                        <IonItem lines="none" className={"ion-no-padding"}>
                                            <IonLabel>Sim</IonLabel>
                                            <IonRadio slot="start" className={"radio-options"} color="primary" value="sim"></IonRadio>
                                        </IonItem>

                                        <IonItem lines="none" className={"ion-no-padding"}>
                                            <IonLabel>Não</IonLabel>
                                            <IonRadio slot="start" className={"radio-options"} color="primary" value="não"></IonRadio>
                                        </IonItem>
                                    </IonRadioGroup>
                                )}
                                    control={control}
                                    name={"medsOffChange"}
                                />
                            </IonItem>

                            {selectedMedsNoOrientation === "sim" ?
                                <IonItem lines="none" >
                                    <Controller render={({ onChange }) => (
                                        <IonTextarea placeholder="Quais medicações?" onIonChange={(e) => {
                                            console.log(e);
                                            onChange(e.detail.value);
                                            if (e.detail.value != undefined)
                                                props.setState('medsOffUsedChange', e.detail.value)
                                        }} />)} control={control} name={'medsOffUsedChange'} />
                                </IonItem> : null}
                        </IonList>

                        <IonLabel className="questions">Você fez psicoterapia nas últimas duas semanas? </IonLabel>
                        <IonItem className={"ion-no-padding"} lines="none">


                            <Controller render={({ onChange }) => (

                                <IonRadioGroup onIonChange={(e) => {
                                    onChange(e.detail.value);
                                    if (e.detail.value != undefined)
                                        props.setState('psychotherPost', e.detail.value)
                                }}>

                                    <IonItem lines="none" className={"ion-no-padding"}>
                                        <IonLabel>Não</IonLabel>
                                        <IonRadio slot="start" className={"radio-options"} color="primary" value="não"></IonRadio>
                                    </IonItem>

                                    <IonItem lines="none" className={"ion-no-padding"}>
                                        <IonLabel>Sim, on-line</IonLabel>
                                        <IonRadio slot="start" className={"radio-options"} color="primary" value="online"></IonRadio>
                                    </IonItem>

                                    <IonItem lines="none" className={"ion-no-padding"}>
                                        <IonLabel>Sim, presencial</IonLabel>
                                        <IonRadio slot="start" className={"radio-options"} color="primary" value="presencial"></IonRadio>
                                    </IonItem>
                                </IonRadioGroup>

                            )}
                                control={control}
                                name={"psychotherPost"}
                                rules={{ required: true }}
                            />
                        </IonItem>
                        {errors.psychother && <IonText color="danger">Campo obrigatório.</IonText>}

                        <div id="progress-bar-div" >
                            <IonProgressBar className={"progress-bar"} value={0.5} color="orange"></IonProgressBar>
                        </div>

                        <IonButton onClick={props.prev} className="btnAnterior" size="default" shape="round" fill="outline" disabled={true}>Anterior</IonButton>
                        <IonButton disabled={formState.isValid === false} onClick={props.next} size="default" shape="round" className={"btnProximo"} fill="outline"> Próximo </IonButton>

                    </form>
                </IonLabel>
            </div>

        </IonContent>
    )

}

export default SaudePost1;


