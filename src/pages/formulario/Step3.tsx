import React from "react";
import {StepComponentProps} from "react-step-builder";

import {IonItem, IonLabel, IonInput, IonRadioGroup, IonRadio, IonSelect, IonSelectOption, IonButton, IonCheckbox, IonList, IonDatetime} from "@ionic/react";
import { IonContent} from '@ionic/react';
 
import './Forms.css';

import { useForm, Controller } from "react-hook-form";
import {useState} from 'react';

import { IonProgressBar} from '@ionic/react';

const Step3 = (props: StepComponentProps) => {

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
            <div className="ion-text-wrap">
               
                <form className="ion-padding">

                <div className="ion-text-wrap">
                <IonProgressBar value={0.3} buffer={0.3}></IonProgressBar>

                        <IonList>
                        
                        
                        <IonItem>
                            <IonLabel className="ion-text-wrap">Estou em distanciamento social:</IonLabel>

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
                            <IonLabel position="floating" className="ion-text-wrap" >Desde que dia você está em distanciamento social (evitando sair de casa)?</IonLabel>

                            <Controller render={({onChange}) => (
                            <IonDatetime placeholder="Selecione data" onIonChange={(e)=> {
                                console.log(e);
                                onChange(e.detail.value);
                                if (e.detail.value != undefined) 
                                props.setState('quarantineDur', e.detail.value ) }}></IonDatetime> )} control={control} name={"quarantineDur"}/>
                        </IonItem>: null }

                        </IonList>

                        <IonList>
                        
                         <IonItem>
                            <IonLabel className="ion-text-wrap">Você precisou se isolar em um cômodo em função de COVID-19 ou suspeita?</IonLabel>
                            
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
                            <IonLabel>Em que mês(meses) você precisou se isolar?</IonLabel>

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

                        <IonItem>
                            <IonLabel>Quanto você precisa sair para fazer alguma atividade, quanto tempo normalmente fica fora de casa?</IonLabel>

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


                         <IonItem>
                            <IonLabel>Sua conexão de internet é: </IonLabel>
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

                         
                         <IonItem>
                            <IonLabel>Com quantas pessoas por dia, aproximadamente, você teve contato (online, incluindo mensagens, ou ao vivo) nas últimas duas semanas? </IonLabel>
                           
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
                         <IonItem>
                            <IonLabel>Em quantos dias você trabalhou ou estudou nas últimas duas semanas? </IonLabel>
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
                            <IonLabel>Quantas horas em média você trabalhou/estudou nestes dias? </IonLabel>
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
                            <IonLabel>Você pôde escolher seus horários de trabalho/estudo?</IonLabel>
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
                            <IonLabel>O quão regular foram seus horários de trabalho/estudo nas últimas duas semanas: </IonLabel>

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
                             <IonLabel>Em que horário, em média, você começou a trabalhar/estudar nas últimas duas semanas?</IonLabel>
                             <Controller render={({onChange}) => (
                             <IonDatetime display-format="h:mm A" picker-format="h:mm A" onIonChange={(e) => {
                                console.log(e);
                                onChange(e.detail.value);
                                if (e.detail.value != undefined) 
                                props.setState('workStart', e.detail.value )
                            }}></IonDatetime> )} control={control} name={"workStart"}/>
                         </IonItem>:null }

                         </IonList>


                         <IonItem>
                            <IonLabel>Como foram suas rotinas de sono nas últimas duas semanas? </IonLabel>
                            <Controller render={({onChange}) => (
                            <IonSelect placeholder="Por favor, selecione..." onIonChange={(e) => {
                                console.log(e);
                                onChange(e.detail.value);
                                if (e.detail.value != undefined) 
                                props.setState('sleepReg', e.detail.value )
                            }}>
                            <IonSelectOption value="muito irregulares">Muito irregulares</IonSelectOption>
                            <IonSelectOption value="irregulares">Irregulares</IonSelectOption>
                            <IonSelectOption value="regulares">Regulares</IonSelectOption>
                            <IonSelectOption value="muito regulares">Muito regulares</IonSelectOption>
                            </IonSelect> )} control={control} name={"sleepReg"}/>
                         </IonItem>

                         <IonItem>
                            <IonLabel>Como você classificaria a qualidade do seu sono nas últimas duas semanas?</IonLabel>
                            <Controller render={({onChange}) => (
                            <IonSelect placeholder="Por favor, selecione..." onIonChange={(e) => {
                                console.log(e);
                                onChange(e.detail.value);
                                if (e.detail.value != undefined) 
                                props.setState('sleepQual', e.detail.value )
                            }}>
                            <IonSelectOption value="muito boa">Muito boa</IonSelectOption>
                            <IonSelectOption value="boa">Boa</IonSelectOption>
                            <IonSelectOption value="ruim">Ruim</IonSelectOption>
                            <IonSelectOption value="muito ruim">Muito ruim</IonSelectOption>
                            </IonSelect> )} control={control} name={"sleepQual"}/>
                         </IonItem>

                         <IonList>

                         <IonItem>
                            <IonLabel>Como foram suas rotinas de alimentação nas últimas duas semanas?</IonLabel>

                            <Controller render={({onChange}) => (
                            <IonSelect placeholder="Por favor, selecione..." value={rotinaAlimento} onIonChange={(e) => {setRotinaAlimento(e.detail.value);
                                if (e.detail.value != undefined) 
                                props.setState('feedReg', e.detail.value )}}>
                            <IonSelectOption value="muitoIrregulares">Muito irregulares</IonSelectOption>
                            <IonSelectOption value="irregulares">Irregulares</IonSelectOption>
                            <IonSelectOption value="regulares">Regulares</IonSelectOption>
                            <IonSelectOption value="muitoRegulares">Muito regulares</IonSelectOption>
                            </IonSelect> )} control={control} name="feedReg"/>
                         </IonItem>

                         {/*REGULARES OU MUITO REGULARES*/}

                         {((rotinaAlimento === "regulares") || (rotinaAlimento === "muitoRegulares")) ?

                         <IonItem>
                             <IonLabel>Em que horário, em média, nas últimas duas semanas, você se alimentou pela primeira vez no dia, nos dias de trabalho ou de semana?</IonLabel>
                             <Controller render={({onChange}) => (
                             <IonDatetime display-format="h:mm A" picker-format="h:mm A" onIonChange={(e) => {
                                console.log(e);
                                onChange(e.detail.value);
                                if (e.detail.value != undefined) 
                                props.setState('feedStartWD', e.detail.value )
                            }}></IonDatetime> )} control={control} name="feedStartWD"/>
                         </IonItem> :null }

                         {((rotinaAlimento === "regulares") || (rotinaAlimento === "muitoRegulares")) ?
                         <IonItem>
                             <IonLabel>Em que horário, em média, você se alimentou pela última vez no dia, nas últimas duas semanas?</IonLabel>
                             <Controller render={({onChange}) => (
                             <IonDatetime display-format="h:mm A" picker-format="h:mm A"  onIonChange={(e) => {
                                console.log(e);
                                onChange(e.detail.value);
                                if (e.detail.value != undefined) 
                                props.setState('feedEndWD', e.detail.value )
                            }}></IonDatetime> )} control={control} name="feedEndWD"/>
                         </IonItem>: null} 

                         </IonList>

                      
                         <IonItem>
                            <IonLabel>Seus horários de alimentação foram diferentes em dias de trabalho comparados a dias livres (ou em dias de semana comparados a fins de semana) nas últimas duas semanas?</IonLabel>
                            <Controller render={({onChange}) => (
                            <IonRadioGroup value={horarioAlimento} onIonChange={(e) => {setHorarioAlimento(e.detail.value);
                                if (e.detail.value != undefined) 
                                props.setState('feedfdyn', e.detail.value )}}>

                                <IonItem>
                                <IonLabel>Sim</IonLabel>
                                <IonRadio color="primary" value="sim"></IonRadio>
                                </IonItem>
                               
                                <IonItem>
                                <IonLabel>Não</IonLabel>
                                <IonRadio color="primary" value="não"></IonRadio>
                                </IonItem>
                               
                            </IonRadioGroup> )} control={control} name={"feedfdyn"}/>
                        </IonItem>

                        {((rotinaAlimento === "regulares") || (rotinaAlimento === "muitoRegulares") || (horarioAlimento === "sim")) ?
                         <IonItem>
                             <IonLabel>Em que horário, em média, nas últimas duas semanas, você se alimentou pela primeira vez no dia, nos dias livres ou fins de semana?</IonLabel>
                             <Controller render={({onChange}) => (
                             <IonDatetime display-format="h:mm A" picker-format="h:mm A" onIonChange={(e) => {
                                console.log(e);
                                onChange(e.detail.value);
                                if (e.detail.value != undefined) 
                                props.setState('feedStart', e.detail.value )
                            }}></IonDatetime> )} control={control} name={"feedStart"}/>
                         </IonItem>: null} 

                         {((rotinaAlimento === "regulares") || (rotinaAlimento === "muitoRegulares") || (horarioAlimento === "sim")) ?
                         <IonItem>
                             <IonLabel>Em que horário, em média, nas últimas duas semanas, você se alimentou pela última vez no dia, nos dias livres ou fins de semana?</IonLabel>
                             <Controller render={({onChange}) => (
                             <IonDatetime display-format="h:mm A" picker-format="h:mm A" onIonChange={(e) => {
                                console.log(e);
                                onChange(e.detail.value);
                                if (e.detail.value != undefined) 
                                props.setState('feedEnd', e.detail.value )
                            }}></IonDatetime> )} control={control} name={"feedEnd"}/>
                         </IonItem>: null} 


                        <IonItem>
                            <IonLabel>Nas últimas duas semanas, você comeu lanches ao longo do dia, em média: </IonLabel>

                            <Controller render = {({onChange}) => (

                            <IonList>
                                <IonItem>
                                <IonCheckbox color="primary" value= {props.getState("snacks", "")} onIonChange={(e)=> {
                                console.log(e);
                                onChange(e.detail.value);
                                if (e.detail.value != undefined) 
                                props.setState('snacks', 'nenhuma vez' )  }}></IonCheckbox>
                                <IonLabel>Nenhuma vez</IonLabel>
                                </IonItem>

                                <IonItem>
                                <IonCheckbox color="primary" value= {props.getState("snacks", "")} onIonChange={(e)=> {
                                console.log(e);
                                onChange(e.detail.value);
                                if (e.detail.value != undefined) 
                                props.setState('snacks', 'uma vez' )  }}></IonCheckbox>
                                <IonLabel>Uma vez</IonLabel>
                                </IonItem>
                                
                                <IonItem>
                                <IonCheckbox color="primary" value= {props.getState("snacks", "")} onIonChange={(e)=> {
                                console.log(e);
                                onChange(e.detail.value);
                                if (e.detail.value != undefined) 
                                props.setState('snacks', 'duas vezes' )  }}></IonCheckbox>
                                <IonLabel>Duas vezes</IonLabel>
                                </IonItem>

                                <IonItem>
                                <IonCheckbox color="primary"value= {props.getState("snacks", "")} onIonChange={(e)=> {
                                console.log(e);
                                onChange(e.detail.value);
                                if (e.detail.value != undefined) 
                                props.setState('snacks', 'três vezes' )  }}></IonCheckbox>
                                <IonLabel>Três vezes</IonLabel>
                                </IonItem>

                                <IonItem>
                                <IonCheckbox color="primary" value= {props.getState("snacks", "")} onIonChange={(e)=> {
                                console.log(e);
                                onChange(e.detail.value);
                                if (e.detail.value != undefined) 
                                props.setState('snacks', 'quatro vezes' )  }}></IonCheckbox>
                                <IonLabel>Quatro vezes</IonLabel>
                                </IonItem>
                                
                                <IonItem>
                                <IonCheckbox color="primary" value= {props.getState("snacks", "")} onIonChange={(e)=> {
                                console.log(e);
                                onChange(e.detail.value);
                                if (e.detail.value != undefined) 
                                props.setState('snacks', 'cinco vezes ou mais' )  }}></IonCheckbox>
                                <IonLabel>Cinco vezes ou mais</IonLabel>
                                </IonItem>

                             </IonList> )} control={control} name={"snacks"}/>
                            </IonItem>

                        <IonItem>
                            <IonLabel>Com que frequência você praticou hobbies nas duas últimas semanas?</IonLabel>
                            <Controller render={({onChange}) => (
                            <IonSelect placeholder="Por favor, selecione..."  onIonChange={(e)=> {
                                console.log(e);
                                onChange(e.detail.value);
                                if (e.detail.value != undefined) {
                                props.setState('hobbies', e.detail.value )} }}>
                            <IonSelectOption value="nenhuma vez">Nenhuma vez</IonSelectOption>
                            <IonSelectOption value="em menos da metade dos dias">Em menos da metade dos dias</IonSelectOption>
                            <IonSelectOption value="em mais da metade dos dias">Em mais da metade dos dias</IonSelectOption>
                            <IonSelectOption value="todos os dias">Todos os dias</IonSelectOption>
                            </IonSelect> )} control={control} name={"hobbiesFreq"}/>
                         </IonItem>

                         <IonList>
                         <IonItem>
                            <IonLabel>Você praticou atividade física nas duas últimas semanas?</IonLabel>

                            <Controller render={({onChange}) => (
                            
                            <IonRadioGroup value={atividadeFisica} onIonChange={(e) => {setAtividadeFisica(e.detail.value); 
                                if (e.detail.value != undefined) {
                                props.setState('exercise', e.detail.value )}}}>

                                <IonItem>
                                <IonLabel>Sim</IonLabel>
                                <IonRadio color="primary" value="sim" ></IonRadio>
                                </IonItem>
                               
                                <IonItem>
                                <IonLabel>Não</IonLabel>
                                <IonRadio color="primary" value="não"></IonRadio>
                                </IonItem>
                               
                            </IonRadioGroup> )} control={control} name={"exercise"}/>
                        </IonItem> 


                        {/*ATIVIDADE FÍSICA -> SIM */}

                        {atividadeFisica == "sim" ? 
                        <IonItem>
                            <IonLabel>Com que frequência você praticou exercícios?</IonLabel>
                            <Controller render={({onChange}) => (
                            <IonSelect placeholder="Por favor, selecione..." onIonChange={(e)=> {
                                console.log(e);
                                onChange(e.detail.value);
                                if (e.detail.value != undefined) {
                                props.setState('exerciseFreq', e.detail.value )} }}>
                            <IonSelectOption value="1 vez por semana">1 vez por semana</IonSelectOption>
                            <IonSelectOption value="2 vezes por semana">2 vezes por semana</IonSelectOption>
                            <IonSelectOption value="3 vezes por semana">3 vezes por semana</IonSelectOption>
                            <IonSelectOption value="4 vezes por semana">4 vezes por semana</IonSelectOption>
                            <IonSelectOption value="5 vezes por semana">5 vezes por semana</IonSelectOption>
                            <IonSelectOption value="6 vezes por semana">6 vezes por semana</IonSelectOption>
                            <IonSelectOption value="7 vezes por semana">7 vezes por semana</IonSelectOption>
                            <IonSelectOption value="menos de 1 vez por semana">menos de 1 vezes por semana</IonSelectOption>
                            </IonSelect> )} control={control} name={"exerciseFreq"}/>
                         </IonItem>:null }

                         {atividadeFisica === "sim" ?
                         <IonItem>
                            <IonLabel>Quão regulares, nas últimas duas semanas, foram os horários que praticou exercício?</IonLabel>
                            <Controller render={({onChange}) => (
                            <IonSelect placeholder="Por favor, selecione..." value={horarioAtividadeFisica} onIonChange={(e) => {setHorarioAtividadeFisica(e.detail.value);
                                if (e.detail.value != undefined) {
                                props.setState('exerciseReg', e.detail.value )}}}>
                            <IonSelectOption value="muitoIrregulares">Muito irregulares</IonSelectOption>
                            <IonSelectOption value="irregulares">Irregulares</IonSelectOption>
                            <IonSelectOption value="regulares">Regulares</IonSelectOption>
                            <IonSelectOption value="muitoRegulares">Muito regulares</IonSelectOption>
                            </IonSelect> )} control={control} name={"exerciseReg"} />
                          </IonItem>:null }

                        {atividadeFisica === "sim" ? 
                         <IonItem>
                            <IonLabel>Qual foi, nas últimas duas semanas, a duração da sua atividade física em média?</IonLabel>
                            <Controller render={({onChange}) => (
                            <IonSelect placeholder="Por favor, selecione..." onIonChange={(e)=> {
                                console.log(e);
                                onChange(e.detail.value);
                                if (e.detail.value != undefined) {
                                props.setState('exerciseDur', e.detail.value )} }}>
                            <IonSelectOption value="menos de 1 hora">Menos de 1 hora</IonSelectOption>
                            <IonSelectOption value="1 hora">1 hora</IonSelectOption>
                            <IonSelectOption value="entre 1 e 2 horas">Entre 1 e 2 horas</IonSelectOption>
                            <IonSelectOption value="mais de 2 horas">Mais de 2 horas</IonSelectOption>
                            </IonSelect> )} control={control} name={"exerciseDur"} />
                         </IonItem>:null }
                         </IonList>

                         {/*ATIVIDADE FÍSICA REGULAR -> */}

                         {((atividadeFisica === "sim") && ((horarioAtividadeFisica === "regulares") || (horarioAtividadeFisica === "muitoRegulares")) )? 

                         <IonItem>
                             <IonLabel>Em que horário, em média, nas últimas duas semanas, você começou a praticar exercícios?</IonLabel>
                             <Controller render={({onChange}) => (
                             <IonDatetime display-format="h:mm A" picker-format="h:mm A" onIonChange={(e)=> {
                                console.log(e);
                                onChange(e.detail.value);
                                if (e.detail.value != undefined) {
                                props.setState('exerciseTiming', e.detail.value )} }}></IonDatetime> )} control={control} name={"exerciseTiming"} />
                         </IonItem> :null}


                        <IonList>

                         <IonItem>
                            <IonLabel>Com que frequência você se expôs a luz natural (em um ambiente aberto) nas últimas duas semanas?</IonLabel>
                            <Controller render={({onChange}) => (  
                            <IonSelect placeholder="Por favor, selecione..." value={frequenciaLuzNatural} onIonChange={(e) => {setFrequenciaLuzNatural(e.detail.value);
                                if (e.detail.value != undefined) {
                                props.setState('lightFreq', e.detail.value )}}}>
                            <IonSelectOption value="nunca">Nunca</IonSelectOption>
                            <IonSelectOption value="menosMetade">Em menos da metade dos dias</IonSelectOption>
                            <IonSelectOption value="maisMetade">Em mais da metade dos dias</IonSelectOption>
                            <IonSelectOption value="todosDias">Todos os dias</IonSelectOption>
                            </IonSelect> )} control={control} name={"lightFreq"}/>
                         </IonItem>

                        {/*LUZ -> QUALQUER RESPOSTA QUE NÃO SEJA NUNCA */}


                        {((frequenciaLuzNatural === "menosMetade") || (frequenciaLuzNatural === "maisMetade") || (frequenciaLuzNatural === "todosDias")) ? 
                        <IonItem>
                            <IonLabel>Nesses dias, a quantas horas de luz natural (em um ambiente aberto) você se expôs em média?</IonLabel>
                            <Controller render={({onChange}) => (  
                            <IonSelect placeholder="Por favor, selecione..." onIonChange={(e)=> {
                                console.log(e);
                                onChange(e.detail.value);
                                if (e.detail.value != undefined) {
                                props.setState('light', e.detail.value )}} }>
                            <IonSelectOption value="não me exponho a luz natural">Não me exponho a luz natural</IonSelectOption>
                            <IonSelectOption value="até meia hora">Até meia hora</IonSelectOption>
                            <IonSelectOption value="até 1 hora">Até 1 hora</IonSelectOption>
                            <IonSelectOption value="até 2 horas">Até 2 horas</IonSelectOption>
                            <IonSelectOption value="até 4 horas">Até 4 horas</IonSelectOption>
                            <IonSelectOption value="mais de 4 horas">Mais de 4 horas</IonSelectOption>
                            </IonSelect> )} control={control} name={"light"}/>
                         </IonItem>:null }

                         {((frequenciaLuzNatural === "menosMetade") || (frequenciaLuzNatural === "maisMetade") || (frequenciaLuzNatural === "todosDias")) ? 
                         <IonItem>
                            <IonLabel>Quão regulares foram os horários em que se expõe à luz natural?</IonLabel>
                            <Controller render={({onChange}) => (  
                            <IonSelect placeholder="Por favor, selecione..." onIonChange={(e)=> {
                                console.log(e);
                                onChange(e.detail.value);
                                if (e.detail.value != undefined) {
                                props.setState('lightReg', e.detail.value )}} }>
                            <IonSelectOption value="muito irregulares">Muito irregulares</IonSelectOption>
                            <IonSelectOption value="irregulares">Irregulares</IonSelectOption>
                            <IonSelectOption value="regulares">Regulares</IonSelectOption>
                            <IonSelectOption value="muito regulares">Muito regulares</IonSelectOption>
                            </IonSelect> )} control={control} name={"lightReg"}/>
                         </IonItem>:null}

                        <IonList>
                         {((frequenciaLuzNatural === "menosMetade") || (frequenciaLuzNatural === "maisMetade") || (frequenciaLuzNatural === "todosDias")) ? 
                         <IonItem>
                            <IonLabel>Seus horários de expor à luz foram diferentes em dias de trabalho comparados a dias livres (ou em dias de semana comparados a fins de semana)?</IonLabel>
                            <Controller render={({onChange}) => (
                            <IonRadioGroup value={horarioLuzNatural} onIonChange={(e) => { setHorarioLuzNatural(e.detail.value);
                                if (e.detail.value != undefined) {
                                    props.setState('lightwdfdyd', e.detail.value )}} }>

                                <IonItem>
                                <IonLabel>Sim</IonLabel>
                                <IonRadio color="primary" value="sim"></IonRadio>
                                </IonItem>
                               
                                <IonItem>
                                <IonLabel>Não</IonLabel>
                                <IonRadio color="primary" value="não"></IonRadio>
                                </IonItem>
                               
                            </IonRadioGroup> )} control={control} name={"lightwdfdyd"}/>
                        </IonItem> :null}

                        {/*HORÁRIOS DE LUZ REGULARES -> SIM */}

                        {(((frequenciaLuzNatural === "menosMetade") || (frequenciaLuzNatural === "maisMetade") || (frequenciaLuzNatural === "todosDias")) && (horarioLuzNatural === "sim")) ? 
                        <IonItem>
                             <IonLabel>Nas últimas duas semanas, em que horário, em média, você se expôs à luz natural, nos dias trabalho ou de semana?</IonLabel>
                             <Controller render={({onChange}) => (
                             <IonDatetime display-format="h:mm A" picker-format="h:mm A" onIonChange={(e)=> {
                                console.log(e);
                                onChange(e.detail.value);
                                if (e.detail.value != undefined) {
                                props.setState('lightTiming', e.detail.value )}} }></IonDatetime> )} control={control} name={"lightTiming"}/>
                         </IonItem>:null}

                         {(((frequenciaLuzNatural === "menosMetade") || (frequenciaLuzNatural === "maisMetade") || (frequenciaLuzNatural === "todosDias")) && (horarioLuzNatural === "sim")) ?
                         <IonItem>
                             <IonLabel>Nas últimas duas semanas, em que horário, em média, você se expôs à luz natural, nos dias livres ou fins de semana?</IonLabel>
                             <Controller render={({onChange}) => (
                             <IonDatetime display-format="h:mm A" picker-format="h:mm A" onIonChange={(e)=> {
                                console.log(e);
                                onChange(e.detail.value);
                                if (e.detail.value != undefined) {
                                props.setState('lightTimingWD', e.detail.value )}} }></IonDatetime> )} control={control} name={"lightTimingWD"}/>
                         </IonItem>:null}
                        {/*HORÁRIOS DE LUZ REGULARES -> NÃO */}

                        {(((frequenciaLuzNatural === "menosMetade") || (frequenciaLuzNatural === "maisMetade") || (frequenciaLuzNatural === "todosDias")) && (horarioLuzNatural === "não")) ?
                        <IonItem>
                             <IonLabel>Em que horário, em média, você se expôs à luz natural, nas últimas duas semanas?</IonLabel>
                             <Controller render={({onChange}) => (
                             <IonDatetime display-format="h:mm A" picker-format="h:mm A" onIonChange={(e)=> {
                                console.log(e);
                                onChange(e.detail.value);
                                if (e.detail.value != undefined) {
                                props.setState('lightTimingFD', e.detail.value )}} }></IonDatetime> )} control={control} name={"lightTimingFD"}/>
                         </IonItem> :null}
                        
                         </IonList>
                         </IonList>
                        
                         <IonItem>
                            <IonLabel>Marque aquela que melhor descreve a maneira como você se sentiu nas últimas duas semanas.</IonLabel>
                            <Controller render={({onChange}) => (
                            <IonSelect placeholder="Por favor, selecione..." id={""} onIonChange={(e)=> {
                                console.log(e);
                                onChange(e.detail.value);
                                if (e.detail.value != undefined) {
                                props.setState('beck02', e.detail.value )} }}>
                            <IonSelectOption value="A1">Não estou especialmente desanimado com o futuro.</IonSelectOption>
                            <IonSelectOption value="A2">Eu me sinto desanimado quanto ao futuro.</IonSelectOption>
                            <IonSelectOption value="A3">Acho que nada tenho a esperar.</IonSelectOption>
                            <IonSelectOption value="A4">Acho o futuro sem esperança e tenho a impressão de que as coisas não podem melhorar.</IonSelectOption>
                            </IonSelect> )} control={control} name={"beck02"}/>
                         </IonItem>

                        {/* TABELA COM RADIOBUTTONS AO INVÉS DE ITEMS DE RADIOBUTTONS => Por enquanto comentada pela responsividade

                        <IonItem>
                        <IonLabel>Em relação a situação atual, em um nível de 1 (não me traz ansiedade) a 5 (me deixa muito ansioso), o quanto estas preocupações te deixam ansioso?</IonLabel>
                        </IonItem>

                        <IonItem>
                       
                        <IonGrid  className={"ion-padding"} fixed={true}>
                            
                            <IonRow>
                                <IonCol size="2"> </IonCol>
                                <IonCol>1</IonCol>
                                <IonCol>2</IonCol>
                                <IonCol>3</IonCol>
                                <IonCol>4</IonCol>
                                <IonCol>5</IonCol>
                                <IonCol size="2">Sem resposta</IonCol>
                             </IonRow>
                             
                             
                             <IonRadioGroup>
                             <IonRow>
                             
                                <IonCol size="2">Possibilidade de contágio. </IonCol>
                                    
                                    <IonCol><IonRadio color="primary"></IonRadio></IonCol>
                                    <IonCol><IonRadio color="primary"></IonRadio></IonCol>
                                    <IonCol><IonRadio color="primary"></IonRadio></IonCol>
                                    <IonCol><IonRadio color="primary"></IonRadio></IonCol>
                                    <IonCol><IonRadio color="primary"></IonRadio></IonCol>
                                    <IonCol size="2" ><IonRadio color="primary"></IonRadio></IonCol>
                              
                             </IonRow>
                             </IonRadioGroup> 
                            
                             <IonRadioGroup>
                             <IonRow>
                             
                                <IonCol size="2">Perder o emprego. </IonCol>
                                    
                                    <IonCol><IonRadio color="primary"></IonRadio></IonCol>
                                    <IonCol><IonRadio color="primary"></IonRadio></IonCol>
                                    <IonCol><IonRadio color="primary"></IonRadio></IonCol>
                                    <IonCol><IonRadio color="primary"></IonRadio></IonCol>
                                    <IonCol><IonRadio color="primary"></IonRadio></IonCol>
                                    <IonCol size="2"><IonRadio color="primary"></IonRadio></IonCol>
                               
                             </IonRow>
                             </IonRadioGroup>  

                            <IonRadioGroup>
                              <IonRow>
                             
                                <IonCol size="2">Não ter mais fonte de renda. </IonCol>
                                    
                                    <IonCol><IonRadio color="primary"></IonRadio></IonCol>
                                    <IonCol><IonRadio color="primary"></IonRadio></IonCol>
                                    <IonCol><IonRadio color="primary"></IonRadio></IonCol>
                                    <IonCol><IonRadio color="primary"></IonRadio></IonCol>
                                    <IonCol><IonRadio color="primary"></IonRadio></IonCol>
                                    <IonCol size="2"><IonRadio color="primary"></IonRadio></IonCol>
                               
                             </IonRow>
                             </IonRadioGroup>

                             <IonRadioGroup>
                              <IonRow>
                             
                                <IonCol size="2">Terminar o relacionamento. </IonCol>
                                    
                                    <IonCol><IonRadio color="primary"></IonRadio></IonCol>
                                    <IonCol><IonRadio color="primary"></IonRadio></IonCol>
                                    <IonCol><IonRadio color="primary"></IonRadio></IonCol>
                                    <IonCol><IonRadio color="primary"></IonRadio></IonCol>
                                    <IonCol><IonRadio color="primary"></IonRadio></IonCol>
                                    <IonCol size="2"><IonRadio color="primary"></IonRadio></IonCol>
                               
                             </IonRow>
                             </IonRadioGroup>

                             <IonRadioGroup>
                              <IonRow>
                             
                                <IonCol size="2">Contagiar alguém. </IonCol>
                                    
                                    <IonCol><IonRadio color="primary"></IonRadio></IonCol>
                                    <IonCol><IonRadio color="primary"></IonRadio></IonCol>
                                    <IonCol><IonRadio color="primary"></IonRadio></IonCol>
                                    <IonCol><IonRadio color="primary"></IonRadio></IonCol>
                                    <IonCol><IonRadio color="primary"></IonRadio></IonCol>
                                    <IonCol size="2"><IonRadio color="primary"></IonRadio></IonCol>
                               
                             </IonRow>
                             </IonRadioGroup>

                             <IonRadioGroup>
                              <IonRow>
                             
                                <IonCol size="2">Familiares e/ou amigos na linha de frente de combate ao vírus. </IonCol>
                                    
                                    <IonCol><IonRadio color="primary"></IonRadio></IonCol>
                                    <IonCol><IonRadio color="primary"></IonRadio></IonCol>
                                    <IonCol><IonRadio color="primary"></IonRadio></IonCol>
                                    <IonCol><IonRadio color="primary"></IonRadio></IonCol>
                                    <IonCol><IonRadio color="primary"></IonRadio></IonCol>
                                    <IonCol size="2"><IonRadio color="primary"></IonRadio></IonCol>
                               
                             </IonRow>
                             </IonRadioGroup>

                             <IonRadioGroup>
                              <IonRow>
                             
                                <IonCol size="2">Vida não voltar a ser como era antes. </IonCol>
                                    
                                    <IonCol><IonRadio color="primary"></IonRadio></IonCol>
                                    <IonCol><IonRadio color="primary"></IonRadio></IonCol>
                                    <IonCol><IonRadio color="primary"></IonRadio></IonCol>
                                    <IonCol><IonRadio color="primary"></IonRadio></IonCol>
                                    <IonCol><IonRadio color="primary"></IonRadio></IonCol>
                                    <IonCol size="2"><IonRadio color="primary"></IonRadio></IonCol>
                               
                             </IonRow>
                             </IonRadioGroup>

                             <IonRadioGroup>
                              <IonRow>
                             
                                <IonCol size="2">Perder o contato com amigos ou colegas.	 </IonCol>
                                    
                                    <IonCol><IonRadio color="primary"></IonRadio></IonCol>
                                    <IonCol><IonRadio color="primary"></IonRadio></IonCol>
                                    <IonCol><IonRadio color="primary"></IonRadio></IonCol>
                                    <IonCol><IonRadio color="primary"></IonRadio></IonCol>
                                    <IonCol><IonRadio color="primary"></IonRadio></IonCol>
                                    <IonCol size="2"><IonRadio color="primary"></IonRadio></IonCol>
                               
                             </IonRow>
                             </IonRadioGroup>

                             <IonRadioGroup>
                              <IonRow>
                             
                                <IonCol size="2">Educação dos filhos.	 </IonCol>
                                    
                                    <IonCol><IonRadio color="primary"></IonRadio></IonCol>
                                    <IonCol><IonRadio color="primary"></IonRadio></IonCol>
                                    <IonCol><IonRadio color="primary"></IonRadio></IonCol>
                                    <IonCol><IonRadio color="primary"></IonRadio></IonCol>
                                    <IonCol><IonRadio color="primary"></IonRadio></IonCol>
                                    <IonCol size="2"><IonRadio color="primary"></IonRadio></IonCol>
                               
                             </IonRow>
                             </IonRadioGroup>
                             
                        </IonGrid>
                        </IonItem>
                        */}


                        <IonItem>
                            <IonLabel>Em relação a situação atual, em um nível de 1 (não me traz ansiedade) a 5 (me deixa muito ansioso), o quanto
                                estas preocupações te deixam ansioso?
                            </IonLabel>

                        </IonItem>

                        

                            <IonItem>

                             <IonLabel>Possibilidade de contágio.</IonLabel>

                             <Controller render={({onChange}) => (
                             <IonRadioGroup onIonChange={(e)=> {
                                console.log(e);
                                onChange(e.detail.value);
                                if (e.detail.value != undefined) {
                                props.setState('worries_PRcont', e.detail.value )} }}>

                                <IonItem>
                                <IonLabel>1</IonLabel>
                                <IonRadio color="primary" value="1"></IonRadio>
                                </IonItem>
                               
                                <IonItem>
                                <IonLabel>2</IonLabel>
                                <IonRadio color="primary" value="2"></IonRadio>
                                </IonItem>

                                <IonItem>
                                <IonLabel>3</IonLabel>
                                <IonRadio color="primary" value="3"></IonRadio>
                                </IonItem>
                               
                                <IonItem>
                                <IonLabel>4</IonLabel>
                                <IonRadio color="primary" value="4"></IonRadio>
                                </IonItem>
                               
                                <IonItem>
                                <IonLabel>5</IonLabel>
                                <IonRadio color="primary" value="5"></IonRadio>
                                </IonItem>

                                <IonItem>
                                <IonLabel>Sem resposta</IonLabel>
                                <IonRadio color="primary" value="0"></IonRadio>
                                </IonItem>
                            </IonRadioGroup> )} control={control} name={"worries_PRcont"}/>
                            </IonItem>

                            <IonItem>

                             <IonLabel>Perder o emprego.</IonLabel>

                            
                             <Controller render={({onChange}) => (
                             <IonRadioGroup onIonChange={(e)=> {
                                console.log(e);
                                onChange(e.detail.value);
                                if (e.detail.value != undefined) {
                                props.setState('worries_PRjob', e.detail.value )} }}>

                                <IonItem>
                                <IonLabel>1</IonLabel>
                                <IonRadio color="primary" value="1"></IonRadio>
                                </IonItem>
                               
                                <IonItem>
                                <IonLabel>2</IonLabel>
                                <IonRadio color="primary" value="2"></IonRadio>
                                </IonItem>

                                <IonItem>
                                <IonLabel>3</IonLabel>
                                <IonRadio color="primary" value="3"></IonRadio>
                                </IonItem>
                               
                                <IonItem>
                                <IonLabel>4</IonLabel>
                                <IonRadio color="primary" value="4"></IonRadio>
                                </IonItem>
                               
                                <IonItem>
                                <IonLabel>5</IonLabel>
                                <IonRadio color="primary" value="5"></IonRadio>
                                </IonItem>

                                <IonItem>
                                <IonLabel>Sem resposta</IonLabel>
                                <IonRadio color="primary" value="0"></IonRadio>
                                </IonItem>
                            </IonRadioGroup> )} control={control} name={"worries_PRjob"}/>
                            </IonItem>

                            <IonItem>

                             <IonLabel>Não ter mais fonte de renda.</IonLabel>

                             
                             <Controller render={({onChange}) => (
                             <IonRadioGroup onIonChange={(e)=> {
                                console.log(e);
                                onChange(e.detail.value);
                                if (e.detail.value != undefined) {
                                props.setState('worries_PRincome', e.detail.value )} }}>

                                <IonItem>
                                <IonLabel>1</IonLabel>
                                <IonRadio color="primary" value="1"></IonRadio>
                                </IonItem>
                               
                                <IonItem>
                                <IonLabel>2</IonLabel>
                                <IonRadio color="primary" value="2"></IonRadio>
                                </IonItem>

                                <IonItem>
                                <IonLabel>3</IonLabel>
                                <IonRadio color="primary" value="3"></IonRadio>
                                </IonItem>
                               
                                <IonItem>
                                <IonLabel>4</IonLabel>
                                <IonRadio color="primary" value="4"></IonRadio>
                                </IonItem>
                               
                                <IonItem>
                                <IonLabel>5</IonLabel>
                                <IonRadio color="primary" value="5"></IonRadio>
                                </IonItem>

                                <IonItem>
                                <IonLabel>Sem resposta</IonLabel>
                                <IonRadio color="primary" value="0"></IonRadio>
                                </IonItem>
                            </IonRadioGroup> )} control={control} name={"worries_PRincome"}/>
                            </IonItem>
                       
                            <IonItem>

                             <IonLabel>Terminar o relacionamento.</IonLabel>
                             <Controller render={({onChange}) => (
                             <IonRadioGroup onIonChange={(e)=> {
                                console.log(e);
                                onChange(e.detail.value);
                                if (e.detail.value != undefined) {
                                props.setState('worries_PRrelationship', e.detail.value )} }}>

                                <IonItem>
                                <IonLabel>1</IonLabel>
                                <IonRadio color="primary" value="1"></IonRadio>
                                </IonItem>
                               
                                <IonItem>
                                <IonLabel>2</IonLabel>
                                <IonRadio color="primary" value="2"></IonRadio>
                                </IonItem>

                                <IonItem>
                                <IonLabel>3</IonLabel>
                                <IonRadio color="primary" value="3"></IonRadio>
                                </IonItem>
                               
                                <IonItem>
                                <IonLabel>4</IonLabel>
                                <IonRadio color="primary" value="4"></IonRadio>
                                </IonItem>
                               
                                <IonItem>
                                <IonLabel>5</IonLabel>
                                <IonRadio color="primary" value="5"></IonRadio>
                                </IonItem>

                                <IonItem>
                                <IonLabel>Sem resposta</IonLabel>
                                <IonRadio color="primary" value="0"></IonRadio>
                                </IonItem>
                            </IonRadioGroup> )} control={control} name={"worries_PRrelationship"}/>
                             
                            </IonItem>
                        
                                                  
                            <IonItem>

                             <IonLabel>Contagiar alguém.</IonLabel>

                             <Controller render={({onChange}) => (
                             <IonRadioGroup onIonChange={(e)=> {
                                console.log(e);
                                onChange(e.detail.value);
                                if (e.detail.value != undefined) {
                                props.setState('worries_PRcontSomeone', e.detail.value )} }}>

                                <IonItem>
                                <IonLabel>1</IonLabel>
                                <IonRadio color="primary" value="1"></IonRadio>
                                </IonItem>
                               
                                <IonItem>
                                <IonLabel>2</IonLabel>
                                <IonRadio color="primary" value="2"></IonRadio>
                                </IonItem>

                                <IonItem>
                                <IonLabel>3</IonLabel>
                                <IonRadio color="primary" value="3"></IonRadio>
                                </IonItem>
                               
                                <IonItem>
                                <IonLabel>4</IonLabel>
                                <IonRadio color="primary" value="4"></IonRadio>
                                </IonItem>
                               
                                <IonItem>
                                <IonLabel>5</IonLabel>
                                <IonRadio color="primary" value="5"></IonRadio>
                                </IonItem>

                                <IonItem>
                                <IonLabel>Sem resposta</IonLabel>
                                <IonRadio color="primary" value="0"></IonRadio>
                                </IonItem>
                            </IonRadioGroup> )} control={control} name={"worries_PRcontSomeone"}/>
                               
                            </IonItem>

                            <IonItem>

                             <IonLabel>Familiares e/ou amigos na linha de frente de combate ao vírus.</IonLabel>

                             <Controller render={({onChange}) => (
                             <IonRadioGroup onIonChange={(e)=> {
                                console.log(e);
                                onChange(e.detail.value);
                                if (e.detail.value != undefined) {
                                props.setState('worries_PRfamilyFrontline', e.detail.value )} }}>

                                <IonItem>
                                <IonLabel>1</IonLabel>
                                <IonRadio color="primary" value="1"></IonRadio>
                                </IonItem>
                               
                                <IonItem>
                                <IonLabel>2</IonLabel>
                                <IonRadio color="primary" value="2"></IonRadio>
                                </IonItem>

                                <IonItem>
                                <IonLabel>3</IonLabel>
                                <IonRadio color="primary" value="3"></IonRadio>
                                </IonItem>
                               
                                <IonItem>
                                <IonLabel>4</IonLabel>
                                <IonRadio color="primary" value="4"></IonRadio>
                                </IonItem>
                               
                                <IonItem>
                                <IonLabel>5</IonLabel>
                                <IonRadio color="primary" value="5"></IonRadio>
                                </IonItem>

                                <IonItem>
                                <IonLabel>Sem resposta</IonLabel>
                                <IonRadio color="primary" value="0"></IonRadio>
                                </IonItem>
                            </IonRadioGroup> )} control={control} name={"worries_PRfamilyFrontline"}/>
                               
                            </IonItem>

                            <IonItem>

                             <IonLabel>Vida não voltar a ser como era antes.</IonLabel>

                             <Controller render={({onChange}) => (
                             <IonRadioGroup onIonChange={(e)=> {
                                console.log(e);
                                onChange(e.detail.value);
                                if (e.detail.value != undefined) {
                                props.setState('worries_PRlife', e.detail.value )} }}>

                                <IonItem>
                                <IonLabel>1</IonLabel>
                                <IonRadio color="primary" value="1"></IonRadio>
                                </IonItem>
                               
                                <IonItem>
                                <IonLabel>2</IonLabel>
                                <IonRadio color="primary" value="2"></IonRadio>
                                </IonItem>

                                <IonItem>
                                <IonLabel>3</IonLabel>
                                <IonRadio color="primary" value="3"></IonRadio>
                                </IonItem>
                               
                                <IonItem>
                                <IonLabel>4</IonLabel>
                                <IonRadio color="primary" value="4"></IonRadio>
                                </IonItem>
                               
                                <IonItem>
                                <IonLabel>5</IonLabel>
                                <IonRadio color="primary" value="5"></IonRadio>
                                </IonItem>

                                <IonItem>
                                <IonLabel>Sem resposta</IonLabel>
                                <IonRadio color="primary" value="0"></IonRadio>
                                </IonItem>
                            </IonRadioGroup> )} control={control} name={"worries_PRlife"}/>
                            </IonItem>

                            <IonItem>
                            <Controller render={({onChange}) => (
                             <IonRadioGroup onIonChange={(e)=> {
                                console.log(e);
                                onChange(e.detail.value);
                                if (e.detail.value != undefined) {
                                props.setState('worries_PRcontact', e.detail.value )} }}>

                                <IonItem>
                                <IonLabel>1</IonLabel>
                                <IonRadio color="primary" value="1"></IonRadio>
                                </IonItem>
                               
                                <IonItem>
                                <IonLabel>2</IonLabel>
                                <IonRadio color="primary" value="2"></IonRadio>
                                </IonItem>

                                <IonItem>
                                <IonLabel>3</IonLabel>
                                <IonRadio color="primary" value="3"></IonRadio>
                                </IonItem>
                               
                                <IonItem>
                                <IonLabel>4</IonLabel>
                                <IonRadio color="primary" value="4"></IonRadio>
                                </IonItem>
                               
                                <IonItem>
                                <IonLabel>5</IonLabel>
                                <IonRadio color="primary" value="5"></IonRadio>
                                </IonItem>

                                <IonItem>
                                <IonLabel>Sem resposta</IonLabel>
                                <IonRadio color="primary" value="0"></IonRadio>
                                </IonItem>
                            </IonRadioGroup> )} control={control} name={"worries_PRcontact"}/>
                            
                               
                            </IonItem>

                            <IonItem>

                             <IonLabel>Educação dos filhos.</IonLabel>

                             
                             <Controller render={({onChange}) => (
                             <IonRadioGroup onIonChange={(e)=> {
                                console.log(e);
                                onChange(e.detail.value);
                                if (e.detail.value != undefined) {
                                props.setState('worries_PRchildren', e.detail.value )} }}>

                                <IonItem>
                                <IonLabel>1</IonLabel>
                                <IonRadio color="primary" value="1"></IonRadio>
                                </IonItem>
                               
                                <IonItem>
                                <IonLabel>2</IonLabel>
                                <IonRadio color="primary" value="2"></IonRadio>
                                </IonItem>

                                <IonItem>
                                <IonLabel>3</IonLabel>
                                <IonRadio color="primary" value="3"></IonRadio>
                                </IonItem>
                               
                                <IonItem>
                                <IonLabel>4</IonLabel>
                                <IonRadio color="primary" value="4"></IonRadio>
                                </IonItem>
                               
                                <IonItem>
                                <IonLabel>5</IonLabel>
                                <IonRadio color="primary" value="5"></IonRadio>
                                </IonItem>

                                <IonItem>
                                <IonLabel>Sem resposta</IonLabel>
                                <IonRadio color="primary" value="0"></IonRadio>
                                </IonItem>
                            </IonRadioGroup> )} control={control} name={"worries_PRchildren"}/>
                            </IonItem>
                                
                                
                                
                                
                                

                        <IonItem>

                            <Controller render={({onChange}) => (   
                            <IonList>
                            <IonLabel className={"ion-text-wrap"}>Você ou alguém da família contraiu o vírus? </IonLabel>
                                <IonItem>
                                <IonCheckbox color="primary" value= {props.getState("covid", "")} onIonChange={(e)=> {
                                console.log(e);
                                onChange(e.detail.value);
                                if (e.detail.value != undefined) 
                                props.setState('covid', 'tive suspeita' )  }}></IonCheckbox>
                                <IonLabel>Tive suspeita</IonLabel>
                                </IonItem>

                                <IonItem>
                                <IonCheckbox color="primary" value= {props.getState("covid", "")} onIonChange={(e)=> {
                                console.log(e);
                                onChange(e.detail.value);
                                if (e.detail.value != undefined) 
                                props.setState('covid', 'contraí o vírus' )  }}></IonCheckbox>
                                <IonLabel>Contraí o vírus</IonLabel>
                                </IonItem>
                                
                                <IonItem>
                                <IonCheckbox color="primary" value= {props.getState("covid", "")} onIonChange={(e)=> {
                                console.log(e);
                                onChange(e.detail.value);
                                if (e.detail.value != undefined) 
                                props.setState('covid', 'algum membro da minha família teve suspeita' )  }}></IonCheckbox>
                                <IonLabel>Algum membro da minha família teve suspeita</IonLabel>
                                </IonItem>

                                <IonItem>
                                <IonCheckbox color="primary" value= {props.getState("covid", "")} onIonChange={(e)=> {
                                console.log(e);
                                onChange(e.detail.value);
                                if (e.detail.value != undefined) 
                                props.setState('covid', 'algum membro da minha família contraiu o vírus' )  }}></IonCheckbox>
                                <IonLabel>Algum membro da minha família contraiu o vírus</IonLabel>
                                </IonItem>

                                <IonItem>
                                <IonCheckbox color="primary" value= {props.getState("covid", "")} onIonChange={(e)=> {
                                console.log(e);
                                onChange(e.detail.value);
                                if (e.detail.value != undefined) 
                                props.setState('covid', 'algum amigo/colega teve suspeita' )  }}></IonCheckbox>
                                <IonLabel>Algum amigo/colega teve suspeita</IonLabel>
                                </IonItem>
                                
                                <IonItem>
                                <IonCheckbox color="primary" value= {props.getState("covid", "")} onIonChange={(e)=> {
                                console.log(e);
                                onChange(e.detail.value);
                                if (e.detail.value != undefined) 
                                props.setState('covid', 'algum amigo/colega contraiu o vírus' )  }}></IonCheckbox>
                                <IonLabel>Algum amigo/colega contraiu o vírus</IonLabel>
                                </IonItem>

                                <IonItem>
                                <IonCheckbox color="primary" value= {props.getState("covid", "")} onIonChange={(e)=> {
                                console.log(e);
                                onChange(e.detail.value);
                                if (e.detail.value != undefined) 
                                props.setState('covid', 'não tive suspeita, nem contraí o vírus' )  }}></IonCheckbox>
                                <IonLabel>Não tive suspeita, nem contraí o vírus. Nenhum amigo/colega/familiar contraiu ou teve suspeita do vírus.</IonLabel>
                                </IonItem>
                             </IonList>   )}
                             control={control}
                             name={"covid"}
                             />
                            </IonItem>

                           
                          

                <IonButton onClick={props.prev} size="large">Anterior</IonButton>
                <IonButton onClick={props.next} size="large" className={"btnProximo"} >Próximo</IonButton>
                   
                   </div>
                </form>
                
            </div>
            </IonContent>
        )

}

export default Step3;