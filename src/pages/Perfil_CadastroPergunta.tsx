import React from "react";
import {StepComponentProps} from "react-step-builder";

import { IonItem, IonLabel, IonInput, IonSelect, IonSelectOption, IonButton, IonDatetime, IonNote, IonRadioGroup, IonRadio, IonText } from "@ionic/react";
import { IonContent} from '@ionic/react';
import './Cadastro.css';

import { useForm, Controller } from "react-hook-form";

import {useState} from 'react';


import { IonProgressBar} from '@ionic/react';



//imports user context do reactfire

import {useUser} from 'reactfire';
import firebase from 'firebase';
import { truncate } from "fs";
import { createTrue } from "typescript";
import { faAngry } from "@fortawesome/free-solid-svg-icons";
import { trendingUpOutline } from "ionicons/icons";

/*STEP 1 => Página 1 do formulário
Se user autenticado entrou aqui -> createDataBaseQuest 1 cria a entrada na tabela users no Firebase  */

const Perfil_CadastroPergunta = (props: StepComponentProps) => {

 
    const {data: user}= useUser();
    const [dataUser, setData] = useState()
     
                                  
  const {control, watch, handleSubmit, errors, formState} = useForm({
      mode: "onChange"
  });

  const [showOptions, setShowOptions] = React.useState(false);

  const watchGender= watch("sex", "");
  
  const [ocupation, setOcupation]= React.useState(false);
    

    return (
        <IonContent fullscreen color="background">
        <div>

           
               
        
                <form className="ion-padding texto-default">

                <div className="texto-title">Sobre você</div>
                

                        <IonLabel className="questions">O que faz você dormir bem?</IonLabel>
                        {errors.age && <IonText color="danger"> Campo obrigatório.</IonText>}
                         <IonItem > 
                            
                            
                            <Controller render={({onChange}) => (
                                <IonInput className={"teste"} type="text" placeholder="Por exemplo: ler, meditar..." value= {props.getState("goodSleep", "")} onIonChange={
                                    (e)=> {
                                    console.log(e);
                                    onChange(e.detail.value);
                                    if (e.detail.value != undefined) 
                                    props.setState('goodSleep', e.detail.value ); }}
                                        
                                    />
                            )}
                            name= "goodSleep"
                            rules= {{ required: true}}
                            control= {control}     
                                
                            />
                          
                      
                                       
                         </IonItem>
                                            
                       

                        <div id="progress-bar-div" >
                            <IonProgressBar className={"progress-bar"} value={0.33} color="orange"></IonProgressBar>
                        </div>
                        
                      
                        <IonButton onClick={props.prev} className="btnAnterior" size="default" shape="round" color="orange" fill="outline">Anterior</IonButton>
                        <IonButton disabled={formState.isValid === false} color="orange" fill="outline" onClick={props.next} className={"btnProximo"} size="default" shape="round" >Próximo</IonButton>
                        
                         
                </form>
           
        </div>
        </IonContent>
    )


}

export default Perfil_CadastroPergunta;