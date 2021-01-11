import React from "react";
import {StepComponentProps} from "react-step-builder";

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
    IonTextarea,
  
  
    
  } from "@ionic/react";
  import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';

  import './Forms.css';



const Step2 = (props: StepComponentProps) => {

    return (
        <IonContent fullscreen>
        <div>
           
             <form className="ion-padding">
             <IonItem>
                        
                        
                        <IonLabel>Doenças diagnosticadas:</IonLabel>
                            
                            <IonList>

                            <IonItem>
                            <IonCheckbox color="primary"></IonCheckbox>
                            <IonLabel>Nenhuma</IonLabel>
                            </IonItem>

                            <IonItem>
                            <IonCheckbox color="primary"></IonCheckbox>
                            <IonLabel>Diabetes</IonLabel>
                            </IonItem>

                            <IonItem>
                            <IonCheckbox color="primary"></IonCheckbox>
                            <IonLabel>Hipertensão</IonLabel>
                            </IonItem>
                            
                            <IonItem>
                            <IonCheckbox color="primary"></IonCheckbox>
                            <IonLabel>Asma</IonLabel>
                            </IonItem>

                            <IonItem>
                            <IonCheckbox color="primary"></IonCheckbox>
                            <IonLabel>Depressão</IonLabel>
                            </IonItem>

                            <IonItem>
                            <IonCheckbox color="primary"></IonCheckbox>
                            <IonLabel>Imunodeficiência</IonLabel>
                            </IonItem>

                            <IonItem>
                                <IonLabel>Outros: </IonLabel>
                                <IonInput/>
                            </IonItem>
                            </IonList>
                        </IonItem>


                
                        <IonItem>
                            <IonLabel>Você faz uso frequente de medicações por orientação médica?</IonLabel>
                            
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
                            
                            <IonTextarea placeholder="Quais medicações?"/>
                        </IonItem>
       
                        <IonItem>
                            <IonLabel>Você faz uso frequente de medicações sem orientação médica?</IonLabel>
                            
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
                            
                            <IonTextarea placeholder="Quais medicações?"/>
                        </IonItem>
                      

                        <IonItem>
                            <IonLabel>Você fez psicoterapia nas últimas duas semanas? </IonLabel>

                            <IonList>
                                <IonItem>
                                <IonCheckbox color="primary"></IonCheckbox>
                                <IonLabel>Não</IonLabel>
                                </IonItem>

                                <IonItem>
                                <IonCheckbox color="primary"></IonCheckbox>
                                <IonLabel>Sim, on-line</IonLabel>
                                </IonItem>

                                <IonItem>
                                <IonCheckbox color="primary"></IonCheckbox>
                                <IonLabel>Sim, presencial</IonLabel>
                                </IonItem>

                             </IonList>
                         </IonItem>

                         <IonItem>
                            <IonLabel>Você fuma?</IonLabel>
                            
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

                        {/*VOCÊ FUMA? -> SIM */}
                        <IonItem>
                            <IonLabel>Quantos cigarros você fuma por dia?</IonLabel>
                            <IonSelect placeholder="Por favor, selecione...">
                            <IonSelectOption>Menos que uma carteira de cigarro por dia</IonSelectOption>
                            <IonSelectOption>Uma a duas carteiras de cigarro por dia</IonSelectOption>
                            <IonSelectOption>Mais que duas carteiras de cigarro por dia</IonSelectOption>
                            
                            </IonSelect>
                          </IonItem>

                        <IonItem>
                            <IonLabel>Há quanto tempo você fuma? (em anos) </IonLabel>
                            <IonInput/>
                        </IonItem>

                         {/*VOCÊ FUMA? -> SIM */}
                        
                        {/*VOCÊ FUMA? -> NÃO */}

                        <IonItem>
                            <IonLabel>Você fumou antes?</IonLabel>
                            
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

                        {/*VOCÊ FUMOU ANTES? -> SIM */}

                        <IonItem>
                            <IonLabel>Quantos cigarros você fumava por dia?</IonLabel>
                            <IonSelect placeholder="Por favor, selecione...">
                            <IonSelectOption>Menos que uma carteira de cigarro por dia</IonSelectOption>
                            <IonSelectOption>Uma a duas carteiras de cigarro por dia</IonSelectOption>
                            <IonSelectOption>Mais que duas carteiras de cigarro por dia</IonSelectOption>
                            
                            </IonSelect>
                          </IonItem>

                          <IonItem>
                            <IonLabel>Por quanto tempo você fumou? (em anos) </IonLabel>
                            <IonInput/>
                        </IonItem>

                        <IonItem>
                            <IonLabel>Há quanto tempo você parou de fumar? </IonLabel>
                            <IonInput/>
                        </IonItem>

                        {/*VOCÊ FUMOU ANTES -> SIM */}

                        <IonItem>
                            <IonLabel>Você consome bebidas alcoólicas?</IonLabel>
                            
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

                        {/*VOCÊ CONSOME BEBIDAS ALCÓOLICAS -> SIM */}

                        <IonItem>
                            <IonLabel>Alguma vez você sentiu que deveria diminuir a quantidade de bebida?</IonLabel>
                            
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
                            <IonLabel>As pessoas o aborrecem porque criticam o seu modo de beber?</IonLabel>
                            
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
                            <IonLabel>Você se sente culpado pela maneira como bebe?</IonLabel>
                            
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
                            <IonLabel>Você costuma beber de manhã para diminuir o nervosimo ou ressaca?</IonLabel>
                            
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

                        {/*VOCÊ BEBE -> SIM */}

                        <IonItem>
                            <IonLabel>Você faz uso de algum tipo de droga ilícita diariamente?</IonLabel>
                            
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

                        {/*DROGAS -> SIM */}

                        <IonItem>
                        
                        
                        <IonLabel>Qual(is) você usa com maior frequência?</IonLabel>
                            
                            <IonList>

                            <IonItem>
                            <IonCheckbox color="primary"></IonCheckbox>
                            <IonLabel>Maconha</IonLabel>
                            </IonItem>

                            <IonItem>
                            <IonCheckbox color="primary"></IonCheckbox>
                            <IonLabel>Cocaína</IonLabel>
                            </IonItem>

                            <IonItem>
                            <IonCheckbox color="primary"></IonCheckbox>
                            <IonLabel>Crack</IonLabel>
                            </IonItem>
                            
                            <IonItem>
                            <IonCheckbox color="primary"></IonCheckbox>
                            <IonLabel>Ecstasy</IonLabel>
                            </IonItem>

                            <IonItem>
                                <IonLabel>Outros: </IonLabel>
                                <IonInput/>
                            </IonItem>
                            </IonList>
                        </IonItem>

                        <IonItem>
                            <IonLabel>Há quantos anos você usa essa droga diariamente?</IonLabel>
                            <IonInput/>
                        </IonItem>

                        <IonItem>
                            <IonLabel>Você faz uso de algum estimulante diariamente (café, chimarrão)?</IonLabel>
                            
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
                            <IonLabel>Em qual(is) momento(s) do dia você usa com mais frequência? </IonLabel>

                            <IonList>
                                <IonItem>
                                <IonCheckbox color="primary"></IonCheckbox>
                                <IonLabel>Manhã</IonLabel>
                                </IonItem>

                                <IonItem>
                                <IonCheckbox color="primary"></IonCheckbox>
                                <IonLabel>Tarde</IonLabel>
                                </IonItem>
                                
                                <IonItem>
                                <IonCheckbox color="primary"></IonCheckbox>
                                <IonLabel>Noite</IonLabel>
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

export default Step2;