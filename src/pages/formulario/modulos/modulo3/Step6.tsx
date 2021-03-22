import React from "react";
import {StepComponentProps} from "react-step-builder";

import {IonItem, IonLabel, IonInput, IonRadioGroup, IonRadio, IonSelect, IonSelectOption, IonButton, IonCheckbox, IonList, IonDatetime} from "@ionic/react";
import { IonContent} from '@ionic/react';
 
import '../../Forms.css';

import { useForm, Controller } from "react-hook-form";
import {useState} from 'react';

import { IonProgressBar} from '@ionic/react';

const Step6 = (props: StepComponentProps) => {

    const {control, watch, handleSubmit} = useForm();
    
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
    <IonLabel className="questions">Como foram suas rotinas de sono nas últimas duas semanas? </IonLabel>
                         <IonItem>
                            
                            <Controller render={({onChange}) => (
                            <IonSelect placeholder="Por favor, selecione..." onIonChange={(e) => {
                                console.log(e);
                                onChange(e.detail.value);
                                if (e.detail.value != undefined) 
                                props.setState('sleepReg', e.detail.value )
                            }}>
                            <IonSelectOption value="muito irregulares">Muito irregulares</IonSelectOption>
                            <IonSelectOption value="irregulares">Irregulares</IonSelectOption>
                            <IonSelectOption value="regulares">Regulares</IonSelectOption>
                            <IonSelectOption value="muito regulares">Muito regulares</IonSelectOption>
                            </IonSelect> )} control={control} name={"sleepReg"}/>
                         </IonItem>

                         <IonLabel className="questions">Como você classificaria a qualidade do seu sono nas últimas duas semanas?</IonLabel>
                         <IonItem>
                           
                            <Controller render={({onChange}) => (
                            <IonSelect placeholder="Por favor, selecione..." onIonChange={(e) => {
                                console.log(e);
                                onChange(e.detail.value);
                                if (e.detail.value != undefined) 
                                props.setState('sleepQual', e.detail.value )
                            }}>
                            <IonSelectOption value="muito boa">Muito boa</IonSelectOption>
                            <IonSelectOption value="boa">Boa</IonSelectOption>
                            <IonSelectOption value="ruim">Ruim</IonSelectOption>
                            <IonSelectOption value="muito ruim">Muito ruim</IonSelectOption>
                            </IonSelect> )} control={control} name={"sleepQual"}/>
                         </IonItem>

                         <IonList>

                         <IonLabel className="questions">Como foram suas rotinas de alimentação nas últimas duas semanas?</IonLabel>
                         <IonItem>
                            

                            <Controller render={({onChange}) => (
                            <IonSelect placeholder="Por favor, selecione..." value={rotinaAlimento} onIonChange={(e) => {setRotinaAlimento(e.detail.value);
                                if (e.detail.value != undefined) 
                                props.setState('feedReg', e.detail.value )}}>
                            <IonSelectOption value="muitoIrregulares">Muito irregulares</IonSelectOption>
                            <IonSelectOption value="irregulares">Irregulares</IonSelectOption>
                            <IonSelectOption value="regulares">Regulares</IonSelectOption>
                            <IonSelectOption value="muitoRegulares">Muito regulares</IonSelectOption>
                            </IonSelect> )} control={control} name="feedReg"/>
                         </IonItem>

                         {/*REGULARES OU MUITO REGULARES*/}

                         {((rotinaAlimento === "regulares") || (rotinaAlimento === "muitoRegulares")) ?

                         <IonItem>
                             <IonLabel className="questions">Em que horário, em média, nas últimas duas semanas, você se alimentou pela primeira vez no dia, nos dias de trabalho ou de semana?</IonLabel>
                             <Controller render={({onChange}) => (
                             <IonDatetime display-format="h:mm A" picker-format="h:mm A" onIonChange={(e) => {
                                console.log(e);
                                onChange(e.detail.value);
                                if (e.detail.value != undefined) 
                                props.setState('feedStartWD', e.detail.value )
                            }}></IonDatetime> )} control={control} name="feedStartWD"/>
                         </IonItem> :null }

                         {((rotinaAlimento === "regulares") || (rotinaAlimento === "muitoRegulares")) ?
                         <IonItem>
                             <IonLabel className="questions">Em que horário, em média, você se alimentou pela última vez no dia, nas últimas duas semanas?</IonLabel>
                             <Controller render={({onChange}) => (
                             <IonDatetime display-format="h:mm A" picker-format="h:mm A"  onIonChange={(e) => {
                                console.log(e);
                                onChange(e.detail.value);
                                if (e.detail.value != undefined) 
                                props.setState('feedEndWD', e.detail.value )
                            }}></IonDatetime> )} control={control} name="feedEndWD"/>
                         </IonItem>: null} 

                         </IonList>

                         <IonLabel className="questions">Seus horários de alimentação foram diferentes em dias de trabalho comparados a dias livres (ou em dias de semana comparados a fins de semana) nas últimas duas semanas?</IonLabel>
                         <IonItem>
                           
                            <Controller render={({onChange}) => (
                            <IonRadioGroup value={horarioAlimento} onIonChange={(e) => {setHorarioAlimento(e.detail.value);
                                if (e.detail.value != undefined) 
                                props.setState('feedfdyn', e.detail.value )}}>

                                <IonItem>
                                <IonLabel>Sim</IonLabel>
                                <IonRadio color="primary" value="sim"></IonRadio>
                                </IonItem>
                               
                                <IonItem>
                                <IonLabel>Não</IonLabel>
                                <IonRadio color="primary" value="não"></IonRadio>
                                </IonItem>
                               
                            </IonRadioGroup> )} control={control} name={"feedfdyn"}/>
                        </IonItem>

                        {((rotinaAlimento === "regulares") || (rotinaAlimento === "muitoRegulares") || (horarioAlimento === "sim")) ?
                         <IonItem>
                             <IonLabel className="questions">Em que horário, em média, nas últimas duas semanas, você se alimentou pela primeira vez no dia, nos dias livres ou fins de semana?</IonLabel>
                             <Controller render={({onChange}) => (
                             <IonDatetime display-format="h:mm A" picker-format="h:mm A" onIonChange={(e) => {
                                console.log(e);
                                onChange(e.detail.value);
                                if (e.detail.value != undefined) 
                                props.setState('feedStart', e.detail.value )
                            }}></IonDatetime> )} control={control} name={"feedStart"}/>
                         </IonItem>: null} 

                         {((rotinaAlimento === "regulares") || (rotinaAlimento === "muitoRegulares") || (horarioAlimento === "sim")) ?
                         <IonItem>
                             <IonLabel className="questions">Em que horário, em média, nas últimas duas semanas, você se alimentou pela última vez no dia, nos dias livres ou fins de semana?</IonLabel>
                             <Controller render={({onChange}) => (
                             <IonDatetime display-format="h:mm A" picker-format="h:mm A" onIonChange={(e) => {
                                console.log(e);
                                onChange(e.detail.value);
                                if (e.detail.value != undefined) 
                                props.setState('feedEnd', e.detail.value )
                            }}></IonDatetime> )} control={control} name={"feedEnd"}/>
                         </IonItem>: null} 

                         <IonLabel className="questions">Nas últimas duas semanas, você comeu lanches ao longo do dia, em média: </IonLabel>
                        <IonItem>
                           

                            <Controller render = {({onChange}) => (

                            <IonList>
                                <IonItem>
                                <IonCheckbox color="primary" value= {props.getState("snacks", "")} onIonChange={(e)=> {
                                console.log(e);
                                onChange(e.detail.value);
                                if (e.detail.value != undefined) 
                                props.setState('snacks', 'nenhuma vez' )  }}></IonCheckbox>
                                <IonLabel>Nenhuma vez</IonLabel>
                                </IonItem>

                                <IonItem>
                                <IonCheckbox color="primary" value= {props.getState("snacks", "")} onIonChange={(e)=> {
                                console.log(e);
                                onChange(e.detail.value);
                                if (e.detail.value != undefined) 
                                props.setState('snacks', 'uma vez' )  }}></IonCheckbox>
                                <IonLabel>Uma vez</IonLabel>
                                </IonItem>
                                
                                <IonItem>
                                <IonCheckbox color="primary" value= {props.getState("snacks", "")} onIonChange={(e)=> {
                                console.log(e);
                                onChange(e.detail.value);
                                if (e.detail.value != undefined) 
                                props.setState('snacks', 'duas vezes' )  }}></IonCheckbox>
                                <IonLabel>Duas vezes</IonLabel>
                                </IonItem>

                                <IonItem>
                                <IonCheckbox color="primary"value= {props.getState("snacks", "")} onIonChange={(e)=> {
                                console.log(e);
                                onChange(e.detail.value);
                                if (e.detail.value != undefined) 
                                props.setState('snacks', 'três vezes' )  }}></IonCheckbox>
                                <IonLabel>Três vezes</IonLabel>
                                </IonItem>

                                <IonItem>
                                <IonCheckbox color="primary" value= {props.getState("snacks", "")} onIonChange={(e)=> {
                                console.log(e);
                                onChange(e.detail.value);
                                if (e.detail.value != undefined) 
                                props.setState('snacks', 'quatro vezes' )  }}></IonCheckbox>
                                <IonLabel>Quatro vezes</IonLabel>
                                </IonItem>
                                
                                <IonItem>
                                <IonCheckbox color="primary" value= {props.getState("snacks", "")} onIonChange={(e)=> {
                                console.log(e);
                                onChange(e.detail.value);
                                if (e.detail.value != undefined) 
                                props.setState('snacks', 'cinco vezes ou mais' )  }}></IonCheckbox>
                                <IonLabel>Cinco vezes ou mais</IonLabel>
                                </IonItem>

                             </IonList> )} control={control} name={"snacks"}/>
                            </IonItem>

                            <IonLabel className="questions">Com que frequência você praticou hobbies nas duas últimas semanas?</IonLabel>
                        <IonItem>
                           
                            <Controller render={({onChange}) => (
                            <IonSelect placeholder="Por favor, selecione..."  onIonChange={(e)=> {
                                console.log(e);
                                onChange(e.detail.value);
                                if (e.detail.value != undefined) {
                                props.setState('hobbies', e.detail.value )} }}>
                            <IonSelectOption value="nenhuma vez">Nenhuma vez</IonSelectOption>
                            <IonSelectOption value="em menos da metade dos dias">Em menos da metade dos dias</IonSelectOption>
                            <IonSelectOption value="em mais da metade dos dias">Em mais da metade dos dias</IonSelectOption>
                            <IonSelectOption value="todos os dias">Todos os dias</IonSelectOption>
                            </IonSelect> )} control={control} name={"hobbiesFreq"}/>
                         </IonItem>

                         <IonList>
                         <IonLabel className="questions">Você praticou atividade física nas duas últimas semanas?</IonLabel>
                         <IonItem>
                            

                            <Controller render={({onChange}) => (
                            
                            <IonRadioGroup value={atividadeFisica} onIonChange={(e) => {setAtividadeFisica(e.detail.value); 
                                if (e.detail.value != undefined) {
                                props.setState('exercise', e.detail.value )}}}>

                                <IonItem>
                                <IonLabel>Sim</IonLabel>
                                <IonRadio color="primary" value="sim" ></IonRadio>
                                </IonItem>
                               
                                <IonItem>
                                <IonLabel>Não</IonLabel>
                                <IonRadio color="primary" value="não"></IonRadio>
                                </IonItem>
                               
                            </IonRadioGroup> )} control={control} name={"exercise"}/>
                        </IonItem> 


                        {/*ATIVIDADE FÍSICA -> SIM */}

                        {atividadeFisica == "sim" ? 
                        <IonItem>
                            <IonLabel className="questions">Com que frequência você praticou exercícios?</IonLabel>
                            <Controller render={({onChange}) => (
                            <IonSelect placeholder="Por favor, selecione..." onIonChange={(e)=> {
                                console.log(e);
                                onChange(e.detail.value);
                                if (e.detail.value != undefined) {
                                props.setState('exerciseFreq', e.detail.value )} }}>
                            <IonSelectOption value="1 vez por semana">1 vez por semana</IonSelectOption>
                            <IonSelectOption value="2 vezes por semana">2 vezes por semana</IonSelectOption>
                            <IonSelectOption value="3 vezes por semana">3 vezes por semana</IonSelectOption>
                            <IonSelectOption value="4 vezes por semana">4 vezes por semana</IonSelectOption>
                            <IonSelectOption value="5 vezes por semana">5 vezes por semana</IonSelectOption>
                            <IonSelectOption value="6 vezes por semana">6 vezes por semana</IonSelectOption>
                            <IonSelectOption value="7 vezes por semana">7 vezes por semana</IonSelectOption>
                            <IonSelectOption value="menos de 1 vez por semana">menos de 1 vezes por semana</IonSelectOption>
                            </IonSelect> )} control={control} name={"exerciseFreq"}/>
                         </IonItem>:null }

                         {atividadeFisica === "sim" ?
                         <IonItem>
                            <IonLabel className="questions">Quão regulares, nas últimas duas semanas, foram os horários que praticou exercício?</IonLabel>
                            <Controller render={({onChange}) => (
                            <IonSelect placeholder="Por favor, selecione..." value={horarioAtividadeFisica} onIonChange={(e) => {setHorarioAtividadeFisica(e.detail.value);
                                if (e.detail.value != undefined) {
                                props.setState('exerciseReg', e.detail.value )}}}>
                            <IonSelectOption value="muitoIrregulares">Muito irregulares</IonSelectOption>
                            <IonSelectOption value="irregulares">Irregulares</IonSelectOption>
                            <IonSelectOption value="regulares">Regulares</IonSelectOption>
                            <IonSelectOption value="muitoRegulares">Muito regulares</IonSelectOption>
                            </IonSelect> )} control={control} name={"exerciseReg"} />
                          </IonItem>:null }

                        {atividadeFisica === "sim" ? 
                         <IonItem>
                            <IonLabel className="questions">Qual foi, nas últimas duas semanas, a duração da sua atividade física em média?</IonLabel>
                            <Controller render={({onChange}) => (
                            <IonSelect placeholder="Por favor, selecione..." onIonChange={(e)=> {
                                console.log(e);
                                onChange(e.detail.value);
                                if (e.detail.value != undefined) {
                                props.setState('exerciseDur', e.detail.value )} }}>
                            <IonSelectOption value="menos de 1 hora">Menos de 1 hora</IonSelectOption>
                            <IonSelectOption value="1 hora">1 hora</IonSelectOption>
                            <IonSelectOption value="entre 1 e 2 horas">Entre 1 e 2 horas</IonSelectOption>
                            <IonSelectOption value="mais de 2 horas">Mais de 2 horas</IonSelectOption>
                            </IonSelect> )} control={control} name={"exerciseDur"} />
                         </IonItem>:null }
                         </IonList>

                         {/*ATIVIDADE FÍSICA REGULAR -> */}

                         {((atividadeFisica === "sim") && ((horarioAtividadeFisica === "regulares") || (horarioAtividadeFisica === "muitoRegulares")) )? 

                         <IonItem>
                             <IonLabel className="questions">Em que horário, em média, nas últimas duas semanas, você começou a praticar exercícios?</IonLabel>
                             <Controller render={({onChange}) => (
                             <IonDatetime display-format="h:mm A" picker-format="h:mm A" onIonChange={(e)=> {
                                console.log(e);
                                onChange(e.detail.value);
                                if (e.detail.value != undefined) {
                                props.setState('exerciseTiming', e.detail.value )} }}></IonDatetime> )} control={control} name={"exerciseTiming"} />
                         </IonItem> :null}


                        <IonList>
                        <IonLabel className="questions">Com que frequência você se expôs a luz natural (em um ambiente aberto) nas últimas duas semanas?</IonLabel>

                         <IonItem>
                            
                            <Controller render={({onChange}) => (  
                            <IonSelect placeholder="Por favor, selecione..." value={frequenciaLuzNatural} onIonChange={(e) => {setFrequenciaLuzNatural(e.detail.value);
                                if (e.detail.value != undefined) {
                                props.setState('lightFreq', e.detail.value )}}}>
                            <IonSelectOption value="nunca">Nunca</IonSelectOption>
                            <IonSelectOption value="menosMetade">Em menos da metade dos dias</IonSelectOption>
                            <IonSelectOption value="maisMetade">Em mais da metade dos dias</IonSelectOption>
                            <IonSelectOption value="todosDias">Todos os dias</IonSelectOption>
                            </IonSelect> )} control={control} name={"lightFreq"}/>
                         </IonItem>

                        {/*LUZ -> QUALQUER RESPOSTA QUE NÃO SEJA NUNCA */}


                        {((frequenciaLuzNatural === "menosMetade") || (frequenciaLuzNatural === "maisMetade") || (frequenciaLuzNatural === "todosDias")) ? 
                        <IonItem>
                            <IonLabel className="questions">Nesses dias, a quantas horas de luz natural (em um ambiente aberto) você se expôs em média?</IonLabel>
                            <Controller render={({onChange}) => (  
                            <IonSelect placeholder="Por favor, selecione..." onIonChange={(e)=> {
                                console.log(e);
                                onChange(e.detail.value);
                                if (e.detail.value != undefined) {
                                props.setState('light', e.detail.value )}} }>
                            <IonSelectOption value="não me exponho a luz natural">Não me exponho a luz natural</IonSelectOption>
                            <IonSelectOption value="até meia hora">Até meia hora</IonSelectOption>
                            <IonSelectOption value="até 1 hora">Até 1 hora</IonSelectOption>
                            <IonSelectOption value="até 2 horas">Até 2 horas</IonSelectOption>
                            <IonSelectOption value="até 4 horas">Até 4 horas</IonSelectOption>
                            <IonSelectOption value="mais de 4 horas">Mais de 4 horas</IonSelectOption>
                            </IonSelect> )} control={control} name={"light"}/>
                         </IonItem>:null }

                         {((frequenciaLuzNatural === "menosMetade") || (frequenciaLuzNatural === "maisMetade") || (frequenciaLuzNatural === "todosDias")) ? 
                         <IonItem>
                            <IonLabel className="questions">Quão regulares foram os horários em que se expõe à luz natural?</IonLabel>
                            <Controller render={({onChange}) => (  
                            <IonSelect placeholder="Por favor, selecione..." onIonChange={(e)=> {
                                console.log(e);
                                onChange(e.detail.value);
                                if (e.detail.value != undefined) {
                                props.setState('lightReg', e.detail.value )}} }>
                            <IonSelectOption value="muito irregulares">Muito irregulares</IonSelectOption>
                            <IonSelectOption value="irregulares">Irregulares</IonSelectOption>
                            <IonSelectOption value="regulares">Regulares</IonSelectOption>
                            <IonSelectOption value="muito regulares">Muito regulares</IonSelectOption>
                            </IonSelect> )} control={control} name={"lightReg"}/>
                         </IonItem>:null}

                        <IonList>
                         {((frequenciaLuzNatural === "menosMetade") || (frequenciaLuzNatural === "maisMetade") || (frequenciaLuzNatural === "todosDias")) ? 
                         <IonItem>
                            <IonLabel className="questions">Seus horários de expor à luz foram diferentes em dias de trabalho comparados a dias livres (ou em dias de semana comparados a fins de semana)?</IonLabel>
                            <Controller render={({onChange}) => (
                            <IonRadioGroup value={horarioLuzNatural} onIonChange={(e) => { setHorarioLuzNatural(e.detail.value);
                                if (e.detail.value != undefined) {
                                    props.setState('lightwdfdyd', e.detail.value )}} }>

                                <IonItem>
                                <IonLabel>Sim</IonLabel>
                                <IonRadio color="primary" value="sim"></IonRadio>
                                </IonItem>
                               
                                <IonItem>
                                <IonLabel>Não</IonLabel>
                                <IonRadio color="primary" value="não"></IonRadio>
                                </IonItem>
                               
                            </IonRadioGroup> )} control={control} name={"lightwdfdyd"}/>
                        </IonItem> :null}

                        {/*HORÁRIOS DE LUZ REGULARES -> SIM */}

                        {(((frequenciaLuzNatural === "menosMetade") || (frequenciaLuzNatural === "maisMetade") || (frequenciaLuzNatural === "todosDias")) && (horarioLuzNatural === "sim")) ? 
                        <IonItem>
                             <IonLabel className="questions">Nas últimas duas semanas, em que horário, em média, você se expôs à luz natural, nos dias trabalho ou de semana?</IonLabel>
                             <Controller render={({onChange}) => (
                             <IonDatetime display-format="h:mm A" picker-format="h:mm A" onIonChange={(e)=> {
                                console.log(e);
                                onChange(e.detail.value);
                                if (e.detail.value != undefined) {
                                props.setState('lightTiming', e.detail.value )}} }></IonDatetime> )} control={control} name={"lightTiming"}/>
                         </IonItem>:null}

                         {(((frequenciaLuzNatural === "menosMetade") || (frequenciaLuzNatural === "maisMetade") || (frequenciaLuzNatural === "todosDias")) && (horarioLuzNatural === "sim")) ?
                         <IonItem>
                             <IonLabel className="questions">Nas últimas duas semanas, em que horário, em média, você se expôs à luz natural, nos dias livres ou fins de semana?</IonLabel>
                             <Controller render={({onChange}) => (
                             <IonDatetime display-format="h:mm A" picker-format="h:mm A" onIonChange={(e)=> {
                                console.log(e);
                                onChange(e.detail.value);
                                if (e.detail.value != undefined) {
                                props.setState('lightTimingWD', e.detail.value )}} }></IonDatetime> )} control={control} name={"lightTimingWD"}/>
                         </IonItem>:null}
                        {/*HORÁRIOS DE LUZ REGULARES -> NÃO */}

                        {(((frequenciaLuzNatural === "menosMetade") || (frequenciaLuzNatural === "maisMetade") || (frequenciaLuzNatural === "todosDias")) && (horarioLuzNatural === "não")) ?
                        <IonItem>
                             <IonLabel className="questions">Em que horário, em média, você se expôs à luz natural, nas últimas duas semanas?</IonLabel>
                             <Controller render={({onChange}) => (
                             <IonDatetime display-format="h:mm A" picker-format="h:mm A" onIonChange={(e)=> {
                                console.log(e);
                                onChange(e.detail.value);
                                if (e.detail.value != undefined) {
                                props.setState('lightTimingFD', e.detail.value )}} }></IonDatetime> )} control={control} name={"lightTimingFD"}/>
                         </IonItem> :null} </IonList>
                         </IonList>
                         <IonButton onClick={props.prev} size="large">Anterior</IonButton>
                <IonButton onClick={props.next} size="large" className={"btnProximo"} >Próximo</IonButton>
                   
                   </div>
                </form>
                
            </div>
            </IonContent>
        )

}

export default Step6;