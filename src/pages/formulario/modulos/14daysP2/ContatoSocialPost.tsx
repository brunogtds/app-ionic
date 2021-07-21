import React from "react";
import {StepComponentProps} from "react-step-builder";

import { IonItem, IonLabel, IonInput, IonSelect, IonSelectOption, IonButton, IonCheckbox, IonList, IonDatetime, IonNote, IonRadio, IonRadioGroup, IonTextarea} from "@ionic/react";
import { IonContent} from '@ionic/react';
import '../Forms.css';

import { useForm, Controller } from "react-hook-form";

import {useState} from 'react';


import { IonProgressBar} from '@ionic/react';

//imports user context do reactfire

import {useUser} from 'reactfire';
import firebase from 'firebase';

/*STEP 1 => Página 1 do formulário
Se user autenticado entrou aqui -> createDataBaseQuest 1 cria a entrada na tabela users no Firebase  */

const ContatoSocialPost = (props: StepComponentProps) => {

    const {data: user}= useUser();
    const [dataUser, setData] = useState()
                          
    const {control, watch, handleSubmit} = useForm();
    const [workPost, setWorkPost]= useState();
    const [workRegPost, setWorkRegPost]= useState();
    const [covid, setCovid] = useState(false);
    const [covidSusp, setCovidSusp]= useState(false);
    
    const watchIsolation= watch("quarantineRoomPost", "");
    

    return (
        <IonContent fullscreen>
        <div>
        
                <form className="ion-padding">

                        <IonProgressBar value={0.32} buffer={0.32}></IonProgressBar>

                        <IonItem>
                            <IonLabel className="ion-text-wrap">Estou em distanciamento social:</IonLabel>

                            <Controller render={({onChange}) => (

                            <IonSelect placeholder="Por favor, selecione..." onIonChange={(e) => {
                                console.log(e);
                                onChange(e.detail.value);
                                if (e.detail.value != undefined) 
                                props.setState('socialDistPost', e.detail.value ); 
                            }}>
                            <IonSelectOption value="3" >Todo o tempo</IonSelectOption>
                            <IonSelectOption value="2" >A maior parte do tempo</IonSelectOption>
                            <IonSelectOption value="1" >Menos da metade do tempo</IonSelectOption>
                            <IonSelectOption value="0" >Não estou em distanciamento social</IonSelectOption>
                            </IonSelect> )} control={control} name={'socialDistPost'}/>
                         </IonItem>

                         <IonList>

                         <IonItem>
                            <IonLabel>Você trabalhou ou estudou nas últimas 6 semanas?</IonLabel>
                           
                            <Controller render={({onChange}) => (
                            <IonRadioGroup value={workPost} onIonChange={(e) => {setWorkPost(e.detail.value);
                                if (e.detail.value != undefined) 
                                props.setState('workqPost', 'nenhuma' )}}>

                                <IonItem>
                                <IonLabel>Sim</IonLabel>
                                <IonRadio color="primary" value="sim"></IonRadio>
                                </IonItem>
                               
                                <IonItem>
                                <IonLabel>Não</IonLabel>
                                <IonRadio color="primary" value="não"></IonRadio>
                                </IonItem>

                                
                            </IonRadioGroup>
                            )}
                            control={control}
                            name={"workqPost"} 
                            />
                        </IonItem>

                        {(workPost == "sim") ? 
                          <IonItem>
                          <IonLabel>Quantas horas em média você trabalhou/estudou nestes dias? </IonLabel>
                          <Controller render={({onChange}) => (
                          <IonSelect placeholder="Por favor, selecione..." onIonChange={(e) => {
                              console.log(e);
                              onChange(e.detail.value);
                              if (e.detail.value != undefined) 
                              props.setState('workDurPost', e.detail.value )
                          }}>
                          <IonSelectOption value="até 1 hora">até 1 hora</IonSelectOption>
                          <IonSelectOption value="até 2 horas">até 2 horas</IonSelectOption>
                          <IonSelectOption value="até 4 horas">até 4 horas</IonSelectOption>
                          <IonSelectOption value="até 8 horas">até 8 horas</IonSelectOption>
                          <IonSelectOption value="mais de 8 horas">mais de 8 horas</IonSelectOption>
                          </IonSelect> )} control={control} name={"workDurPost"}/>
                       </IonItem>: null }

                       {(workPost == "sim") ? 
                          <IonItem>
                          <IonLabel>Você pôde escolher seus horários de trabalho/estudo?</IonLabel>
                          <Controller render={({onChange}) => (
                          <IonRadioGroup onIonChange={(e) => {
                              console.log(e);
                              onChange(e.detail.value);
                              if (e.detail.value != undefined) 
                              props.setState('workChoicePost', e.detail.value )
                          }}>

                              <IonItem>
                              <IonLabel>Sim</IonLabel>
                              <IonRadio color="primary" value="sim"></IonRadio>
                              </IonItem>
                             
                              <IonItem>
                              <IonLabel>Não</IonLabel>
                              <IonRadio color="primary" value="não"></IonRadio>
                              </IonItem>
                             
                          </IonRadioGroup> )} control={control} name={"workChoicePost"}/>
                      </IonItem>: null }

                      {(workPost == "sim") ? 
                           <IonItem>
                           <IonLabel>O quão regular foram seus horários de trabalho/estudo nas últimas duas semanas: </IonLabel>

                           <Controller render={({onChange}) => (
                           <IonSelect placeholder="Por favor, selecione..." value={workRegPost} onIonChange={(e) => {setWorkRegPost(e.detail.value) ; 
                           if (e.detail.value != undefined) 
                           props.setState('workRegPost', e.detail.value )}}>
                           <IonSelectOption value="muitoIrregulares">Muito irregulares</IonSelectOption>
                           <IonSelectOption value="irregulares">Irregulares</IonSelectOption>
                           <IonSelectOption value="regulares">Regulares</IonSelectOption>
                           <IonSelectOption value="muitoRegulares">Muito regulares</IonSelectOption>
                           </IonSelect> )} control={control} name={"workRegPost"}/>
                        </IonItem>: null }

                        {((workPost == "sim") && ((workRegPost == "regulares") || (workPost == "muitoRegulares"))) ? 
                             <IonItem>
                             <IonLabel>Em que horário, em média, você começou a trabalhar/estudar nas últimas duas semanas?</IonLabel>
                             <Controller render={({onChange}) => (
                             <IonDatetime display-format="h:mm A" picker-format="h:mm A" onIonChange={(e) => {
                                console.log(e);
                                onChange(e.detail.value);
                                if (e.detail.value != undefined) 
                                props.setState('workStartPost', e.detail.value )
                            }}></IonDatetime> )} control={control} name={"workStartPost"}/>
                         </IonItem>:null }
                            
                        </IonList>

                        <IonItem>
                            <IonLabel>Marque aquela que melhor descreve a maneira como você se sentiu nas últimas duas semanas.</IonLabel>
                            <Controller render={({onChange}) => (
                            <IonSelect placeholder="Por favor, selecione..." id={""} onIonChange={(e)=> {
                                console.log(e);
                                onChange(e.detail.value);
                                if (e.detail.value != undefined) {
                                props.setState('beck02Post', e.detail.value )} }}>
                            <IonSelectOption value="A1">Não estou especialmente desanimado com o futuro.</IonSelectOption>
                            <IonSelectOption value="A2">Eu me sinto desanimado quanto ao futuro.</IonSelectOption>
                            <IonSelectOption value="A3">Acho que nada tenho a esperar.</IonSelectOption>
                            <IonSelectOption value="A4">Acho o futuro sem esperança e tenho a impressão de que as coisas não podem melhorar.</IonSelectOption>
                            </IonSelect> )} control={control} name={"beck02Post"}/>
                         </IonItem>

                         <IonItem>
                            <IonLabel>Em relação a situação atual, em um nível de 1 (não me traz ansiedade) a 5 (me deixa muito ansioso), o quanto
                                estas preocupações te deixam ansioso?
                            </IonLabel>

                        </IonItem>

                        

                            <IonItem>

                             <IonLabel>Possibilidade de contágio.</IonLabel>

                             <Controller render={({onChange}) => (
                             <IonRadioGroup onIonChange={(e)=> {
                                console.log(e);
                                onChange(e.detail.value);
                                if (e.detail.value != undefined) {
                                props.setState('worriesPost_PRcont', e.detail.value )} }}>

                                <IonItem>
                                <IonLabel>1</IonLabel>
                                <IonRadio color="primary" value="1"></IonRadio>
                                </IonItem>
                               
                                <IonItem>
                                <IonLabel>2</IonLabel>
                                <IonRadio color="primary" value="2"></IonRadio>
                                </IonItem>

                                <IonItem>
                                <IonLabel>3</IonLabel>
                                <IonRadio color="primary" value="3"></IonRadio>
                                </IonItem>
                               
                                <IonItem>
                                <IonLabel>4</IonLabel>
                                <IonRadio color="primary" value="4"></IonRadio>
                                </IonItem>
                               
                                <IonItem>
                                <IonLabel>5</IonLabel>
                                <IonRadio color="primary" value="5"></IonRadio>
                                </IonItem>

                                <IonItem>
                                <IonLabel>Sem resposta</IonLabel>
                                <IonRadio color="primary" value="0"></IonRadio>
                                </IonItem>
                            </IonRadioGroup> )} control={control} name={"worriesPost_PRcont"}/>
                            </IonItem>

                            <IonItem>

                             <IonLabel>Perder o emprego.</IonLabel>

                            
                             <Controller render={({onChange}) => (
                             <IonRadioGroup onIonChange={(e)=> {
                                console.log(e);
                                onChange(e.detail.value);
                                if (e.detail.value != undefined) {
                                props.setState('worriesPost_PRjob', e.detail.value )} }}>

                                <IonItem>
                                <IonLabel>1</IonLabel>
                                <IonRadio color="primary" value="1"></IonRadio>
                                </IonItem>
                               
                                <IonItem>
                                <IonLabel>2</IonLabel>
                                <IonRadio color="primary" value="2"></IonRadio>
                                </IonItem>

                                <IonItem>
                                <IonLabel>3</IonLabel>
                                <IonRadio color="primary" value="3"></IonRadio>
                                </IonItem>
                               
                                <IonItem>
                                <IonLabel>4</IonLabel>
                                <IonRadio color="primary" value="4"></IonRadio>
                                </IonItem>
                               
                                <IonItem>
                                <IonLabel>5</IonLabel>
                                <IonRadio color="primary" value="5"></IonRadio>
                                </IonItem>

                                <IonItem>
                                <IonLabel>Sem resposta</IonLabel>
                                <IonRadio color="primary" value="0"></IonRadio>
                                </IonItem>
                            </IonRadioGroup> )} control={control} name={"worriesPost_PRjob"}/>
                            </IonItem>

                            <IonItem>

                             <IonLabel>Não ter mais fonte de renda.</IonLabel>

                             
                             <Controller render={({onChange}) => (
                             <IonRadioGroup onIonChange={(e)=> {
                                console.log(e);
                                onChange(e.detail.value);
                                if (e.detail.value != undefined) {
                                props.setState('worriesPost_PRincome', e.detail.value )} }}>

                                <IonItem>
                                <IonLabel>1</IonLabel>
                                <IonRadio color="primary" value="1"></IonRadio>
                                </IonItem>
                               
                                <IonItem>
                                <IonLabel>2</IonLabel>
                                <IonRadio color="primary" value="2"></IonRadio>
                                </IonItem>

                                <IonItem>
                                <IonLabel>3</IonLabel>
                                <IonRadio color="primary" value="3"></IonRadio>
                                </IonItem>
                               
                                <IonItem>
                                <IonLabel>4</IonLabel>
                                <IonRadio color="primary" value="4"></IonRadio>
                                </IonItem>
                               
                                <IonItem>
                                <IonLabel>5</IonLabel>
                                <IonRadio color="primary" value="5"></IonRadio>
                                </IonItem>

                                <IonItem>
                                <IonLabel>Sem resposta</IonLabel>
                                <IonRadio color="primary" value="0"></IonRadio>
                                </IonItem>
                            </IonRadioGroup> )} control={control} name={"worriesPost_PRincome"}/>
                            </IonItem>
                       
                            <IonItem>

                             <IonLabel>Terminar o relacionamento.</IonLabel>
                             <Controller render={({onChange}) => (
                             <IonRadioGroup onIonChange={(e)=> {
                                console.log(e);
                                onChange(e.detail.value);
                                if (e.detail.value != undefined) {
                                props.setState('worriesPost_PRrelationship', e.detail.value )} }}>

                                <IonItem>
                                <IonLabel>1</IonLabel>
                                <IonRadio color="primary" value="1"></IonRadio>
                                </IonItem>
                               
                                <IonItem>
                                <IonLabel>2</IonLabel>
                                <IonRadio color="primary" value="2"></IonRadio>
                                </IonItem>

                                <IonItem>
                                <IonLabel>3</IonLabel>
                                <IonRadio color="primary" value="3"></IonRadio>
                                </IonItem>
                               
                                <IonItem>
                                <IonLabel>4</IonLabel>
                                <IonRadio color="primary" value="4"></IonRadio>
                                </IonItem>
                               
                                <IonItem>
                                <IonLabel>5</IonLabel>
                                <IonRadio color="primary" value="5"></IonRadio>
                                </IonItem>

                                <IonItem>
                                <IonLabel>Sem resposta</IonLabel>
                                <IonRadio color="primary" value="0"></IonRadio>
                                </IonItem>
                            </IonRadioGroup> )} control={control} name={"worriesPost_PRrelationship"}/>
                             
                            </IonItem>
                        
                                                  
                            <IonItem>

                             <IonLabel>Contagiar alguém.</IonLabel>

                             <Controller render={({onChange}) => (
                             <IonRadioGroup onIonChange={(e)=> {
                                console.log(e);
                                onChange(e.detail.value);
                                if (e.detail.value != undefined) {
                                props.setState('worriesPost_PRcontSomeone', e.detail.value )} }}>

                                <IonItem>
                                <IonLabel>1</IonLabel>
                                <IonRadio color="primary" value="1"></IonRadio>
                                </IonItem>
                               
                                <IonItem>
                                <IonLabel>2</IonLabel>
                                <IonRadio color="primary" value="2"></IonRadio>
                                </IonItem>

                                <IonItem>
                                <IonLabel>3</IonLabel>
                                <IonRadio color="primary" value="3"></IonRadio>
                                </IonItem>
                               
                                <IonItem>
                                <IonLabel>4</IonLabel>
                                <IonRadio color="primary" value="4"></IonRadio>
                                </IonItem>
                               
                                <IonItem>
                                <IonLabel>5</IonLabel>
                                <IonRadio color="primary" value="5"></IonRadio>
                                </IonItem>

                                <IonItem>
                                <IonLabel>Sem resposta</IonLabel>
                                <IonRadio color="primary" value="0"></IonRadio>
                                </IonItem>
                            </IonRadioGroup> )} control={control} name={"worriesPost_PRcontSomeone"}/>
                               
                            </IonItem>

                            <IonItem>

                             <IonLabel>Familiares e/ou amigos na linha de frente de combate ao vírus.</IonLabel>

                             <Controller render={({onChange}) => (
                             <IonRadioGroup onIonChange={(e)=> {
                                console.log(e);
                                onChange(e.detail.value);
                                if (e.detail.value != undefined) {
                                props.setState('worriesPost_PRfamilyFrontline', e.detail.value )} }}>

                                <IonItem>
                                <IonLabel>1</IonLabel>
                                <IonRadio color="primary" value="1"></IonRadio>
                                </IonItem>
                               
                                <IonItem>
                                <IonLabel>2</IonLabel>
                                <IonRadio color="primary" value="2"></IonRadio>
                                </IonItem>

                                <IonItem>
                                <IonLabel>3</IonLabel>
                                <IonRadio color="primary" value="3"></IonRadio>
                                </IonItem>
                               
                                <IonItem>
                                <IonLabel>4</IonLabel>
                                <IonRadio color="primary" value="4"></IonRadio>
                                </IonItem>
                               
                                <IonItem>
                                <IonLabel>5</IonLabel>
                                <IonRadio color="primary" value="5"></IonRadio>
                                </IonItem>

                                <IonItem>
                                <IonLabel>Sem resposta</IonLabel>
                                <IonRadio color="primary" value="0"></IonRadio>
                                </IonItem>
                            </IonRadioGroup> )} control={control} name={"worriesPost_PRfamilyFrontline"}/>
                               
                            </IonItem>

                            <IonItem>

                             <IonLabel>Vida não voltar a ser como era antes.</IonLabel>

                             <Controller render={({onChange}) => (
                             <IonRadioGroup onIonChange={(e)=> {
                                console.log(e);
                                onChange(e.detail.value);
                                if (e.detail.value != undefined) {
                                props.setState('worriesPost_PRlife', e.detail.value )} }}>

                                <IonItem>
                                <IonLabel>1</IonLabel>
                                <IonRadio color="primary" value="1"></IonRadio>
                                </IonItem>
                               
                                <IonItem>
                                <IonLabel>2</IonLabel>
                                <IonRadio color="primary" value="2"></IonRadio>
                                </IonItem>

                                <IonItem>
                                <IonLabel>3</IonLabel>
                                <IonRadio color="primary" value="3"></IonRadio>
                                </IonItem>
                               
                                <IonItem>
                                <IonLabel>4</IonLabel>
                                <IonRadio color="primary" value="4"></IonRadio>
                                </IonItem>
                               
                                <IonItem>
                                <IonLabel>5</IonLabel>
                                <IonRadio color="primary" value="5"></IonRadio>
                                </IonItem>

                                <IonItem>
                                <IonLabel>Sem resposta</IonLabel>
                                <IonRadio color="primary" value="0"></IonRadio>
                                </IonItem>
                            </IonRadioGroup> )} control={control} name={"worriesPost_PRlife"}/>
                            </IonItem>

                            <IonItem>
                            <IonLabel>Perder contato com amigos ou colegas.</IonLabel>
                            <Controller render={({onChange}) => (
                             <IonRadioGroup onIonChange={(e)=> {
                                console.log(e);
                                onChange(e.detail.value);
                                if (e.detail.value != undefined) {
                                props.setState('worriesPost_PRcontact', e.detail.value )} }}>

                                <IonItem>
                                <IonLabel>1</IonLabel>
                                <IonRadio color="primary" value="1"></IonRadio>
                                </IonItem>
                               
                                <IonItem>
                                <IonLabel>2</IonLabel>
                                <IonRadio color="primary" value="2"></IonRadio>
                                </IonItem>

                                <IonItem>
                                <IonLabel>3</IonLabel>
                                <IonRadio color="primary" value="3"></IonRadio>
                                </IonItem>
                               
                                <IonItem>
                                <IonLabel>4</IonLabel>
                                <IonRadio color="primary" value="4"></IonRadio>
                                </IonItem>
                               
                                <IonItem>
                                <IonLabel>5</IonLabel>
                                <IonRadio color="primary" value="5"></IonRadio>
                                </IonItem>

                                <IonItem>
                                <IonLabel>Sem resposta</IonLabel>
                                <IonRadio color="primary" value="0"></IonRadio>
                                </IonItem>
                            </IonRadioGroup> )} control={control} name={"worriesPost_PRcontact"}/>
                            
                               
                            </IonItem>

                            <IonItem>

                             <IonLabel>Educação dos filhos.</IonLabel>

                             
                             <Controller render={({onChange}) => (
                             <IonRadioGroup onIonChange={(e)=> {
                                console.log(e);
                                onChange(e.detail.value);
                                if (e.detail.value != undefined) {
                                props.setState('worriesPost_PRchildren', e.detail.value )} }}>

                                <IonItem>
                                <IonLabel>1</IonLabel>
                                <IonRadio color="primary" value="1"></IonRadio>
                                </IonItem>
                               
                                <IonItem>
                                <IonLabel>2</IonLabel>
                                <IonRadio color="primary" value="2"></IonRadio>
                                </IonItem>

                                <IonItem>
                                <IonLabel>3</IonLabel>
                                <IonRadio color="primary" value="3"></IonRadio>
                                </IonItem>
                               
                                <IonItem>
                                <IonLabel>4</IonLabel>
                                <IonRadio color="primary" value="4"></IonRadio>
                                </IonItem>
                               
                                <IonItem>
                                <IonLabel>5</IonLabel>
                                <IonRadio color="primary" value="5"></IonRadio>
                                </IonItem>

                                <IonItem>
                                <IonLabel>Sem resposta</IonLabel>
                                <IonRadio color="primary" value="0"></IonRadio>
                                </IonItem>
                            </IonRadioGroup> )} control={control} name={"worriesPost_PRchildren"}/>
                            </IonItem>

                            
                            <IonItem>

                            <Controller render={({onChange}) => (   
                            <IonList>
                            <IonLabel className={"ion-text-wrap"}>Durante o tempo em que participou do estudo,
                            você ou alguém da sua família contraiu o vírus?</IonLabel>
                                <IonItem>
                                <IonCheckbox color="primary" value= {props.getState("covidPost", "")} checked={covidSusp} onIonChange={(e)=> {
                                console.log(e);
                                onChange(e.detail.value);
                                setCovidSusp(true);
                                if (e.detail.value != undefined) 
                                props.setState('covidPost', 'tive suspeita' )  }}></IonCheckbox>
                                <IonLabel>Tive suspeita</IonLabel>
                                </IonItem>

                                <IonItem>
                                <IonCheckbox color="primary" value= {props.getState("covid", "")} checked={covid} onIonChange={(e)=> {
                                console.log(e);
                                onChange(e.detail.value);
                                setCovid(true);
                                if (e.detail.value != undefined) 
                                props.setState('covidPost', 'contraí o vírus' )  }}></IonCheckbox>
                                <IonLabel>Contraí o vírus</IonLabel>
                                </IonItem>
                                
                                <IonItem>
                                <IonCheckbox color="primary" value= {props.getState("covid", "")} onIonChange={(e)=> {
                                console.log(e);
                                onChange(e.detail.value);
                                if (e.detail.value != undefined) 
                                props.setState('covidPost', 'algum membro da minha família teve suspeita' )  }}></IonCheckbox>
                                <IonLabel>Algum membro da minha família teve suspeita</IonLabel>
                                </IonItem>

                                <IonItem>
                                <IonCheckbox color="primary" value= {props.getState("covid", "")} onIonChange={(e)=> {
                                console.log(e);
                                onChange(e.detail.value);
                                if (e.detail.value != undefined) 
                                props.setState('covidPost', 'algum membro da minha família contraiu o vírus' )  }}></IonCheckbox>
                                <IonLabel>Algum membro da minha família contraiu o vírus</IonLabel>
                                </IonItem>

                                <IonItem>
                                <IonCheckbox color="primary" value= {props.getState("covid", "")} onIonChange={(e)=> {
                                console.log(e);
                                onChange(e.detail.value);
                                if (e.detail.value != undefined) 
                                props.setState('covidPost', 'algum amigo/colega teve suspeita' )  }}></IonCheckbox>
                                <IonLabel>Algum amigo/colega teve suspeita</IonLabel>
                                </IonItem>
                                
                                <IonItem>
                                <IonCheckbox color="primary" value= {props.getState("covid", "")} onIonChange={(e)=> {
                                console.log(e);
                                onChange(e.detail.value);
                                if (e.detail.value != undefined) 
                                props.setState('covidPost', 'algum amigo/colega contraiu o vírus' )  }}></IonCheckbox>
                                <IonLabel>Algum amigo/colega contraiu o vírus</IonLabel>
                                </IonItem>

                                <IonItem>
                                <IonCheckbox color="primary" value= {props.getState("covid", "")} onIonChange={(e)=> {
                                console.log(e);
                                onChange(e.detail.value);
                                if (e.detail.value != undefined) 
                                props.setState('covidPost', 'não tive suspeita, nem contraí o vírus' )  }}></IonCheckbox>
                                <IonLabel>Não tive suspeita, nem contraí o vírus. Nenhum amigo/colega/familiar contraiu ou teve suspeita do vírus.</IonLabel>
                                </IonItem>
                             </IonList>   )}
                             control={control}
                             name={"covidPost"}
                             />
                            </IonItem>

                        {covid === true ?
                        <IonItem>
                        <IonLabel>Quanto você foi diagnosticado com o vírus?</IonLabel>

                        <Controller render={({onChange}) => (
                        <IonList>

                            <IonItem>
                            <IonCheckbox color="primary" value= {props.getState("covidDiagnDate", "")} onIonChange={(e)=> {
                            console.log(e);
                            onChange(e.detail.value);
                            if (e.detail.value != undefined) 
                            props.setState('covidDiagnDate', 'janeiro' ) }}></IonCheckbox>
                            <IonLabel>Janeiro</IonLabel>
                            </IonItem>

                            <IonItem>
                            <IonCheckbox color="primary" value= {props.getState("covidDiagnDate", "")} onIonChange={(e)=> {
                            console.log(e);
                            onChange(e.detail.value);
                            if (e.detail.value != undefined) 
                            props.setState('covidDiagnDate', 'fevereiro' ) }}></IonCheckbox>
                            <IonLabel>Fevereiro</IonLabel>
                            </IonItem>

                            <IonItem>
                            <IonCheckbox color="primary" value= {props.getState("covidDiagnDate", "")} onIonChange={(e)=> {
                            console.log(e);
                            onChange(e.detail.value);
                            if (e.detail.value != undefined) 
                            props.setState('covidDiagnDate', 'março' ) }}></IonCheckbox>
                            <IonLabel>Março</IonLabel>
                            </IonItem>

                            <IonItem>
                            <IonCheckbox color="primary" value= {props.getState("covidDiagnDate", "")} onIonChange={(e)=> {
                            console.log(e);
                            onChange(e.detail.value);
                            if (e.detail.value != undefined) 
                            props.setState('covidDiagnDate', 'abril' ) }}></IonCheckbox>
                            <IonLabel>Abril</IonLabel>
                            </IonItem>

                            <IonItem>
                            <IonCheckbox color="primary" value= {props.getState("covidDiagnDate", "")} onIonChange={(e)=> {
                            console.log(e);
                            onChange(e.detail.value);
                            if (e.detail.value != undefined) 
                            props.setState('covidDiagnDate', 'maio' ) }}></IonCheckbox>
                            <IonLabel>Maio</IonLabel>
                            </IonItem>

                            <IonItem>
                            <IonCheckbox color="primary" value= {props.getState("covidDiagnDate", "")} onIonChange={(e)=> {
                            console.log(e);
                            onChange(e.detail.value);
                            if (e.detail.value != undefined) 
                            props.setState('covidDiagnDate', 'junho' ) }}></IonCheckbox>
                            <IonLabel>Junho</IonLabel>
                            </IonItem>

                            <IonItem>
                            <IonCheckbox color="primary" value= {props.getState("covidDiagnDate", "")} onIonChange={(e)=> {
                            console.log(e);
                            onChange(e.detail.value);
                            if (e.detail.value != undefined) 
                            props.setState('covidDiagnDate', 'julho' ) }}></IonCheckbox>
                            <IonLabel>Julho</IonLabel>
                            </IonItem>

                            <IonItem>
                            <IonCheckbox color="primary" value= {props.getState("covidDiagnDate", "")} onIonChange={(e)=> {
                            console.log(e);
                            onChange(e.detail.value);
                            if (e.detail.value != undefined) 
                            props.setState('covidDiagnDate', 'agosto' ) }}></IonCheckbox>
                            <IonLabel>Agosto</IonLabel>
                            </IonItem>

                            <IonItem>
                            <IonCheckbox color="primary" value= {props.getState("covidDiagnDate", "")} onIonChange={(e)=> {
                            console.log(e);
                            onChange(e.detail.value);
                            if (e.detail.value != undefined) 
                            props.setState('covidDiagnDate', 'setembro' ) }}></IonCheckbox>
                            <IonLabel>Setembro</IonLabel>
                            </IonItem>

                            <IonItem>
                            <IonCheckbox color="primary" value= {props.getState("covidDiagnDate", "")} onIonChange={(e)=> {
                            console.log(e);
                            onChange(e.detail.value);
                            if (e.detail.value != undefined) 
                            props.setState('covidDiagnDate', 'outubro' ) }}></IonCheckbox>
                            <IonLabel>Outubro</IonLabel>
                            </IonItem>

                            <IonItem>
                            <IonCheckbox color="primary" value= {props.getState("covidDiagnDate", "")} onIonChange={(e)=> {
                            console.log(e);
                            onChange(e.detail.value);
                            if (e.detail.value != undefined) 
                            props.setState('covidDiagnDate', 'novembro' ) }}></IonCheckbox>
                            <IonLabel>Novembro</IonLabel>
                            </IonItem>

                            <IonItem>
                            <IonCheckbox color="primary" value= {props.getState("covidDiagnDate", "")} onIonChange={(e)=> {
                            console.log(e);
                            onChange(e.detail.value);
                            if (e.detail.value != undefined) 
                            props.setState('covidDiagnDate', 'dezembro' ) }}></IonCheckbox>
                            <IonLabel>Dezembro</IonLabel>
                            </IonItem>


                        </IonList>    )}
                        control={control}
                        name={"covidDiagnDate"}
                        /> 

                    </IonItem> :null}
                                
                                
                    {covid === true ?
                        <IonItem>
                            <IonLabel position="floating">Em qual data houve suspeita de que você estava com o vírus?:</IonLabel>

                            <Controller render={({onChange}) => (
                                <IonDatetime placeholder="Selecione a data..." onIonChange={(e)=> {
                                    console.log(e);
                                    onChange(e.detail.value);
                                    if (e.detail.value != undefined) 
                                    props.setState('covidSuspDate', e.detail.value ) }} ></IonDatetime>
                            )}
                            name="covidSuspDate"
                            control={control}
                            />
                        </IonItem> :null}

                        {((covid === true) || (covidSusp === true)) ? 

                        <IonItem>
                            
                          <IonLabel>Você precisou se isolar em um cômodo em função de COVID-19 ou suspeita?</IonLabel>
                          <Controller render={({onChange}) => (
                          <IonRadioGroup value= {props.getState("quarantineRoomPost", "")} onIonChange={(e) => {
                              console.log(e);
                              onChange(e.detail.value);
                             
                              if (e.detail.value != undefined) 
                              props.setState('quarantineRoomPost', e.detail.value )
                          }}>

                              <IonItem>
                              <IonLabel>Sim</IonLabel>
                              <IonRadio color="primary" value="sim"></IonRadio>
                              </IonItem>
                             
                              <IonItem>
                              <IonLabel>Não</IonLabel>
                              <IonRadio color="primary" value="não"></IonRadio>
                              </IonItem>
                             
                          </IonRadioGroup> )} control={control} name={"quarantineRoomPost"}/>
                      </IonItem> :null}

                    
                      {watchIsolation === "sim" ? 
                            <IonItem>
                             <IonLabel>Por quanto tempo você precisou ficar isolado em um cômodo?</IonLabel>
                            
                            
                             <Controller render={({onChange}) => (
                                
                                 <IonSelect placeholder="Por favor, selecione..." id="BRstate" onIonChange={(e)=> {
                                     console.log(e);
                                     onChange(e.detail.value);
                                     if (e.detail.value != undefined) 
                                     props.setState('quarantineRoomDurPos', e.detail.value ) }} >
                                         
                                 <IonSelectOption value="A1">até 2 dias</IonSelectOption>
                                 <IonSelectOption value="A2">até 4 dias</IonSelectOption>
                                 <IonSelectOption value="A3">até 7 dias</IonSelectOption>
                                 <IonSelectOption value="A4">até 14 dias</IonSelectOption>
                                 <IonSelectOption value="A5">até 21 dias</IonSelectOption>
                                 <IonSelectOption value="A6">mais de 21 dias</IonSelectOption>
                              
                                 
                                 </IonSelect>
                             
                             )}
 
                             name="quarantineRoomDurPos"
                             control={control}
                             />
 
                         
                          </IonItem>
                                :null}
                         <IonButton disabled={props.isFirst()}onClick={props.prev} size="large">Anterior</IonButton>
                         <IonButton onClick={props.next} className={"btnProximo"} size="large" >Próximo</IonButton>
                        
                         
                </form>
           
        </div>
        </IonContent>
    )


}

export default ContatoSocialPost;