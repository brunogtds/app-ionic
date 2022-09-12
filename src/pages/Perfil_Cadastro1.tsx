import React from "react";
import { StepComponentProps } from "react-step-builder";

import { IonItem, IonLabel, IonInput, IonSelect, IonSelectOption, IonButton, IonDatetime, IonNote, IonRadioGroup, IonRadio, IonText, IonCheckbox } from "@ionic/react";
import { IonContent } from '@ionic/react';
import './Cadastro.css';

import { useForm, Controller } from "react-hook-form";

import { useState } from 'react';


import { IonProgressBar } from '@ionic/react';



//imports user context do reactfire

import { useUser } from 'reactfire';
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

    const { data: user } = useUser();
    const [dataUser, setData] = useState()


    const { control, watch, handleSubmit, errors, formState } = useForm({
        mode: "onChange"
    });

    const [showOptions, setShowOptions] = React.useState(false);

    const watchGender = watch("sex", "");
    const [questionMenstrua, setQuestionMenstrua] = useState();
    const [questionCicloMenstrua, setQuestionCicloMenstrua] = useState();

    const [ocupation, setOcupation] = React.useState(false);


    return (
        <IonContent fullscreen color="background">
            <div>




                <form className="ion-padding texto-default">

                    <div className="texto-title">Sobre você</div>
                    <div className="texto-default">Para começar e receber dicas personalizadas, preencha para sabermos mais sobre você!</div>

                    <IonLabel className="questions">Idade:</IonLabel>
             
                    <IonItem lines="none">


                        <Controller render={({ onChange }) => (
                            <IonInput className={"teste"} type="number" placeholder="Digite um valor" value={props.getState("age", "")} onIonChange={
                                (e) => {
                                    console.log(e);
                                    onChange(e.detail.value);
                                    if (e.detail.value != undefined)
                                        props.setState('age', e.detail.value);
                                }}

                            />
                        )}
                            name="age"
                            rules={{ required: true }}
                            control={control}

                        />



                    </IonItem>

                    <IonLabel className="questions" >Como você foi registrado ao nascer:</IonLabel>
                    <IonItem lines="none">


                        <Controller render={({ onChange }) => (
                            <IonSelect interfaceOptions={options} className={"select-interface-option"} okText="ok" cancelText="Cancelar" placeholder="Por favor, selecione..." value={props.getState("sex", "")} onIonChange={(e) => {
                                console.log(e);
                                onChange(e.detail.value);
                                if (e.detail.value != undefined)
                                    props.setState('sex', e.detail.value);
                            }}>
                                <IonSelectOption value="feminino">Sexo feminino</IonSelectOption>
                                <IonSelectOption value="masculino">Sexo masculino</IonSelectOption>
                             
                            </IonSelect>


                        )}

                            control={control}
                            name="sex"
                            rules={{ required: true }}


                        />

                      

                    </IonItem>

                    {watchGender === "feminino" ?
                        <IonLabel className="questions">Você menstrua?</IonLabel>
                        : null}
                    {watchGender === "feminino" ?
                        <IonItem lines="none">

                            <Controller render={({ onChange }) => (
                                <IonSelect interfaceOptions={options} className={"select-interface-option"} okText="ok" cancelText="Cancelar" placeholder="Por favor, selecione..." onIonChange={(e) => {
                                    console.log(e);
                                    onChange(e.detail.value);
                                    setQuestionMenstrua(e.detail.value)
                                    if (e.detail.value != undefined)
                                        props.setState('questionMenstrua', e.detail.value)
                                }}>
                                    <IonSelectOption value="sim">Sim</IonSelectOption>
                                    <IonSelectOption value="não">Não</IonSelectOption>
                                 
                                </IonSelect>)} control={control} name={"questionMenstrua"} rules={{ required: true }} />
                          
                        </IonItem>
                        : null}

                        {questionMenstrua === "não" ?
                       <IonLabel className="questions">Qual o motivo?</IonLabel>
                        : null}

                        {questionMenstrua === "não" ? 
                        
                        <IonItem mode="md" className={"ion-no-padding"} lines="none">


                                <Controller render={({ onChange }) => (
                                    <IonRadioGroup onIonChange={(e) => {
                                       
                                        onChange(e.detail.value);
                                        if (e.detail.value != undefined)
                                            props.setState('motNoMenstr', e.detail.value)
                                    }}>

                                        <IonItem lines="none" className={"ion-no-padding"}>
                                            <IonLabel>Menopausa</IonLabel>
                                            <IonRadio slot="start" className={"radio-options"} color="primary" value="menopausa"></IonRadio>
                                        </IonItem>


                                         <IonItem lines="none">

                                        <IonInput placeholder="Outro?" type="text" onIonChange={(e) => {
                                       
                                          if (e.detail.value != undefined)
                                                props.setState('motNoMenstr', e.detail.value)        
                                        }} />
                                    </IonItem>
                                    </IonRadioGroup>
                                )}
                                    control={control}
                                  //  rules={{ required: true }}
                                    name={"motNoMenstr"}
                                />
                            </IonItem>

                        
                        : null}

                        {questionMenstrua === "sim" ?
                       <IonLabel className="questions">Seu ciclo é regular ou irregular?</IonLabel>
                        : null}

                        {questionMenstrua === "sim" ?
                       <IonItem lines="none">

                       <Controller render={({ onChange }) => (
                           <IonSelect interfaceOptions={options} className={"select-interface-option"} okText="ok" cancelText="Cancelar" placeholder="Por favor, selecione..." onIonChange={(e) => {
                               console.log(e);
                               onChange(e.detail.value);
                               setQuestionCicloMenstrua(e.detail.value);
                               if (e.detail.value != undefined)
                                   props.setState('questionCicloMenstrua', e.detail.value)
                           }}>
                               <IonSelectOption value="regular">Regular</IonSelectOption>
                               <IonSelectOption value="irregular">Irregular</IonSelectOption>
                            
                           </IonSelect>)} control={control} name={"questionCicloMenstrua"} rules={{ required: true }} />
                     
                   </IonItem>
                        : null}

                    {((questionCicloMenstrua === "regular") || (questionCicloMenstrua === "irregular")) && (questionMenstrua === "sim")  ?
                        <IonItem lines="none">
                            <IonLabel position="floating" className="questions">Primeiro dia da última menstruação:</IonLabel>

                            <Controller render={({ onChange }) => (
                                <IonDatetime monthShortNames="Jan, Fev, Mar, Abr, Mai, Jun, Jul, Aug, Set, Out, Nov, Dez" doneText="Ok" cancelText="Cancelar" placeholder="Selecione data" id="dateMenstruation" onIonChange={(e) => {
                                    console.log(e);
                                    onChange(e.detail.value);
                                    if (e.detail.value != undefined)
                                        props.setState('dateMenstruation', e.detail.value)
                                }} ></IonDatetime>
                            )}
                                name="dateMenstruação"
                                //rules={{ required: true }}
                                control={control}
                            />
                          
                        </IonItem>
                        : null}

                    {((questionCicloMenstrua === "regular") || (questionCicloMenstrua === "irregular")) && (questionMenstrua === "sim")  ?
                        
                        <IonItem lines="none"  >
                       <Controller render={({ onChange }) => (
                        <IonCheckbox className={"checkbox-options"} color="primary" value={props.getState("questionMenstruaNoDate", false)} onIonChange={(e) => {

                            if (e.detail.checked) {
                                props.setState('questionMenstruaNoDate', true)
                            } else {
                                props.setState('questionMenstruaNoDate', false)
                            }
                        }}></IonCheckbox>  )}

                        control={control}
                        // rules={{required: true}}
                        name={"questionMenstruaNoDate"}

                    />
                        <IonLabel >Não lembro a data</IonLabel>
                    </IonItem>
                        : null}

                    <IonLabel className="questions">Peso (em kg):</IonLabel>
                    <IonLabel>Se você não sabe seu peso exato, pode ser um valor aproximado</IonLabel>
                    {errors.weight && <IonText color="danger"> Campo obrigatório.</IonText>}
                    <IonItem lines="none">


                        <Controller render={({ onChange }) => (
                            <IonInput value={props.getState("weight", "")} placeholder="Digite um valor" id="weight" type="number" onIonChange={(e) => {
                                console.log(e);
                                onChange(e.detail.value);
                                if (e.detail.value != undefined)
                                    props.setState('weight', e.detail.value)
                            }} />
                        )}
                            name="weight"
                            rules={{ required: true }}
                            control={control} />


                    </IonItem>

                    <IonLabel className="questions">Altura (em cm): </IonLabel>
                    <IonLabel>Responda com o valor em centímetros (por ex: 1,70 m = 170 cm - escrever 170)</IonLabel>

                    <IonItem lines="none">

                        <Controller render={({ onChange }) => (
                            <IonInput value={props.getState("height", "")} placeholder="Digite um valor" id="height" type="number" onIonChange={(e) => {
                                console.log(e);
                                onChange(e.detail.value);
                                if (e.detail.value != undefined)
                                    props.setState('height', e.detail.value)
                            }} />
                        )}
                            name="height"
                            rules={{ required: true }}
                            control={control} />


                    </IonItem>

                    <IonLabel className="questions">Estado do Brasil:</IonLabel>
                    <IonItem lines="none">




                        <Controller render={({ onChange }) => (

                            <IonSelect className={"select-interface-option"} okText="ok" cancelText="Cancelar" value={props.getState("BRstate", "")} placeholder="Por favor, selecione..." id="BRstate" onIonChange={(e) => {
                                console.log(e);
                                onChange(e.detail.value);
                                if (e.detail.value != undefined)
                                    props.setState('BRstate', e.detail.value)
                            }} >

                               
                                
                                
                                <IonSelectOption>AC</IonSelectOption>
                                <IonSelectOption>AL</IonSelectOption>
                                <IonSelectOption>AP</IonSelectOption>
                                <IonSelectOption>AM</IonSelectOption>
                                <IonSelectOption>BA</IonSelectOption>
                                <IonSelectOption>CE</IonSelectOption>
                                <IonSelectOption>DF</IonSelectOption>
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
                                <IonSelectOption>RS</IonSelectOption>
                                <IonSelectOption>RO</IonSelectOption>
                                <IonSelectOption>RR</IonSelectOption>
                                <IonSelectOption>SC</IonSelectOption>
                                <IonSelectOption>SE</IonSelectOption>
                                <IonSelectOption>SP</IonSelectOption>
                                <IonSelectOption>TO</IonSelectOption>
                                <IonSelectOption>Moro fora do país</IonSelectOption>
                            </IonSelect>

                        )}

                            name="BRstate"
                            rules={{ required: true }}
                            control={control}
                        />




                    </IonItem>


                    <IonLabel className="questions">Atualmente sou:</IonLabel>
                   

                    <IonItem className={"ion-no-padding "} lines="none">


                        <Controller render={({ onChange }) => (
                            <IonRadioGroup allowEmptySelection={true} value={props.getState("currentOccupation", "")}
                                name="currentOccupation" onIonChange={(e) => {
                                    console.log(formState.isValid);
                                    onChange(e.detail.value);
                                    if (e.detail.value != undefined)
                                        props.setState('currentOccupation', e.detail.value)
                                }}>

                                <IonItem lines="none" className={"ion-no-padding"}>
                                    <IonLabel>Estudante</IonLabel>
                                    <IonRadio slot="start" className={"radio-options"} name="currentOccupation" color="orange" value="estudante" ></IonRadio>
                                </IonItem>

                                <IonItem lines="none" className={"ion-no-padding"}>
                                    <IonLabel>Assalariado</IonLabel>
                                    <IonRadio slot="start" className={"radio-options"} name="currentOccupation" color="orange" value="assalariado"></IonRadio>
                                </IonItem>

                                <IonItem lines="none" className={"ion-no-padding"}>
                                    <IonLabel>Autônomo</IonLabel>
                                    <IonRadio slot="start" className={"radio-options"} name="currentOccupation" color="orange" value="autonomo"></IonRadio>
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

                                    <IonInput name="currentOccupation" placeholder="Outros" type="text" onIonChange={(e) => {

                                        if (e.detail.value != undefined)
                                            props.setState('currentOccupation', e.detail.value)
                                    }} />
                                </IonItem>
                            </IonRadioGroup>

                        )}
                            name="currentOccupation"

                            defaultValue={undefined}
                            rules={{ required: true }}
                            control={control}

                        />

                    </IonItem>

                    {formState.isValid === false ? 

                    <div className="preenchimentoObri">
                        <IonText  color="danger">Preencha todos campos obrigatórios para prosseguir</IonText>
                    </div>

                    :null}

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