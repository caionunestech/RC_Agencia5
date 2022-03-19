import React, { useEffect, useState } from 'react'

const FormularioCadastro = (props) => {

  const camposIniciaisDeValores = {
    nomeCompanhia: '',
    destinoFinal: ''
  }

  let { values, setValues } = useState(camposIniciaisDeValores)

  useEffect( () => {
      if(props.idAtual == '') {
        setValues({
          ...camposIniciaisDeValores
      })
  } else {
      setValues({
          ...props.dadosPassagem[props.idAtual]
      })

      }
  }, [props.idAtual, props.dadosPassagem])

  const manipuladorInput = e => {
    let { name, value } = e.target
    setValues({
      ...values,
      [name]: value
    })
  }

  const manipuladorFormEnvio = e => {
    e.preventDefault()
    props.addEdit(values)
  }

  return (
    <form autocomplete="off" onSubmit={manipuladorFormEnvio}>
      <div className="form-group input-group">
        <div className="input-group-prepend">
          <div className="input-group-text">
            <i className="fas fa-user"></i>
          </div>
        </div>
        <input
          className="form-control"
          placeholder="Nome da Companhia"
          name="nomeCompanhia"
          value={values.nomeCompanhia}
          onChange={manipuladorInputChange}
        />
      </div>

      <div className="row">
        <div className="form-group input-group col-md-6">
          <div className="input-group-prepend">
            <div className="input-group-text">
              <i className="fas fa-user"></i>
                </div>
                </div>
                <input
                  className="form-control"
                  placeholder="Destino Completo"
                  name="destinoFinal"
                  value={values.destinoFinal}
                  onChange={manipuladorInputChange}/>
                </div>
          <div className="form-group">
            <input type="submit" value={props.idAtual == '' ? 'Salvar' : 'Atualizar'} className="btn btn-primary btn-block"
          </div>
     </div>    
    </form>
  )
}

export default FormularioCadastro
