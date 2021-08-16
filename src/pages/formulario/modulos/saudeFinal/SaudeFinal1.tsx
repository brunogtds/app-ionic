import React from "react";
import {StepComponentProps} from "react-step-builder";

import {IonItem, IonLabel, IonInput, IonRadioGroup, IonRadio, IonButton, IonCheckbox, IonList, IonTextarea, IonProgressBar, IonNote} from "@ionic/react";
import { IonContent, IonText} from '@ionic/react';
 
import '../../Forms.css';

import { useForm, Controller } from "react-hook-form";
import {useState} from 'react';
import { useUser } from "reactfire";
import firebase from "firebase";

const SaudeFinal1 = (props: StepComponentProps) => {

    const {data: user}= useUser();
    const [dataUser, setData] = useState();

    const {control, errors, formState} = useForm({ mode: "onChange"});

    const [medsChange, setmedsChange] = useState();
    const [selectedMedsNoOrientation, setSelectedMedsNoOrientation] = useState();

   function createDatabaseQuest2(){

        if(user){
            firebase.firestore().collection('usersFinal').doc(user.uid).set({
                email: user.email, }, { merge: true }); 
        }
    }

    if (user){
        createDatabaseQuest2();
    }
           
    return (
        <IonContent fullscreen>
            <div>
        
                <form className="ion-padding" >

                        <IonProgressBar value={0.16} buffer={0.16}></IonProgressBar>

                        <IonItem>
                            <IonLabel position="floating">Peso (em kg):</IonLabel>

                            <Controller render={({onChange}) => (
                            <IonInput id="weightFinal" onIonChange={(e)=> {
                                console.log(e);
                                onChange(e.detail.value);
                                if (e.detail.value != undefined) 
                                props.setState('weightFinal', e.detail.value ) }} />
                            )}
                            name="weightFinal"
                            control={control} />
                            <IonNote >Se você não sabe seu peso exato, pode ser um valor aproximado.</IonNote>
                         </IonItem>

                        <IonItem>
                         <IonLabel>Você teve alguma doença diagnosticada depois que entrou no estudo?</IonLabel>

                            <Controller render={({onChange}) => (
                            
                            <IonList>

                            <IonItem>
                            <IonCheckbox color="primary" value= {props.getState("disordersChangeFinal", "")} onIonChange={(e)=> {
                                console.log(e);
                                onChange(e.detail.value);
                                if (e.detail.value != undefined) 
                                props.setState('disordersChangeFinal', 'nenhuma' ) }}></IonCheckbox>
                            <IonLabel>Nenhuma</IonLabel>
                            </IonItem>

                            <IonItem>
                            <IonCheckbox color="primary" value= {props.getState("disordersChangeFinal", "")} onIonChange={(e)=> {
                                console.log(e);
                                onChange(e.detail.value);
                                if (e.detail.value != undefined) 
                                props.setState('disordersChangeFinal', 'diabetes' ) }}></IonCheckbox>
                            <IonLabel>Diabetes</IonLabel>
                            </IonItem>

                            <IonItem>
                            <IonCheckbox color="primary" value= {props.getState("disorders", "")} onIonChange={(e)=> {
                                console.log(e);
                                onChange(e.detail.value);
                                if (e.detail.value != undefined) 
                                props.setState('disordersChangeFinal', 'hipertensão' ) }}></IonCheckbox>
                            <IonLabel>Hipertensão</IonLabel>
                            </IonItem>
                            
                            <IonItem>
                            <IonCheckbox color="primary" value= {props.getState("disorders", "")} onIonChange={(e)=> {
                                console.log(e);
                                onChange(e.detail.value);
                                if (e.detail.value != undefined) 
                                props.setState('disordersChangeFinal', 'asma' ) }}></IonCheckbox>
                            <IonLabel>Asma</IonLabel>
                            </IonItem>

                            <IonItem>
                            <IonCheckbox color="primary" value= {props.getState("disorders", "")} onIonChange={(e)=> {
                                console.log(e);
                                onChange(e.detail.value);
                                if (e.detail.value != undefined) 
                                props.setState('disordersChangeFinal', 'depressão' ) }}></IonCheckbox>
                            <IonLabel>Depressão</IonLabel>
                            </IonItem>

                            <IonItem>
                            <IonCheckbox color="primary" value= {props.getState("disorders", "")} onIonChange={(e)=> {
                                console.log(e);
                                onChange(e.detail.value);
                                if (e.detail.value != undefined) 
                                props.setState('disordersChangeFinal', 'imunodeficiência' ) }}></IonCheckbox>
                            <IonLabel>Imunodeficiência</IonLabel>
                            </IonItem>

                            <IonItem>
                                <IonLabel>Outros: </IonLabel>
                                <IonInput value= {props.getState("disordersChangeFinal", "")} onIonChange={(e)=> {
                                console.log(e);
                                onChange(e.detail.value) }}/>
                            </IonItem>
                            </IonList>
                            )}
                            control={control}
                            name={"disordersChangeFinal"}
                            />
                        </IonItem>

                        <IonList>
                        <IonItem>
                            <IonLabel>Você começou a fazer uso frequente de alguma medicação por orientação médica,
                                depois que entrou no estudo?
                            </IonLabel>
                            
                            <Controller render={({onChange}) => (
                            <IonRadioGroup value={medsChange} onIonChange={(e) => {setmedsChange(e.detail.value); 
                                if (e.detail.value != undefined) 
                                props.setState('medsChangeFinal', e.detail.value )  }}>

                                <IonItem>
                                <IonLabel>Sim</IonLabel>
                                <IonRadio color="primary" value="sim"></IonRadio>
                                </IonItem> 
                                
                               
                                <IonItem>
                                <IonLabel>Não</IonLabel>
                                <IonRadio color="primary" value="não"></IonRadio>
                                </IonItem> 
                            </IonRadioGroup>
                            )}
                            control={control}
                            name={"medsChangeFinal"}
                            />
                        </IonItem>
                      
                        {medsChange === "sim" ?
                        
                        <IonItem>
                            <Controller render={({onChange}) => (
                            <IonTextarea placeholder="Quais medicações?" onIonChange={(e)=> {
                                console.log(e);
                                onChange(e.detail.value);
                                if (e.detail.value != undefined) 
                                props.setState('medsUsedChangeFinal', e.detail.value ) }}/> )} control={control} name={'medsUsedChangeFinal'} />
                        </IonItem> : null
                        }
                       </IonList>
       
                        <IonList>
                            <IonItem>
                                <IonLabel>Você começou a fazer uso frequente de alguma medicação sem orientação médica,
                                    depois que entrou no estudo?</IonLabel>
                                <Controller render={({onChange}) => (
                                <IonRadioGroup value={selectedMedsNoOrientation} onIonChange={(e) => {setSelectedMedsNoOrientation(e.detail.value); 
                                    if (e.detail.value != undefined) 
                                    props.setState('medsOffChangeFinal', e.detail.value )}}>

                                    <IonItem>
                                    <IonLabel>Sim</IonLabel>
                                    <IonRadio color="primary" value="sim"></IonRadio>
                                    </IonItem>
                                
                                    <IonItem>
                                    <IonLabel>Não</IonLabel>
                                    <IonRadio color="primary" value="não"></IonRadio>
                                    </IonItem>
                                </IonRadioGroup>
                                )}
                                control={control}
                                name={"medsOffChangeFinal"} 
                                />
                            </IonItem>

                            {selectedMedsNoOrientation === "sim" ?
                            <IonItem>
                                <Controller render={({onChange}) => (
                                <IonTextarea placeholder="Quais medicações?" onIonChange={(e)=> {
                                    console.log(e);
                                    onChange(e.detail.value);
                                    if (e.detail.value != undefined) 
                                    props.setState('medsOffUsedChangeFinal', e.detail.value ) }}/> )} control={control} name={'medsOffUsedChangeFinal'}/>
                            </IonItem>: null }
                        </IonList> 

                        <IonLabel className="questions">Você fez psicoterapia nas últimas duas semanas? </IonLabel>        
                        <IonItem>
                           

                            <Controller render={({onChange}) => (

                                <IonRadioGroup onIonChange={(e) => { 
                                    onChange(e.detail.value);
                                    if (e.detail.value != undefined) 
                                    props.setState('psychotherPostFinal', e.detail.value )}}>

                                    <IonItem>
                                    <IonLabel>Não</IonLabel>
                                    <IonRadio className={"radio-options"} color="primary" value="não"></IonRadio>
                                    </IonItem>
                                
                                    <IonItem>
                                    <IonLabel>Sim, on-line</IonLabel>
                                    <IonRadio className={"radio-options"} color="primary" value="online"></IonRadio>
                                    </IonItem>

                                    <IonItem>
                                    <IonLabel>Sim, presencial</IonLabel>
                                    <IonRadio className={"radio-options"} color="primary" value="presencial"></IonRadio>
                                    </IonItem>
                                </IonRadioGroup>
                                                        
                             )} 
                             control={control}
                             name={"psychotherPostFinal"}
                             rules={{required: true}}
                             />
                         </IonItem>
                         {errors.psychother && <IonText color="danger">Campo obrigatório.</IonText>}

                        <IonButton onClick={props.prev} size="large" fill="clear" disabled={true}>Anterior</IonButton>
                        <IonButton disabled={formState.isValid === false} onClick={props.next} size="large" className={"btnProximo"} fill="clear"> Próximo </IonButton>

                        </form>
                    </div>
                </IonContent>
    )

}

export default SaudeFinal1;


