import React from "react";
import {StepComponentProps} from "react-step-builder";

import { IonItem, IonLabel, IonInput, IonSelect, IonSelectOption, IonButton, IonCheckbox, IonList, IonDatetime, IonNote } from "@ionic/react";
import { IonContent} from '@ionic/react';
import './Forms.css';

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

    function createDatabaseQuest1(){
    

        if(user){
            firebase.firestore().collection('users').doc(user.uid).set({
                email: user.email, }, { merge: true }); 
        }
     }
   
   
  
    if (user){
      createDatabaseQuest1();
    }
                                  
  const {control, watch, handleSubmit} = useForm();

  const [showOptions, setShowOptions] = React.useState(false);

  const watchGender= watch("sex", "");
    

    return (
        <IonContent fullscreen>
        <div>
        
                <form className="ion-padding">

                        <IonProgressBar value={0.1} buffer={0.1}></IonProgressBar>

                         <IonItem>
                            <IonLabel position="floating">Idade:</IonLabel>
                            
                            <Controller render={({onChange}) => (
                                <IonInput type="number" value= {props.getState("age", "")} onIonChange={
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

                         <IonItem>
                            <IonLabel >Sexo:</IonLabel>

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
                        <IonItem>
                            <IonLabel position="floating">Primeira dia da última menstruação:</IonLabel>

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
                        
                        <IonItem>
                            <IonLabel position="floating">Peso (em kg):</IonLabel>

                            <Controller render={({onChange}) => (
                            <IonInput id="weight" onIonChange={(e)=> {
                                console.log(e);
                                onChange(e.detail.value);
                                if (e.detail.value != undefined) 
                                props.setState('weight', e.detail.value ) }} />
                            )}
                            name="weight"
                            control={control} />
                            <IonNote >Se você não sabe seu peso exato, pode ser um valor aproximado.</IonNote>
                         </IonItem>

                         <IonItem>
                            <IonLabel position="floating">Altura (em cm): </IonLabel>

                            <Controller render={({onChange}) => (
                            <IonInput id="height" onIonChange={(e)=> {
                                console.log(e);
                                onChange(e.detail.value);
                                if (e.detail.value != undefined) 
                                props.setState('height', e.detail.value )}} />
                            )}
                            name="height"
                            control={control}/>
                            <IonNote >Responda com o valor em centímetros, por ex: 1,70m = 170cm - escrever 170.</IonNote>
                        </IonItem>

                        <IonItem>
                        
                            <IonLabel>Estado do Brasil:</IonLabel>
                            
                            
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

                         
                        <IonItem>
                            <IonLabel position="floating">Profissão: </IonLabel>

                            <Controller render={({onChange}) => (
                            <IonInput id="occupation" onIonChange={(e)=> {
                                console.log(e);
                                onChange(e.detail.value);
                                if (e.detail.value != undefined) 
                                props.setState('occupation', e.detail.value ) }}/>

                            )}
                            control={control}
                            name="occupation"
                            />
                        </IonItem>

                                        
                        <IonItem>
  
                        <IonLabel >Atualmente sou:</IonLabel>
                            
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
                                <IonLabel className="ion-text-wrap">Outros: </IonLabel>
                                <IonInput onIonChange={(e)=> {
                                console.log(e);
                                onChange(e.detail.value);
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

                        <IonItem>
                            <IonLabel>Escolaridade:</IonLabel>

                            <Controller render={({onChange}) => (

                            <IonSelect placeholder="Por favor, selecione..." value= {props.getState("schooling", "")} id="schooling" onIonChange={(e)=> {
                                console.log(e);
                                onChange(e.detail.value);
                                if (e.detail.value != undefined) 
                                props.setState('schooling', e.detail.value )  }}>
                            <IonSelectOption className="ion-text-wrap">Ensino Fundamental Incompleto</IonSelectOption>
                            <IonSelectOption className="ion-text-wrap">Ensino Fundamental Completo</IonSelectOption>
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

                          <IonItem>
                                <IonLabel>Estado Civil:</IonLabel>

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

                                                
                        <IonItem>
                            <IonLabel position="floating" className="ion-text-wrap">Número de pessoas dependentes:</IonLabel>

                            <Controller render={({onChange}) => (
                            <IonInput id="depend" onIonChange={(e)=> {
                                console.log(e);
                                onChange(e.detail.value);
                                if (e.detail.value != undefined) 
                                props.setState('depend', e.detail.value ) }} />
                            )}
                            name="depend"
                            control={control} />
                           
                         </IonItem>
       
                        <IonItem>
                            <IonLabel className="ion-text-wrap">Quantas pessoas estão morando na sua residência, além de você?</IonLabel>

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

                        <IonItem>
                            <IonLabel>Moro em uma área: </IonLabel>

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
                         <IonButton onClick={props.next} className={"btnProximo"} size="large" >Próximo</IonButton>
                        
                         
                </form>
           
        </div>
        </IonContent>
    )


}

export default Step1;