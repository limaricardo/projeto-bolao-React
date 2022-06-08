import React from "react";
import { Editor } from "react-draft-wysiwyg";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import "../stylesCSS/CreateBolao.css";

const CreateBolao = () => {
  return (
    <div className="create-container">
      <form className="form-create">
        <h1>Dados do Bolão</h1>
        <div className="form-container">
          <div className="name-campeonato">
            <h5>Campeonato</h5>
            <p>Nome do campeonato</p>
          </div>
          <div className="name-bolao">
            <h5>Nome do Bolão</h5>
            <input placeholder="Ex: Bolão do João" type="text" />
          </div>
          <div className="type-create">
            <h5>Tipo</h5>
            <label htmlFor="type-create"></label>
            <select name="type-create">
              <option value="publico">Público</option>
              <option value="privado">Privado</option>
            </select>
          </div>
          <div className="description-create">
            <h5>Descrição do Bolão</h5>
            <Editor
              wrapperClassName="wrapper"
              editorClassName="editor"
              toolbarClassName="toolbar"
            />
          </div>
          <button className="create-button">Save</button>
        </div>
      </form>
    </div>
  );
};

export default CreateBolao;
