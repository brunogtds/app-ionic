import React from "react";
import {StepComponentProps} from "react-step-builder";

import {IonItem, IonLabel, IonRadioGroup, IonRadio, IonButton} from "@ionic/react";
import { IonContent} from '@ionic/react';

import '../../Forms.css';
import { useForm, Controller } from "react-hook-form";
import {useState} from 'react';

import { IonProgressBar} from '@ionic/react';

const Step13 = (props: StepComponentProps) => {
    const {control, watch, handleSubmit} = useForm();
    const [problemasSono, setProblemasSono] = useState();
 
    return(
        <IonContent fullscreen> 
         <IonItem>
       
        
       </IonItem>
        <div>
            <form className={"ion-padding"}>

            
            <IonLabel className="questions">Você tem tido problemas com seu sono?</IonLabel>
            <IonItem>
                

                <Controller render={({onChange}) => (
                            <IonRadioGroup value={problemasSono} onIonChange={(e) => {setProblemasSono(e.detail.value);
                                if (e.detail.value != undefined) {
                                props.setState('sleepProblem', e.detail.value )}}}>

                                <IonItem>
                                <IonLabel>Sim</IonLabel>
                                <IonRadio color="primary" value="sim"></IonRadio>
                                </IonItem>
                               
                                <IonItem>
                                <IonLabel>Não</IonLabel>
                                <IonRadio color="primary" value="não"></IonRadio>
                                </IonItem>
                            </IonRadioGroup> )} control={control} name={"sleepProblem"}/>
            </IonItem>

            {problemasSono == "sim" ?
            <IonItem>

            <IonLabel className="questions">Por favor, avalie a gravidade da sua insônia nas duas últimas semanas, em relação a:</IonLabel>
            </IonItem>
            :null }

            {problemasSono == "sim" ?
            
                
                <IonItem>

                             <IonLabel className="questions">Dificuldade de pegar no sono.</IonLabel>
                           
                             <Controller render={({onChange}) => (
                             <IonRadioGroup onIonChange={(e)=> {
                                console.log(e);
                                onChange(e.detail.value); 
                                if (e.detail.value != undefined) {
                                props.setState('isi_isi01', e.detail.value )}}}>

                                <IonItem>
                                <IonLabel>Nenhuma</IonLabel>
                                <IonRadio color="primary" value="0"></IonRadio>
                                </IonItem>
                               
                                <IonItem>
                                <IonLabel>Leve</IonLabel>
                                <IonRadio color="primary" value="1"></IonRadio>
                                </IonItem>

                                <IonItem>
                                <IonLabel>Moderada</IonLabel>
                                <IonRadio color="primary" value="2"></IonRadio>
                                </IonItem>
                               
                                <IonItem>
                                <IonLabel>Grave</IonLabel>
                                <IonRadio color="primary" value="3"></IonRadio>
                                </IonItem>

                                <IonItem>
                                <IonLabel>Muito grave</IonLabel>
                                <IonRadio color="primary" value="4"></IonRadio>
                                </IonItem>
      
                            </IonRadioGroup> )} control={control} name='isi_isi01'/>
                    </IonItem> :null }

                    {problemasSono == "sim" ?
                <IonItem>

                             <IonLabel className="questions">Dificuldade de manter o sono.</IonLabel>

                             <Controller render={({onChange}) => (
                             <IonRadioGroup onIonChange={(e)=> {
                                console.log(e);
                                onChange(e.detail.value); 
                                if (e.detail.value != undefined) {
                                props.setState('isi_isi02', e.detail.value )}}}>

                                <IonItem>
                                <IonLabel>Nenhuma</IonLabel>
                                <IonRadio color="primary" value="0"></IonRadio>
                                </IonItem>
                               
                                <IonItem>
                                <IonLabel>Leve</IonLabel>
                                <IonRadio color="primary" value="1"></IonRadio>
                                </IonItem>

                                <IonItem>
                                <IonLabel>Moderada</IonLabel>
                                <IonRadio color="primary" value="2"></IonRadio>
                                </IonItem>
                               
                                <IonItem>
                                <IonLabel>Grave</IonLabel>
                                <IonRadio color="primary" value="3"></IonRadio>
                                </IonItem>

                                <IonItem>
                                <IonLabel>Muito grave</IonLabel>
                                <IonRadio color="primary" value="4"></IonRadio>
                                </IonItem>
      
                            </IonRadioGroup> )} control={control} name='isi_isi02'/>
                    </IonItem> :null }

                    {problemasSono == "sim" ?
                    <IonItem>

                             <IonLabel className="questions">Problema de despertar muito cedo.</IonLabel>

                             <Controller render={({onChange}) => (
                             <IonRadioGroup onIonChange={(e)=> {
                                console.log(e);
                                onChange(e.detail.value); 
                                if (e.detail.value != undefined) {
                                props.setState('isi_isi03', e.detail.value )}}}>

                                <IonItem>
                                <IonLabel>Nenhuma</IonLabel>
                                <IonRadio color="primary" value="0"></IonRadio>
                                </IonItem>
                               
                                <IonItem>
                                <IonLabel>Leve</IonLabel>
                                <IonRadio color="primary" value="1"></IonRadio>
                                </IonItem>

                                <IonItem>
                                <IonLabel>Moderada</IonLabel>
                                <IonRadio color="primary" value="2"></IonRadio>
                                </IonItem>
                               
                                <IonItem>
                                <IonLabel>Grave</IonLabel>
                                <IonRadio color="primary" value="3"></IonRadio>
                                </IonItem>

                                <IonItem>
                                <IonLabel>Muito grave</IonLabel>
                                <IonRadio color="primary" value="4"></IonRadio>
                                </IonItem>
      
                            </IonRadioGroup> )} control={control} name='isi_isi03'/>
                    </IonItem>
            
            :null }
            
            <IonButton disabled={props.isFirst()}onClick={props.prev} size="large">Anterior</IonButton>
            <IonButton onClick={props.next} size="large" className={"btnProximo"}>Submeter</IonButton>
            </form>

        </div>

        </IonContent>
    )
}

export default Step13; 