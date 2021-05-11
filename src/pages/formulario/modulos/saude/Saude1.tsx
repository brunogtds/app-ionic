import React from "react";
import {StepComponentProps} from "react-step-builder";

import {IonItem, IonLabel, IonInput, IonRadioGroup, IonRadio, IonSelect, IonSelectOption, IonButton, IonCheckbox, IonList, IonTextarea, IonPage} from "@ionic/react";
import { IonContent, IonHeader, IonToolbar, IonTitle, IonText} from '@ionic/react';
 
import '../../Forms.css';

import { useForm, Controller } from "react-hook-form";
import {useState} from 'react';

const Saude1 = (props: StepComponentProps) => {

   const {control, watch, handleSubmit, errors, formState} = useForm({ mode: "onChange"});

   const [showOptions, setShowOptions] = React.useState(false);

   const [selected, setSelected] = useState();
   const [selectedNoOrientation, setSelectedNoOrientation] = useState();
   
 

    return (
       
        
        <IonContent fullscreen color="light">

       
        <div>

                  
             <form className="ion-padding">

             <IonLabel className="questions">Doenças diagnosticadas:</IonLabel>
             
             <IonItem>
             

                            <Controller render={({onChange}) => (
                            
                            <IonList>

                            <IonItem>
                            <IonCheckbox className={"checkbox-options"} color="primary" value= {props.getState("disorders", "")} onIonChange={(e)=> {
                                
                                console.log(e);
                                onChange(e.detail.value);
                                if (e.detail.value != undefined) 
                                props.setState('disorders', 'nenhuma' ) }}></IonCheckbox>
                            <IonLabel>Nenhuma</IonLabel>
                            </IonItem>

                            <IonItem>
                            <IonCheckbox className={"checkbox-options"} color="primary" value= {props.getState("disorders", "")} onIonChange={(e)=> {
                                console.log(e);
                                onChange(e.detail.value);
                                if (e.detail.value != undefined) 
                                props.setState('disorders', 'diabetes' ) }}></IonCheckbox>
                            <IonLabel>Diabetes</IonLabel>
                            </IonItem>

                            <IonItem>
                            <IonCheckbox className={"checkbox-options"} color="primary" value= {props.getState("disorders", "")} onIonChange={(e)=> {
                                console.log(e);
                                onChange(e.detail.value);
                                if (e.detail.value != undefined) 
                                props.setState('disorders', 'hipertensão' ) }}></IonCheckbox>
                            <IonLabel>Hipertensão</IonLabel>
                            </IonItem>
                            
                            <IonItem>
                            <IonCheckbox className={"checkbox-options"} color="primary" value= {props.getState("disorders", "")} onIonChange={(e)=> {
                                console.log(e);
                                onChange(e.detail.value);
                                if (e.detail.value != undefined) 
                                props.setState('disorders', 'asma' ) }}></IonCheckbox>
                            <IonLabel>Asma</IonLabel>
                            </IonItem>

                            <IonItem>
                            <IonCheckbox className={"checkbox-options"} color="primary" value= {props.getState("disorders", "")} onIonChange={(e)=> {
                                console.log(e);
                                onChange(e.detail.value);
                                if (e.detail.value != undefined) 
                                props.setState('disorders', 'depressão' ) }}></IonCheckbox>
                            <IonLabel>Depressão</IonLabel>
                            </IonItem>

                            <IonItem>
                            <IonCheckbox className={"checkbox-options"} color="primary" value= {props.getState("disorders", "")} onIonChange={(e)=> {
                                console.log(e);
                                onChange(e.detail.value);
                                if (e.detail.value != undefined) 
                                props.setState('disorders', 'imunodeficiência' ) }}></IonCheckbox>
                            <IonLabel>Imunodeficiência</IonLabel>
                            </IonItem>

                            <IonItem>
                               
                                <IonInput placeholder="Outros" type="text" onIonChange={(e)=> {
                                if (e.detail.value != undefined) 
                                props.setState('disorders', e.detail.value ) }}/>
                            </IonItem>
                            </IonList>
                            )}
                            
                            control={control}
                           // rules={{required: true}}
                            name={"disorders"}
                            
                            />
                            <div>
                            {/*errors.disorders && <IonText color="danger">Campo obrigatório.</IonText>*/}
                            </div> 
                      
                        </IonItem>
                                          

            <IonLabel className="questions">Você faz uso frequente de medicações por orientação médica?</IonLabel>
                        <IonList>
                        <IonItem>
                            
                            
                            <Controller render={({onChange}) => (
                            <IonRadioGroup  value={selected} onIonChange={(e) => {setSelected(e.detail.value); 
                                onChange(e.detail.value);
                                if (e.detail.value != undefined) 
                                props.setState('meds', e.detail.value )  }}>

                                <IonItem>
                                <IonLabel>Sim</IonLabel>
                                <IonRadio className={"radio-options"} color="primary" value="sim"></IonRadio>
                                </IonItem> 
                                
                               
                                <IonItem>
                                <IonLabel>Não</IonLabel>
                                <IonRadio className={"radio-options"} color="primary" value="não"></IonRadio>
                                </IonItem> 
                            </IonRadioGroup>
                            )}
                            control={control}
                            rules={{required: true}}
                            name={"meds"}
                            />
                        </IonItem>
                        {errors.meds && <IonText color="danger">Campo obrigatório.</IonText>}        
                        {selected === "sim" ?
                        
                        <IonItem>
                            <Controller render={({onChange}) => (
                            <IonTextarea placeholder="Quais medicações?" onIonChange={(e)=> {
                                console.log(e);
                                onChange(e.detail.value);
                                if (e.detail.value != undefined) 
                                props.setState('medsUsed', e.detail.value ) }}/> )} control={control} name={'medsUsed'} rules={{required: true}} />
                      {errors.medsUsed && <IonText color="danger">Campo obrigatório.</IonText>}
                        </IonItem> : null
                        }
                       </IonList>
       
                        
                       <IonLabel className="questions">Você faz uso frequente de medicações sem orientação médica?</IonLabel>
                        <IonList>
                        
                        <IonItem>
                            
                            <Controller render={({onChange}) => (
                            <IonRadioGroup value={selectedNoOrientation} onIonChange={(e) => {setSelectedNoOrientation(e.detail.value); 
                                onChange(e.detail.value);
                                if (e.detail.value != undefined) 
                                props.setState('medsOff', e.detail.value )}}>

                                <IonItem>
                                <IonLabel>Sim</IonLabel>
                                <IonRadio className={"radio-options"} color="primary" value="sim"></IonRadio>
                                </IonItem>
                               
                                <IonItem>
                                <IonLabel>Não</IonLabel>
                                <IonRadio className={"radio-options"} color="primary" value="não"></IonRadio>
                                </IonItem>
                            </IonRadioGroup>
                            )}
                            control={control}
                            name={"medsOff"} 
                            rules={{required: true}}
                            />
                        </IonItem>
                        {errors.medsOff && <IonText color="danger">Campo obrigatório.</IonText>}

                        {selectedNoOrientation === "sim" ?
                        <IonItem>
                            <Controller render={({onChange}) => (
                            <IonTextarea placeholder="Quais medicações?" onIonChange={(e)=> {
                                console.log(e);
                                onChange(e.detail.value);
                                if (e.detail.value != undefined) 
                                props.setState('medsOffUsed', e.detail.value ) }}/> )} control={control} name={'medsOffUsed'} rules={{required: true}}/>
                        </IonItem>: null } {errors.medsOffUsed && <IonText color="danger">Campo obrigatório.</IonText>}
                        </IonList> 

                        <IonLabel className="questions">Você fez psicoterapia nas últimas duas semanas? </IonLabel>        
                        <IonItem>
                           

                            <Controller render={({onChange}) => (

                                <IonRadioGroup onIonChange={(e) => { 
                                    onChange(e.detail.value);
                                    if (e.detail.value != undefined) 
                                    props.setState('psychoter', e.detail.value )}}>

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
                             name={"psychother"}
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

export default Saude1;