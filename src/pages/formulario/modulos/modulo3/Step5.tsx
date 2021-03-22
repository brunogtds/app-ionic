import React from "react";
import {StepComponentProps} from "react-step-builder";

import {IonItem, IonLabel, IonInput, IonRadioGroup, IonRadio, IonSelect, IonSelectOption, IonButton, IonCheckbox, IonList, IonDatetime} from "@ionic/react";
import { IonContent} from '@ionic/react';
 
import '../../Forms.css';

import { useForm, Controller } from "react-hook-form";
import {useState} from 'react';

import { IonProgressBar} from '@ionic/react';

const Step5 = (props: StepComponentProps) => {

    const {control, watch, handleSubmit} = useForm();
    
    const [distanciamento, setDistanciamento]= useState();
    const [isolamento, setIsolamento]= useState();
    const [diasTrabalho, setDiasTrabalho]= useState();
    const [horasTrabalhoRegulares, setHorasTrabalhoRegulares]= useState();
    const [rotinaAlimento, setRotinaAlimento] = useState();
    const [horarioAlimento, setHorarioAlimento] = useState();
    const [atividadeFisica, setAtividadeFisica]= useState();
    const [horarioAtividadeFisica, setHorarioAtividadeFisica]= useState();
    const [frequenciaLuzNatural, setFrequenciaLuzNatural] = useState();
    const [horarioLuzNatural, setHorarioLuzNatural] = useState();

        return (
            <IonContent fullscreen>
            <IonItem>
       
        
            </IonItem>
                
            <div className="ion-text-wrap">
               
                <form className="ion-padding">

                <div className="ion-text-wrap">
                

                        <IonList>
                        
                        <IonLabel className="ion-text-wrap questions">Estou em distanciamento social:</IonLabel>
                        
                        <IonItem>
                            

                            <Controller render={({onChange}) => (

                            <IonSelect placeholder="Por favor, selecione..." value={distanciamento} onIonChange={(e) => {setDistanciamento(e.detail.value);
                                if (e.detail.value != undefined) 
                                props.setState('socialDist', 'nenhuma' )}}>
                            <IonSelectOption value="todoTempo" >Todo o tempo</IonSelectOption>
                            <IonSelectOption value="maiorParte" >A maior parte do tempo</IonSelectOption>
                            <IonSelectOption value="menosMetade" >Menos da metade do tempo</IonSelectOption>
                            <IonSelectOption value="não" >Não estou em distanciamento social</IonSelectOption>
                            </IonSelect> )} control={control} name={'socialDist'}/>
                         </IonItem>

                        {((distanciamento == "todoTempo") || (distanciamento == "maiorParte") || (distanciamento == "menosMetade") ) ? 
                         <IonItem>
                            <IonLabel position="floating" className="ion-text-wrap questions" >Desde que dia você está em distanciamento social (evitando sair de casa)?</IonLabel>

                            <Controller render={({onChange}) => (
                            <IonDatetime placeholder="Selecione data" onIonChange={(e)=> {
                                console.log(e);
                                onChange(e.detail.value);
                                if (e.detail.value != undefined) 
                                props.setState('quarantineDur', e.detail.value ) }}></IonDatetime> )} control={control} name={"quarantineDur"}/>
                        </IonItem>: null }

                        </IonList>

                        <IonList>
                        
                        <IonLabel className="ion-text-wrap questions">Você precisou se isolar em um cômodo em função de COVID-19 ou suspeita?</IonLabel>
                         <IonItem>
                            
                            
                            <Controller render={({onChange}) => (
                            <IonRadioGroup value={isolamento} onIonChange={(e) => {setIsolamento(e.detail.value); 
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
                            </IonRadioGroup> )} control={control} name={"quarantineRoom"} />
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
                            </IonSelect> )} control={control} name={"quarantineOutDur"}/>
                         </IonItem>

                         <IonLabel className="questions">Sua conexão de internet é: </IonLabel>
                         <IonItem>
                            
                            <Controller render={({onChange}) => (
                            <IonSelect placeholder="Por favor, selecione..." onIonChange={(e) => {
                                console.log(e);
                                onChange(e.detail.value);
                                if (e.detail.value != undefined) 
                                props.setState('internet', e.detail.value ) 
                            }}>
                            <IonSelectOption value="muito boa">Muito boa</IonSelectOption>
                            <IonSelectOption value="boa">Boa</IonSelectOption>
                            <IonSelectOption value="regular">Regular</IonSelectOption>
                            <IonSelectOption value="ruim">Ruim</IonSelectOption> 
                            
                            </IonSelect> )} control={control} name={"internet"}/>
                         </IonItem>

                         <IonLabel className="questions">Com quantas pessoas por dia, aproximadamente, você teve contato (online, incluindo mensagens, ou ao vivo) nas últimas duas semanas? </IonLabel>
                         <IonItem>
                            
                           
                            <Controller render={({onChange}) => (
                            <IonSelect placeholder="Por favor, selecione..." onIonChange={(e) => {
                                console.log(e);
                                onChange(e.detail.value);
                                if (e.detail.value != undefined) 
                                props.setState('contactN', e.detail.value )
                            }}>
                            <IonSelectOption value="nenhuma">Nenhuma</IonSelectOption>
                            <IonSelectOption value="1-5">1-5</IonSelectOption>
                            <IonSelectOption value="5-10">5-10</IonSelectOption>
                            <IonSelectOption value="10-15">10-15</IonSelectOption>
                            <IonSelectOption value="15-20">15-20</IonSelectOption>
                            <IonSelectOption value="Mais de 20">Mais de 20</IonSelectOption>
                            </IonSelect> )} control={control} name={"contactN"} />
                         </IonItem>

                        <IonList>
                        <IonLabel className="questions">Em quantos dias você trabalhou ou estudou nas últimas duas semanas? </IonLabel>
                         <IonItem>
                            
                            <Controller render={({onChange}) => (
                            <IonSelect placeholder="Por favor, selecione..." value={diasTrabalho} onIonChange={(e) => {setDiasTrabalho(e.detail.value);
                                if (e.detail.value != undefined) 
                                props.setState('workQ', e.detail.value ) }}>
                            <IonSelectOption value="0">0</IonSelectOption>
                            <IonSelectOption value="1">1</IonSelectOption>
                            <IonSelectOption value="2">2</IonSelectOption>
                            <IonSelectOption value="3">3</IonSelectOption>
                            <IonSelectOption value="4">4</IonSelectOption>
                            <IonSelectOption value="5">5</IonSelectOption>
                            <IonSelectOption value="6">6</IonSelectOption>
                            <IonSelectOption value="7">7</IonSelectOption>
                            <IonSelectOption value="8">8</IonSelectOption>
                            <IonSelectOption value="9">9</IonSelectOption>
                            <IonSelectOption value="10">10</IonSelectOption>
                            <IonSelectOption value="11">11</IonSelectOption>
                            <IonSelectOption value="12">12</IonSelectOption>
                            <IonSelectOption value="13">13</IonSelectOption>
                            <IonSelectOption value="14">14</IonSelectOption>
                            </IonSelect> )} control={control} name={"workQ"}/>
                         </IonItem> 

                        {/*MAIS QUE 0*/}

                        {((diasTrabalho === "1") || (diasTrabalho === "2") || (diasTrabalho === "3") || (diasTrabalho === "4") || (diasTrabalho === "5") || (diasTrabalho === "6") || (diasTrabalho === "7") || (diasTrabalho === "8") || (diasTrabalho === "9") || (diasTrabalho === "10") || (diasTrabalho === "11") || (diasTrabalho === "12") || (diasTrabalho === "13") || (diasTrabalho === "14"))              ?

                        <IonItem>
                            <IonLabel className="questions">Quantas horas em média você trabalhou/estudou nestes dias? </IonLabel>
                            <Controller render={({onChange}) => (
                            <IonSelect placeholder="Por favor, selecione..." onIonChange={(e) => {
                                console.log(e);
                                onChange(e.detail.value);
                                if (e.detail.value != undefined) 
                                props.setState('workDur', e.detail.value )
                            }}>
                            <IonSelectOption value="até 1 hora">até 1 hora</IonSelectOption>
                            <IonSelectOption value="até 2 horas">até 2 horas</IonSelectOption>
                            <IonSelectOption value="até 4 horas">até 4 horas</IonSelectOption>
                            <IonSelectOption value="até 8 horas">até 8 horas</IonSelectOption>
                            <IonSelectOption value="mais de 8 horas">mais de 8 horas</IonSelectOption>
                            </IonSelect> )} control={control} name={"workDur"}/>
                         </IonItem>:null  }

                        {((diasTrabalho === "1") || (diasTrabalho === "2") || (diasTrabalho === "3") || (diasTrabalho === "4") || (diasTrabalho === "5") || (diasTrabalho === "6") || (diasTrabalho === "7") || (diasTrabalho === "8") || (diasTrabalho === "9") || (diasTrabalho === "10") || (diasTrabalho === "11") || (diasTrabalho === "12") || (diasTrabalho === "13") || (diasTrabalho === "14"))  ?
                         <IonItem>
                            <IonLabel className="questions">Você pôde escolher seus horários de trabalho/estudo?</IonLabel>
                            <Controller render={({onChange}) => (
                            <IonRadioGroup onIonChange={(e) => {
                                console.log(e);
                                onChange(e.detail.value);
                                if (e.detail.value != undefined) 
                                props.setState('workChoice', e.detail.value )
                            }}>

                                <IonItem>
                                <IonLabel>Sim</IonLabel>
                                <IonRadio color="primary" value="sim"></IonRadio>
                                </IonItem>
                               
                                <IonItem>
                                <IonLabel>Não</IonLabel>
                                <IonRadio color="primary" value="não"></IonRadio>
                                </IonItem>
                               
                            </IonRadioGroup> )} control={control} name={"workChoice"}/>
                        </IonItem>:null }

                        
                        {((diasTrabalho === "1") || (diasTrabalho === "2") || (diasTrabalho === "3") || (diasTrabalho === "4") || (diasTrabalho === "5") || (diasTrabalho === "6") || (diasTrabalho === "7") || (diasTrabalho === "8") || (diasTrabalho === "9") || (diasTrabalho === "10") || (diasTrabalho === "11") || (diasTrabalho === "12") || (diasTrabalho === "13") || (diasTrabalho === "14")) ?
                        <IonItem>
                            <IonLabel className="questions">O quão regular foram seus horários de trabalho/estudo nas últimas duas semanas: </IonLabel>

                            <Controller render={({onChange}) => (
                            <IonSelect placeholder="Por favor, selecione..." value={horasTrabalhoRegulares} onIonChange={(e) => {setHorasTrabalhoRegulares(e.detail.value) ; 
                            if (e.detail.value != undefined) 
                            props.setState('workReg', e.detail.value )}}>
                            <IonSelectOption value="muitoIrregulares">Muito irregulares</IonSelectOption>
                            <IonSelectOption value="irregulares">Irregulares</IonSelectOption>
                            <IonSelectOption value="regulares">Regulares</IonSelectOption>
                            <IonSelectOption value="muitoRegulares">Muito regulares</IonSelectOption>
                            </IonSelect> )} control={control} name={"workReg"}/>
                         </IonItem>:null }

                            

                         {/*REGULARES OU MUITO REGULARES: */}
                        
                        {((diasTrabalho === "1") || (diasTrabalho === "2") || (diasTrabalho === "3") || (diasTrabalho === "4") || (diasTrabalho === "5") || (diasTrabalho === "6") || (diasTrabalho === "7") || (diasTrabalho === "8") || (diasTrabalho === "9") || (diasTrabalho === "10") || (diasTrabalho === "11") || (diasTrabalho === "12") || (diasTrabalho === "13") || (diasTrabalho === "14")) && ((horasTrabalhoRegulares === "regulares") || (horasTrabalhoRegulares === "muitoRegulares")) ?
                        
                         <IonItem>
                             <IonLabel className="questions">Em que horário, em média, você começou a trabalhar/estudar nas últimas duas semanas?</IonLabel>
                             <Controller render={({onChange}) => (
                             <IonDatetime display-format="h:mm A" picker-format="h:mm A" onIonChange={(e) => {
                                console.log(e);
                                onChange(e.detail.value);
                                if (e.detail.value != undefined) 
                                props.setState('workStart', e.detail.value )
                            }}></IonDatetime> )} control={control} name={"workStart"}/>
                         </IonItem>:null }
                        </IonList>
                          

                <IonButton onClick={props.prev} size="large">Anterior</IonButton>
                <IonButton onClick={props.next} size="large" className={"btnProximo"} >Próximo</IonButton>
                   
                   </div>
                </form>
                
            </div>
            </IonContent>
        )

}

export default Step5;