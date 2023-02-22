import React from "react";
import { StepComponentProps } from "react-step-builder";

import { IonItem, IonLabel, IonInput, IonRadioGroup, IonRadio, IonButton, IonCheckbox, IonList, IonTextarea, IonProgressBar, IonNote } from "@ionic/react";
import { IonContent, IonText } from '@ionic/react';

import '../../Forms.css';

import { useForm, Controller } from "react-hook-form";
import { useState } from 'react';
import { useUser } from "reactfire";
import firebase from "firebase";

const SaudeFinal1 = (props: StepComponentProps) => {

    const { data: user } = useUser();
    const [dataUser, setData] = useState();

    const { control, errors, formState } = useForm({ mode: "onChange" });

    const [medsChange, setmedsChange] = useState();
    const [selectedMedsNoOrientation, setSelectedMedsNoOrientation] = useState();

    function createDatabaseQuest2() {

        if (user) {
            firebase.firestore().collection('usersFinal').doc(user.uid).set({
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
                        <div className="texto-default">Se soubermos mais sobre você poderemos dar mais dicas personalizadas!</div>

                        <IonLabel className="questions">Você conseguiu finalizar sua meta principal?
                        </IonLabel>

                        <IonItem className={"ion-no-padding"} lines="none">


                            <Controller render={({ onChange }) => (
                                <IonRadioGroup onIonChange={(e) => {
                                    onChange(e.detail.value)
                                    if (e.detail.value != undefined)
                                        props.setState('meta01_02coleta02Complete', e.detail.value)
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
                                name={"meta01_02coleta02Complete"}
                                rules={{ required: true }}
                            />
                        </IonItem>

                        <IonLabel className="questions">Peso (em kg):</IonLabel>
                        {errors.weightFinal && <IonText color="danger"> Campo obrigatório.</IonText>}
                        <IonItem lines="none">


                            <Controller render={({ onChange }) => (
                                <IonInput placeholder="Digite um valor aproximado" type="number" id="weightFinal" onIonChange={(e) => {
                                    console.log(e);
                                    onChange(e.detail.value);
                                    if (e.detail.value != undefined)
                                        props.setState('weightFinal', e.detail.value)
                                }} />
                            )}
                                name="weightFinal"
                                control={control}
                                rules={{ required: true }}
                                />

                        </IonItem>

                        <IonLabel className="questions">Você teve alguma doença diagnosticada depois que entrou no estudo?</IonLabel>
                       <IonItem className={"ion-no-padding"}>


                            <Controller render={({ onChange }) => (

                                <IonList className={"ion-no-padding"}>

                                    <IonItem lines="none"  >
                                        <IonCheckbox className={"checkbox-options"} color="primary" value={props.getState("disordersChangeFinalNenhuma", false)} onIonChange={(e) => {
                                             if (e.detail.checked) {
                                                props.setState('disordersChangeFinalNenhuma', true)                                                
                                                } else {
                                                props.setState('disordersChangeFinalNenhuma', false)                                                
                                             }
                                        }}></IonCheckbox>
                                        <IonLabel >Nenhuma</IonLabel>
                                    </IonItem>

                                    <IonItem lines="none">
                                        <IonCheckbox className={"checkbox-options"} color="primary" value={props.getState("disordersChangeFinalDiabetes", false)} onIonChange={(e) => {
                                           if (e.detail.checked) {
                                            props.setState('disordersChangeFinalDiabetes', true)                                                
                                            } else {
                                            props.setState('disordersChangeFinalDiabetes', false)                                                
                                         }
                                        }}></IonCheckbox>
                                        <IonLabel>Diabetes</IonLabel>
                                    </IonItem>

                                    <IonItem lines="none">
                                        <IonCheckbox className={"checkbox-options"} color="primary" value={props.getState("disordersChangeFinalHipert", false)} onIonChange={(e) => {
                                            if (e.detail.checked) {
                                                props.setState('disordersChangeFinalHipert', true)                                                
                                                } else {
                                                props.setState('disordersChangeFinalHipert', false)                                                
                                             }
                                        }}></IonCheckbox>
                                        <IonLabel>Hipertensão</IonLabel>
                                    </IonItem>

                                    <IonItem lines="none">
                                        <IonCheckbox className={"checkbox-options"} color="primary" value={props.getState("disordersChangeFinalAsma", false)} onIonChange={(e) => {
                                            if (e.detail.checked) {
                                                props.setState('disordersChangeFinalAsma', true)                                                
                                                } else {
                                                props.setState('disordersChangeFinalAsma', false)                                                
                                             }
                                        }}></IonCheckbox>
                                        <IonLabel>Asma</IonLabel>
                                    </IonItem>

                                    <IonItem lines="none">
                                        <IonCheckbox className={"checkbox-options"} color="primary" value={props.getState("disordersChangeFinalDep", false)} onIonChange={(e) => {
                                            if (e.detail.checked) {
                                                props.setState('disordersChangeFinalDep', true)                                                
                                                } else {
                                                props.setState('disordersChangeFinalDep', false)                                                
                                             }
                                        }}></IonCheckbox>
                                        <IonLabel>Depressão</IonLabel>
                                    </IonItem>

                                    <IonItem lines="none">
                                        <IonCheckbox className={"checkbox-options"} color="primary" value={props.getState("disordersChangeFinalImunod", false)} onIonChange={(e) => {
                                             if (e.detail.checked) {
                                                props.setState('disordersChangeFinalImunod', true)                                                
                                                } else {
                                                props.setState('disordersChangeFinalImunod', false)                                                
                                             }
                                        }}></IonCheckbox>
                                        <IonLabel>Imunodeficiência</IonLabel>
                                    </IonItem>

                                    <IonItem lines="none">

                                        <IonInput placeholder="Outros" type="text" onIonChange={(e) => {
                                            if (e.detail.value != undefined)
                                                props.setState('disordersChangeFinal', e.detail.value)
                                               
                                        }} />
                                    </IonItem>
                                </IonList>
                            )}

                                control={control}
                                // rules={{required: true}}
                                name={"disordersChangeFinal"}

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
                                        onChange(e.detail.value)
                                        setmedsChange(e.detail.value);
                                        if (e.detail.value != undefined)
                                            props.setState('medsChangeFinal', e.detail.value)
                                    }}>

                                        <IonItem className={"ion-no-padding"} lines="none">
                                            <IonLabel>Sim</IonLabel>
                                            <IonRadio slot="start" className={"radio-options"} color="primary" value="sim"></IonRadio>
                                        </IonItem>


                                        <IonItem className={"ion-no-padding"} lines="none">
                                            <IonLabel>Não</IonLabel>
                                            <IonRadio slot="start" className={"radio-options"} color="primary" value="não"></IonRadio>
                                        </IonItem>
                                    </IonRadioGroup>
                                )}
                                    control={control}
                                    name={"medsChangeFinal"}
                                    rules={{ required: true }}
                                />
                            </IonItem>

                            {medsChange === "sim" ?

                                <IonItem lines="none">
                                    <Controller render={({ onChange }) => (
                                        <IonTextarea placeholder="Quais medicações?" onIonChange={(e) => {
                                            console.log(e);
                                            onChange(e.detail.value);
                                            if (e.detail.value != undefined)
                                                props.setState('medsUsedChangeFinal', e.detail.value)
                                        }} />)} control={control} name={'medsUsedChangeFinal'} />
                                </IonItem> : null
                            }
                        </IonList>

                        <IonLabel className="questions">Você começou a fazer uso frequente de alguma medicação sem orientação médica,
                            depois que entrou no estudo?</IonLabel>
                        <IonList>
                            <IonItem className={"ion-no-padding"} lines="none">

                                <Controller render={({ onChange }) => (
                                    <IonRadioGroup value={selectedMedsNoOrientation} onIonChange={(e) => {
                                        onChange(e.detail.value)
                                        setSelectedMedsNoOrientation(e.detail.value);
                                        if (e.detail.value != undefined)
                                            props.setState('medsOffChangeFinal', e.detail.value)
                                    }}>

                                        <IonItem className={"ion-no-padding"} lines="none">
                                            <IonLabel>Sim</IonLabel>
                                            <IonRadio slot="start" className={"radio-options"} color="primary" value="sim"></IonRadio>
                                        </IonItem>

                                        <IonItem className={"ion-no-padding"} lines="none">
                                            <IonLabel>Não</IonLabel>
                                            <IonRadio slot="start" className={"radio-options"} color="primary" value="não"></IonRadio>
                                        </IonItem>
                                    </IonRadioGroup>
                                )}
                                    control={control}
                                    name={"medsOffChangeFinal"}
                                    rules={{ required: true }}
                                />
                            </IonItem>

                            {selectedMedsNoOrientation === "sim" ?
                                <IonItem lines="none">
                                    <Controller render={({ onChange }) => (
                                        <IonTextarea placeholder="Quais medicações?" onIonChange={(e) => {
                                            console.log(e);
                                            onChange(e.detail.value);
                                            if (e.detail.value != undefined)
                                                props.setState('medsOffUsedChangeFinal', e.detail.value)
                                        }} />)} control={control} name={'medsOffUsedChangeFinal'} />
                                </IonItem> : null}
                        </IonList>

                        <IonLabel className="questions">Você fez psicoterapia nas últimas duas semanas? </IonLabel>
                        <IonItem lines="none" className={"ion-no-padding"}>


                            <Controller render={({ onChange }) => (

                                <IonRadioGroup onIonChange={(e) => {
                                    onChange(e.detail.value);
                                    if (e.detail.value != undefined)
                                        props.setState('psychotherPostFinal', e.detail.value)
                                }}>

                                    <IonItem className={"ion-no-padding"} lines="none">
                                        <IonLabel>Não</IonLabel>
                                        <IonRadio slot="start" className={"radio-options"} color="primary" value="não"></IonRadio>
                                    </IonItem>

                                    <IonItem className={"ion-no-padding"} lines="none">
                                        <IonLabel>Sim, on-line</IonLabel>
                                        <IonRadio slot="start" className={"radio-options"} color="primary" value="online"></IonRadio>
                                    </IonItem>

                                    <IonItem className={"ion-no-padding"} lines="none">
                                        <IonLabel>Sim, presencial</IonLabel>
                                        <IonRadio slot="start" className={"radio-options"} color="primary" value="presencial"></IonRadio>
                                    </IonItem>
                                </IonRadioGroup>

                            )}
                                control={control}
                                name={"psychotherPostFinal"}
                                rules={{ required: true }}
                            />
                        </IonItem>
                      

                        
                         {formState.isValid === false ? 

                        <div className="preenchimentoObri">
                            <IonText  color="danger">Preencha todos campos obrigatórios para prosseguir</IonText>
                        </div>
                        
                        :null}

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

export default SaudeFinal1;


