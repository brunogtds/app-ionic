import React from "react";
import { StepComponentProps } from "react-step-builder";

import { IonItem, IonLabel, IonInput, IonRadioGroup, IonRadio, IonSelect, IonSelectOption, IonButton, IonCheckbox, IonList, IonDatetime } from "@ionic/react";
import { IonContent, IonText } from '@ionic/react';

import '../../Forms.css';

import { useForm, Controller } from "react-hook-form";
import { useState } from 'react';

import { IonProgressBar } from '@ionic/react';



const HabitosFinal1 = (props: StepComponentProps) => {

    const options = {
        cssClass: 'my-custom-interface'
    };

    const { control, watch, handleSubmit, errors, formState } = useForm({ mode: "onChange" });


    const [diasTrabalho, setDiasTrabalho] = useState();
    const [horasTrabalhoRegulares, setHorasTrabalhoRegulares] = useState();

    const timeformat: Intl.DateTimeFormatOptions = {
        weekday: 'short',
        year: 'numeric',
        month: 'numeric',
        day: 'numeric',
    
    };

    const timeformatBD: Intl.DateTimeFormatOptions = {
        
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

                            <IonLabel className="questions">Marque os dias livres, em que você não teve compromissos (por exemplo: estudo, trabalho, trabalho doméstico), nas duas últimas semanas: </IonLabel>
                            <IonList>
                             
                                <IonItem lines="none">

                                    <Controller render={({ onChange }) => (
                                        <IonSelect multiple={true} interfaceOptions={options} className={"select-interface-option"} okText="ok" cancelText="Cancelar" placeholder="Por favor, selecione..." value={diasTrabalho} onIonChange={(e) => {
                                            setDiasTrabalho(e.detail.value);
                                            onChange(e.detail.value);
                                            if (e.detail.value != undefined)
                                                props.setState('workQFinal', e.detail.value)
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
                                        </IonSelect>)} control={control} name={"workQFinal"} rules={{ required: true }} /> 
                              
                                </IonItem> 

                                {/*MAIS QUE 0*/}

                                                        

                                { (props.state.workQFinal != null) ?

                                    <IonItem lines="none">
                                        <IonLabel className="questions">Nos dias em que você teve compromissos (por exemplo: estudo, trabalho, trabalho doméstico), duraram quantas horas do dia? </IonLabel> </IonItem> : null}

                                {(props.state.workQFinal != null) ? 
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

                               
                                
                            </IonList> 

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

export default HabitosFinal1;