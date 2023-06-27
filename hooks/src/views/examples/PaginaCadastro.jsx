import React from 'react';
import '../style/cadastro.css';
import PageTitle from '../../components/layout/PageTitle';

const PaginaCadastro = (props) => {
  return (
    <div className="UseCallback">
      <PageTitle title="Cadastre-se" subtitle="Preenchendo o formulário abaixo" />
      <div className="container">
        <div className="row">
          <div className="col-3">
            <div className="">
              <label className="labelText">Nome completo</label>
            </div>
          </div>
          <div className="col-3">
            <div className="">
              <label className="labelText">Telefone</label>
            </div>
          </div>
          <div className="col-3">
            <div className="">
              <label className="labelText">Cidade</label>
            </div>
          </div>
          <div className='col-1'>

            </div>
          <div className="col-1">
            <div className="">
              <label className="labelText">UF</label>
            </div>
          </div>
          <div className='col-1'>

            </div>
        </div>

        <div className="row">
          <div className="col mt-3">
            <textarea className='textAreac' style={{ width: '100%' }} ></textarea>
          </div>
          <div className="col mt-3">
            <textarea className='textAreac' style={{ width: '100%' }}></textarea>
          </div>
          <div className="col mt-3">
            <textarea className='textAreac' style={{ width: '100%' }}></textarea>
          </div>
          <div className='col-1'>

          </div>
          <div className="col-1 mt-3">
            <textarea className='textAreac' style={{ width: '100%' }}></textarea>
          </div>
          <div className='col-1'>

        </div>
        </div>
      </div>
      <div className='container mt-3'>
            <div className="row">
                <div className='col-6  mt-3'>
                    <label className='labelText '>E-mail</label>
                </div>
                <div className='col-6  mt-3'>
                    <label className='labelText'>Senha</label>
                </div>
            </div>
      </div>
      <div className='container'>
            <div className="row">
                <div className='col-6 mt-3'>
                    <textarea className='textAreac' style={{ width: '100%' }}></textarea>
                </div>
                <div className='col-6 mt-3'>
                    <textarea className='textAreac' style={{ width: '100%' }}></textarea>
                </div>
            </div>
      </div>
    </div>
  );
};

export default PaginaCadastro;
