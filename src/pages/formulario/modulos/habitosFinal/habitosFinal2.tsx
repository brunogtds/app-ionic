import React from "react";
import {StepComponentProps} from "react-step-builder";

import {IonItem, IonLabel, IonInput, IonRadioGroup, IonRadio, IonSelect, IonSelectOption, IonButton, IonCheckbox, IonList, IonDatetime, IonText} from "@ionic/react";
import { IonContent} from '@ionic/react';
 
import '../../Forms.css';

import { useForm, Controller } from "react-hook-form";
import {useState} from 'react';

import { IonProgressBar} from '@ionic/react';

const HabitosFinal2 = (props: StepComponentProps) => {

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
                                props.setState('sleepRegFinal', e.detail.value )
                            }}>
                            <IonSelectOption value="muito irregulares">Muito irregulares</IonSelectOption>
                            <IonSelectOption value="irregulares">Irregulares</IonSelectOption>
                            <IonSelectOption value="regulares">Regulares</IonSelectOption>
                            <IonSelectOption value="muito regulares">Muito regulares</IonSelectOption>
                            </IonSelect> )} control={control} name={"sleepRegFinal"} rules={{required:true}}/>
                            {errors.sleepRegFinal && <IonText color="danger">Campo obrigatório.</IonText>}
                         </IonItem>

                         <IonLabel className="questions">Como você classificaria a qualidade do seu sono nas últimas duas semanas?</IonLabel>
                         <IonItem>
                           
                            <Controller render={({onChange}) => (
                            <IonSelect placeholder="Por favor, selecione..." onIonChange={(e) => {
                                console.log(e);
                                onChange(e.detail.value);
                                if (e.detail.value != undefined) 
                                props.setState('sleepQualFinal', e.detail.value )
                            }}>
                            <IonSelectOption value="muito boa">Muito boa</IonSelectOption>
                            <IonSelectOption value="boa">Boa</IonSelectOption>
                            <IonSelectOption value="ruim">Ruim</IonSelectOption>
                            <IonSelectOption value="muito ruim">Muito ruim</IonSelectOption>
                            </IonSelect> )} control={control} name={"sleepQualFinal"} rules={{required:true}}/>
                            {errors.sleepQualFinal && <IonText color="danger">Campo obrigatório.</IonText>}
                         </IonItem>

                         <IonLabel className="questions">Como foram suas rotinas de alimentação nas últimas duas semanas?</IonLabel>
                         <IonList>

                         
                         <IonItem>
                            

                            <Controller render={({onChange}) => (
                            <IonSelect placeholder="Por favor, selecione..." value={rotinaAlimento} onIonChange={(e) => {setRotinaAlimento(e.detail.value);
                                onChange(e.detail.value);
                                if (e.detail.value != undefined) 
                                props.setState('feedRegFinal', e.detail.value )}}>
                            <IonSelectOption value="muitoIrregulares">Muito irregulares</IonSelectOption>
                            <IonSelectOption value="irregulares">Irregulares</IonSelectOption>
                            <IonSelectOption value="regulares">Regulares</IonSelectOption>
                            <IonSelectOption value="muitoRegulares">Muito regulares</IonSelectOption>
                            </IonSelect> )} control={control} name="feedRegFinal" rules={{required:true}}/>
                            {errors.feedRegFinal && <IonText color="danger">Campo obrigatório.</IonText>}
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
                                props.setState('feedStartWDFinal', e.detail.value )
                            }}></IonDatetime> )} control={control} name="feedStartWDFinal" rules={{required:true}}/>
                            {errors.feedStartWDFinal && <IonText color="danger">Campo obrigatório.</IonText>}
                         </IonItem> :null }

                         {((rotinaAlimento === "regulares") || (rotinaAlimento === "muitoRegulares")) ?
                         <IonItem>
                             <IonLabel className="questions">Em que horário, em média, nas últimas duas semanas, você se alimentou pela última vez no dia, nos dias de trabalho ou de semana?</IonLabel>
                             <Controller render={({onChange}) => (
                             <IonDatetime display-format="h:mm A" picker-format="h:mm A"  onIonChange={(e) => {
                                console.log(e);
                                onChange(e.detail.value);
                                if (e.detail.value != undefined) 
                                props.setState('feedEndWDFinal', e.detail.value )
                            }}></IonDatetime> )} control={control} name="feedEndWDFinal" rules={{required:true}}/>
                            {errors.feedEndWDFinal && <IonText color="danger">Campo obrigatório.</IonText>}
                         </IonItem>: null} 

                         {((rotinaAlimento === "regulares") || (rotinaAlimento === "muitoRegulares")) ?
                         <IonItem>
                             <IonLabel className="questions">Em que horário, em média, nas últimas duas semanas, você tem se alimentado pela primeira vez no dia, nos dias livres ou fins de semana?</IonLabel>
                             <Controller render={({onChange}) => (
                             <IonDatetime display-format="h:mm A" picker-format="h:mm A"  onIonChange={(e) => {
                                console.log(e);
                                onChange(e.detail.value);
                                if (e.detail.value != undefined) 
                                props.setState('feedStartFDFinal', e.detail.value )
                            }}></IonDatetime> )} control={control} name="feedStartFDFinal" rules={{required:true}}/>
                            {errors.feedStartFDFinal && <IonText color="danger">Campo obrigatório.</IonText>}
                         </IonItem>: null} 

                         {((rotinaAlimento === "regulares") || (rotinaAlimento === "muitoRegulares")) ?
                         <IonItem>
                             <IonLabel className="questions">Em que horário, em média, nas últimas duas semanas, você se alimentou pela última vez no dia, nos dias livres ou fins de semana?</IonLabel>
                             <Controller render={({onChange}) => (
                             <IonDatetime display-format="h:mm A" picker-format="h:mm A"  onIonChange={(e) => {
                                console.log(e);
                                onChange(e.detail.value);
                                if (e.detail.value != undefined) 
                                props.setState('feedEndFDFinal', e.detail.value )
                            }}></IonDatetime> )} control={control} name="feedEndFDFinal" rules={{required:true}}/>
                            {errors.feedEndFDFinal && <IonText color="danger">Campo obrigatório.</IonText>}
                         </IonItem>: null} 


                         </IonList>

                         <IonLabel className="questions">Seus horários de alimentação foram diferentes em dias de trabalho comparados a dias livres (ou em dias de semana comparados a fins de semana) nas últimas duas semanas?</IonLabel>
                         <IonItem>
                           
                            <Controller render={({onChange}) => (
                            <IonRadioGroup value={horarioAlimento} onIonChange={(e) => {setHorarioAlimento(e.detail.value);
                                onChange(e.detail.value);
                                if (e.detail.value != undefined) 
                                props.setState('feedFDYNFinal', e.detail.value )}}>

                                <IonItem>
                                <IonLabel>Sim</IonLabel>
                                <IonRadio className={"radio-options"} color="primary" value="sim"></IonRadio>
                                </IonItem>
                               
                                <IonItem>
                                <IonLabel>Não</IonLabel>
                                <IonRadio className={"radio-options"} color="primary" value="não"></IonRadio>
                                </IonItem>
                               
                            </IonRadioGroup> )} control={control} name={"feedFDYNFinal"} rules={{required:true}}/>
                            {errors.feedFDYNFinal && <IonText color="danger">Campo obrigatório.</IonText>}
                        </IonItem>

                        {((rotinaAlimento === "regulares") || (rotinaAlimento === "muitoRegulares") || (horarioAlimento === "sim")) ?
                         <IonItem>
                             <IonLabel className="questions">Em que horário, em média, você se alimentou pela primeira vez no dia, nas últimas duas semanas?</IonLabel>
                             <Controller render={({onChange}) => (
                             <IonDatetime display-format="h:mm A" picker-format="h:mm A" onIonChange={(e) => {
                                console.log(e);
                                onChange(e.detail.value);
                                if (e.detail.value != undefined) 
                                props.setState('feedStartFinal', e.detail.value )
                            }}></IonDatetime> )} control={control} name={"feedStartFinal"} rules={{required:true}}/>
                            {errors.feedStartFinal && <IonText color="danger">Campo obrigatório.</IonText>}
                         </IonItem>: null} 

                         {((rotinaAlimento === "regulares") || (rotinaAlimento === "muitoRegulares") || (horarioAlimento === "sim")) ?
                         <IonItem>
                             <IonLabel className="questions">Em que horário, em média, você se alimentou pela última vez no dia, nas últimas duas semanas?</IonLabel>
                             <Controller render={({onChange}) => (
                             <IonDatetime display-format="h:mm A" picker-format="h:mm A" onIonChange={(e) => {
                                console.log(e);
                                onChange(e.detail.value);
                                if (e.detail.value != undefined) 
                                props.setState('feedEndFinal', e.detail.value )
                            }}></IonDatetime> )} control={control} name={"feedEndFinal"} rules={{required:true}}/>
                            {errors.feedEndFinal && <IonText color="danger">Campo obrigatório.</IonText>}
                         </IonItem>: null} 

                         <IonLabel className="questions">Nas últimas duas semanas, você comeu lanches ao longo do dia, em média: </IonLabel>
                        <IonItem>
                           

                            <Controller render = {({onChange}) => (

                            <IonRadioGroup onIonChange={(e) => { 
                                    onChange(e.detail.value);
                                    if (e.detail.value != undefined) 
                                    props.setState('snacksFinal', e.detail.value )}}>

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

                                </IonRadioGroup>)} control={control} name={"snacksFinal"} rules={{required:true}}/>
                                {errors.snacksFinal && <IonText color="danger">Campo obrigatório.</IonText>}
                            </IonItem>

                            

                <IonButton onClick={props.prev} size="large" fill="clear">Anterior</IonButton>
                <IonButton  disabled={formState.isValid === false} onClick={props.next} size="large" className={"btnProximo"} fill="clear">Próximo</IonButton>
                   
                   </div>
                </form>
                
            </div>
            </IonContent>
        )

}

export default HabitosFinal2;