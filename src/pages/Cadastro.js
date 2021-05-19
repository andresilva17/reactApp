import  {React } from 'react';
import Header from '../Estrutura/header';
import MenuBar from '../Estrutura/Menu';
import '../form.css';
import { Formik, Field, Form } from 'formik';


function Cadastro() {
    
    
    function onSubmit(values, actions) {
        console.log('SUBMIT', values);
      }  

//    function onBlurFor(ev, setFieldValue ) {
//        const {value} = ev.target;
    //    const cod = value?.replace(/[^0-9]/g, '');
    //    fetch(`https://localhost:5001/v1/testemodelview/CodFor=${cod}`)
    //    .then((res) => res.json())
    //    .then((data) =>{
    //     //   setFieldValue({...useField, nomeFor: data.nomeFor}) 
    //      setFieldValue('NomeFor' , data.nomeFor)
    //      })
       
      //SEXO 22.0
   
  
    return(
       
<div className="Cabec">
        <Header/>
        <MenuBar/>
        <main>
           
            <div className="FormularioCa" >
            <Formik
        onSubmit={onSubmit}
        validateOnMount
        initialValues={{
            NomeFor: '',
          CodFor: '',
          DataVisita: '',
          ProximaVisita: '',

          estado: '',
          dsc1: '',
          dsc2: '',
          dsc3: '',
          dsc4: '',
          dsc5: '',
          dsc6: '',
          dsc7: '',
          dsc8: '',
          
        }}
        >
        {({ values ,isValid, setFieldValue }) => (
            <Form >
    <fieldset >
   
        <fieldset className="TopForm">
            <div className="BarraDoMenu">
                <button><igm id="Menurecolhivel" /></button>
        <div className="MenuPrevisao">

         <button id="botaumPrevisao"><img id="iconPrevisao" src="./img/busca.svg" alt="Img indisponível"/><li>Incluir</li></button>
         <button id="botaumPrevisao"><img id="iconPrevisao" src="./img/incluir.svg" alt="Img indisponível"/><li>Buscar</li></button>
         <button id="botaumPrevisao"><img id="iconPrevisao" src="./img/delete.svg" alt="Img indisponível"/><li>Limpar</li></button>
            </div>
            </div>
        <fieldset className="grupo">
        <div className="campotop">
                <label >Forn (ID)</label>
                <Field type="number" id="snome" name="CodFor" /*={(ev) => onBlurFor(ev, setFieldValue )}*//>
            </div>
            <div className="campotop">
                <label >Fornecedor</label>
                <Field type="text" id="nomefor" name="NomeFor"  />
            </div>
        <div className="campotop">
        <label  >Data Visita :</label>
        <Field type="date" id="data" name="DataVisita" />
        </div>
        <div className="campotop">
        <label  >Próxima Visita :</label>
        <Field type="date" id="dataProx" name="ProximaVisita" />
        </div>
        
        </fieldset>
        <fieldset className="StatusFeild">
        <div className="campo">
            <label id ="Status">Status Previsao</label>
            <label>
                <Field type="radio" name="option" value="Digitando" /> 0-Digitando
            </label>
            <label>
                <Field type="radio" name="option" value="Aguardando Entrega"/> 1-Aguardando Entrega
            </label>
            <label>
                <Field type="radio" name="option"  value="Entrega Concluída"/> 2-Entrega Concluída
          </label>
          <span>  <div>Picked: {values.option}</div></span> 
          </div>
      
        </fieldset>
      <fieldset>       
           <div className="campoDesc">
            <label >Desc1</label>
            <Field type="text"  name="dsc1"  />
        </div>
        <div className="campoDesc">
            <label >Desc2</label>
            <Field type="text"  name="dsc2"  />
        </div>
        <div className="campoDesc">
            <label >Desc3</label>
            <Field type="text"  name="dsc3"  />
        </div>
        <div className="campoDesc">
            <label >Desc4</label>
            <Field type="text"  name="dsc4"  />
        </div>
        <div className="campoDesc">
            <label >Desc5</label>
            <Field type="text"  name="dsc5" />
        </div>
        <div className="campoDesc">
            <label >Desc6</label>
            <Field type="text"  name="dsc6"  />
        </div>
        <div className="campoDesc">
            <label >Desc7</label>
            <Field type="text"  name="dsc7"  />
        </div>
        <div className="campoDesc">
            <label >Desc8</label>
            <Field type="text"  name="dsc8"  />
        </div>
        </fieldset>
        </fieldset>

        <fieldset className="grupo">
            <div className="campo">
                <label htmlFor="estado">Estado</label>
                <Field component="select" name="estado" id="estado">
                    <option >--</option>
	<option value="AC">Acre</option>
	<option value="AL">Alagoas</option>
	<option value="AP">Amapá</option>
	<option value="AM">Amazonas</option>
	<option value="BA">Bahia</option>
	<option value="CE">Ceará</option>
	<option value="DF">Distrito Federal</option>
	<option value="ES">Espírito Santo</option>
	<option value="GO">Goiás</option>
	<option value="MA">Maranhão</option>
	<option value="MT">Mato Grosso</option>
	<option value="MS">Mato Grosso do Sul</option>
	<option value="MG">Minas Gerais</option>
	<option value="PA">Pará</option>
	<option value="PB">Paraíba</option>
	<option value="PR">Paraná</option>
	<option value="PE">Pernambuco</option>
	<option value="PI">Piauí</option>
	<option value="RJ">Rio de Janeiro</option>
	<option value="RN">Rio Grande do Norte</option>
	<option value="RS">Rio Grande do Sul</option>
	<option value="RO">Rondônia</option>
	<option value="RR">Roraima</option>
	<option value="SC">Santa Catarina</option>
	<option value="SP">São Paulo</option>
	<option value="SE">Sergipe</option>
	<option value="TO">Tocantins</option>

                </Field>
            </div>
        </fieldset>

       

        <button type="submit" disabled={!isValid}>Enviar</button>
        </fieldset>
            </Form>
        )}
        </Formik>
        </div> 
         </main>
         </div>
    );
    }



export default Cadastro;