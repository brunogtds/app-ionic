import React from "react";
import { StepComponentProps } from "react-step-builder";

import { IonItem, IonLabel, IonInput, IonRadioGroup, IonRadio, IonSelect, IonSelectOption, IonButton, IonCheckbox, IonList, IonDatetime, IonText, IonNote } from "@ionic/react";
import { IonContent } from '@ionic/react';

import '../../Forms.css';

import { useForm, Controller } from "react-hook-form";
import { useState } from 'react';

import { IonProgressBar } from '@ionic/react';

const Habitos2 = (props: StepComponentProps) => {

    const options = {
        cssClass: 'my-custom-interface'
    };

    const { control, watch, handleSubmit, errors, formState } = useForm({ mode: "onChange" });

    const [rotinaAlimento, setRotinaAlimento] = useState();
    const [horarioAlimento, setHorarioAlimento] = useState();
    const [atividadeFisica, setAtividadeFisica] = useState();
    const [horarioAtividadeFisica, setHorarioAtividadeFisica] = useState();
    const [frequenciaLuzNatural, setFrequenciaLuzNatural] = useState();
    const [horarioLuzNatural, setHorarioLuzNatural] = useState();

    return (
        <IonContent fullscreen color="background">

            <div className="ion-text-wrap">
                <IonLabel mode="md">

                    <form className="ion-padding texto-default">

                        <div className="ion-text-wrap">
                            

                            <IonLabel className="questions">Como foram seus horários de alimentação nas últimas duas semanas?</IonLabel>
                            <IonNote>Ser muito regular significa se alimentar sempre no mesmo horário.</IonNote>
                            <IonList>


                                <IonItem lines="none">


                                    <Controller render={({ onChange }) => (
                                        <IonSelect interfaceOptions={options} className={"select-interface-option"} okText="ok" cancelText="Cancelar" placeholder="Por favor, selecione..." value={rotinaAlimento} onIonChange={(e) => {
                                            setRotinaAlimento(e.detail.value);
                                            onChange(e.detail.value);
                                            if (e.detail.value != undefined)
                                                props.setState('feedReg', e.detail.value)
                                        }}>
                                            <IonSelectOption value="muito irregulares">Muito irregulares</IonSelectOption>
                                            <IonSelectOption value="irregulares">Irregulares</IonSelectOption>
                                            <IonSelectOption value="regulares">Regulares</IonSelectOption>
                                            <IonSelectOption value="muitoRegulares">Muito regulares</IonSelectOption>
                                        </IonSelect>)} control={control} name="feedReg" rules={{ required: true }} />
                                 
                                </IonItem>

                                {/*REGULARES OU MUITO REGULARES*/}

                                {((rotinaAlimento === "regulares") || (rotinaAlimento === "muitoRegulares")) ?

                                    <IonItem lines="none">
                                        <IonLabel className="questions">Em que horário, em média, nas últimas duas semanas, você se alimentou pela primeira vez no dia, nos dias de trabalho ou de semana?</IonLabel>
                                    </IonItem> : null}

                                {((rotinaAlimento === "regulares") || (rotinaAlimento === "muitoRegulares")) ?
                                    <IonItem lines="none">
                                        <Controller render={({ onChange }) => (
                                            <IonDatetime placeholder="Por favor, selecione..." display-format="HH:mm " picker-format="HH:mm" minuteValues="0,5,10,15,20,25,30,35,40,45,50,55" onIonChange={(e) => {
                                                console.log(e);
                                                onChange(e.detail.value);
                                                if (e.detail.value != undefined)
                                                    props.setState('feedStartWD', e.detail.value)
                                            }}></IonDatetime>)} control={control} name="feedStartWD" rules={{ required: true }} />
                                       
                                    </IonItem> : null}

                                {((rotinaAlimento === "regulares") || (rotinaAlimento === "muitoRegulares")) ?
                                    <IonItem lines="none">
                                        <IonLabel className="questions">Em que horário, em média, você se alimentou pela última vez no dia, nas últimas duas semanas, nos dias de trabalho ou semana?</IonLabel>
                                        
                                    </IonItem> : null}
                                {((rotinaAlimento === "regulares") || (rotinaAlimento === "muitoRegulares")) ?
                                    <IonItem lines="none">
                                        <Controller render={({ onChange }) => (
                                            <IonDatetime placeholder="Use o formato 24:00. Por exemplo, se seu último horário de alimentação foi às 9h da noite, responda 21:00..." display-format="HH:mm " picker-format="HH:mm" minuteValues="0,5,10,15,20,25,30,35,40,45,50,55" onIonChange={(e) => {
                                                console.log(e);
                                                onChange(e.detail.value);
                                                if (e.detail.value != undefined)
                                                    props.setState('feedEndWD', e.detail.value)
                                            }}></IonDatetime>)} control={control} name="feedEndWD" rules={{ required: true }} />
                                     
                                    </IonItem> : null}

                            </IonList>

                            {/*}
                            <IonLabel className="questions">Seus horários de alimentação foram diferentes em dias de trabalho comparados a dias livres (ou em dias de semana comparados a fins de semana) nas últimas duas semanas?</IonLabel>
                            <IonItem lines="none" className={"ion-no-padding"}>

                                <Controller render={({ onChange }) => (
                                    <IonRadioGroup value={horarioAlimento} onIonChange={(e) => {
                                        setHorarioAlimento(e.detail.value);
                                        onChange(e.detail.value);
                                        if (e.detail.value != undefined)
                                            props.setState('feedfdyn', e.detail.value)
                                    }}>

                                        <IonItem lines="none" className={"ion-no-padding"}>
                                            <IonLabel>Sim</IonLabel>
                                            <IonRadio slot="start" className={"radio-options"} color="primary" value="sim"></IonRadio>
                                        </IonItem>

                                        <IonItem lines="none" className={"ion-no-padding"}>
                                            <IonLabel>Não</IonLabel>
                                            <IonRadio slot="start" className={"radio-options"} color="primary" value="não"></IonRadio>
                                        </IonItem>

                                    </IonRadioGroup>)} control={control} name={"feedfdyn"} rules={{ required: true }} />
                              
                            </IonItem>
                                */}

                            {((rotinaAlimento === "regulares") || (rotinaAlimento === "muitoRegulares") ) ?
                                <IonItem lines="none">
                                    <IonLabel className="questions">Em que horário, em média, nas últimas duas semanas, você se alimentou pela primeira vez no dia, nos dias livres ou fins de semana?</IonLabel>
                                   
                                </IonItem> : null}
                            {((rotinaAlimento === "regulares") || (rotinaAlimento === "muitoRegulares") ) ?
                                <IonItem lines="none">
                                    <Controller render={({ onChange }) => (
                                        <IonDatetime placeholder="Por favor, selecione..." display-format="HH:mm " picker-format="HH:mm" minuteValues="0,5,10,15,20,25,30,35,40,45,50,55" onIonChange={(e) => {
                                            console.log(e);
                                            onChange(e.detail.value);
                                            if (e.detail.value != undefined)
                                                props.setState('feedStartFD', e.detail.value)
                                        }}></IonDatetime>)} control={control} name={"feedStart"} rules={{ required: true }} />
                                  
                                </IonItem> : null}

                            {((rotinaAlimento === "regulares") || (rotinaAlimento === "muitoRegulares")) ?
                                <IonItem lines="none">
                                    <IonLabel className="questions">Em que horário, em média, nas últimas duas semanas, você se alimentou pela última vez no dia, nos dias livres ou fins de semana?</IonLabel>
                                  
                                </IonItem> : null}
                            {((rotinaAlimento === "regulares") || (rotinaAlimento === "muitoRegulares") ) ?
                                <IonItem lines="none">
                                    <Controller render={({ onChange }) => (
                                        <IonDatetime placeholder="Use o formato 24:00. Por exemplo, se seu último horário de alimentação foi às 9h da noite, responda 21:00..." display-format="HH:mm " picker-format="HH:mm" minuteValues="0,5,10,15,20,25,30,35,40,45,50,55" onIonChange={(e) => {
                                            console.log(e);
                                            onChange(e.detail.value);
                                            if (e.detail.value != undefined)
                                                props.setState('feedEndFD', e.detail.value)
                                        }}></IonDatetime>)} control={control} name={"feedEnd"} rules={{ required: true }} />
                               
                                </IonItem> : null}

                            <IonLabel className="questions">Nas últimas duas semanas, você comeu lanches ao longo do dia, em média: </IonLabel>
                            <IonItem lines="none" className={"ion-no-padding"}>


                                <Controller render={({ onChange }) => (

                                    <IonRadioGroup onIonChange={(e) => {
                                        onChange(e.detail.value);
                                        if (e.detail.value != undefined)
                                            props.setState('snacks', e.detail.value)
                                    }}>

                                        <IonItem lines="none" className={"ion-no-padding"}>
                                            <IonLabel>Nenhuma vez</IonLabel>
                                            <IonRadio slot="start" className={"radio-options"} color="primary" value="0"></IonRadio>
                                        </IonItem>

                                        <IonItem lines="none" className={"ion-no-padding"}>
                                            <IonLabel>Uma vez</IonLabel>
                                            <IonRadio slot="start" className={"radio-options"} color="primary" value="1"></IonRadio>
                                        </IonItem>

                                        <IonItem lines="none" className={"ion-no-padding"}>
                                            <IonLabel>Duas vezes</IonLabel>
                                            <IonRadio slot="start" className={"radio-options"} color="primary" value="2"></IonRadio>
                                        </IonItem>

                                        <IonItem lines="none" className={"ion-no-padding"}>
                                            <IonLabel>Três vezes</IonLabel>
                                            <IonRadio slot="start" className={"radio-options"} color="primary" value="3"></IonRadio>
                                        </IonItem>

                                        <IonItem lines="none" className={"ion-no-padding"}>
                                            <IonLabel>Quatro vezes</IonLabel>
                                            <IonRadio slot="start" className={"radio-options"} color="primary" value="4"></IonRadio>
                                        </IonItem>

                                        <IonItem lines="none" className={"ion-no-padding"}>
                                            <IonLabel>Cinco vezes ou mais</IonLabel>
                                            <IonRadio slot="start" className={"radio-options"} color="primary" value="5"></IonRadio>
                                        </IonItem>

                                    </IonRadioGroup>)} control={control} name={"snacks"} rules={{ required: true }} />
                             
                            </IonItem>

                            {formState.isValid === false ? 

                        <div className="preenchimentoObri">
                            <IonText  color="danger">Preencha todos campos obrigatórios para prosseguir</IonText>
                        </div>
                        
                        :null}

                            <div id="progress-bar-div" >
                                <IonProgressBar className={"progress-bar"} value={0.5} color="orange"></IonProgressBar>
                            </div>


                            <IonButton onClick={props.prev} className="btnAnterior" size="default" shape="round" fill="outline">Anterior</IonButton>
                            <IonButton disabled={formState.isValid === false} onClick={props.next} size="default" shape="round" className={"btnProximo"} fill="outline">Próximo</IonButton>

                        </div>
                    </form>
                </IonLabel>
            </div>
        </IonContent>
    )

}

export default Habitos2;