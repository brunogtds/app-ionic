import React from "react";
import { StepComponentProps } from "react-step-builder";

import { IonItem, IonLabel, IonInput, IonRadioGroup, IonRadio, IonSelect, IonSelectOption, IonButton, IonCheckbox, IonList, IonDatetime, IonLoading, IonRange } from "@ionic/react";
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


            <div className="ion-text-wrap">
                <IonLabel mode="md">

                    <form className="ion-padding texto-default" onSubmit={handleSubmit(onSubmit)}>
                        <IonLoading message="Por favor aguarde..." duration={2000} isOpen={loader} />

                        <div className="ion-text-wrap">

{/*

                            <IonLabel className="questions">Quantas pessoas estão morando na sua residência, além de você?</IonLabel>
                            <IonItem lines="none">


                                <Controller render={({ onChange }) => (
                                    <IonSelect okText="ok" cancelText="Cancelar" placeholder="Por favor, selecione..." value={props.getState("isolationComp", "")} onIonChange={(e) => {
                                        console.log(e);
                                        onChange(e.detail.value);
                                        if (e.detail.value != undefined)
                                            props.setState('isolationComp', e.detail.value)
                                    }}>
                                        <IonSelectOption>0</IonSelectOption>
                                        <IonSelectOption>1</IonSelectOption>
                                        <IonSelectOption>2</IonSelectOption>
                                        <IonSelectOption>3</IonSelectOption>
                                        <IonSelectOption>4</IonSelectOption>
                                        <IonSelectOption>5</IonSelectOption>
                                        <IonSelectOption>6</IonSelectOption>
                                        <IonSelectOption>7</IonSelectOption>
                                        <IonSelectOption>8</IonSelectOption>
                                        <IonSelectOption>Mais que 8</IonSelectOption>
                                    </IonSelect>
                                )}
                                    control={control}
                                    name={"isolationComp"}
                                    rules={{ required: true }}
                                />
                                {errors.isolationComp && <IonText color="danger">Campo obrigatório.</IonText>}

                            </IonItem>


                            <IonLabel className="questions">Sua conexão de internet é: </IonLabel>
                            <IonItem lines="none">

                                <Controller render={({ onChange }) => (
                                    <IonSelect okText="ok" cancelText="Cancelar" placeholder="Por favor, selecione..." onIonChange={(e) => {
                                        console.log(e);
                                        onChange(e.detail.value);
                                        if (e.detail.value != undefined)
                                            props.setState('internet', e.detail.value)
                                    }}>
                                        <IonSelectOption value="muito boa">Muito boa</IonSelectOption>
                                        <IonSelectOption value="boa">Boa</IonSelectOption>
                                        <IonSelectOption value="regular">Regular</IonSelectOption>
                                        <IonSelectOption value="ruim">Ruim</IonSelectOption>

                                    </IonSelect>)} control={control} name={"internet"} rules={{ required: true }} />
                                {errors.internet && <IonText color="danger">Campo obrigatório.</IonText>}
                            </IonItem>

                            <IonLabel className="questions">Com quantas pessoas por dia, aproximadamente, você teve contato (online, incluindo mensagens, ou ao vivo) nas últimas duas semanas? </IonLabel>
                            <IonItem lines="none">


                                <Controller render={({ onChange }) => (
                                    <IonSelect okText="ok" cancelText="Cancelar" placeholder="Por favor, selecione..." onIonChange={(e) => {
                                        console.log(e);
                                        onChange(e.detail.value);
                                        if (e.detail.value != undefined)
                                            props.setState('contactN', e.detail.value)
                                    }}>
                                        <IonSelectOption value="nenhuma">Nenhuma</IonSelectOption>
                                        <IonSelectOption value="1-5">1-5</IonSelectOption>
                                        <IonSelectOption value="5-10">5-10</IonSelectOption>
                                        <IonSelectOption value="10-15">10-15</IonSelectOption>
                                        <IonSelectOption value="15-20">15-20</IonSelectOption>
                                        <IonSelectOption value="Mais de 20">Mais de 20</IonSelectOption>
                                    </IonSelect>)} control={control} name={"contactN"} rules={{ required: true }} />
                                {errors.contactN && <IonText color="danger">Campo obrigatório.</IonText>}
                                </IonItem> */}

                            <IonLabel className="questions">Marque a alternativa que melhor descreve suas atividades no último mês </IonLabel>

                            <IonLabel className="questions">Durante o último mês, mantive distância de, pelo menos, dois metros de outras pessoas quando estava fora de casa:</IonLabel>
                            <IonItem lines="none" className={"ion-no-padding"}>

                           {/*

                            <Controller render={({ onChange }) => (

                                <IonRadioGroup onIonChange={(e) => {
                                    console.log(e);
                                    onChange(e.detail.value);
                                    if (e.detail.value != undefined) {
                                        props.setState('sd1', e.detail.value)
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

                            </IonRadioGroup>)} control={control} name={"sd1"} rules={{ required: true }} /> */}

                                <div className="container">
                                      <Controller render={({ onChange }) => (
                                    <IonRange min={0} max={4} step={1} ticks={true} onIonChange={(e) => props.setState('sd1Final', e.detail.value as number)} pin snaps color="primary">
                                       {/*} <IonIcon size="small" slot="start" icon={sunnyOutline} /> 
                                        
                                    <IonIcon slot="end" icon={sunnyOutline} /> */}

                                
                                       
                                    </IonRange>  )} control={control} name={"sd1Final"}  />
                                    
                                  
                                  <div className="tickmarksSDS">
                                       <p>Nunca</p>
                                      
                                       <p>Raramente</p>
                                                                        
                                       <p>Às 
                                           vezes</p>
                                      
                                       <p>Frequentemente</p>
                                     
                                       <p>Sempre</p>
                                  
                                    
                                   </div>
                                   </div> 

                        </IonItem>
                 

                        <IonLabel className="questions">Durante o último mês, fui em pequenas confraternizações com menos de 10 pessoas em espaços públicos, como parques ou restaurantes:</IonLabel>
                          
                            <IonItem lines="none" className={"ion-no-padding"}>

                         {/*   <Controller render={({ onChange }) => (

                                <IonRadioGroup onIonChange={(e) => {
                                    console.log(e);
                                    onChange(e.detail.value);
                                    if (e.detail.value != undefined) {
                                        props.setState('sd2', e.detail.value)
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

                            </IonRadioGroup>)} control={control} name={"sd2"} rules={{ required: true }} /> */}

                            <div className="container">
                                  <Controller render={({ onChange }) => (
                                    <IonRange min={0} max={4} step={1} ticks={true} onIonChange={(e) => props.setState('sd2Final', e.detail.value as number)} pin snaps color="primary">
                                       {/*} <IonIcon size="small" slot="start" icon={sunnyOutline} /> 
                                        
                                    <IonIcon slot="end" icon={sunnyOutline} /> */}

                                
                                       
                                    </IonRange>  )} control={control} name={"sd2Final"}  />
                                    
                                  
                                  <div className="tickmarksSDS">
                                       <p>Diariamente</p>
                                      
                                       <p>4-6
                                           vezes por semana
                                       </p>
                                                                        
                                       <p>2-3
                                           vezes por semana
                                       </p>
                                      
                                       <p>Uma vez por semana
                                           ou menos
                                       </p>
                                     
                                       <p>Nunca</p>
                                  
                                    
                                   </div>
                                   </div> 

                        </IonItem>


                     

                        
                        <IonLabel className="questions">Durante o último mês, fui em pequenos eventos sociais com menos de 10 pessoas em espaços privados, como a casa de um amigo:</IonLabel>
                            <IonItem lines="none" className={"ion-no-padding"}>

                            {/*}
                            <Controller render={({ onChange }) => (

                                <IonRadioGroup onIonChange={(e) => {
                                    console.log(e);
                                    onChange(e.detail.value);
                                    if (e.detail.value != undefined) {
                                        props.setState('sd3', e.detail.value)
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

                            </IonRadioGroup>)} control={control} name={"sd3"} rules={{ required: true }} /> */}

                             <div className="container">
                                   <Controller render={({ onChange }) => (
                                    <IonRange min={0} max={4} step={1} ticks={true} onIonChange={(e) => props.setState('sd3Final', e.detail.value as number)} pin snaps color="primary">
                                       {/*} <IonIcon size="small" slot="start" icon={sunnyOutline} /> 
                                        
                                    <IonIcon slot="end" icon={sunnyOutline} /> */}

                                
                                       
                                    </IonRange>  )} control={control} name={"sd3Final"}  />
                                    
                                  
                                  <div className="tickmarksSDS">
                                       <p>Diariamente</p>
                                      
                                       <p>4-6
                                           vezes por semana
                                       </p>
                                                                        
                                       <p>2-3
                                           vezes por semana
                                       </p>
                                      
                                       <p>Uma vez por semana
                                           ou menos
                                       </p>
                                     
                                       <p>Nunca</p>
                                  
                                    
                                   </div>
                                   </div> 

                        </IonItem>
                      

                        <IonLabel className="questions">Durante o último mês, fui em lugares cheios e com grande aglomeração de pessoas, como shows e eventos esportivos:</IonLabel>
                            <IonItem lines="none" className={"ion-no-padding"}>

                            {/*

                            <Controller render={({ onChange }) => (

                                <IonRadioGroup onIonChange={(e) => {
                                    console.log(e);
                                    onChange(e.detail.value);
                                    if (e.detail.value != undefined) {
                                        props.setState('sd4', e.detail.value)
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

                            </IonRadioGroup>)} control={control} name={"sd4"} rules={{ required: true }} /> */}

                             <div className="container">
                                    <Controller render={({ onChange }) => (
                                    <IonRange min={0} max={4} step={1} ticks={true} onIonChange={(e) => props.setState('sd4Final', e.detail.value as number)} pin snaps color="primary">
                                       {/*} <IonIcon size="small" slot="start" icon={sunnyOutline} /> 
                                        
                                    <IonIcon slot="end" icon={sunnyOutline} /> */}

                                
                                       
                                    </IonRange>  )} control={control} name={"sd4Final"}  />
                                    
                                  
                                  <div className="tickmarksSDS">
                                       <p>Diariamente</p>
                                      
                                       <p>4-6
                                           vezes por semana
                                       </p>
                                                                        
                                       <p>2-3
                                           vezes por semana
                                       </p>
                                      
                                       <p>Uma vez por semana
                                           ou menos
                                       </p>
                                     
                                       <p>Nunca</p>
                                  
                                    
                                   </div>
                                   </div> 

                        </IonItem>
                     

                        <IonLabel className="questions">Durante o último mês, trabalhei/estudei em casa:</IonLabel>
                            <IonItem lines="none" className={"ion-no-padding"}>

                                {/*

                            <Controller render={({ onChange }) => (

                                <IonRadioGroup onIonChange={(e) => {
                                    console.log(e);
                                    onChange(e.detail.value);
                                    if (e.detail.value != undefined) {
                                        props.setState('sd7', e.detail.value)
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

                            </IonRadioGroup>)} control={control} name={"sd7"} rules={{ required: true }} /> */}

                              <div className="container">
                                    <Controller render={({ onChange }) => (
                                    <IonRange min={0} max={4} step={1} onIonChange={(e) => props.setState('sd7Final', e.detail.value as number)} ticks={true} pin snaps color="primary">
                                       {/*} <IonIcon size="small" slot="start" icon={sunnyOutline} /> 
                                        
                                    <IonIcon slot="end" icon={sunnyOutline} /> */}

                                
                                       
                                    </IonRange>  )} control={control} name={"sd7Final"}  />
                                    
                                  
                                  <div className="tickmarksSDS">
                                       <p>Diariamente</p>
                                      
                                       <p>4-6
                                           vezes por semana
                                       </p>
                                                                        
                                       <p>2-3
                                           vezes por semana
                                       </p>
                                      
                                       <p>Uma vez por semana
                                           ou menos
                                       </p>
                                     
                                       <p>Nunca</p>
                                  
                                    
                                   </div>
                                   </div> 

                        </IonItem>
                       
                        
                        <IonLabel className="questions">Durante o último mês, saí de casa para comprar gás de cozinha, trabalhar, ir ao médico e no mercado:</IonLabel>
                            <IonItem lines="none" className={"ion-no-padding"}>

                            {/*
                            <Controller render={({ onChange }) => (

                                <IonRadioGroup onIonChange={(e) => {
                                    console.log(e);
                                    onChange(e.detail.value);
                                    if (e.detail.value != undefined) {
                                        props.setState('sd9', e.detail.value)
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

                            </IonRadioGroup>)} control={control} name={"sd9"} rules={{ required: true }} /> */}

                             <div className="container">
                                   <Controller render={({ onChange }) => (
                                    <IonRange min={0} max={4} step={1} ticks={true} onIonChange={(e) => props.setState('sd9Final', e.detail.value as number)} pin snaps color="primary">
                                       {/*} <IonIcon size="small" slot="start" icon={sunnyOutline} /> 
                                        
                                    <IonIcon slot="end" icon={sunnyOutline} /> */}

                                
                                       
                                    </IonRange>  )} control={control} name={"sd9Final"}  />
                                    
                                  
                                  <div className="tickmarksSDS">
                                       <p>Diariamente</p>
                                      
                                       <p>4-6
                                           vezes por semana
                                       </p>
                                                                        
                                       <p>2-3
                                           vezes por semana
                                       </p>
                                      
                                       <p>Uma vez por semana
                                           ou menos
                                       </p>
                                     
                                       <p>Nunca</p>
                                  
                                    
                                   </div>
                                   </div> 

                        </IonItem>
                  

                        <IonLabel className="questions">Durante o último mês, nós fizemos pequenas confraternizações com familiares em minha casa ou na casa de algum parente:</IonLabel>
                            <IonItem lines="none" className={"ion-no-padding"}>
                            {/*
                            <Controller render={({ onChange }) => (

                                <IonRadioGroup onIonChange={(e) => {
                                    console.log(e);
                                    onChange(e.detail.value);
                                    if (e.detail.value != undefined) {
                                        props.setState('sd12', e.detail.value)
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

                            </IonRadioGroup>)} control={control} name={"sd12"} rules={{ required: true }} /> */}
                             <div className="container">
                                    <Controller render={({ onChange }) => (
                                    <IonRange min={0} max={4} step={1} onIonChange={(e) => props.setState('sd12Final', e.detail.value as number)} ticks={true} pin snaps color="primary">
                                       {/*} <IonIcon size="small" slot="start" icon={sunnyOutline} /> 
                                        
                                    <IonIcon slot="end" icon={sunnyOutline} /> */}

                                
                                       
                                    </IonRange>  )} control={control} name={"sd12Final"}  />
                                    
                                  
                                  <div className="tickmarksSDS">
                                       <p>Nunca</p>
                                      
                                       <p>Raramente</p>
                                                                        
                                       <p>Às 
                                           vezes</p>
                                      
                                       <p>Frequentemente</p>
                                     
                                       <p>Sempre</p>
                                  
                                    
                                   </div>
                                   </div> 

                        </IonItem>
                       
                     

                        <IonLabel className="questions">Durante o último mês, fui obrigado a ir ao meu local de trabalho ou na escola (fora de casa):</IonLabel>
                            <IonItem lines="none" className={"ion-no-padding"}>

                                {/*

                            <Controller render={({ onChange }) => (

                                <IonRadioGroup onIonChange={(e) => {
                                    console.log(e);
                                    onChange(e.detail.value);
                                    if (e.detail.value != undefined) {
                                        props.setState('sd13', e.detail.value)
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

                            </IonRadioGroup>)} control={control} name={"sd13"} rules={{ required: true }} /> */}

                             <div className="container">
                                    <Controller render={({ onChange }) => (
                                    <IonRange min={0} max={4} step={1} ticks={true} onIonChange={(e) => props.setState('sd13Final', e.detail.value as number)} pin snaps color="primary">
                                       {/*} <IonIcon size="small" slot="start" icon={sunnyOutline} /> 
                                        
                                    <IonIcon slot="end" icon={sunnyOutline} /> */}

                                
                                       
                                    </IonRange>  )} control={control} name={"sd13Final"}  />
                                    
                                  
                                  <div className="tickmarksSDS">
                                       <p>Nunca</p>
                                      
                                       <p>Raramente</p>
                                                                        
                                       <p>Às 
                                           vezes</p>
                                      
                                       <p>Frequentemente</p>
                                     
                                       <p>Sempre</p>
                                  
                                    
                                   </div>
                                   </div> 

                        </IonItem>
                  

                        <IonLabel className="questions">Durante o último mês, consegui manter uma distância de, pelo menos, dois metros de outras pessoas quando estive em meu local de trabalho ou na escola:</IonLabel>
                            <IonItem lines="none" className={"ion-no-padding"}>

                            {/*}

                            <Controller render={({ onChange }) => (

                                <IonRadioGroup onIonChange={(e) => {
                                    console.log(e);
                                    onChange(e.detail.value);
                                    if (e.detail.value != undefined) {
                                        props.setState('sd14', e.detail.value)
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

                            </IonRadioGroup>)} control={control} name={"sd14"} rules={{ required: true }} /> */}

                             <div className="container">
                                    <Controller render={({ onChange }) => (
                                    <IonRange min={0} max={4} step={1} ticks={true} onIonChange={(e) => props.setState('sd14Final', e.detail.value as number)} pin snaps color="primary">
                                       {/*} <IonIcon size="small" slot="start" icon={sunnyOutline} /> 
                                        
                                    <IonIcon slot="end" icon={sunnyOutline} /> */}

                                
                                       
                                    </IonRange>  )} control={control} name={"sd14Final"}  />
                                    
                                  
                                  <div className="tickmarksSDS">
                                       <p>Nunca</p>
                                      
                                       <p>Raramente</p>
                                                                        
                                       <p>Às 
                                           vezes</p>
                                      
                                       <p>Frequentemente</p>
                                     
                                       <p>Sempre</p>
                                  
                                    
                                   </div>
                                   </div> 

                        </IonItem>
                       

                        <IonLabel className="questions">Durante o último mês, usei máscara facial quando estive em lugares públicos, local de trabalho ou na escola:</IonLabel>
                            <IonItem lines="none" className={"ion-no-padding"}>

                                {/*}

                            <Controller render={({ onChange }) => (

                                <IonRadioGroup onIonChange={(e) => {
                                    console.log(e);
                                    onChange(e.detail.value);
                                    if (e.detail.value != undefined) {
                                        props.setState('sd15', e.detail.value)
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

                            </IonRadioGroup>)} control={control} name={"sd15"} rules={{ required: true }} /> */}

                              <div className="container">
                                    <Controller render={({ onChange }) => (
                                    <IonRange min={0} max={4} step={1} ticks={true} onIonChange={(e) => props.setState('sd15Final', e.detail.value as number)} pin snaps color="primary">
                                       {/*} <IonIcon size="small" slot="start" icon={sunnyOutline} /> 
                                        
                                    <IonIcon slot="end" icon={sunnyOutline} /> */}

                                
                                       
                                    </IonRange>  )} control={control} name={"sd15Final"}  />
                                    
                                  
                                  <div className="tickmarksSDS">
                                       <p>Diariamente</p>
                                      
                                       <p>4-6
                                           vezes por semana
                                       </p>
                                                                        
                                       <p>2-3
                                           vezes por semana
                                       </p>
                                      
                                       <p>Uma vez por semana
                                           
                                       </p>
                                     
                                       <p>Nunca</p>
                                  
                                    
                                   </div>
                                   </div> 


                            

                        </IonItem>

                        
                        <IonLabel className="questions">Durante o último mês, quando estive fora de casa, usei desinfetantes para as mãos ou lavei minhas mãos depois de tocar em objetos como maçanetas, teclados e mouses de computador, etc.</IonLabel>
                            <IonItem lines="none" className={"ion-no-padding"}>

                                {/*}

                            <Controller render={({ onChange }) => (

                                <IonRadioGroup onIonChange={(e) => {
                                    console.log(e);
                                    onChange(e.detail.value);
                                    if (e.detail.value != undefined) {
                                        props.setState('sd17', e.detail.value)
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

                            </IonRadioGroup>)} control={control} name={"sd17"} rules={{ required: true }} /> */}

                            <div className="container">
                                    <Controller render={({ onChange }) => (
                                    <IonRange min={0} max={4} step={1} ticks={true}  onIonChange={(e) => props.setState('sd17Final', e.detail.value as number)} pin snaps color="primary">
                                       {/*} <IonIcon size="small" slot="start" icon={sunnyOutline} /> 
                                        
                                    <IonIcon slot="end" icon={sunnyOutline} /> */}

                                
                                       
                                    </IonRange>  )} control={control} name={"sd17Final"}  />
                                    
                                  
                                  <div className="tickmarksSDS">
                                       <p>Diariamente</p>
                                      
                                       <p>4-6
                                           vezes por semana
                                       </p>
                                                                        
                                       <p>2-3
                                           vezes por semana
                                       </p>
                                      
                                       <p>Uma vez por semana
                                           
                                       </p>
                                     
                                       <p>Nunca</p>
                                  
                                    
                                   </div>
                                   </div> 

                        </IonItem>
                       

                        <IonLabel className="questions">Estive fisicamente distante de outras pessoas que não moram na minha casa neste último mês:</IonLabel>
                            <IonItem lines="none" className={"ion-no-padding"}>

                                {/*}

                            <Controller render={({ onChange }) => (

                                <IonRadioGroup onIonChange={(e) => {
                                    console.log(e);
                                    onChange(e.detail.value);
                                    if (e.detail.value != undefined) {
                                        props.setState('pis4', e.detail.value)
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

                            </IonRadioGroup>)} control={control} name={"pis4"} rules={{ required: true }} /> */}

                             <div className="container">
                                    <Controller render={({ onChange }) => (
                                    <IonRange min={0} max={4} step={1} ticks={true} onIonChange={(e) => props.setState('pis4Final', e.detail.value as number)} pin snaps color="primary">
                                       {/*} <IonIcon size="small" slot="start" icon={sunnyOutline} /> 
                                        
                                    <IonIcon slot="end" icon={sunnyOutline} /> */}

                                
                                       
                                    </IonRange>  )} control={control} name={"pis4Final"}  />
                                    
                                  
                                  <div className="tickmarksSDS">
                                       <p>Nunca</p>
                                      
                                       <p>Às vezes</p>
                                                                        
                                       <p>Metade 
                                           do tempo
                                       </p>
                                      
                                       <p>Maior parte
                                           do tempo
                                           
                                       </p>
                                     
                                       <p>Sempre</p>
                                  
                                    
                                   </div>
                                   </div>       



                        </IonItem>
                        

                        
                        <IonLabel className="questions">Visitei familiares mais velhos (quem tem 65 anos ou mais) neste último mês:</IonLabel>
                            <IonItem lines="none" className={"ion-no-padding"}>

                            {/*}
                            <Controller render={({ onChange }) => (

                                <IonRadioGroup onIonChange={(e) => {
                                    console.log(e);
                                    onChange(e.detail.value);
                                    if (e.detail.value != undefined) {
                                        props.setState('pis7', e.detail.value)
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

                            </IonRadioGroup>)} control={control} name={"pis7"} rules={{ required: true }} /> */}

                             <div className="container">
                                    <Controller render={({ onChange }) => (
                                    <IonRange min={0} max={4} step={1} ticks={true} onIonChange={(e) => props.setState('pis7Final', e.detail.value as number)} pin snaps color="primary">
                                       {/*} <IonIcon size="small" slot="start" icon={sunnyOutline} /> 
                                        
                                    <IonIcon slot="end" icon={sunnyOutline} /> */}

                                
                                       
                                    </IonRange>  )} control={control} name={"pis7Final"}  />
                                    
                                  
                                  <div className="tickmarksSDS">
                                       <p>Diariamente</p>
                                      
                                       <p>4-6
                                           vezes por semana
                                       </p>
                                                                        
                                       <p>2-3
                                           vezes por semana
                                       </p>
                                      
                                       <p>Uma vez por semana
                                           ou menos
                                       </p>
                                     
                                       <p>Nunca</p>
                                  
                                    
                                   </div>
                                   </div> 


                        </IonItem>
                      

                          
                        <IonLabel className="questions">Visitei familiares (64 anos ou menos) que moram fora de minha casa neste último mês:</IonLabel>
                            <IonItem lines="none" className={"ion-no-padding"}>

                                {/*

                            <Controller render={({ onChange }) => (

                                <IonRadioGroup onIonChange={(e) => {
                                    console.log(e);
                                    onChange(e.detail.value);
                                    if (e.detail.value != undefined) {
                                        props.setState('pis9', e.detail.value)
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

                            </IonRadioGroup>)} control={control} name={"pis9"} rules={{ required: true }} /> */}
                            <div className="container">
                                    <Controller render={({ onChange }) => (
                                    <IonRange min={0} max={4} step={1} ticks={true} onIonChange={(e) => props.setState('pis9Final', e.detail.value as number)} pin snaps color="primary">
                                       {/*} <IonIcon size="small" slot="start" icon={sunnyOutline} /> 
                                        
                                    <IonIcon slot="end" icon={sunnyOutline} /> */}

                                
                                       
                                    </IonRange>  )} control={control} name={"pis9Final"}  />
                                    
                                  
                                  <div className="tickmarksSDS">
                                       <p>Diariamente</p>
                                      
                                       <p>4-6
                                           vezes por semana
                                       </p>
                                                                        
                                       <p>2-3
                                           vezes por semana
                                       </p>
                                      
                                       <p>Uma vez por semana
                                           ou menos
                                       </p>
                                     
                                       <p>Nunca</p>
                                  
                                    
                                   </div>
                                   </div> 

                        </IonItem>
                        

                        <IonLabel className="questions">Visitei familiares que tem problemas graves de saúde neste último mês:</IonLabel>
                            <IonItem lines="none" className={"ion-no-padding"}>

                            {/*}
                            <Controller render={({ onChange }) => (

                                <IonRadioGroup onIonChange={(e) => {
                                    console.log(e);
                                    onChange(e.detail.value);
                                    if (e.detail.value != undefined) {
                                        props.setState('pis10', e.detail.value)
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

                            </IonRadioGroup>)} control={control} name={"pis10"} rules={{ required: true }} /> */}

                            <div className="container">
                                    <Controller render={({ onChange }) => (
                                    <IonRange min={0} max={4} step={1} ticks={true} onIonChange={(e) => props.setState('pis10Final', e.detail.value as number)} pin snaps color="primary">
                                       {/*} <IonIcon size="small" slot="start" icon={sunnyOutline} /> 
                                        
                                    <IonIcon slot="end" icon={sunnyOutline} /> */}

                                
                                       
                                    </IonRange>  )} control={control} name={"pis10Final"}  />
                                    
                                  
                                  <div className="tickmarksSDS">
                                       <p>Diariamente</p>
                                      
                                       <p>4-6
                                           vezes por semana
                                       </p>
                                                                        
                                       <p>2-3
                                           vezes por semana
                                       </p>
                                      
                                       <p>Uma vez por semana
                                           ou menos
                                       </p>
                                     
                                       <p>Nunca</p>
                                  
                                    
                                   </div>
                                   </div> 

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
                            <IonButton disabled={formState.isValid === false} onClick={onSubmit} size="default" shape="round" className={"btnProximo"} fill="outline" >Submeter</IonButton>

                        </div>
                    </form>
                </IonLabel>
            </div>
        </IonContent>
    )

}

export default ContatoFinal2;