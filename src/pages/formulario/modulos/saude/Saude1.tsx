import React from "react";
import { StepComponentProps } from "react-step-builder";

import { IonItem, IonLabel, IonInput, IonRadioGroup, IonRadio, IonButton, IonCheckbox, IonList, IonTextarea, IonProgressBar } from "@ionic/react";
import { IonContent, IonText } from '@ionic/react';

import '../../Forms.css';

import { useForm, Controller } from "react-hook-form";
import { useState } from 'react';

const Saude1 = (props: StepComponentProps) => {

    const { control, errors, formState } = useForm({ mode: "onChange" });

    const [selected, setSelected] = useState();
    const [selectedNoOrientation, setSelectedNoOrientation] = useState();

    const [checkNenhuma, setCheckNenhuma] = useState(false);



    return (


        <IonContent fullscreen color="background">


            <div>
                <IonLabel mode="md">



                    <form className="ion-padding texto-default">

                        <div className="texto-title">Saúde</div>
                        <div className="texto-default">Para receber dicas personalizadas, preencha para sabermos mais sobre você e sua saúde!</div>

                        <IonLabel className="questions">Doenças diagnosticadas:</IonLabel>

                        <IonItem className={"ion-no-padding"}>


                            <Controller render={({ onChange }) => (

                                <IonList className={"ion-no-padding"}>

                                    <IonItem lines="none"  >
                                        <IonCheckbox className={"checkbox-options"} color="primary" value={props.getState("disordersNenhuma", false)} onIonChange={(e) => {
                                           
                                             if (e.detail.checked) {
                                                        props.setState('disordersNenhuma', true)  
                                                        setCheckNenhuma(true)                                                  
                                                    } else {
                                                        props.setState('disordersNenhuma', false)
                                                        setCheckNenhuma(false)
                                                    }
                                        }}></IonCheckbox>
                                        <IonLabel >Nenhuma</IonLabel>
                                    </IonItem>

                                    <IonItem lines="none">
                                        <IonCheckbox className={"checkbox-options"} disabled={checkNenhuma} color="primary" value={props.getState("disordersDiabetes", false)} onIonChange={(e) => {
                                          
                                             if (e.detail.checked) {
                                                props.setState('disordersDiabetes', true)                                                
                                            } else {
                                                props.setState('disordersDiabetes', false)                                                
                                            }
                                        }}></IonCheckbox>
                                        <IonLabel>Diabetes</IonLabel>
                                    </IonItem>

                                    <IonItem lines="none">
                                        <IonCheckbox className={"checkbox-options"} disabled={checkNenhuma} color="primary" value={props.getState("disordersHipert", false)} onIonChange={(e) => {
                                           
                                            if (e.detail.checked) {
                                                props.setState('disordersHipert', true)                                                
                                            } else {
                                                props.setState('disordersHipert', false)                                                
                                            }
                                        }}></IonCheckbox>
                                        <IonLabel>Hipertensão</IonLabel>
                                    </IonItem>

                                    <IonItem lines="none">
                                        <IonCheckbox className={"checkbox-options"} disabled={checkNenhuma} color="primary" value={props.getState("disordersAsma", false)} onIonChange={(e) => {
                                         
                                            if (e.detail.checked) {
                                                props.setState('disordersAsma', true)                                                
                                            } else {
                                                props.setState('disordersAsma', false)                                                
                                            }
                                        }}></IonCheckbox>
                                        <IonLabel>Asma</IonLabel>
                                    </IonItem>

                                    <IonItem lines="none">
                                        <IonCheckbox className={"checkbox-options"} disabled={checkNenhuma} color="primary" value={props.getState("disordersDep", false)} onIonChange={(e) => {
                                           
                                            if (e.detail.checked) {
                                                props.setState('disordersDep', true)                                                
                                            } else {
                                                props.setState('disordersDep', false)                                                
                                            }
                                        }}></IonCheckbox>
                                        <IonLabel>Depressão</IonLabel>
                                    </IonItem>

                                    <IonItem lines="none">
                                        <IonCheckbox className={"checkbox-options"} disabled={checkNenhuma} color="primary" value={props.getState("disordersImunod", false)} onIonChange={(e) => {
                                          
                                            if (e.detail.checked) {
                                                props.setState('disordersImunod', true)                                                
                                            } else {
                                                props.setState('disordersImunod', false)                                                
                                            }
                                        }}></IonCheckbox>
                                        <IonLabel>Imunodeficiência</IonLabel>
                                    </IonItem>

                                    <IonItem lines="none">

                                        <IonInput disabled={checkNenhuma} placeholder="Outros" type="text" onIonChange={(e) => {
                                       
                                          if (e.detail.value != undefined)
                                                props.setState('disorders', e.detail.value)        
                                        }} />
                                    </IonItem>
                                </IonList>
                            )}

                                control={control}
                                // rules={{required: true}}
                                name={"disorders"}

                            />
                            <div>
                              
                            </div>

                        </IonItem>


                        <IonLabel className="questions">Você faz uso frequente de medicações por orientação médica?</IonLabel>
                        <IonList>
                            <IonItem mode="md" className={"ion-no-padding"} lines="none">


                                <Controller render={({ onChange }) => (
                                    <IonRadioGroup value={selected} onIonChange={(e) => {
                                        setSelected(e.detail.value);
                                        onChange(e.detail.value);
                                        if (e.detail.value != undefined)
                                            props.setState('meds', e.detail.value)
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
                                    rules={{ required: true }}
                                    name={"meds"}
                                />
                            </IonItem>
                            {errors.meds && <IonText color="danger">Campo obrigatório.</IonText>}
                            {selected === "sim" ?

                                <IonItem lines="none">
                                    <Controller render={({ onChange }) => (
                                        <IonTextarea placeholder="Quais medicações?" onIonChange={(e) => {
                                            console.log(e);
                                            onChange(e.detail.value);
                                            if (e.detail.value != undefined)
                                                props.setState('medsUsed', e.detail.value)
                                        }} />)} control={control} name={'medsUsed'} />

                                </IonItem> : null
                            } 
                        </IonList>


                        <IonLabel className="questions">Você faz uso frequente de medicações sem orientação médica?</IonLabel>
                        <IonList>

                            <IonItem className={"ion-no-padding"} lines="none">

                                <Controller render={({ onChange }) => (
                                    <IonRadioGroup value={selectedNoOrientation} onIonChange={(e) => {
                                        setSelectedNoOrientation(e.detail.value);
                                        onChange(e.detail.value);
                                        if (e.detail.value != undefined)
                                            props.setState('medsOff', e.detail.value)
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
                                    name={"medsOff"}
                                    rules={{ required: true }}
                                />
                            </IonItem>
                         

                            {selectedNoOrientation === "sim" ?
                                <IonItem lines="none">
                                    <Controller render={({ onChange }) => (
                                        <IonTextarea placeholder="Quais medicações?" onIonChange={(e) => {
                                            console.log(e);
                                            onChange(e.detail.value);
                                            if (e.detail.value != undefined)
                                                props.setState('medsOffUsed', e.detail.value)
                                        }} />)} control={control} name={'medsOffUsed'} />
                                </IonItem> : null} 
                        </IonList>

                        <IonLabel className="questions">Você fez psicoterapia nas últimas duas semanas? </IonLabel>
                        <IonItem className={"ion-no-padding"}>


                            <Controller render={({ onChange }) => (

                                <IonRadioGroup onIonChange={(e) => {
                                    onChange(e.detail.value);
                                    if (e.detail.value != undefined)
                                        props.setState('psychother', e.detail.value)
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
                                name={"psychother"}
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

export default Saude1;