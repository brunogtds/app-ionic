import React from "react";
import {StepComponentProps} from "react-step-builder";


import { IonItem, IonLabel, IonRadioGroup, IonRadio, IonSelect, IonSelectOption, IonButton, IonList, IonDatetime} from "@ionic/react";
import { IonContent, IonRow, IonCol } from '@ionic/react';

import '../../Forms.css';

import { useForm, Controller } from "react-hook-form";

import {useState} from 'react';

import { IonProgressBar} from '@ionic/react';



const Step8 = (props: StepComponentProps) => {

    const {control, watch, handleSubmit} = useForm();

    const [nDiasTrabalhoSemana, setNDiasTrabalhoSemana]= useState();
 
    return(
        <IonContent fullscreen> 
         <IonItem>
       
        
         </IonItem>
        <div>
            <form className={"ion-padding"}>

         
            
            <IonItem>
            <IonRow>
                <IonCol>
            <div>
            <p>As perguntas a seguir se referem ao seu comportamento de sono nos dias de trabalho e dias livres. Por favor, responda de acordo com o que ocorreu mais frequentemente nas duas últimas semanas. Considere também estudos e seus afazeres de casa. </p>
            </div>
            </IonCol>
            <IonCol>
            <div>
            <p><b>Por favor, responda todas as questões a seguir utilizando a escala de 24h (por exemplo, 23:00 no lugar de 11:00). Se você é um estudante, preencha os dias de trabalho considerando os dias de aula.</b></p>
            </div>
            </IonCol>
            </IonRow>
            </IonItem>

            <IonLabel className="questions">Fiz plantão noturno.</IonLabel>

            <IonItem>
                
                <Controller render={({onChange}) => (
                <IonRadioGroup  onIonChange={(e)=> {
                    console.log(e);
                    onChange(e.detail.value);
                    if (e.detail.value != undefined) 
                    props.setState('nightShift', e.detail.value )  }}>

                                <IonItem>
                                <IonLabel>Sim</IonLabel>
                                <IonRadio color="primary" value="sim"></IonRadio>
                                </IonItem>
                               
                                <IonItem>
                                <IonLabel>Não</IonLabel>
                                <IonRadio color="primary" value="não"></IonRadio>
                                </IonItem>
                               
                </IonRadioGroup>  )}
                             control={control}
                             name={"nightShif"}
                             />
            </IonItem>

            <IonLabel className="questions">Trabalhei/estudei _ dias por semana.</IonLabel>
            <IonItem>
                
                <Controller render={({onChange}) => ( 
                            <IonSelect placeholder="Por favor, selecione..." value={nDiasTrabalhoSemana} onIonChange={(e) => {setNDiasTrabalhoSemana(e.detail.value);
                                if (e.detail.value != undefined) 
                                props.setState('workDaysN', e.detail.value )  }}>
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
                            name="workDaysN"
                            rules={{required: true}}
        
                            />    
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
                    props.setState('sleepWD', e.detail.value )  }}></IonDatetime> )} control={control} name={"sleepWD"}/>
                </IonItem>
                
                <IonItem>
                    <IonLabel className="questions">Normalmente acordei às: </IonLabel>
                    <Controller render={({onChange}) => (
                     <IonDatetime display-format="h:mm A" picker-format="h:mm A" onIonChange={(e)=> {
                    console.log(e);
                    onChange(e.detail.value);
                    if (e.detail.value != undefined) 
                    props.setState('wakeUpWD', e.detail.value )  }}></IonDatetime> )} control={control} name={"wakeUpWD"}/>
                </IonItem>
               
               
                <IonItem><IonLabel className="questions">Usei o despertador:</IonLabel>

                        <Controller render={({onChange})=> (
                        <IonRadioGroup onIonChange={(e)=> {
                            console.log(e);
                            onChange(e.detail.value);
                            if (e.detail.value != undefined) 
                            props.setState('alarmWD', e.detail.value ) }}>

                                        <IonItem>
                                        <IonLabel>Sim</IonLabel>
                                        <IonRadio color="primary" value="sim"></IonRadio>
                                        </IonItem>
                                    
                                        <IonItem>
                                        <IonLabel>Não</IonLabel>
                                        <IonRadio color="primary" value="não"></IonRadio>
                                        </IonItem>
                                    
                        </IonRadioGroup> )} control={control} name={"alarmWD"}/>
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
                    props.setState('sleepOnWork', e.detail.value )}}></IonDatetime> )} control={control} name={"sleepOnWork"}/>
                </IonItem>

                <IonItem>
                    <IonLabel className="questions">Em dias de trabalho/estudo, eu normalmente acordei às: </IonLabel>
                    <Controller render={({onChange}) => (
                     <IonDatetime display-format="h:mm A" picker-format="h:mm A" onIonChange={(e)=> {
                    console.log(e);
                    onChange(e.detail.value);
                    if (e.detail.value != undefined) 
                    props.setState('wakeUpOnWork', e.detail.value ) }}></IonDatetime> )} control={control} name={"wakeUpOnWork"}/>
                </IonItem>

                <IonItem>
                <IonLabel className="questions">Usei o despertador em dias de trabalho:</IonLabel>

                        <Controller render={({onChange})=> (
                        <IonRadioGroup onIonChange={(e)=> {
                            console.log(e);
                            onChange(e.detail.value);
                            if (e.detail.value != undefined) 
                            props.setState('alarmOnWork', e.detail.value ) }}>

                                        <IonItem>
                                        <IonLabel>Sim</IonLabel>
                                        <IonRadio color="primary" value="sim"></IonRadio>
                                        </IonItem>
                                    
                                        <IonItem>
                                        <IonLabel>Não</IonLabel>
                                        <IonRadio color="primary" value="não"></IonRadio>
                                        </IonItem>
                                    
                        </IonRadioGroup> )} control={control} name={"alarmOnWork"}/>
                </IonItem>

            </IonList> :null}
    

            <IonButton disabled={props.isFirst()}onClick={props.prev} size="large">Anterior</IonButton>
            <IonButton onClick={props.next} size="large" className={"btnProximo"}>Próximo</IonButton>
            </form>

        </div>

        </IonContent>
    )
}

export default Step8; 