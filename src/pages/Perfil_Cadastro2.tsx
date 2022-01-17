import React from "react";
import {StepComponentProps} from "react-step-builder";

import { IonItem, IonLabel, IonInput, IonSelect, IonSelectOption, IonButton, IonCheckbox, IonList, IonDatetime, IonNote, IonLoading, IonRadioGroup, IonRadio } from "@ionic/react";
import { IonContent, IonText} from '@ionic/react';
import './Cadastro.css';

import { useForm, Controller } from "react-hook-form";

import {useState} from 'react';


import { IonProgressBar} from '@ionic/react';

import  {Redirect, useHistory } from 'react-router-dom' 

import {toast} from '../toast';

//imports user context do reactfire

import {useUser} from 'reactfire';
import firebase from 'firebase';

/*STEP 1 => Página 1 do formulário
Se user autenticado entrou aqui -> createDataBaseQuest 1 cria a entrada na tabela users no Firebase  */

//import ModuloComponents from "../ModulosComponent"
import {cadastroUser, loginAnonimo} from '../firebaseConfig/firebaseConfig';

const Perfil_Cadastro2  = (props: StepComponentProps) => {

    const options = {
        cssClass: 'my-custom-interface'
      };


 const [dataUser, setData] = useState()
                                  
  const {control, watch, handleSubmit, errors, formState} = useForm({
    mode: "onChange" }
  );

  const [showOptions, setShowOptions] = React.useState(false);
  
  const history= useHistory();
  const [loader, setLoader]= useState<boolean>(false)

  const {data: user}= useUser();

  async function Cadastro(){

     
    if (props.state.email === '' || props.state.senha === '' || props.state.csenha === '' ) {
      return toast ('Email e senha são requeridos')
      
    }

    else if (props.state.senha != props.state.csenha){
      return toast ('As senhas não são iguais')
    } 

    
    if (props.state.loginAnonimo === true) {
        const res= await loginAnonimo 
        
        toast('Cadastro feito com sucesso')
        history.replace('/tab1'); 
     //   const auth= firebase.auth();
      //  
      //  const uid = user.uid;
     //   createDatabaseQuest1(uid)
        } 
   
     
    const res = await cadastroUser(props.state.email, props.state.senha)
    
    if (res){
      toast('Cadastro feito com sucesso')
      res.user?.sendEmailVerification();
      history.replace('/tab1');
      
      createDatabaseQuest1(res.user?.uid)
          //history.replace('/tab1');
    } 

    
    console.log('cadastro feito');

  }
  

 async function createDatabaseQuest1(uid: any){

    await firebase.firestore().collection('users').doc(uid).set({
        uid: uid, }, { merge: true });   
        
    await firebase.firestore().collection('usersPost').doc(uid).set({
        uid: uid, }, { merge: true });   

    await firebase.firestore().collection('usersFinal').doc(uid).set({
        uid: uid, }, { merge: true }); 

    await firebase.firestore().collection('metas').doc(uid).set({
        uid: uid, metaDaily: Number(0), meta02Daily: Number(0), meta03Daily: Number(0)}, { merge: true }); 
       
   
     console.log('firestore criado');
     setData(dataUser);
     setLoader(true);

     updateUserDataQuest1(uid, dataUser);
 }
  

  function updateUserDataQuest1(uid: any, dataUser: any){
     
  
        firebase.firestore().collection('users').doc(uid).set({
            goodSleep: String(props.state.goodSleep),
            age: Number(props.state.age), //STEP 1
            sex: String(props.state.sex),
            dateMenstruation: String(props.state.dateMenstruation),
            weight: Number(props.state.weight),
            height: Number(props.state.height),
            BRstate: String(props.state.BRstate),
          
            currentOccupation: String(props.state.currentOccupation),
            schooling: String(props.state.schooling),
            married: String(props.state.married),
            depend: Number(props.state.depend),
            
            area: String(props.state.area),
           }, {merge: true})
      
    
        toast('Formulário submetido com sucesso!', 2000);
        console.log('firestore updatado');
    
    }

      
const onSubmit = (data: any) => {
       Cadastro();
      // createDatabaseQuest1();
       
        
      // voltaModulos();
       
       //(document.getElementById('button-forms') as HTMLInputElement).disabled = true;
       
    } 
  
    return (
        <IonContent fullscreen color="background">
        <div>


        <form className="ion-padding texto-default" onSubmit={handleSubmit(onSubmit)}>

                <IonLoading message="Por favor aguarde..." duration={2000} isOpen={loader}/>

                <IonLabel className="questions"> Escolaridade:</IonLabel>
                       

                       
                       <IonItem lines="none">
                      
                           <Controller render={({onChange}) => (

                           <IonSelect interfaceOptions={options} className={"select-interface-option"} okText="ok" cancelText="Cancelar" placeholder="Por favor, selecione..." value= {props.getState("schooling", "")} id="schooling" onIonChange={(e)=> {
                               console.log(e);
                               onChange(e.detail.value);
                             
                               if (e.detail.value != undefined) 
                               props.setState('schooling', e.detail.value )  }}>
                           <IonSelectOption>Ensino Fundamental Incompleto</IonSelectOption>
                           <IonSelectOption>Ensino Fundamental Completo</IonSelectOption>
                           <IonSelectOption>Ensino Médio Incompleto</IonSelectOption>
                           <IonSelectOption>Ensino Médio Completo</IonSelectOption>
                           <IonSelectOption>Ensino Superior Incompleto</IonSelectOption>
                           <IonSelectOption>Ensino Superior Completo</IonSelectOption>
                           <IonSelectOption>Mestrado</IonSelectOption>
                           <IonSelectOption>Doutorado</IonSelectOption>
                           </IonSelect>

                           )}
                           control={control}
                           name="schooling"
                           rules={{required: true}}

                           />
                        
                         </IonItem>

                         <IonLabel className="questions">Estado Civil:</IonLabel>
                         


                         <IonItem lines="none">
                             

                               <Controller render={({onChange}) => (
                               <IonSelect className={"select-interface-option"} okText="ok" cancelText="Cancelar" placeholder="Por favor, selecione..." value= {props.getState("married", "")} id="married" onIonChange={(e)=> {
                                   console.log(e);
                                   onChange(e.detail.value);
                                   if (e.detail.value != undefined) 
                                   props.setState('married', e.detail.value ) }}>
                               <IonSelectOption>Solteiro(a)</IonSelectOption>
                               <IonSelectOption>Casado(a)</IonSelectOption>
                               <IonSelectOption>Divorciado(a)</IonSelectOption>
                               <IonSelectOption>Viúvo(a)</IonSelectOption>
            
                               </IonSelect>
                               )}
                               control={control}
                               name="married"
                               rules={{required: true}}
                               />
                        </IonItem>


                        <IonLabel className="ion-text-wrap questions">Número de pessoas dependentes:</IonLabel>     
                        {errors.depend && <IonText color="danger">Campo obrigatório.</IonText>}       
                       <IonItem lines="none">
                           

                           <Controller render={({onChange}) => (
                           <IonInput placeholder={"Digite o número"} type="number" id="depend" onIonChange={(e)=> {
                               console.log(e);
                               onChange(e.detail.value);
                               if (e.detail.value != undefined) 
                               props.setState('depend', e.detail.value ) }} />
                           )}
                           name="depend"
                           control={control}
                           rules={{required: true}} />
                          
                        </IonItem>

                      
      
                        
                       <IonLabel className="questions">Moro em uma área: </IonLabel>
                       {errors.area && <IonText color="danger">Campo obrigatório.</IonText>}
                       <IonItem className={"ion-no-padding"} lines="none">
                           

                           <Controller render={({onChange}) => (
                           <IonList>
                               <IonRadioGroup onIonChange={(e) => { 
                                    onChange(e.detail.value);
                                    if (e.detail.value != undefined) 
                                    props.setState('area', e.detail.value )}}>

                                    <IonItem lines="none"  className={"ion-no-padding"}>
                                    <IonLabel>Rural</IonLabel>
                                    <IonRadio slot="start"  className={"radio-options"} color="orange" value="rural"></IonRadio>
                                    </IonItem>
                                
                                    <IonItem lines="none"  className={"ion-no-padding"}>
                                    <IonLabel>Urbana</IonLabel>
                                    <IonRadio slot="start" className={"radio-options"} color="orange" value="urbana"></IonRadio>
                                    </IonItem>

                                    
                                </IonRadioGroup>

                            </IonList>
                            )}
                            control={control}
                            name={"area"}
                            rules={{required: true}}
                            />
                        </IonItem>
                     

                        <div id="progress-bar-div" >
                            <IonProgressBar className={"progress-bar"} value={1.0} color="orange"></IonProgressBar>
                        </div>

                        <IonButton disabled={props.isFirst()}onClick={props.prev} color="orange" className="btnAnterior" size="default" shape="round" fill="outline">Anterior</IonButton>
                        <IonButton disabled={formState.isValid === false} color="orange" onClick={onSubmit} className={"btnProximo"} size="default" shape="round" fill="outline">Submeter</IonButton>
                       
                        
               </form>
           
        </div>
        </IonContent>
    )


}

export default Perfil_Cadastro2;