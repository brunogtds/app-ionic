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

const Contato2 = (props: StepComponentProps) => {

    const {data: user}= useUser();
   const [dataUser, setData] = useState()

   const history= useHistory();
   const [loader, setLoader]= useState<boolean>(false)

  async function updateUserDataQuest1(dataUser: any){
    
 
    if(user){
        firebase.firestore().collection('users').doc(user.uid).set({
            socialDist: String(props.state.socialDist), //STEP 3
          
            quarantineRoom: String(props.state.quarantineRoom),
            quarantineRoomDur: String(props.state.quarantineRoomDur),
            quarantineOutDur: String(props.state.quarantineOutDur),
            isolationComp: String(props.state.isolationComp),
            internet: String(props.state.internet),
            contactN: String(props.state.contactN), //FIM
            
            
            dateContatoModule1 : new Date()
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
            <IonContent fullscreen color="light">
            
                
            <div className="ion-text-wrap">
               
                <form className="ion-padding" onSubmit={handleSubmit(onSubmit)}>
                <IonLoading message="Por favor aguarde..." duration={2000} isOpen={loader}/>

                <div className="ion-text-wrap">
                 

                         
                <IonLabel className="ion-text-wrap questions">Quantas pessoas estão morando na sua residência, além de você?</IonLabel>
                       <IonItem>
                           

                           <Controller render={({onChange}) => (
                           <IonSelect placeholder="Por favor, selecione..." value= {props.getState("isolationComp", "")} onIonChange={(e)=> {
                               console.log(e);
                               onChange(e.detail.value);
                               if (e.detail.value != undefined) 
                               props.setState('isolationComp', e.detail.value ) }}>
                           <IonSelectOption>0</IonSelectOption>
                           <IonSelectOption>1</IonSelectOption>
                           <IonSelectOption>2</IonSelectOption>
                           <IonSelectOption>3</IonSelectOption>
                           <IonSelectOption>4</IonSelectOption>
                           <IonSelectOption>5</IonSelectOption>
                           <IonSelectOption>6</IonSelectOption>
                           <IonSelectOption>7</IonSelectOption>
                           <IonSelectOption>8</IonSelectOption>
                           <IonSelectOption>Mais que 8</IonSelectOption>
                           </IonSelect>
                           )}
                           control={control}
                           name={"isolationComp"}
                           rules={{required:true}}
                           />
                            {errors.isolationComp && <IonText color="danger">Campo obrigatório.</IonText>}
                           
                       </IonItem>


                         <IonLabel className="questions">Sua conexão de internet é: </IonLabel>
                         <IonItem>
                            
                            <Controller render={({onChange}) => (
                            <IonSelect placeholder="Por favor, selecione..." onIonChange={(e) => {
                                console.log(e);
                                onChange(e.detail.value);
                                if (e.detail.value != undefined) 
                                props.setState('internet', e.detail.value ) 
                            }}>
                            <IonSelectOption value="muito boa">Muito boa</IonSelectOption>
                            <IonSelectOption value="boa">Boa</IonSelectOption>
                            <IonSelectOption value="regular">Regular</IonSelectOption>
                            <IonSelectOption value="ruim">Ruim</IonSelectOption> 
                            
                            </IonSelect> )} control={control} name={"internet"} rules={{required:true}}/>
                            {errors.internet && <IonText color="danger">Campo obrigatório.</IonText>}
                         </IonItem>

                         <IonLabel className="questions">Com quantas pessoas por dia, aproximadamente, você teve contato (online, incluindo mensagens, ou ao vivo) nas últimas duas semanas? </IonLabel>
                         <IonItem>
                            
                           
                            <Controller render={({onChange}) => (
                            <IonSelect placeholder="Por favor, selecione..." onIonChange={(e) => {
                                console.log(e);
                                onChange(e.detail.value);
                                if (e.detail.value != undefined) 
                                props.setState('contactN', e.detail.value )
                            }}>
                            <IonSelectOption value="nenhuma">Nenhuma</IonSelectOption>
                            <IonSelectOption value="1-5">1-5</IonSelectOption>
                            <IonSelectOption value="5-10">5-10</IonSelectOption>
                            <IonSelectOption value="10-15">10-15</IonSelectOption>
                            <IonSelectOption value="15-20">15-20</IonSelectOption>
                            <IonSelectOption value="Mais de 20">Mais de 20</IonSelectOption>
                            </IonSelect> )} control={control} name={"contactN"} rules={{required:true}} />
                            {errors.contactN && <IonText color="danger">Campo obrigatório.</IonText>}
                         </IonItem>

                        
                          
                           
                          

                <IonButton onClick={props.prev} size="large" fill="clear">Anterior</IonButton>
                <IonButton disabled={formState.isValid === false} onClick={onSubmit} size="large" className={"btnProximo"} fill="clear" >Submeter</IonButton>
                   
                   </div>
                </form>
                
            </div>
            </IonContent>
        )

}

export default Contato2;