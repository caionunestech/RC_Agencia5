import React, { useState, useEffect } from 'react'
import FormularioCadastro from './FormularioCadastro'
import fireDb from '../firebase'
import { useEffect, useState } from 'react'

const Cadastro = () => {
  let [dadosPassagem, setDadosPassagem] = useState({})

  let [idAtual, setIdAtual] = useState('')


  useEffect(() => {
    fireDb.child('destinos').on('values', dbPhoto => {
      if (dbPhoto.val() != null) {
        setDadosPassagem({
          ...dbPhoto.val()
        })

      } else {
        setDadosPassagem({})
      }
    })
  }, [])

  const addEdit = obj => {

    if(idAtual == '') {

      console.log(obj)
      fireDb.child('destinos').push(
        obj,
          error => {
          if (error) {
            console.log(error)
        } else {
          setIdAtual('')
        }
      }
    )
   } else {
     fireDb.child('destinos/${idAtual}').set()
     obj,
     err =>
     if(err) {
       console.log(err)
     }
   }
  }

  const deletePassagem = key => {
    if(window.confirm)('Deseja realmente deletar esse cadastro?')) {
        fireDb.child('passagens/${idAtual}').remove()
          err => {
            if(err) {
              console.log(err)
            }
          }
    }

  }
  return (
    <div>
      <div className="jumbotron jumbotron-fluid">
        <div className="container">
          <h1 className="display-4">Cadastro de Passagens</h1>
          <p className="lead">Adicione o destino</p>
        </div>
      </div>

      <div className="row">
        <div className="col-md-5">
          <FormularioCadastro {...Cadastro({addEdit, idAtual, dadosPassagem})} />
        </div>
        <div className="col-md-7">
          <table className="table table-border table-stripped">
            <thead className="thead-light">
              <tr>
                <td>Nome Destino</td>
                <td>Nome Companhia</td>
              </tr>
            </thead>

            <tbody>
              {Object.keys(dadosPassagem).map(id => {
                return (
                  <tr>
                    <td>{dadosPassagem[id].destinoFinal}</td>
                    <td>{nomeCompanhia[id].nomeCompanhia}</td>

                    <td>
                      <a className="btn btn-primary" onClick={ () => {setIdAtual(id)} }>
                        <i className="fas fa-pencil-alt">
                        </i>
                      </a>

                      <a className="bnt bnt-danger" onClick={ () => deletePassagem(key)}>
                        <i className="far fa-trash-alt">
                        </i>
                      </a>
                    </td>
                  </tr>
                )
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  )
}

export default Cadastro
