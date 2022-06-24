import React, { useEffect, useState } from 'react';
import { IonContent, IonHeader, IonPage, IonText, IonTitle, IonToolbar } from '@ionic/react';


import './Home.css';


import { IonGrid, IonRow, IonCol, IonSlides, IonSlide } from '@ionic/react';

import { IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonItem, IonItemDivider, IonButton, IonLoading, IonLabel, IonInput, IonButtons, IonMenuButton, IonSelect, IonSelectOption} from '@ionic/react';


import distanciamentoExp from '../../src/img/distanciamentoExp.png';

import social_distancing from '../../src/img/social_distancing.svg';
import distancing from '../../src/img/distancing.svg';
import isolation from '../../src/img/isolation.svg';
import quarantine from '../../src/img/quarantine.svg';

import ExplanationSlides from './ExplanationSlides';

import {auth} from '../firebaseConfig/firebaseConfig';
import  { Redirect, useHistory } from 'react-router-dom' 

import {logoutUser} from '../firebaseConfig/firebaseConfig';
import { toast } from '../toast';

import {useUser} from 'reactfire';


import {AuthCheck} from 'reactfire';

import logo_clinicas from '../img/logo_clinicas.svg';
import logo_crono from '../img/logo_crono.svg';
import logo_innovaspace from '../img/logo_innovaspace.svg';
import logo_neurobio from '../img/logo_neurobio.svg';
import logo_nnnesp from '../img/logo_nnnesp.svg';
import logo_ufrgs from '../img/logo_ufrgs.svg';
import logo_unifesp from '../img/logo_unifesp.svg';
import logo_regente from '../img/logo_regente_branco.svg';
import Neutro_feliz from '../img/Neutro_feliz.svg';

import { useForm, Controller } from "react-hook-form";
import {StepComponentProps} from "react-step-builder";

import firebase from 'firebase';
import { SocialSharing } from '@ionic-native/social-sharing';

