import React from "react";
import {StepComponentProps} from "react-step-builder";

import {IonItem, IonLabel, IonInput, IonRadioGroup, IonRadio, IonSelect, IonSelectOption, IonButton, IonCheckbox, IonList, IonTextarea} from "@ionic/react";
import { IonContent} from '@ionic/react';
 
import '../../Forms.css';

import { useForm, Controller } from "react-hook-form";
import {useState} from 'react';

import { IonProgressBar} from '@ionic/react';


const Step3 = (props: StepComponentProps) => {

   const {control, watch, handleSubmit} = useForm();

   const [showOptions, setShowOptions] = React.useState(false);

   const [selected, setSelected] = useState();
   const [selectedNoOrientation, setSelectedNoOrientation] = useState();


    return (
        <IonContent fullscreen>
        <div>

        <div>
        <IonItem>
       
        
        </IonItem>
        </div>
           
             <form className="ion-padding">

             <IonLabel className="questions">Doenças diagnosticadas:</IonLabel>
             
             <IonItem>
                        
                        
                        

                            <Controller render={({onChange}) => (
                            
                            <IonList>

                            <IonItem>
                            <IonCheckbox color="primary" value= {props.getState("disorders", "")} onIonChange={(e)=> {
                                console.log(e);
                                onChange(e.detail.value);
                                if (e.detail.value != undefined) 
                                props.setState('disorders', 'nenhuma' ) }}></IonCheckbox>
                            <IonLabel>Nenhuma</IonLabel>
                            </IonItem>

                            <IonItem>
                            <IonCheckbox color="primary" value= {props.getState("disorders", "")} onIonChange={(e)=> {
                                console.log(e);
                                onChange(e.detail.value);
                                if (e.detail.value != undefined) 
                                props.setState('disorders', 'diabetes' ) }}></IonCheckbox>
                            <IonLabel>Diabetes</IonLabel>
                            </IonItem>

                            <IonItem>
                            <IonCheckbox color="primary" value= {props.getState("disorders", "")} onIonChange={(e)=> {
                                console.log(e);
                                onChange(e.detail.value);
                                if (e.detail.value != undefined) 
                                props.setState('disorders', 'hipertensão' ) }}></IonCheckbox>
                            <IonLabel>Hipertensão</IonLabel>
                            </IonItem>
                            
                            <IonItem>
                            <IonCheckbox color="primary" value= {props.getState("disorders", "")} onIonChange={(e)=> {
                                console.log(e);
                                onChange(e.detail.value);
                                if (e.detail.value != undefined) 
                                props.setState('disorders', 'asma' ) }}></IonCheckbox>
                            <IonLabel>Asma</IonLabel>
                            </IonItem>

                            <IonItem>
                            <IonCheckbox color="primary" value= {props.getState("disorders", "")} onIonChange={(e)=> {
                                console.log(e);
                                onChange(e.detail.value);
                                if (e.detail.value != undefined) 
                                props.setState('disorders', 'depressão' ) }}></IonCheckbox>
                            <IonLabel>Depressão</IonLabel>
                            </IonItem>

                            <IonItem>
                            <IonCheckbox color="primary" value= {props.getState("disorders", "")} onIonChange={(e)=> {
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
                            name={"disorders"}
                            />
                        </IonItem>


            <IonLabel className="questions">Você faz uso frequente de medicações por orientação médica?</IonLabel>
                        <IonList>
                        <IonItem>
                            
                            
                            <Controller render={({onChange}) => (
                            <IonRadioGroup value={selected} onIonChange={(e) => {setSelected(e.detail.value); 
                                if (e.detail.value != undefined) 
                                props.setState('meds', e.detail.value )  }}>

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
                            name={"meds"}
                            />
                        </IonItem>
                      
                        {selected === "sim" ?
                        
                        <IonItem>
                            <Controller render={({onChange}) => (
                            <IonTextarea placeholder="Quais medicações?" onIonChange={(e)=> {
                                console.log(e);
                                onChange(e.detail.value);
                                if (e.detail.value != undefined) 
                                props.setState('medsUsed', e.detail.value ) }}/> )} control={control} name={'medsUsed'} />
                        </IonItem> : null
                        }
                       </IonList>
       
                        <IonList>
                        <IonLabel className="questions">Você faz uso frequente de medicações sem orientação médica?</IonLabel>
                        <IonItem>
                            
                            <Controller render={({onChange}) => (
                            <IonRadioGroup value={selectedNoOrientation} onIonChange={(e) => {setSelectedNoOrientation(e.detail.value); 
                                if (e.detail.value != undefined) 
                                props.setState('medsOff', e.detail.value )}}>

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
                            name={"medsOff"} 
                            />
                        </IonItem>

                        {selectedNoOrientation === "sim" ?
                        <IonItem>
                            <Controller render={({onChange}) => (
                            <IonTextarea placeholder="Quais medicações?" onIonChange={(e)=> {
                                console.log(e);
                                onChange(e.detail.value);
                                if (e.detail.value != undefined) 
                                props.setState('medsOffUsed', e.detail.value ) }}/> )} control={control} name={'medsOffUsed'}/>
                        </IonItem>: null }
                        </IonList> 

                        <IonLabel className="questions">Você fez psicoterapia nas últimas duas semanas? </IonLabel>        
                        <IonItem>
                           

                            <Controller render={({onChange}) => (
                            <IonList>
                                <IonItem>
                                <IonCheckbox color="primary" value= {props.getState("psychother", "")} onIonChange={(e)=> {
                                console.log(e);
                                onChange(e.detail.value);
                                if (e.detail.value != undefined) 
                                props.setState('psychother', 'não' )  }}></IonCheckbox>
                                <IonLabel >Não</IonLabel>
                                </IonItem>

                                <IonItem>
                                <IonCheckbox color="primary" value= {props.getState("psychother", "")} onIonChange={(e)=> {
                                console.log(e);
                                onChange(e.detail.value);
                                if (e.detail.value != undefined) 
                                props.setState('psychother', 'sim, on-line' )  }}></IonCheckbox>
                                <IonLabel>Sim, on-line</IonLabel>
                                </IonItem>

                                <IonItem>
                                <IonCheckbox color="primary" value= {props.getState("psychother", "")} onIonChange={(e)=> {
                                console.log(e);
                                onChange(e.detail.value);
                                if (e.detail.value != undefined) 
                                props.setState('psychother', 'sim, presencial' )  }}></IonCheckbox>
                                <IonLabel>Sim, presencial</IonLabel>
                                </IonItem>

                             </IonList>
                             )} 
                             control={control}
                             name={"psychother"}
                             />
                         </IonItem>

                <IonButton onClick={props.prev} size="large">Anterior</IonButton>
                <IonButton onClick={props.next} size="large" className={"btnProximo"}>Próximo</IonButton>
                </form>
            
        </div>
        </IonContent>
    )


}

export default Step3;