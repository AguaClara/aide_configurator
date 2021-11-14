import './App.css';
import Form from "@rjsf/core";
import ConfigJSONForm from './ConfigJSONForm';
import {useState} from 'react'
import $ from "jquery";


function App() {

const [schema, setSchema] = useState('');

const additional = {
  title: "Edit Onshape Configuration",
  type: "object",
}

const updatedSchema = $.extend( additional,schema);

// default: "A new task"},
  return (
    <div className="App">
      {console.log(schema)}
      {console.log(updatedSchema)}
      
      {schema === '' ?  
        <ConfigJSONForm
        value={schema}
        callback={setSchema}/> : 
        <div>
        <Form schema={
          updatedSchema
        }
        onChange={console.log("changed")}
        onSubmit={console.log("submitted")}
        onError={console.log("errors")} />
        </div>
    }
    </div>
    
  );
}

export default App;


