import React from "react";
import {StepComponentProps} from "react-step-builder";

import {IonItem, IonLabel, IonInput, IonRadioGroup, IonRadio, IonSelect, IonSelectOption, IonButton, IonCheckbox, IonList, IonDatetime} from "@ionic/react";
import { IonContent} from '@ionic/react';
 
import '../../Forms.css';

import { useForm, Controller } from "react-hook-form";
import {useState} from 'react';

import { IonProgressBar} from '@ionic/react';

const Step7 = (props: StepComponentProps) => {

    const {control, watch, handleSubmit} = useForm();
    
    const [distanciamento, setDistanciamento]= useState();
    const [isolamento, setIsolamento]= useState();
    const [diasTrabalho, setDiasTrabalho]= useState();
    const [horasTrabalhoRegulares, setHorasTrabalhoRegulares]= useState();
    const [rotinaAlimento, setRotinaAlimento] = useState();
    const [horarioAlimento, setHorarioAlimento] = useState();
    const [atividadeFisica, setAtividadeFisica]= useState();
    const [horarioAtividadeFisica, setHorarioAtividadeFisica]= useState();
    const [frequenciaLuzNatural, setFrequenciaLuzNatural] = useState();
    const [horarioLuzNatural, setHorarioLuzNatural] = useState();

        return (
            <IonContent fullscreen>
            <IonItem>
       
        
            </IonItem>
                
            <div className="ion-text-wrap">
               
                <form className="ion-padding">

                <div className="ion-text-wrap">
                 

                         
                       
                        
                         <IonLabel className="questions">Marque aquela que melhor descreve a maneira como você se sentiu nas últimas duas semanas.</IonLabel>
                         <IonItem>
                            
                            <Controller render={({onChange}) => (
                            <IonSelect placeholder="Por favor, selecione..." id={""} onIonChange={(e)=> {
                                console.log(e);
                                onChange(e.detail.value);
                                if (e.detail.value != undefined) {
                                props.setState('beck02', e.detail.value )} }}>
                            <IonSelectOption value="A1">Não estou especialmente desanimado com o futuro.</IonSelectOption>
                            <IonSelectOption value="A2">Eu me sinto desanimado quanto ao futuro.</IonSelectOption>
                            <IonSelectOption value="A3">Acho que nada tenho a esperar.</IonSelectOption>
                            <IonSelectOption value="A4">Acho o futuro sem esperança e tenho a impressão de que as coisas não podem melhorar.</IonSelectOption>
                            </IonSelect> )} control={control} name={"beck02"}/>
                         </IonItem>

                        <IonItem>
                            <IonLabel className="questions">Em relação a situação atual, em um nível de 1 (não me traz ansiedade) a 5 (me deixa muito ansioso), o quanto
                                estas preocupações te deixam ansioso?
                            </IonLabel>

                        </IonItem>

                        

                        <IonLabel className="questions">Possibilidade de contágio.</IonLabel>
                            <IonItem>

                            

                             <Controller render={({onChange}) => (
                             <IonRadioGroup onIonChange={(e)=> {
                                console.log(e);
                                onChange(e.detail.value);
                                if (e.detail.value != undefined) {
                                props.setState('worries_PRcont', e.detail.value )} }}>

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
                            </IonRadioGroup> )} control={control} name={"worries_PRcont"}/>
                            </IonItem>

                            <IonLabel className="questions">Perder o emprego.</IonLabel>

                            <IonItem>

                          

                            
                             <Controller render={({onChange}) => (
                             <IonRadioGroup onIonChange={(e)=> {
                                console.log(e);
                                onChange(e.detail.value);
                                if (e.detail.value != undefined) {
                                props.setState('worries_PRjob', e.detail.value )} }}>

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
                            </IonRadioGroup> )} control={control} name={"worries_PRjob"}/>
                            </IonItem>

                            <IonLabel className="questions">Não ter mais fonte de renda.</IonLabel>
                            <IonItem>

                             

                             
                             <Controller render={({onChange}) => (
                             <IonRadioGroup onIonChange={(e)=> {
                                console.log(e);
                                onChange(e.detail.value);
                                if (e.detail.value != undefined) {
                                props.setState('worries_PRincome', e.detail.value )} }}>

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
                            </IonRadioGroup> )} control={control} name={"worries_PRincome"}/>
                            </IonItem>
                       
                            <IonLabel className="questions">Terminar o relacionamento.</IonLabel>
                            <IonItem>

                             
                             <Controller render={({onChange}) => (
                             <IonRadioGroup onIonChange={(e)=> {
                                console.log(e);
                                onChange(e.detail.value);
                                if (e.detail.value != undefined) {
                                props.setState('worries_PRrelationship', e.detail.value )} }}>

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
                            </IonRadioGroup> )} control={control} name={"worries_PRrelationship"}/>
                             
                            </IonItem>
                        

                            <IonLabel className="questions">Contagiar alguém.</IonLabel>               
                            <IonItem>

                            

                             <Controller render={({onChange}) => (
                             <IonRadioGroup onIonChange={(e)=> {
                                console.log(e);
                                onChange(e.detail.value);
                                if (e.detail.value != undefined) {
                                props.setState('worries_PRcontSomeone', e.detail.value )} }}>

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
                            </IonRadioGroup> )} control={control} name={"worries_PRcontSomeone"}/>
                               
                            </IonItem>

                            <IonLabel className="questions">Familiares e/ou amigos na linha de frente de combate ao vírus.</IonLabel>
                            <IonItem>

                             

                             <Controller render={({onChange}) => (
                             <IonRadioGroup onIonChange={(e)=> {
                                console.log(e);
                                onChange(e.detail.value);
                                if (e.detail.value != undefined) {
                                props.setState('worries_PRfamilyFrontline', e.detail.value )} }}>

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
                            </IonRadioGroup> )} control={control} name={"worries_PRfamilyFrontline"}/>
                               
                            </IonItem>

                            <IonLabel className="questions">Vida não voltar a ser como era antes.</IonLabel>

                            <IonItem>

                             

                             <Controller render={({onChange}) => (
                             <IonRadioGroup onIonChange={(e)=> {
                                console.log(e);
                                onChange(e.detail.value);
                                if (e.detail.value != undefined) {
                                props.setState('worries_PRlife', e.detail.value )} }}>

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
                            </IonRadioGroup> )} control={control} name={"worries_PRlife"}/>
                            </IonItem>

                            <IonLabel className="questions">Perder contato com amigos ou colegas.</IonLabel>
                            <IonItem>
                            
                            <Controller render={({onChange}) => (
                             <IonRadioGroup onIonChange={(e)=> {
                                console.log(e);
                                onChange(e.detail.value);
                                if (e.detail.value != undefined) {
                                props.setState('worries_PRcontact', e.detail.value )} }}>

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
                            </IonRadioGroup> )} control={control} name={"worries_PRcontact"}/>
                            
                               
                            </IonItem>

                            <IonLabel className="questions">Educação dos filhos.</IonLabel>

                            <IonItem>
    
                             <Controller render={({onChange}) => (
                             <IonRadioGroup onIonChange={(e)=> {
                                console.log(e);
                                onChange(e.detail.value);
                                if (e.detail.value != undefined) {
                                props.setState('worries_PRchildren', e.detail.value )} }}>

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
                            </IonRadioGroup> )} control={control} name={"worries_PRchildren"}/>
                            </IonItem>
           
                            <IonLabel className={"ion-text-wrap questions"}>Você ou alguém da família contraiu o vírus? </IonLabel>
                        <IonItem>

                            <Controller render={({onChange}) => (   
                            <IonList>
                           
                                <IonItem>
                                <IonCheckbox color="primary" value= {props.getState("covid", "")} onIonChange={(e)=> {
                                console.log(e);
                                onChange(e.detail.value);
                                if (e.detail.value != undefined) 
                                props.setState('covid', 'tive suspeita' )  }}></IonCheckbox>
                                <IonLabel>Tive suspeita</IonLabel>
                                </IonItem>

                                <IonItem>
                                <IonCheckbox color="primary" value= {props.getState("covid", "")} onIonChange={(e)=> {
                                console.log(e);
                                onChange(e.detail.value);
                                if (e.detail.value != undefined) 
                                props.setState('covid', 'contraí o vírus' )  }}></IonCheckbox>
                                <IonLabel>Contraí o vírus</IonLabel>
                                </IonItem>
                                
                                <IonItem>
                                <IonCheckbox color="primary" value= {props.getState("covid", "")} onIonChange={(e)=> {
                                console.log(e);
                                onChange(e.detail.value);
                                if (e.detail.value != undefined) 
                                props.setState('covid', 'algum membro da minha família teve suspeita' )  }}></IonCheckbox>
                                <IonLabel>Algum membro da minha família teve suspeita</IonLabel>
                                </IonItem>

                                <IonItem>
                                <IonCheckbox color="primary" value= {props.getState("covid", "")} onIonChange={(e)=> {
                                console.log(e);
                                onChange(e.detail.value);
                                if (e.detail.value != undefined) 
                                props.setState('covid', 'algum membro da minha família contraiu o vírus' )  }}></IonCheckbox>
                                <IonLabel>Algum membro da minha família contraiu o vírus</IonLabel>
                                </IonItem>

                                <IonItem>
                                <IonCheckbox color="primary" value= {props.getState("covid", "")} onIonChange={(e)=> {
                                console.log(e);
                                onChange(e.detail.value);
                                if (e.detail.value != undefined) 
                                props.setState('covid', 'algum amigo/colega teve suspeita' )  }}></IonCheckbox>
                                <IonLabel>Algum amigo/colega teve suspeita</IonLabel>
                                </IonItem>
                                
                                <IonItem>
                                <IonCheckbox color="primary" value= {props.getState("covid", "")} onIonChange={(e)=> {
                                console.log(e);
                                onChange(e.detail.value);
                                if (e.detail.value != undefined) 
                                props.setState('covid', 'algum amigo/colega contraiu o vírus' )  }}></IonCheckbox>
                                <IonLabel>Algum amigo/colega contraiu o vírus</IonLabel>
                                </IonItem>

                                <IonItem>
                                <IonCheckbox color="primary" value= {props.getState("covid", "")} onIonChange={(e)=> {
                                console.log(e);
                                onChange(e.detail.value);
                                if (e.detail.value != undefined) 
                                props.setState('covid', 'não tive suspeita, nem contraí o vírus' )  }}></IonCheckbox>
                                <IonLabel>Não tive suspeita, nem contraí o vírus. Nenhum amigo/colega/familiar contraiu ou teve suspeita do vírus.</IonLabel>
                                </IonItem>
                             </IonList>   )}
                             control={control}
                             name={"covid"}
                             />
                            </IonItem>

                           
                          

                <IonButton onClick={props.prev} size="large">Anterior</IonButton>
                <IonButton onClick={props.next} size="large" className={"btnProximo"} >Submeter</IonButton>
                   
                   </div>
                </form>
                
            </div>
            </IonContent>
        )

}

export default Step7;