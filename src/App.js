import logo from './logo.svg';
import './App.css';

import React, { Component } from 'react';
import Button from 'react-bootstrap/Button';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fileContent: 'empty',
      fileName: 'ss'
    };
  }

  render() {
    return (
      <div>
        <div>
          <h1>Создание и удаление файла</h1>
          <input type="text" name="fileName" value={this.state.fileName} />
          .txt
          <br></br>
          <button name="open">Open</button>
          <button name="delete">Delete</button>
          <button name="edit">Edit</button>
        </div>
        <br />
        <br />
        <div>
          <h1>Изменение содержимого файла</h1>
          <textarea
            name="fileContent"
            value={this.state.fileContent}
            cols={100}
            rows={15}
          />
        </div>
        <Button name="editContent">Edit</Button>
      </div>
    );
  }
}

export default App;
