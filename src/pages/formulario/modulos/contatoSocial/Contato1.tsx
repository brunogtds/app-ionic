import React from "react";
import {StepComponentProps} from "react-step-builder";

import {IonItem, IonLabel, IonInput, IonRadioGroup, IonRadio, IonSelect, IonSelectOption, IonButton, IonCheckbox, IonList, IonDatetime} from "@ionic/react";
import { IonContent, IonText} from '@ionic/react';
 
import '../../Forms.css';

import { useForm, Controller } from "react-hook-form";
import {useState} from 'react';

import { IonProgressBar} from '@ionic/react';

const Contato1 = (props: StepComponentProps) => {

    const options = {
        cssClass: 'my-custom-interface'
      };

    const {control, watch, handleSubmit, errors, formState} = useForm({mode: "onChange"});
    
    const [distanciamento, setDistanciamento]= useState();
    const [isolamento, setIsolamento]= useState();
    

        return (
            <IonContent fullscreen color="background">
           
                
            <div className="ion-text-wrap">
               
                <form className="ion-padding texto-default">
                <div className="texto-title">Contato social</div>
                <div className="texto-default">Para receber dicas personalizadas, preencha para sabermos mais sobre você e suas atividades sociais!</div>

                <div className="ion-text-wrap">
                
                        
                       
                        
                <IonLabel className="questions">Estou em distanciamento social:</IonLabel>
              
                        <IonItem lines="none">
                      


                            <Controller render={({onChange}) => (

                            <IonSelect className={"select-interface-option"} okText="ok" cancelText="Cancelar" placeholder="Por favor, selecione..." value={distanciamento} onIonChange={(e) => {setDistanciamento(e.detail.value);
                                onChange(e.detail.value);
                                console.log(e);
                                if (e.detail.value != undefined) 
                                props.setState('socialDist', e.detail.value )}}>
                            <IonSelectOption value="todoTempo" >Todo o tempo</IonSelectOption>
                            <IonSelectOption value="maiorParte" >A maior parte do tempo</IonSelectOption>
                            <IonSelectOption value="menosMetade" >Menos da metade do tempo</IonSelectOption>
                            <IonSelectOption value="não" >Não estou em distanciamento social</IonSelectOption>
                            </IonSelect> )} control={control} name={'socialDist'} rules={{required:true}}/>
                            {errors.socialDist && <IonText color="danger">Campo obrigatório.</IonText>}
                         </IonItem>
                        
                        <IonLabel className="questions">Você precisou se isolar em um cômodo em função de COVID-19 ou suspeita?</IonLabel>

                         <IonItem lines="none" className={"ion-no-padding"}>
                            
                            
                            <Controller render={({onChange}) => (
                            <IonRadioGroup value={isolamento} onIonChange={(e) => {setIsolamento(e.detail.value); 
                                onChange(e.detail.value);
                                if (e.detail.value != undefined) 
                                props.setState('quarantineRoom', e.detail.value ) }}>

                                <IonItem lines="none" className={"ion-no-padding"}>
                                <IonLabel>Sim</IonLabel>
                                <IonRadio slot="start" className={"radio-options"}  color="primary" value="sim"></IonRadio>
                                </IonItem>
                               
                                <IonItem lines="none" className={"ion-no-padding"}>
                                <IonLabel>Não</IonLabel>
                                <IonRadio slot="start" className={"radio-options"}  color="primary" value="não"></IonRadio>
                                </IonItem>

                                <IonItem lines="none" className={"ion-no-padding"}>
                                <IonLabel>Sem resposta</IonLabel>
                                <IonRadio slot="start" className={"radio-options"} color="primary" value="semResposta"></IonRadio>
                                </IonItem>
                            </IonRadioGroup> )} rules={{required:true}} control={control} name={"quarantineRoom"} />
                            {errors.quarantineRoom && <IonText color="danger">Campo obrigatório.</IonText>}
                        </IonItem>  
                       

                        <IonLabel className="questions">Quanto você precisa sair para fazer alguma atividade, quanto tempo normalmente fica fora de casa?</IonLabel>
                        <IonItem lines="none" >
                            

                            <Controller render={({onChange}) => (
                            <IonSelect className={"select-interface-option"} okText="ok" cancelText="Cancelar" placeholder="Por favor, selecione..." onIonChange={(e) => {
                                console.log(e);
                                onChange(e.detail.value);
                                if (e.detail.value != undefined) 
                                props.setState('quarantineOutDur', e.detail.value ) 
                            }}>
                            <IonSelectOption value="nunca">Nunca saio de casa</IonSelectOption>
                            <IonSelectOption value="menos de 1 hora">Menos de 1 hora</IonSelectOption>
                            <IonSelectOption value="até 2 horas">Até 2 horas</IonSelectOption>
                            <IonSelectOption value="até 4 horas">Até 4 horas</IonSelectOption>
                            <IonSelectOption value="até 8 horas">Até 8 horas</IonSelectOption>
                            <IonSelectOption value="mais de 8 horas">Mais de 8 horas</IonSelectOption>
                            </IonSelect> )} control={control} name={"quarantineOutDur"} rules={{required:true}} />
                            {errors.quarantineOutDur && <IonText color="danger">Campo obrigatório.</IonText>}
                         </IonItem>

                         <div id="progress-bar-div" >
                            <IonProgressBar className={"progress-bar"} value={0.5} color="orange"></IonProgressBar>
                        </div>


                        

                <IonButton onClick={props.prev} disabled={true} className="btnAnterior" size="default" shape="round" fill="outline">Anterior</IonButton>
                <IonButton disabled={formState.isValid === false} onClick={props.next} size="default" shape="round" className={"btnProximo"} fill="outline" >Próximo</IonButton>
                   
                   </div>
                </form>
                
            </div>
            </IonContent>
        )

}

export default Contato1;