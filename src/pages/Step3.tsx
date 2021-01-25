import React from "react";
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
    IonGrid,
    IonRow,
    IonCol,
    IonItemDivider

  
    
  } from "@ionic/react";
  import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';

  import './Forms.css';

 import { useForm, Controller } from "react-hook-form";
 
 import {useState, ChangeEvent} from 'react';

 import { IonProgressBar} from '@ionic/react';

const Step3 = (props: StepComponentProps) => {

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
            <div>
               
                <form className="ion-padding">

                <IonProgressBar value={0.3} buffer={0.3}></IonProgressBar>

                        <IonList>
                        
                        <IonItem>
                            <IonLabel>Estou em distanciamento social:</IonLabel>

                            <Controller render={({onChange}) => (

                            <IonSelect placeholder="Por favor, selecione..." value={distanciamento} onIonChange={e => setDistanciamento(e.detail.value)}>
                            <IonSelectOption value="todoTempo">Todo o tempo</IonSelectOption>
                            <IonSelectOption value="maiorParte">A maior parte do tempo</IonSelectOption>
                            <IonSelectOption value="menosMetade">Menos da metade do tempo</IonSelectOption>
                            <IonSelectOption value="não">Não estou em distanciamento social</IonSelectOption>
                            </IonSelect> )} control={control} name={"distanciamentoSocial"}/>
                         </IonItem>

                        {((distanciamento == "todoTempo") || (distanciamento == "maiorParte") || (distanciamento == "menosMetade") ) ? 
                         <IonItem>
                            <IonLabel position="floating">Desde que dia você está em distanciamento social (evitando sair de casa)?</IonLabel>

                            <Controller render={({onChange}) => (
                            <IonDatetime placeholder="Selecione data"></IonDatetime> )} control={control} name={"diaDistanciamento"}/>
                        </IonItem>: null }

                        </IonList>

                        <IonList>
                        
                         <IonItem>
                            <IonLabel>Você precisou se isolar em um cômodo em função de COVID-19 ou suspeita?</IonLabel>
                            
                            <Controller render={({onChange}) => (
                            <IonRadioGroup value={isolamento} onIonChange={e => setIsolamento(e.detail.value)}>

                                <IonItem>
                                <IonLabel>Sim</IonLabel>
                                <IonRadio color="primary" value="sim"></IonRadio>
                                </IonItem>
                               
                                <IonItem>
                                <IonLabel>Não</IonLabel>
                                <IonRadio color="primary" value="não"></IonRadio>
                                </IonItem>

                                <IonItem>
                                <IonLabel>Sem resposta</IonLabel>
                                <IonRadio color="primary" value="semResposta"></IonRadio>
                                </IonItem>
                            </IonRadioGroup> )} control={control} name={"isolamento"} />
                        </IonItem>  

                        {/*PRECISOU SE ISOLAR -> SIM */}

                        {isolamento == "sim" ?
                        <IonItem>
                            <IonLabel>Em que mês(meses) você precisou se isolar?</IonLabel>

                            <IonList>

                               
                                <IonItem>
                                <IonCheckbox color="primary"></IonCheckbox>
                                <IonLabel>Fevereiro</IonLabel>
                                </IonItem>

                                <IonItem>
                                <IonCheckbox color="primary"></IonCheckbox>
                                <IonLabel>Março</IonLabel>
                                </IonItem>

                                <IonItem>
                                <IonCheckbox color="primary"></IonCheckbox>
                                <IonLabel>Abril</IonLabel>
                                </IonItem>

                                <IonItem>
                                <IonCheckbox color="primary"></IonCheckbox>
                                <IonLabel>Maio</IonLabel>
                                </IonItem>

                                <IonItem>
                                <IonCheckbox color="primary"></IonCheckbox>
                                <IonLabel>Junho</IonLabel>
                                </IonItem>

                                <IonItem>
                                <IonCheckbox color="primary"></IonCheckbox>
                                <IonLabel>Julho</IonLabel>
                                </IonItem>

                                <IonItem>
                                <IonCheckbox color="primary"></IonCheckbox>
                                <IonLabel>Agosto</IonLabel>
                                </IonItem>

                                <IonItem>
                                <IonCheckbox color="primary"></IonCheckbox>
                                <IonLabel>Setembro</IonLabel>
                                </IonItem>

                                <IonItem>
                                <IonCheckbox color="primary"></IonCheckbox>
                                <IonLabel>Outubro</IonLabel>
                                </IonItem>

                                <IonItem>
                                <IonCheckbox color="primary"></IonCheckbox>
                                <IonLabel>Novembro</IonLabel>
                                </IonItem>

                                <IonItem>
                                <IonCheckbox color="primary"></IonCheckbox>
                                <IonLabel>Dezembro</IonLabel>
                                </IonItem>


                            </IonList> 

                        </IonItem> : null }

                        </IonList>

                        {/*FIM->PRECISOU SE ISOLAR*/}

                        <IonItem>
                            <IonLabel>Quanto você precisa sair para fazer alguma atividade, quanto tempo normalmente fica fora de casa?</IonLabel>

                            <Controller render={({onChange}) => (
                            <IonSelect placeholder="Por favor, selecione..." onIonChange={(e) => {
                                console.log(e);
                                onChange(e.detail.value)
                            }}>
                            <IonSelectOption>Nunca saio de casa</IonSelectOption>
                            <IonSelectOption>Menos de 1 hora</IonSelectOption>
                            <IonSelectOption>Até 2 horas</IonSelectOption>
                            <IonSelectOption>Até 4 horas</IonSelectOption>
                            <IonSelectOption>Até 8 horas</IonSelectOption>
                            <IonSelectOption>Mais de 8 horas</IonSelectOption>
                            </IonSelect> )} control={control} name={"tempoForaCasa"}/>
                         </IonItem>


                         <IonItem>
                            <IonLabel>Sua conexão de internet é: </IonLabel>
                            <Controller render={({onChange}) => (
                            <IonSelect placeholder="Por favor, selecione..." onIonChange={(e) => {
                                console.log(e);
                                onChange(e.detail.value)
                            }}>
                            <IonSelectOption>Muito boa</IonSelectOption>
                            <IonSelectOption>Boa</IonSelectOption>
                            <IonSelectOption>Regular</IonSelectOption>
                            <IonSelectOption>Ruim</IonSelectOption> 
                            
                            </IonSelect> )} control={control} name={"conexãoInternet"}/>
                         </IonItem>

                         
                         <IonItem>
                            <IonLabel>Com quantas pessoas por dia, aproximadamente, você teve contato (online, incluindo mensagens, ou ao vivo) nas últimas duas semanas? </IonLabel>
                           
                            <Controller render={({onChange}) => (
                            <IonSelect placeholder="Por favor, selecione..." onIonChange={(e) => {
                                console.log(e);
                                onChange(e.detail.value)
                            }}>
                            <IonSelectOption>Nenhuma</IonSelectOption>
                            <IonSelectOption>1-5</IonSelectOption>
                            <IonSelectOption>5-10</IonSelectOption>
                            <IonSelectOption>10-15</IonSelectOption>
                            <IonSelectOption>15-20</IonSelectOption>
                            <IonSelectOption>Mais de 20</IonSelectOption>
                            </IonSelect> )} control={control} name={"nPessoasContato"} />
                         </IonItem>

                        <IonList>
                         <IonItem>
                            <IonLabel>Em quantos dias você trabalhou ou estudou nas últimas duas semanas? </IonLabel>
                            <Controller render={({onChange}) => (
                            <IonSelect placeholder="Por favor, selecione..." value={diasTrabalho} onIonChange={e => setDiasTrabalho(e.detail.value)}>
                            <IonSelectOption value="0">0</IonSelectOption>
                            <IonSelectOption value="1">1</IonSelectOption>
                            <IonSelectOption value="2">2</IonSelectOption>
                            <IonSelectOption value="3">3</IonSelectOption>
                            <IonSelectOption value="4">4</IonSelectOption>
                            <IonSelectOption value="5">5</IonSelectOption>
                            <IonSelectOption value="6">6</IonSelectOption>
                            <IonSelectOption value="7">7</IonSelectOption>
                            <IonSelectOption value="8">8</IonSelectOption>
                            <IonSelectOption value="9">9</IonSelectOption>
                            <IonSelectOption value="10">10</IonSelectOption>
                            <IonSelectOption value="11">11</IonSelectOption>
                            <IonSelectOption value="12">12</IonSelectOption>
                            <IonSelectOption value="13">13</IonSelectOption>
                            <IonSelectOption value="14">14</IonSelectOption>
                            </IonSelect> )} control={control} name={"diasTrabalho"}/>
                         </IonItem> 

                        {/*MAIS QUE 0*/}

                        {((diasTrabalho == "1") || (diasTrabalho == "2") || (diasTrabalho == "3") || (diasTrabalho == "4") || (diasTrabalho == "5") || (diasTrabalho == "6") || (diasTrabalho == "7") || (diasTrabalho == "8") || (diasTrabalho == "9") || (diasTrabalho == "10") || (diasTrabalho == "11") || (diasTrabalho == "12") || (diasTrabalho == "13") || (diasTrabalho == "14"))              ?

                        <IonItem>
                            <IonLabel>Quantas horas em média você trabalhou/estudou nestes dias? </IonLabel>
                            <IonSelect placeholder="Por favor, selecione...">
                            <IonSelectOption>até 1 hora</IonSelectOption>
                            <IonSelectOption>até 2 horas</IonSelectOption>
                            <IonSelectOption>até 4 horas</IonSelectOption>
                            <IonSelectOption>até 8 horas</IonSelectOption>
                            <IonSelectOption>mais de 8 horas</IonSelectOption>
                            </IonSelect>
                         </IonItem>:null  }

                        {((diasTrabalho == "1") || (diasTrabalho == "2") || (diasTrabalho == "3") || (diasTrabalho == "4") || (diasTrabalho == "5") || (diasTrabalho == "6") || (diasTrabalho == "7") || (diasTrabalho == "8") || (diasTrabalho == "9") || (diasTrabalho == "10") || (diasTrabalho == "11") || (diasTrabalho == "12") || (diasTrabalho == "13") || (diasTrabalho == "14"))  ?
                         <IonItem>
                            <IonLabel>Você pôde escolher seus horários de trabalho/estudo?</IonLabel>
                            
                            <IonRadioGroup>

                                <IonItem>
                                <IonLabel>Sim</IonLabel>
                                <IonRadio color="primary"></IonRadio>
                                </IonItem>
                               
                                <IonItem>
                                <IonLabel>Não</IonLabel>
                                <IonRadio color="primary"></IonRadio>
                                </IonItem>
                               
                            </IonRadioGroup>
                        </IonItem>:null }

                        
                        {((diasTrabalho == "1") || (diasTrabalho == "2") || (diasTrabalho == "3") || (diasTrabalho == "4") || (diasTrabalho == "5") || (diasTrabalho == "6") || (diasTrabalho == "7") || (diasTrabalho == "8") || (diasTrabalho == "9") || (diasTrabalho == "10") || (diasTrabalho == "11") || (diasTrabalho == "12") || (diasTrabalho == "13") || (diasTrabalho == "14")) ?
                        <IonItem>
                            <IonLabel>O quão regular foram seus horários de trabalho/estudo nas últimas duas semanas: </IonLabel>

                            <Controller render={({onChange}) => (
                            <IonSelect placeholder="Por favor, selecione..." value={horasTrabalhoRegulares} onIonChange={e => setHorasTrabalhoRegulares(e.detail.value)}>
                            <IonSelectOption value="muitoIrregulares">Muito irregulares</IonSelectOption>
                            <IonSelectOption value="irregulares">Irregulares</IonSelectOption>
                            <IonSelectOption value="regulares">Regulares</IonSelectOption>
                            <IonSelectOption value="muitoRegulares">Muito regulares</IonSelectOption>
                            </IonSelect> )} control={control} name={"horasTrabalhoRegulares"}/>
                         </IonItem>:null }

                            

                         {/*REGULARES OU MUITO REGULARES: */}
                        
                        {((diasTrabalho == "1") || (diasTrabalho == "2") || (diasTrabalho == "3") || (diasTrabalho == "4") || (diasTrabalho == "5") || (diasTrabalho == "6") || (diasTrabalho == "7") || (diasTrabalho == "8") || (diasTrabalho == "9") || (diasTrabalho == "10") || (diasTrabalho == "11") || (diasTrabalho == "12") || (diasTrabalho == "13") || (diasTrabalho == "14")) && ((horasTrabalhoRegulares == "regulares") || (horasTrabalhoRegulares == "muitoRegulares")) ?
                        
                         <IonItem>
                             <IonLabel>Em que horário, em média, você começou a trabalhar/estudar nas últimas duas semanas?</IonLabel>
                             <IonDatetime display-format="h:mm A" picker-format="h:mm A"></IonDatetime>
                         </IonItem>:null }

                         </IonList>


                         <IonItem>
                            <IonLabel>Como foram suas rotinas de sono nas últimas duas semanas? </IonLabel>
                            <IonSelect placeholder="Por favor, selecione...">
                            <IonSelectOption>Muito irregulares</IonSelectOption>
                            <IonSelectOption>Irregulares</IonSelectOption>
                            <IonSelectOption>Regulares</IonSelectOption>
                            <IonSelectOption>Muito regulares</IonSelectOption>
                            </IonSelect>
                         </IonItem>

                         <IonItem>
                            <IonLabel>Como você classificaria a qualidade do seu sono nas últimas duas semanas?</IonLabel>
                            <IonSelect placeholder="Por favor, selecione...">
                            <IonSelectOption>Muito boa</IonSelectOption>
                            <IonSelectOption>Boa</IonSelectOption>
                            <IonSelectOption>Ruim</IonSelectOption>
                            <IonSelectOption>Muito ruim</IonSelectOption>
                            </IonSelect>
                         </IonItem>

                         <IonList>

                         <IonItem>
                            <IonLabel>Como foram suas rotinas de alimentação nas últimas duas semanas?</IonLabel>

                            <Controller render={({onChange}) => (
                            <IonSelect placeholder="Por favor, selecione..." value={rotinaAlimento} onIonChange={e => setRotinaAlimento(e.detail.value)}>
                            <IonSelectOption value="muitoIrregulares">Muito irregulares</IonSelectOption>
                            <IonSelectOption value="irregulares">Irregulares</IonSelectOption>
                            <IonSelectOption value="regulares">Regulares</IonSelectOption>
                            <IonSelectOption value="muitoRegulares">Muito regulares</IonSelectOption>
                            </IonSelect> )} control={control} name="rotinaAlimentação"/>
                         </IonItem>

                         {/*REGULARES OU MUITO REGULARES*/}

                         {((rotinaAlimento == "regulares") || (rotinaAlimento == "muitoRegulares")) ?

                         <IonItem>
                             <IonLabel>Em que horário, em média, nas últimas duas semanas, você se alimentou pela primeira vez no dia, nos dias de trabalho ou de semana?</IonLabel>
                             <IonDatetime display-format="h:mm A" picker-format="h:mm A"></IonDatetime>
                         </IonItem> :null }

                         {((rotinaAlimento == "regulares") || (rotinaAlimento == "muitoRegulares")) ?
                         <IonItem>
                             <IonLabel>Em que horário, em média, você se alimentou pela última vez no dia, nas últimas duas semanas?</IonLabel>
                             <IonDatetime display-format="h:mm A" picker-format="h:mm A"></IonDatetime>
                         </IonItem>: null} 

                         </IonList>

                      
                         <IonItem>
                            <IonLabel>Seus horários de alimentação foram diferentes em dias de trabalho comparados a dias livres (ou em dias de semana comparados a fins de semana) nas últimas duas semanas?</IonLabel>
                            <Controller render={({onChange}) => (
                            <IonRadioGroup value={horarioAlimento} onIonChange={e => setHorarioAlimento(e.detail.value)}>

                                <IonItem>
                                <IonLabel>Sim</IonLabel>
                                <IonRadio color="primary" value="sim"></IonRadio>
                                </IonItem>
                               
                                <IonItem>
                                <IonLabel>Não</IonLabel>
                                <IonRadio color="primary" value="não"></IonRadio>
                                </IonItem>
                               
                            </IonRadioGroup> )} control={control} name={"comparaHorarios"}/>
                        </IonItem>

                        {((rotinaAlimento == "regulares") || (rotinaAlimento == "muitoRegulares") || (horarioAlimento == "sim")) ?
                         <IonItem>
                             <IonLabel>Em que horário, em média, nas últimas duas semanas, você se alimentou pela primeira vez no dia, nos dias livres ou fins de semana?</IonLabel>
                             <IonDatetime display-format="h:mm A" picker-format="h:mm A"></IonDatetime>
                         </IonItem>: null} 

                         {((rotinaAlimento == "regulares") || (rotinaAlimento == "muitoRegulares") || (horarioAlimento == "sim")) ?
                         <IonItem>
                             <IonLabel>Em que horário, em média, nas últimas duas semanas, você se alimentou pela última vez no dia, nos dias livres ou fins de semana?</IonLabel>
                             <IonDatetime display-format="h:mm A" picker-format="h:mm A"></IonDatetime>
                         </IonItem>: null} 


                        <IonItem>
                            <IonLabel>Nas últimas duas semanas, você comeu lanches ao longo do dia, em média: </IonLabel>

                            <Controller render = {({onChange}) => (

                            <IonList>
                                <IonItem>
                                <IonCheckbox color="primary" onIonChange={(e)=> {
                                console.log(e);
                                onChange(e.detail.value) }}></IonCheckbox>
                                <IonLabel>Nenhuma vez</IonLabel>
                                </IonItem>

                                <IonItem>
                                <IonCheckbox color="primary" onIonChange={(e)=> {
                                console.log(e);
                                onChange(e.detail.value) }}></IonCheckbox>
                                <IonLabel>Uma vez</IonLabel>
                                </IonItem>
                                
                                <IonItem>
                                <IonCheckbox color="primary" onIonChange={(e)=> {
                                console.log(e);
                                onChange(e.detail.value) }}></IonCheckbox>
                                <IonLabel>Duas vezes</IonLabel>
                                </IonItem>

                                <IonItem>
                                <IonCheckbox color="primary" onIonChange={(e)=> {
                                console.log(e);
                                onChange(e.detail.value) }}></IonCheckbox>
                                <IonLabel>Três vezes</IonLabel>
                                </IonItem>

                                <IonItem>
                                <IonCheckbox color="primary" onIonChange={(e)=> {
                                console.log(e);
                                onChange(e.detail.value) }}></IonCheckbox>
                                <IonLabel>Quatro vezes</IonLabel>
                                </IonItem>
                                
                                <IonItem>
                                <IonCheckbox color="primary" onIonChange={(e)=> {
                                console.log(e);
                                onChange(e.detail.value) }}></IonCheckbox>
                                <IonLabel>Cinco vezes ou mais</IonLabel>
                                </IonItem>

                             </IonList> )} control={control} name={"lanches"}/>
                            </IonItem>

                        <IonItem>
                            <IonLabel>Com que frequência você praticou hobbies nas duas últimas semanas?</IonLabel>
                            <Controller render={({onChange}) => (
                            <IonSelect placeholder="Por favor, selecione..."  onIonChange={(e)=> {
                                console.log(e);
                                onChange(e.detail.value) }}>
                            <IonSelectOption>Nenhuma vez</IonSelectOption>
                            <IonSelectOption>Em menos da metade dos dias</IonSelectOption>
                            <IonSelectOption>Em mais da metade dos dias</IonSelectOption>
                            <IonSelectOption>Todos os dias</IonSelectOption>
                            </IonSelect> )} control={control} name={"hobbies"}/>
                         </IonItem>

                         <IonList>
                         <IonItem>
                            <IonLabel>Você praticou atividade física nas duas últimas semanas?</IonLabel>

                            <Controller render={({onChange}) => (
                            
                            <IonRadioGroup value={atividadeFisica} onIonChange={e => setAtividadeFisica(e.detail.value)}>

                                <IonItem>
                                <IonLabel>Sim</IonLabel>
                                <IonRadio color="primary" value="sim" ></IonRadio>
                                </IonItem>
                               
                                <IonItem>
                                <IonLabel>Não</IonLabel>
                                <IonRadio color="primary" value="não"></IonRadio>
                                </IonItem>
                               
                            </IonRadioGroup> )} control={control} name={"atividadeFisica"}/>
                        </IonItem> 


                        {/*ATIVIDADE FÍSICA -> SIM */}

                        {atividadeFisica == "sim" ? 
                        <IonItem>
                            <IonLabel>Com que frequência você praticou exercícios?</IonLabel>
                            <IonSelect placeholder="Por favor, selecione...">
                            <IonSelectOption>1 vez por semana</IonSelectOption>
                            <IonSelectOption>2 vezes por semana</IonSelectOption>
                            <IonSelectOption>3 vezes por semana</IonSelectOption>
                            <IonSelectOption>4 vezes por semana</IonSelectOption>
                            <IonSelectOption>5 vezes por semana</IonSelectOption>
                            <IonSelectOption>6 vezes por semana</IonSelectOption>
                            <IonSelectOption>7 vezes por semana</IonSelectOption>
                            <IonSelectOption>menos de 1 vezes por semana</IonSelectOption>
                            </IonSelect>
                         </IonItem>:null }

                         {atividadeFisica == "sim" ?
                         <IonItem>
                            <IonLabel>Quão regulares, nas últimas duas semanas, foram os horários que praticou exercício?</IonLabel>
                            <Controller render={({onChange}) => (
                            <IonSelect placeholder="Por favor, selecione..." value={horarioAtividadeFisica} onIonChange={e => setHorarioAtividadeFisica(e.detail.value)}>
                            <IonSelectOption value="muitoIrregulares">Muito irregulares</IonSelectOption>
                            <IonSelectOption value="irregulares">Irregulares</IonSelectOption>
                            <IonSelectOption value="regulares">Regulares</IonSelectOption>
                            <IonSelectOption value="muitoRegulares">Muito regulares</IonSelectOption>
                            </IonSelect> )} control={control} name={"horarioAtividadeFisica"} />
                          </IonItem>:null }

                        {atividadeFisica == "sim" ? 
                         <IonItem>
                            <IonLabel>Qual foi, nas últimas duas semanas, a duração da sua atividade física em média?</IonLabel>
                            <IonSelect placeholder="Por favor, selecione...">
                            <IonSelectOption>Menos de 1 hora</IonSelectOption>
                            <IonSelectOption>1 hora</IonSelectOption>
                            <IonSelectOption>Entre 1 e 2 horas</IonSelectOption>
                            <IonSelectOption>Mais de 2 horas</IonSelectOption>
                            </IonSelect>
                         </IonItem>:null }
                         </IonList>

                         {/*ATIVIDADE FÍSICA REGULAR -> */}

                         {((atividadeFisica == "sim") && ((horarioAtividadeFisica == "regulares") || (horarioAtividadeFisica == "muitoRegulares")) )? 

                         <IonItem>
                             <IonLabel>Em que horário, em média, nas últimas duas semanas, você começou a praticar exercícios?</IonLabel>
                             <IonDatetime display-format="h:mm A" picker-format="h:mm A"></IonDatetime>
                         </IonItem> :null}


                        <IonList>

                         <IonItem>
                            <IonLabel>Com que frequência você se expôs a luz natural (em um ambiente aberto) nas últimas duas semanas?</IonLabel>
                            <Controller render={({onChange}) => (  
                            <IonSelect placeholder="Por favor, selecione..." value={frequenciaLuzNatural} onIonChange={e => setFrequenciaLuzNatural(e.detail.value)}>
                            <IonSelectOption value="nunca">Nunca</IonSelectOption>
                            <IonSelectOption value="menosMetade">Em menos da metade dos dias</IonSelectOption>
                            <IonSelectOption value="maisMetade">Em mais da metade dos dias</IonSelectOption>
                            <IonSelectOption value="todosDias">Todos os dias</IonSelectOption>
                            </IonSelect> )} control={control} name={"frequenciaLuzNatural"}/>
                         </IonItem>

                        {/*LUZ -> QUALQUER RESPOSTA QUE NÃO SEJA NUNCA */}


                        {((frequenciaLuzNatural == "menosMetade") || (frequenciaLuzNatural == "maisMetade") || (frequenciaLuzNatural == "todosDias")) ? 
                        <IonItem>
                            <IonLabel>Nesses dias, a quantas horas de luz natural (em um ambiente aberto) você se expôs em média?</IonLabel>
                            <IonSelect placeholder="Por favor, selecione...">
                            <IonSelectOption>Não me exponho a luz natural</IonSelectOption>
                            <IonSelectOption>Até meia hora</IonSelectOption>
                            <IonSelectOption>Até 1 hora</IonSelectOption>
                            <IonSelectOption>Até 2 horas</IonSelectOption>
                            <IonSelectOption>Até 4 horas</IonSelectOption>
                            <IonSelectOption>Mais de 4 horas</IonSelectOption>
                            </IonSelect>
                         </IonItem>:null }

                         {((frequenciaLuzNatural == "menosMetade") || (frequenciaLuzNatural == "maisMetade") || (frequenciaLuzNatural == "todosDias")) ? 
                         <IonItem>
                            <IonLabel>Quão regulares foram os horários em que se expõe à luz natural?</IonLabel>
                            <IonSelect placeholder="Por favor, selecione...">
                            <IonSelectOption>Muito irregulares</IonSelectOption>
                            <IonSelectOption>Irregulares</IonSelectOption>
                            <IonSelectOption>Regulares</IonSelectOption>
                            <IonSelectOption>Muito regulares</IonSelectOption>
                            </IonSelect>
                         </IonItem>:null}

                        <IonList>
                         {((frequenciaLuzNatural == "menosMetade") || (frequenciaLuzNatural == "maisMetade") || (frequenciaLuzNatural == "todosDias")) ? 
                         <IonItem>
                            <IonLabel>Seus horários de expor à luz foram diferentes em dias de trabalho comparados a dias livres (ou em dias de semana comparados a fins de semana)?</IonLabel>
                            <Controller render={({onChange}) => (
                            <IonRadioGroup value={horarioLuzNatural} onIonChange={e => setHorarioLuzNatural(e.detail.value)}>

                                <IonItem>
                                <IonLabel>Sim</IonLabel>
                                <IonRadio color="primary" value="sim"></IonRadio>
                                </IonItem>
                               
                                <IonItem>
                                <IonLabel>Não</IonLabel>
                                <IonRadio color="primary" value="não"></IonRadio>
                                </IonItem>
                               
                            </IonRadioGroup> )} control={control} name={"horarioLuzNatural"}/>
                        </IonItem> :null}

                        {/*HORÁRIOS DE LUZ REGULARES -> SIM */}

                        {(((frequenciaLuzNatural == "menosMetade") || (frequenciaLuzNatural == "maisMetade") || (frequenciaLuzNatural == "todosDias")) && (horarioLuzNatural == "sim")) ? 
                        <IonItem>
                             <IonLabel>Nas últimas duas semanas, em que horário, em média, você se expôs à luz natural, nos dias trabalho ou de semana?</IonLabel>
                             <IonDatetime display-format="h:mm A" picker-format="h:mm A"></IonDatetime>
                         </IonItem>:null}

                         {(((frequenciaLuzNatural == "menosMetade") || (frequenciaLuzNatural == "maisMetade") || (frequenciaLuzNatural == "todosDias")) && (horarioLuzNatural == "sim")) ?
                         <IonItem>
                             <IonLabel>Nas últimas duas semanas, em que horário, em média, você se expôs à luz natural, nos dias livres ou fins de semana?</IonLabel>
                             <IonDatetime display-format="h:mm A" picker-format="h:mm A"></IonDatetime>
                         </IonItem>:null}
                        {/*HORÁRIOS DE LUZ REGULARES -> NÃO */}

                        {(((frequenciaLuzNatural == "menosMetade") || (frequenciaLuzNatural == "maisMetade") || (frequenciaLuzNatural == "todosDias")) && (horarioLuzNatural == "não")) ?
                        <IonItem>
                             <IonLabel>Em que horário, em média, você se expôs à luz natural, nas últimas duas semanas?</IonLabel>
                             <IonDatetime display-format="h:mm A" picker-format="h:mm A"></IonDatetime>
                         </IonItem> :null}
                        
                         </IonList>
                         </IonList>
                        
                         <IonItem>
                            <IonLabel>Marque aquela que melhor descreve a maneira como você se sentiu nas últimas duas semanas.</IonLabel>
                            <Controller render={({onChange}) => (
                            <IonSelect placeholder="Por favor, selecione..." id={""} onIonChange={(e)=> {
                                console.log(e);
                                onChange(e.detail.value) }}>
                            <IonSelectOption>Não estou especialmente desanimado com o futuro.</IonSelectOption>
                            <IonSelectOption>Eu me sinto desanimado quanto ao futuro.</IonSelectOption>
                            <IonSelectOption>Acho que nada tenho a esperar.</IonSelectOption>
                            <IonSelectOption>Acho o futuro sem esperança e tenho a impressão de que as coisas não podem melhorar.</IonSelectOption>
                            </IonSelect> )} control={control} name={"sentiuDuasSemanas"}/>
                         </IonItem>


                        <IonItem>
                        <IonLabel>Em relação a situação atual, em um nível de 1 (não me traz ansiedade) a 5 (me deixa muito ansioso), o quanto estas preocupações te deixam ansioso?</IonLabel>
                        </IonItem>

                        <IonItem>
                       
                        <IonGrid fixed={true} className={"ion-col"}>
                            <IonRow>
                                <IonCol> </IonCol>
                                <IonCol>1</IonCol>
                                <IonCol>2</IonCol>
                                <IonCol>3</IonCol>
                                <IonCol>4</IonCol>
                                <IonCol>5</IonCol>
                                <IonCol>Sem resposta</IonCol>
                             </IonRow>
                             <IonRadioGroup>
                             <IonRow>
                            
                                <IonCol>Possibilidade de contágio. </IonCol>
                                    
                                    <IonCol><IonRadio color="primary"></IonRadio></IonCol>
                                    <IonCol><IonRadio color="primary"></IonRadio></IonCol>
                                    <IonCol><IonRadio color="primary"></IonRadio></IonCol>
                                    <IonCol><IonRadio color="primary"></IonRadio></IonCol>
                                    <IonCol><IonRadio color="primary"></IonRadio></IonCol>
                                    <IonCol><IonRadio color="primary"></IonRadio></IonCol>
                              
                             </IonRow>
                             </IonRadioGroup> 
                             <IonRadioGroup>
                             <IonRow>
                             
                                <IonCol>Perder o emprego. </IonCol>
                                    
                                    <IonCol><IonRadio color="primary"></IonRadio></IonCol>
                                    <IonCol><IonRadio color="primary"></IonRadio></IonCol>
                                    <IonCol><IonRadio color="primary"></IonRadio></IonCol>
                                    <IonCol><IonRadio color="primary"></IonRadio></IonCol>
                                    <IonCol><IonRadio color="primary"></IonRadio></IonCol>
                                    <IonCol><IonRadio color="primary"></IonRadio></IonCol>
                               
                             </IonRow>
                             </IonRadioGroup>  

                            <IonRadioGroup>
                              <IonRow>
                             
                                <IonCol>Não ter mais fonte de renda. </IonCol>
                                    
                                    <IonCol><IonRadio color="primary"></IonRadio></IonCol>
                                    <IonCol><IonRadio color="primary"></IonRadio></IonCol>
                                    <IonCol><IonRadio color="primary"></IonRadio></IonCol>
                                    <IonCol><IonRadio color="primary"></IonRadio></IonCol>
                                    <IonCol><IonRadio color="primary"></IonRadio></IonCol>
                                    <IonCol><IonRadio color="primary"></IonRadio></IonCol>
                               
                             </IonRow>
                             </IonRadioGroup>

                             <IonRadioGroup>
                              <IonRow>
                             
                                <IonCol>Terminar o relacionamento. </IonCol>
                                    
                                    <IonCol><IonRadio color="primary"></IonRadio></IonCol>
                                    <IonCol><IonRadio color="primary"></IonRadio></IonCol>
                                    <IonCol><IonRadio color="primary"></IonRadio></IonCol>
                                    <IonCol><IonRadio color="primary"></IonRadio></IonCol>
                                    <IonCol><IonRadio color="primary"></IonRadio></IonCol>
                                    <IonCol><IonRadio color="primary"></IonRadio></IonCol>
                               
                             </IonRow>
                             </IonRadioGroup>

                             <IonRadioGroup>
                              <IonRow>
                             
                                <IonCol>Contagiar alguém. </IonCol>
                                    
                                    <IonCol><IonRadio color="primary"></IonRadio></IonCol>
                                    <IonCol><IonRadio color="primary"></IonRadio></IonCol>
                                    <IonCol><IonRadio color="primary"></IonRadio></IonCol>
                                    <IonCol><IonRadio color="primary"></IonRadio></IonCol>
                                    <IonCol><IonRadio color="primary"></IonRadio></IonCol>
                                    <IonCol><IonRadio color="primary"></IonRadio></IonCol>
                               
                             </IonRow>
                             </IonRadioGroup>

                             <IonRadioGroup>
                              <IonRow>
                             
                                <IonCol>Familiares e/ou amigos na linha de frente de combate ao vírus. </IonCol>
                                    
                                    <IonCol><IonRadio color="primary"></IonRadio></IonCol>
                                    <IonCol><IonRadio color="primary"></IonRadio></IonCol>
                                    <IonCol><IonRadio color="primary"></IonRadio></IonCol>
                                    <IonCol><IonRadio color="primary"></IonRadio></IonCol>
                                    <IonCol><IonRadio color="primary"></IonRadio></IonCol>
                                    <IonCol><IonRadio color="primary"></IonRadio></IonCol>
                               
                             </IonRow>
                             </IonRadioGroup>

                             <IonRadioGroup>
                              <IonRow>
                             
                                <IonCol>Vida não voltar a ser como era antes. </IonCol>
                                    
                                    <IonCol><IonRadio color="primary"></IonRadio></IonCol>
                                    <IonCol><IonRadio color="primary"></IonRadio></IonCol>
                                    <IonCol><IonRadio color="primary"></IonRadio></IonCol>
                                    <IonCol><IonRadio color="primary"></IonRadio></IonCol>
                                    <IonCol><IonRadio color="primary"></IonRadio></IonCol>
                                    <IonCol><IonRadio color="primary"></IonRadio></IonCol>
                               
                             </IonRow>
                             </IonRadioGroup>

                             <IonRadioGroup>
                              <IonRow>
                             
                                <IonCol>Perder o contato com amigos ou colegas.	 </IonCol>
                                    
                                    <IonCol><IonRadio color="primary"></IonRadio></IonCol>
                                    <IonCol><IonRadio color="primary"></IonRadio></IonCol>
                                    <IonCol><IonRadio color="primary"></IonRadio></IonCol>
                                    <IonCol><IonRadio color="primary"></IonRadio></IonCol>
                                    <IonCol><IonRadio color="primary"></IonRadio></IonCol>
                                    <IonCol><IonRadio color="primary"></IonRadio></IonCol>
                               
                             </IonRow>
                             </IonRadioGroup>

                             <IonRadioGroup>
                              <IonRow>
                             
                                <IonCol>Educação dos filhos.	 </IonCol>
                                    
                                    <IonCol><IonRadio color="primary"></IonRadio></IonCol>
                                    <IonCol><IonRadio color="primary"></IonRadio></IonCol>
                                    <IonCol><IonRadio color="primary"></IonRadio></IonCol>
                                    <IonCol><IonRadio color="primary"></IonRadio></IonCol>
                                    <IonCol><IonRadio color="primary"></IonRadio></IonCol>
                                    <IonCol><IonRadio color="primary"></IonRadio></IonCol>
                               
                             </IonRow>
                             </IonRadioGroup>
                             
                        </IonGrid>
                        </IonItem>

                         <IonItem>
                            <IonLabel>Você ou alguém da família contraiu o vírus? </IonLabel>

                            <IonList>
                                <IonItem>
                                <IonCheckbox color="primary"></IonCheckbox>
                                <IonLabel>Tive suspeita</IonLabel>
                                </IonItem>

                                <IonItem>
                                <IonCheckbox color="primary"></IonCheckbox>
                                <IonLabel>Contraí o vírus</IonLabel>
                                </IonItem>
                                
                                <IonItem>
                                <IonCheckbox color="primary"></IonCheckbox>
                                <IonLabel>Algum membro da minha família teve suspeita</IonLabel>
                                </IonItem>

                                <IonItem>
                                <IonCheckbox color="primary"></IonCheckbox>
                                <IonLabel>Algum membro da minha família contraiu o vírus</IonLabel>
                                </IonItem>

                                <IonItem>
                                <IonCheckbox color="primary"></IonCheckbox>
                                <IonLabel>Algum amigo/colega teve suspeita</IonLabel>
                                </IonItem>
                                
                                <IonItem>
                                <IonCheckbox color="primary"></IonCheckbox>
                                <IonLabel>Algum amigo/colega contraiu o vírus</IonLabel>
                                </IonItem>

                                <IonItem>
                                <IonCheckbox color="primary"></IonCheckbox>
                                <IonLabel>Não tive suspeita, nem contraí o vírus. Nenhum amigo/colega/familiar contraiu ou teve suspeita do vírus.</IonLabel>
                                </IonItem>
                             </IonList>
                            </IonItem>

                           
                          

                <IonButton onClick={props.prev}>Anterior</IonButton>
                <IonButton onClick={props.next}>Próximo</IonButton>
                   
                </form>
                
            </div>
            </IonContent>
        )

}

export default Step3;