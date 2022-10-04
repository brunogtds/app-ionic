import React from "react";
import { StepComponentProps } from "react-step-builder";


import { IonItem, IonLabel, IonRadioGroup, IonRadio, IonButton, IonDatetime, IonLoading, IonText, IonProgressBar, IonNote, IonRange, IonSelect, IonSelectOption } from "@ionic/react";
import { IonContent } from '@ionic/react';

import '../../Forms.css';

import { useForm, Controller } from "react-hook-form";

import { useState } from 'react';

import { useHistory } from 'react-router-dom'


//imports user context do reactfire

import { useUser } from 'reactfire';
import firebase from 'firebase';

  

const RMeq = (props: StepComponentProps) => {

    const { control, errors, formState } = useForm({ mode: "onChange" });

    const [loader] = useState<boolean>(false)

    const options = {
        cssClass: 'my-custom-interface'
    };

    return (
        <IonContent fullscreen color="background">

            <div>
                <IonLabel mode="md">

                    <form className={"ion-padding texto-default"}>
                        <IonLoading message="Por favor aguarde..." duration={2000} isOpen={loader} />

                        <IonLabel className="questions">Considerando apenas seu bem-estar pessoal e com liberdade total de planejar seu dia, a que horas você se levantaria? </IonLabel>
                       
                       {/*}
                        <IonItem lines="none" className={"ion-no-padding"}>

                        <div className="container">
                                    
                                    <Controller render={({ onChange }) => (
                                    <IonRange min={0} max={7} step={0.5} ticks={true} onIonChange={(e) => props.setState('rmeq01', e.detail.value as number)} pin snaps color="primary">
                                    
                                    </IonRange> )} control={control} name={"rmeq01"}  />
                                    
                                  
                                  <div className="tickmarksSDS">
                                       <p>05h</p>
                                      
                                       <p>06h</p>
                                                                        
                                       <p>07h</p>
                                      
                                       <p>08h</p>
                                     
                                       <p>09h</p>

                                       <p>10h</p>
                                  
                                       <p>11h</p>

                                       <p>12h</p>
                                    
                                   </div>
                                   </div> 

                                    </IonItem> */}

                          <IonItem lines="none">
                                        <Controller render={({ onChange }) => (
                                            <IonSelect interfaceOptions={options} className={"select-interface-option"}  okText="ok" cancelText="Cancelar" placeholder="Por favor, selecione..."  onIonChange={(e) => {
                                                
                                                onChange(e.detail.value);
                                                if (e.detail.value != undefined) {
                                                   // setLightReg(e.detail.value);
                                                    props.setState('rmeq01', e.detail.value)
                                                }
                                            }}>
                                                <IonSelectOption value={"5"}>5h-6h30</IonSelectOption>
                                                <IonSelectOption value={"4"}>6h31-7h45</IonSelectOption>
                                                <IonSelectOption value={"3"}>7h46-9h45</IonSelectOption>
                                                <IonSelectOption value={"2"}>9h46-11h</IonSelectOption>
                                                <IonSelectOption value={"1"}>11h01-12h</IonSelectOption>
                                                
                                            </IonSelect>)} control={control} name={"rmeq01"} rules={{ required: true }} />
                                       
                            </IonItem>

                        <IonLabel className="questions">Durante a primeira meia hora depois de acordar você se sente cansado? </IonLabel>
                        <IonItem lines="none">
                                        <Controller render={({ onChange }) => (
                                            <IonSelect interfaceOptions={options} className={"select-interface-option"}  okText="ok" cancelText="Cancelar" placeholder="Por favor, selecione..."  onIonChange={(e) => {
                                                
                                                onChange(e.detail.value);
                                                if (e.detail.value != undefined) {
                                                   // setLightReg(e.detail.value);
                                                    props.setState('rmeq02', e.detail.value)
                                                }
                                            }}>
                                                <IonSelectOption value={"1"}>Muito cansado</IonSelectOption>
                                                <IonSelectOption value={"2"}>Não muito cansado</IonSelectOption>
                                                <IonSelectOption value={"3"}>Razoavelmente em forma</IonSelectOption>
                                                <IonSelectOption value={"4"}>Em plena forma</IonSelectOption>
                                            </IonSelect>)} control={control} name={"rmeq02"} rules={{ required: true }} />
                                       
                                    </IonItem>


                       <IonLabel className="questions">A que horas da noite você se sente cansado e com vontade de dormir? </IonLabel>
                       
                       {/*}
                       <IonItem lines="none" className={"ion-no-padding"}>

                       <div className="container">
                                   
                                   <Controller render={({ onChange }) => (
                                   <IonRange min={0} max={7} step={0.5} ticks={true} onIonChange={(e) => props.setState('rmeq03', e.detail.value as number)} pin snaps color="primary">
                                   
                                   </IonRange> )} control={control} name={"rmeq03"}  />
                                   
                                 
                                 <div className="tickmarksSDS">
                                      <p>20</p>
                                     
                                      <p>21</p>
                                                                       
                                      <p>22</p>
                                     
                                      <p>23</p>
                                    
                                      <p>24</p>

                                      <p>01</p>
                                 
                                      <p>02</p>

                                      <p>03</p>
                                   
                                  </div>
                                  </div> 

                                   </IonItem>*/}

                                    <IonItem lines="none">
                                        <Controller render={({ onChange }) => (
                                            <IonSelect interfaceOptions={options} className={"select-interface-option"}  okText="ok" cancelText="Cancelar" placeholder="Por favor, selecione..."  onIonChange={(e) => {
                                                
                                                onChange(e.detail.value);
                                                if (e.detail.value != undefined) {
                                                   // setLightReg(e.detail.value);
                                                    props.setState('rmeq03', e.detail.value)
                                                }
                                            }}>
                                                <IonSelectOption value={"5"}>20h-21h</IonSelectOption>
                                                <IonSelectOption value={"4"}>21h01-22h15</IonSelectOption>
                                                <IonSelectOption value={"3"}>22h16-00h45</IonSelectOption>
                                                <IonSelectOption value={"2"}>00h46-2h</IonSelectOption>
                                                <IonSelectOption value={"1"}>2h01-3h</IonSelectOption>
                                               
                                            </IonSelect>)} control={control} name={"rmeq03"} rules={{ required: true }} />
                                       
                            </IonItem>

                       <IonLabel className="questions">A que hora do dia você atinge seu melhor momento de bem-estar? </IonLabel>

                       <IonItem lines="none">
                                        <Controller render={({ onChange }) => (
                                            <IonSelect interfaceOptions={options} className={"select-interface-option"}  okText="ok" cancelText="Cancelar" placeholder="Por favor, selecione..."  onIonChange={(e) => {
                                                
                                                onChange(e.detail.value);
                                                if (e.detail.value != undefined) {
                                                   // setLightReg(e.detail.value);
                                                    props.setState('rmeq04', e.detail.value)
                                                }
                                            }}>
                                                <IonSelectOption value={"5"}>5h-8h</IonSelectOption>
                                                <IonSelectOption value={"4"}>8h01-10h</IonSelectOption>
                                                <IonSelectOption value={"3"}>10h01-17h</IonSelectOption>
                                                <IonSelectOption value={"2"}>17h01-22h</IonSelectOption>
                                                <IonSelectOption value={"1"}>22h01-4h</IonSelectOption>
                                            
                                            </IonSelect>)} control={control} name={"rmeq04"} rules={{ required: true }} />
                                       
                            </IonItem>
                       
                       {/*}
                       <IonItem lines="none" className={"ion-no-padding"}>

                       <div className="container">
                                   
                                   <Controller render={({ onChange }) => (
                                   <IonRange min={0} max={24} step={0.5} ticks={true} onIonChange={(e) => props.setState('rmeq04', e.detail.value as number)} pin snaps color="primary">
                                   
                                   </IonRange> )} control={control} name={"rmeq04"}  />
                                   
                                 
                                 <div className="tickmarksSDS">
                                      <p>20</p>
                                     
                                      <p>21</p>
                                                                       
                                      <p>22</p>
                                     
                                      <p>23</p>
                                    
                                      <p>24</p>

                                      <p>01</p>
                                 
                                      <p>02</p>

                                      <p>03</p>
                                   
                                  </div>
                                  </div> 

                                   </IonItem> */}

                       <IonLabel className="questions">Fala-se em pessoas matutinas e vespertinas (as primeiras gostam de acordar cedo e dormir cedo; as segundas, de acordar tarde e dormir tarde). Com qual desses tipos você se identifica? </IonLabel>
                        <IonItem lines="none">
                                        <Controller render={({ onChange }) => (
                                            <IonSelect interfaceOptions={options} className={"select-interface-option"}  okText="ok" cancelText="Cancelar" placeholder="Por favor, selecione..."  onIonChange={(e) => {
                                                
                                                onChange(e.detail.value);
                                                if (e.detail.value != undefined) {
                                                   // setLightReg(e.detail.value);
                                                    props.setState('rmeq05', e.detail.value)
                                                }
                                            }}>
                                                <IonSelectOption value={"6"}>Tipo matutino</IonSelectOption>
                                                <IonSelectOption value={"4"}>Mais matutino do que vespertino</IonSelectOption>
                                                <IonSelectOption value={"2"}>Mais vespertino do que matutino</IonSelectOption>
                                                <IonSelectOption value={"0"}>Tipo vespertino</IonSelectOption>
                                            </IonSelect>)} control={control} name={"rmeq05"} rules={{ required: true }} />
                                       
                                    </IonItem>




                          {formState.isValid === false ? 

                        <div className="preenchimentoObri">
                            <IonText  color="danger">Preencha todos campos obrigatórios para prosseguir</IonText>
                        </div>
                        
                        :null}


                        <div id="progress-bar-div" >
                            <IonProgressBar className={"progress-bar"} value={0.42} color="orange"></IonProgressBar>
                        </div>

                        <IonButton disabled={props.isFirst()} onClick={props.prev} className="btnAnterior" size="default" shape="round" fill="outline">Anterior</IonButton>
                        <IonButton disabled={formState.isValid === false} onClick={props.next} size="default" shape="round" className={"btnProximo"} fill="outline">Próximo</IonButton>
                    </form>
                </IonLabel>
            </div>

        </IonContent>
    )
}

export default RMeq;
