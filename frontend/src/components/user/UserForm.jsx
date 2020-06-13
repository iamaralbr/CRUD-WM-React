import React from 'react'

export default props =>
    <div className="form">
        <div className="row">
            <div className="col-12 col-md-6">
                <div className="form-group">
                    <label>Nome</label>
                    <input type="text" className="form-control"
                        name="name"
                        value={this.state.user.name}
                        onChange={e => this.updateField(e)}
                        placeholder="Digite o nome" />
                </div>
            </div>
            <div className="col-12 col-md-6">
                <div className="form-group">
                    <label>Email</label>
                    <input type="text" className="form-control"
                        name="email"
                        value={this.state.user.email}
                        onChange={e => this.updateField(e)}
                        placeholder="Digite o e-mail" />
                </div>
            </div>
        </div>

        <hr />
        <div className="row">
            <div className="col-12 d-flex justify-content-end">
                <button className="btn btn-primary" onClick={e => this.save(e)}>
                    Salvar
        </button>

                <button className="btn btn-secondary ml-2" onClick={e => this.clear(e)}>
                    Cancelar
        </button>
            </div>
        </div>
    </div>
