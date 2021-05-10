import React from "react";
import {StepComponentProps} from "react-step-builder";

import { IonItem, IonLabel, IonInput, IonSelect, IonSelectOption, IonButton, IonDatetime, IonNote, IonRadioGroup, IonRadio, IonText } from "@ionic/react";
import { IonContent} from '@ionic/react';
import '../../Forms.css';

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

const Perfil1 = (props: StepComponentProps) => {

    const {data: user}= useUser();
    const [dataUser, setData] = useState()
     
   
     if (user){
        
        createDatabaseQuest1();
        
      }

    async function createDatabaseQuest1(){

        await firebase.firestore().collection('users').doc(user.uid).set({
            email: user.email, }, { merge: true });    
        
      
     }
  
                                  
  const {control, watch, handleSubmit, errors, formState} = useForm({
      mode: "onChange"
  });

  const [showOptions, setShowOptions] = React.useState(false);

  const watchGender= watch("sex", "");
  
  const [ocupation, setOcupation]= React.useState(false);
    

    return (
        <IonContent fullscreen color="light">
        <div>

       
        
                <form className="ion-padding">

                   

                        <IonLabel className="questions">Idade:</IonLabel>
                         <IonItem>
                            
                            
                            <Controller render={({onChange}) => (
                                <IonInput type="number" placeholder="Digite sua idade" value= {props.getState("age", "")} onIonChange={
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
                          
                         {errors.age && <IonText color="danger">Campo obrigatório.</IonText>}
                                       
                         </IonItem>
                                            
                        <IonLabel className="questions" >Sexo:</IonLabel>
                         <IonItem>
                            

                            <Controller render={({onChange}) => ( 
                            <IonSelect placeholder="Por favor, selecione..." value= {props.getState("sex", "")} onIonChange={(e) => {
                                console.log(e);
                                onChange(e.detail.value);
                                if (e.detail.value != undefined) 
                                props.setState('sex', e.detail.value ); 
                            }}>
                                    <IonSelectOption value="feminino" >Feminino</IonSelectOption>
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
                        <IonItem color="light">
                            <IonLabel position="floating" className="questions">Primeiro dia da última menstruação:</IonLabel>

                            <Controller render={({onChange}) => (
                                <IonDatetime placeholder="Selecione data" id="dateMenstruation" onIonChange={(e)=> {
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
                        
                        <IonLabel position="floating" className="questions">Peso (em kg):</IonLabel>
                        <IonNote >Se você não sabe seu peso exato, pode ser um valor aproximado.</IonNote>
                        <IonItem>
                            

                            <Controller render={({onChange}) => (
                            <IonInput id="weight" type="number" onIonChange={(e)=> {
                                console.log(e);
                                onChange(e.detail.value);
                                if (e.detail.value != undefined) 
                                props.setState('weight', e.detail.value ) }} />
                            )}
                            name="weight"
                            rules= {{ required: true}}
                            control={control} />
                            
                            {errors.weight && <IonText color="danger">Campo obrigatório.</IonText>}
                         </IonItem>
                        
                         <IonLabel position="floating" className="questions">Altura (em cm): </IonLabel>
                         <IonNote >Responda com o valor em centímetros, por ex: 1,70m = 170cm - escrever 170.</IonNote>
                         <IonItem>

                            <Controller render={({onChange}) => (
                            <IonInput id="height" type="number" onIonChange={(e)=> {
                                console.log(e);
                                onChange(e.detail.value);
                                if (e.detail.value != undefined) 
                                props.setState('height', e.detail.value )}} />
                            )}
                            name="height"
                            rules= {{ required: true}}
                            control={control}/>
                          
                            {errors.height && <IonText color="danger">Campo obrigatório.</IonText>}
                        </IonItem>

                        <IonLabel className="questions">Estado do Brasil:</IonLabel>
                        <IonItem>
                        
                            
                            
                            
                            <Controller render={({onChange}) => (
                               
                                <IonSelect placeholder="Por favor, selecione..." id="BRstate" onIonChange={(e)=> {
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

                            {errors.BRstate && <IonText color="danger">Campo obrigatório.</IonText>}

                        
                         </IonItem>

                       
                        <IonLabel className="questions">Atualmente sou:</IonLabel>
                        
                                        
                        <IonItem>
  
                      
                        <Controller render={({onChange}) => (
                        <IonRadioGroup allowEmptySelection={true}
                         name="currentOccupation" onIonChange={(e) => { 
                                    console.log(formState.isValid);
                                    onChange(e.detail.value);
                                    if (e.detail.value != undefined) 
                                    props.setState('currentOccupation', e.detail.value )}}>

                                    <IonItem>
                                    <IonLabel>Estudante</IonLabel>
                                    <IonRadio name="currentOccupation" color="primary" value="estudante" ></IonRadio>
                                    </IonItem>
                                
                                    <IonItem>
                                    <IonLabel>Assalariado</IonLabel>
                                    <IonRadio name="currentOccupation" color="primary" value="assalariado"></IonRadio>
                                    </IonItem>

                                    <IonItem>
                                    <IonLabel>Autônomo</IonLabel>
                                    <IonRadio name="currentOccupation" color="primary" value="autonomo"></IonRadio>
                                    </IonItem>

                                    <IonItem>
                                    <IonLabel>Desempregado</IonLabel>
                                    <IonRadio name="currentOccupation" color="primary" value="desempregado"></IonRadio>
                                    </IonItem>

                                    <IonItem>
                                    <IonLabel>Aposentado</IonLabel>
                                    <IonRadio name="currentOccupation" color="primary" value="aposentado"></IonRadio>
                                    </IonItem>

                                   <IonItem>
                                        
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
                            {errors.currentOccupation && <IonText color="danger">Campo obrigatório.</IonText>}
                        </IonItem>

                      
                        
                      
                        <IonButton disabled={true} onClick={props.prev} size="large" fill="clear">Anterior</IonButton>
                        <IonButton disabled={formState.isValid === false} onClick={props.next} className={"btnProximo"} size="large" fill="clear" >Próximo</IonButton>
                        
                         
                </form>
           
        </div>
        </IonContent>
    )


}

export default Perfil1;