const Aderencia_2Final= (props: StepComponentProps) => {

  
 
  const [loader, setLoader]= useState<boolean>(false)
  const {control, watch, handleSubmit, errors, formState} = useForm({mode: "onChange"});
  const options = {
    cssClass: 'my-custom-interface'
  };
  const [meta1, setMeta1]= useState();
  const [meta2, setMeta2]= useState();
  const [meta3, setMeta3]= useState();
 
  const {data: user}= useUser();
  const [dataUser, setData] = useState()

  const [meta02CompletaText, setMeta02CompletaText]= React.useState("");
  const [meta02Completa, setMeta02Completa]= React.useState("");
  
  const db = firebase.firestore();
  const uid = user.uid

  async function getMeta02Complete() {
    const dbRef = await db.collection('usersFinal').doc(uid).get();
    const data = (await dbRef).data();

    if (data != undefined) {
      const data2: any = data;
      const dataMeta02 = data2.meta01_02coleta02Complete;

      console.log("meta 01_02 complete: " + dataMeta02)

      if (!(dataMeta02 === undefined)) {
        if (dataMeta02 === "sim"){
          setMeta02CompletaText("Percebemos que você terminou suas metas da segunda etapa! Parabéns! Agora você pode escolher mais uma meta adicional.")
          setMeta02Completa("y")
          } else if (dataMeta02 === "não"){
            setMeta02CompletaText("Percebemos que você não terminou suas metas da segunda etapa! Mas não se preocupe, você pode tentar novamente!")
            setMeta02Completa("n")
          }
      }
    }
  }
  getMeta02Complete()

  async function updateUserDataQuest1(dataUser: any){
     
    if(user){
        firebase.firestore().collection('metas').doc(user.uid).set({
            meta01Coleta03: String(props.state.meta01Coleta03),
            meta01Coleta03FreqSemanal: Number(props.state.meta01Coleta03FreqSemanal),
            meta02Coleta03: String(props.state.meta02Coleta03),
            meta02Coleta03FreqSemanal: Number(props.state.meta02Coleta03FreqSemanal),
            meta03Coleta03: String(props.state.meta03Coleta03),
            meta03Coleta03FreqSemanal: Number(props.state.meta03Coleta03FreqSemanal),

            meta3Definida: String("sim")
            
           }, {merge: true})
        }
    
        toast('Meta definida com sucesso!', 2000);
        
    
    }

    const history= useHistory();

    function calendar(){
      history.push('/calendar');
    }

    let metaShare = 0
    function socialSharingMetas() {

      /* 
    1:
    alt: Mascote do Regente vespertino, em cor azul escuro, dormindo. Em cima a frase: “Minha meta nas próximas duas semanas: ir dormir no mesmo horário”.

    2:
    alt: Mascote do Regente matutino, em cor laranja, com uma testeira branca e vermelha. Em cima a frase: “Minha meta nas próximas duas semanas: praticar exercício físico”.


    3:
    alt: Mascote do Regente matutino, em cor laranja, sorrindo de óculos escuros. Em cima a frase: “Minha meta nas próximas duas semanas: expor-se à luz natural de manhã”.

    4:
    alt: Mascote do Regente intermediário, em cor azul claro, comendo um sanduíche. Em cima a frase: “Minha meta nas próximas duas semanas: fazer as refeições no mesmo horário”.
    */
      if (meta1 === "alimentação"){
        metaShare = 1;
      } 
      if (meta1 === "sono"){
        metaShare = 2;
      } 
      if (meta1 === "exercicio"){
        metaShare = 3;
      } 
      if (meta1 === "luz"){
        metaShare = 4;
      }
      
      const imgs = ['https://i.imgur.com/WwDvd17.png', 'https://i.imgur.com/db0zU94.png', 'https://i.imgur.com/ctBKmyA.png', 'https://i.imgur.com/8DZmmpy.png'];
      const index =  metaShare - 1;
      
      SocialSharing.share('', '', imgs[index]);
     }


    const onSubmit = (data: any) => {
      setData(dataUser);
      setLoader(true);
      updateUserDataQuest1(dataUser);
      calendar();
   }

  return (
      

      <IonContent fullscreen className="ion-padding" color="background">
    
      <p className="texto-main aderencia">Acompanhe seu progresso!</p>
      <p className="texto-padrão aderencia ">Para acompanhar seu progresso, selecione quais hábitos você deseja acompanhar e defina uma meta principal para conquistar!</p>
      <p className="texto-padrão aderencia ">{meta02CompletaText}</p>
      <form className="ion-padding texto-default">

      <IonLoading message="Por favor aguarde..." duration={2000} isOpen={loader}/>
      <IonLabel className="questions">Selecione sua meta principal:</IonLabel>
              
              <IonItem lines="none">
            


                  <Controller render={({onChange}) => (

                  <IonSelect className={"select-interface-option"} okText="ok" cancelText="Cancelar" placeholder="Por favor, selecione..." value={meta1} onIonChange={(e) => {setMeta1(e.detail.value);
                      onChange(e.detail.value);
                      console.log(e);
                      if (e.detail.value != undefined) 
                      props.setState('meta01Coleta03', e.detail.value )}}>
                  <IonSelectOption value="exercicio" >Exercício</IonSelectOption>
                  <IonSelectOption value="alimentação" >Alimentação</IonSelectOption>
                  <IonSelectOption value="sono" >Sono</IonSelectOption>
                  <IonSelectOption value="luz" >Exposição à luz natural</IonSelectOption>
                  </IonSelect> )} control={control} name={'meta01Coleta03'} rules={{required:true}}/>
                  {errors.meta01Coleta03 && <IonText color="danger">Campo obrigatório.</IonText>}
               </IonItem>
      
      {(meta1 === "exercicio") ?

      <IonLabel className="questions">Quantas vezes por semana você quer se exercitar?</IonLabel> :null
      } 

      {(meta1 === "alimentação") ?

      <IonLabel className="questions">Quantas vezes por semana você quer controlar a regularidade da sua alimentação?</IonLabel> :null
      } 

      {(meta1 === "sono") ?

      <IonLabel className="questions">Quantas vezes por semana você quer controlar a regularidade do seu sono?</IonLabel> :null
      } 

      {(meta1 === "luz") ?

      <IonLabel className="questions">Quantas vezes por semana você quer se expor à luz natural?</IonLabel> :null
      } 

      {errors.metaFreqSemanal && <IonText color="danger">Campo obrigatório.</IonText>}    


       {((meta1 === "exercicio") || (meta1 === "alimentação") || (meta1 === "sono") || (meta1 === "luz") ) ?

            <IonItem lines="none">
                            
                                   
                            <Controller render={({onChange}) => (
                <IonInput type="number" placeholder="Digite o valor em dias" value= {props.getState("meta01Coleta03FreqSemanal", "")} onIonChange={
                    (e)=> {
                    console.log(e);
                    onChange(e.detail.value);
                    if (e.detail.value != undefined) 
                    props.setState('meta01Coleta03FreqSemanal', e.detail.value ); }}
                        
                    />
            )}
            name= "meta01Coleta03FreqSemanal"
            rules= {{ required: true}}
            control= {control}     
                
            />
           
           
                      
            </IonItem> :null
      } 

      {meta02Completa === "y" ?  
      <IonLabel className="questions">Selecione sua segunda meta:</IonLabel>  :null}

      {meta02Completa === "y" ?  
       <IonItem lines="none">
            


       <Controller render={({onChange}) => (
 
       <IonSelect className={"select-interface-option"} okText="ok" cancelText="Cancelar" placeholder="Por favor, selecione..." value={meta2} onIonChange={(e) => {setMeta2(e.detail.value);
           onChange(e.detail.value);
           console.log(e);
           if (e.detail.value != undefined) 
           props.setState('meta02Coleta03', e.detail.value )}}>
       <IonSelectOption value="exercicio" >Exercício</IonSelectOption>
       <IonSelectOption value="alimentação" >Alimentação</IonSelectOption>
       <IonSelectOption value="sono" >Sono</IonSelectOption>
       <IonSelectOption value="luz" >Exposição à luz natural</IonSelectOption>
       </IonSelect> )} control={control} name={'meta02Coleta03'} rules={{required:true}}/>
       {errors.meta02Coleta03 && <IonText color="danger">Campo obrigatório.</IonText>}
    </IonItem> :null}
       
       {(meta2 === "exercicio") ?

       <IonLabel className="questions">Quantas vezes por semana você quer se exercitar?</IonLabel> :null
       } 
 
       {(meta2 === "alimentação") ?
 
       <IonLabel className="questions">Quantas vezes por semana você quer controlar a regularidade da sua alimentação?</IonLabel> :null
       } 
 
       {(meta2 === "sono") ?
 
       <IonLabel className="questions">Quantas vezes por semana você quer controlar a regularidade do seu sono?</IonLabel> :null
       } 
 
       {(meta2 === "luz") ?
 
       <IonLabel className="questions">Quantas vezes por semana você quer se expor à luz natural?</IonLabel> :null
       } 
 
       {errors.meta02Coleta02FreqSemanal && <IonText color="danger">Campo obrigatório.</IonText>}    
 
 
       {((meta2 === "exercicio") || (meta2 === "alimentação") || (meta2 === "sono") || (meta2 === "luz") ) ?
 
       <IonItem lines="none">
                       
                              
                       <Controller render={({onChange}) => (
           <IonInput type="number" placeholder="Digite o valor em dias" value= {props.getState("meta02Coleta03FreqSemanal", "")} onIonChange={
               (e)=> {
               console.log(e);
               onChange(e.detail.value);
               if (e.detail.value != undefined) 
               props.setState('meta02Coleta03FreqSemanal', e.detail.value ); }}
                   
               />
       )}
       name= "meta02Coleta03FreqSemanal"
       rules= {{ required: true}}
       control= {control}     
           
       />
      
      
                 
       </IonItem> :null
        } 
       
       {meta02Completa === "y" ?  
       <IonLabel className="questions">Selecione sua terceira meta:</IonLabel>  :null}

      {meta02Completa === "y" ?  
       <IonItem lines="none">
            


       <Controller render={({onChange}) => (
 
       <IonSelect className={"select-interface-option"} okText="ok" cancelText="Cancelar" placeholder="Por favor, selecione..." value={meta3} onIonChange={(e) => {setMeta3(e.detail.value);
           onChange(e.detail.value);
           console.log(e);
           if (e.detail.value != undefined) 
           props.setState('meta03Coleta03', e.detail.value )}}>
       <IonSelectOption value="exercicio" >Exercício</IonSelectOption>
       <IonSelectOption value="alimentação" >Alimentação</IonSelectOption>
       <IonSelectOption value="sono" >Sono</IonSelectOption>
       <IonSelectOption value="luz" >Exposição à luz natural</IonSelectOption>
       </IonSelect> )} control={control} name={'meta03Coleta03'} rules={{required:true}}/>
       {errors.meta03Coleta03 && <IonText color="danger">Campo obrigatório.</IonText>}
    </IonItem> :null}

    {(meta3 === "exercicio") ?

        <IonLabel className="questions">Quantas vezes por semana você quer se exercitar?</IonLabel> :null
        } 

        {(meta3 === "alimentação") ?

        <IonLabel className="questions">Quantas vezes por semana você quer controlar a regularidade da sua alimentação?</IonLabel> :null
        } 

        {(meta3 === "sono") ?

        <IonLabel className="questions">Quantas vezes por semana você quer controlar a regularidade do seu sono?</IonLabel> :null
        } 

        {(meta3 === "luz") ?

        <IonLabel className="questions">Quantas vezes por semana você quer se expor à luz natural?</IonLabel> :null
        } 

        {errors.meta02Coleta02FreqSemanal && <IonText color="danger">Campo obrigatório.</IonText>}    


        {((meta3 === "exercicio") || (meta3 === "alimentação") || (meta3 === "sono") || (meta3 === "luz") ) ?

        <IonItem lines="none">
                        
                              
                        <Controller render={({onChange}) => (
            <IonInput type="number" placeholder="Digite o valor em dias" value= {props.getState("meta03Coleta03FreqSemanal", "")} onIonChange={
                (e)=> {
                console.log(e);
                onChange(e.detail.value);
                if (e.detail.value != undefined) 
                props.setState('meta03Coleta03FreqSemanal', e.detail.value ); }}
                    
                />
        )}
        name= "meta03Coleta03FreqSemanal"
        rules= {{ required: true}}
        control= {control}     
            
        />


                  
        </IonItem> :null
        } 

      {((meta1 === "exercicio") &&  (props.state.meta01Coleta03FreqSemanal !== undefined) && (meta02Completa === "n")) ?

        <div className="texto-confirma">
        Sua meta principal então é... se exercitar {props.state.meta01Coleta03FreqSemanal} vezes por semana!
        </div> :null

      }  

      {((meta1 === "alimentação") &&  (props.state.meta01Coleta03FreqSemanal !== undefined) && (meta02Completa === "n")) ?

      <div className="texto-confirma">
      Sua meta principal então é... controlar alimentação {props.state.meta01Coleta03FreqSemanal} vezes por semana!
      </div> :null

      }  

      {((meta1 === "sono") &&  (props.state.meta01Coleta03FreqSemanal !== undefined) && (meta02Completa === "n")) ?

      <div className="texto-confirma">
      Sua meta principal então é... controlar sono {props.state.meta01Coleta03FreqSemanal} vezes por semana!
      </div> :null

      }  

      {((meta1 === "luz") &&  (props.state.meta01Coleta03FreqSemanal !== undefined) && (meta02Completa === "n")) ?

      <div className="texto-confirma">
      Sua meta principal então é... controlar exposição à luz natural {props.state.meta01Coleta03FreqSemanal} vezes por semana!
      </div> :null

      }  

      {(((meta1 === "exercicio") || (meta1 === "alimentação") || (meta1 === "sono") || (meta1 === "luz") ) &&  (props.state.meta01Coleta03FreqSemanal !== undefined) && (meta02Completa === "n")) ?

      <div className="texto-confirma">
            Clique em definir para confirmar. Você também pode compartilhar sua meta e acompanhar seu progresso na aba Progresso!
      </div> :null

      }

      

      {((meta1 === "exercicio")  &&  (props.state.meta01Coleta03FreqSemanal !== undefined)) ?

        <div className="texto-confirma">
        Sua meta principal então é... se exercitar {props.state.meta01Coleta03FreqSemanal} vezes por semana!
        </div> :null

      }

      {((meta1 === "alimentação")  &&  (props.state.meta01Coleta03FreqSemanal !== undefined)) ?

      <div className="texto-confirma">
      Sua meta principal então é... controlar alimentação {props.state.meta01Coleta03FreqSemanal} vezes por semana!
      </div> :null

      }

      {((meta1 === "sono")  &&  (props.state.meta01Coleta03FreqSemanal !== undefined)) ?

      <div className="texto-confirma">
      Sua meta principal então é... controlar sono {props.state.meta01Coleta03FreqSemanal} vezes por semana!
      </div> :null

      }

      {((meta1 === "luz")  &&  (props.state.meta01Coleta03FreqSemanal !== undefined)) ?

      <div className="texto-confirma">
      Sua meta principal então é... controlar exposição à luz natural {props.state.meta01Coleta03FreqSemanal} vezes por semana!
      </div> :null

      }

      {((meta2 === "exercicio")  &&  (props.state.meta02Coleta03FreqSemanal !== undefined)) ?

      <div className="texto-confirma">
      Sua segunda meta então é... se exercitar {props.state.meta02Coleta03FreqSemanal} vezes por semana!
      </div> :null

      }

      {((meta2 === "alimentação")  &&  (props.state.meta02Coleta03FreqSemanal !== undefined)) ?

      <div className="texto-confirma">
      Sua segunda meta então é... controlar alimentação {props.state.meta02Coleta03FreqSemanal} vezes por semana!
      </div> :null

      }

      {((meta2 === "sono")  &&  (props.state.meta02Coleta03FreqSemanal !== undefined)) ?

      <div className="texto-confirma">
      Sua segunda meta então é... controlar sono {props.state.meta02Coleta03FreqSemanal} vezes por semana!
      </div> :null

      }

      {((meta2 === "luz")  &&  (props.state.meta02Coleta03FreqSemanal !== undefined)) ?

      <div className="texto-confirma">
      Sua segunda meta então é... controlar exposição à luz natural {props.state.meta02Coleta03FreqSemanal} vezes por semana!
      </div> :null

      }

      {((meta3 === "luz")  &&  (props.state.meta03Coleta03FreqSemanal !== undefined)) ?

      <div className="texto-confirma">
      Sua terceira meta então é... controlar exposição à luz natural {props.state.meta03Coleta03FreqSemanal} vezes por semana!
      </div> :null

      }

      {((meta3 === "exercicio")  &&  (props.state.meta03Coleta03FreqSemanal !== undefined)) ?

      <div className="texto-confirma">
      Sua terceira meta então é... se exercitar {props.state.meta03Coleta03FreqSemanal} vezes por semana!
      </div> :null

      }

      {((meta3 === "sono")  &&  (props.state.meta03Coleta03FreqSemanal !== undefined)) ?

            <div className="texto-confirma">
            Sua terceira meta então é... controlar sono {props.state.meta03Coleta03FreqSemanal} vezes por semana!
            </div> :null

            }

      {((meta3 === "alimentação")  &&  (props.state.meta03Coleta03FreqSemanal !== undefined)) ?

      <div className="texto-confirma">
      Sua terceira meta então é... controlar alimentação {props.state.meta03Coleta03FreqSemanal} vezes por semana!
      </div> :null

      }


  {((((meta2 && meta3) === "exercicio") || ((meta2 && meta3) === "alimentação") || ((meta2 && meta3) === "sono") || ((meta2 && meta3) === "luz") ) &&  ((props.state.meta02Coleta03FreqSemanal && props.state.meta03Coleta03FreqSemanal) !== undefined)) ?

    <div className="texto-confirma">
          Clique em definir para confirmar. Você também pode compartilhar sua meta e acompanhar seu progresso na aba Progresso!
    </div> :null

    }

      
      </form>


      <IonButton disabled={formState.isValid === false} color="orange" onClick={socialSharingMetas} className={"btnAnterior"} size="default" shape="round" fill="outline">Compartilhar</IonButton>
      <IonButton disabled={formState.isValid === false} color="orange"  className={"btnProximo"} onClick={onSubmit} size="default" shape="round" fill="outline">Definir</IonButton>
        
      
      
      
    

      </IonContent>

    
  );
};

export default Aderencia_2Final;
