import React from "react";
import {StepComponentProps} from "react-step-builder";

import {IonItem, IonLabel, IonRadioGroup, IonRadio, IonButton, IonLoading, IonText} from "@ionic/react";
import { IonContent} from '@ionic/react';

import '../../../Forms.css';

import { useForm, Controller } from "react-hook-form";


import { IonProgressBar} from '@ionic/react';

import {useState} from 'react';

import  {Redirect, useHistory } from 'react-router-dom'
import {toast} from '../../../../../toast';

//imports user context do reactfire

import {useUser} from 'reactfire';
import firebase from 'firebase';



const Who5Post = (props: StepComponentProps) => {

    const {control, watch, handleSubmit, errors, formState} = useForm({mode: "onChange"});

    const {data: user}= useUser();
    const [dataUser, setData] = useState()
 
    const history= useHistory();
    const [loader, setLoader]= useState<boolean>(false)
 
    return(
        <IonContent fullscreen color="light"> 
         
        <div>
            <form className={"ion-padding"}>
            <IonLoading message="Por favor aguarde..." duration={2000} isOpen={loader}/>

            
                <IonLabel className="questions">Nas últimas duas semanas...</IonLabel>
           
            <div>
            <IonLabel className={"ion-text-wrapper questions"}>... eu estava alegre e de bom humor</IonLabel>
            </div>
            <IonItem>


                            <Controller render={({onChange}) => (
                             <IonRadioGroup  onIonChange={(e)=> {
                                console.log(e);
                                onChange(e.detail.value);
                                if (e.detail.value != undefined) {
                                props.setState('who5Post14_SQ001', e.detail.value )} } }>

                                <IonItem>
                                <IonLabel>o tempo todo</IonLabel>
                                <IonRadio className={"radio-options"} color="primary" value="6"></IonRadio>
                                </IonItem>
                               
                                <IonItem>
                                <IonLabel>a maioria do tempo</IonLabel>
                                <IonRadio className={"radio-options"} color="primary" value="5"></IonRadio>
                                </IonItem>

                                <IonItem>
                                <IonLabel>mais do que metade do tempo</IonLabel>
                                <IonRadio className={"radio-options"} color="primary" value="4"></IonRadio>
                                </IonItem>
                               
                                <IonItem>
                                <IonLabel>às vezes</IonLabel>
                                <IonRadio className={"radio-options"} color="primary" value="3"></IonRadio>
                                </IonItem>

                                <IonItem>
                                <IonLabel>menos do que metade do tempo</IonLabel>
                                <IonRadio className={"radio-options"} color="primary" value="2"></IonRadio>
                                </IonItem>

                                <IonItem>
                                <IonLabel>em nenhum momento</IonLabel>
                                <IonRadio className={"radio-options"} color="primary" value="1"></IonRadio>
                                </IonItem>
                               
                            </IonRadioGroup> )} control={control} name={"who5Post14_SQ001"} rules={{required:true}}/>
                            {errors.who5Post14_SQ001 && <IonText color="danger">Campo obrigatório.</IonText>}
                    </IonItem>
                    <IonLabel className={"ion-text-wrapper questions"}>... me senti calmo e relaxado</IonLabel>
                    <IonItem>

                            
                    <Controller render={({onChange}) => (
                             <IonRadioGroup onIonChange={(e)=> {
                                console.log(e);
                                onChange(e.detail.value);
                                if (e.detail.value != undefined) {
                                props.setState('who5Post14_SQ002', e.detail.value )} } }>

                                <IonItem>
                                <IonLabel>o tempo todo</IonLabel>
                                <IonRadio className={"radio-options"} color="primary" value="6"></IonRadio>
                                </IonItem>
                               
                                <IonItem>
                                <IonLabel>a maioria do tempo</IonLabel>
                                <IonRadio className={"radio-options"} color="primary" value="5"></IonRadio>
                                </IonItem>

                                <IonItem>
                                <IonLabel>mais do que metade do tempo</IonLabel>
                                <IonRadio className={"radio-options"} color="primary" value="4"></IonRadio>
                                </IonItem>
                               
                                <IonItem>
                                <IonLabel>às vezes</IonLabel>
                                <IonRadio className={"radio-options"} color="primary" value="3"></IonRadio>
                                </IonItem>

                                <IonItem>
                                <IonLabel>menos do que metade do tempo</IonLabel>
                                <IonRadio className={"radio-options"} color="primary" value="2"></IonRadio>
                                </IonItem>

                                <IonItem>
                                <IonLabel>em nenhum momento</IonLabel>
                                <IonRadio className={"radio-options"} color="primary" value="1"></IonRadio>
                                </IonItem>
                               
                            </IonRadioGroup> )} control={control} name={"who5Post14_SQ002"} rules={{required:true}}/>
                            {errors.who5Post14_SQ002 && <IonText color="danger">Campo obrigatório.</IonText>}
                    </IonItem>

                    <IonLabel className={"ion-text-wrapper questions"}>... me senti disposto e renovado ao acordar</IonLabel>
                    <IonItem>

                             
                    <Controller render={({onChange}) => (
                             <IonRadioGroup onIonChange={(e)=> {
                                console.log(e);
                                onChange(e.detail.value);
                                if (e.detail.value != undefined) {
                                props.setState('who5Post14_SQ003', e.detail.value )} } }>

                                <IonItem>
                                <IonLabel>o tempo todo</IonLabel>
                                <IonRadio className={"radio-options"} color="primary" value="6"></IonRadio>
                                </IonItem>
                               
                                <IonItem>
                                <IonLabel>a maioria do tempo</IonLabel>
                                <IonRadio className={"radio-options"} color="primary" value="5"></IonRadio>
                                </IonItem>

                                <IonItem>
                                <IonLabel>mais do que metade do tempo</IonLabel>
                                <IonRadio className={"radio-options"} color="primary" value="4"></IonRadio>
                                </IonItem>
                               
                                <IonItem>
                                <IonLabel>às vezes</IonLabel>
                                <IonRadio className={"radio-options"} color="primary" value="3"></IonRadio>
                                </IonItem>

                                <IonItem>
                                <IonLabel>menos do que metade do tempo</IonLabel>
                                <IonRadio className={"radio-options"} color="primary" value="2"></IonRadio>
                                </IonItem>

                                <IonItem>
                                <IonLabel>em nenhum momento</IonLabel>
                                <IonRadio className={"radio-options"} color="primary" value="1"></IonRadio>
                                </IonItem>
                               
                            </IonRadioGroup> )} control={control} name={"who5Post14_SQ003"} rules={{required:true}}/>
                            {errors.who5Post14_SQ003 && <IonText color="danger">Campo obrigatório.</IonText>}
                    </IonItem>

                    <IonLabel className={"ion-text-wrapper questions"}>... me senti cheio de energia e ativo</IonLabel>
                    <IonItem>

                            
                    <Controller render={({onChange}) => (
                             <IonRadioGroup onIonChange={(e)=> {
                                console.log(e);
                                onChange(e.detail.value);
                                if (e.detail.value != undefined) {
                                props.setState('who5Post14_SQ004', e.detail.value )} } }>

                                <IonItem>
                                <IonLabel>o tempo todo</IonLabel>
                                <IonRadio className={"radio-options"} color="primary" value="6"></IonRadio>
                                </IonItem>
                               
                                <IonItem>
                                <IonLabel>a maioria do tempo</IonLabel>
                                <IonRadio className={"radio-options"} color="primary" value="5"></IonRadio>
                                </IonItem>

                                <IonItem>
                                <IonLabel>mais do que metade do tempo</IonLabel>
                                <IonRadio className={"radio-options"} color="primary" value="4"></IonRadio>
                                </IonItem>
                               
                                <IonItem>
                                <IonLabel>às vezes</IonLabel>
                                <IonRadio className={"radio-options"} color="primary" value="3"></IonRadio>
                                </IonItem>

                                <IonItem>
                                <IonLabel>menos do que metade do tempo</IonLabel>
                                <IonRadio  className={"radio-options"} color="primary" value="2"></IonRadio>
                                </IonItem>

                                <IonItem>
                                <IonLabel>em nenhum momento</IonLabel>
                                <IonRadio  className={"radio-options"} color="primary" value="1"></IonRadio>
                                </IonItem>
                               
                            </IonRadioGroup> )} control={control} name={"who5Post14_SQ004"} rules={{required:true}}/>
                            {errors.who5Post14_SQ004 && <IonText color="danger">Campo obrigatório.</IonText>}
                    </IonItem>

                    <IonLabel className={"ion-text-wrapper questions"}>... o meu dia foi cheio de coisas que interessavam</IonLabel>
                    <IonItem>

                             
                    <Controller render={({onChange}) => (
                             <IonRadioGroup onIonChange={(e)=> {
                                console.log(e);
                                onChange(e.detail.value);
                                if (e.detail.value != undefined) {
                                props.setState('who5Post14_SQ005', e.detail.value )} } }>

                                <IonItem>
                                <IonLabel>o tempo todo</IonLabel>
                                <IonRadio className={"radio-options"} color="primary" value="6"></IonRadio>
                                </IonItem>
                               
                                <IonItem>
                                <IonLabel>a maioria do tempo</IonLabel>
                                <IonRadio className={"radio-options"} color="primary" value="5"></IonRadio>
                                </IonItem>

                                <IonItem>
                                <IonLabel>mais do que metade do tempo</IonLabel>
                                <IonRadio className={"radio-options"} color="primary" value="4"></IonRadio>
                                </IonItem>
                               
                                <IonItem>
                                <IonLabel>às vezes</IonLabel>
                                <IonRadio className={"radio-options"} color="primary" value="3"></IonRadio>
                                </IonItem>

                                <IonItem>
                                <IonLabel>menos do que metade do tempo</IonLabel>
                                <IonRadio className={"radio-options"} color="primary" value="2"></IonRadio>
                                </IonItem>

                                <IonItem>
                                <IonLabel>em nenhum momento</IonLabel>
                                <IonRadio className={"radio-options"} color="primary" value="1"></IonRadio>
                                </IonItem>
                               
                            </IonRadioGroup> )} control={control} name={"who5Post14_SQ005"} rules={{required:true}}/>
                            {errors.who5Post14_SQ005 && <IonText color="danger">Campo obrigatório.</IonText>}
                    </IonItem>
                    
                



            <IonButton disabled={props.isFirst()}onClick={props.prev} size="large" fill="clear">Anterior</IonButton>
            <IonButton disabled={formState.isValid === false} onClick={props.next} size="large" className={"btnProximo"} fill="clear">Próximo</IonButton>
            </form>

        </div>

        </IonContent>
    )
}

export default Who5Post; 

