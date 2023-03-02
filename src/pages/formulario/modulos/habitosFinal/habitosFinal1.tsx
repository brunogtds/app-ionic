import React from "react";
import { StepComponentProps } from "react-step-builder";

import { IonItem, IonLabel, IonInput, IonRadioGroup, IonRadio, IonSelect, IonSelectOption, IonButton, IonCheckbox, IonList, IonDatetime, IonNote } from "@ionic/react";
import { IonContent, IonText } from '@ionic/react';

import '../../Forms.css';

import { useForm, Controller } from "react-hook-form";
import { useState } from 'react';

import { IonProgressBar } from '@ionic/react';
import { daysToWeeks } from "date-fns/fp";
import { useRemoteConfigString } from "reactfire";

const HabitosFinal1 = (props: StepComponentProps) => {

    const options = {
        cssClass: 'my-custom-interface'
    };

    const { control, watch, handleSubmit, errors, formState } = useForm({ mode: "onChange" });


    const [diasTrabalho, setDiasTrabalho] = useState();
    const [horasTrabalhoRegulares, setHorasTrabalhoRegulares] = useState();
    const [FDonWDFinal, setFDonWDFinal] = useState();
    
    const [lightExposureFinal, setLightExposureFinal] = useState();
    const [lightRegFinal, setLightRegFinal] = useState();
    const [lightECompFinal, setlightECompFinal] = useState();
    
    const datas = [

        {nome: "atual", data: new Date()},
        {nome: "ontem", data: new Date(new Date().setDate(new Date().getDate()-1))}

    ];

    const timeformatBD: Intl.DateTimeFormatOptions = {
        
        year: 'numeric',
        month: 'numeric',
        day: 'numeric',
    
    };

    const timeformat: Intl.DateTimeFormatOptions = {
        weekday: 'short',
        year: 'numeric',
        month: 'numeric',
        day: 'numeric',
    
    };
    var dia_Atual= new Date();
    var dia_Anterior1= new Date(new Date().setDate(new Date().getDate()-1));
    var dia_Anterior2= new Date(new Date().setDate(new Date().getDate()-2));
    var dia_Anterior3= new Date(new Date().setDate(new Date().getDate()-3));
    var dia_Anterior4= new Date(new Date().setDate(new Date().getDate()-4));
    var dia_Anterior5= new Date(new Date().setDate(new Date().getDate()-5));
    var dia_Anterior6= new Date(new Date().setDate(new Date().getDate()-6));
    var dia_Anterior7= new Date(new Date().setDate(new Date().getDate()-7));
    var dia_Anterior8= new Date(new Date().setDate(new Date().getDate()-8));
    var dia_Anterior9= new Date(new Date().setDate(new Date().getDate()-9));
    var dia_Anterior10= new Date(new Date().setDate(new Date().getDate()-10));
    var dia_Anterior11= new Date(new Date().setDate(new Date().getDate()-11));
    var dia_Anterior12= new Date(new Date().setDate(new Date().getDate()-12));
    var dia_Anterior13= new Date(new Date().setDate(new Date().getDate()-13));
    var dia_Anterior14= new Date(new Date().setDate(new Date().getDate()-14));


    return (
        <IonContent fullscreen color="background">


            <div className="ion-text-wrap">
                <IonLabel mode="md">

                    <form className="ion-padding texto-default">
                        <div className="texto-title">Hábitos</div>
                        <div className="texto-default">Para receber dicas personalizadas, preencha para sabermos mais sobre você e seus hábitos!</div>

                        <div className="ion-text-wrap texto-default">

                            <IonLabel className="questions">Nas duas últimas semanas você trabalhou de segunda a sexta e seus dias livres foram sábado e domingo? </IonLabel>
                            <IonNote>Considere como dias livres os dias em que você não teve compromissos fixos, como estudo, trabalho, trabalho doméstico, etc.</IonNote>
                            <IonItem mode="md" className={"ion-no-padding"} lines="none">


                                <Controller render={({ onChange }) => (
                                    <IonRadioGroup value={FDonWDFinal} onIonChange={(e) => {
                                        setFDonWDFinal(e.detail.value);
                                        onChange(e.detail.value);
                                        if (e.detail.value != undefined)
                                            props.setState('FDonWDFinal', e.detail.value)
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
                                    name={"FDonWDFinal"}
                                />
                            </IonItem>

                            {(FDonWDFinal === "não") ? 

                            <IonLabel className="questions">Marque os dias livres, em que você não teve compromissos (por exemplo: estudo, trabalho, trabalho doméstico), nas duas últimas semanas: </IonLabel>
                            : null}
                           
                            <IonList>
                           
                            {(FDonWDFinal === "não") ? 
                                <IonItem lines="none">

                                    <Controller render={({ onChange }) => (
                                        <IonSelect multiple={true} interfaceOptions={options} className={"select-interface-option"} okText="ok" cancelText="Cancelar" placeholder="Por favor, selecione..." value={diasTrabalho} onIonChange={(e) => {
                                            
                                            
                                            onChange(e.detail.value);
                                            if (e.detail.value != undefined)
                                                 setDiasTrabalho(e.detail.value);
                                                console.log('dias de trabalho...' + diasTrabalho);
                                                props.setState('fdQFinal', e.detail.value)
                                            }}>
                                           
                                            <IonSelectOption value={dia_Atual.toLocaleDateString("pt-br", timeformatBD)}>{dia_Atual.toLocaleDateString("pt-br", timeformat)}</IonSelectOption> 
                                            <IonSelectOption value={dia_Anterior1.toLocaleDateString("pt-br", timeformatBD)}>{dia_Anterior1.toLocaleDateString("pt-br", timeformat)}</IonSelectOption>
                                            <IonSelectOption value={dia_Anterior2.toLocaleDateString("pt-br", timeformatBD)}>{dia_Anterior2.toLocaleDateString("pt-br", timeformat)}</IonSelectOption>
                                            <IonSelectOption value={dia_Anterior3.toLocaleDateString("pt-br", timeformatBD)}>{dia_Anterior3.toLocaleDateString("pt-br", timeformat)}</IonSelectOption>
                                            <IonSelectOption value={dia_Anterior4.toLocaleDateString("pt-br", timeformatBD)}>{dia_Anterior4.toLocaleDateString("pt-br", timeformat)}</IonSelectOption>
                                            <IonSelectOption value={dia_Anterior5.toLocaleDateString("pt-br", timeformatBD)}>{dia_Anterior5.toLocaleDateString("pt-br", timeformat)}</IonSelectOption>
                                            <IonSelectOption value={dia_Anterior6.toLocaleDateString("pt-br", timeformatBD)}>{dia_Anterior6.toLocaleDateString("pt-br", timeformat)}</IonSelectOption>
                                            <IonSelectOption value={dia_Anterior7.toLocaleDateString("pt-br", timeformatBD)}>{dia_Anterior7.toLocaleDateString("pt-br", timeformat)}</IonSelectOption>
                                            <IonSelectOption value={dia_Anterior8.toLocaleDateString("pt-br", timeformatBD)}>{dia_Anterior8.toLocaleDateString("pt-br", timeformat)}</IonSelectOption>
                                            <IonSelectOption value={dia_Anterior9.toLocaleDateString("pt-br", timeformatBD)}>{dia_Anterior9.toLocaleDateString("pt-br", timeformat)}</IonSelectOption>
                                            <IonSelectOption value={dia_Anterior10.toLocaleDateString("pt-br", timeformatBD)}>{dia_Anterior10.toLocaleDateString("pt-br", timeformat)}</IonSelectOption>
                                            <IonSelectOption value={dia_Anterior11.toLocaleDateString("pt-br", timeformatBD)}>{dia_Anterior11.toLocaleDateString("pt-br", timeformat)}</IonSelectOption>
                                            <IonSelectOption value={dia_Anterior12.toLocaleDateString("pt-br", timeformatBD)}>{dia_Anterior12.toLocaleDateString("pt-br", timeformat)}</IonSelectOption>
                                            <IonSelectOption value={dia_Anterior13.toLocaleDateString("pt-br", timeformatBD)}>{dia_Anterior13.toLocaleDateString("pt-br", timeformat)}</IonSelectOption>
                                            <IonSelectOption value={dia_Anterior14.toLocaleDateString("pt-br", timeformatBD)}>{dia_Anterior14.toLocaleDateString("pt-br", timeformat)}</IonSelectOption> 
                                        </IonSelect>)} control={control} name={"fdQFinal"} /> 
                                 
                                </IonItem> 

                                : null}

                                {(FDonWDFinal === "não") ? 
                                <IonItem mode="md" className={"ion-no-padding"} lines="none">


                                                                <Controller render={({ onChange }) => (
                                                                    <IonRadioGroup allowEmptySelection={true} value={diasTrabalho} onIonChange={(e) => {
                                                                        setDiasTrabalho(e.detail.value);
                                                                        onChange(e.detail.value);
                                                                        if (e.detail.value != undefined)
                                                                            props.setState('fdQFinal', e.detail.value)
                                                                    }}>

                                                                        <IonItem lines="none" className={"ion-no-padding"}>
                                                                            <IonLabel>Nenhum dia</IonLabel>
                                                                            <IonRadio allow-empty-selection={true} slot="start" className={"radio-options"} color="primary" value="nenhumDia"></IonRadio>
                                                                        </IonItem>


                                                                        <IonItem lines="none" className={"ion-no-padding"}>
                                                                            <IonLabel>Todos os dias</IonLabel>
                                                                            <IonRadio allow-empty-selection={true} slot="start" className={"radio-options"} color="primary" value="todosDias"></IonRadio>
                                                                        </IonItem>
                                                                    </IonRadioGroup>
                                                                )}
                                                                    control={control}
                                                                    
                                                                    name={"fdQFinal"}
                                                                />
                                                            </IonItem>
                                    
                                    : null}

                            </IonList> 


                            {(FDonWDFinal === "sim") || ((props.state.fdQFinal != null) && (props.state.fdQFinal != "todosDias"))  ? 

                            <IonLabel className="questions">Quantas horas, em média, você trabalhou/estudou nos dias de trabalho/ estudo?</IonLabel>
                            
                            :null}

                             {(FDonWDFinal === "sim") || ((props.state.fdQFinal != null) && (props.state.fdQFinal != "todosDias")) ? 
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
                                       
                                        </IonItem> : null}

                              {(FDonWDFinal === "sim") || ((props.state.fdQFinal != null) && (props.state.fdQFinal != "todosDias"))  ? 

                            <IonLabel className="questions">Com que frequência você pode escolher seus horários de trabalho e estudo?</IonLabel>
                            
                            :null}      

                            {(FDonWDFinal === "sim") || ((props.state.fdQFinal != null) && (props.state.fdQFinal != "todosDias")) ? 

                            <IonItem mode="md" className={"ion-no-padding"} lines="none">


                                <Controller render={({ onChange }) => (
                                    <IonRadioGroup  onIonChange={(e) => {
                                     
                                        onChange(e.detail.value);
                                        if (e.detail.value != undefined)
                                            props.setState('workChoiceFinal', e.detail.value)
                                    }}>

                                        <IonItem lines="none" className={"ion-no-padding"}>
                                            <IonLabel>Todos os dias</IonLabel>
                                            <IonRadio slot="start" className={"radio-options"} color="primary" value="0"></IonRadio>
                                        </IonItem>


                                        <IonItem lines="none" className={"ion-no-padding"}>
                                            <IonLabel>Mais da metade dos dias</IonLabel>
                                            <IonRadio slot="start" className={"radio-options"} color="primary" value="1"></IonRadio>
                                        </IonItem>

                                        <IonItem lines="none" className={"ion-no-padding"}>
                                            <IonLabel>Menos da metade dos dias</IonLabel>
                                            <IonRadio slot="start" className={"radio-options"} color="primary" value="2"></IonRadio>
                                        </IonItem>

                                        <IonItem lines="none" className={"ion-no-padding"}>
                                            <IonLabel>Nunca</IonLabel>
                                            <IonRadio slot="start" className={"radio-options"} color="primary" value="3"></IonRadio>
                                        </IonItem>
                                    </IonRadioGroup>
                                )}
                                    control={control}
                                    rules={{ required: true }}
                                    name={"workChoiceFinal"}
                                />
                            </IonItem>

                            :null}

                             {(FDonWDFinal === "sim") || ((props.state.fdQFinal != null) && (props.state.fdQFinal != "todosDias"))  ? 

                            <IonLabel className="questions">O quão regulares foram seus horários de trabalho/estudo nas últimas duas semanas:</IonLabel>
                            
                            :null}        

                             {(FDonWDFinal === "sim") || ((props.state.fdQFinal != null) && (props.state.fdQFinal != "todosDias"))  ? 

                             <IonItem lines="none">
                                        <Controller render={({ onChange }) => (
                                            <IonSelect interfaceOptions={options} className={"select-interface-option"} okText="ok" cancelText="Cancelar" placeholder="Por favor, selecione..."  onIonChange={(e) => {
                                                
                                                onChange(e.detail.value);
                                                if (e.detail.value != undefined) {
                                                    props.setState('workRegFinal', e.detail.value)
                                                }
                                            }}>
                                                <IonSelectOption value="muitoIrregulares">Muito irregulares</IonSelectOption>
                                                <IonSelectOption value="irregulares">Irregulares</IonSelectOption>
                                                <IonSelectOption value="regulares">Regulares</IonSelectOption>
                                                <IonSelectOption value="muitoRegulares">Muito regulares</IonSelectOption>
                                            </IonSelect>)} control={control} name={"workRegFinal"} rules={{ required: true }} />
                                       
                                    </IonItem>

                               :null}   

                              {(FDonWDFinal === "sim") || ((props.state.fdQFinal != null) && (props.state.fdQFinal != "todosDias"))  ? 

                            <IonLabel className="questions">Em que horário, em média, você começou a trabalhar/estudar nas últimas duas semanas?</IonLabel>
                            
                            :null}   

                            {(FDonWDFinal === "sim") || ((props.state.fdQFinal != null) && (props.state.fdQFinal != "todosDias")) ? 

                             <IonItem lines="none">
                                <Controller render={({ onChange }) => (
                                    <IonDatetime placeholder="Por favor, selecione..." display-format="HH:mm " picker-format="HH:mm" minuteValues="0,5,10,15,20,25,30,35,40,45,50,55" onIonChange={(e) => {
                                        console.log(e);
                                        onChange(e.detail.value);
                                        if (e.detail.value != undefined)
                                            props.setState('workStartFinal', e.detail.value)
                                    }}></IonDatetime>)} control={control} name={"workStartFinal"} rules={{ required: true }} />
                             
                            </IonItem>
                            
                            :null}


                            { /* ------------------------------------------ 
                            ------------------------------------------ 
                            ------------------------------------------ 
                            ------------------------------------------ 
                            ------------------------------------------ 
                            ------------------------------------------ 
                            ------------------------------------------ 
                            QUESTIONÁRIO LUZ COMEÇA AQUI 
                            ------------------------------------------ 
                            ------------------------------------------ 
                            ------------------------------------------ 
                            ------------------------------------------ 
                            ------------------------------------------ 
                            ------------------------------------------ 
                            ------------------------------------------
                            ------------------------------------------ */}

                            <IonLabel className="questions">Você se expôs à luz natural (em um ambiente aberto) nas duas últimas semanas?</IonLabel>
                            <IonNote>Considere apenas exposição à luz natural em um ambiente aberto, incluindo sacadas, terraços, pátio, jardim, etc.</IonNote>

                            <IonItem mode="md" className={"ion-no-padding"} lines="none">


                                <Controller render={({ onChange }) => (
                                    <IonRadioGroup value={lightExposureFinal} onIonChange={(e) => {
                                        setLightExposureFinal(e.detail.value);
                                        onChange(e.detail.value);
                                        if (e.detail.value != undefined)
                                            props.setState('lightExposureFinal', e.detail.value)
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
                                    name={"lightExposureFinal"}
                                />
                            </IonItem>


                            {(lightExposureFinal === "sim") ? 
                            <IonLabel className="questions">Com que frequência você se expôs à luz natural (em um ambiente aberto) nas duas últimas semanas?</IonLabel>
                            :null}     
                            {(lightExposureFinal === "sim") ? 
                            <IonNote>Considere apenas exposição à luz natural em um ambiente aberto, incluindo sacadas, terraços, pátio, jardim, etc.</IonNote>
                            :null}      
                            {(lightExposureFinal === "sim") ? 
                             <IonItem lines="none">
                             <Controller render={({ onChange }) => (
                                 <IonSelect interfaceOptions={options} className={"select-interface-option"} okText="ok" cancelText="Cancelar" placeholder="Por favor, selecione..."  onIonChange={(e) => {
                                     
                                     onChange(e.detail.value);
                                     if (e.detail.value != undefined) {
                                         props.setState('lightFreqFinal', e.detail.value)
                                     }
                                 }}>
                                     <IonSelectOption value={"0"}>Em menos da metade dos dias</IonSelectOption>
                                     <IonSelectOption value={"1"}>Em mais da metade dos dias</IonSelectOption>
                                     <IonSelectOption value={"2"}>Todos os dias</IonSelectOption>
                                  
                                 </IonSelect>)} control={control} name={"lightFreqFinal"} rules={{ required: true }} />
                            
                         </IonItem>
                            :null}     

                            {(lightExposureFinal === "sim") ? 
                            <IonLabel className="questions">Quão regulares foram os horários em que se expôs à luz natural?</IonLabel>
                            :null}   
                             {(lightExposureFinal === "sim") ? 
                            <IonNote>Considere apenas exposição à luz natural em um ambiente aberto, incluindo sacadas, terraços, pátio, jardim, etc.</IonNote>
                            :null} 

                             {(lightExposureFinal === "sim") ? 
                            <IonItem lines="none">
                                        <Controller render={({ onChange }) => (
                                            <IonSelect interfaceOptions={options} className={"select-interface-option"} value={lightRegFinal} okText="ok" cancelText="Cancelar" placeholder="Por favor, selecione..."  onIonChange={(e) => {
                                                
                                                onChange(e.detail.value);
                                                if (e.detail.value != undefined) {
                                                    setLightRegFinal(e.detail.value);
                                                    props.setState('lightRegFinal', e.detail.value)
                                                }
                                            }}>
                                                <IonSelectOption value={"0"}>Muito irregulares</IonSelectOption>
                                                <IonSelectOption value={"1"}>Irregulares</IonSelectOption>
                                                <IonSelectOption value={"2"}>Regulares</IonSelectOption>
                                                <IonSelectOption value={"3"}>Muito regulares</IonSelectOption>
                                            </IonSelect>)} control={control} name={"lightRegFinal"} rules={{ required: true }} />
                                       
                                    </IonItem> :null} 
   
                            
                          {(lightExposureFinal === "sim") && ((lightRegFinal === "0") || (lightRegFinal === "1")) ? 
                          <IonLabel className="questions">Nos dias em que você se expõe à luz natural (em um ambiente aberto), em média, você se expõe por quantas horas?</IonLabel>
                          :null}

                           {(lightExposureFinal === "sim") && ((lightRegFinal === "0") || (lightRegFinal === "1")) ? 

                            <IonItem lines="none">
                                        <Controller render={({ onChange }) => (
                                            <IonSelect interfaceOptions={options} className={"select-interface-option"} okText="ok" cancelText="Cancelar" placeholder="Por favor, selecione..."  onIonChange={(e) => {
                                                
                                                onChange(e.detail.value);
                                                if (e.detail.value != undefined) {
                                                  
                                                    props.setState('lightDurationIrregFinal', e.detail.value)
                                                }
                                            }}>
                                                <IonSelectOption value={"1"}>não sei</IonSelectOption>
                                                <IonSelectOption value={"0"}>até meia hora</IonSelectOption>
                                                <IonSelectOption value={"1"}>até 1 hora</IonSelectOption>
                                                <IonSelectOption value={"2"}>até 2 horas</IonSelectOption>
                                                <IonSelectOption value={"3"}>até 4 horas</IonSelectOption>
                                                <IonSelectOption value={"3"}>mais de 4 horas</IonSelectOption>
                                            </IonSelect>)} control={control} name={"lightDurationIrregFinal"} rules={{ required: true }} />
                                       
                                    </IonItem> :null} 

                           {(lightExposureFinal === "sim") && ((lightRegFinal === "2") || (lightRegFinal === "3")) && (FDonWDFinal === "sim" || (FDonWDFinal === "não" && ((diasTrabalho=== "nenhumDia") || (diasTrabalho === "todosDias")))) ? 

                            <IonLabel className="questions">Nas duas últimas semanas, seus  horários de exposição à luz natural foram:</IonLabel>
                           :null}

                        {(lightExposureFinal === "sim") && ((lightRegFinal === "2") || (lightRegFinal === "3")) && (FDonWDFinal === "sim" || (FDonWDFinal === "não" && ((diasTrabalho=== "nenhumDia") || (diasTrabalho === "todosDias")))) ? 

                            <IonItem lines="none">
                                        <Controller render={({ onChange }) => (
                                            <IonSelect interfaceOptions={options} className={"select-interface-option"} okText="ok" cancelText="Cancelar" placeholder="Por favor, selecione..."  onIonChange={(e) => {
                                                
                                                onChange(e.detail.value);
                                                if (e.detail.value != undefined) {
                                                    
                                                    props.setState('lightExposureRegWkndFinal', e.detail.value)
                                                }
                                            }}>
                                                <IonSelectOption value={"0"}>Diferentes em dias de semana comparado a finais de semana</IonSelectOption>
                                                <IonSelectOption value={"1"}>Semelhantes em todos os dias</IonSelectOption>
                                            </IonSelect>)} control={control} name={"lightExposureRegWkndFinal"} rules={{ required: true }} />
                                       
                                    </IonItem>
                            :null}

                            {(lightExposureFinal === "sim") && ((lightRegFinal === "2") || (lightRegFinal === "3")) && ((FDonWDFinal === "não") && !(diasTrabalho === "nenhumDia" || diasTrabalho === "todosDias")) ?  

                            <IonLabel className="questions">Nas duas últimas semanas, seus  horários de exposição à luz natural foram:</IonLabel>
                           :null}

                            {(lightExposureFinal === "sim") && ((lightRegFinal === "2") || (lightRegFinal === "3")) && ((FDonWDFinal === "não") && !(diasTrabalho === "nenhumDia" || diasTrabalho === "todosDias")) ?  

                            <IonItem lines="none">
                                        <Controller render={({ onChange }) => (
                                            <IonSelect interfaceOptions={options} className={"select-interface-option"} okText="ok" cancelText="Cancelar" placeholder="Por favor, selecione..."  onIonChange={(e) => {
                                                
                                                onChange(e.detail.value);
                                                if (e.detail.value != undefined) {
                                                    
                                                    props.setState('lightExposureRegFinal', e.detail.value)
                                                }
                                            }}>
                                                <IonSelectOption value={"0"}>Diferentes em dias de semana comparado a finais de semana</IonSelectOption>
                                                <IonSelectOption value={"1"}>Diferentes em dias de trabalho comparado a dias livres</IonSelectOption>
                                                <IonSelectOption value={"2"}>Semelhantes em todos os dias</IonSelectOption>
                                            </IonSelect>)} control={control} name={"lightExposureRegFinal"} rules={{ required: true }} />
                                       
                                    </IonItem>
                           :null}


                        {( (props.state.lightExposureRegWkndFinal !== null) && (props.state.lightExposureRegWkndFinal === "1") ) || ((props.state.lightExposureRegFinal !== null) && (props.state.lightExposureRegFinal === "2"))  ? 
                        
                        <IonLabel className="questions">Em que horário, em média, você começou a se expôr à luz natural, nas duas últimas semanas?</IonLabel>
                    
                        :null}
                         {( (props.state.lightExposureRegWkndFinal !== null) && (props.state.lightExposureRegWkndFinal === "1") ) || ((props.state.lightExposureRegFinal !== null) && (props.state.lightExposureRegFinal === "2"))  ? 
                        
                        <IonNote> Use o formato de 24:00. Por exemplo, caso tenha começado a se expor à luz natural às cinco da tarde, responda 17:00.
                        Se você se expõe mais de uma vez por dia, considere o primeiro horário do dia.</IonNote>
                    
                        :null}


                        {( (props.state.lightExposureRegWkndFinal !== null) && (props.state.lightExposureRegWkndFinal === "1") ) || ((props.state.lightExposureRegFinal !== null) && (props.state.lightExposureRegFinal === "2"))  ?
                         <IonItem lines="none">
                                <Controller render={({ onChange }) => (
                                    <IonDatetime placeholder="Por favor, selecione..." display-format="HH:mm " picker-format="HH:mm" minuteValues="0,5,10,15,20,25,30,35,40,45,50,55" onIonChange={(e) => {
                                        console.log(e);
                                        onChange(e.detail.value);
                                        if (e.detail.value != undefined)
                                            props.setState('lightExposureStartFinal', e.detail.value)
                                    }}></IonDatetime>)} control={control} name={"lightExposureStartFinal"} rules={{ required: true }} />
                             
                            </IonItem>
                         :null}

                        {( (props.state.lightExposureRegWkndFinal !== null) && (props.state.lightExposureRegWkndFinal === "1") ) || ((props.state.lightExposureRegFinal !== null) && (props.state.lightExposureRegFinal === "2"))  ? 
                        
                        <IonLabel className="questions">Por quanto tempo, em média, você se expôs?</IonLabel>
                    
                        :null}

                            
                        {( (props.state.lightExposureRegWkndFinal !== null) && (props.state.lightExposureRegWkndFinal === "1") ) || ((props.state.lightExposureRegFinal !== null) && (props.state.lightExposureRegFinal === "2"))  ? 
                         <IonItem lines="none">
                                        <Controller render={({ onChange }) => (
                                            <IonSelect interfaceOptions={options} className={"select-interface-option"} okText="ok" cancelText="Cancelar" placeholder="Por favor, selecione..."  onIonChange={(e) => {
                                                
                                                onChange(e.detail.value);
                                                if (e.detail.value != undefined) {
                                                  
                                                    props.setState('lightExposureDurationFinal', e.detail.value)
                                                }
                                            }}>
                                                <IonSelectOption value={"0"}>até meia hora</IonSelectOption>
                                                <IonSelectOption value={"1"}>até 1 hora</IonSelectOption>
                                                <IonSelectOption value={"2"}>até 2 horas</IonSelectOption>
                                                <IonSelectOption value={"3"}>até 4 horas</IonSelectOption>
                                                <IonSelectOption value={"4"}>mais de 4 horas</IonSelectOption>
                                            </IonSelect>)} control={control} name={"lightExposureDurationFinal"} rules={{ required: true }} />
                                       
                                    </IonItem>
                                :null}
                          

                          {( (props.state.lightExposureRegFinal !== null) && (props.state.lightExposureRegFinal === "1") )  ? 
                          
                          <IonLabel className="questions">Você se expôs à luz natural: </IonLabel>
                          
                          :null}

                        {( (props.state.lightExposureRegFinal !== null) && (props.state.lightExposureRegFinal === "1") )  ? 
                          
                          <IonItem lines="none">
                                        <Controller render={({ onChange }) => (
                                            <IonSelect interfaceOptions={options} className={"select-interface-option"} okText="ok" cancelText="Cancelar" placeholder="Por favor, selecione..."  onIonChange={(e) => {
                                                
                                                onChange(e.detail.value);
                                                if (e.detail.value != undefined) {
                                                  
                                                    props.setState('lightExposureCheckWorkDFinal', e.detail.value)
                                                }
                                            }}>
                                                <IonSelectOption value={"0"}>nos dias de trabalho</IonSelectOption>
                                                <IonSelectOption value={"1"}>nos dias livres</IonSelectOption>
                                                <IonSelectOption value={"2"}>em ambos</IonSelectOption>
                                          
                                            </IonSelect>)} control={control} name={"lightExposureCheckWorkDFinal"} rules={{ required: true }} />
                                       
                                    </IonItem>
                          
                          :null}

                         {( (props.state.lightExposureCheckWorkDFinal !== null) && (props.state.lightExposureCheckWorkDFinal === "0")  )  ? 
                                <IonLabel className="questions">Nos seus dias de trabalho, nas duas últimas semanas, você se expôs à luz natural:</IonLabel>
                        :null}

                        {( (props.state.lightExposureCheckWorkDFinal !== null) && (props.state.lightExposureCheckWorkDFinal === "0") )  ? 
                                <IonLabel className="questions">Em que horário, aproximadamente, você começou a se expôr?</IonLabel>
                        :null}

                         {( (props.state.lightExposureCheckWorkDFinal !== null) && (props.state.lightExposureCheckWorkDFinal === "0")  )  ? 
                                <IonNote> Use o formato de 24:00. Por exemplo, caso tenha começado a se expor à luz natural às cinco da tarde, responda 17:00.
                                Se você se expõe mais de uma vez por dia, considere o primeiro horário do dia.</IonNote>
                        :null}

                        {( (props.state.lightExposureCheckWorkDFinal !== null) && (props.state.lightExposureCheckWorkDFinal === "0")  )  ? 
                        <IonItem lines="none">
                                <Controller render={({ onChange }) => (
                                    <IonDatetime placeholder="Por favor, selecione..." display-format="HH:mm " picker-format="HH:mm" minuteValues="0,5,10,15,20,25,30,35,40,45,50,55" onIonChange={(e) => {
                                        console.log(e);
                                        onChange(e.detail.value);
                                        if (e.detail.value != undefined)
                                            props.setState('lightExposureWorkStartFinal', e.detail.value)
                                    }}></IonDatetime>)} control={control} name={"lightExposureWorkStartFinal"} rules={{ required: true }} />
                             
                            </IonItem> :null}

                            {( (props.state.lightExposureCheckWorkDFinal !== null) && (props.state.lightExposureCheckWorkDFinal === "0")  )  ? 
                                <IonLabel className="questions">Por quanto tempo, em média, você se expôs?</IonLabel>
                        :null}

                            {( (props.state.lightExposureCheckWorkDFinal !== null) && (props.state.lightExposureCheckWorkDFinal === "0"))  ? 

                                 <IonItem lines="none">
                                        <Controller render={({ onChange }) => (
                                            <IonSelect interfaceOptions={options} className={"select-interface-option"} okText="ok" cancelText="Cancelar" placeholder="Por favor, selecione..."  onIonChange={(e) => {
                                                
                                                onChange(e.detail.value);
                                                if (e.detail.value != undefined) {
                                                  
                                                    props.setState('lightExposureWorkDurationFinal', e.detail.value)
                                                }
                                            }}>
                                                <IonSelectOption value={"0"}>até meia hora</IonSelectOption>
                                                <IonSelectOption value={"1"}>até 1 hora</IonSelectOption>
                                                <IonSelectOption value={"2"}>até 2 horas</IonSelectOption>
                                                <IonSelectOption value={"3"}>até 4 horas</IonSelectOption>
                                                <IonSelectOption value={"4"}>mais de 4 horas</IonSelectOption>
                                            </IonSelect>)} control={control} name={"lightExposureWorkDurationFinal"} rules={{ required: true }} />
                                       
                                    </IonItem>

                            :null}

                        {( (props.state.lightExposureCheckWorkDFinal !== null) && (props.state.lightExposureCheckWorkDFinal === "1") )  ? 
                                <IonLabel className="questions">Nos seus dias livres, nas duas últimas semanas, você se expôs à luz natural:
                                :</IonLabel>
                        :null}

                          {( (props.state.lightExposureCheckWorkDFinal !== null) && (props.state.lightExposureCheckWorkDFinal === "1") )  ? 
                                <IonLabel className="questions">Em que horário, aproximadamente, você começou a se expôr?</IonLabel>
                        :null}

                          {( (props.state.lightExposureCheckWorkDFinal !== null) && (props.state.lightExposureCheckWorkDFinal === "1") )  ? 
                                 <IonNote> Use o formato de 24:00. Por exemplo, caso tenha começado a se expor à luz natural às cinco da tarde, responda 17:00.
                                 Se você se expõe mais de uma vez por dia, considere o primeiro horário do dia.</IonNote>
                        :null}

                         {( (props.state.lightExposureCheckWorkDFinal !== null) && (props.state.lightExposureCheckWorkDFinal === "1") )  ? 
                        <IonItem lines="none">
                                <Controller render={({ onChange }) => (
                                    <IonDatetime placeholder="Por favor, selecione..." display-format="HH:mm " picker-format="HH:mm" minuteValues="0,5,10,15,20,25,30,35,40,45,50,55" onIonChange={(e) => {
                                        console.log(e);
                                        onChange(e.detail.value);
                                        if (e.detail.value != undefined)
                                            props.setState('lightExposureWorkFDStartFinal', e.detail.value)
                                    }}></IonDatetime>)} control={control} name={"lightExposureWorkFDStartFinal"} rules={{ required: true }} />
                             
                            </IonItem> :null}

                         {( (props.state.lightExposureCheckWorkDFinal !== null) && (props.state.lightExposureCheckWorkDFinal === "1") )  ? 
                                <IonLabel className="questions">Por quanto tempo, em média, você se expôs?</IonLabel>
                        :null}

                        {( (props.state.lightExposureCheckWorkDFinal !== null) && (props.state.lightExposureCheckWorkDFinal === "1") )  ? 
                              <IonItem lines="none">
                              <Controller render={({ onChange }) => (
                                  <IonSelect interfaceOptions={options} className={"select-interface-option"} okText="ok" cancelText="Cancelar" placeholder="Por favor, selecione..."  onIonChange={(e) => {
                                      
                                      onChange(e.detail.value);
                                      if (e.detail.value != undefined) {
                                        
                                          props.setState('lightExposureWorkFDDurationFinal', e.detail.value)
                                      }
                                  }}>
                                      <IonSelectOption value={"0"}>até meia hora</IonSelectOption>
                                      <IonSelectOption value={"1"}>até 1 hora</IonSelectOption>
                                      <IonSelectOption value={"2"}>até 2 horas</IonSelectOption>
                                      <IonSelectOption value={"3"}>até 4 horas</IonSelectOption>
                                      <IonSelectOption value={"4"}>mais de 4 horas</IonSelectOption>
                                  </IonSelect>)} control={control} name={"lightExposureWorkFDDurationFinal"} rules={{ required: true }} />
                             
                          </IonItem>
                        :null}








                        {( (props.state.lightExposureCheckWorkDFinal !== null) && (props.state.lightExposureCheckWorkDFinal === "2")  )  ? 
                                <IonLabel className="questions">Nos seus dias de trabalho, nas duas últimas semanas, você se expôs à luz natural:</IonLabel>
                        :null}

                        {( (props.state.lightExposureCheckWorkDFinal !== null) && (props.state.lightExposureCheckWorkDFinal === "2") )  ? 
                                <IonLabel className="questions">Em que horário, aproximadamente, você começou a se expôr?</IonLabel>
                        :null}

                         {( (props.state.lightExposureCheckWorkDFinal !== null) && (props.state.lightExposureCheckWorkDFinal === "2")  )  ? 
                                <IonNote> Use o formato de 24:00. Por exemplo, caso tenha começado a se expor à luz natural às cinco da tarde, responda 17:00.
                                Se você se expõe mais de uma vez por dia, considere o primeiro horário do dia.</IonNote>
                        :null}

                        {( (props.state.lightExposureCheckWorkDFinal !== null) && (props.state.lightExposureCheckWorkDFinal === "2")  )  ? 
                        <IonItem lines="none">
                                <Controller render={({ onChange }) => (
                                    <IonDatetime placeholder="Por favor, selecione..." display-format="HH:mm " picker-format="HH:mm" minuteValues="0,5,10,15,20,25,30,35,40,45,50,55" onIonChange={(e) => {
                                        console.log(e);
                                        onChange(e.detail.value);
                                        if (e.detail.value != undefined)
                                            props.setState('lightExposureWorkStartFinal', e.detail.value)
                                    }}></IonDatetime>)} control={control} name={"lightExposureWorkStartFinal"} rules={{ required: true }} />
                             
                            </IonItem> :null}

                            {( (props.state.lightExposureCheckWorkDFinal !== null) && (props.state.lightExposureCheckWorkDFinal === "2")  )  ? 
                                <IonLabel className="questions">Por quanto tempo, em média, você se expôs?</IonLabel>
                        :null}

                            {( (props.state.lightExposureCheckWorkDFinal !== null) && (props.state.lightExposureCheckWorkDFinal === "2"))  ? 

                                 <IonItem lines="none">
                                        <Controller render={({ onChange }) => (
                                            <IonSelect interfaceOptions={options} className={"select-interface-option"} okText="ok" cancelText="Cancelar" placeholder="Por favor, selecione..."  onIonChange={(e) => {
                                                
                                                onChange(e.detail.value);
                                                if (e.detail.value != undefined) {
                                                  
                                                    props.setState('lightExposureWorkDurationFinal', e.detail.value)
                                                }
                                            }}>
                                                <IonSelectOption value={"0"}>até meia hora</IonSelectOption>
                                                <IonSelectOption value={"1"}>até 1 hora</IonSelectOption>
                                                <IonSelectOption value={"2"}>até 2 horas</IonSelectOption>
                                                <IonSelectOption value={"3"}>até 4 horas</IonSelectOption>
                                                <IonSelectOption value={"4"}>mais de 4 horas</IonSelectOption>
                                            </IonSelect>)} control={control} name={"lightExposureWorkDurationFinal"} rules={{ required: true }} />
                                       
                                    </IonItem>

                            :null}

                        {( (props.state.lightExposureCheckWorkDFinal !== null) && (props.state.lightExposureCheckWorkDFinal === "2") )  ? 
                                <IonLabel className="questions">Nos seus dias livres, nas duas últimas semanas, você se expôs à luz natural:
                                :</IonLabel>
                        :null}

                          {( (props.state.lightExposureCheckWorkDFinal !== null) && (props.state.lightExposureCheckWorkDFinal === "2") )  ? 
                                <IonLabel className="questions">Em que horário, aproximadamente, você começou a se expôr?</IonLabel>
                        :null}

                          {( (props.state.lightExposureCheckWorkDFinal !== null) && (props.state.lightExposureCheckWorkDFinal === "2") )  ? 
                                 <IonNote> Use o formato de 24:00. Por exemplo, caso tenha começado a se expor à luz natural às cinco da tarde, responda 17:00.
                                 Se você se expõe mais de uma vez por dia, considere o primeiro horário do dia.</IonNote>
                        :null}

                         {( (props.state.lightExposureCheckWorkDFinal !== null) && (props.state.lightExposureCheckWorkDFinal === "2") )  ? 
                        <IonItem lines="none">
                                <Controller render={({ onChange }) => (
                                    <IonDatetime placeholder="Por favor, selecione..." display-format="HH:mm " picker-format="HH:mm" minuteValues="0,5,10,15,20,25,30,35,40,45,50,55" onIonChange={(e) => {
                                        console.log(e);
                                        onChange(e.detail.value);
                                        if (e.detail.value != undefined)
                                            props.setState('lightExposureWorkFDStartFinal', e.detail.value)
                                    }}></IonDatetime>)} control={control} name={"lightExposureWorkFDStartFinal"} rules={{ required: true }} />
                             
                            </IonItem> :null}

                         {( (props.state.lightExposureCheckWorkDFinal !== null) && (props.state.lightExposureCheckWorkDFinal === "2") )  ? 
                                <IonLabel className="questions">Por quanto tempo, em média, você se expôs?</IonLabel>
                        :null}

                        {( (props.state.lightExposureCheckWorkDFinal !== null) && (props.state.lightExposureCheckWorkDFinal === "2") )  ? 
                              <IonItem lines="none">
                              <Controller render={({ onChange }) => (
                                  <IonSelect interfaceOptions={options} className={"select-interface-option"} okText="ok" cancelText="Cancelar" placeholder="Por favor, selecione..."  onIonChange={(e) => {
                                      
                                      onChange(e.detail.value);
                                      if (e.detail.value != undefined) {
                                        
                                          props.setState('lightExposureWorkFDDurationFinal', e.detail.value)
                                      }
                                  }}>
                                      <IonSelectOption value={"0"}>até meia hora</IonSelectOption>
                                      <IonSelectOption value={"1"}>até 1 hora</IonSelectOption>
                                      <IonSelectOption value={"2"}>até 2 horas</IonSelectOption>
                                      <IonSelectOption value={"3"}>até 4 horas</IonSelectOption>
                                      <IonSelectOption value={"4"}>mais de 4 horas</IonSelectOption>
                                  </IonSelect>)} control={control} name={"lightExposureWorkFDDurationPost"} rules={{ required: true }} />
                             
                          </IonItem>
                        :null}


                        { ((props.state.lightExposureRegFinal !== null) && (props.state.lightExposureRegWkndFinal === "0")) || ((props.state.lightExposureRegFinal !==null) && (props.state.lightExposureRegFinal === "0"))   ? 
                          
                          <IonLabel className="questions">Você se expôs à luz natural: </IonLabel>
                          
                          :null}

                     { ((props.state.lightExposureRegFinal !== null) && (props.state.lightExposureRegWkndFinal === "0")) || ((props.state.lightExposureRegFinal !==null) && (props.state.lightExposureRegFinal === "0"))   ?
                          
                          <IonItem lines="none">
                                        <Controller render={({ onChange }) => (
                                            <IonSelect interfaceOptions={options} className={"select-interface-option"} okText="ok" cancelText="Cancelar" placeholder="Por favor, selecione..."  onIonChange={(e) => {
                                                
                                                onChange(e.detail.value);
                                                if (e.detail.value != undefined) {
                                                  
                                                    props.setState('lightExposureCheckWeekDFinal', e.detail.value)
                                                }
                                            }}>
                                                <IonSelectOption value={"0"}>nos dias de semana</IonSelectOption>
                                                <IonSelectOption value={"1"}>nos finais de semana</IonSelectOption>
                                                <IonSelectOption value={"2"}>em ambos</IonSelectOption>
                                          
                                            </IonSelect>)} control={control} name={"lightExposureCheckWeekDFinal"} rules={{ required: true }} />
                                       
                                    </IonItem>
                          
                          :null}

                           {( (props.state.lightExposureCheckWeekDFinal !== null) && (props.state.lightExposureCheckWeekDFinal === "0") )  ? 
                                <IonLabel className="questions">Nos dias de semana, nas duas últimas semanas, você se expôs à luz natural:</IonLabel>
                        :null}

                         {( (props.state.lightExposureCheckWeekDFinal !== null) && (props.state.lightExposureCheckWeekDFinal === "0") )  ? 
                                <IonLabel className="questions">Em que horário, aproximadamente, você começou a se expôr?
                                </IonLabel>
                        :null}

                        {( (props.state.lightExposureCheckWeekDFinal !== null) && (props.state.lightExposureCheckWeekDFinal === "0") )  ? 
                                <IonNote>Use o formato de 24:00. Por exemplo, caso tenha começado a se expor à luz natural às cinco da tarde, responda 17:00.
                                Se você se expõe mais de uma vez por dia, considere o primeiro horário do dia.
                                </IonNote>
                        :null}

                       {( (props.state.lightExposureCheckWeekDFinal !== null) && (props.state.lightExposureCheckWeekDFinal === "0") )  ? 
                        <IonItem lines="none">
                                <Controller render={({ onChange }) => (
                                    <IonDatetime placeholder="Por favor, selecione..." display-format="HH:mm " picker-format="HH:mm" minuteValues="0,5,10,15,20,25,30,35,40,45,50,55" onIonChange={(e) => {
                                        console.log(e);
                                        onChange(e.detail.value);
                                        if (e.detail.value != undefined)
                                            props.setState('lightExposureWeekStartFinal', e.detail.value)
                                    }}></IonDatetime>)} control={control} name={"lightExposureWeekStartFinal"} rules={{ required: true }} />
                             
                            </IonItem> :null}

                            {( (props.state.lightExposureCheckWeekDFinal !== null) && (props.state.lightExposureCheckWeekDFinal === "0") )  ? 
                                <IonLabel className="questions">Por quanto tempo, em média, você se expôs?
                                </IonLabel>
                        :null}

                            {( (props.state.lightExposureCheckWeekDFinal !== null) && (props.state.lightExposureCheckWeekDFinal === "0") )  ? 
                              <IonItem lines="none">
                              <Controller render={({ onChange }) => (
                                  <IonSelect interfaceOptions={options} className={"select-interface-option"} okText="ok" cancelText="Cancelar" placeholder="Por favor, selecione..."  onIonChange={(e) => {
                                      
                                      onChange(e.detail.value);
                                      if (e.detail.value != undefined) {
                                        
                                          props.setState('lightExposureWeekDurationFinal', e.detail.value)
                                      }
                                  }}>
                                      <IonSelectOption value={"0"}>até meia hora</IonSelectOption>
                                      <IonSelectOption value={"1"}>até 1 hora</IonSelectOption>
                                      <IonSelectOption value={"2"}>até 2 horas</IonSelectOption>
                                      <IonSelectOption value={"3"}>até 4 horas</IonSelectOption>
                                      <IonSelectOption value={"3"}>mais de 4 horas</IonSelectOption>
                                  </IonSelect>)} control={control} name={"lightExposureWeekDurationFinal"} rules={{ required: true }} />
                             
                          </IonItem>
                        :null}

                         {( (props.state.lightExposureCheckWeekDFinal !== null) && (props.state.lightExposureCheckWeekDFinal === "1") )  ? 
                                <IonLabel className="questions">Nos finais de semana, nas duas últimas semanas, você se expôs à luz natural:
                                </IonLabel>
                        :null}

                        {( (props.state.lightExposureCheckWeekDFinal !== null) && (props.state.lightExposureCheckWeekDFinal === "1") )  ? 
                                <IonLabel className="questions">Em que horário, aproximadamente, você começou a se expôr?
                                </IonLabel>
                        :null}

                           {( (props.state.lightExposureCheckWeekDFinal !== null) && (props.state.lightExposureCheckWeekDFinal === "1") )  ? 
                                <IonNote>Use o formato de 24:00. Por exemplo, caso tenha começado a se expor à luz natural às cinco da tarde, responda 17:00.
                                Se você se expõe mais de uma vez por dia, considere o primeiro horário do dia.
                                </IonNote>
                        :null}

                          {( (props.state.lightExposureCheckWeekDFinal !== null) && (props.state.lightExposureCheckWeekDFinal === "1") )  ? 
                        <IonItem lines="none">
                                <Controller render={({ onChange }) => (
                                    <IonDatetime placeholder="Por favor, selecione..." display-format="HH:mm " picker-format="HH:mm" minuteValues="0,5,10,15,20,25,30,35,40,45,50,55" onIonChange={(e) => {
                                        console.log(e);
                                        onChange(e.detail.value);
                                        if (e.detail.value != undefined)
                                            props.setState('lightExposureWkndStartFinal', e.detail.value)
                                    }}></IonDatetime>)} control={control} name={"lightExposureWkndStartFinal"} rules={{ required: true }} />
                             
                            </IonItem> :null}
                        
                        
                            {( (props.state.lightExposureCheckWeekDFinal !== null) && (props.state.lightExposureCheckWeekDFinal === "1") )  ? 
                                <IonLabel className="questions">Por quanto tempo, em média, você se expôs?
                                </IonLabel>
                        :null}

                         {( (props.state.lightExposureCheckWeekDFinal !== null) && (props.state.lightExposureCheckWeekDFinal === "1") )  ? 
                              <IonItem lines="none">
                              <Controller render={({ onChange }) => (
                                  <IonSelect interfaceOptions={options} className={"select-interface-option"} okText="ok" cancelText="Cancelar" placeholder="Por favor, selecione..."  onIonChange={(e) => {
                                      
                                      onChange(e.detail.value);
                                      if (e.detail.value != undefined) {
                                        
                                          props.setState('lightExposureWkndDurationFinal', e.detail.value)
                                      }
                                  }}>
                                      <IonSelectOption value={"0"}>até meia hora</IonSelectOption>
                                      <IonSelectOption value={"1"}>até 1 hora</IonSelectOption>
                                      <IonSelectOption value={"2"}>até 2 horas</IonSelectOption>
                                      <IonSelectOption value={"3"}>até 4 horas</IonSelectOption>
                                      <IonSelectOption value={"4"}>mais de 4 horas</IonSelectOption>
                                  </IonSelect>)} control={control} name={"lightExposureWkndDurationFinal"} rules={{ required: true }} />
                             
                          </IonItem>
                        :null}
                        

                     





                        {( (props.state.lightExposureCheckWeekDFinal !== null) && (props.state.lightExposureCheckWeekDFinal === "2") )  ? 
                                <IonLabel className="questions">Nos dias de semana, nas duas últimas semanas, você se expôs à luz natural:</IonLabel>
                        :null}

                         {( (props.state.lightExposureCheckWeekDFinal !== null) && (props.state.lightExposureCheckWeekDFinal === "2") )  ? 
                                <IonLabel className="questions">Em que horário, aproximadamente, você começou a se expôr?
                                </IonLabel>
                        :null}

                        {( (props.state.lightExposureCheckWeekDFinal !== null) && (props.state.lightExposureCheckWeekDFinal === "2") )  ? 
                                <IonNote>Use o formato de 24:00. Por exemplo, caso tenha começado a se expor à luz natural às cinco da tarde, responda 17:00.
                                Se você se expõe mais de uma vez por dia, considere o primeiro horário do dia.
                                </IonNote>
                        :null}

                       {( (props.state.lightExposureCheckWeekDFinal !== null) && (props.state.lightExposureCheckWeekDFinal === "2") )  ? 
                        <IonItem lines="none">
                                <Controller render={({ onChange }) => (
                                    <IonDatetime placeholder="Por favor, selecione..." display-format="HH:mm " picker-format="HH:mm" minuteValues="0,5,10,15,20,25,30,35,40,45,50,55" onIonChange={(e) => {
                                        console.log(e);
                                        onChange(e.detail.value);
                                        if (e.detail.value != undefined)
                                            props.setState('lightExposureWeekStartFinal', e.detail.value)
                                    }}></IonDatetime>)} control={control} name={"lightExposureWeekStartFinal"} rules={{ required: true }} />
                             
                            </IonItem> :null}

                            {( (props.state.lightExposureCheckWeekDFinal !== null) && (props.state.lightExposureCheckWeekDFinal === "2") )  ? 
                                <IonLabel className="questions">Por quanto tempo, em média, você se expôs?
                                </IonLabel>
                        :null}

                            {( (props.state.lightExposureCheckWeekDFinal !== null) && (props.state.lightExposureCheckWeekDFinal === "2") )  ? 
                              <IonItem lines="none">
                              <Controller render={({ onChange }) => (
                                  <IonSelect interfaceOptions={options} className={"select-interface-option"} okText="ok" cancelText="Cancelar" placeholder="Por favor, selecione..."  onIonChange={(e) => {
                                      
                                      onChange(e.detail.value);
                                      if (e.detail.value != undefined) {
                                        
                                          props.setState('lightExposureWeekDurationFinal', e.detail.value)
                                      }
                                  }}>
                                      <IonSelectOption value={"0"}>até meia hora</IonSelectOption>
                                      <IonSelectOption value={"1"}>até 1 hora</IonSelectOption>
                                      <IonSelectOption value={"2"}>até 2 horas</IonSelectOption>
                                      <IonSelectOption value={"3"}>até 4 horas</IonSelectOption>
                                      <IonSelectOption value={"4"}>mais de 4 horas</IonSelectOption>
                                  </IonSelect>)} control={control} name={"lightExposureWeekDurationFinal"} rules={{ required: true }} />
                             
                          </IonItem>
                        :null}

                         {( (props.state.lightExposureCheckWeekDFinal !== null) && (props.state.lightExposureCheckWeekDFinal === "2") )  ? 
                                <IonLabel className="questions">Nos finais de semana, nas duas últimas semanas, você se expôs à luz natural:
                                </IonLabel>
                        :null}

                        {( (props.state.lightExposureCheckWeekDFinal !== null) && (props.state.lightExposureCheckWeekDFinal === "2") )  ? 
                                <IonLabel className="questions">Em que horário, aproximadamente, você começou a se expôr?
                                </IonLabel>
                        :null}

                           {( (props.state.lightExposureCheckWeekDFinal !== null) && (props.state.lightExposureCheckWeekDFinal === "2") )  ? 
                                <IonNote>Use o formato de 24:00. Por exemplo, caso tenha começado a se expor à luz natural às cinco da tarde, responda 17:00.
                                Se você se expõe mais de uma vez por dia, considere o primeiro horário do dia.
                                </IonNote>
                        :null}

                          {( (props.state.lightExposureCheckWeekDFinal !== null) && (props.state.lightExposureCheckWeekDFinal === "2") )  ? 
                        <IonItem lines="none">
                                <Controller render={({ onChange }) => (
                                    <IonDatetime placeholder="Por favor, selecione..." display-format="HH:mm " picker-format="HH:mm" minuteValues="0,5,10,15,20,25,30,35,40,45,50,55" onIonChange={(e) => {
                                        console.log(e);
                                        onChange(e.detail.value);
                                        if (e.detail.value != undefined)
                                            props.setState('lightExposureWkndStartFinal', e.detail.value)
                                    }}></IonDatetime>)} control={control} name={"lightExposureWkndStartFinal"} rules={{ required: true }} />
                             
                            </IonItem> :null}
                        
                        
                            {( (props.state.lightExposureCheckWeekDFinal !== null) && (props.state.lightExposureCheckWeekDFinal === "2") )  ? 
                                <IonLabel className="questions">Por quanto tempo, em média, você se expôs?
                                </IonLabel>
                        :null}

                         {( (props.state.lightExposureCheckWeekDFinal !== null) && (props.state.lightExposureCheckWeekDFinal === "2") )  ? 
                              <IonItem lines="none">
                              <Controller render={({ onChange }) => (
                                  <IonSelect interfaceOptions={options} className={"select-interface-option"} okText="ok" cancelText="Cancelar" placeholder="Por favor, selecione..."  onIonChange={(e) => {
                                      
                                      onChange(e.detail.value);
                                      if (e.detail.value != undefined) {
                                        
                                          props.setState('lightExposureWkndDurationFinal', e.detail.value)
                                      }
                                  }}>
                                      <IonSelectOption value={"0"}>até meia hora</IonSelectOption>
                                      <IonSelectOption value={"1"}>até 1 hora</IonSelectOption>
                                      <IonSelectOption value={"2"}>até 2 horas</IonSelectOption>
                                      <IonSelectOption value={"3"}>até 4 horas</IonSelectOption>
                                      <IonSelectOption value={"4"}>mais de 4 horas</IonSelectOption>
                                  </IonSelect>)} control={control} name={"lightExposureWkndDurationFinal"} rules={{ required: true }} />
                             
                          </IonItem>
                        :null}

                            

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