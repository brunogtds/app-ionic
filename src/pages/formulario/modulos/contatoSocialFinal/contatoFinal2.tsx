import React from "react";
import {StepComponentProps} from "react-step-builder";

import {IonItem, IonLabel, IonInput, IonRadioGroup, IonRadio, IonSelect, IonSelectOption, IonButton, IonCheckbox, IonList, IonDatetime, IonLoading} from "@ionic/react";
import { IonContent, IonText} from '@ionic/react';
 
import '../../Forms.css';

import { useForm, Controller } from "react-hook-form";
import {useState} from 'react';

import { IonProgressBar} from '@ionic/react';

import  {Redirect, useHistory } from 'react-router-dom'
import {toast} from '../../../../toast';

//imports user context do reactfire

import {useUser} from 'reactfire';
import firebase from 'firebase';

const ContatoFinal2 = (props: StepComponentProps) => {

    const options = {
        cssClass: 'my-custom-interface'
      };


    const {data: user}= useUser();
   const [dataUser, setData] = useState()

   const history= useHistory();
   const [loader, setLoader]= useState<boolean>(false)

  async function updateUserDataQuest1(dataUser: any){
    
 
    if(user){
        firebase.firestore().collection('usersFinal').doc(user.uid).set({
            socialDistFinal: String(props.state.socialDistFinal), //STEP 3
            quarantineRoomFinal: String(props.state.quarantineRoomFinal),
            contactNFinal: String(props.state.contactNFinal), //FIM
            
            
            dateContatoFinal : new Date()
             }, {merge: true})
        }
    
        toast('Formulário submetido com sucesso!', 4000);
        
    
    }

    function voltaModulos (){
        history.push('/tab1');
    }
        
    const onSubmit = (data: any) => {
       setData(dataUser);
       setLoader(true);
       updateUserDataQuest1(dataUser);
       voltaModulos();
    }

    const {control, watch, handleSubmit, errors, formState} = useForm({mode: "onChange"});
    
    

        return (
            <IonContent fullscreen color="background">
            
                
            <div className="ion-text-wrap ">
               
                <form className="ion-padding texto-default" onSubmit={handleSubmit(onSubmit)}>
                <IonLoading message="Por favor aguarde..." duration={2000} isOpen={loader}/>

                <div className="ion-text-wrap">
                 
                         <IonLabel className="questions">Com quantas pessoas por dia, aproximadamente, você teve contato (online, incluindo mensagens, ou ao vivo) nas últimas duas semanas? </IonLabel>
                         <IonItem lines="none">
                            
                           
                            <Controller render={({onChange}) => (
                            <IonSelect className={"select-interface-option"} okText="ok" cancelText="Cancelar" placeholder="Por favor, selecione..." onIonChange={(e) => {
                                console.log(e);
                                onChange(e.detail.value);
                                if (e.detail.value != undefined) 
                                props.setState('contactNFinal', e.detail.value )
                            }}>
                            <IonSelectOption value="nenhuma">Nenhuma</IonSelectOption>
                            <IonSelectOption value="1-5">1-5</IonSelectOption>
                            <IonSelectOption value="5-10">5-10</IonSelectOption>
                            <IonSelectOption value="10-15">10-15</IonSelectOption>
                            <IonSelectOption value="15-20">15-20</IonSelectOption>
                            <IonSelectOption value="Mais de 20">Mais de 20</IonSelectOption>
                            </IonSelect> )} control={control} name={"contactNFinal"} rules={{required:true}} />
                            {errors.contactNFinal && <IonText color="danger">Campo obrigatório.</IonText>}
                         </IonItem>

                         
                         <div id="progress-bar-div" >
                            <IonProgressBar className={"progress-bar"} value={1.0} color="orange"></IonProgressBar>
                        </div>

                <IonButton onClick={props.prev} className="btnAnterior" size="default" shape="round" fill="outline">Anterior</IonButton>
                <IonButton disabled={formState.isValid === false} onClick={onSubmit} size="default" shape="round" className={"btnProximo"} fill="outline" >Submeter</IonButton>
                   
                   </div>
                </form>
                
            </div>
            </IonContent>
        )

}

export default ContatoFinal2;