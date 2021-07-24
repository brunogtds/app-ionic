import React from "react";
import {StepComponentProps} from "react-step-builder";


import { IonItem, IonLabel, IonRadioGroup, IonRadio, IonSelect, IonSelectOption, IonButton, IonList, IonDatetime, IonText} from "@ionic/react";
import { IonContent, IonCard, IonCardContent } from '@ionic/react';

import '../../../Forms.css';

import { useForm, Controller } from "react-hook-form";

import {useState} from 'react';


const MCTQ1Final = (props: StepComponentProps) => {

    const {control, errors, formState} = useForm({mode: "onChange"});

    const [nDiasTrabalhoSemana, setNDiasTrabalhoSemana]= useState();
 
    return(
        <IonContent fullscreen color="light"> 
        
        <div>
            <form className={"ion-padding"}>

         
           
            <IonCard color="secondary">
           
            <IonCardContent>
            
            As perguntas a seguir se referem ao seu comportamento de sono nos dias de trabalho e dias livres. Por favor, responda de acordo com o que ocorreu mais frequentemente nas duas últimas semanas. Considere também estudos e seus afazeres de casa. 
            Se você é um estudante, preencha os dias de trabalho considerando os dias de aula. 
            
            </IonCardContent>
            
          
            </IonCard>
               

            <IonLabel className="questions">Fiz plantão noturno.</IonLabel>

            <IonItem>
                
                <Controller render={({onChange}) => (
                <IonRadioGroup  onIonChange={(e)=> {
                    console.log(e);
                    onChange(e.detail.value);
                    if (e.detail.value != undefined) 
                    props.setState('NightShiftFinal', e.detail.value )  }}>

                                <IonItem>
                                <IonLabel>Sim</IonLabel>
                                <IonRadio className={"radio-options"} color="primary" value="sim"></IonRadio>
                                </IonItem>
                               
                                <IonItem>
                                <IonLabel>Não</IonLabel>
                                <IonRadio className={"radio-options"} color="primary" value="não"></IonRadio>
                                </IonItem>
                               
                </IonRadioGroup>  )}
                             control={control}
                             name={"NightShiftFinal"}
                             rules={{required:true}}
                             />
                              {errors.NightShiftFinal && <IonText color="danger">Campo obrigatório.</IonText>}
            </IonItem>

            <IonLabel className="questions">Trabalhei/estudei _ dias por semana.</IonLabel>
            <IonItem>
                
                <Controller render={({onChange}) => ( 
                            <IonSelect placeholder="Por favor, selecione..." value={nDiasTrabalhoSemana} onIonChange={(e) => {setNDiasTrabalhoSemana(e.detail.value);
                                onChange(e.detail.value);
                                if (e.detail.value != undefined) 
                                props.setState('workDaysNFinal', e.detail.value )  }}>
                                    <IonSelectOption value="0">0</IonSelectOption>
                                    <IonSelectOption value="1">1</IonSelectOption>
                                    <IonSelectOption value="2">2</IonSelectOption>
                                    <IonSelectOption value="3">3</IonSelectOption>
                                    <IonSelectOption value="4">4</IonSelectOption>
                                    <IonSelectOption value="5">5</IonSelectOption>
                                    <IonSelectOption value="6">6</IonSelectOption>
                                    <IonSelectOption value="7">7</IonSelectOption>
                            </IonSelect> 
                            

                            )}

                            control={control}
                            name="workDaysNFinal"
                            rules={{required: true}}
        
                            />    
                            {errors.workDaysNFinal && <IonText color="danger">Campo obrigatório.</IonText>}
            </IonItem>


            {/*DIAS DE TRABALHO ->0 */}

            {nDiasTrabalhoSemana === "0" ?
            <IonList>
                
                <IonItem>
                    <IonLabel className="questions">Normalmente dormi às: </IonLabel>
                    <Controller render={({onChange}) => (
                     <IonDatetime display-format="h:mm A" picker-format="h:mm A" onIonChange={(e)=> {
                    console.log(e);
                    onChange(e.detail.value);
                    if (e.detail.value != undefined) 
                    props.setState('sleepNoWorkFinal', e.detail.value )  }}></IonDatetime> )} control={control} name={"sleepNoWorkFinal"} rules={{required:true}}/>
                    {errors.sleepNoWorkFinal && <IonText color="danger">Campo obrigatório.</IonText>}
                </IonItem>
                
                <IonItem>
                    <IonLabel className="questions">Normalmente acordei às: </IonLabel>
                    <Controller render={({onChange}) => (
                     <IonDatetime display-format="h:mm A" picker-format="h:mm A" onIonChange={(e)=> {
                    console.log(e);
                    onChange(e.detail.value);
                    if (e.detail.value != undefined) 
                    props.setState('wakeUpNoWorkFinal', e.detail.value )  }}></IonDatetime> )} control={control} name={"wakeUpNoWorkFinal"} rules={{required:true}}/>
                    {errors.wakeUpNoWorkFinal && <IonText color="danger">Campo obrigatório.</IonText>}
                </IonItem>
               
               
                <IonItem><IonLabel className="questions">Usei o despertador:</IonLabel>

                        <Controller render={({onChange})=> (
                        <IonRadioGroup onIonChange={(e)=> {
                            console.log(e);
                            onChange(e.detail.value);
                            if (e.detail.value != undefined) 
                            props.setState('AlarmNoWorkFinal', e.detail.value ) }}>

                                        <IonItem>
                                        <IonLabel>Sim</IonLabel>
                                        <IonRadio className={"radio-options"} color="primary" value="sim"></IonRadio>
                                        </IonItem>
                                    
                                        <IonItem>
                                        <IonLabel>Não</IonLabel>
                                        <IonRadio className={"radio-options"} color="primary" value="não"></IonRadio>
                                        </IonItem>
                                    
                        </IonRadioGroup> )} control={control} name={"AlarmNoWorkFinal"} rules={{required:true}}/>
                        {errors.AlarmNoWorkFinal && <IonText color="danger">Campo obrigatório.</IonText>}
            </IonItem>
                
            </IonList> :null} 

            {/*DIAS DE TRABALHO ->MAIS QUE 0 */}

            {((nDiasTrabalhoSemana == "1") || (nDiasTrabalhoSemana == "2") || (nDiasTrabalhoSemana == "3") || (nDiasTrabalhoSemana == "4") || (nDiasTrabalhoSemana == "5")  || (nDiasTrabalhoSemana == "6") || (nDiasTrabalhoSemana == "7"))       ?
            <IonList>

                <IonItem>
                    <IonLabel className="questions">Em dias de trabalho/estudo, eu normalmente dormi às: </IonLabel>
                    <Controller render={({onChange}) => (
                     <IonDatetime display-format="h:mm A" picker-format="h:mm A" onIonChange={(e)=> {
                    console.log(e);
                    onChange(e.detail.value); 
                    if (e.detail.value != undefined) 
                    props.setState('sleepWDFinal', e.detail.value )}}></IonDatetime> )} control={control} name={"sleepWDFinal"} rules={{required:true}}/>
                    {errors.sleepWDFinal && <IonText color="danger">Campo obrigatório.</IonText>}
                </IonItem>

                <IonItem>
                    <IonLabel className="questions">Em dias de trabalho/estudo, eu normalmente acordei às: </IonLabel>
                    <Controller render={({onChange}) => (
                     <IonDatetime display-format="h:mm A" picker-format="h:mm A" onIonChange={(e)=> {
                    console.log(e);
                    onChange(e.detail.value);
                    if (e.detail.value != undefined) 
                    props.setState('wakeUpWDFinal', e.detail.value ) }}></IonDatetime> )} control={control} name={"wakeUpWDFinal"} rules={{required:true}}/>
                    {errors.wakeUpWDFinal && <IonText color="danger">Campo obrigatório.</IonText>}
                </IonItem>

                <IonItem>
                <IonLabel className="questions">Usei o despertador em dias de trabalho:</IonLabel>

                        <Controller render={({onChange})=> (
                        <IonRadioGroup onIonChange={(e)=> {
                            console.log(e);
                            onChange(e.detail.value);
                            if (e.detail.value != undefined) 
                            props.setState('alarmWDFinal', e.detail.value ) }}>

                                        <IonItem>
                                        <IonLabel>Sim</IonLabel>
                                        <IonRadio className={"radio-options"} color="primary" value="sim"></IonRadio>
                                        </IonItem>
                                    
                                        <IonItem>
                                        <IonLabel>Não</IonLabel>
                                        <IonRadio className={"radio-options"} color="primary" value="não"></IonRadio>
                                        </IonItem>
                                    
                        </IonRadioGroup> )} control={control} name={"alarmWDFinal"} rules={{required:true}}/>
                        {errors.alarmWDFinal && <IonText color="danger">Campo obrigatório.</IonText>}
                </IonItem>

            </IonList> :null}
    

            <IonButton disabled={props.isFirst()}onClick={props.prev} size="large" fill="clear">Anterior</IonButton>
            <IonButton disabled={formState.isValid === false} onClick={props.next} size="large" className={"btnProximo"} fill="clear">Próximo</IonButton>
            </form>

        </div>

        </IonContent>
    )
}

export default MCTQ1Final; 