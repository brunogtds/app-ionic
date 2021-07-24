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

const ContatoPost2 = (props: StepComponentProps) => {

    const {data: user}= useUser();
   const [dataUser, setData] = useState()

   const history= useHistory();
   const [loader, setLoader]= useState<boolean>(false)

  async function updateUserDataQuest1(dataUser: any){
    
 
    if(user){
        firebase.firestore().collection('users').doc(user.uid).set({
            socialDistPost14: String(props.state.socialDistPost14), //STEP 3
            quarantineRoomPost14: String(props.state.quarantineRoomPost14),
            contactNPost14: String(props.state.contactNPost14), //FIM
            
            
            dateContatoModule1 : new Date()
             }, {merge: true})
        }
    
        toast('Formulário submetido com sucesso!', 4000);
        
    
    }

    function voltaModulos (){
        history.push('/tab2');
    }
        
    const onSubmit = (data: any) => {
       setData(dataUser);
       setLoader(true);
       updateUserDataQuest1(dataUser);
       voltaModulos();
       (document.getElementById('button-forms-social') as HTMLInputElement).disabled = true;
       
    }

    const {control, watch, handleSubmit, errors, formState} = useForm({mode: "onChange"});
    
    

        return (
            <IonContent fullscreen color="light">
            
                
            <div className="ion-text-wrap">
               
                <form className="ion-padding" onSubmit={handleSubmit(onSubmit)}>
                <IonLoading message="Por favor aguarde..." duration={2000} isOpen={loader}/>

                <div className="ion-text-wrap">
                 
                         <IonLabel className="questions">Com quantas pessoas por dia, aproximadamente, você teve contato (online, incluindo mensagens, ou ao vivo) nas últimas duas semanas? </IonLabel>
                         <IonItem>
                            
                           
                            <Controller render={({onChange}) => (
                            <IonSelect placeholder="Por favor, selecione..." onIonChange={(e) => {
                                console.log(e);
                                onChange(e.detail.value);
                                if (e.detail.value != undefined) 
                                props.setState('contactNPost14', e.detail.value )
                            }}>
                            <IonSelectOption value="nenhuma">Nenhuma</IonSelectOption>
                            <IonSelectOption value="1-5">1-5</IonSelectOption>
                            <IonSelectOption value="5-10">5-10</IonSelectOption>
                            <IonSelectOption value="10-15">10-15</IonSelectOption>
                            <IonSelectOption value="15-20">15-20</IonSelectOption>
                            <IonSelectOption value="Mais de 20">Mais de 20</IonSelectOption>
                            </IonSelect> )} control={control} name={"contactNPost14"} rules={{required:true}} />
                            {errors.contactNPost14 && <IonText color="danger">Campo obrigatório.</IonText>}
                         </IonItem>

                <IonButton onClick={props.prev} size="large" fill="clear">Anterior</IonButton>
                <IonButton disabled={formState.isValid === false} onClick={onSubmit} size="large" className={"btnProximo"} fill="clear" >Submeter</IonButton>
                   
                   </div>
                </form>
                
            </div>
            </IonContent>
        )

}

export default ContatoPost2;