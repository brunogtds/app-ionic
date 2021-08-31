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

const Perfil_Cadastro1 = (props: StepComponentProps) => {

    const options = {
        cssClass: 'my-custom-interface'
      };

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
                <div className="texto-default">Para começar e receber dicas personalizadas, preencha para sabermos mais sobre você!</div>

                        <IonLabel className="questions">Idade:</IonLabel>
                        {errors.age && <IonText color="danger"> Campo obrigatório.</IonText>}
                         <IonItem lines="none"> 
                            
                            
                            <Controller render={({onChange}) => (
                                <IonInput className={"teste"} type="number" placeholder="Digite" value= {props.getState("age", "")} onIonChange={
                                    (e)=> {
                                    console.log(e);
                                    onChange(e.detail.value);
                                    if (e.detail.value != undefined) 
                                    props.setState('age', e.detail.value ); }}
                                        
                                    />
                            )}
                            name= "age"
                            rules= {{ required: true}}
                            control= {control}     
                                
                            />
                          
                      
                                       
                         </IonItem>
                                            
                        <IonLabel className="questions" >Sexo:</IonLabel>
                         <IonItem lines="none">
                            

                            <Controller render={({onChange}) => ( 
                            <IonSelect interfaceOptions={options} className={"select-interface-option"} okText="ok" cancelText="Cancelar" placeholder="Por favor, selecione..."  value= {props.getState("sex", "")} onIonChange={(e) => {
                                console.log(e);
                                onChange(e.detail.value);
                                if (e.detail.value != undefined) 
                                props.setState('sex', e.detail.value ); 
                            }}>
                                    <IonSelectOption value="feminino">Feminino</IonSelectOption>
                                    <IonSelectOption value="masculino">Masculino</IonSelectOption>
                            </IonSelect> 
                            

                            )}
                          
                            control={control}
                            name="sex"
                            rules={{required: true}}
                            
                            
                            />    

                            {errors.sex && <IonText color="danger">Campo obrigatório.</IonText>}
                            
                         </IonItem>

                        {watchGender === "feminino" ? 
                        <IonItem lines="none">
                            <IonLabel position="floating" className="questions">Primeiro dia da última menstruação:</IonLabel>

                            <Controller render={({onChange}) => (
                                <IonDatetime monthShortNames="Jan, Fev, Mar, Abr, Mai, Jun, Jul, Aug, Set, Out, Nov, Dez" placeholder="Selecione data" id="dateMenstruation" onIonChange={(e)=> {
                                    console.log(e);
                                    onChange(e.detail.value);
                                    if (e.detail.value != undefined) 
                                    props.setState('dateMenstruation', e.detail.value ) }} ></IonDatetime>
                            )}
                            name="dateMenstruação"
                            rules= {{required: true}}
                            control={control}
                            />
                            {errors.sex && <IonText color="danger">Campo obrigatório.</IonText>}
                        </IonItem> 
                        : null}
                        
                        <IonLabel  className="questions">Peso (em kg):</IonLabel>
                        {errors.weight && <IonText color="danger"> Campo obrigatório.</IonText>}
                        <IonItem lines="none">
                            

                            <Controller render={({onChange}) => (
                            <IonInput value={props.getState("weight", "")} placeholder="Digite um valor aproximado" id="weight" type="number" onIonChange={(e)=> {
                                console.log(e);
                                onChange(e.detail.value);
                                if (e.detail.value != undefined) 
                                props.setState('weight', e.detail.value ) }} />
                            )}
                            name="weight"
                            rules= {{ required: true}}
                            control={control} />
                            
                           
                         </IonItem>
                        
                         <IonLabel className="questions">Altura (em cm): </IonLabel>
                         {errors.height && <IonText color="danger">Campo obrigatório.</IonText>}
                         
                         <IonItem lines="none">

                            <Controller render={({onChange}) => (
                            <IonInput value={props.getState("height", "")} placeholder="Digite o valor em cm, por exemplo: 170" id="height" type="number" onIonChange={(e)=> {
                                console.log(e);
                                onChange(e.detail.value);
                                if (e.detail.value != undefined) 
                                props.setState('height', e.detail.value )}} />
                            )}
                            name="height"
                            rules= {{ required: true}}
                            control={control}/>
                          
                            
                        </IonItem>

                        <IonLabel className="questions">Estado do Brasil:</IonLabel>
                        <IonItem lines="none">
                        
                            
                            
                            
                            <Controller render={({onChange}) => (
                               
                                <IonSelect className={"select-interface-option"} okText="ok" cancelText="Cancelar" value={props.getState("BRstate", "")} placeholder="Por favor, selecione..." id="BRstate" onIonChange={(e)=> {
                                    console.log(e);
                                    onChange(e.detail.value);
                                    if (e.detail.value != undefined) 
                                    props.setState('BRstate', e.detail.value ) }} >
                                        
                                <IonSelectOption>RS</IonSelectOption>
                                <IonSelectOption>SP</IonSelectOption>
                                <IonSelectOption>Moro fora do país</IonSelectOption>
                                <IonSelectOption>AC</IonSelectOption>
                                <IonSelectOption>AL</IonSelectOption>
                                <IonSelectOption>AP</IonSelectOption>
                                <IonSelectOption>AM</IonSelectOption>
                                <IonSelectOption>BA</IonSelectOption>
                                <IonSelectOption>CE</IonSelectOption>
                                <IonSelectOption>ES</IonSelectOption>
                                <IonSelectOption>GO</IonSelectOption>
                                <IonSelectOption>MA</IonSelectOption>
                                <IonSelectOption>MT</IonSelectOption>
                                <IonSelectOption>MS</IonSelectOption>
                                <IonSelectOption>MG</IonSelectOption>
                                <IonSelectOption>PA</IonSelectOption>
                                <IonSelectOption>PB</IonSelectOption>
                                <IonSelectOption>PR</IonSelectOption>
                                <IonSelectOption>PE</IonSelectOption>
                                <IonSelectOption>PI</IonSelectOption>
                                <IonSelectOption>RJ</IonSelectOption>
                                <IonSelectOption>RN</IonSelectOption>
                                <IonSelectOption>RO</IonSelectOption>
                                <IonSelectOption>RR</IonSelectOption>
                                <IonSelectOption>SC</IonSelectOption>
                                <IonSelectOption>SE</IonSelectOption>
                                <IonSelectOption>TO</IonSelectOption>
                                <IonSelectOption>DF</IonSelectOption>
                            </IonSelect>
                            
                            )}

                            name="BRstate"
                            rules= {{ required: true}}
                            control={control}
                            />

                            

                        
                         </IonItem>

                       
                        <IonLabel className="questions">Atualmente sou:</IonLabel>
                        {errors.currentOccupation && <IonText color="danger"> Campo obrigatório.</IonText>}
                                        
                        <IonItem className={"ion-no-padding "} lines="none">
  
                      
                        <Controller render={({onChange}) => (
                        <IonRadioGroup allowEmptySelection={true} value={props.getState("currentOccupation", "")} 
                         name="currentOccupation" onIonChange={(e) => { 
                                    console.log(formState.isValid);
                                    onChange(e.detail.value);
                                    if (e.detail.value != undefined) 
                                    props.setState('currentOccupation', e.detail.value )}}>

                                    <IonItem lines="none" className={"ion-no-padding"}>
                                    <IonLabel>Estudante</IonLabel>
                                    <IonRadio slot="start" className={"radio-options"} name="currentOccupation" color="orange" value="estudante" ></IonRadio>
                                    </IonItem>
                                
                                    <IonItem lines="none" className={"ion-no-padding"}>
                                    <IonLabel>Assalariado</IonLabel>
                                    <IonRadio slot="start" className={"radio-options"}  name="currentOccupation" color="orange" value="assalariado"></IonRadio>
                                    </IonItem>

                                    <IonItem lines="none" className={"ion-no-padding"}>
                                    <IonLabel>Autônomo</IonLabel>
                                    <IonRadio slot="start"  className={"radio-options"} name="currentOccupation" color="orange" value="autonomo"></IonRadio>
                                    </IonItem>

                                    <IonItem lines="none" className={"ion-no-padding"}>
                                    <IonLabel>Desempregado</IonLabel>
                                    <IonRadio slot="start" className={"radio-options"} name="currentOccupation" color="orange" value="desempregado"></IonRadio>
                                    </IonItem>

                                    <IonItem lines="none" className={"ion-no-padding"}>
                                    <IonLabel>Aposentado</IonLabel>
                                    <IonRadio slot="start" className={"radio-options"} name="currentOccupation" color="orange" value="aposentado"></IonRadio>
                                    </IonItem>

                                   <IonItem className={"radio-options"}>
                                        
                                        <IonInput name="currentOccupation" placeholder="Outros" type="text" onIonChange={(e)=> {
                                    
                                        if (e.detail.value != undefined) 
                                        props.setState('currentOccupation', e.detail.value ) }}/>
                                    </IonItem>
                                </IonRadioGroup>

                            )}
                            name="currentOccupation"
                           
                            defaultValue={undefined}               
                            rules= {{ required: true}}
                            control={control}
                                            
                            />
                           
                        </IonItem>

                        <div id="progress-bar-div" >
                            <IonProgressBar className={"progress-bar"} value={0.66} color="orange"></IonProgressBar>
                        </div>
                        
                      
                        <IonButton onClick={props.prev} className="btnAnterior" size="default" shape="round" color="orange" fill="outline">Anterior</IonButton>
                        <IonButton disabled={formState.isValid === false} color="orange" fill="outline" onClick={props.next} className={"btnProximo"} size="default" shape="round" >Próximo</IonButton>
                        
                         
                </form>
           
        </div>
        </IonContent>
    )


}

export default Perfil_Cadastro1;