import React from "react";
import {StepComponentProps} from "react-step-builder";

import {IonItem, IonLabel, IonRadioGroup, IonRadio, IonButton, IonLoading} from "@ionic/react";
import { IonContent } from '@ionic/react';
import '../../Forms.css';

import { useForm, Controller } from "react-hook-form";

import { IonProgressBar} from '@ionic/react';

import {useState} from 'react';

import  {Redirect, useHistory } from 'react-router-dom'
import {toast} from '../../../../toast';

//imports user context do reactfire

import {useUser} from 'reactfire';
import firebase from 'firebase';


const Step14 = (props: StepComponentProps) => {
    
    const {control, watch, handleSubmit} = useForm();

    const {data: user}= useUser();
   const [dataUser, setData] = useState()

   const history= useHistory();
   const [loader, setLoader]= useState<boolean>(false)

  async function updateUserDataQuest1(dataUser: any){
    
 
    if(user){
        firebase.firestore().collection('users').doc(user.uid).set({
            pss_pss01: Number(props.state.pss_pss01), //STEP 9
            pss_pss02: Number(props.state.pss_pss02),
            pss_pss03: Number(props.state.pss_pss03),
            pss_pss04: Number(props.state.pss_pss04),
            pss_pss05: Number(props.state.pss_pss05),
            pss_pss06: Number(props.state.pss_pss06),
            pss_pss07: Number(props.state.pss_pss07),
            pss_pss08: Number(props.state.pss_pss08),
            pss_pss09: Number(props.state.pss_pss09),
            pss_pss10: Number(props.state.pss_pss10),
            pss_pss11: Number(props.state.pss_pss11),
            pss_pss12: Number(props.state.pss_pss12),
            pss_pss13: Number(props.state.pss_pss13),
            pss_pss14: Number(props.state.pss_pss14), }, {merge: true})
        }
    
        toast('Formulário submetido com sucesso!', 4000);
        
    
    }

    function voltaModulos (){
        history.push('/modulos');
    }
        
    const onSubmit = (data: any) => {
       setData(dataUser);
       setLoader(true);
       updateUserDataQuest1(dataUser);
       voltaModulos();
       
    }

    return(
        <IonContent fullscreen> 
         <IonItem>
       
        
       </IonItem>
        <div>
            <form className={"ion-padding"} onSubmit={handleSubmit(onSubmit)}>
            <IonLoading message="Por favor aguarde..." duration={2000} isOpen={loader}/>

            
          
            <IonItem>
              <IonLabel className="questions"> No mês passado quantas vezes você...</IonLabel>
            </IonItem>

            <IonLabel className="questions">...ficou chateado(a) por causa de algo que aconteceu inesperadamente?</IonLabel>
             <IonItem>
                    
                <Controller render={({onChange}) => (
                             <IonRadioGroup onIonChange={(e)=> {
                                console.log(e);
                                onChange(e.detail.value);
                                if (e.detail.value != undefined) {
                                props.setState('pss_pss01', e.detail.value )} } }>

                                <IonItem>
                                <IonLabel>0- nunca</IonLabel>
                                <IonRadio color="primary" value="0"></IonRadio>
                                </IonItem>
                               
                                <IonItem>
                                <IonLabel>1- quase nunca</IonLabel>
                                <IonRadio color="primary" value="1"></IonRadio>
                                </IonItem>

                                <IonItem>
                                <IonLabel>2- algumas vezes</IonLabel>
                                <IonRadio color="primary" value="2"></IonRadio>
                                </IonItem>
                               
                                <IonItem>
                                <IonLabel>3- frequentemente</IonLabel>
                                <IonRadio color="primary" value="3"></IonRadio>
                                </IonItem>

                                <IonItem>
                                <IonLabel>4- muito frequentemente</IonLabel>
                                <IonRadio color="primary" value="4"></IonRadio>
                                </IonItem>
 
                            </IonRadioGroup> )} control={control} name={"pss_pss01"}/>
                    </IonItem>
                    
                    <IonLabel className="questions">...se sentiu incapaz de controlar as coisas importantes na sua vida?</IonLabel>
                    <IonItem>
                    

                    <Controller render={({onChange}) => (
                             <IonRadioGroup onIonChange={(e)=> {
                                console.log(e);
                                onChange(e.detail.value);
                                if (e.detail.value != undefined) {
                                props.setState('pss_pss02', e.detail.value )} } }>

                                <IonItem>
                                <IonLabel>0- nunca</IonLabel>
                                <IonRadio color="primary" value="0"></IonRadio>
                                </IonItem>
                               
                                <IonItem>
                                <IonLabel>1- quase nunca</IonLabel>
                                <IonRadio color="primary" value="1"></IonRadio>
                                </IonItem>

                                <IonItem>
                                <IonLabel>2- algumas vezes</IonLabel>
                                <IonRadio color="primary" value="2"></IonRadio>
                                </IonItem>
                               
                                <IonItem>
                                <IonLabel>3- frequentemente</IonLabel>
                                <IonRadio color="primary" value="3"></IonRadio>
                                </IonItem>

                                <IonItem>
                                <IonLabel>4- muito frequentemente</IonLabel>
                                <IonRadio color="primary" value="4"></IonRadio>
                                </IonItem>
 
                            </IonRadioGroup> )} control={control} name={"pss_pss02"}/>
                    </IonItem>

                    <IonLabel className="questions">...se sentiu nervoso(a) ou estressado(a)?</IonLabel>
                    <IonItem>
                    

                    <Controller render={({onChange}) => (
                             <IonRadioGroup onIonChange={(e)=> {
                                console.log(e);
                                onChange(e.detail.value);
                                if (e.detail.value != undefined) {
                                props.setState('pss_pss03', e.detail.value )} } }>

                                <IonItem>
                                <IonLabel>0- nunca</IonLabel>
                                <IonRadio color="primary" value="0"></IonRadio>
                                </IonItem>
                               
                                <IonItem>
                                <IonLabel>1- quase nunca</IonLabel>
                                <IonRadio color="primary" value="1"></IonRadio>
                                </IonItem>

                                <IonItem>
                                <IonLabel>2- algumas vezes</IonLabel>
                                <IonRadio color="primary" value="2"></IonRadio>
                                </IonItem>
                               
                                <IonItem>
                                <IonLabel>3- frequentemente</IonLabel>
                                <IonRadio color="primary" value="3"></IonRadio>
                                </IonItem>

                                <IonItem>
                                <IonLabel>4- muito frequentemente</IonLabel>
                                <IonRadio color="primary" value="4"></IonRadio>
                                </IonItem>
 
                            </IonRadioGroup> )} control={control} name={"pss_pss03"}/>
                    </IonItem>

                    <IonLabel className="questions">...lidou com sucesso com os problemas e aborrecimentos do dia a dia?</IonLabel>
                    <IonItem>
                    

                    <Controller render={({onChange}) => (
                             <IonRadioGroup onIonChange={(e)=> {
                                console.log(e);
                                onChange(e.detail.value);
                                if (e.detail.value != undefined) {
                                props.setState('pss_pss04', e.detail.value )} } }>

                                <IonItem>
                                <IonLabel>0- nunca</IonLabel>
                                <IonRadio color="primary" value="0"></IonRadio>
                                </IonItem>
                               
                                <IonItem>
                                <IonLabel>1- quase nunca</IonLabel>
                                <IonRadio color="primary" value="1"></IonRadio>
                                </IonItem>

                                <IonItem>
                                <IonLabel>2- algumas vezes</IonLabel>
                                <IonRadio color="primary" value="2"></IonRadio>
                                </IonItem>
                               
                                <IonItem>
                                <IonLabel>3- frequentemente</IonLabel>
                                <IonRadio color="primary" value="3"></IonRadio>
                                </IonItem>

                                <IonItem>
                                <IonLabel>4- muito frequentemente</IonLabel>
                                <IonRadio color="primary" value="4"></IonRadio>
                                </IonItem>
 
                            </IonRadioGroup> )} control={control} name={"pss_pss04"}/>
                    </IonItem>

                    <IonLabel className="questions">...sentiu que estava lidando de forma eficaz com as mudanças importantes que estavam acontecendo em sua vida?</IonLabel>
                    <IonItem>
                    
                    <Controller render={({onChange}) => (
                             <IonRadioGroup onIonChange={(e)=> {
                                console.log(e);
                                onChange(e.detail.value);
                                if (e.detail.value != undefined) {
                                props.setState('pss_pss05', e.detail.value )} } }>

                                <IonItem>
                                <IonLabel>0- nunca</IonLabel>
                                <IonRadio color="primary" value="0"></IonRadio>
                                </IonItem>
                               
                                <IonItem>
                                <IonLabel>1- quase nunca</IonLabel>
                                <IonRadio color="primary" value="1"></IonRadio>
                                </IonItem>

                                <IonItem>
                                <IonLabel>2- algumas vezes</IonLabel>
                                <IonRadio color="primary" value="2"></IonRadio>
                                </IonItem>
                               
                                <IonItem>
                                <IonLabel>3- frequentemente</IonLabel>
                                <IonRadio color="primary" value="3"></IonRadio>
                                </IonItem>

                                <IonItem>
                                <IonLabel>4- muito frequentemente</IonLabel>
                                <IonRadio color="primary" value="4"></IonRadio>
                                </IonItem>
 
                            </IonRadioGroup> )} control={control} name={"pss_pss05"}/>
                    </IonItem>

                    <IonLabel className="questions">...se sentiu confiante nas suas capacidades para lidar com os seus problemas pessoais?</IonLabel>
                    <IonItem>
                    
                    <Controller render={({onChange}) => (
                             <IonRadioGroup onIonChange={(e)=> {
                                console.log(e);
                                onChange(e.detail.value);
                                if (e.detail.value != undefined) {
                                props.setState('pss_pss06', e.detail.value )} } }>

                                <IonItem>
                                <IonLabel>0- nunca</IonLabel>
                                <IonRadio color="primary" value="0"></IonRadio>
                                </IonItem>
                               
                                <IonItem>
                                <IonLabel>1- quase nunca</IonLabel>
                                <IonRadio color="primary" value="1"></IonRadio>
                                </IonItem>

                                <IonItem>
                                <IonLabel>2- algumas vezes</IonLabel>
                                <IonRadio color="primary" value="2"></IonRadio>
                                </IonItem>
                               
                                <IonItem>
                                <IonLabel>3- frequentemente</IonLabel>
                                <IonRadio color="primary" value="3"></IonRadio>
                                </IonItem>

                                <IonItem>
                                <IonLabel>4- muito frequentemente</IonLabel>
                                <IonRadio color="primary" value="4"></IonRadio>
                                </IonItem>
 
                            </IonRadioGroup> )} control={control} name={"pss_pss06"}/>
                    </IonItem>

                    <IonLabel className="questions">...sentiu que as coisas estavam ocorrendo a sua maneira (do seu jeito)?</IonLabel>
                    <IonItem>
                    
                    <Controller render={({onChange}) => (
                             <IonRadioGroup onIonChange={(e)=> {
                                console.log(e);
                                onChange(e.detail.value);
                                if (e.detail.value != undefined) {
                                props.setState('pss_pss07', e.detail.value )} } }>

                                <IonItem>
                                <IonLabel>0- nunca</IonLabel>
                                <IonRadio color="primary" value="0"></IonRadio>
                                </IonItem>
                               
                                <IonItem>
                                <IonLabel>1- quase nunca</IonLabel>
                                <IonRadio color="primary" value="1"></IonRadio>
                                </IonItem>

                                <IonItem>
                                <IonLabel>2- algumas vezes</IonLabel>
                                <IonRadio color="primary" value="2"></IonRadio>
                                </IonItem>
                               
                                <IonItem>
                                <IonLabel>3- frequentemente</IonLabel>
                                <IonRadio color="primary" value="3"></IonRadio>
                                </IonItem>

                                <IonItem>
                                <IonLabel>4- muito frequentemente</IonLabel>
                                <IonRadio color="primary" value="4"></IonRadio>
                                </IonItem>
 
                            </IonRadioGroup> )} control={control} name={"pss_pss07"}/>
                    </IonItem>

                    <IonLabel className="questions">...percebeu que não poderia lidar com todas as coisas que você tinha para fazer?</IonLabel>
                    <IonItem>
                    <Controller render={({onChange}) => (
                             <IonRadioGroup onIonChange={(e)=> {
                                console.log(e);
                                onChange(e.detail.value);
                                if (e.detail.value != undefined) {
                                props.setState('pss_pss08', e.detail.value )} } }>

                                <IonItem>
                                <IonLabel>0- nunca</IonLabel>
                                <IonRadio color="primary" value="0"></IonRadio>
                                </IonItem>
                               
                                <IonItem>
                                <IonLabel>1- quase nunca</IonLabel>
                                <IonRadio color="primary" value="1"></IonRadio>
                                </IonItem>

                                <IonItem>
                                <IonLabel>2- algumas vezes</IonLabel>
                                <IonRadio color="primary" value="2"></IonRadio>
                                </IonItem>
                               
                                <IonItem>
                                <IonLabel>3- frequentemente</IonLabel>
                                <IonRadio color="primary" value="3"></IonRadio>
                                </IonItem>

                                <IonItem>
                                <IonLabel>4- muito frequentemente</IonLabel>
                                <IonRadio color="primary" value="4"></IonRadio>
                                </IonItem>
 
                            </IonRadioGroup> )} control={control} name={"pss_pss08"}/>
                    </IonItem>

                    <IonLabel className="questions">...foi capaz de controlar as irritações da sua vida?</IonLabel>
                    <IonItem>
                    

                    <Controller render={({onChange}) => (
                             <IonRadioGroup onIonChange={(e)=> {
                                console.log(e);
                                onChange(e.detail.value);
                                if (e.detail.value != undefined) {
                                props.setState('pss_pss09', e.detail.value )} } }>

                                <IonItem>
                                <IonLabel>0- nunca</IonLabel>
                                <IonRadio color="primary" value="0"></IonRadio>
                                </IonItem>
                               
                                <IonItem>
                                <IonLabel>1- quase nunca</IonLabel>
                                <IonRadio color="primary" value="1"></IonRadio>
                                </IonItem>

                                <IonItem>
                                <IonLabel>2- algumas vezes</IonLabel>
                                <IonRadio color="primary" value="2"></IonRadio>
                                </IonItem>
                               
                                <IonItem>
                                <IonLabel>3- frequentemente</IonLabel>
                                <IonRadio color="primary" value="3"></IonRadio>
                                </IonItem>

                                <IonItem>
                                <IonLabel>4- muito frequentemente</IonLabel>
                                <IonRadio color="primary" value="4"></IonRadio>
                                </IonItem>
 
                            </IonRadioGroup> )} control={control} name={"pss_pss09"}/>
                    </IonItem>

                    <IonLabel className="questions">...sentiu que estava no topo das coisas (no controle das coisas)?</IonLabel>
                    <IonItem>
                    
                    <Controller render={({onChange}) => (
                             <IonRadioGroup onIonChange={(e)=> {
                                console.log(e);
                                onChange(e.detail.value);
                                if (e.detail.value != undefined) {
                                props.setState('pss_pss10', e.detail.value )} } }>

                                <IonItem>
                                <IonLabel>0- nunca</IonLabel>
                                <IonRadio color="primary" value="0"></IonRadio>
                                </IonItem>
                               
                                <IonItem>
                                <IonLabel>1- quase nunca</IonLabel>
                                <IonRadio color="primary" value="1"></IonRadio>
                                </IonItem>

                                <IonItem>
                                <IonLabel>2- algumas vezes</IonLabel>
                                <IonRadio color="primary" value="2"></IonRadio>
                                </IonItem>
                               
                                <IonItem>
                                <IonLabel>3- frequentemente</IonLabel>
                                <IonRadio color="primary" value="3"></IonRadio>
                                </IonItem>

                                <IonItem>
                                <IonLabel>4- muito frequentemente</IonLabel>
                                <IonRadio color="primary" value="4"></IonRadio>
                                </IonItem>
 
                            </IonRadioGroup> )} control={control} name={"pss_pss10"}/>
                    </IonItem>

                    <IonLabel className="questions">...se irritou por coisas que aconteceram que estavam fora do seu controle?</IonLabel>
                    <IonItem>
                    
                    <Controller render={({onChange}) => (
                             <IonRadioGroup onIonChange={(e)=> {
                                console.log(e);
                                onChange(e.detail.value);
                                if (e.detail.value != undefined) {
                                props.setState('pss_pss11', e.detail.value )} } }>

                                <IonItem>
                                <IonLabel>0- nunca</IonLabel>
                                <IonRadio color="primary" value="0"></IonRadio>
                                </IonItem>
                               
                                <IonItem>
                                <IonLabel>1- quase nunca</IonLabel>
                                <IonRadio color="primary" value="1"></IonRadio>
                                </IonItem>

                                <IonItem>
                                <IonLabel>2- algumas vezes</IonLabel>
                                <IonRadio color="primary" value="2"></IonRadio>
                                </IonItem>
                               
                                <IonItem>
                                <IonLabel>3- frequentemente</IonLabel>
                                <IonRadio color="primary" value="3"></IonRadio>
                                </IonItem>

                                <IonItem>
                                <IonLabel>4- muito frequentemente</IonLabel>
                                <IonRadio color="primary" value="4"></IonRadio>
                                </IonItem>
 
                            </IonRadioGroup> )} control={control} name={"pss_pss11"}/>
                    </IonItem>

                    <IonLabel className="questions">...deu por si pensando nas coisas que tinha que fazer?</IonLabel>
                    <IonItem>
                    
                    <Controller render={({onChange}) => (
                             <IonRadioGroup onIonChange={(e)=> {
                                console.log(e);
                                onChange(e.detail.value);
                                if (e.detail.value != undefined) {
                                props.setState('pss_pss12', e.detail.value )} } }>

                                <IonItem>
                                <IonLabel>0- nunca</IonLabel>
                                <IonRadio color="primary" value="0"></IonRadio>
                                </IonItem>
                               
                                <IonItem>
                                <IonLabel>1- quase nunca</IonLabel>
                                <IonRadio color="primary" value="1"></IonRadio>
                                </IonItem>

                                <IonItem>
                                <IonLabel>2- algumas vezes</IonLabel>
                                <IonRadio color="primary" value="2"></IonRadio>
                                </IonItem>
                               
                                <IonItem>
                                <IonLabel>3- frequentemente</IonLabel>
                                <IonRadio color="primary" value="3"></IonRadio>
                                </IonItem>

                                <IonItem>
                                <IonLabel>4- muito frequentemente</IonLabel>
                                <IonRadio color="primary" value="4"></IonRadio>
                                </IonItem>
 
                            </IonRadioGroup> )} control={control} name={"pss_pss12"}/>
                    </IonItem>

                    <IonLabel className="questions">...foi capaz de controlar a maneira de como gastar seu tempo?</IonLabel>
                    <IonItem>
                    
                    <Controller render={({onChange}) => (
                             <IonRadioGroup onIonChange={(e)=> {
                                console.log(e);
                                onChange(e.detail.value);
                                if (e.detail.value != undefined) {
                                props.setState('pss_pss13', e.detail.value )} } }>

                                <IonItem>
                                <IonLabel>0- nunca</IonLabel>
                                <IonRadio color="primary" value="0"></IonRadio>
                                </IonItem>
                               
                                <IonItem>
                                <IonLabel>1- quase nunca</IonLabel>
                                <IonRadio color="primary" value="1"></IonRadio>
                                </IonItem>

                                <IonItem>
                                <IonLabel>2- algumas vezes</IonLabel>
                                <IonRadio color="primary" value="2"></IonRadio>
                                </IonItem>
                               
                                <IonItem>
                                <IonLabel>3- frequentemente</IonLabel>
                                <IonRadio color="primary" value="3"></IonRadio>
                                </IonItem>

                                <IonItem>
                                <IonLabel>4- muito frequentemente</IonLabel>
                                <IonRadio color="primary" value="4"></IonRadio>
                                </IonItem>
 
                            </IonRadioGroup> )} control={control} name={"pss_pss13"}/>
                    </IonItem>

                    <IonLabel className="questions">...sentiu que as dificuldades estavam se acumulando tanto que você não poderia superá-las?</IonLabel>
                    <IonItem>
                    
                    <Controller render={({onChange}) => (
                             <IonRadioGroup onIonChange={(e)=> {
                                console.log(e);
                                onChange(e.detail.value);
                                if (e.detail.value != undefined) {
                                props.setState('pss_pss14', e.detail.value )} } }>

                                <IonItem>
                                <IonLabel>0- nunca</IonLabel>
                                <IonRadio color="primary" value="0"></IonRadio>
                                </IonItem>
                               
                                <IonItem>
                                <IonLabel>1- quase nunca</IonLabel>
                                <IonRadio color="primary" value="1"></IonRadio>
                                </IonItem>

                                <IonItem>
                                <IonLabel>2- algumas vezes</IonLabel>
                                <IonRadio color="primary" value="2"></IonRadio>
                                </IonItem>
                               
                                <IonItem>
                                <IonLabel>3- frequentemente</IonLabel>
                                <IonRadio color="primary" value="3"></IonRadio>
                                </IonItem>

                                <IonItem>
                                <IonLabel>4- muito frequentemente</IonLabel>
                                <IonRadio color="primary" value="4"></IonRadio>
                                </IonItem>
 
                            </IonRadioGroup> )} control={control} name={"pss_pss14"}/>
                    </IonItem>
            
            <IonButton disabled={props.isFirst()}onClick={props.prev} size="large">Anterior</IonButton>
            <IonButton onClick={onSubmit} size="large" className={"btnProximo"}>Submeter</IonButton>
            </form>

        </div>

        </IonContent>
    )
}

export default Step14; 