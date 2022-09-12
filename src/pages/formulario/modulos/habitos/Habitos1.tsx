import React from "react";
import { StepComponentProps } from "react-step-builder";

import { IonItem, IonLabel, IonInput, IonRadioGroup, IonRadio, IonSelect, IonSelectOption, IonButton, IonCheckbox, IonList, IonDatetime } from "@ionic/react";
import { IonContent, IonText } from '@ionic/react';

import '../../Forms.css';

import { useForm, Controller } from "react-hook-form";
import { useState } from 'react';

import { IonProgressBar } from '@ionic/react';
import { daysToWeeks } from "date-fns/fp";
import { useRemoteConfigString } from "reactfire";

const Habitos1 = (props: StepComponentProps) => {

    const options = {
        cssClass: 'my-custom-interface'
    };

    const { control, watch, handleSubmit, errors, formState } = useForm({ mode: "onChange" });


    const [diasTrabalho, setDiasTrabalho] = useState();
    const [horasTrabalhoRegulares, setHorasTrabalhoRegulares] = useState();
    const [FDonWD, setFDonWD] = useState();
    const [lightEComp, setlightEComp] = useState();
    
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

                            <IonLabel className="questions">Seus dias livres,  em que você não tem compromissos, tendem ser aos fins de semana (sábado e domingo)? </IonLabel>
                            <IonItem mode="md" className={"ion-no-padding"} lines="none">


                                <Controller render={({ onChange }) => (
                                    <IonRadioGroup value={FDonWD} onIonChange={(e) => {
                                        setFDonWD(e.detail.value);
                                        onChange(e.detail.value);
                                        if (e.detail.value != undefined)
                                            props.setState('FDonWD', e.detail.value)
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
                                    name={"FDonWD"}
                                />
                            </IonItem>

                            {(FDonWD === "não") ? 

                            <IonLabel className="questions">Marque os dias livres, em que você não teve compromissos (por exemplo: estudo, trabalho, trabalho doméstico), nas duas últimas semanas: </IonLabel>
                            : null}
                           
                            <IonList>
                           
                            {(FDonWD === "não") ? 
                                <IonItem lines="none">

                                    <Controller render={({ onChange }) => (
                                        <IonSelect multiple={true} interfaceOptions={options} className={"select-interface-option"} okText="ok" cancelText="Cancelar" placeholder="Por favor, selecione..." value={diasTrabalho} onIonChange={(e) => {
                                            setDiasTrabalho(e.detail.value);
                                            onChange(e.detail.value);
                                            if (e.detail.value != undefined)
                                                props.setState('fdQ', e.detail.value)
                                        }}>
                                            <IonSelectOption value="nenhumDia">Nenhum dia</IonSelectOption> 
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
                                        </IonSelect>)} control={control} name={"fdQ"} rules={{ required: true }} /> 
                                 
                                </IonItem> 

                                : null}

                                {/*MAIS QUE 0*/}

                                                        

                                { (props.state.fdQ != null) ?

                                    <IonItem lines="none">
                                        <IonLabel className="questions">Nos dias em que você teve compromissos (por exemplo: estudo, trabalho, trabalho doméstico), duraram quantas horas do dia? </IonLabel> </IonItem> : null}

                                {(props.state.fdQ != null) ? 
                                    <IonItem lines="none">
                                        <Controller render={({ onChange }) => (
                                            <IonSelect interfaceOptions={options} className={"select-interface-option"} okText="ok" cancelText="Cancelar" placeholder="Por favor, selecione..." onIonChange={(e) => {
                                                console.log(e);
                                                onChange(e.detail.value);
                                                if (e.detail.value != undefined)
                                                    props.setState('workDur', e.detail.value)
                                            }}>
                                                <IonSelectOption value="até 1 hora">até 1 hora</IonSelectOption>
                                                <IonSelectOption value="até 2 horas">até 2 horas</IonSelectOption>
                                                <IonSelectOption value="até 4 horas">até 4 horas</IonSelectOption>
                                                <IonSelectOption value="até 8 horas">até 8 horas</IonSelectOption>
                                                <IonSelectOption value="mais de 8 horas">mais de 8 horas</IonSelectOption>
                                            </IonSelect>)} control={control} name={"workDur"} rules={{ required: true }} />
                                       
                                    </IonItem> : null}

                                   

                                {/** 

                                {((diasTrabalho === "1") || (diasTrabalho === "2") || (diasTrabalho === "3") || (diasTrabalho === "4") || (diasTrabalho === "5") || (diasTrabalho === "6") || (diasTrabalho === "7") || (diasTrabalho === "8") || (diasTrabalho === "9") || (diasTrabalho === "10") || (diasTrabalho === "11") || (diasTrabalho === "12") || (diasTrabalho === "13") || (diasTrabalho === "14")) ?
                                    <IonItem lines="none">
                                        <IonLabel className="questions texto-default">Você pôde escolher seus horários de trabalho/estudo?</IonLabel>
                                    </IonItem> : null}

                                {((diasTrabalho === "1") || (diasTrabalho === "2") || (diasTrabalho === "3") || (diasTrabalho === "4") || (diasTrabalho === "5") || (diasTrabalho === "6") || (diasTrabalho === "7") || (diasTrabalho === "8") || (diasTrabalho === "9") || (diasTrabalho === "10") || (diasTrabalho === "11") || (diasTrabalho === "12") || (diasTrabalho === "13") || (diasTrabalho === "14")) ?
                                    <IonItem lines="none">
                                        <Controller render={({ onChange }) => (
                                            <IonRadioGroup onIonChange={(e) => {
                                                console.log(e);
                                                onChange(e.detail.value);
                                                if (e.detail.value != undefined)
                                                    props.setState('workChoice', e.detail.value)
                                            }}>

                                                <IonItem lines="none" className={"ion-no-padding"}>
                                                    <IonLabel>Sim</IonLabel>
                                                    <IonRadio slot="start" className={"radio-options"} color="primary" value="sim"></IonRadio>
                                                </IonItem>

                                                <IonItem lines="none" className={"ion-no-padding"}>
                                                    <IonLabel>Não</IonLabel>
                                                    <IonRadio slot="start" className={"radio-options"} color="primary" value="não"></IonRadio>
                                                </IonItem>

                                            </IonRadioGroup>)} control={control} name={"workChoice"} rules={{ required: true }} />
                                        {errors.workChoice && <IonText color="danger">Campo obrigatório.</IonText>}
                                    </IonItem> : null}


                                {((diasTrabalho === "1") || (diasTrabalho === "2") || (diasTrabalho === "3") || (diasTrabalho === "4") || (diasTrabalho === "5") || (diasTrabalho === "6") || (diasTrabalho === "7") || (diasTrabalho === "8") || (diasTrabalho === "9") || (diasTrabalho === "10") || (diasTrabalho === "11") || (diasTrabalho === "12") || (diasTrabalho === "13") || (diasTrabalho === "14")) ?
                                    <IonItem lines="none">
                                        <IonLabel className="questions">O quão regular foram seus horários de trabalho/estudo nas últimas duas semanas: </IonLabel>
                                    </IonItem> : null}

                                {((diasTrabalho === "1") || (diasTrabalho === "2") || (diasTrabalho === "3") || (diasTrabalho === "4") || (diasTrabalho === "5") || (diasTrabalho === "6") || (diasTrabalho === "7") || (diasTrabalho === "8") || (diasTrabalho === "9") || (diasTrabalho === "10") || (diasTrabalho === "11") || (diasTrabalho === "12") || (diasTrabalho === "13") || (diasTrabalho === "14")) ?
                                    <IonItem lines="none">

                                        <Controller render={({ onChange }) => (
                                            <IonSelect interfaceOptions={options} className={"select-interface-option"} okText="ok" cancelText="Cancelar" placeholder="Por favor, selecione..." value={horasTrabalhoRegulares} onIonChange={(e) => {
                                                setHorasTrabalhoRegulares(e.detail.value);
                                                onChange(e.detail.value);
                                                if (e.detail.value != undefined)
                                                    props.setState('workReg', e.detail.value)
                                            }}>
                                                <IonSelectOption value="muitoIrregulares">Muito irregulares</IonSelectOption>
                                                <IonSelectOption value="irregulares">Irregulares</IonSelectOption>
                                                <IonSelectOption value="regulares">Regulares</IonSelectOption>
                                                <IonSelectOption value="muitoRegulares">Muito regulares</IonSelectOption>
                                            </IonSelect>)} control={control} name={"workReg"} rules={{ required: true }} />
                                        {errors.workReg && <IonText color="danger">Campo obrigatório.</IonText>}
                                    </IonItem> : null}



                                {/*REGULARES OU MUITO REGULARES: */

                                /*

                                {((diasTrabalho === "1") || (diasTrabalho === "2") || (diasTrabalho === "3") || (diasTrabalho === "4") || (diasTrabalho === "5") || (diasTrabalho === "6") || (diasTrabalho === "7") || (diasTrabalho === "8") || (diasTrabalho === "9") || (diasTrabalho === "10") || (diasTrabalho === "11") || (diasTrabalho === "12") || (diasTrabalho === "13") || (diasTrabalho === "14")) && ((horasTrabalhoRegulares === "regulares") || (horasTrabalhoRegulares === "muitoRegulares")) ?

                                    <IonItem lines="none">
                                        <IonLabel className="questions">Em que horário, em média, você começou a trabalhar/estudar nas últimas duas semanas?</IonLabel> </IonItem> : null}

                                {((diasTrabalho === "1") || (diasTrabalho === "2") || (diasTrabalho === "3") || (diasTrabalho === "4") || (diasTrabalho === "5") || (diasTrabalho === "6") || (diasTrabalho === "7") || (diasTrabalho === "8") || (diasTrabalho === "9") || (diasTrabalho === "10") || (diasTrabalho === "11") || (diasTrabalho === "12") || (diasTrabalho === "13") || (diasTrabalho === "14")) && ((horasTrabalhoRegulares === "regulares") || (horasTrabalhoRegulares === "muitoRegulares")) ?
                                    <IonItem lines="none">
                                        <Controller render={({ onChange }) => (
                                            <IonDatetime placeholder="Por favor, selecione..." display-format="HH:mm " picker-format="HH:mm" minuteValues="0,5,10,15,20,25,30,35,40,45,50,55" onIonChange={(e) => {
                                                console.log(e);
                                                onChange(e.detail.value);
                                                if (e.detail.value != undefined)
                                                    props.setState('workStart', e.detail.value)
                                            }}></IonDatetime>)} control={control} name={"workStart"} rules={{ required: true }} />
                                        {errors.workStart && <IonText color="danger">Campo obrigatório.</IonText>}
                                        </IonItem> : null} */ }
                            </IonList> 

                            {(FDonWD === "não") ? 
                                    <IonLabel className="questions">
                                        Seus horários de exposição à luz natural são:
                                    </IonLabel>    
                                    :null}
                            
                            {(FDonWD === "não") ?  
                                    
                                    <IonItem lines="none">
                                        <Controller render={({ onChange }) => (
                                            <IonSelect interfaceOptions={options} value={lightEComp} className={"select-interface-option"} okText="ok" cancelText="Cancelar" placeholder="Por favor, selecione..." onIonChange={(e) => {
                                                setlightEComp(e.detail.value);
                                                console.log(e);
                                                onChange(e.detail.value);
                                                if (e.detail.value != undefined)
                                                    props.setState('lightExposureComp', e.detail.value)
                                            }}>
                                                <IonSelectOption value={0}>Diferentes em dias de trabalho e dias livres</IonSelectOption>
                                                <IonSelectOption value={1}>Diferentes em dias de semana e dias livres</IonSelectOption>
                                                <IonSelectOption value={2}>São iguais em dias de semana e dias livres</IonSelectOption>
                                             
                                            </IonSelect>)} control={control} name={"lightExposureComp"} rules={{ required: true }} />
                                       
                                    </IonItem>

                                    :null}

                                {(lightEComp  === 0) ?
                                <IonLabel className="questions">Quantas horas em média você se expõem à luz natural em dias de trabalho?</IonLabel>
                                :null}

                                {(lightEComp  === 0)  ? 
                                    <IonItem lines="none">
                                        <Controller render={({ onChange }) => (
                                            <IonSelect interfaceOptions={options} className={"select-interface-option"} okText="ok" cancelText="Cancelar" placeholder="Por favor, selecione..." onIonChange={(e) => {
                                                console.log(e);
                                                onChange(e.detail.value);
                                                if (e.detail.value != undefined)
                                                    props.setState('workDur', e.detail.value)
                                            }}>
                                                <IonSelectOption value={0}>opção 1</IonSelectOption>
                                                <IonSelectOption value={1}>opção 2</IonSelectOption>
                                                <IonSelectOption value={2}>opção 3</IonSelectOption>
                                                <IonSelectOption value={3}>opção 4</IonSelectOption>
                                            </IonSelect>)} control={control} name={"workDur"} rules={{ required: true }} />
                                       
                                    </IonItem> : null}

                                {(lightEComp  === 0) ?
                                <IonLabel className="questions">Quantas horas em média você se expõem à luz natural em dias livres?</IonLabel>
                                :null}

                                {(lightEComp  === 0)  ? 
                                    <IonItem lines="none">
                                        <Controller render={({ onChange }) => (
                                            <IonSelect interfaceOptions={options} className={"select-interface-option"} okText="ok" cancelText="Cancelar" placeholder="Por favor, selecione..." onIonChange={(e) => {
                                                console.log(e);
                                                onChange(e.detail.value);
                                                if (e.detail.value != undefined)
                                                    props.setState('workDur', e.detail.value)
                                            }}>
                                                <IonSelectOption value={0}>opção 1</IonSelectOption>
                                                <IonSelectOption value={1}>opção 2</IonSelectOption>
                                                <IonSelectOption value={2}>opção 3</IonSelectOption>
                                                <IonSelectOption value={3}>opção 4</IonSelectOption>
                                            </IonSelect>)} control={control} name={"workDur"} rules={{ required: true }} />
                                       
                                    </IonItem> : null}


                                {(lightEComp  === 0) ?
                                <IonLabel className="questions">Em que horário você começou a se expor à luz natural em dias de trabalho?</IonLabel>
                                :null}
                                
                                {(lightEComp  === 0) ?
                                <IonLabel>Use o formato de 24:00. Por exemplo, caso tenha começado a se expor à luz natural às cinco da tarde, responda 17:00</IonLabel>
                                :null}

                                {(lightEComp  === 0) ?
                                <IonItem lines="none">
                                    <Controller render={({ onChange }) => (
                                        <IonDatetime placeholder="Por favor, selecione..." display-format="HH:mm " picker-format="HH:mm" minuteValues="0,5,10,15,20,25,30,35,40,45,50,55" onIonChange={(e) => {
                                            console.log(e);
                                            onChange(e.detail.value);
                                            if (e.detail.value != undefined) {
                                                props.setState('exerciseTiming', e.detail.value)
                                            }
                                        }}></IonDatetime>)} control={control} name={"exerciseTiming"} rules={{ required: true }} />
                                 
                                  </IonItem>  :null}


                                {(lightEComp  === 0) ?
                                <IonLabel className="questions">Em que horário você começou a se expor à luz natural em dias livres?</IonLabel>
                                :null}
                                
                                {(lightEComp  === 0) ?
                                <IonLabel>Use o formato de 24:00. Por exemplo, caso tenha começado a se expor à luz natural às cinco da tarde, responda 17:00</IonLabel>
                                :null}

                                {(lightEComp  === 0) ?
                                <IonItem lines="none">
                                    <Controller render={({ onChange }) => (
                                        <IonDatetime placeholder="Por favor, selecione..." display-format="HH:mm " picker-format="HH:mm" minuteValues="0,5,10,15,20,25,30,35,40,45,50,55" onIonChange={(e) => {
                                            console.log(e);
                                            onChange(e.detail.value);
                                            if (e.detail.value != undefined) {
                                                props.setState('exerciseTiming', e.detail.value)
                                            }
                                        }}></IonDatetime>)} control={control} name={"exerciseTiming"} rules={{ required: true }} />
                                 
                                  </IonItem>  :null}


                       {formState.isValid === false ? 

                        <div className="preenchimentoObri">
                            <IonText  color="danger">Preencha todos campos obrigatórios para prosseguir</IonText>
                        </div>
                        
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

export default Habitos1;