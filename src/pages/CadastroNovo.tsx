import React from 'react';
import { IonContent, IonHeader, IonInput, IonLabel, IonPage, IonTitle, IonToolbar, IonIcon, IonModal } from '@ionic/react';


import './Login.css';
import logo_regente from '../img/logo_regente.png';
import {IonButton} from '@ionic/react';
import {IonLoading} from '@ionic/react';

import regenteLogo from '../../src/img/logo_regente.png';
import {useState} from 'react';
import { toast } from '../toast';
import {useHistory} from 'react-router';

import {cadastroUser, loginAnonimo} from '../firebaseConfig/firebaseConfig';

import {mailOutline, eyeOutline, eyeOffOutline, personOutline} from  'ionicons/icons';
import {StepComponentProps} from "react-step-builder";

const Cadastro = (props: StepComponentProps) => {

  const [email, setEmail] = useState();
  const [senha, setSenha] = useState();
  const [csenha, setCSenha] = useState();

  const [showSenha, setShowSenha]= useState(false);
  const [showCSenha, setShowCSenha]= useState(false);

  const history= useHistory();

  const [showModal, setShowModal] = useState(false);
  const [showModalPriv, setShowModalPriv] = useState(false);
  const [agreeTerms, setAgreeTerms] = useState(false);
  const [agreeTermsPriv, setAgreeTermsPriv] = useState(false);
  const [errorLogin, setErrorLogin]= useState(false);

  const agree = () => {
    setAgreeTerms(true)
    setShowModal(false)
  }

  const agreePriv = () => {
    setAgreeTermsPriv(true)
    setShowModalPriv(false)
  }

  const passwordVisibility = () => {
    setShowSenha(showSenha ? false: true)
  }

  const cpasswordVisibility = () => {
    setShowCSenha(showCSenha ? false: true)
  }

  async function LoginAnonimo(){

   // const res = await loginAnonimo

   props.setState('loginAnonimo', true);
   toast('Login feito com sucesso')
   return props.jump(2);

   /* if (!res){
      setErrorLogin(true)
    } 
    else {
      props.setState('loginAnonimo', true);
      toast('Login feito com sucesso')
      return props.jump(2);
    } */
  }

  
  async function goPerfil(){
    
        history.push('/perfil_1novo');
     
  }

  function isEmailValid(email: any){
    console.log(email);
    var regexp = new RegExp(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);
    return regexp.test(email);
  }

  function isRegisterValid(){
    if (props.state.email === '' || props.state.senha === '' || props.state.csenha === '') {
      toast ('Email e senha são requeridos')
      return false

    } else if (String(props.state.senha).length < 6){
      toast('A senha deve conter no mínimo 6 caracteres')
      return false
    }

    else if (props.state.senha != props.state.csenha){
      toast ('As senhas não são iguais')
      return false

    } else{
      return true      
    }
  }

  async function validateRegister(){
    console.log(props.state.email);
    const email =  await isEmailValid(props.state.email);
    const register = await isRegisterValid();
    //const password = await isPasswordValid(props.state.password);

    if (!email){
      toast('Email inválido!')
      return false;
      
    //else if(!password){
      //toast('Senha muito fraca! Use no mínimo 6 caracteres.')
      //return false;

    } else if(!register){
      return false;

    } else{
      return true;
    }

  }

  async function validateFields() {
    var register = await validateRegister();
      if(register) {
        //toast('ESTAMOS AQUI!!!')
        return props.jump(2);
      }

  }

  return (
   
    <IonContent fullscreen className="ion-text-center texto-app">

      <div id="outer">
      <div id="inner">

      <div>
        <img src={logo_regente} className={"logo-login"} alt={"Logo regente"}/>
      </div>
      
      <div>
        <p className={"texto-login"}> Boas-vindas! </p>
      </div>

      <div className={"texto-boasVindas"}>
        <p>Para saber mais sobre o seu cronotipo e receber dicas personalizadas de acordo com o seu perfil, crie uma conta: </p>
      </div>

      <div className="errorLogin" hidden={!errorLogin}>
        <p><b>Erro no login anônima!</b> Tente novamente </p>
      </div>

      <div className='label'>
        
      </div>
      <IonInput type="email" placeholder="E-mail"  name= "email" id="email" onIonChange={(e:any) => {setEmail(e.target.value);
        if (e.detail.value != undefined) 
        props.setState('email', e.detail.value ) }}>
        <IonIcon icon={personOutline}></IonIcon>
      </IonInput>

      <div className='label'>
        
      </div>
      <IonInput type={showSenha ? "text" : "password"}    name= "senha" placeholder="Senha" id="senha" onIonChange={(e:any) => {setSenha(e.target.value); 
                                if (e.detail.value != undefined) 
                                props.setState('senha', e.detail.value )  }}> 
        <IonIcon onClick={passwordVisibility} hidden={showSenha ? true: false} icon={eyeOutline} float-right></IonIcon>
        <IonIcon onClick={passwordVisibility} hidden={showSenha ? false: true} icon={eyeOffOutline} float-right></IonIcon>
      </IonInput> 

      <div className='label'>
       
      </div>
      <IonInput type={showCSenha ? "text" : "password"} placeholder="Confirme sua senha" name="csenha" id="csenha" onIonChange={(e:any) => {setCSenha(e.target.value); 
      if (e.detail.value != undefined) 
      props.setState('csenha', e.detail.value )  
      }}> 
        <IonIcon onClick={cpasswordVisibility} hidden={showCSenha ? true: false} icon={eyeOutline} float-right></IonIcon>
        <IonIcon onClick={cpasswordVisibility} hidden={showCSenha ? false: true} icon={eyeOffOutline} float-right></IonIcon>
      </IonInput>


      <p>Antes de se cadastrar, leia nossos <a onClick={() => setShowModal(true)}>termos de uso - ReGente</a> e <a onClick={() => setShowModalPriv(true)}>política de privacidade.</a></p>
      
      <IonModal 
        isOpen={showModal} 
        
        onDidDismiss={() => setShowModal(false)}
      >
        
        <IonContent>
        <h1>Termos de uso</h1>
       
        <p>
          
          Olá! Agradecemos a sua escolha pelo aplicativo “ReGente”

        </p>   

        <p>

          O APLICATIVO (“ReGente”) oferece às PESSOAS USUÁRIAS a possibilidade de compreender e acompanhar aspectos da sua saúde a partir de informações sobre hábitos e organização de rotina e recomendações oferecidas com base em pesquisas científicas, respaldo teórico e diretrizes emitidas por órgãos oficiais de saúde.

        </p>

        <p>
          LEIA ATENTAMENTE ESTES TERMOS ANTES DE UTILIZAR O APLICATIVO. Estes TERMOS DE USO regulam o relacionamento entre você e os serviços disponibilizados por nós. A aceitação aos termos aqui descritos, em conjunto com a nossa POLÍTICA DE PRIVACIDADE é indispensável à utilização do APLICATIVO “ReGente”.

        </p>
        
        <h2>Definições importantes</h2>
        <p>
        a.	APLICATIVO: refere-se à plataforma/software “ReGente”, desenvolvido e publicado exclusivamente por [RESPONSÁVEL PELA PUBLICAÇÃO], nas lojas oficiais Google Play Store e Apple App Store, através do qual PESSOAS USUÁRIAS terão acesso às funcionalidades mediante a realização de cadastro.
        </p>

        <p>
        b.	CONTA PESSOAL: seção única que concentra as informações pessoais e de login no aplicativo sobre PESSOAS USUÁRIAS.
        </p>

        <p>
        c.	CONTEÚDO: variedade de informações, textos, recomendações, mensagens, comentários, recurso audiovisual ou material infográfico disponibilizados pela plataforma “ReGente” a PESSOAS USUÁRIAS por meio do uso do APLICATIVO.

        </p>

        <p>
        d.	DADOS CADASTRAIS: conjunto de informações coletadas e tratadas pela plataforma “ReGente” relativas à identificação de determinada PESSOA USUÁRIA.

        </p>

        <p>
        e.	PESSOA USUÁRIA ou VOCÊ: indivíduo, pessoa física devidamente cadastrada na PLATAFORMA, que acessa e aproveita os serviços oferecidos com o objetivo de compreender, registrar e receber informações relativas à sua saúde.

        </p>
        
        
        <h2>1. O APLICATIVO “ReGente” | CONDIÇÕES GERAIS</h2>
        <p>
        1.1	O “ReGente” é um aplicativo que busca oferecer, a PESSOAS USUÁRIAS, um sistema organizado de autoconhecimento através do registro e acompanhamento sobre atividades rotineiras, humor, sensações de bem-estar e hábitos pessoais, bem como pela disponibilização de recomendações personalizadas e periódicas a partir das informações inseridas na plataforma pelas próprias PESSOAS USUÁRIAS.

        </p>

        <p>
        1.2	A solução apresentada pelo aplicativo “ReGente”, ainda que potencialmente considerada como terapêutica, não representa prática da medicina ou da psicologia, tampouco caracteriza ou substitui qualquer tratamento relacionado, uma vez que não oferece atendimentos de natureza psicológica ou psiquiátrica, ainda que em formato virtual, ou qualquer outra metodologia que represente ou resulte em diagnósticos de natureza psicológica ou psiquiátrica. Nesse sentido, o uso da plataforma “ReGente” não estabelece uma relação clínica, bem como a disponibilização do aplicativo não está sujeita a validação ou autorização emitida por órgãos governamentais ou agências reguladoras.

        </p>

        <p>
        1.3	As informações e CONTEÚDOS são disponibilizados pela plataforma “ReGente” revestidos de boa-fé e com a intenção de gerar benefícios diretos ou indiretos às PESSOAS USUÁRIAS. Caso haja qualquer dúvida a respeito da sua condição clínica, recomendamos, antes de utilizar o aplicativo, que VOCÊ consulte previamente médicos ou psicólogos.


        </p>

        <p>
        1.4	Cada PESSOA USUÁRIA que opte pela utilização da plataforma “ReGente” o faz de livre e espontânea vontade, ciente de que é unicamente responsável pela decisão de quais recomendações aplicar em sua rotina e como aplicá-las. Todos os CONTEÚDOS são disponibilizados com o propósito de informar e não substituem, sob nenhuma hipótese, acompanhamento médico ou terapêutico profissional.

        </p>

        <p>
        1.5	Em hipótese alguma a plataforma “ReGente”, seus mantenedores, pesquisadores, colaboradores, contratados, subcontratados, executivos ou qualquer outra pessoa diretamente envolvida na disponibilização do APLICATIVO será responsabilizada por perdas ou danos causados pelo uso do mesmo ou pela interpretação ou emprego dos CONTEÚDOS disponibilizados.


        </p>

        <h2> 2.	LICENÇA PARA USO DO APLICATIVO “ReGente”</h2>
        <p>
        2.1	Em contrapartida ao aceite dos presentes TERMOS DE USO e criação de uma CONTA PESSOAL, a plataforma “ReGente” concede à PESSOA USUÁRIA uma licença limitada e revogável, para uso pessoal, não exclusiva, não sublicenciável e não transferível, durante período determinado para acessar os CONTEÚDOS oferecidos na plataforma.

        </p>

        <p>
        2.2	A licença concedida não transfere às PESSOAS USUÁRIAS qualquer direito sobre o aplicativo, CONTEÚDOS gerados ou qualquer outra informação protegida por direitos de propriedade intelectual, conforme mencionado nestes TERMOS DE USO.


        </p>

        <p>
        2.3	É expressamente vedado incorporar a solução oferecida pela plataforma “ReGente” a um produto ou serviço que VOCÊ forneça a terceiros, gratuitamente ou não, bem como interferir com qualquer mecanismo de forma a contornar os sistemas de segurança e proteção existentes no APLICATIVO e destinados a limitar o seu uso. No mesmo sentido, a transmissão a terceiros de cópias dos CONTEÚDOS gerados é expressamente proibida.


        </p>

        <p>
        2.4	Não é permitido realizar qualquer tipo de engenharia reversa a fim de buscar obter ou derivar o código-fonte, ideias subjacentes, algoritmos, formatos de arquivo, APIs não públicas ou outras possibilidades relacionadas à funcionalidade do aplicativo.


        </p>

        <h2> 3.	CONDIÇÕES DE USO | PROCEDIMENTO DE CADASTRO</h2>
        <p>
        3.1	PESSOAS USUÁRIAS que desejem usufruir das funcionalidades oferecidas pelo aplicativo “ReGente” deverão realizar o procedimento de cadastro de natureza pessoal e intransferível.


        </p>

        <p>
        3.2	Para realizar o procedimento de cadastro, é indispensável que a PESSOA USUÁRIA:
a.	Seja pessoa física, maior de 18 anos, civilmente capaz de firmar contratos, conforme disposto na legislação brasileira, e se responsabilize pelos termos dispostos neste instrumento;
b.	Compreenda e aceite os termos dispostos neste instrumento, que regerá o relacionamento entre a PESSOA USUÁRIA e a plataforma.



        </p>

        <p>
        3.3	Cada PESSOA USUÁRIA é unicamente responsável pela exatidão, integridade e autenticidade dos dados pessoais inseridos nos formulários, respondendo civil e criminalmente pela ilegalidade de determinadas informações e isentando o aplicativo “ReGente” e/ou profissionais parceiros de quaisquer danos ou prejuízos decorrentes da inexatidão dos dados informados.



        </p>

        <p>
        3.4	A inserção de informações imprecisas, sabidamente incorretas ou falsas viola os presentes TERMOS DE USO e pode ocasionar a exclusão da conta pessoal no sistema da plataforma “ReGente”. 



        </p>

        <p>
        3.5	A plataforma “ReGente” reserva a si o direito de recusar, suspender ou cancelar contas pessoais, independentemente de notificação prévia, sempre que identificar uma concreta ou potencial violação a estes TERMOS DE USO. Essas ações não acarretam a PESSOAS USUÁRIAS qualquer direito ou pretensão de reparação, inclusive sobre perda de acesso a eventual CONTEÚDO gerado pela plataforma. 


        </p>

        <h2> 4.	CONDUTA ONLINE | RESPONSABILIDADES DAS PESSOAS USUÁRIAS</h2>
        <p>
        4.1	Enquanto PESSOA USUÁRIA da plataforma “ReGente”, você declara que:
a.	Utilizará todo e qualquer CONTEÚDO gerado pela plataforma para fins unicamente pessoais, de maneira consciente e em observância às legislações e regulamentos aplicáveis, sempre de boa-fé e de acordo com os melhores objetivos e princípios norteadores da Lei.
b.	Será unicamente responsável perante terceiros por qualquer publicização ou transmissão de qualquer CONTEÚDO gerado pela plataforma relacionado à VOCÊ ou às informações que VOCÊ inseriu na plataforma durante o seu uso regular, isentando a plataforma “ReGente” de qualquer responsabilidade nesse sentido, e ciente de que a transmissão de cópias do CONTEÚDO é expressamente proibida pelos presentes TERMOS DE USO.
d.	Não utilizará a plataforma “ReGente” para a violação de qualquer direito de terceiro, lei ou normativa aplicável a nível local, estadual, nacional ou internacional, incluindo regulamentações relacionadas à área da saúde, exercício de medicina ou da profissão de psicologia.
f.	Não carregará para a plataforma qualquer arquivo corrompido, malicioso ou qualquer outro, inclusive software, que possam afetar de forma adversa a operação de outro computador ou da plataforma, direta ou indiretamente.


        </p>

        <p>
        4.2	Cada PESSOA USUÁRIA é unicamente responsável pela utilização de aparelhos eletrônicos compatíveis com as funcionalidades oferecidas, com conexão à internet em velocidade adequada para aproveitamento do APLICATIVO e com sistemas operacionais atualizados de acordo com as versões requeridas para o aproveitamento das funcionalidades. 


        </p>

        <p>
        4.3	Cabe às PESSOAS USUÁRIAS a adoção das medidas de segurança que entender necessárias e suficientes para impedir o acesso e uso da plataforma por terceiros não autorizados. A plataforma “ReGente” não será responsabilizada por acessos indevidos decorrentes de falhas pessoais na manutenção da segurança e sigilo de uma conta pessoal. Comunicados e notificações eventualmente enviadas pela plataforma jamais possuirão anexos, arquivos executáveis, instalações de softwares de terceiros.


        </p>

        <h2> 5.	DAS RESPONSABILIDADES E GARANTIAS DO APLICATIVO “ReGente”</h2>
        <p>
        5.1	Pela própria natureza inerente às informações prestadas, a plataforma “ReGente” não oferece qualquer tipo de garantia em relação aos CONTEÚDOS disponibilizados às PESSOAS USUÁRIAS. 
        </p>

        <p>
        5.2	A plataforma disponibiliza seus CONTEÚDOS, frutos do desenvolvimento de pesquisas acadêmicas e fontes confiáveis, sempre de boa-fé e com a intenção de gerar benefícios diretos ou indiretos às PESSOAS USUÁRIAS através da correlação entre as informações inseridas na plataforma, metas pessoais estabelecidas, autoavaliação periódica e dados científicos. A plataforma “ReGente” não é capaz de garantir que os CONTEÚDOS gerados atenderão as necessidades e expectativas de PESSOAS USUÁRIAS, ou que eles estejam adequados à realidade específica de determinada PESSOA USUÁRIA. No mesmo sentido, a plataforma “ReGente” expressamente descarta qualquer possibilidade ou garantia de adequação relacionada aos CONTEÚDOS gerados e o tratamento de transtornos psicológicos ou psiquiátricos de qualquer natureza.

        </p>

        <p>
        5.3	À luz dos termos já expostos, a plataforma “ReGente” não poderá ser responsabilizada por PESSOAS USUÁRIAS em virtude de quaisquer danos resultantes do uso da plataforma, do emprego do CONTEÚDO gerado, bem como pela perda de acesso à plataforma, independentemente se por sua própria iniciativa ou por iniciativa da PESSOA USUÁRIA devidamente cadastrada. A isenção de responsabilidade se estende sobre qualquer dano decorrente da indisponibilidade temporária ou permanente, bem como de eventuais erros no funcionamento.

        </p>

        <p>
        5.4	A disponibilização dos serviços, bem como a sua vinculação, ou não, a uma contrapartida financeira por parte das PESSOAS USUÁRIAS está sujeita a revogação, atualização ou alteração a qualquer tempo, desde que as PESSOAS USUÁRIAS devidamente cadastradas sejam avisadas sobre os novos termos com uma antecedência mínima de 30 (trinta) dias.

        </p>

        <p>
        5.5	A plataforma “ReGente” reserva a si o direito de auxiliar e cooperar com autoridades judiciais ou órgãos governamentais sempre que provocada, sem que isso gere qualquer pretensão reparatória a PESSOAS USUÁRIAS, podendo, para tanto, transmitir, compartilhar ou fornecer informações sobre contas, inclusive dados pessoai.


        </p>

        <h2> 6.	UTILIZAÇÃO DAS INFORMAÇÕES PARA FINS DE PESQUISA CIENTÍFICA E ACADÊMICA</h2>
        <p>
        6.1	Através destes TERMOS DE USO, VOCÊ declara estar ciente de que a plataforma “ReGente” é fruto de desenvolvimento de projeto de pesquisa e contribui ativamente para a formação de pessoas pesquisadoras e geração de conhecimento para universidades, especialmente a Universidade Federal do Rio Grande do Sul e projetos vinculados ao Hospital de Clínicas de Porto Alegre/RS. O projeto que deu origem à plataforma “ReGente” foi avaliado e aprovado pela Comissão Nacional de Ética em Pesquisa (CONEP) e pelo Comitê de Ética em Pesquisa do Hospital de Clínicas de Porto Alegre.


        </p>

        <p>
        6.2	VOCÊ declara estar ciente e concordar, consequentemente, que estatísticas e informações anonimizadas relacionadas ao uso do APLICATIVO por PESSOAS USUÁRIAS poderá ser tratado, em observância à legislação aplicável, especialmente a Lei Geral de Proteção de Dados, para fins de desenvolvimento de pesquisas científicas e acadêmicas.



        </p>

        <h2> 7.	DISPONIBILIZAÇÃO DO APLICATIVO “ReGente” NO ESTADO EM QUE SE ENCONTRA</h2>
        <p>
        7.1	Todos os serviços e funcionalidades estão em contínuo desenvolvimento e são oferecidos “no estado em que se encontram”, ou “conforme disponível”, de acordo com a versão mais atualizada disponível às PESSOAS USUÁRIAS. Eventual indisponibilidade definitiva ou temporária do APLICATIVO não gerará qualquer tipo de pretensão indenizatória.


        </p>

        <p>
        7.2	A plataforma “ReGente” agirá com prevenção e proatividade para buscar a segurança, precisão e confiabilidade dos serviços e funcionalidades disponibilizadas. Contudo, em virtude de questões operacionais, não é possível garantir a disponibilidade integral e permanente de seus serviços e funcionalidades do APLICATIVO, a completa inexistência de quaisquer falhas e erros ou que este APLICATIVO esteja completamente isento de invasões de segurança, ataques ou interferências. Ciente desse cenário, e no limite da legislação vigente, a plataforma “ReGente” isenta-se de qualquer responsabilidade.



        </p>

        <p>
        7.3	Em razão de utilizar serviços de terceiros para manter o funcionamento do APLICATIVO, a plataforma “ReGente” não se responsabiliza por qualquer indisponibilidade causada por circunstâncias alheias, inclusive, e não se limitando a, falhas, suspensões e interrupções de internet, queda de energia elétrica, mau funcionamento de qualquer rede de telecomunicações que resulte na interrupção ou suspensão de softwares ou servidores.



        </p>

        <h2> 8.	DIREITOS DE PROPRIEDADE INTELECTUAL</h2>
        <p>
        8.1	Salvo quando houver indicação inversa, a plataforma “ReGente” é detentora de todos os direitos sobre propriedade intelectual necessários relacionados ao aplicativo e à totalidade do CONTEÚDO disponibilizado às PESSOAS USUÁRIAS. 


        </p>

        <p>
        8.2	Os CONTEÚDOS acessados e disponíveis na plataforma “ReGente”, incluindo, mas não se limitando a informações, tabelas, arquivos, dados, códigos, ilustrações, vídeos, fotografias, áudios, gráficos e quaisquer outros tipos de obras intelectuais e logotipos são protegidos por direitos de propriedade intelectual de acordo com a legislação brasileira e convenções internacionais. O acesso e eventual aproveitamento dos CONTEÚDOS gerados não implica em qualquer cessão de direitos ou licença adicional ao uso previsto nos presentes TERMOS DE USO.


        </p>

        <p>
        8.3	Nos limites aqui expostos, as PESSOAS USUÁRIAS da plataforma “ReGente” não estão autorizadas a modificar, publicar, distribuir, transmitir, comercializar, produzir derivações ou explorar de qualquer outra maneira quaisquer materiais protegidos por direitos de propriedade intelectual. A autorização de uso concedida por meio dos presentes TERMOS DE USO se refere a utilização da plataforma e dos CONTEÚDOS gerados para fins unicamente pessoais e não-comerciais.


        </p>

        <h2> 9.	TRATAMENTO DE INFORMAÇÕES E DADOS PESSOAIS</h2>
        <p>
        9.1	A plataforma “ReGente” poderá coletar, processar, analisar, armazenar e compartilhar informações de, e sobre, PESSOAS USUÁRIAS ou relativas à sua interação com o APLICATIVO, preocupando-se, sempre, com a privacidade e segurança das suas informações, e agindo em conformidade com as disposições da Lei Geral de Proteção de Dados.


        </p>

        <p>
        9.2	Desde já, VOCÊ manifesta ciência sobre o tratamento das suas informações, conforme descrito em nossa Política de Privacidade. Além disso, poderemos realizar o tratamento de informações agregadas, anonimizadas e não classificadas como pessoais, para a finalidade de realização de análises, estudos, pesquisas e melhorias. Disposições detalhadas podem ser encontradas na nossa Política de Privacidade.



        </p>

        <h2> 10.	DISPOSIÇÕES GERAIS</h2>
        <p>
        10.1	As PESSOAS USUÁRIAS poderão entrar em contato com a plataforma “ReGente” por meio dos canais indicados. As comunicações realizadas pela plataforma em relação a PESSOAS USUÁRIAS serão consideradas válidas, para todos os efeitos, quando efetivadas através de notificação via aplicativo ou e-mail fornecido no procedimento de cadastro.


        </p>

        <p>
        10.2	Qualquer cláusula ou condição deste instrumento que, por qualquer motivo, seja reputada nula ou ineficaz por juízo ou tribunal, não afetará a validade das demais disposições, que permanecerão plenamente válidas e vinculantes, gerando efeitos em sua máxima extensão. Quaisquer cláusulas eventualmente afetadas deverão ser consideradas da forma mais próxima da sua redação original, excluindo os aspectos que comprometeram sua validade inicialmente.



        </p>

        <p>
        10.3	Eventual falha por parte da plataforma “ReGente” em exigir quaisquer direitos ou aplicações disposições dos presentes TERMOS DE USO não constituirá renúncia ou novação, podendo esta exercer regularmente seus direitos, dentro dos prazos legais.



        </p>

        <p>
        10.4	Estes TERMOS DE USO poderão ser alterados a qualquer tempo, de forma que a nova versão deste documento entrará em vigor no dia seguinte à sua publicação. As PESSOAS USUÁRIAS serão comunicadas por e-mail sobre alterações que impliquem na modificação de seus direitos e obrigações perante a plataforma “ReGente”.



        </p>

        <p>
        10.5	Este contrato entre VOCÊ e a plataforma “ReGente” tem eficácia imediata a partir do aceite a estes TERMOS DE USO e perdura até o cancelamento, mediante a exclusão da sua conta pessoal junto ao APLICATIVO.




        </p>

        <p>
        10.6	Este, e demais documentos que compõem o conjunto de Políticas e Termos do relacionamento entre a plataforma “ReGente” e PESSOAS USUÁRIAS deverão ser interpretados segundo a legislação brasileira, comprometendo-se as PARTES a tentar resolver eventual conflito de maneira administrativa, através dos meios de contato informados nestes TERMOS DE USO, e sendo eleito o foro de Porto Alegre/RS para dirimir qualquer dúvida, pendência ou divergência não solucionada administrativamente.





        </p>
        <IonButton onClick={agree} size="default" shape="round" color="orange" fill="solid" className="ion-button-termos">Concordo com os termos</IonButton>
        </IonContent>
      </IonModal>

      <IonModal 
        isOpen={showModalPriv} 
        
        onDidDismiss={() => setShowModal(false)}
      >
      <IonContent>

      <h1> POLÍTICA DE PRIVACIDADE</h1>
        <p>
        Esta “Política de Privacidade” tem por objetivo demonstrar o compromisso da plataforma “ReGente” em garantir a proteção de dados pessoais informados e coletados por meio do APLICATIVO. Assim, em respeito a valores como transparência e privacidade, que norteiam as nossas ações, a “ReGente” disponibiliza, neste documento, as regras sobre a coleta, registro, armazenamento, uso, compartilhamento e eliminação de dados pessoais, em conformidade com o disposto na Lei nº 13.853/2019 (Lei Geração de Proteção de Dados – LGPD) e demais legislações aplicáveis. 



        </p>

        <p>
        EXPRESSAMENTE INFORMAMOS, DESDE JÁ, QUE A PLATAFORMA “ReGente” NÃO REALIZA QUALQUER TRATAMENTO DE DADOS PESSOAIS COM A FINALIDADE DE OFERECER SOLUÇÕES RELACIONADAS À PRÁTICA DA MEDICINA OU PSICOLOGIA QUE POSSAM SER CONSIDERADAS COMO MÉTODO DE PREVENÇÃO, DIAGNÓSTICO, TRATAMENTO, REABILITAÇÃO OU ANTICONCEPÇÃO.




        </p>

        <h2> 1. O QUE VOCÊ PRECISA SABER PARA COMPREENDER ESTA POLÍTICA DE PRIVACIDADE?</h2>
        <p>
        1.1	O APLICATIVO “ReGente”, por meio do tratamento de determinadas informações pessoais, oferece às PESSOAS USUÁRIAS a possibilidade de compreender e acompanhar aspectos da sua saúde a partir de informações sobre hábitos e organização de rotina e recomendações oferecidas com base em pesquisas científicas, respaldo teórico e diretrizes emitidas por órgãos oficiais de saúde.



        </p>

        <p>
        1.2	Nossas atitudes serão sempre guiadas pelas disposições previstas na legislação brasileira, especialmente na Lei Geral de Proteção de Dados, mas, para que o nosso compromisso de proteger os seus DADOS PESSOAIS esteja completo, é essencial que você seja capaz de compreender a forma como fazemos isso. Assim, apresentamos algumas definições úteis para a leitura deste documento:




        </p>

        <p>
        APLICATIVO: refere-se à plataforma/software “ReGente”, desenvolvido e publicado exclusivamente por [RESPONSÁVEL PELA PUBLICAÇÃO], nas lojas oficiais Google Play Store e Apple App Store, através do qual PESSOAS USUÁRIAS terão acesso às funcionalidades mediante a realização de cadastro.
        DADO PESSOAL: informação relativa a uma pessoa física capaz de identificá-la quando analisada individualmente ou dentro de um contexto de informações a que a plataforma “ReGente” possua acesso. 
        FINALIDADE: propósito para o qual utilizamos os seus dados pessoais; o objetivo por trás de uma atividade de tratamento.
        BASE LEGAL: hipóteses expressas em que o tratamento de dados é autorizado e respaldado pela Lei Geral de Proteção de Dados.
        TITULAR, PESSOA USUÁRIA ou VOCÊ: a pessoa física a quem os DADOS PESSOAIS se referem.
        TRATAMENTO: toda atividade que realizamos com seus DADOS PESSOAIS, desde a coleta, armazenamento, classificação e exclusão, por exemplo.

        </p>



        <p>
        1.3	Esta Política de Privacidade se aplica aos tratamentos de dados pessoais realizados pela plataforma “ReGente” durante a prestação de seus serviços e disponibilização de suas soluções de tecnologia às PESSOAS USUÁRIAS. Reitera-se que este documento é parte integrante dos “Termos e Condições de Uso” e, portanto, ambos devem ser lidos e interpretados em conjunto.




        </p>

        <p>
        1.4	A atenta leitura desta Política de Privacidade é indispensável, uma vez que o clique no botão de aceite e a consequente utilização do APLICATIVO oferecido pela “ReGente” significa a sua concordância, livre, expressa e informada, com os termos previstos neste documento. Caso você tenha dúvidas em relação à nossa Política de Privacidade, você pode nos contatar através do e-mail regenteapp@gmail.com.

        </p>

        <p>
        1.5	Essa Política de Privacidade poderá ser atualizada ou alterada a qualquer momento, por isso recomendamos a consulta periódica a este documento. Caso você seja uma PESSOA USUÁRIA cadastrada junto à plataforma, avisaremos você sobre mudanças que impactem significativamente no tratamento de suas informações pessoais ou no exercício de seus direitos enquanto TITULAR de DADOS PESSOAIS. Sempre que desejar rever os termos, você encontrará um link para a nossa Política de Privacidade em nosso APLICATIVO.

        </p>

        <h2> 2. QUAIS SÃO OS SEUS DIREITOS RELATIVOS A ESSA POLÍTICA?</h2>
        <p>
        2.1	Em observação à Lei Geral de Proteção de Dados, a plataforma “ReGente” garante a VOCÊ os seguintes direitos relativos às atividades de tratamento de dados:
(i)	Confirmação de que a “ReGente” mantém os seus dados pessoais e das atividades de tratamento realizadas sobre eles;
(ii)	Acesso aos dados utilizados pela “ReGente”;
(iii)	Correção dos seus dados em caso de incompletude, inexatidão ou desatualização;
(iv) 	Garantia de anonimização, bloqueio ou eliminação de dados, quando possível ou quando tratados em desacordo com o disposto na LGPD, especialmente sobre as finalidades para as quais a informação foi coletada;
(v)	Informação sobre a possibilidade de não fornecer o seu consentimento quando aplicável, bem como receber informações sobre as consequências em caso de negativa;
(vi)	Informações sobre o compartilhamento de seus dados;
(vii)	Possibilidade de revogar o seu consentimento, bem como solicitar a eliminação de dados tratados conforme essa base legal.


        </p>

        <p>
        2.2	VOCÊ poderá exercer os direitos aqui previstos, bem como solucionar eventuais dúvidas sobre as atividades de tratamento através do e-mail: regenteapp@gmail.com

        </p>

        <p>
        2.3	Para todas as solicitações, a “ReGente” se esforçará para retornar aos TITULARES no menor prazo possível, com o resultado da solicitação ou com a indicação, de forma transparente, sobre os motivos de fato ou de direito que impedem a execução da providência solicitada, sempre de forma gratuita.

        </p>
        
        <h2> QUAIS SÃO OS DADOS PESSOAIS TRATADOS PELA “ReGente” E COMO REALIZAMOS O TRATAMENTO DESSAS INFORMAÇÕES?</h2>

        <p>
        3.1	A plataforma “ReGente” coleta DADOS PESSOAIS de duas formas: (i) sempre que PESSOAS USUÁRIAS ativamente fornecem durante o seu uso do APLICATIVO; e (ii) por meio de procedimentos automáticos existentes durante o uso do APLICATIVO. 


        </p>

        <p>
        3.2	Em razão da própria natureza e finalidade do APLICATIVO, nós coletamos informações categorizadas como DADOS DE SAÚDE, que dizem respeito aos hábitos e rotinas de PESSOAS USUÁRIAS. Estas informações são coletadas e tratadas unicamente com a finalidade de garantir acesso às funcionalidades principais do APLICATIVO e dos serviços contratados. Portanto, a não concordância com o fornecimento desses dados implica na impossibilidade de acesso e uso do APLICATIVO “ReGente”.



        </p>

        <p>
        3.3	Além disso, somente utilizamos DADOS PESSOAIS de acordo com as finalidades declaradas publicamente nesta Política de Privacidade, conforme a tabela abaixo:



        </p>

        <table className='tabelaPrivacidade'>
          <tr className='tabelaPrivacidade'>
            <td>CLASSIFICAÇÃO</td>
            <td>DADOS TRATADOS</td>
            <td>FINALIDADE</td>
          </tr>
          <tr className='tabelaPrivacidade'>
            <td>Dados Cadastrais de Pessoas Usuárias</td>
            <td>Endereço de e-mail e data de nascimento</td>
            <td>Viabilizar a relação contratual de PESSOAS USUÁRIAS com a plataforma “ReGente”, verificar a sua identidade e os requisitos necessários para contratação, e fornecer suporte administrativo e de uso.

            Base legal: execução de contrato
            </td>
          </tr>
          <tr className='tabelaPrivacidade'>
            <td>Dados Cadastrais de Pessoas Usuárias para Relacionamento</td>
            <td>Nome, endereço de email e número de telefone.</td>
            <td>Comunicações institucionais, promocionais ou de marketing da “ReGente”.

            Base legal: interesse legítimo
            </td>
          </tr>
          <tr className='tabelaPrivacidade'>
            <td>Dados e Informações sobre o Perfil de Pessoas Usuárias</td>
            <td>Dados de saúde, de localização e dados comportamentais coletados por meio de questionários e outras interações de pessoas usuárias com a plataforma</td>
            <td>Aproveitamento das funcionalidades do APLICATIVO, oferecimento de nossos serviços de acompanhamento e processamento de informações e condução de pesquisas acadêmicas devidamente registradas, quando expressamente autorizado o compartilhamento ou quando garantida a anonimização das informações.

            Base legal: consentimento e realização de estudos por órgão de pesquisa, quando cabível
            </td>
          </tr>
          <tr className='tabelaPrivacidade'>
            <td>Dados de Navegação e Experiência</td>
            <td>Características do dispositivo de acesso, do navegador, do sistema operacional, IP com data e hora, origem do IP, comportamentos (clickstream)</td>
            <td>Manutenção da segurança do aplicativo, aprimoramento dos serviços oferecidos e prestados e cumprimento de obrigações legais referentes à guarda de dados de acesso.

            Base legal: interesse legítimo e cumprimento de obrigação legal, quando cabível e no limite permitido</td>
            </tr>
        </table>



        <p>
        3.4	As INFORMAÇÕES PESSOAIS relativas aos “Dados de Navegação e Experiência” são coletadas de forma automatizada durante o período de uso do APLICATIVO por meio de linhas de código ou ferramentas disponibilizadas por terceiros. Todas essas informações, na extensão permitida pela legislação, somente são utilizadas para melhorar a experiência de uso da plataforma, e/ou para garantir, direta ou indiretamente, a segurança de todas as PESSOAS USUÁRIAS que utilizam nossos serviços.


        </p>

        <p>
        3.5	Nós entendemos a importância de proteger a privacidade de crianças e adolescentes, especialmente em ambientes virtuais. Por isso, nossos serviços não são destinados ou desenvolvidos para PESSOAS USUÁRIAS menores de 18 (dezoito) anos de idade, reservado o direito de impedir, bloquear ou excluir contas pessoais se constatado o uso por PESSOA USUÁRIA menor de idade.



        </p>
        <p>
        3.6	Além das hipóteses expressamente previstas, a plataforma “ReGente” reserva a si o direito de tratar informações de PESSOAS USUÁRIAS para exercer regularmente seus direitos e/ou colaborar com o cumprimento de ordem judicial ou fiscalização de órgão ou autoridade competente, conforme a extensão e procedimento previsto em Lei.



        </p>
        <p>
        3.7	Sempre que utilizarmos a BASE LEGAL do legítimo interesse, nos certificaremos que o tratamento é importante para o desenvolvimento das atividades da “ReGente” e que a manipulação não resultará em privação de direitos a TITULARES de DADOS PESSOAIS.



        </p>



        <h2> QUAIS SÃO OS DADOS PESSOAIS TRATADOS PELA “ReGente” E COMO REALIZAMOS O TRATAMENTO DESSAS INFORMAÇÕES?</h2>

        <p>
        4.1	Para o desenvolvimento de algumas atividades, NÓS contratamos serviços de outras empresas, e, em algumas oportunidades, esses parceiros precisarão de acesso aos seus dados pessoais. Esse acesso somente se dará quando necessário e sempre estará ligado a uma finalidade legítima que já informamos a VOCÊ. Além disso, na extensão das nossas possibilidades, nos certificaremos de que esta Política de Privacidade e as legislações envolvendo proteção de dados serão cumpridas. 




        </p>

        <p>
        4.2	Alguns dos terceiros que poderão ter acesso aos seus dados pessoais são: 
(i) autoridades judiciárias, administrativas ou governamentais
(ii) terceiros envolvidos em transações ou alterações de natureza societária, sempre que necessário para a continuidade dos serviços oferecidos, e
(ii) empresas prestadoras de serviço, cuidadosamente selecionadas por NÓS, e que fornecem serviços em nosso nome, tais como empresas que nos ajudam a desenvolver, operar sistemas, armazenar informações e analisar estatísticas e dados coletados através do uso do APLICATIVO.
Em todas as hipóteses, nos certificaremos de que o compartilhamento é necessário para a plena execução dos nossos serviços, ou se mostra relevante para proteção de nossos direitos e interesses em conflitos extrajudiciais ou judiciais.





        </p>

        <p>
        4.3	Adicionalmente, podemos compartilhar DADOS PESSOAIS para a realização de estudos científicos e acadêmicos promovidos, autorizados ou supervisionados por órgãos de pesquisa regulamentados. Nesse caso, por padrão, somente serão compartilhadas informações relativas à categoria “Dados e Informações sobre o Perfil de Pessoas Usuárias”. As informações serão tratadas de forma agregada, garantida a anonimização, ou seja, a desvinculação do perfil à identificação da PESSOA USUÁRIA.
        </p>

        <p>
        4.4	 Excepcionalmente, e somente nos casos em que VOCÊ expressamente, de forma livre e informada, concordar com o compartilhamento, “Dados Cadastrais de Pessoas Usuárias” poderão ser compartilhados e utilizados para a finalidade de realização de estudos, unicamente com o objetivo de convidar VOCÊ a participar de futuras pesquisas. Nesses casos, garantimos o acesso mais restrito possível às informações de contato. Ainda assim, é assegurada a anonimização durante o processamento das informações, a segurança e a confidencialidade, conforme descrito na respectiva seção.
        </p>

        <p>
        4.5	Por razões estratégicas e estruturais da Internet, ainda que nossos serviços sejam oferecidos em território brasileiro, é possível que algumas informações sejam tratadas em servidores localizados no exterior. Na hipótese de ocorrer uma transferência internacional de dados, asseguramos que tomaremos todas as medidas contratualmente cabíveis para garantir a segurança e integridade das informações, bem como garantir que a empresa parceira comprometa-se com os níveis de segurança e compatibilidade com esta política de privacidade e com a lei brasileira.
        </p>

        <h2> 5.	COMO PROTEGEMOS A SEGURANÇA E A CONFIDENCIALIDADE DAS SUAS INFORMAÇÕES PESSOAIS?</h2>

        <p>
        5.1	Todas as informações relativas às PESSOAS USUÁRIAS informadas nesta Política de Privacidade serão armazenadas em servidores próprios ou de terceiros, contratados especificamente para esta finalidade. A plataforma “ReGente” emprega todos os esforços razoáveis e compatíveis com o mercado atual para garantir a segurança e a confidencialidade dos DADOS PESSOAIS. A proteção das informações pessoais é resguardada através das plataformas utilizadas pela “ReGente” para armazenamento, classificação e análise dos DADOS PESSOAIS, que atuam em conformidade com as normativas ISO 27001, SOC 1, SOC 2 e SOC 3.

        </p>

        <p>
        5.2	Mantemos rigorosos controles internos de acesso aos dados e capacitação de nossa equipe, para que, no tratamento de seus dados, respeitem a legislação de tratamento de DADOS PESSOAIS. Os acessos da nossa equipe para visualização ou manipulação de DADOS PESSOAIS são autenticados e individualizados, permitindo a identificação única de cada pessoa autorizada a tratar as informações. Garantimos que o acesso e as permissões serão limitadas à extensão necessária para o desempenho das atividades individuais.


        </p>

        <p>
        5.3	Os registros individualizados de acesso geram, de forma automática, arquivos virtuais com indicação do momento, duração da sessão, identificação da pessoa responsável pelo acesso e alterações realizadas nos arquivos.



        </p>

        <p>
        5.4	Ainda que empregados os melhores esforços para garantir a segurança, é importante ressaltarmos que, pela própria natureza da Internet, não há como garantir a absoluta impossibilidade de acesso por terceiros não autorizados. Nesse sentido, orientamos, também, que PESSOAS USUÁRIAS conectem-se ao APLICATIVO por meio de dispositivos confiáveis, bem como que não compartilhem suas credenciais de acesso com terceiros.
        </p>


        <h2> 6.	LEGISLAÇÃO APLICÁVEL E FORO</h2>

        <p>
        6.1	Este, e demais documentos que compõem o conjunto de Políticas e Termos do relacionamento entre a plataforma “ReGente” e PESSOAS USUÁRIAS deverão ser interpretados exclusivamente segundo a legislação brasileira, comprometendo-se as PARTES a tentar resolver eventual conflito de maneira administrativa, através dos meios de contato informados em nossos TERMOS DE USO, e sendo eleito o foro de Porto Alegre/RS para dirimir qualquer dúvida, pendência ou divergência não solucionada administrativamente, salvo quando a legislação consumerista permitir foro distinto.
        </p>

        <IonButton onClick={agreePriv} size="default" shape="round" color="orange" fill="solid" className="ion-button-termos">Concordo com os termos</IonButton>

      </IonContent>

      </IonModal>

      <IonButton size="default" shape="round" color="orange" fill="solid" disabled={(!agreeTerms) || (!agreeTermsPriv)} onClick={validateFields} className={"ion-button-cadastro"}>Criar conta</IonButton>

      <p>Já possui uma conta? Faça <a href="/Login">login</a></p>

      <p>Gostaria de entrar de forma anônima? Aceite os termos e faça o <IonButton fill="clear" size="small" disabled={(!agreeTerms) || (!agreeTermsPriv)} onClick={LoginAnonimo}>Login Anônimo.</IonButton></p>
      
     {/* <p>Gostaria de entrar de forma anônima? <IonButton size="small" shape="round" color="orange" fill="clear" onClick={LoginAnonimo}>Login anônimo </IonButton></p> */}
   
      
      </div>
      </div>
      </IonContent>
    
  );
};

export default Cadastro;