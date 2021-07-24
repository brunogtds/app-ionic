import React from "react";
import {StepComponentProps} from "react-step-builder";

import {IonItem, IonLabel, IonInput, IonRadioGroup, IonRadio, IonSelect, IonSelectOption, IonButton, IonCheckbox, IonList, IonDatetime, IonText} from "@ionic/react";
import { IonContent} from '@ionic/react';
 
import '../../Forms.css';

import { useForm, Controller } from "react-hook-form";
import {useState} from 'react';

import { IonProgressBar} from '@ionic/react';

const HabitosPost2 = (props: StepComponentProps) => {

    const {control, watch, handleSubmit, errors, formState} = useForm({mode: "onChange"});
    
    const [rotinaAlimento, setRotinaAlimento] = useState();
    const [horarioAlimento, setHorarioAlimento] = useState();
    const [atividadeFisica, setAtividadeFisica]= useState();
    const [horarioAtividadeFisica, setHorarioAtividadeFisica]= useState();
    const [frequenciaLuzNatural, setFrequenciaLuzNatural] = useState();
    const [horarioLuzNatural, setHorarioLuzNatural] = useState();

        return (
            <IonContent fullscreen color="light">
                          
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
                                props.setState('sleepRegPost14', e.detail.value )
                            }}>
                            <IonSelectOption value="muito irregulares">Muito irregulares</IonSelectOption>
                            <IonSelectOption value="irregulares">Irregulares</IonSelectOption>
                            <IonSelectOption value="regulares">Regulares</IonSelectOption>
                            <IonSelectOption value="muito regulares">Muito regulares</IonSelectOption>
                            </IonSelect> )} control={control} name={"sleepRegPost14"} rules={{required:true}}/>
                            {errors.sleepRegPost14 && <IonText color="danger">Campo obrigatório.</IonText>}
                         </IonItem>

                         <IonLabel className="questions">Como você classificaria a qualidade do seu sono nas últimas duas semanas?</IonLabel>
                         <IonItem>
                           
                            <Controller render={({onChange}) => (
                            <IonSelect placeholder="Por favor, selecione..." onIonChange={(e) => {
                                console.log(e);
                                onChange(e.detail.value);
                                if (e.detail.value != undefined) 
                                props.setState('sleepQualPost14', e.detail.value )
                            }}>
                            <IonSelectOption value="muito boa">Muito boa</IonSelectOption>
                            <IonSelectOption value="boa">Boa</IonSelectOption>
                            <IonSelectOption value="ruim">Ruim</IonSelectOption>
                            <IonSelectOption value="muito ruim">Muito ruim</IonSelectOption>
                            </IonSelect> )} control={control} name={"sleepQualPost14"} rules={{required:true}}/>
                            {errors.sleepQualPost14 && <IonText color="danger">Campo obrigatório.</IonText>}
                         </IonItem>

                         <IonLabel className="questions">Como foram suas rotinas de alimentação nas últimas duas semanas?</IonLabel>
                         <IonList>

                         
                         <IonItem>
                            

                            <Controller render={({onChange}) => (
                            <IonSelect placeholder="Por favor, selecione..." value={rotinaAlimento} onIonChange={(e) => {setRotinaAlimento(e.detail.value);
                                onChange(e.detail.value);
                                if (e.detail.value != undefined) 
                                props.setState('feedRegPost14', e.detail.value )}}>
                            <IonSelectOption value="muitoIrregulares">Muito irregulares</IonSelectOption>
                            <IonSelectOption value="irregulares">Irregulares</IonSelectOption>
                            <IonSelectOption value="regulares">Regulares</IonSelectOption>
                            <IonSelectOption value="muitoRegulares">Muito regulares</IonSelectOption>
                            </IonSelect> )} control={control} name="feedRegPost14" rules={{required:true}}/>
                            {errors.feedRegPost14 && <IonText color="danger">Campo obrigatório.</IonText>}
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
                                props.setState('feedStartWDPost14', e.detail.value )
                            }}></IonDatetime> )} control={control} name="feedStartWDPost14" rules={{required:true}}/>
                            {errors.feedStartWDPost14 && <IonText color="danger">Campo obrigatório.</IonText>}
                         </IonItem> :null }

                         {((rotinaAlimento === "regulares") || (rotinaAlimento === "muitoRegulares")) ?
                         <IonItem>
                             <IonLabel className="questions">Em que horário, em média, nas últimas duas semanas, você se alimentou pela última vez no dia, nos dias de trabalho ou de semana?</IonLabel>
                             <Controller render={({onChange}) => (
                             <IonDatetime display-format="h:mm A" picker-format="h:mm A"  onIonChange={(e) => {
                                console.log(e);
                                onChange(e.detail.value);
                                if (e.detail.value != undefined) 
                                props.setState('feedEndWDPost14', e.detail.value )
                            }}></IonDatetime> )} control={control} name="feedEndWDPost14" rules={{required:true}}/>
                            {errors.feedEndWDPost14 && <IonText color="danger">Campo obrigatório.</IonText>}
                         </IonItem>: null} 

                         {((rotinaAlimento === "regulares") || (rotinaAlimento === "muitoRegulares")) ?
                         <IonItem>
                             <IonLabel className="questions">Em que horário, em média, nas últimas duas semanas, você tem se alimentado pela primeira vez no dia, nos dias livres ou fins de semana?</IonLabel>
                             <Controller render={({onChange}) => (
                             <IonDatetime display-format="h:mm A" picker-format="h:mm A"  onIonChange={(e) => {
                                console.log(e);
                                onChange(e.detail.value);
                                if (e.detail.value != undefined) 
                                props.setState('feedStartFDPost14', e.detail.value )
                            }}></IonDatetime> )} control={control} name="feedStartFDPost14" rules={{required:true}}/>
                            {errors.feedStartFDPost14 && <IonText color="danger">Campo obrigatório.</IonText>}
                         </IonItem>: null} 

                         {((rotinaAlimento === "regulares") || (rotinaAlimento === "muitoRegulares")) ?
                         <IonItem>
                             <IonLabel className="questions">Em que horário, em média, nas últimas duas semanas, você se alimentou pela última vez no dia, nos dias livres ou fins de semana?</IonLabel>
                             <Controller render={({onChange}) => (
                             <IonDatetime display-format="h:mm A" picker-format="h:mm A"  onIonChange={(e) => {
                                console.log(e);
                                onChange(e.detail.value);
                                if (e.detail.value != undefined) 
                                props.setState('feedEndFDPost14', e.detail.value )
                            }}></IonDatetime> )} control={control} name="feedEndFDPost14" rules={{required:true}}/>
                            {errors.feedEndFDPost14 && <IonText color="danger">Campo obrigatório.</IonText>}
                         </IonItem>: null} 


                         </IonList>

                         <IonLabel className="questions">Seus horários de alimentação foram diferentes em dias de trabalho comparados a dias livres (ou em dias de semana comparados a fins de semana) nas últimas duas semanas?</IonLabel>
                         <IonItem>
                           
                            <Controller render={({onChange}) => (
                            <IonRadioGroup value={horarioAlimento} onIonChange={(e) => {setHorarioAlimento(e.detail.value);
                                onChange(e.detail.value);
                                if (e.detail.value != undefined) 
                                props.setState('feedFDYNPost14', e.detail.value )}}>

                                <IonItem>
                                <IonLabel>Sim</IonLabel>
                                <IonRadio className={"radio-options"} color="primary" value="sim"></IonRadio>
                                </IonItem>
                               
                                <IonItem>
                                <IonLabel>Não</IonLabel>
                                <IonRadio className={"radio-options"} color="primary" value="não"></IonRadio>
                                </IonItem>
                               
                            </IonRadioGroup> )} control={control} name={"feedFDYNPost14"} rules={{required:true}}/>
                            {errors.feedFDYNPost14 && <IonText color="danger">Campo obrigatório.</IonText>}
                        </IonItem>

                        {((rotinaAlimento === "regulares") || (rotinaAlimento === "muitoRegulares") || (horarioAlimento === "sim")) ?
                         <IonItem>
                             <IonLabel className="questions">Em que horário, em média, você se alimentou pela primeira vez no dia, nas últimas duas semanas?</IonLabel>
                             <Controller render={({onChange}) => (
                             <IonDatetime display-format="h:mm A" picker-format="h:mm A" onIonChange={(e) => {
                                console.log(e);
                                onChange(e.detail.value);
                                if (e.detail.value != undefined) 
                                props.setState('feedStartPost14', e.detail.value )
                            }}></IonDatetime> )} control={control} name={"feedStartPost14"} rules={{required:true}}/>
                            {errors.feedStartPost14 && <IonText color="danger">Campo obrigatório.</IonText>}
                         </IonItem>: null} 

                         {((rotinaAlimento === "regulares") || (rotinaAlimento === "muitoRegulares") || (horarioAlimento === "sim")) ?
                         <IonItem>
                             <IonLabel className="questions">Em que horário, em média, você se alimentou pela última vez no dia, nas últimas duas semanas?</IonLabel>
                             <Controller render={({onChange}) => (
                             <IonDatetime display-format="h:mm A" picker-format="h:mm A" onIonChange={(e) => {
                                console.log(e);
                                onChange(e.detail.value);
                                if (e.detail.value != undefined) 
                                props.setState('feedEndPost14', e.detail.value )
                            }}></IonDatetime> )} control={control} name={"feedEndPost14"} rules={{required:true}}/>
                            {errors.feedEndPost14 && <IonText color="danger">Campo obrigatório.</IonText>}
                         </IonItem>: null} 

                         <IonLabel className="questions">Nas últimas duas semanas, você comeu lanches ao longo do dia, em média: </IonLabel>
                        <IonItem>
                           

                            <Controller render = {({onChange}) => (

                            <IonRadioGroup onIonChange={(e) => { 
                                    onChange(e.detail.value);
                                    if (e.detail.value != undefined) 
                                    props.setState('snacksPost14', e.detail.value )}}>

                                    <IonItem>
                                    <IonLabel>Nenhuma vez</IonLabel>
                                    <IonRadio className={"radio-options"} color="primary" value="0"></IonRadio>
                                    </IonItem>
                                
                                    <IonItem>
                                    <IonLabel>Uma vez</IonLabel>
                                    <IonRadio className={"radio-options"} color="primary" value="1"></IonRadio>
                                    </IonItem>

                                    <IonItem>
                                    <IonLabel>Duas vezes</IonLabel>
                                    <IonRadio className={"radio-options"} color="primary" value="2"></IonRadio>
                                    </IonItem>

                                    <IonItem>
                                    <IonLabel>Três vezes</IonLabel>
                                    <IonRadio className={"radio-options"} color="primary" value="3"></IonRadio>
                                    </IonItem>

                                    <IonItem>
                                    <IonLabel>Quatro vezes</IonLabel>
                                    <IonRadio className={"radio-options"} color="primary" value="4"></IonRadio>
                                    </IonItem>

                                    <IonItem>
                                    <IonLabel>Cinco vezes ou mais</IonLabel>
                                    <IonRadio className={"radio-options"} color="primary" value="5"></IonRadio>
                                    </IonItem>

                                </IonRadioGroup>)} control={control} name={"snacksPost14"} rules={{required:true}}/>
                                {errors.snacksPost14 && <IonText color="danger">Campo obrigatório.</IonText>}
                            </IonItem>

                            

                <IonButton onClick={props.prev} size="large" fill="clear">Anterior</IonButton>
                <IonButton  disabled={formState.isValid === false} onClick={props.next} size="large" className={"btnProximo"} fill="clear">Próximo</IonButton>
                   
                   </div>
                </form>
                
            </div>
            </IonContent>
        )

}

export default HabitosPost2;