import React, { useEffect, useState} from 'react';
import { IonContent, IonHeader, IonPage, IonText, IonTitle, IonToolbar } from '@ionic/react';


import './Home.css';


import { IonGrid, IonRow, IonCol, IonSlides, IonSlide } from '@ionic/react';

import { IonCard, IonNote, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonItem, IonModal, IonItemDivider, IonButton, IonLoading, IonLabel, IonInput, IonButtons, IonMenuButton, IonSelect, IonSelectOption} from '@ionic/react';


import distanciamentoExp from '../../src/img/distanciamentoExp.png';

import social_distancing from '../../src/img/social_distancing.svg';
import distancing from '../../src/img/distancing.svg';
import isolation from '../../src/img/isolation.svg';
import quarantine from '../../src/img/quarantine.svg';

import ExplanationSlides from '../../src/pages/ExplanationSlides';

import {auth} from '../../src/firebaseConfig/firebaseConfig';
import  { Redirect, useHistory } from 'react-router-dom' 

import {logoutUser} from '../../src/firebaseConfig/firebaseConfig';
import { toast } from '../toast';

import {useUser} from 'reactfire';
import matutino_feliz from '../img/Matutino_feliz.svg';


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

const Aderencia_2= (props: StepComponentProps) => {

  
 
  const [loader, setLoader]= useState<boolean>(false)
  const {control, watch, handleSubmit, errors, formState} = useForm({mode: "onChange"});
  const options = {
    cssClass: 'my-custom-interface'
  };
  const [meta1, setMeta1]= useState();
  let metaShare = 0
 
  const {data: user}= useUser();
  const [dataUser, setData] = useState()
  const [showModalInicial, setShowModalInicial] = useState(false);

  const [valueInput, setValueInput] = useState<number | undefined>(undefined);

  async function updateUserDataQuest1(dataUser: any){
     
    if(user){
        firebase.firestore().collection('metas').doc(user.uid).set({
            meta01Coleta01: String(props.state.meta01Coleta01),
            meta01Coleta01FreqSemanal: Number(props.state.meta01Coleta01FreqSemanal),
            meta1Definida: String("sim")
            
           }, {merge: true})
        }
    
        toast('Meta definida com sucesso!', 2000);
        
    
    }

    const history= useHistory();

    function calendar(){
      setShowModalInicial(false)
      history.push('/calendar');
    }

    function home(){
      setShowModalInicial(false)
      history.push('/tab1');
    }

    const onSubmit = (data: any) => {
      setData(dataUser);
      setLoader(true);
      updateUserDataQuest1(dataUser);
      setShowModalInicial(true);
      //calendar();
   }

   const modalMeta = (data: any) => {
    setShowModalInicial(true);
   }

  

    
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
    setShowModalInicial(false)
   }

  return (
      

      <IonContent fullscreen className="ion-padding" color="background">
    
      <p className="texto-main aderencia">Defina uma meta</p>
      <p className="texto-padrão aderencia ">Você poderá registrar e acompanhar seu progresso.</p>

      <form className="ion-padding texto-default">

      <IonLoading message="Por favor aguarde..." duration={2000} isOpen={loader}/>
      <IonLabel className="questions">Qual rotina você quer melhorar?</IonLabel>
              
              <IonItem lines="none">
            


                  <Controller render={({onChange}) => (

                  <IonSelect className={"select-interface-option"} okText="ok" cancelText="Cancelar" placeholder="Por favor, selecione..." value={meta1} onIonChange={(e) => {setMeta1(e.detail.value);
                      onChange(e.detail.value);
                      console.log(e);
                      if (e.detail.value != undefined) 
                      props.setState('meta01Coleta01', e.detail.value )}}>
                  <IonSelectOption value="exercicio" >Exercício</IonSelectOption>
                  <IonSelectOption value="alimentação" >Alimentação</IonSelectOption>
                  <IonSelectOption value="sono" >Sono</IonSelectOption>
                  <IonSelectOption value="luz" >Exposição à luz natural</IonSelectOption>
                  </IonSelect> )} control={control} name={'meta01Coleta01'} rules={{required:true}}/>
                  {errors.meta01Coleta01 && <IonText color="danger">Campo obrigatório.</IonText>}
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

       {(meta1 === "luz") || (meta1 === "sono") || (meta1 === "alimentação") || (meta1 === "exercicio") ?

      <IonNote className="questions">O número deve estar entre 1 e 7.</IonNote> :null
      } 

      {errors.metaFreqSemanal && <IonText color="danger">Campo obrigatório.</IonText>}    


       {((meta1 === "exercicio") || (meta1 === "alimentação") || (meta1 === "sono") || (meta1 === "luz") ) ?

            <IonItem lines="none">
                            
                                   
                            <Controller render={({onChange}) => (
                <IonInput type="number" min='1' max='7' placeholder="Digite o valor em dias" value= {props.getState("meta01Coleta01FreqSemanal", "")} onIonChange={
                    (e)=> {
                    console.log(e);
                    onChange(e.detail.value);
                    if (e.detail.value != undefined) 
                    props.setState('meta01Coleta01FreqSemanal', e.detail.value ); }}
                        
                    />
            )}
            name= "meta01Coleta01FreqSemanal"
            rules= {{ required: true}}
            control= {control}     
            
            />
           
           
                      
            </IonItem> :null
      } 

      {((props.state.meta01Coleta01FreqSemanal !== undefined) && ((props.state.meta01Coleta01FreqSemanal <= 0) || (props.state.meta01Coleta01FreqSemanal > 7)) ) ?

      <div className="texto-confirma">
        <IonText  color="danger">Insira um valor entre 1 e 7.</IonText>
      </div> :null

      }
    
      {((meta1 === "exercicio") &&  (props.state.meta01Coleta01FreqSemanal !== undefined) && ((props.state.meta01Coleta01FreqSemanal >= 1) && (props.state.meta01Coleta01FreqSemanal <= 7))) ?

      <div className="texto-confirma">
        Sua meta então é... se exercitar {props.state.meta01Coleta01FreqSemanal} vezes por semana!
      </div> :null

      }

      
      {((meta1 === "alimentação") &&  (props.state.meta01Coleta01FreqSemanal !== undefined) && ((props.state.meta01Coleta01FreqSemanal >= 1) && (props.state.meta01Coleta01FreqSemanal <= 7))) ?

      <div className="texto-confirma">
        Sua meta então é... controlar alimentação {props.state.meta01Coleta01FreqSemanal} vezes por semana!
      </div> :null

      }

      {((meta1 === "sono") &&  (props.state.meta01Coleta01FreqSemanal !== undefined) && ((props.state.meta01Coleta01FreqSemanal >= 1) && (props.state.meta01Coleta01FreqSemanal <= 7))) ?

      <div className="texto-confirma">
        Sua meta então é... controlar sono {props.state.meta01Coleta01FreqSemanal} vezes por semana!
      </div> :null

      }

      {((meta1 === "luz") &&  (props.state.meta01Coleta01FreqSemanal !== undefined) && ((props.state.meta01Coleta01FreqSemanal >= 1) && (props.state.meta01Coleta01FreqSemanal <= 7))) ?

      <div className="texto-confirma">
        Sua meta então é... controlar exposição à luz natural {props.state.meta01Coleta01FreqSemanal} vezes por semana!
      </div> :null

      }

{((props.state.meta01Coleta01FreqSemanal !== undefined) && ((props.state.meta01Coleta01FreqSemanal >= 1) && (props.state.meta01Coleta01FreqSemanal <= 7)) ) ?
<div className='button-mid'>
<IonButton disabled={formState.isValid === false} color="orange" className='button-mid' onClick={onSubmit} size="default" shape="round" fill="outline">Definir</IonButton>
</div> 
:null

}

{/*Você também pode compartilhar sua meta e acompanhar seu progresso na aba Progresso!*/}


                      <IonModal isOpen={showModalInicial} showBackdrop={true}
                        cssClass='custom-modal selectable'
                        onDidDismiss={() => setShowModalInicial(false)}>
                        <IonContent color="primary">

                        <div className={"div-sonoSintomas"}>
                          <img src={matutino_feliz} alt="mascote no celular" className={"img-sonoSintomas"} />
                            <br />
                            <p className='sono-sintomas-modalText'>Meta definida!</p>
                            <p className='sono-sintomas-modalText'>A partir de agora você pode marcar os dias que realizou sua meta e a acompanhar. Para isso, clique e acesse 'Progresso'.</p>
                            <p className='sono-sintomas-modalText'>Você também pode compartilhar sua meta nas redes sociais clicando em 'Compartilhar'.</p>
                            <p className='sono-sintomas-modalText'>Ou se preferir, pode voltar para a página inicial clicando em 'Home'.</p>
                          </div>
                         
                          <div className="ion-text-center">
                            <IonButton className={"button-left"} color="white" onClick={calendar}>Progresso</IonButton>
                            <IonButton color="white" onClick={socialSharingMetas}>Compartilhar</IonButton>
                            
                            <IonButton className={"button-right"} color="white" onClick={home}>Home</IonButton>
                          </div>
                          

                        </IonContent>

                      </IonModal>


      
      </form>


      {/*<IonButton disabled={formState.isValid === false} color="orange"  className={"btnAnterior"} onClick={socialSharingMetas} size="default" shape="round" fill="outline">Compartilhar</IonButton>*/}
      
        
      
      
      
    

      </IonContent>

    
  );
};

export default Aderencia_2;
