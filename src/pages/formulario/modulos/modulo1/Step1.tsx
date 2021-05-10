import React from "react";
import {StepComponentProps} from "react-step-builder";

import { IonItem, IonLabel, IonInput, IonSelect, IonSelectOption, IonButton, IonCheckbox, IonList, IonDatetime, IonNote } from "@ionic/react";
import { IonContent} from '@ionic/react';
import '../../Forms.css';

import { useForm, Controller } from "react-hook-form";

import {useState} from 'react';


import { IonProgressBar} from '@ionic/react';



//imports user context do reactfire

import {useUser} from 'reactfire';
import firebase from 'firebase';

/*STEP 1 => Página 1 do formulário
Se user autenticado entrou aqui -> createDataBaseQuest 1 cria a entrada na tabela users no Firebase  */

const Step1 = (props: StepComponentProps) => {

    const {data: user}= useUser();
    const [dataUser, setData] = useState()
     
   
     if (user){
        
        createDatabaseQuest1();
        
      }

    async function createDatabaseQuest1(){

        await firebase.firestore().collection('users').doc(user.uid).set({
            email: user.email, }, { merge: true });    
        
      
     }
  
                                  
  const {control, watch, handleSubmit} = useForm();

  const [showOptions, setShowOptions] = React.useState(false);

  const watchGender= watch("sex", "");
    

    return (
        <IonContent fullscreen>
        <div>

        <div>
        <IonItem>
       
        
        </IonItem>
        </div>
        
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
                            rules= {{required: true}}
                            control= {control}            
                            />
                            
                            
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
                         </IonItem>

                        {watchGender === "feminino" ? 
                        <IonItem color="light">
                            <IonLabel position="floating" className="questions">Primeira dia da última menstruação:</IonLabel>

                            <Controller render={({onChange}) => (
                                <IonDatetime placeholder="Selecione data" id="dateMenstruation" onIonChange={(e)=> {
                                    console.log(e);
                                    onChange(e.detail.value);
                                    if (e.detail.value != undefined) 
                                    props.setState('dateMenstruation', e.detail.value ) }} ></IonDatetime>
                            )}
                            name="dateMenstruação"
                            control={control}
                            />
                        </IonItem>
                        : null}
                        
                        <IonLabel position="floating" className="questions">Peso (em kg):</IonLabel>
                        <IonItem>
                            

                            <Controller render={({onChange}) => (
                            <IonInput id="weight" type="number" onIonChange={(e)=> {
                                console.log(e);
                                onChange(e.detail.value);
                                if (e.detail.value != undefined) 
                                props.setState('weight', e.detail.value ) }} />
                            )}
                            name="weight"
                            control={control} />
                            <IonNote >Se você não sabe seu peso exato, pode ser um valor aproximado.</IonNote>
                         </IonItem>
                        
                         <IonLabel position="floating" className="questions">Altura (em cm): </IonLabel>
                         <IonItem>

                            <Controller render={({onChange}) => (
                            <IonInput id="height" type="number" onIonChange={(e)=> {
                                console.log(e);
                                onChange(e.detail.value);
                                if (e.detail.value != undefined) 
                                props.setState('height', e.detail.value )}} />
                            )}
                            name="height"
                            control={control}/>
                            <IonNote >Responda com o valor em centímetros, por ex: 1,70m = 170cm - escrever 170.</IonNote>
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
                            control={control}
                            />

                        
                         </IonItem>

                        <IonLabel position="floating" className="questions">Profissão: </IonLabel>
                        <IonItem>
                            

                            <Controller render={({onChange}) => (
                            <IonInput id="occupation" type="text" onIonChange={(e)=> {
                                console.log(e);
                                onChange(e.detail.value);
                                if (e.detail.value != undefined) 
                                props.setState('occupation', e.detail.value ) }}/>

                            )}
                            control={control}
                            name="occupation"
                            />
                        </IonItem>

                        <IonLabel className="questions">Atualmente sou:</IonLabel>
                        
                                        
                        <IonItem>
  
                      
                            
                            <Controller render={({onChange}) => (
                            <IonList >

                            <IonItem>
                            <IonCheckbox color="primary" value= {props.getState("currentOccupation", "")} onIonChange={(e)=> {
                                console.log(e);
                                onChange(e.detail.value);
                                if (e.detail.value != undefined) 
                                props.setState('currentOccupation', 'estudante' ) }}></IonCheckbox>
                            <IonLabel className="ion-text-wrap">Estudante</IonLabel>
                            </IonItem>

                            <IonItem>
                            <IonCheckbox color="primary" value= {props.getState("currentOccupation", "")} onIonChange={(e)=> {
                                console.log(e);
                                onChange(e.detail.value);
                                if (e.detail.value != undefined) 
                                props.setState('currentOccupation', 'assalariado' ) }}></IonCheckbox>
                            <IonLabel className="ion-text-wrap">Assalariado</IonLabel>
                            </IonItem>

                            <IonItem>
                            <IonCheckbox color="primary" value= {props.getState("currentOccupation", "")} onIonChange={(e)=> {
                                console.log(e);
                                onChange(e.detail.value);
                                if (e.detail.value != undefined) 
                                props.setState('currentOccupation', 'autônomo' ) }}></IonCheckbox>
                            <IonLabel className="ion-text-wrap">Autônomo</IonLabel>
                            </IonItem>
                            
                            <IonItem>
                            <IonCheckbox color="primary" value= {props.getState("currentOccupation", "")} onIonChange={(e)=> {
                                console.log(e);
                                onChange(e.detail.value);
                                if (e.detail.value != undefined) 
                                props.setState('currentOccupation', 'desempregado') }}></IonCheckbox>
                            <IonLabel className="ion-text-wrap">Desempregado</IonLabel>
                            </IonItem>

                            <IonItem>
                            <IonCheckbox color="primary" value= {props.getState("currentOccupation", "")} onIonChange={(e)=> {
                                console.log(e);
                                onChange(e.detail.value);
                                if (e.detail.value != undefined) 
                                props.setState('currentOccupation', 'aposentado' ) }}></IonCheckbox>
                            <IonLabel className="ion-text-wrap">Aposentado</IonLabel>
                            </IonItem>

                            <IonItem>
                                
                                <IonInput placeholder="Outros" type="text" onIonChange={(e)=> {
                               
                                if (e.detail.value != undefined) 
                                props.setState('currentOccupation', e.detail.value ) }}/>
                            </IonItem>
                            </IonList>

                            )}
                            control={control}
                            name="currentOccupation"
                            id="currentOccupation"
                            />
                        </IonItem>
                        <IonButton disabled={props.isFirst()}onClick={props.prev} size="large">Anterior</IonButton>
                         <IonButton onClick={props.next} className={"btnProximo"} size="large">Próximo</IonButton>
                        
                         
                </form>
           
        </div>
        </IonContent>
    )


}

export default Step1;