import './App.css';
import Form from "@rjsf/core";
import ConfigJSONForm from './ConfigJSONForm';
import {useState} from 'react'

function App() {
const schema1 = {
  title: "Enter Onshape Configuration JSON",
  type: "object",
  properties: {
    JSON: {type: "string", title: "Configuration JSON" },
  }
};

const [schema, setSchema] = useState('');


  return (
    <div className="App">
       {schema === '' ?  
      <ConfigJSONForm
      value={schema}
      callback={setSchema}/> : <div/>
      }
      {console.log(schema)}
      {schema === '' ? <div/> : 
      <Form schema={ {
        title: "Enter Onshape Configuration JSON",
        type: "object",
        schema
      }}
        onChange={console.log("changed")}
        onSubmit={console.log("submitted")}
        onError={console.log("errors")} />}
    </div>
    
  );
}

export default App;


