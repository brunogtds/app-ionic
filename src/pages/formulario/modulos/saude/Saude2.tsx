
import React from "react";
import { StepComponentProps } from "react-step-builder";

import { IonItem, IonLabel, IonInput, IonRadioGroup, IonRadio, IonSelect, IonSelectOption, IonButton, IonCheckbox, IonList, IonLoading, IonProgressBar } from "@ionic/react";
import { IonContent, IonText } from '@ionic/react';

import '../../Forms.css';

import { useForm, Controller } from "react-hook-form";
import { useState } from 'react';


import { useHistory } from 'react-router-dom'
import { toast } from '../../../../toast';

//imports user context do reactfire

import { useUser } from 'reactfire';
import firebase from 'firebase';
import { createFalse } from "typescript";


const Saude2 = (props: StepComponentProps) => {

    const options = {
        cssClass: 'my-custom-interface'
    };

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

    async function updateUserDataQuest1(dataUser: any) {

        

        if (user) {
            console.log('ta aqui');

            firebase.firestore().collection('users').doc(user.uid).set({
                disordersNenhuma: Boolean(props.state.disordersNenhuma),
                disordersDiabetes: Boolean(props.state.disordersDiabetes),
                disordersHipert: Boolean(props.state.disordersHipert),
                disordersAsma: Boolean(props.state.disordersAsma),
                disordersDep: Boolean(props.state.disordersDep),
                disordersImunod: Boolean(props.state.disordersImunod),
                disorders: String(props.state.disorders), //STEP 2 
                meds: String(props.state.meds),
                medsUsed: String(props.state.medsUsed),
                medsOff: String(props.state.medsOff),
                medsOffUsed: String(props.state.medsOffUsed),
                psychother: String(props.state.psychother),
                smoke: String(props.state.smoke),
                cigarrets: String(props.state.cigarrets),
                smokeDur: Number(props.state.smokeDur),
                smokeBef: String(props.state.smokeBef),
                cigarretsBef: String(props.state.cigarretsBef),
                smokeBefDur: Number(props.state.smokeBefDur),
                smokeStop: Number(props.state.smokeStop),
                alcohol: String(props.state.alcohol),
                cage01: String(props.state.cage01),
                cage02: String(props.state.cage02),
                cage03: String(props.state.cage03),
                cage04: String(props.state.cage04),
                drugs: String(props.state.drugs),
                drugsUsed: String(props.state.drugsUsed),
                drugDur: Number(props.state.drugDur),
                stimulants: String(props.state.stimulants),
                stimulantTimingManha: Boolean(props.state.stimulantTimingManha),
                stimulantTimingTarde: Boolean(props.state.stimulantTimingTarde),
                stimulantTimingNoite: Boolean(props.state.stimulantTimingNoite),
                dateSaudeModule1: new Date(),
            }, { merge: true })
        }

        toast('Formulário submetido com sucesso!', 4000);


    }

    function voltaModulos() {
        history.push('/tab1');
    }

    const onSubmit = (data: any) => {
        setData(dataUser);
        setLoader(true);
        updateUserDataQuest1(dataUser);
        voltaModulos();
        // (document.getElementById('button-forms-social') as HTMLInputElement).disabled = false;
    }

    return (
        <IonContent fullscreen color="background">
            <div>
                <IonLabel mode="md">


                    <form className="ion-padding texto-default" onSubmit={handleSubmit(onSubmit)}>
                        <IonLoading message="Por favor aguarde..." duration={2000} isOpen={loader} />


                        <IonLabel className="questions">Você fuma?</IonLabel>
                        <IonList>

                            <IonItem className={"ion-no-padding"} lines="none">


                                <Controller render={({ onChange }) => (
                                    <IonRadioGroup value={fuma} onIonChange={(e) => {
                                        setFuma(e.detail.value);
                                        onChange(e.detail.value);
                                        if (e.detail.value != undefined)
                                            props.setState('smoke', e.detail.value)
                                    }}>

                                        <IonItem className={"ion-no-padding"} lines="none">
                                            <IonLabel >Sim</IonLabel>
                                            <IonRadio slot="start" className={"radio-options"} color="primary" value={"sim"}></IonRadio>
                                        </IonItem>

                                        <IonItem className={"ion-no-padding"} lines="none">
                                            <IonLabel>Não</IonLabel>
                                            <IonRadio slot="start" className={"radio-options"} color="primary" value={"não"}></IonRadio>
                                        </IonItem>
                                    </IonRadioGroup>
                                )} control={control} name={"smoke"} rules={{ required: true }} />
                            </IonItem>
                

                            {/*VOCÊ FUMA? -> SIM */}

                            {fuma === "sim" ?
                                <IonItem  lines="none">
                                  
                                    <Controller render={({ onChange }) => (
                                        <IonSelect interfaceOptions={options} className={"select-interface-option"} okText="ok" cancelText="Cancelar" placeholder="Quantos cigarros você fuma por dia?" onIonChange={(e) => {
                                            console.log(e);
                                            onChange(e.detail.value);
                                            if (e.detail.value != undefined)
                                                props.setState('cigarrets', e.detail.value)
                                        }}>
                                            <IonSelectOption value={"menos que uma carteira de cigarro por dia"}>Menos que uma carteira de cigarro por dia</IonSelectOption>
                                            <IonSelectOption value={"uma a duas carteiras de cigarro por dia"}>Uma a duas carteiras de cigarro por dia</IonSelectOption>
                                            <IonSelectOption value={"mais que duas carteiras de cigarro por dia"}>Mais que duas carteiras de cigarro por dia</IonSelectOption>

                                        </IonSelect>)} control={control} name={"cigarrets"} rules={{ required: true }} />
                                  
                                </IonItem> : null}

                            {fuma === "sim" ?
                                <IonItem lines="none">

                                    <Controller render={({ onChange }) => (
                                        <IonInput placeholder="Há quanto tempo você fuma? (em anos)" onIonChange={(e) => {
                                            console.log(e);
                                            onChange(e.detail.value);
                                            if (e.detail.value != undefined)
                                                props.setState('smokeDur', e.detail.value)
                                        }} />)} control={control} name={"smokeDur"} rules={{ required: true }} />
                                   

                                </IonItem> : null}
                            {/*VOCÊ FUMA? -> SIM */}

                            {/*VOCÊ FUMA? -> NÃO */}

                        </IonList>

                        {fuma === "não" ?
                            <IonList>
                                <IonLabel className="questions" >Você fumou antes?</IonLabel>


                                <IonItem lines="none" className={"ion-no-padding"}>


                                    <Controller render={({ onChange }) => (
                                        <IonRadioGroup value={fumou} onIonChange={(e) => {
                                            setFumou(e.detail.value);
                                            onChange(e.detail.value);
                                            if (e.detail.value != undefined)
                                                props.setState('smokeBef', e.detail.value)
                                        }}>

                                            <IonItem className={"ion-no-padding"} lines="none" >
                                                <IonLabel>Sim</IonLabel>
                                                <IonRadio slot="start" className={"radio-options"} color="primary" value={"sim"}></IonRadio>
                                            </IonItem>

                                            <IonItem className={"ion-no-padding"} lines="none" >
                                                <IonLabel>Não</IonLabel>
                                                <IonRadio slot="start" className={"radio-options"} color="primary" value={"não"}></IonRadio>
                                            </IonItem>
                                        </IonRadioGroup>
                                    )} control={control} name={"smokeBef"} rules={{ required: true }} />
                                </IonItem>
                             

                                {/*VOCÊ FUMOU ANTES? -> SIM */}

                                {fumou === "sim" ?
                                    <IonItem lines="none">
                                        
                                        <Controller render={({ onChange }) => (
                                            <IonSelect interfaceOptions={options} className={"select-interface-option"} okText="ok" cancelText="Cancelar" placeholder="Quantos cigarros você fumava por dia?" onIonChange={(e) => {
                                                console.log(e);
                                                onChange(e.detail.value);
                                                if (e.detail.value != undefined)
                                                    props.setState('cigarretsBef', e.detail.value)
                                            }}>
                                                <IonSelectOption value={"menos que uma carteira de cigarro por dia"}>Menos que uma carteira de cigarro por dia</IonSelectOption>
                                                <IonSelectOption value={"uma a duas carteiras de cigarro por dia"}>Uma a duas carteiras de cigarro por dia</IonSelectOption>
                                                <IonSelectOption value={"mais que duas carteiras de cigarro por dia"}>Mais que duas carteiras de cigarro por dia</IonSelectOption>

                                            </IonSelect>)} control={control} name={'cigarretsBef'} rules={{ required: true }} />
                                       
                                    </IonItem> : null}

                                {fumou === "sim" ?
                                    <IonItem lines="none">

                                        <Controller render={({ onChange }) => (
                                            <IonInput placeholder="Por quanto tempo você fumou? (em anos) " onIonChange={(e) => {
                                                console.log(e);
                                                onChange(e.detail.value);
                                                if (e.detail.value != undefined)
                                                    props.setState('smokeBefDur', e.detail.value)
                                            }} />)} control={control} name={'smokeBefDur'} rules={{ required: true }} />
                                     
                                    </IonItem> : null}

                                {fumou === "sim" ?
                                    <IonItem lines="none">

                                        <Controller render={({ onChange }) => (
                                            <IonInput placeholder="Há quanto tempo você parou de fumar? (em anos)" onIonChange={(e) => {
                                                console.log(e);
                                                onChange(e.detail.value);
                                                if (e.detail.value != undefined)
                                                    props.setState('smokeStop', e.detail.value)
                                            }} />)} control={control} name={'smokeStop'} rules={{ required: true }} />
                                    
                                    </IonItem> : null}

                            </IonList> : null}
                        {/*VOCÊ FUMOU ANTES -> SIM */}

                        <IonLabel className="questions">Você consome bebidas alcoólicas?</IonLabel>
                        <IonList>

                            <IonItem className={"ion-no-padding"} lines="none">


                                <Controller render={({ onChange }) => (
                                    <IonRadioGroup value={bebe} onIonChange={(e) => {
                                        setBebe(e.detail.value);
                                        onChange(e.detail.value);
                                        if (e.detail.value != undefined)
                                            props.setState('alcohol', e.detail.value)
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
                                )} control={control} name={"alcohol"} rules={{ required: true }} />
                            
                            </IonItem>

                            {/*VOCÊ CONSOME BEBIDAS ALCÓOLICAS -> SIM */}

                            {bebe === "sim" ?
                                <IonItem lines="none">
                                    <IonLabel className="questions-inside" >Alguma vez você sentiu que deveria diminuir a quantidade de bebida?</IonLabel>

                                    <Controller render={({ onChange }) => (
                                        <IonRadioGroup onIonChange={(e) => {
                                            console.log(e);
                                            onChange(e.detail.value);
                                            if (e.detail.value != undefined)
                                                props.setState('cage01', e.detail.value)
                                        }}>

                                            <IonItem lines="none">
                                                <IonLabel>Sim</IonLabel>
                                                <IonRadio slot="start" className={"radio-options"} color="primary" value="sim"></IonRadio>
                                            </IonItem>

                                            <IonItem lines="none">
                                                <IonLabel>Não</IonLabel>
                                                <IonRadio slot="start" className={"radio-options"} color="primary" value="não"></IonRadio>
                                            </IonItem>
                                        </IonRadioGroup>)} control={control} name={"cage01"} rules={{ required: true }} />
                                
                                </IonItem> : null}

                            {bebe === "sim" ?
                                <IonItem lines="none">
                                    <IonLabel className="questions-inside">As pessoas o aborrecem porque criticam o seu modo de beber?</IonLabel>

                                    <Controller render={({ onChange }) => (
                                        <IonRadioGroup onIonChange={(e) => {
                                            console.log(e);
                                            onChange(e.detail.value);
                                            if (e.detail.value != undefined)
                                                props.setState('cage02', e.detail.value)
                                        }}>

                                            <IonItem lines="none">
                                                <IonLabel>Sim</IonLabel>
                                                <IonRadio slot="start" className={"radio-options"} color="primary" value="sim"></IonRadio>
                                            </IonItem>

                                            <IonItem lines="none">
                                                <IonLabel>Não</IonLabel>
                                                <IonRadio slot="start" className={"radio-options"} color="primary" value="não"></IonRadio>
                                            </IonItem>
                                        </IonRadioGroup>)} control={control} name={"cage02"} rules={{ required: true }} />
                                
                                </IonItem> : null}

                            {bebe === "sim" ?
                                <IonItem lines="none">
                                    <IonLabel className="questions-inside">Você se sente culpado pela maneira como bebe?</IonLabel>
                                    <Controller render={({ onChange }) => (
                                        <IonRadioGroup onIonChange={(e) => {
                                            console.log(e);
                                            onChange(e.detail.value);
                                            if (e.detail.value != undefined)
                                                props.setState('cage03', e.detail.value)
                                        }}>

                                            <IonItem lines="none">
                                                <IonLabel>Sim</IonLabel>
                                                <IonRadio slot="start" className={"radio-options"} color="primary" value="sim"></IonRadio>
                                            </IonItem>

                                            <IonItem lines="none">
                                                <IonLabel>Não</IonLabel>
                                                <IonRadio slot="start" className={"radio-options"} color="primary" value="não"></IonRadio>
                                            </IonItem>
                                        </IonRadioGroup>)} control={control} name={"cage03"} rules={{ required: true }} />
                                 
                                </IonItem> : null}

                            {bebe === "sim" ?
                                <IonItem lines="none">
                                    <IonLabel className="questions-inside">Você costuma beber de manhã para diminuir o nervosimo ou ressaca?</IonLabel>

                                    <Controller render={({ onChange }) => (
                                        <IonRadioGroup onIonChange={(e) => {
                                            console.log(e);
                                            onChange(e.detail.value);
                                            if (e.detail.value != undefined)
                                                props.setState('cage04', e.detail.value)
                                        }}>

                                            <IonItem lines="none">
                                                <IonLabel>Sim</IonLabel>
                                                <IonRadio slot="start" className={"radio-options"} color="primary" value="sim"></IonRadio>
                                            </IonItem>

                                            <IonItem lines="none">
                                                <IonLabel>Não</IonLabel>
                                                <IonRadio slot="start" className={"radio-options"} color="primary" value="não"></IonRadio>
                                            </IonItem>
                                        </IonRadioGroup>)} control={control} name={"cage04"} rules={{ required: true }} />
                                  
                                </IonItem> : null}

                        </IonList>

                        {/*VOCÊ BEBE -> SIM */}

                                              

                          

                        <IonLabel className="questions">Você faz uso de algum estimulante diariamente (café, chimarrão)?</IonLabel>
                        <IonList>



                            <IonItem className={"ion-no-padding"} lines="none">


                                <Controller render={({ onChange }) => (
                                    <IonRadioGroup value={estimulantes} onIonChange={(e) => {
                                        setEstimulantes(e.detail.value);
                                        onChange(e.detail.value);
                                        if (e.detail.value != undefined)
                                            props.setState('stimulants', e.detail.value)
                                    }}>

                                        <IonItem className={"ion-no-padding"} lines="none">
                                            <IonLabel>Sim</IonLabel>
                                            <IonRadio slot="start" className={"radio-options"} color="primary" value="sim"></IonRadio>
                                        </IonItem>

                                        <IonItem className={"ion-no-padding"} lines="none">
                                            <IonLabel>Não</IonLabel>
                                            <IonRadio slot="start" className={"radio-options"} color="primary" value="não"></IonRadio>
                                        </IonItem>
                                    </IonRadioGroup>)} control={control} name={"stimulants"} rules={{ required: true }} />
                               
                            </IonItem>


                            {estimulantes === "sim" ?
                                <IonItem lines="none">
                                    <IonLabel className="questions-inside">Em qual(is) momento(s) do dia você usa com mais frequência? </IonLabel> </IonItem> : null}
                            {estimulantes === "sim" ?
                                <IonItem lines="none">
                                    <Controller render={({ onChange }) => (
                                        <IonList className={"ion-no-padding"}>
                                            <IonItem lines="none" className={"ion-no-padding"}>
                                                <IonCheckbox className={"checkbox-options"} color="primary" value={props.getState("stimulantTimingManha", false)} onIonChange={(e) => {
                                                     if (e.detail.checked) {
                                                        props.setState('stimulantTimingManha', true)                                                
                                                    } else {
                                                        props.setState('stimulantTimingManha', false)                                                
                                                    }
                                                  
                                                        
                                                }}></IonCheckbox>
                                                <IonLabel>Manhã</IonLabel>
                                            </IonItem>

                                            <IonItem lines="none" className={"ion-no-padding"} >
                                                <IonCheckbox className={"checkbox-options"} color="primary" value={props.getState("stimulantTimingTarde", false)} onIonChange={(e) => {
                                                     if (e.detail.checked) {
                                                        props.setState('stimulantTimingTarde', true)                                                
                                                    } else {
                                                        props.setState('stimulantTimingTarde', false)                                                
                                                    }
                                                }}></IonCheckbox>
                                                <IonLabel>Tarde</IonLabel>
                                            </IonItem>

                                            <IonItem lines="none" className={"ion-no-padding"}>
                                                <IonCheckbox className={"checkbox-options"} color="primary" value={props.getState("stimulantTimingNoite", false)} onIonChange={(e) => {
                                                    if (e.detail.checked) {
                                                        props.setState('stimulantTimingNoite', true)                                                
                                                    } else {
                                                        props.setState('stimulantTimingNoite', false)                                                
                                                    }
                                                }}></IonCheckbox>
                                                <IonLabel>Noite</IonLabel>
                                            </IonItem>


                                        </IonList>)}
                                        control={control}
                                        name={"stimulantTiming"}
                                      //  rules={{required:true}}
                                    />
                                
                                </IonItem> : null}


                        </IonList>

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

export default Saude2;