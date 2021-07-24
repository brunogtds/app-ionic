import React from "react";
import {StepComponentProps} from "react-step-builder";

import {IonItem, IonLabel, IonInput, IonRadioGroup, IonRadio, IonSelect, IonSelectOption, IonButton, IonCheckbox, IonList, IonDatetime} from "@ionic/react";
import { IonContent, IonText} from '@ionic/react';
 
import '../../Forms.css';

import { useForm, Controller } from "react-hook-form";
import {useState} from 'react';

import { IonProgressBar} from '@ionic/react';

const ContatoFinal1 = (props: StepComponentProps) => {

    const {control, watch, handleSubmit, errors, formState} = useForm({mode: "onChange"});
    
    const [distanciamento, setDistanciamento]= useState();
    const [isolamento, setIsolamento]= useState();
    

        return (
            <IonContent fullscreen color="light">
           
                
            <div className="ion-text-wrap">
               
                <form className="ion-padding">

                <div className="ion-text-wrap">
                
                        <IonLabel className="ion-text-wrap questions">Estou em distanciamento social:</IonLabel>
                                                
                        <IonItem>
                            

                            <Controller render={({onChange}) => (

                            <IonSelect placeholder="Por favor, selecione..." value={distanciamento} onIonChange={(e) => {setDistanciamento(e.detail.value);
                                onChange(e.detail.value);
                                console.log(e);
                                if (e.detail.value != undefined) 
                                props.setState('socialDistFinal', 'nenhuma' )}}>
                            <IonSelectOption value="todoTempo" >Todo o tempo</IonSelectOption>
                            <IonSelectOption value="maiorParte" >A maior parte do tempo</IonSelectOption>
                            <IonSelectOption value="menosMetade" >Menos da metade do tempo</IonSelectOption>
                            <IonSelectOption value="não" >Não estou em distanciamento social</IonSelectOption>
                            </IonSelect> )} control={control} name={'socialDistFinal'} rules={{required:true}}/>
                            {errors.socialDistFinal && <IonText color="danger">Campo obrigatório.</IonText>}
                         </IonItem>
           
                        
                        
                        <IonLabel className="ion-text-wrap questions">Você precisou se isolar em um cômodo em função de COVID-19 ou suspeita?</IonLabel>

                                            
                       
                         <IonItem>
                            
                            
                            <Controller render={({onChange}) => (
                            <IonRadioGroup value={isolamento} onIonChange={(e) => {setIsolamento(e.detail.value); 
                                onChange(e.detail.value);
                                if (e.detail.value != undefined) 
                                props.setState('quarantineRoomFinal', e.detail.value ) }}>

                                <IonItem>
                                <IonLabel>Sim</IonLabel>
                                <IonRadio  className={"radio-options"} color="primary" value="sim"></IonRadio>
                                </IonItem>
                               
                                <IonItem>
                                <IonLabel>Não</IonLabel>
                                <IonRadio  className={"radio-options"} color="primary" value="não"></IonRadio>
                                </IonItem>

                                <IonItem>
                                <IonLabel>Sem resposta</IonLabel>
                                <IonRadio className={"radio-options"} color="primary" value="semResposta"></IonRadio>
                                </IonItem>
                            </IonRadioGroup> )} rules={{required:true}} control={control} name={"quarantineRoomFinal"} />
                            {errors.quarantineRoomFinal && <IonText color="danger">Campo obrigatório.</IonText>}
                        </IonItem>  
                       

                    

                        

                <IonButton onClick={props.prev} disabled={true} size="large" fill="clear">Anterior</IonButton>
                <IonButton disabled={formState.isValid === false} onClick={props.next} size="large" className={"btnProximo"} fill="clear" >Próximo</IonButton>
                   
                   </div>
                </form>
                
            </div>
            </IonContent>
        )

}

export default ContatoFinal1;