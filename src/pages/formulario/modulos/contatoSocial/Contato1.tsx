import React from "react";
import {StepComponentProps} from "react-step-builder";

import {IonItem, IonLabel, IonInput, IonRadioGroup, IonRadio, IonSelect, IonSelectOption, IonButton, IonCheckbox, IonList, IonDatetime} from "@ionic/react";
import { IonContent, IonText} from '@ionic/react';
 
import '../../Forms.css';

import { useForm, Controller } from "react-hook-form";
import {useState} from 'react';

import { IonProgressBar} from '@ionic/react';

const Contato1 = (props: StepComponentProps) => {

    const {control, watch, handleSubmit, errors, formState} = useForm({mode: "onChange"});
    
    const [distanciamento, setDistanciamento]= useState();
    const [isolamento, setIsolamento]= useState();
    

        return (
            <IonContent fullscreen color="light">
           
                
            <div className="ion-text-wrap">
               
                <form className="ion-padding">

                <div className="ion-text-wrap">
                
                        <IonLabel className="ion-text-wrap questions">Estou em distanciamento social:</IonLabel>
                        <IonList>
                        
                        
                        
                        <IonItem>
                            

                            <Controller render={({onChange}) => (

                            <IonSelect placeholder="Por favor, selecione..." value={distanciamento} onIonChange={(e) => {setDistanciamento(e.detail.value);
                                onChange(e.detail.value);
                                console.log(e);
                                if (e.detail.value != undefined) 
                                props.setState('socialDist', 'nenhuma' )}}>
                            <IonSelectOption value="todoTempo" >Todo o tempo</IonSelectOption>
                            <IonSelectOption value="maiorParte" >A maior parte do tempo</IonSelectOption>
                            <IonSelectOption value="menosMetade" >Menos da metade do tempo</IonSelectOption>
                            <IonSelectOption value="não" >Não estou em distanciamento social</IonSelectOption>
                            </IonSelect> )} control={control} name={'socialDist'} rules={{required:true}}/>
                            {errors.socialDist && <IonText color="danger">Campo obrigatório.</IonText>}
                         </IonItem>

                        {((distanciamento == "todoTempo") || (distanciamento == "maiorParte") || (distanciamento == "menosMetade") ) ? 
                         
                         <IonItem>
                         <IonLabel className="questions" >Desde que dia você está em distanciamento social (evitando sair de casa)?</IonLabel>   

                            <Controller render={({onChange}) => (
                            <IonDatetime placeholder="Selecione data" onIonChange={(e)=> {
                                console.log(e);
                                onChange(e.detail.value);
                                if (e.detail.value != undefined) 
                                props.setState('quarantineDur', e.detail.value ) }}></IonDatetime> )} control={control} rules={{required:true}} name={"quarantineDur"}/>
                        </IonItem>: null }
                        {errors.quarantineDur && <IonText color="danger">Campo obrigatório.</IonText>}
                        </IonList>                
                        
                        
                        <IonLabel className="ion-text-wrap questions">Você precisou se isolar em um cômodo em função de COVID-19 ou suspeita?</IonLabel>

                        <IonList>
                        
                       
                         <IonItem>
                            
                            
                            <Controller render={({onChange}) => (
                            <IonRadioGroup allowEmptySelection={true} value={isolamento} onIonChange={(e) => {setIsolamento(e.detail.value); 
                                onChange(e.detail.value);
                                if (e.detail.value != undefined) 
                                props.setState('quarantineRoom', e.detail.value ) }}>

                                <IonItem>
                                <IonLabel>Sim</IonLabel>
                                <IonRadio color="primary" value="sim"></IonRadio>
                                </IonItem>
                               
                                <IonItem>
                                <IonLabel>Não</IonLabel>
                                <IonRadio color="primary" value="não"></IonRadio>
                                </IonItem>

                                <IonItem>
                                <IonLabel>Sem resposta</IonLabel>
                                <IonRadio color="primary" value="semResposta"></IonRadio>
                                </IonItem>
                            </IonRadioGroup> )} rules={{required:true}} control={control} name={"quarantineRoom"} />
                            {errors.quarantineRoom && <IonText color="danger">Campo obrigatório.</IonText>}
                        </IonItem>  
                       

                        {/*PRECISOU SE ISOLAR -> SIM */}

                        {isolamento === "sim" ?
                        <IonItem>
                            <IonLabel className="questions">Em que mês(meses) você precisou se isolar?</IonLabel>

                            <Controller render={({onChange}) => (
                            <IonList>

                               
                                <IonItem>
                                <IonCheckbox color="primary" value= {props.getState("quarantineRoomDur", "")} onIonChange={(e)=> {
                                console.log(e);
                                onChange(e.detail.value);
                                if (e.detail.value != undefined) 
                                props.setState('quarantineRoomDur', 'fevereiro' ) }}></IonCheckbox>
                                <IonLabel>Fevereiro</IonLabel>
                                </IonItem>

                                <IonItem>
                                <IonCheckbox color="primary" value= {props.getState("quarantineRoomDur", "")} onIonChange={(e)=> {
                                console.log(e);
                                onChange(e.detail.value);
                                if (e.detail.value != undefined) 
                                props.setState('quarantineRoomDur', 'março' ) }}></IonCheckbox>
                                <IonLabel>Março</IonLabel>
                                </IonItem>

                                <IonItem>
                                <IonCheckbox color="primary" value= {props.getState("quarantineRoomDur", "")} onIonChange={(e)=> {
                                console.log(e);
                                onChange(e.detail.value);
                                if (e.detail.value != undefined) 
                                props.setState('quarantineRoomDur', 'abril' ) }}></IonCheckbox>
                                <IonLabel>Abril</IonLabel>
                                </IonItem>

                                <IonItem>
                                <IonCheckbox color="primary" value= {props.getState("quarantineRoomDur", "")} onIonChange={(e)=> {
                                console.log(e);
                                onChange(e.detail.value);
                                if (e.detail.value != undefined) 
                                props.setState('quarantineRoomDur', 'maio' ) }}></IonCheckbox>
                                <IonLabel>Maio</IonLabel>
                                </IonItem>

                                <IonItem>
                                <IonCheckbox color="primary" value= {props.getState("quarantineRoomDur", "")} onIonChange={(e)=> {
                                console.log(e);
                                onChange(e.detail.value);
                                if (e.detail.value != undefined) 
                                props.setState('quarantineRoomDur', 'junho' ) }}></IonCheckbox>
                                <IonLabel>Junho</IonLabel>
                                </IonItem>

                                <IonItem>
                                <IonCheckbox color="primary" value= {props.getState("quarantineRoomDur", "")} onIonChange={(e)=> {
                                console.log(e);
                                onChange(e.detail.value);
                                if (e.detail.value != undefined) 
                                props.setState('quarantineRoomDur', 'julho' ) }}></IonCheckbox>
                                <IonLabel>Julho</IonLabel>
                                </IonItem>

                                <IonItem>
                                <IonCheckbox color="primary" value= {props.getState("quarantineRoomDur", "")} onIonChange={(e)=> {
                                console.log(e);
                                onChange(e.detail.value);
                                if (e.detail.value != undefined) 
                                props.setState('quarantineRoomDur', 'agosto' ) }}></IonCheckbox>
                                <IonLabel>Agosto</IonLabel>
                                </IonItem>

                                <IonItem>
                                <IonCheckbox color="primary" value= {props.getState("quarantineRoomDur", "")} onIonChange={(e)=> {
                                console.log(e);
                                onChange(e.detail.value);
                                if (e.detail.value != undefined) 
                                props.setState('quarantineRoomDur', 'setembro' ) }}></IonCheckbox>
                                <IonLabel>Setembro</IonLabel>
                                </IonItem>

                                <IonItem>
                                <IonCheckbox color="primary" value= {props.getState("quarantineRoomDur", "")} onIonChange={(e)=> {
                                console.log(e);
                                onChange(e.detail.value);
                                if (e.detail.value != undefined) 
                                props.setState('quarantineRoomDur', 'outubro' ) }}></IonCheckbox>
                                <IonLabel>Outubro</IonLabel>
                                </IonItem>

                                <IonItem>
                                <IonCheckbox color="primary" value= {props.getState("quarantineRoomDur", "")} onIonChange={(e)=> {
                                console.log(e);
                                onChange(e.detail.value);
                                if (e.detail.value != undefined) 
                                props.setState('quarantineRoomDur', 'novembro' ) }}></IonCheckbox>
                                <IonLabel>Novembro</IonLabel>
                                </IonItem>

                                <IonItem>
                                <IonCheckbox color="primary" value= {props.getState("quarantineRoomDur", "")} onIonChange={(e)=> {
                                console.log(e);
                                onChange(e.detail.value);
                                if (e.detail.value != undefined) 
                                props.setState('quarantineRoomDur', 'dezembro' ) }}></IonCheckbox>
                                <IonLabel>Dezembro</IonLabel>
                                </IonItem>


                            </IonList>    )}
                            control={control}
                            name={"quarantineRoomDur"}
                            />

                        </IonItem> : null }

                        </IonList>

                        {/*FIM->PRECISOU SE ISOLAR*/}

                        <IonLabel className="questions">Quanto você precisa sair para fazer alguma atividade, quanto tempo normalmente fica fora de casa?</IonLabel>
                        <IonItem>
                            

                            <Controller render={({onChange}) => (
                            <IonSelect placeholder="Por favor, selecione..." onIonChange={(e) => {
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

                        

                <IonButton onClick={props.prev} disabled={true} size="large" fill="clear">Anterior</IonButton>
                <IonButton disabled={formState.isValid === false} onClick={props.next} size="large" className={"btnProximo"} fill="clear" >Próximo</IonButton>
                   
                   </div>
                </form>
                
            </div>
            </IonContent>
        )

}

export default Contato1;