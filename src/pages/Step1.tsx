import React, { FormEvent } from "react";
import {StepComponentProps} from "react-step-builder";

import { Steps, Step } from "react-step-builder";

import { IonApp,
    IonItem,
    IonLabel,
    IonInput,
    IonRadioGroup,
    IonListHeader,
    IonRadio,
    IonSelect,
    IonSelectOption,
    IonRange,
    IonButton,
    IonCard,
    IonCardTitle,
    IonCardContent,
    IonCheckbox,
    IonList,
    IonDatetime,
    IonSlides,
    IonSlide,
    IonNote,
    IonItemDivider
    
  } from "@ionic/react";
  import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';

  import './Forms.css';

import { useForm, Controller } from "react-hook-form";

import {useState, ChangeEvent} from 'react';
import { setConstantValue } from "typescript";





const Step1 = (props: StepComponentProps) => {


                                          
  const {control, watch, handleSubmit} = useForm();

  

  const submitForm = (data: any) => {
    console.log('submiting to database', data);
  } 

  const [showOptions, setShowOptions] = React.useState(false);

  const watchGender= watch("sexo", "");
  
{/*
 const onChange = ((e: React.ChangeEvent<HTMLIonSelectElement>) : void => {
    const value = e.currentTarget.value;
    console.log(value);
   
    if (value == "feminino"){
        setShowOptions(true);
       
    }
    else if (value == "masculino"){
        setShowOptions(false);
    }
      
    })
*/}
    

    return (
        <IonContent fullscreen>
        <div>
            
                <form className="ion-padding">
                        <IonItem>
                            <IonLabel position="floating">Email:</IonLabel>
                            
                            <Controller  render={({onChange}) => (
                               <IonInput type="email" id="email" onIonChange={(e) => {
                                console.log(e);
                                onChange(e.detail.value)
                            }} />    
                                
                            )}          
                            
                            name= "email"
                            rules= {{required:true}}
                            control= {control} />
                            
                        </IonItem> 

                         <IonItem>
                            <IonLabel position="floating">Idade:</IonLabel>
                            
                            <Controller render={({onChange}) => (
                                <IonInput type="number" id="idade" onIonChange={(e)=> {
                                    console.log(e);
                                    onChange(e.detail.value) }}
                                    />
                            )}
                            name= "email"
                            rules= {{required: true}}
                            control= {control}            
                            />
                            
                            
                         </IonItem>

                         <IonItem>
                            <IonLabel >Sexo:</IonLabel>

                            <Controller render={({onChange}) => ( 
                            <IonSelect placeholder="Por favor, selecione..." id="sexo" onIonChange={(e) => {
                                console.log(e);
                                onChange(e.detail.value)
                            }}>
                                    <IonSelectOption value="feminino" >Feminino</IonSelectOption>
                                    <IonSelectOption value="masculino">Masculino</IonSelectOption>
                            </IonSelect> 
                            

                            )}

                            control={control}
                            name="sexo"
                            rules={{required: true}}
                            
                            
                            />    
                         </IonItem>

                        {watchGender == "feminino" ? 
                        <IonItem>
                            <IonLabel position="floating">Primeira dia da última menstruação:</IonLabel>

                            <Controller render={({onChange}) => (
                                <IonDatetime placeholder="Selecione data" id="dateMenstruação" onIonChange={(e)=> {
                                    console.log(e);
                                    onChange(e.detail.value) }} ></IonDatetime>
                            )}
                            name="dateMenstruação"
                            control={control}
                            />
                        </IonItem>
                        : null}
                        
                        <IonItem>
                            <IonLabel position="floating">Peso (em kg):</IonLabel>

                            <Controller render={({onChange}) => (
                            <IonInput id="peso" onIonChange={(e)=> {
                                console.log(e);
                                onChange(e.detail.value) }} />
                            )}
                            name="peso"
                            control={control} />
                            <IonNote >Se você não sabe seu peso exato, pode ser um valor aproximado.</IonNote>
                         </IonItem>

                         <IonItem>
                            <IonLabel position="floating">Altura (em cm): </IonLabel>

                            <Controller render={({onChange}) => (
                            <IonInput id="altura" onIonChange={(e)=> {
                                console.log(e);
                                onChange(e.detail.value) }} />
                            )}
                            name="altura"
                            control={control}/>
                            <IonNote >Responda com o valor em centímetros, por ex: 1,70m = 170cm - escrever 170.</IonNote>
                        </IonItem>

                        <IonItem>
                       
                            <IonLabel>Estado do Brasil:</IonLabel>

                            <Controller render={({onChange}) => (
                               
                                <IonSelect placeholder="Por favor, selecione..." id="estado" onIonChange={(e)=> {
                                    console.log(e);
                                    onChange(e.detail.value) }} >
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

                            name="estado"
                            control={control}
                            />


                         </IonItem>

                         
                        <IonItem>
                            <IonLabel position="floating">Profissão: </IonLabel>

                            <Controller render={({onChange}) => (
                            <IonInput onIonChange={(e)=> {
                                console.log(e);
                                onChange(e.detail.value) }}/>

                            )}
                            control={control}
                            name="profissão"
                            />
                        </IonItem>

                                        
                        <IonItem>
  
                        <IonLabel>Atualmente sou:</IonLabel>
                            
                            <Controller render={({onChange}) => (
                            <IonList >

                            <IonItem>
                            <IonCheckbox color="primary" onIonChange={(e)=> {
                                console.log(e);
                                onChange(e.detail.value) }}></IonCheckbox>
                            <IonLabel>Estudante</IonLabel>
                            </IonItem>

                            <IonItem>
                            <IonCheckbox color="primary" onIonChange={(e)=> {
                                console.log(e);
                                onChange(e.detail.value) }}></IonCheckbox>
                            <IonLabel>Assalariado</IonLabel>
                            </IonItem>

                            <IonItem>
                            <IonCheckbox color="primary" onIonChange={(e)=> {
                                console.log(e);
                                onChange(e.detail.value) }}></IonCheckbox>
                            <IonLabel>Autônomo</IonLabel>
                            </IonItem>
                            
                            <IonItem>
                            <IonCheckbox color="primary" onIonChange={(e)=> {
                                console.log(e);
                                onChange(e.detail.value) }}></IonCheckbox>
                            <IonLabel>Desempregado</IonLabel>
                            </IonItem>

                            <IonItem>
                            <IonCheckbox color="primary" onIonChange={(e)=> {
                                console.log(e);
                                onChange(e.detail.value) }}></IonCheckbox>
                            <IonLabel>Aposentado</IonLabel>
                            </IonItem>

                            <IonItem>
                                <IonLabel>Outros: </IonLabel>
                                <IonInput onIonChange={(e)=> {
                                console.log(e);
                                onChange(e.detail.value) }}/>
                            </IonItem>
                            </IonList>

                            )}
                            control={control}
                            name={"profissãoAtualmente"}
                            />
                        </IonItem>

                        <IonItem>
                            <IonLabel>Escolaridade:</IonLabel>

                            <Controller render={({onChange}) => (

                            <IonSelect placeholder="Por favor, selecione..." onIonChange={(e)=> {
                                console.log(e);
                                onChange(e.detail.value) }}>
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
                            name={"escolaridade"}
                            />
                          </IonItem>

                          <IonItem>
                                <IonLabel>Estado Civil:</IonLabel>

                                <Controller render={({onChange}) => (
                                <IonSelect placeholder="Por favor, selecione..." onIonChange={(e)=> {
                                    console.log(e);
                                    onChange(e.detail.value) }}>
                                <IonSelectOption>Solteiro(a)</IonSelectOption>
                                <IonSelectOption>Casado(a)</IonSelectOption>
                                <IonSelectOption>Separado(a)/Divorciado(a)</IonSelectOption>
                                <IonSelectOption>Viúvo(a)</IonSelectOption>
             
                                </IonSelect>
                                )}
                                control={control}
                                name={"estadoCivil"}
                                />
                         </IonItem>

                         <IonItem>
                            <IonLabel>Número de pessoas dependentes:</IonLabel>
                            <Controller  render={({onChange}) => (
                            <IonInput onIonChange={(e)=> {
                                console.log(e);
                                onChange(e.detail.value) }} />
                            )}
                            control={control}
                            name={"nDependentes"}
                            />
                        </IonItem>
       
                        <IonItem>
                            <IonLabel>Quantas pessoas estão morando na sua residência, além de você?</IonLabel>

                            <Controller render={({onChange}) => (
                            <IonSelect placeholder="Por favor, selecione..." onIonChange={(e)=> {
                                console.log(e);
                                onChange(e.detail.value) }}>
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
                            name={"nPessoas"}
                            />
                            
                        </IonItem>

                        <IonItem>
                            <IonLabel>Moro em uma área: </IonLabel>

                            <Controller render={({onChange}) => (
                            <IonList>
                                <IonItem>
                                <IonCheckbox color="primary" onIonChange={(e)=> {
                                console.log(e);
                                onChange(e.detail.value) }}></IonCheckbox>
                                <IonLabel>Urbana</IonLabel>
                                </IonItem>

                                <IonItem>
                                <IonCheckbox color="primary" onIonChange={(e)=> {
                                console.log(e);
                                onChange(e.detail.value) }}></IonCheckbox>
                                <IonLabel>Rural</IonLabel>
                                </IonItem>

                             </IonList>
                             )}
                             control={control}
                             name={"areaResidencia"}
                             />
                         </IonItem>
                         <IonButton disabled={props.isFirst()}onClick={props.prev}>Anterior</IonButton>
                         <IonButton onClick={props.next} className={"btnProximo"}>Próximo</IonButton>
                </form>
           
        </div>
        </IonContent>
    )


}

export default Step1;