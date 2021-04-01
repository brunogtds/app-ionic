import React from "react";
import {StepComponentProps} from "react-step-builder";

import {IonItem, IonLabel, IonInput, IonRadioGroup, IonRadio, IonSelect, IonSelectOption, IonButton, IonCheckbox, IonList, IonDatetime, IonLoading} from "@ionic/react";
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

const Step7 = (props: StepComponentProps) => {

    const {data: user}= useUser();
   const [dataUser, setData] = useState()

   const history= useHistory();
   const [loader, setLoader]= useState<boolean>(false)

  async function updateUserDataQuest1(dataUser: any){
    
 
    if(user){
        firebase.firestore().collection('users').doc(user.uid).set({
            socialDist: String(props.state.socialDist), //STEP 3
            quarantine: String(props.state.qurantine),
            quarantineDur: String(props.state.quarantineDur),
            quarantineRoom: String(props.state.quarantineRoom),
            quarantineRoomDur: String(props.state.quarantineRoomDur),
            quarantineOutDur: String(props.state.quarantineOutDur),
            internet: String(props.state.internet),
            contactN: String(props.state.contactN),
            workQ: String(props.state.workQ),
            workDur: String(props.state.workWeek),
            workChoice: String(props.state.workChooseHour),
            workReg: String(props.state.workReg),
            workStart: String(props.state.workStart),
            sleepReg: String(props.state.sleepReg),
            sleepQual: String(props.state.sleepQual),
            feedReg: String(props.state.feedReg),
            feedStartWD: String(props.state.feedStartWD),
            feedEndWD: String(props.state.feedEndWD),
            feedfdyn: String(props.state.fdyn),
            feedStart: String(props.state.feedStart),
            feedEnd: String(props.state.feedEnd),
            snacks: String(props.state.snacks),
            hobbiesFreq: String(props.state.hobbiesFreq),
            exercise: String(props.state.exercise),
            exerciseFreq: String(props.state.exerciseFreq),
            exerciseReg: String(props.state.exerciseReg),
            exerciseDur: String(props.state.exerciseDur),
            exerciseTiming: String(props.state.exerciseTiming),
            lightFreq: String(props.state.lightFreq),
            light: String(props.state.light),
            lightReg: String(props.state.lightReg),
            lightwdfdyd: String(props.state.lightwdfdyd),
            lightTiming: String(props.state.lightTiming),
            lightTimingWD: String(props.state.lightTimingWD),
            lightTimingFD: String(props.state.lightTimingFD),
            beck02: String(props.state.beck02),
            worries_PRcont: Number(props.state.worries_PRcont),
            worries_PRJob: Number(props.state.worries_PRJob),
            worries_PRincome: Number(props.state.worries_PRincome),
            worries_PRrelationship: Number(props.state.worries_PRrelationship),
            worries_PRcontSomeone: Number(props.state.worries_PRcontSomeone),
            worries_PRfamilyFrontLine: Number(props.state.worries_PRfamilyFrontLine),
            worries_PRlife: Number(props.state.worries_PRlife),
            worries_PRcontact: Number(props.state.worries_PRcontact),
            worries_PRchildren: Number(props.state.worries_PRchildren),
            covid: String(props.state.covid),   }, {merge: true})
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
               
                <form className="ion-padding" onSubmit={handleSubmit(onSubmit)}>
                <IonLoading message="Por favor aguarde..." duration={2000} isOpen={loader}/>

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
                <IonButton onClick={onSubmit} size="large" className={"btnProximo"} >Submeter</IonButton>
                   
                   </div>
                </form>
                
            </div>
            </IonContent>
        )

}

export default Step7;