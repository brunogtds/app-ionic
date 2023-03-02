import React from "react";
import { IonItem, IonLabel, IonInput, IonRadioGroup, IonRadio, IonSelect, IonSelectOption, IonButton, IonCheckbox, IonList, IonLoading, IonProgressBar } from "@ionic/react";
import { IonContent, IonText } from '@ionic/react';
import firebase from "firebase";
import { useState } from "react";
import { Controller, useForm } from "react-hook-form";
import { useHistory } from "react-router-dom";
import { StepComponentProps } from "react-step-builder";
import { useUser } from "reactfire";
import { toast } from "../../../../toast";
import '../../Forms.css';

const SaudeFinal2 = (props: StepComponentProps) => {

    const { control, handleSubmit, errors, formState } = useForm({ mode: "onChange" });

    const [fuma, setFuma] = useState();
    const [fumou, setFumou] = useState();
    const [bebe, setBebe] = useState();
    const [drogas, setDrogas] = useState();
    const [estimulantes, setEstimulantes] = useState();

    const { data: user } = useUser();
    const [dataUser, setData] = useState()

    const history = useHistory();
    const [loader, setLoader] = useState<boolean>(false)

    async function updateUserDataQuest2(dataUser: any) {

        if (user) {
            firebase.firestore().collection('usersFinal').doc(user.uid).set({
                meta01_02coleta02Complete: String(props.state.meta01_02coleta02Complete),
                weightFinal: Number(props.state.weightFinal), //STEP 1
                disordersChangeFinalNenhuma: Boolean(props.state.disordersChangeFinalNenhuma),
                disordersChangeFinalDiabetes: Boolean(props.state.disordersChangeFinalDiabetes),
                disordersChangeFinalHipert: Boolean(props.state.disordersChangeFinalHipert),
                disordersChangeFinalAsma: Boolean(props.state.disordersChangeFinalAsma),
                disordersChangeFinalDep: Boolean(props.state.disordersChangeFinalDep),
                disordersChangeFinalImunod: Boolean(props.state.disordersChangeFinalImunod),
                disordersChangeFinal: String(props.state.disordersChangeFinal),
                medsChangeFinal: String(props.state.medsChangeFinal),
                medsUsedChangeFinal: String(props.state.medsUsedChangeFinal),
                medsOffChangeFinal: String(props.state.medsOffChangeFinal),
                medsOffUsedChangeFinal: String(props.state.medsOffUsedChangeFinal),
                psychotherPostFinal: String(props.state.psychotherPostFinal),
                alcoholChangeFinal: Number(props.state.alcoholChangeFinal),
                stimulantsChangeFinal: Number(props.state.stimulantsChangeFinal),
                smokeChangeFinal: Number(props.state.smokeChangeFinal),
                dateSaudeFinal: new Date(),
            }, { merge: true })

            toast('Formulário submetido com sucesso!', 4000);
        }
    }

    async function createDatabaseQuest2() {
        if (user) {
            firebase.firestore().collection('usersPost').doc(user.uid).set({
                email: user.email,
            }, { merge: true });
        }
    }

    function voltaModulos() {
        history.push('/tab1');
    }

    const onSubmit = (data: any) => {
        setData(dataUser);
        setLoader(true);
        createDatabaseQuest2();
        updateUserDataQuest2(dataUser);
        voltaModulos();
    }

    return (
        <IonContent fullscreen color="background">
            <div>
                <IonLabel mode="md">


                    <form className="ion-padding texto-default" onSubmit={handleSubmit(onSubmit)}>
                        <IonLoading message="Por favor aguarde..." duration={2000} isOpen={loader} />

                        <IonLabel className="questions">O seu consumo de bebidas alcóolicas, nas últimas duas semanasa:</IonLabel>
                        <IonItem lines="none" className={"ion-no-padding"}>


                            <Controller render={({ onChange }) => (
                                <IonRadioGroup onIonChange={(e) => {
                                    console.log(e);
                                    onChange(e.detail.value);
                                    if (e.detail.value != undefined)
                                        props.setState('alcoholChangeFinal', e.detail.value);
                                }}>

                                    <IonItem lines="none" className={"ion-no-padding"}>
                                        <IonLabel>Não mudou</IonLabel>
                                        <IonRadio slot="start" className={"radio-options"} color="primary" value="0"></IonRadio>
                                    </IonItem>

                                    <IonItem lines="none" className={"ion-no-padding"}>
                                        <IonLabel>Diminuiu</IonLabel>
                                        <IonRadio slot="start" className={"radio-options"} color="primary" value="1"></IonRadio>
                                    </IonItem>

                                    <IonItem lines="none" className={"ion-no-padding"}>
                                        <IonLabel>Aumentou</IonLabel>
                                        <IonRadio slot="start" className={"radio-options"} color="primary" value="2"></IonRadio>
                                    </IonItem>
                                </IonRadioGroup>
                            )}
                                control={control}
                                name={"alcoholChangeFinal"}
                                rules={{ required: true }}
                            />
                        </IonItem>

                        <IonLabel className="questions">O seu consumo de estimulantes (café, chimarrão), nas últimas duas semanas:</IonLabel>
                        <IonItem lines="none" className={"ion-no-padding"}>


                            <Controller render={({ onChange }) => (
                                <IonRadioGroup onIonChange={(e) => {
                                    console.log(e);
                                    onChange(e.detail.value);
                                    if (e.detail.value != undefined)
                                        props.setState('stimulantsChangeFinal', e.detail.value);
                                }}>

                                    <IonItem lines="none" className={"ion-no-padding"}>
                                        <IonLabel>Não mudou</IonLabel>
                                        <IonRadio slot="start" className={"radio-options"} color="primary" value="0"></IonRadio>
                                    </IonItem>

                                    <IonItem lines="none" className={"ion-no-padding"}>
                                        <IonLabel>Diminuiu</IonLabel>
                                        <IonRadio slot="start" className={"radio-options"} color="primary" value="1"></IonRadio>
                                    </IonItem>

                                    <IonItem lines="none" className={"ion-no-padding"}>
                                        <IonLabel>Aumentou</IonLabel>
                                        <IonRadio slot="start" className={"radio-options"} color="primary" value="2"></IonRadio>
                                    </IonItem>
                                </IonRadioGroup>
                            )}
                                control={control}
                                name={"stimulantsChangeFinal"}
                                rules={{ required: true }}
                            />
                        </IonItem>


                        <IonLabel className="questions">Se você fuma, nas últimas duas semanas, o número de cigarros que você fuma por dia:</IonLabel>
                        <IonItem lines="none" className={"ion-no-padding"}>


                            <Controller render={({ onChange }) => (
                                <IonRadioGroup onIonChange={(e) => {
                                    console.log(e);
                                    onChange(e.detail.value);
                                    if (e.detail.value != undefined)
                                        props.setState('smokeChangeFinal', e.detail.value);
                                }}>

                                    <IonItem lines="none" className={"ion-no-padding"}>
                                        <IonLabel>Não mudou</IonLabel>
                                        <IonRadio slot="start" className={"radio-options"} color="primary" value="0"></IonRadio>
                                    </IonItem>

                                    <IonItem lines="none" className={"ion-no-padding"}>
                                        <IonLabel>Diminuiu</IonLabel>
                                        <IonRadio slot="start" className={"radio-options"} color="primary" value="1"></IonRadio>
                                    </IonItem>

                                    <IonItem lines="none" className={"ion-no-padding"}>
                                        <IonLabel>Aumentou</IonLabel>
                                        <IonRadio slot="start" className={"radio-options"} color="primary" value="2"></IonRadio>
                                    </IonItem>

                                    <IonItem lines="none" className={"ion-no-padding"}>
                                        <IonLabel>Não fumo</IonLabel>
                                        <IonRadio slot="start" className={"radio-options"} color="primary" value="888"></IonRadio>
                                    </IonItem>
                                </IonRadioGroup>
                            )}
                                control={control}
                                name={"smokeChangeFinal"}
                                rules={{ required: true }}
                            />
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
                        <IonButton disabled={formState.isValid === false} onClick={onSubmit} size="default" shape="round" fill="outline" className={"btnProximo"}>Submeter</IonButton>

                    </form>
                </IonLabel>
            </div>
        </IonContent>
    )
}

export default SaudeFinal2;