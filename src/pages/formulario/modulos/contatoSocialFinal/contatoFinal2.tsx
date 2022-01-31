import React from "react";
import { StepComponentProps } from "react-step-builder";

import { IonItem, IonLabel, IonInput, IonRadioGroup, IonRadio, IonSelect, IonSelectOption, IonButton, IonCheckbox, IonList, IonDatetime, IonLoading } from "@ionic/react";
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

const ContatoFinal2 = (props: StepComponentProps) => {

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
               // socialDistFinal: String(props.state.socialDistFinal), //STEP 3
               // quarantineRoomFinal: String(props.state.quarantineRoomFinal),
               // contactNFinal: String(props.state.contactNFinal), //FIM

                
                sd1Final: Number(props.state.sd1Final),
                sd2Final: Number(props.state.sd2Final),
                sd3Final: Number(props.state.sd3Final),
                sd4Final: Number(props.state.sd4Final),
                sd7Final: Number(props.state.sd7Final),
                sd9Final: Number(props.state.sd9Final),
                sd12Final: Number(props.state.sd12Final),
                sd13Final: Number(props.state.sd13Final),
                sd14Final: Number(props.state.sd14Final),
                sd15Final: Number(props.state.sd15Final),
                sd17Final: Number(props.state.sd17Final),
                pis4Final: Number(props.state.pis4Final),
                pis7Final: Number(props.state.pis7Final),
                pis9Final: Number(props.state.pis9Final),
                pis10Final: Number(props.state.pis10Final),


                dateContatoFinal: new Date()
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
    }

    const { control, watch, handleSubmit, errors, formState } = useForm({ mode: "onChange" });



    return (
        <IonContent fullscreen color="background">


            <div className="ion-text-wrap ">
                <IonLabel mode="md">

                    <form className="ion-padding texto-default" onSubmit={handleSubmit(onSubmit)}>
                        <IonLoading message="Por favor aguarde..." duration={2000} isOpen={loader} />

                        <div className="ion-text-wrap">

                        {/*    <IonLabel className="questions">Com quantas pessoas por dia, aproximadamente, você teve contato (online, incluindo mensagens, ou ao vivo) nas últimas duas semanas? </IonLabel>
                            <IonItem lines="none">


                                <Controller render={({ onChange }) => (
                                    <IonSelect className={"select-interface-option"} okText="ok" cancelText="Cancelar" placeholder="Por favor, selecione..." onIonChange={(e) => {
                                        console.log(e);
                                        onChange(e.detail.value);
                                        if (e.detail.value != undefined)
                                            props.setState('contactNFinal', e.detail.value)
                                    }}>
                                        <IonSelectOption value="nenhuma">Nenhuma</IonSelectOption>
                                        <IonSelectOption value="1-5">1-5</IonSelectOption>
                                        <IonSelectOption value="5-10">5-10</IonSelectOption>
                                        <IonSelectOption value="10-15">10-15</IonSelectOption>
                                        <IonSelectOption value="15-20">15-20</IonSelectOption>
                                        <IonSelectOption value="Mais de 20">Mais de 20</IonSelectOption>
                                    </IonSelect>)} control={control} name={"contactNFinal"} rules={{ required: true }} />
                                {errors.contactNFinal && <IonText color="danger">Campo obrigatório.</IonText>}
                                </IonItem> */}
 
                              <IonLabel className="questions">Marque a alternativa que melhor descreve suas atividades no ÚLTIMO MÊS (OBS: versão teste antes da validada) </IonLabel>

                            <IonLabel className="questions">Durante o último mês, mantive distância de, pelo menos, dois metros de outras pessoas quando estava fora de casa:</IonLabel>
                            <IonItem lines="none" className={"ion-no-padding"}>

                            <Controller render={({ onChange }) => (

                                <IonRadioGroup onIonChange={(e) => {
                                    console.log(e);
                                    onChange(e.detail.value);
                                    if (e.detail.value != undefined) {
                                        props.setState('sd1Final', e.detail.value)
                                    }
                                }}>

                                    <IonItem lines="none" className={"ion-no-padding"}>
                                        <IonLabel>0</IonLabel>
                                        <IonRadio slot="start" className={"radio-options"} color="primary" value="0"></IonRadio>
                                    </IonItem>

                                    <IonItem lines="none" className={"ion-no-padding"}>
                                        <IonLabel>1</IonLabel>
                                        <IonRadio slot="start" className={"radio-options"} color="primary" value="1"></IonRadio>
                                    </IonItem>

                                    <IonItem lines="none" className={"ion-no-padding"}>
                                        <IonLabel>2</IonLabel>
                                        <IonRadio slot="start" className={"radio-options"} color="primary" value="2"></IonRadio>
                                    </IonItem>

                                    <IonItem lines="none" className={"ion-no-padding"}>
                                        <IonLabel>3</IonLabel>
                                        <IonRadio slot="start" className={"radio-options"} color="primary" value="3"></IonRadio>
                                    </IonItem>

                                    <IonItem lines="none" className={"ion-no-padding"}>
                                        <IonLabel>4</IonLabel>
                                        <IonRadio slot="start" className={"radio-options"} color="primary" value="4"></IonRadio>
                                    </IonItem>

                                </IonRadioGroup>)} control={control} name={"sd1Final"} rules={{ required: true }} />

                        </IonItem>
                        {errors.sd1Final && <IonText color="danger">Campo obrigatório.</IonText>}

                        <IonLabel className="questions">Durante o último mês, fui em pequenas confraternizações com menos de 10 pessoas em espaços públicos, como parques ou restaurantes:</IonLabel>
                            <IonItem lines="none" className={"ion-no-padding"}>

                            <Controller render={({ onChange }) => (

                                <IonRadioGroup onIonChange={(e) => {
                                    console.log(e);
                                    onChange(e.detail.value);
                                    if (e.detail.value != undefined) {
                                        props.setState('sd2Final', e.detail.value)
                                    }
                                }}>

                                    <IonItem lines="none" className={"ion-no-padding"}>
                                        <IonLabel>0</IonLabel>
                                        <IonRadio slot="start" className={"radio-options"} color="primary" value="0"></IonRadio>
                                    </IonItem>

                                    <IonItem lines="none" className={"ion-no-padding"}>
                                        <IonLabel>1</IonLabel>
                                        <IonRadio slot="start" className={"radio-options"} color="primary" value="1"></IonRadio>
                                    </IonItem>

                                    <IonItem lines="none" className={"ion-no-padding"}>
                                        <IonLabel>2</IonLabel>
                                        <IonRadio slot="start" className={"radio-options"} color="primary" value="2"></IonRadio>
                                    </IonItem>

                                    <IonItem lines="none" className={"ion-no-padding"}>
                                        <IonLabel>3</IonLabel>
                                        <IonRadio slot="start" className={"radio-options"} color="primary" value="3"></IonRadio>
                                    </IonItem>

                                    <IonItem lines="none" className={"ion-no-padding"}>
                                        <IonLabel>4</IonLabel>
                                        <IonRadio slot="start" className={"radio-options"} color="primary" value="4"></IonRadio>
                                    </IonItem>

                                </IonRadioGroup>)} control={control} name={"sd2Final"} rules={{ required: true }} />

                        </IonItem>
                        {errors.sd2Final && <IonText color="danger">Campo obrigatório.</IonText>}

                        
                        <IonLabel className="questions">Durante o último mês, fui em pequenos eventos sociais com menos de 10 pessoas em espaços privados, como a casa de um amigo:</IonLabel>
                            <IonItem lines="none" className={"ion-no-padding"}>

                            <Controller render={({ onChange }) => (

                                <IonRadioGroup onIonChange={(e) => {
                                    console.log(e);
                                    onChange(e.detail.value);
                                    if (e.detail.value != undefined) {
                                        props.setState('sd3Final', e.detail.value)
                                    }
                                }}>

                                    <IonItem lines="none" className={"ion-no-padding"}>
                                        <IonLabel>0</IonLabel>
                                        <IonRadio slot="start" className={"radio-options"} color="primary" value="0"></IonRadio>
                                    </IonItem>

                                    <IonItem lines="none" className={"ion-no-padding"}>
                                        <IonLabel>1</IonLabel>
                                        <IonRadio slot="start" className={"radio-options"} color="primary" value="1"></IonRadio>
                                    </IonItem>

                                    <IonItem lines="none" className={"ion-no-padding"}>
                                        <IonLabel>2</IonLabel>
                                        <IonRadio slot="start" className={"radio-options"} color="primary" value="2"></IonRadio>
                                    </IonItem>

                                    <IonItem lines="none" className={"ion-no-padding"}>
                                        <IonLabel>3</IonLabel>
                                        <IonRadio slot="start" className={"radio-options"} color="primary" value="3"></IonRadio>
                                    </IonItem>

                                    <IonItem lines="none" className={"ion-no-padding"}>
                                        <IonLabel>4</IonLabel>
                                        <IonRadio slot="start" className={"radio-options"} color="primary" value="4"></IonRadio>
                                    </IonItem>

                                </IonRadioGroup>)} control={control} name={"sd3Final"} rules={{ required: true }} />

                        </IonItem>
                        {errors.sd3Final && <IonText color="danger">Campo obrigatório.</IonText>}

                        <IonLabel className="questions">Durante o último mês, fui em lugares cheios e com grande aglomeração de pessoas, como shows e eventos esportivos:</IonLabel>
                            <IonItem lines="none" className={"ion-no-padding"}>

                            <Controller render={({ onChange }) => (

                                <IonRadioGroup onIonChange={(e) => {
                                    console.log(e);
                                    onChange(e.detail.value);
                                    if (e.detail.value != undefined) {
                                        props.setState('sd4Final', e.detail.value)
                                    }
                                }}>

                                    <IonItem lines="none" className={"ion-no-padding"}>
                                        <IonLabel>0</IonLabel>
                                        <IonRadio slot="start" className={"radio-options"} color="primary" value="0"></IonRadio>
                                    </IonItem>

                                    <IonItem lines="none" className={"ion-no-padding"}>
                                        <IonLabel>1</IonLabel>
                                        <IonRadio slot="start" className={"radio-options"} color="primary" value="1"></IonRadio>
                                    </IonItem>

                                    <IonItem lines="none" className={"ion-no-padding"}>
                                        <IonLabel>2</IonLabel>
                                        <IonRadio slot="start" className={"radio-options"} color="primary" value="2"></IonRadio>
                                    </IonItem>

                                    <IonItem lines="none" className={"ion-no-padding"}>
                                        <IonLabel>3</IonLabel>
                                        <IonRadio slot="start" className={"radio-options"} color="primary" value="3"></IonRadio>
                                    </IonItem>

                                    <IonItem lines="none" className={"ion-no-padding"}>
                                        <IonLabel>4</IonLabel>
                                        <IonRadio slot="start" className={"radio-options"} color="primary" value="4"></IonRadio>
                                    </IonItem>

                                </IonRadioGroup>)} control={control} name={"sd4Final"} rules={{ required: true }} />

                        </IonItem>
                        {errors.sd4Final && <IonText color="danger">Campo obrigatório.</IonText>}

                        <IonLabel className="questions">Durante o último mês, trabalhei/estudei em casa:</IonLabel>
                            <IonItem lines="none" className={"ion-no-padding"}>

                            <Controller render={({ onChange }) => (

                                <IonRadioGroup onIonChange={(e) => {
                                    console.log(e);
                                    onChange(e.detail.value);
                                    if (e.detail.value != undefined) {
                                        props.setState('sd7Final', e.detail.value)
                                    }
                                }}>

                                    <IonItem lines="none" className={"ion-no-padding"}>
                                        <IonLabel>0</IonLabel>
                                        <IonRadio slot="start" className={"radio-options"} color="primary" value="0"></IonRadio>
                                    </IonItem>

                                    <IonItem lines="none" className={"ion-no-padding"}>
                                        <IonLabel>1</IonLabel>
                                        <IonRadio slot="start" className={"radio-options"} color="primary" value="1"></IonRadio>
                                    </IonItem>

                                    <IonItem lines="none" className={"ion-no-padding"}>
                                        <IonLabel>2</IonLabel>
                                        <IonRadio slot="start" className={"radio-options"} color="primary" value="2"></IonRadio>
                                    </IonItem>

                                    <IonItem lines="none" className={"ion-no-padding"}>
                                        <IonLabel>3</IonLabel>
                                        <IonRadio slot="start" className={"radio-options"} color="primary" value="3"></IonRadio>
                                    </IonItem>

                                    <IonItem lines="none" className={"ion-no-padding"}>
                                        <IonLabel>4</IonLabel>
                                        <IonRadio slot="start" className={"radio-options"} color="primary" value="4"></IonRadio>
                                    </IonItem>

                                </IonRadioGroup>)} control={control} name={"sd7Final"} rules={{ required: true }} />

                        </IonItem>
                        {errors.sd7Final && <IonText color="danger">Campo obrigatório.</IonText>}

                        
                        <IonLabel className="questions">Durante o último mês, saí de casa para comprar gás de cozinha, trabalhar, ir ao médico e no mercado:</IonLabel>
                            <IonItem lines="none" className={"ion-no-padding"}>

                            <Controller render={({ onChange }) => (

                                <IonRadioGroup onIonChange={(e) => {
                                    console.log(e);
                                    onChange(e.detail.value);
                                    if (e.detail.value != undefined) {
                                        props.setState('sd9Final', e.detail.value)
                                    }
                                }}>

                                    <IonItem lines="none" className={"ion-no-padding"}>
                                        <IonLabel>0</IonLabel>
                                        <IonRadio slot="start" className={"radio-options"} color="primary" value="0"></IonRadio>
                                    </IonItem>

                                    <IonItem lines="none" className={"ion-no-padding"}>
                                        <IonLabel>1</IonLabel>
                                        <IonRadio slot="start" className={"radio-options"} color="primary" value="1"></IonRadio>
                                    </IonItem>

                                    <IonItem lines="none" className={"ion-no-padding"}>
                                        <IonLabel>2</IonLabel>
                                        <IonRadio slot="start" className={"radio-options"} color="primary" value="2"></IonRadio>
                                    </IonItem>

                                    <IonItem lines="none" className={"ion-no-padding"}>
                                        <IonLabel>3</IonLabel>
                                        <IonRadio slot="start" className={"radio-options"} color="primary" value="3"></IonRadio>
                                    </IonItem>

                                    <IonItem lines="none" className={"ion-no-padding"}>
                                        <IonLabel>4</IonLabel>
                                        <IonRadio slot="start" className={"radio-options"} color="primary" value="4"></IonRadio>
                                    </IonItem>

                                </IonRadioGroup>)} control={control} name={"sd9Final"} rules={{ required: true }} />

                        </IonItem>
                        {errors.sd9Final && <IonText color="danger">Campo obrigatório.</IonText>}

                        <IonLabel className="questions">Durante o último mês, nós fizemos pequenas confraternizações com familiares em minha casa ou na casa de algum parente:</IonLabel>
                            <IonItem lines="none" className={"ion-no-padding"}>

                            <Controller render={({ onChange }) => (

                                <IonRadioGroup onIonChange={(e) => {
                                    console.log(e);
                                    onChange(e.detail.value);
                                    if (e.detail.value != undefined) {
                                        props.setState('sd12Final', e.detail.value)
                                    }
                                }}>

                                    <IonItem lines="none" className={"ion-no-padding"}>
                                        <IonLabel>0</IonLabel>
                                        <IonRadio slot="start" className={"radio-options"} color="primary" value="0"></IonRadio>
                                    </IonItem>

                                    <IonItem lines="none" className={"ion-no-padding"}>
                                        <IonLabel>1</IonLabel>
                                        <IonRadio slot="start" className={"radio-options"} color="primary" value="1"></IonRadio>
                                    </IonItem>

                                    <IonItem lines="none" className={"ion-no-padding"}>
                                        <IonLabel>2</IonLabel>
                                        <IonRadio slot="start" className={"radio-options"} color="primary" value="2"></IonRadio>
                                    </IonItem>

                                    <IonItem lines="none" className={"ion-no-padding"}>
                                        <IonLabel>3</IonLabel>
                                        <IonRadio slot="start" className={"radio-options"} color="primary" value="3"></IonRadio>
                                    </IonItem>

                                    <IonItem lines="none" className={"ion-no-padding"}>
                                        <IonLabel>4</IonLabel>
                                        <IonRadio slot="start" className={"radio-options"} color="primary" value="4"></IonRadio>
                                    </IonItem>

                                </IonRadioGroup>)} control={control} name={"sd12Final"} rules={{ required: true }} />

                        </IonItem>
                        {errors.sd12Final && <IonText color="danger">Campo obrigatório.</IonText>}

                        <IonLabel className="questions">Durante o último mês, fui obrigado a ir ao meu local de trabalho ou na escola (fora de casa):</IonLabel>
                            <IonItem lines="none" className={"ion-no-padding"}>

                            <Controller render={({ onChange }) => (

                                <IonRadioGroup onIonChange={(e) => {
                                    console.log(e);
                                    onChange(e.detail.value);
                                    if (e.detail.value != undefined) {
                                        props.setState('sd13Final', e.detail.value)
                                    }
                                }}>

                                    <IonItem lines="none" className={"ion-no-padding"}>
                                        <IonLabel>0</IonLabel>
                                        <IonRadio slot="start" className={"radio-options"} color="primary" value="0"></IonRadio>
                                    </IonItem>

                                    <IonItem lines="none" className={"ion-no-padding"}>
                                        <IonLabel>1</IonLabel>
                                        <IonRadio slot="start" className={"radio-options"} color="primary" value="1"></IonRadio>
                                    </IonItem>

                                    <IonItem lines="none" className={"ion-no-padding"}>
                                        <IonLabel>2</IonLabel>
                                        <IonRadio slot="start" className={"radio-options"} color="primary" value="2"></IonRadio>
                                    </IonItem>

                                    <IonItem lines="none" className={"ion-no-padding"}>
                                        <IonLabel>3</IonLabel>
                                        <IonRadio slot="start" className={"radio-options"} color="primary" value="3"></IonRadio>
                                    </IonItem>

                                    <IonItem lines="none" className={"ion-no-padding"}>
                                        <IonLabel>4</IonLabel>
                                        <IonRadio slot="start" className={"radio-options"} color="primary" value="4"></IonRadio>
                                    </IonItem>

                                </IonRadioGroup>)} control={control} name={"sd13Final"} rules={{ required: true }} />

                        </IonItem>
                        {errors.sd13Final && <IonText color="danger">Campo obrigatório.</IonText>}

                        <IonLabel className="questions">Durante o último mês, consegui manter uma distância de, pelo menos, dois metros de outras pessoas quando estive em meu local de trabalho ou na escola:</IonLabel>
                            <IonItem lines="none" className={"ion-no-padding"}>

                            <Controller render={({ onChange }) => (

                                <IonRadioGroup onIonChange={(e) => {
                                    console.log(e);
                                    onChange(e.detail.value);
                                    if (e.detail.value != undefined) {
                                        props.setState('sd14Final', e.detail.value)
                                    }
                                }}>

                                    <IonItem lines="none" className={"ion-no-padding"}>
                                        <IonLabel>0</IonLabel>
                                        <IonRadio slot="start" className={"radio-options"} color="primary" value="0"></IonRadio>
                                    </IonItem>

                                    <IonItem lines="none" className={"ion-no-padding"}>
                                        <IonLabel>1</IonLabel>
                                        <IonRadio slot="start" className={"radio-options"} color="primary" value="1"></IonRadio>
                                    </IonItem>

                                    <IonItem lines="none" className={"ion-no-padding"}>
                                        <IonLabel>2</IonLabel>
                                        <IonRadio slot="start" className={"radio-options"} color="primary" value="2"></IonRadio>
                                    </IonItem>

                                    <IonItem lines="none" className={"ion-no-padding"}>
                                        <IonLabel>3</IonLabel>
                                        <IonRadio slot="start" className={"radio-options"} color="primary" value="3"></IonRadio>
                                    </IonItem>

                                    <IonItem lines="none" className={"ion-no-padding"}>
                                        <IonLabel>4</IonLabel>
                                        <IonRadio slot="start" className={"radio-options"} color="primary" value="4"></IonRadio>
                                    </IonItem>

                                </IonRadioGroup>)} control={control} name={"sd14Final"} rules={{ required: true }} />

                        </IonItem>
                        {errors.sd14Final && <IonText color="danger">Campo obrigatório.</IonText>}

                        <IonLabel className="questions">Durante o último mês, usei máscara facial quando estive em lugares públicos, local de trabalho ou na escola:</IonLabel>
                            <IonItem lines="none" className={"ion-no-padding"}>

                            <Controller render={({ onChange }) => (

                                <IonRadioGroup onIonChange={(e) => {
                                    console.log(e);
                                    onChange(e.detail.value);
                                    if (e.detail.value != undefined) {
                                        props.setState('sd15Final', e.detail.value)
                                    }
                                }}>

                                    <IonItem lines="none" className={"ion-no-padding"}>
                                        <IonLabel>0</IonLabel>
                                        <IonRadio slot="start" className={"radio-options"} color="primary" value="0"></IonRadio>
                                    </IonItem>

                                    <IonItem lines="none" className={"ion-no-padding"}>
                                        <IonLabel>1</IonLabel>
                                        <IonRadio slot="start" className={"radio-options"} color="primary" value="1"></IonRadio>
                                    </IonItem>

                                    <IonItem lines="none" className={"ion-no-padding"}>
                                        <IonLabel>2</IonLabel>
                                        <IonRadio slot="start" className={"radio-options"} color="primary" value="2"></IonRadio>
                                    </IonItem>

                                    <IonItem lines="none" className={"ion-no-padding"}>
                                        <IonLabel>3</IonLabel>
                                        <IonRadio slot="start" className={"radio-options"} color="primary" value="3"></IonRadio>
                                    </IonItem>

                                    <IonItem lines="none" className={"ion-no-padding"}>
                                        <IonLabel>4</IonLabel>
                                        <IonRadio slot="start" className={"radio-options"} color="primary" value="4"></IonRadio>
                                    </IonItem>

                                </IonRadioGroup>)} control={control} name={"sd15Final"} rules={{ required: true }} />

                        </IonItem>
                        {errors.sd15Final && <IonText color="danger">Campo obrigatório.</IonText>}

                        
                        <IonLabel className="questions">Durante o último mês, quando estive fora de casa, usei desinfetantes para as mãos ou lavei minhas mãos depois de tocar em objetos como maçanetas, teclados e mouses de computador, etc.</IonLabel>
                            <IonItem lines="none" className={"ion-no-padding"}>

                            <Controller render={({ onChange }) => (

                                <IonRadioGroup onIonChange={(e) => {
                                    console.log(e);
                                    onChange(e.detail.value);
                                    if (e.detail.value != undefined) {
                                        props.setState('sd17Final', e.detail.value)
                                    }
                                }}>

                                    <IonItem lines="none" className={"ion-no-padding"}>
                                        <IonLabel>0</IonLabel>
                                        <IonRadio slot="start" className={"radio-options"} color="primary" value="0"></IonRadio>
                                    </IonItem>

                                    <IonItem lines="none" className={"ion-no-padding"}>
                                        <IonLabel>1</IonLabel>
                                        <IonRadio slot="start" className={"radio-options"} color="primary" value="1"></IonRadio>
                                    </IonItem>

                                    <IonItem lines="none" className={"ion-no-padding"}>
                                        <IonLabel>2</IonLabel>
                                        <IonRadio slot="start" className={"radio-options"} color="primary" value="2"></IonRadio>
                                    </IonItem>

                                    <IonItem lines="none" className={"ion-no-padding"}>
                                        <IonLabel>3</IonLabel>
                                        <IonRadio slot="start" className={"radio-options"} color="primary" value="3"></IonRadio>
                                    </IonItem>

                                    <IonItem lines="none" className={"ion-no-padding"}>
                                        <IonLabel>4</IonLabel>
                                        <IonRadio slot="start" className={"radio-options"} color="primary" value="4"></IonRadio>
                                    </IonItem>

                                </IonRadioGroup>)} control={control} name={"sd17Final"} rules={{ required: true }} />

                        </IonItem>
                        {errors.sd17Final && <IonText color="danger">Campo obrigatório.</IonText>}

                        <IonLabel className="questions">Estive fisicamente distante de outras pessoas que não moram na minha casa neste último mês:</IonLabel>
                            <IonItem lines="none" className={"ion-no-padding"}>

                            <Controller render={({ onChange }) => (

                                <IonRadioGroup onIonChange={(e) => {
                                    console.log(e);
                                    onChange(e.detail.value);
                                    if (e.detail.value != undefined) {
                                        props.setState('pis4Final', e.detail.value)
                                    }
                                }}>

                                    <IonItem lines="none" className={"ion-no-padding"}>
                                        <IonLabel>0</IonLabel>
                                        <IonRadio slot="start" className={"radio-options"} color="primary" value="0"></IonRadio>
                                    </IonItem>

                                    <IonItem lines="none" className={"ion-no-padding"}>
                                        <IonLabel>1</IonLabel>
                                        <IonRadio slot="start" className={"radio-options"} color="primary" value="1"></IonRadio>
                                    </IonItem>

                                    <IonItem lines="none" className={"ion-no-padding"}>
                                        <IonLabel>2</IonLabel>
                                        <IonRadio slot="start" className={"radio-options"} color="primary" value="2"></IonRadio>
                                    </IonItem>

                                    <IonItem lines="none" className={"ion-no-padding"}>
                                        <IonLabel>3</IonLabel>
                                        <IonRadio slot="start" className={"radio-options"} color="primary" value="3"></IonRadio>
                                    </IonItem>

                                    <IonItem lines="none" className={"ion-no-padding"}>
                                        <IonLabel>4</IonLabel>
                                        <IonRadio slot="start" className={"radio-options"} color="primary" value="4"></IonRadio>
                                    </IonItem>

                                </IonRadioGroup>)} control={control} name={"pis4Final"} rules={{ required: true }} />

                        </IonItem>
                        {errors.pis4Final && <IonText color="danger">Campo obrigatório.</IonText>}

                        
                        <IonLabel className="questions">Visitei familiares mais velhos (quem tem 65 anos ou mais) neste último mês:</IonLabel>
                            <IonItem lines="none" className={"ion-no-padding"}>

                            <Controller render={({ onChange }) => (

                                <IonRadioGroup onIonChange={(e) => {
                                    console.log(e);
                                    onChange(e.detail.value);
                                    if (e.detail.value != undefined) {
                                        props.setState('pis7Final', e.detail.value)
                                    }
                                }}>

                                    <IonItem lines="none" className={"ion-no-padding"}>
                                        <IonLabel>0</IonLabel>
                                        <IonRadio slot="start" className={"radio-options"} color="primary" value="0"></IonRadio>
                                    </IonItem>

                                    <IonItem lines="none" className={"ion-no-padding"}>
                                        <IonLabel>1</IonLabel>
                                        <IonRadio slot="start" className={"radio-options"} color="primary" value="1"></IonRadio>
                                    </IonItem>

                                    <IonItem lines="none" className={"ion-no-padding"}>
                                        <IonLabel>2</IonLabel>
                                        <IonRadio slot="start" className={"radio-options"} color="primary" value="2"></IonRadio>
                                    </IonItem>

                                    <IonItem lines="none" className={"ion-no-padding"}>
                                        <IonLabel>3</IonLabel>
                                        <IonRadio slot="start" className={"radio-options"} color="primary" value="3"></IonRadio>
                                    </IonItem>

                                    <IonItem lines="none" className={"ion-no-padding"}>
                                        <IonLabel>4</IonLabel>
                                        <IonRadio slot="start" className={"radio-options"} color="primary" value="4"></IonRadio>
                                    </IonItem>

                                </IonRadioGroup>)} control={control} name={"pis7Final"} rules={{ required: true }} />

                        </IonItem>
                        {errors.pis7Final && <IonText color="danger">Campo obrigatório.</IonText>}

                          
                        <IonLabel className="questions">Visitei familiares (64 anos ou menos) que moram fora de minha casa neste último mês:</IonLabel>
                            <IonItem lines="none" className={"ion-no-padding"}>

                            <Controller render={({ onChange }) => (

                                <IonRadioGroup onIonChange={(e) => {
                                    console.log(e);
                                    onChange(e.detail.value);
                                    if (e.detail.value != undefined) {
                                        props.setState('pis9Final', e.detail.value)
                                    }
                                }}>

                                    <IonItem lines="none" className={"ion-no-padding"}>
                                        <IonLabel>0</IonLabel>
                                        <IonRadio slot="start" className={"radio-options"} color="primary" value="0"></IonRadio>
                                    </IonItem>

                                    <IonItem lines="none" className={"ion-no-padding"}>
                                        <IonLabel>1</IonLabel>
                                        <IonRadio slot="start" className={"radio-options"} color="primary" value="1"></IonRadio>
                                    </IonItem>

                                    <IonItem lines="none" className={"ion-no-padding"}>
                                        <IonLabel>2</IonLabel>
                                        <IonRadio slot="start" className={"radio-options"} color="primary" value="2"></IonRadio>
                                    </IonItem>

                                    <IonItem lines="none" className={"ion-no-padding"}>
                                        <IonLabel>3</IonLabel>
                                        <IonRadio slot="start" className={"radio-options"} color="primary" value="3"></IonRadio>
                                    </IonItem>

                                    <IonItem lines="none" className={"ion-no-padding"}>
                                        <IonLabel>4</IonLabel>
                                        <IonRadio slot="start" className={"radio-options"} color="primary" value="4"></IonRadio>
                                    </IonItem>

                                </IonRadioGroup>)} control={control} name={"pis9Final"} rules={{ required: true }} />

                        </IonItem>
                        {errors.pis9Final && <IonText color="danger">Campo obrigatório.</IonText>}

                        <IonLabel className="questions">Visitei familiares que tem problemas graves de saúde neste último mês:</IonLabel>
                            <IonItem lines="none" className={"ion-no-padding"}>

                            <Controller render={({ onChange }) => (

                                <IonRadioGroup onIonChange={(e) => {
                                    console.log(e);
                                    onChange(e.detail.value);
                                    if (e.detail.value != undefined) {
                                        props.setState('pis10Final', e.detail.value)
                                    }
                                }}>

                                    <IonItem lines="none" className={"ion-no-padding"}>
                                        <IonLabel>0</IonLabel>
                                        <IonRadio slot="start" className={"radio-options"} color="primary" value="0"></IonRadio>
                                    </IonItem>

                                    <IonItem lines="none" className={"ion-no-padding"}>
                                        <IonLabel>1</IonLabel>
                                        <IonRadio slot="start" className={"radio-options"} color="primary" value="1"></IonRadio>
                                    </IonItem>

                                    <IonItem lines="none" className={"ion-no-padding"}>
                                        <IonLabel>2</IonLabel>
                                        <IonRadio slot="start" className={"radio-options"} color="primary" value="2"></IonRadio>
                                    </IonItem>

                                    <IonItem lines="none" className={"ion-no-padding"}>
                                        <IonLabel>3</IonLabel>
                                        <IonRadio slot="start" className={"radio-options"} color="primary" value="3"></IonRadio>
                                    </IonItem>

                                    <IonItem lines="none" className={"ion-no-padding"}>
                                        <IonLabel>4</IonLabel>
                                        <IonRadio slot="start" className={"radio-options"} color="primary" value="4"></IonRadio>
                                    </IonItem>

                                </IonRadioGroup>)} control={control} name={"pis10Final"} rules={{ required: true }} />

                        </IonItem>
                        {errors.pis10Final && <IonText color="danger">Campo obrigatório.</IonText>}


                            <div id="progress-bar-div" >
                                <IonProgressBar className={"progress-bar"} value={1.0} color="orange"></IonProgressBar>
                            </div>

                            <IonButton onClick={props.prev} className="btnAnterior" size="default" shape="round" fill="outline">Anterior</IonButton>
                            <IonButton disabled={formState.isValid === false} onClick={onSubmit} size="default" shape="round" className={"btnProximo"} fill="outline" >Submeter</IonButton>

                        </div>
                    </form>

                </IonLabel>
            </div>
        </IonContent>
    )

}

export default ContatoFinal2;