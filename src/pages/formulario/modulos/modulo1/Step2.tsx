import React from "react";
import {StepComponentProps} from "react-step-builder";

import { IonItem, IonLabel, IonInput, IonSelect, IonSelectOption, IonButton, IonCheckbox, IonList, IonDatetime, IonNote, IonLoading } from "@ionic/react";
import { IonContent} from '@ionic/react';
import '../../Forms.css';

import { useForm, Controller } from "react-hook-form";

import {useState} from 'react';


import { IonProgressBar} from '@ionic/react';

import  {Redirect, useHistory } from 'react-router-dom' 

import {toast} from '../../../../toast';

//imports user context do reactfire

import {useUser} from 'reactfire';
import firebase from 'firebase';

/*STEP 1 => Página 1 do formulário
Se user autenticado entrou aqui -> createDataBaseQuest 1 cria a entrada na tabela users no Firebase  */

const Step2 = (props: StepComponentProps) => {

 const {data: user}= useUser();
 const [dataUser, setData] = useState()

                                     
  const {control, watch, handleSubmit} = useForm();

  const [showOptions, setShowOptions] = React.useState(false);

  const watchGender= watch("sex", "");
  
  const history= useHistory();
  const [loader, setLoader]= useState<boolean>(false)

  async function updateUserDataQuest1(dataUser: any){
     
    if(user){
        firebase.firestore().collection('users').doc(user.uid).set({
            age: Number(props.state.age), //STEP 1
            sex: String(props.state.sex),
            dateMenstruation: String(props.state.dateMenstruation),
            weight: Number(props.state.weight),
            height: Number(props.state.height),
            BRstate: String(props.state.BRstate),
            occupation: String(props.state.occupation),
            currentOccupation: String(props.state.currentOccupation),
            schooling: String(props.state.schooling),
            married: String(props.state.married),
            depend: Number(props.state.depend),
            isolationComp: String(props.state.isolationComp),
            area: String(props.state.area),   }, {merge: true})
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
    
   
    return (
        <IonContent fullscreen>
        <div>

        <div>
        <IonItem>
       
        
        </IonItem>
        </div>
        
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
                           />
                         </IonItem>
                       

                         
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
                               />
                        </IonItem>

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
                           control={control} />
                          
                        </IonItem>
      
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
                           />
                           
                       </IonItem>

                       <IonLabel className="questions">Moro em uma área: </IonLabel>
                       <IonItem>
                           

                           <Controller render={({onChange}) => (
                           <IonList>
                               <IonItem>
                               <IonCheckbox color="primary" value= {props.getState("area", "")} onIonChange={(e)=> {
                               console.log(e);
                               onChange(e.detail.value);
                               if (e.detail.value != undefined) 
                               props.setState('area', 'urbana' )  }}></IonCheckbox>
                               <IonLabel>Urbana</IonLabel>
                               </IonItem>

                               <IonItem>
                               <IonCheckbox color="primary" value= {props.getState("area", "")} onIonChange={(e)=> {
                               console.log(e);
                               onChange(e.detail.value);
                               if (e.detail.value != undefined) 
                               props.setState('area', 'rural' )  }}></IonCheckbox>
                               <IonLabel>Rural</IonLabel>
                               </IonItem>

                            </IonList>
                            )}
                            control={control}
                            name={"area"}
                            />
                        </IonItem>
                        <IonButton disabled={props.isFirst()}onClick={props.prev} size="large">Anterior</IonButton>
                        <IonButton onClick={onSubmit} className={"btnProximo"} size="large">Submeter</IonButton>
                       
                        
               </form>
           
        </div>
        </IonContent>
    )


}

export default Step2;