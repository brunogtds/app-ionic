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
    IonNote,
    IonItemDivider
    
  } from "@ionic/react";
  import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';

  import './Forms.css';

    import { useForm, Controller } from "react-hook-form";

    import {useState} from 'react';

const Step1 = (props: StepComponentProps) => {


                                          
  const {control, handleSubmit} = useForm();

  

  const submitForm = (data: any) => {
    console.log('submiting to database', data);
  } 

  const [showOptions, setShowOptions] = React.useState(false);

  const onClick = (_event:any) =>{
      const value= _event.target.value;

      if (value == "feminino"){
        setShowOptions(true);
        console.log('feminino')
      }
      else {
          setShowOptions(false);
          console.log('masculino')
      }


  }

    return (
        <IonContent fullscreen>
        <div>
            
                <form className="ion-padding">
                        <IonItem>
                            <IonLabel position="floating">Email:</IonLabel>
                            
                            <Controller as =          
                            {<IonInput type="email"/>}
                            name= "email"
                            control= {control}
                            onChangeName= "onIonChange" />
                        </IonItem> 

                         <IonItem>
                            <IonLabel position="floating">Idade:</IonLabel>
                            <IonInput/>
                         </IonItem>

                         <IonItem>
                            <IonLabel >Sexo:</IonLabel>

                            <Controller as = {
                            <IonSelect placeholder="Por favor, selecione...">
                                <IonSelectOption value="feminino" >Feminino</IonSelectOption>
                                <IonSelectOption value="masculino">Masculino</IonSelectOption>
                            </IonSelect> 
                            }
                            control={control}
                            name="sexo"
                            onChange={onClick}
                            
                            />

                            
                         </IonItem>

                        

                        {showOptions ? 
                        <IonItem>
                            <IonLabel position="floating">Primeira dia da última menstruação:</IonLabel>
                            <IonDatetime placeholder="Selecione data"></IonDatetime>
                        </IonItem>
                        : null}
                        
                        <IonItem>
                            <IonLabel position="floating">Peso (em kg):</IonLabel>
                            <IonInput/>
                            <IonNote >Se você não sabe seu peso exato, pode ser um valor aproximado.</IonNote>
                         </IonItem>

                         <IonItem>
                            <IonLabel position="floating">Altura (em cm): </IonLabel>
                            <IonInput/>
                            <IonNote >Responda com o valor em centímetros, por ex: 1,70m = 170cm - escrever 170.</IonNote>
                        </IonItem>

                        <IonItem>
                       
                            <IonLabel>Estado do Brasil:</IonLabel>

                          
                               
                                <IonSelect placeholder="Por favor, selecione...">
                                <IonSelectOption>RS</IonSelectOption>
                                <IonSelectOption>SP</IonSelectOption>
                                <IonSelectOption>Moro fora do país</IonSelectOption>
                                <IonSelectOption>AC</IonSelectOption>
                                <IonSelectOption>AL</IonSelectOption>
                                <IonSelectOption>AP</IonSelectOption>
                                <IonSelectOption>AM</IonSelectOption>
                                <IonSelectOption>BA</IonSelectOption>
                                <IonSelectOption>CE</IonSelectOption>
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
                                <IonSelectOption>RO</IonSelectOption>
                                <IonSelectOption>RR</IonSelectOption>
                                <IonSelectOption>SC</IonSelectOption>
                                <IonSelectOption>SE</IonSelectOption>
                                <IonSelectOption>TO</IonSelectOption>
                                <IonSelectOption>DF</IonSelectOption>
                            </IonSelect>
                            
                         </IonItem>

                         
                        <IonItem>
                            <IonLabel position="floating">Profissão: </IonLabel>
                            <IonInput/>
                        </IonItem>

                                        
                        <IonItem>
                        
                        
                        <IonLabel>Atualmente sou:</IonLabel>
                            
                            <IonList>

                            <IonItem>
                            <IonCheckbox color="primary"></IonCheckbox>
                            <IonLabel>Estudante</IonLabel>
                            </IonItem>

                            <IonItem>
                            <IonCheckbox color="primary"></IonCheckbox>
                            <IonLabel>Assalariado</IonLabel>
                            </IonItem>

                            <IonItem>
                            <IonCheckbox color="primary"></IonCheckbox>
                            <IonLabel>Autônomo</IonLabel>
                            </IonItem>
                            
                            <IonItem>
                            <IonCheckbox color="primary"></IonCheckbox>
                            <IonLabel>Desempregado</IonLabel>
                            </IonItem>

                            <IonItem>
                            <IonCheckbox color="primary"></IonCheckbox>
                            <IonLabel>Aposentado</IonLabel>
                            </IonItem>

                            <IonItem>
                                <IonLabel>Outros: </IonLabel>
                                <IonInput/>
                            </IonItem>
                            </IonList>
                        </IonItem>

                        <IonItem>
                            <IonLabel>Escolaridade:</IonLabel>
                            <IonSelect placeholder="Por favor, selecione...">
                            <IonSelectOption>Ensino Fundamental Incompleto</IonSelectOption>
                            <IonSelectOption>Ensino Fundamental Completo</IonSelectOption>
                            <IonSelectOption>Ensino Médio Incompleto</IonSelectOption>
                            <IonSelectOption>Ensino Médio Completo</IonSelectOption>
                            <IonSelectOption>Ensino Superior Incompleto</IonSelectOption>
                            <IonSelectOption>Ensino Superior Completo</IonSelectOption>
                            <IonSelectOption>Mestrado</IonSelectOption>
                            <IonSelectOption>Doutorado</IonSelectOption>
                            </IonSelect>
                          </IonItem>

                          <IonItem>
                                <IonLabel>Estado Civil:</IonLabel>
                                <IonSelect placeholder="Por favor, selecione...">
                                <IonSelectOption>Solteiro(a)</IonSelectOption>
                                <IonSelectOption>Casado(a)</IonSelectOption>
                                <IonSelectOption>Separado(a)/Divorciado(a)</IonSelectOption>
                                <IonSelectOption>Viúvo(a)</IonSelectOption>
             
                                </IonSelect>
                         </IonItem>

                         <IonItem>
                            <IonLabel>Número de pessoas dependentes:</IonLabel>
                            <IonInput/>
                        </IonItem>
       
                        <IonItem>
                            <IonLabel>Quantas pessoas estão morendo na sua residência, além de você?</IonLabel>
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
                            <IonSelectOption>Mais que 8</IonSelectOption>
                            </IonSelect>
                            
                        </IonItem>

                        <IonItem>
                            <IonLabel>Moro em uma área: </IonLabel>

                            <IonList>
                                <IonItem>
                                <IonCheckbox color="primary"></IonCheckbox>
                                <IonLabel>Urbana</IonLabel>
                                </IonItem>

                                <IonItem>
                                <IonCheckbox color="primary"></IonCheckbox>
                                <IonLabel>Rural</IonLabel>
                                </IonItem>

                             </IonList>
                         </IonItem>
                         <IonButton disabled={props.isFirst()}onClick={props.prev}>Anterior</IonButton>
                         <IonButton onClick={props.next}>Próximo</IonButton>
                </form>
           
        </div>
        </IonContent>
    )


}

export default Step1;