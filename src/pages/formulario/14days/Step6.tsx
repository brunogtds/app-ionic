import React from "react";
import {StepComponentProps} from "react-step-builder";

import {IonItem, IonLabel, IonRadioGroup, IonRadio, IonButton} from "@ionic/react";
import { IonContent} from '@ionic/react';

import '../Forms.css';

import { useForm, Controller } from "react-hook-form";


import { IonProgressBar} from '@ionic/react';


const Step6 = (props: StepComponentProps) => {

    const {control, watch, handleSubmit} = useForm();
 
    return(
        <IonContent fullscreen> 
        <div>
            <form className={"ion-padding"}>

            <IonProgressBar value={0.6} buffer={0.6}></IonProgressBar>
            
            <IonItem>
                 <IonLabel>Por favor, marque a alternativa que melhor descreva como a Sra./Sr. tenha se sentido nas últimas duas semanas.</IonLabel>
            </IonItem>
            
            <IonItem>
                <IonLabel>Nas últimas duas semanas...</IonLabel>
            </IonItem>

            <IonLabel className={"ion-text-wrapper"}>... eu estava alegre e de bom humor</IonLabel>
            <IonItem>


                            <Controller render={({onChange}) => (
                             <IonRadioGroup onIonChange={(e)=> {
                                console.log(e);
                                onChange(e.detail.value);
                                if (e.detail.value != undefined) {
                                props.setState('who5_SQ001', e.detail.value )} } }>

                                <IonItem>
                                <IonLabel>o tempo todo</IonLabel>
                                <IonRadio color="primary" value="6"></IonRadio>
                                </IonItem>
                               
                                <IonItem>
                                <IonLabel>a maioria do tempo</IonLabel>
                                <IonRadio color="primary" value="5"></IonRadio>
                                </IonItem>

                                <IonItem>
                                <IonLabel>mais do que metade do tempo</IonLabel>
                                <IonRadio color="primary" value="4"></IonRadio>
                                </IonItem>
                               
                                <IonItem>
                                <IonLabel>às vezes</IonLabel>
                                <IonRadio color="primary" value="3"></IonRadio>
                                </IonItem>

                                <IonItem>
                                <IonLabel>menos do que metade do tempo</IonLabel>
                                <IonRadio color="primary" value="2"></IonRadio>
                                </IonItem>

                                <IonItem>
                                <IonLabel>em nenhum momento</IonLabel>
                                <IonRadio color="primary" value="1"></IonRadio>
                                </IonItem>
                               
                            </IonRadioGroup> )} control={control} name={"who5_SQ001"}/>
                    </IonItem>
                    <IonLabel className={"ion-text-wrapper"}>... me senti calmo e relaxado</IonLabel>
                    <IonItem>

                            
                    <Controller render={({onChange}) => (
                             <IonRadioGroup onIonChange={(e)=> {
                                console.log(e);
                                onChange(e.detail.value);
                                if (e.detail.value != undefined) {
                                props.setState('who5_SQ002', e.detail.value )} } }>

                                <IonItem>
                                <IonLabel>o tempo todo</IonLabel>
                                <IonRadio color="primary" value="6"></IonRadio>
                                </IonItem>
                               
                                <IonItem>
                                <IonLabel>a maioria do tempo</IonLabel>
                                <IonRadio color="primary" value="5"></IonRadio>
                                </IonItem>

                                <IonItem>
                                <IonLabel>mais do que metade do tempo</IonLabel>
                                <IonRadio color="primary" value="4"></IonRadio>
                                </IonItem>
                               
                                <IonItem>
                                <IonLabel>às vezes</IonLabel>
                                <IonRadio color="primary" value="3"></IonRadio>
                                </IonItem>

                                <IonItem>
                                <IonLabel>menos do que metade do tempo</IonLabel>
                                <IonRadio color="primary" value="2"></IonRadio>
                                </IonItem>

                                <IonItem>
                                <IonLabel>em nenhum momento</IonLabel>
                                <IonRadio color="primary" value="1"></IonRadio>
                                </IonItem>
                               
                            </IonRadioGroup> )} control={control} name={"who5_SQ002"}/>
                    </IonItem>

                    <IonLabel className={"ion-text-wrapper"}>... me senti disposto e renovado ao acordar</IonLabel>
                    <IonItem>

                             
                    <Controller render={({onChange}) => (
                             <IonRadioGroup onIonChange={(e)=> {
                                console.log(e);
                                onChange(e.detail.value);
                                if (e.detail.value != undefined) {
                                props.setState('who5_SQ003', e.detail.value )} } }>

                                <IonItem>
                                <IonLabel>o tempo todo</IonLabel>
                                <IonRadio color="primary" value="6"></IonRadio>
                                </IonItem>
                               
                                <IonItem>
                                <IonLabel>a maioria do tempo</IonLabel>
                                <IonRadio color="primary" value="5"></IonRadio>
                                </IonItem>

                                <IonItem>
                                <IonLabel>mais do que metade do tempo</IonLabel>
                                <IonRadio color="primary" value="4"></IonRadio>
                                </IonItem>
                               
                                <IonItem>
                                <IonLabel>às vezes</IonLabel>
                                <IonRadio color="primary" value="3"></IonRadio>
                                </IonItem>

                                <IonItem>
                                <IonLabel>menos do que metade do tempo</IonLabel>
                                <IonRadio color="primary" value="2"></IonRadio>
                                </IonItem>

                                <IonItem>
                                <IonLabel>em nenhum momento</IonLabel>
                                <IonRadio color="primary" value="1"></IonRadio>
                                </IonItem>
                               
                            </IonRadioGroup> )} control={control} name={"who5_SQ003"}/>
                    </IonItem>

                    <IonLabel className={"ion-text-wrapper"}>... me senti cheio de energia e ativo</IonLabel>
                    <IonItem>

                            
                    <Controller render={({onChange}) => (
                             <IonRadioGroup onIonChange={(e)=> {
                                console.log(e);
                                onChange(e.detail.value);
                                if (e.detail.value != undefined) {
                                props.setState('who5_SQ004', e.detail.value )} } }>

                                <IonItem>
                                <IonLabel>o tempo todo</IonLabel>
                                <IonRadio color="primary" value="6"></IonRadio>
                                </IonItem>
                               
                                <IonItem>
                                <IonLabel>a maioria do tempo</IonLabel>
                                <IonRadio color="primary" value="5"></IonRadio>
                                </IonItem>

                                <IonItem>
                                <IonLabel>mais do que metade do tempo</IonLabel>
                                <IonRadio color="primary" value="4"></IonRadio>
                                </IonItem>
                               
                                <IonItem>
                                <IonLabel>às vezes</IonLabel>
                                <IonRadio color="primary" value="3"></IonRadio>
                                </IonItem>

                                <IonItem>
                                <IonLabel>menos do que metade do tempo</IonLabel>
                                <IonRadio color="primary" value="2"></IonRadio>
                                </IonItem>

                                <IonItem>
                                <IonLabel>em nenhum momento</IonLabel>
                                <IonRadio color="primary" value="1"></IonRadio>
                                </IonItem>
                               
                            </IonRadioGroup> )} control={control} name={"who5_SQ004"}/>
                    </IonItem>

                    <IonLabel className={"ion-text-wrapper"}>... o meu dia foi cheio de coisas que interessavam</IonLabel>
                    <IonItem>

                             
                    <Controller render={({onChange}) => (
                             <IonRadioGroup onIonChange={(e)=> {
                                console.log(e);
                                onChange(e.detail.value);
                                if (e.detail.value != undefined) {
                                props.setState('who5_SQ005', e.detail.value )} } }>

                                <IonItem>
                                <IonLabel>o tempo todo</IonLabel>
                                <IonRadio color="primary" value="6"></IonRadio>
                                </IonItem>
                               
                                <IonItem>
                                <IonLabel>a maioria do tempo</IonLabel>
                                <IonRadio color="primary" value="5"></IonRadio>
                                </IonItem>

                                <IonItem>
                                <IonLabel>mais do que metade do tempo</IonLabel>
                                <IonRadio color="primary" value="4"></IonRadio>
                                </IonItem>
                               
                                <IonItem>
                                <IonLabel>às vezes</IonLabel>
                                <IonRadio color="primary" value="3"></IonRadio>
                                </IonItem>

                                <IonItem>
                                <IonLabel>menos do que metade do tempo</IonLabel>
                                <IonRadio color="primary" value="2"></IonRadio>
                                </IonItem>

                                <IonItem>
                                <IonLabel>em nenhum momento</IonLabel>
                                <IonRadio color="primary" value="1"></IonRadio>
                                </IonItem>
                               
                            </IonRadioGroup> )} control={control} name={"who5_SQ005"}/>
                    </IonItem>
                    
                



            <IonButton disabled={props.isFirst()}onClick={props.prev} size="large">Anterior</IonButton>
            <IonButton onClick={props.next} size="large" className={"btnProximo"}>Próximo</IonButton>
            </form>

        </div>

        </IonContent>
    )
}

export default Step6; 

