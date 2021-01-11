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

const Step3 = (props: StepComponentProps) => {

        return (
            <IonContent fullscreen>
            <div>
               
                <form className="ion-padding">

                        <IonItem>
                            <IonLabel>Estou em distanciamento social:</IonLabel>
                            <IonSelect placeholder="Por favor, selecione...">
                            <IonSelectOption>Todo o tempo</IonSelectOption>
                            <IonSelectOption>A maior parte do tempo</IonSelectOption>
                            <IonSelectOption>Menos da metade do tempo</IonSelectOption>
                            <IonSelectOption>Não estou em distanciamento social</IonSelectOption>
                            </IonSelect>
                         </IonItem>

                         <IonItem>
                            <IonLabel position="floating">Desde que dia você está em distanciamento social (evitando sair de casa)?</IonLabel>
                            <IonDatetime placeholder="Selecione data"></IonDatetime>
                        </IonItem>

                         <IonItem>
                            <IonLabel>Você precisou se isolar em um cômodo em função de COVID-19 ou suspeita?</IonLabel>
                            
                            <IonRadioGroup>

                                <IonItem>
                                <IonLabel>Sim</IonLabel>
                                <IonRadio color="primary"></IonRadio>
                                </IonItem>
                               
                                <IonItem>
                                <IonLabel>Não</IonLabel>
                                <IonRadio color="primary"></IonRadio>
                                </IonItem>

                                <IonItem>
                                <IonLabel>Sem resposta</IonLabel>
                                <IonRadio color="primary"></IonRadio>
                                </IonItem>
                            </IonRadioGroup>
                        </IonItem>

                        <IonItem>
                            <IonLabel>Quanto você precisa sair para fazer alguma atividade, quanto tepo normalmente fica fora de casa?</IonLabel>
                            <IonSelect placeholder="Por favor, selecione...">
                            <IonSelectOption>Nunca saio de casa</IonSelectOption>
                            <IonSelectOption>Menos de 1 hora</IonSelectOption>
                            <IonSelectOption>Até 2 horas</IonSelectOption>
                            <IonSelectOption>Até 4 horas</IonSelectOption>
                            <IonSelectOption>Até 8 horas</IonSelectOption>
                            <IonSelectOption>Mais de 8 horas</IonSelectOption>
                            </IonSelect>
                         </IonItem>

                         <IonItem>
                            <IonLabel>Sua conexão de internet é: </IonLabel>
                            <IonSelect placeholder="Por favor, selecione...">
                            <IonSelectOption>Muito boa</IonSelectOption>
                            <IonSelectOption>Boa</IonSelectOption>
                            <IonSelectOption>Regular</IonSelectOption>
                            <IonSelectOption>Ruim</IonSelectOption>
                            
                            </IonSelect>
                         </IonItem>

                         
                         <IonItem>
                            <IonLabel>Com quantas pessoas por dia, aproximadamente, você teve contato (online, incluindo mensagens, ou ao vivo) nas últimas duas semanas? </IonLabel>
                            <IonSelect placeholder="Por favor, selecione...">
                            <IonSelectOption>Nenhuma</IonSelectOption>
                            <IonSelectOption>1-5</IonSelectOption>
                            <IonSelectOption>5-10</IonSelectOption>
                            <IonSelectOption>10-15</IonSelectOption>
                            <IonSelectOption>15-20</IonSelectOption>
                            <IonSelectOption>Mais de 20</IonSelectOption>
                            </IonSelect>
                         </IonItem>

                         <IonItem>
                            <IonLabel>Em quantos dias você trabalhou ou estudou nas últimas duas semanas? </IonLabel>
                            <IonSelect placeholder="Por favor, selecione...">
                            <IonSelectOption>0</IonSelectOption>
                            <IonSelectOption>1</IonSelectOption>
                            <IonSelectOption>2</IonSelectOption>
                            <IonSelectOption>3</IonSelectOption>
                            <IonSelectOption>4</IonSelectOption>
                            <IonSelectOption>5</IonSelectOption>
                            <IonSelectOption>6</IonSelectOption>
                            <IonSelectOption>7</IonSelectOption>
                            <IonSelectOption>8</IonSelectOption>
                            <IonSelectOption>9</IonSelectOption>
                            <IonSelectOption>10</IonSelectOption>
                            <IonSelectOption>11</IonSelectOption>
                            <IonSelectOption>12</IonSelectOption>
                            <IonSelectOption>13</IonSelectOption>
                            <IonSelectOption>14</IonSelectOption>
                            </IonSelect>
                         </IonItem>

                        {/*MAIS QUE 0*/}

                        <IonItem>
                            <IonLabel>Quantas horas em média você trabalhou/estudou nestes dias? </IonLabel>
                            <IonSelect placeholder="Por favor, selecione...">
                            <IonSelectOption>até 1 hora</IonSelectOption>
                            <IonSelectOption>até 2 horas</IonSelectOption>
                            <IonSelectOption>até 4 horas</IonSelectOption>
                            <IonSelectOption>até 8 horas</IonSelectOption>
                            <IonSelectOption>mais de 8 horas</IonSelectOption>
                            </IonSelect>
                         </IonItem>

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
                        </IonItem>

                        <IonItem>
                            <IonLabel>O quão regular foram seus horários de trabalho/estudo nas últimas duas semanas: </IonLabel>
                            <IonSelect placeholder="Por favor, selecione...">
                            <IonSelectOption>Muito irregulares</IonSelectOption>
                            <IonSelectOption>Irregulares</IonSelectOption>
                            <IonSelectOption>Regulares</IonSelectOption>
                            <IonSelectOption>Muito regulares</IonSelectOption>
                            </IonSelect>
                         </IonItem>


                         {/*REGULARES OU MUITO REGULARES: */}

                         <IonItem>
                             <IonLabel>Em que horário, em média, você começou a trabalhar/estudar nas últimas duas semanas?</IonLabel>
                             <IonDatetime display-format="h:mm A" picker-format="h:mm A"></IonDatetime>
                         </IonItem>



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

                         <IonItem>
                            <IonLabel>Como foram suas rotinas de alimentação nas últimas duas semanas?</IonLabel>
                            <IonSelect placeholder="Por favor, selecione...">
                            <IonSelectOption>Muito irregulares</IonSelectOption>
                            <IonSelectOption>Irregulares</IonSelectOption>
                            <IonSelectOption>Regulares</IonSelectOption>
                            <IonSelectOption>Muito regulares</IonSelectOption>
                            </IonSelect>
                         </IonItem>

                         {/*REGULARES OU MUITO REGULARES*/}

                         <IonItem>
                             <IonLabel>Em que horário, em média, nas últimas duas semanas, você se alimentou pela primeira vez no dia, nos dias de trabalho ou de semana?</IonLabel>
                             <IonDatetime display-format="h:mm A" picker-format="h:mm A"></IonDatetime>
                         </IonItem>

                         <IonItem>
                             <IonLabel>Em que horário, em média, você se alimentou pela última vez no dia, nas últimas duas semanas?</IonLabel>
                             <IonDatetime display-format="h:mm A" picker-format="h:mm A"></IonDatetime>
                         </IonItem>

                         <IonItem>
                            <IonLabel>Seus horários de trabalho foram diferentes em dias de trabalho comparados a dias livres (ou em dias de semana comparados a fins de semana) nas últimas duas semanas?</IonLabel>
                            
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
                        </IonItem>


                        <IonItem>
                            <IonLabel>Nas últimas duas semanas, você comeu lanches ao longo do dia, em média: </IonLabel>

                            <IonList>
                                <IonItem>
                                <IonCheckbox color="primary"></IonCheckbox>
                                <IonLabel>Nenhuma vez</IonLabel>
                                </IonItem>

                                <IonItem>
                                <IonCheckbox color="primary"></IonCheckbox>
                                <IonLabel>Uma vez</IonLabel>
                                </IonItem>
                                
                                <IonItem>
                                <IonCheckbox color="primary"></IonCheckbox>
                                <IonLabel>Duas vezes</IonLabel>
                                </IonItem>

                                <IonItem>
                                <IonCheckbox color="primary"></IonCheckbox>
                                <IonLabel>Três vezes</IonLabel>
                                </IonItem>

                                <IonItem>
                                <IonCheckbox color="primary"></IonCheckbox>
                                <IonLabel>Quatro vezes</IonLabel>
                                </IonItem>
                                
                                <IonItem>
                                <IonCheckbox color="primary"></IonCheckbox>
                                <IonLabel>Cinco vezes ou mais</IonLabel>
                                </IonItem>

                             </IonList>
                            </IonItem>

                        <IonItem>
                            <IonLabel>Com que frequência você praticou hobbies nas duas últimas semanas?</IonLabel>
                            <IonSelect placeholder="Por favor, selecione...">
                            <IonSelectOption>Nenhuma vez</IonSelectOption>
                            <IonSelectOption>Em menos da metade dos dias</IonSelectOption>
                            <IonSelectOption>Em mais da metade dos dias</IonSelectOption>
                            <IonSelectOption>Todos os dias</IonSelectOption>
                            </IonSelect>
                         </IonItem>

                         <IonItem>
                            <IonLabel>Você praticou atividade física nas duas últimas semanas?</IonLabel>
                            
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
                        </IonItem>


                        {/*ATIVIDADE FÍSICA -> SIM */}

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
                         </IonItem>

                         <IonItem>
                            <IonLabel>Quão regulares, nas últimas duas semanas, foram os horários que praticou exercício?</IonLabel>
                            <IonSelect placeholder="Por favor, selecione...">
                            <IonSelectOption>Muito irregulares</IonSelectOption>
                            <IonSelectOption>Irregulares</IonSelectOption>
                            <IonSelectOption>Regulares</IonSelectOption>
                            <IonSelectOption>Muito regulares</IonSelectOption>
                            </IonSelect>
                         </IonItem>

                         <IonItem>
                            <IonLabel>Qual foi, nas últimas duas semanas, a duração da sua atividade física em média?</IonLabel>
                            <IonSelect placeholder="Por favor, selecione...">
                            <IonSelectOption>Menos de 1 hora</IonSelectOption>
                            <IonSelectOption>1 hora</IonSelectOption>
                            <IonSelectOption>Entre 1 e 2 horas</IonSelectOption>
                            <IonSelectOption>Mais de 2 horas</IonSelectOption>
                            </IonSelect>
                         </IonItem>

                         {/*ATIVIDADE FÍSICA REGULAR -> */}

                         <IonItem>
                             <IonLabel>Em que horário, em média, nas últimas duas semanas, você começou a praticar exercícios?</IonLabel>
                             <IonDatetime display-format="h:mm A" picker-format="h:mm A"></IonDatetime>
                         </IonItem>


                         <IonItem>
                            <IonLabel>Com que frequência você se expôs a luz natural (em um ambiente aberto) nas últimas duas semanas?</IonLabel>
                            <IonSelect placeholder="Por favor, selecione...">
                            <IonSelectOption>Nunca</IonSelectOption>
                            <IonSelectOption>Em menos da metade dos dias</IonSelectOption>
                            <IonSelectOption>Em mais da metade dos dias</IonSelectOption>
                            <IonSelectOption>Todos os dias</IonSelectOption>
                            </IonSelect>
                         </IonItem>

                        {/*LUZ -> QUALQUER RESPOSTA QUE NÃO SEJA NUNCA */}

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
                         </IonItem>

                         <IonItem>
                            <IonLabel>Quão regulares foram os horários em que se expõe à luz natural?</IonLabel>
                            <IonSelect placeholder="Por favor, selecione...">
                            <IonSelectOption>Muito irregulares</IonSelectOption>
                            <IonSelectOption>Irregulares</IonSelectOption>
                            <IonSelectOption>Regulares</IonSelectOption>
                            <IonSelectOption>Muito regulares</IonSelectOption>
                            </IonSelect>
                         </IonItem>

                         <IonItem>
                            <IonLabel>Seus horários de expor à luz foram diferentes em dias de trabalho comparados a dias livres (ou em dias de semana comparados a fins de semana)?</IonLabel>
                            
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
                        </IonItem>

                        {/*HORÁRIOS DE LUZ REGULARES -> SIM */}

                        <IonItem>
                             <IonLabel>Nas últimas duas semanas, em que horário, em média, você se expôs à luz natural, nos dias trabalho ou de semana?</IonLabel>
                             <IonDatetime display-format="h:mm A" picker-format="h:mm A"></IonDatetime>
                         </IonItem>

                         <IonItem>
                             <IonLabel>Nas últimas duas semanas, em que horário, em média, você se expôs à luz natural, nos dias livres ou fins de semana?</IonLabel>
                             <IonDatetime display-format="h:mm A" picker-format="h:mm A"></IonDatetime>
                         </IonItem>
                        {/*HORÁRIOS DE LUZ REGULARES -> NÃO */}

                        <IonItem>
                             <IonLabel>Em que horário, em média, você se expôs à luz natural, nas últimas duas semanas?</IonLabel>
                             <IonDatetime display-format="h:mm A" picker-format="h:mm A"></IonDatetime>
                         </IonItem>
                        
                        
                         <IonItem>
                            <IonLabel>Marque aquela que melhor descreve a maneira como você se sentiu nas últimas duas semanas.</IonLabel>
                            <IonSelect placeholder="Por favor, selecione...">
                            <IonSelectOption>Não estou especialmente desanimado com o futuro.</IonSelectOption>
                            <IonSelectOption>Eu me sinto desanimado quanto ao futuro.</IonSelectOption>
                            <IonSelectOption>Acho que nada tenho a esperar.</IonSelectOption>
                            <IonSelectOption>Acho o futuro sem esperança e tenho a impressão de que as coisas não podem melhorar.</IonSelectOption>
                            </IonSelect>
                         </IonItem>


                        <IonItem>
                        <IonLabel>Em relação a situação atual, em um nível de 1 (não me traz ansiedade) a 5 (me deixa muito ansioso), o quanto estas preocupações te deixam ansioso?</IonLabel>
                        </IonItem>


                        <IonItem>
                            
                            
                                <IonItemDivider> <IonLabel>Possibilidade de contágio</IonLabel></IonItemDivider>
                                <IonRadioGroup>

                                <IonItem>
                                <IonLabel>1</IonLabel>
                                <IonRadio color="primary"></IonRadio>
                                </IonItem>
                               
                                <IonItem>
                                <IonLabel>2</IonLabel>
                                <IonRadio color="primary"></IonRadio>
                                </IonItem>

                                <IonItem>
                                <IonLabel>3</IonLabel>
                                <IonRadio color="primary"></IonRadio>
                                </IonItem>

                                <IonItem>
                                <IonLabel>4</IonLabel>
                                <IonRadio color="primary"></IonRadio>
                                </IonItem>

                                <IonItem>
                                <IonLabel>5</IonLabel>
                                <IonRadio color="primary"></IonRadio>
                                </IonItem>
                                
                                <IonItem>
                                <IonLabel>Sem resposta</IonLabel>
                                <IonRadio color="primary"></IonRadio>
                                </IonItem>
                            </IonRadioGroup>
                        
                                
                        </IonItem>

                        {/*OUTRAS PERGUNTAS*/}

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