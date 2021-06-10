import React from "react";
import {StepComponentProps} from "react-step-builder";

import { IonItem, IonLabel, IonInput, IonSelect, IonSelectOption, IonButton, IonCheckbox, IonList, IonDatetime, IonNote, IonLoading, IonRadioGroup, IonRadio } from "@ionic/react";
import { IonContent, IonText} from '@ionic/react';
import './formulario/Forms.css';

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
import {cadastroUser} from '../firebaseConfig/firebaseConfig';

const Perfil_2Novo  = (props: StepComponentProps) => {


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
     
    const res= await cadastroUser(props.state.email, props.state.senha)
    
    if (res){
      toast('Cadastro feito com sucesso')
      history.replace('/tab1');
      
      createDatabaseQuest1(res.user?.uid, res.user?.email)
          //history.replace('/tab1');
    } 

    
    console.log('cadastro feito');

  }
  

 async function createDatabaseQuest1(uid: any, email: any){
 
    
     await firebase.firestore().collection('users').doc(uid).set({
        email: email, }, { merge: true });   
       
   
     console.log('firestore criado');
     setData(dataUser);
     setLoader(true);

     updateUserDataQuest1(uid, dataUser);
 }
  

  function updateUserDataQuest1(uid: any, dataUser: any){
     
  
        firebase.firestore().collection('users').doc(uid).set({
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
        <IonContent fullscreen color="light">
        <div>


        <form className="ion-padding" onSubmit={handleSubmit(onSubmit)}>

                <IonLoading message="Por favor aguarde..." duration={2000} isOpen={loader}/>

                <IonLabel className="questions"> Escolaridade:</IonLabel>
                       

                       
                       <IonItem>
                      
                           <Controller render={({onChange}) => (

                           <IonSelect placeholder="Por favor, selecione..." value= {props.getState("schooling", "")} id="schooling" onIonChange={(e)=> {
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

                         {errors.schooling && <IonText color="danger">Campo obrigatório.</IonText>}
                       

                         
                         <IonLabel className="questions">Estado Civil:</IonLabel>
                         


                         <IonItem>
                             

                               <Controller render={({onChange}) => (
                               <IonSelect placeholder="Por favor, selecione..." value= {props.getState("married", "")} id="married" onIonChange={(e)=> {
                                   console.log(e);
                                   onChange(e.detail.value);
                                   if (e.detail.value != undefined) 
                                   props.setState('married', e.detail.value ) }}>
                               <IonSelectOption>Solteiro(a)</IonSelectOption>
                               <IonSelectOption>Casado(a)</IonSelectOption>
                               <IonSelectOption>Separado(a)/Divorciado(a)</IonSelectOption>
                               <IonSelectOption>Viúvo(a)</IonSelectOption>
            
                               </IonSelect>
                               )}
                               control={control}
                               name="married"
                               rules={{required: true}}
                               />
                        </IonItem>

                        {errors.married && <IonText color="danger">Campo obrigatório.</IonText>}

                        <IonLabel position="floating" className="ion-text-wrap questions">Número de pessoas dependentes:</IonLabel>            
                       <IonItem>
                           

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

                        {errors.depend && <IonText color="danger">Campo obrigatório.</IonText>}
      
                        
                       <IonLabel className="questions">Moro em uma área: </IonLabel>
                       <IonItem>
                           

                           <Controller render={({onChange}) => (
                           <IonList>
                               <IonRadioGroup onIonChange={(e) => { 
                                    onChange(e.detail.value);
                                    if (e.detail.value != undefined) 
                                    props.setState('area', e.detail.value )}}>

                                    <IonItem>
                                    <IonLabel>Rural</IonLabel>
                                    <IonRadio  className={"radio-options"} color="primary" value="rural"></IonRadio>
                                    </IonItem>
                                
                                    <IonItem>
                                    <IonLabel>Urbana</IonLabel>
                                    <IonRadio  className={"radio-options"} color="primary" value="urbana"></IonRadio>
                                    </IonItem>

                                    
                                </IonRadioGroup>

                            </IonList>
                            )}
                            control={control}
                            name={"area"}
                            rules={{required: true}}
                            />
                        </IonItem>
                        {errors.area && <IonText color="danger">Campo obrigatório.</IonText>}
                        <IonButton disabled={props.isFirst()}onClick={props.prev} size="large" fill="clear">Anterior</IonButton>
                        <IonButton disabled={formState.isValid === false} onClick={onSubmit} className={"btnProximo"} size="large" fill="clear">Submeter</IonButton>
                       
                        
               </form>
           
        </div>
        </IonContent>
    )


}

export default Perfil_2Novo;