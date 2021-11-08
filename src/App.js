import './App.css';
import Form from "@rjsf/core";
import ConfigJSONForm from './ConfigJSONForm';
import {useState} from 'react'


function App() {

const [schema, setSchema] = useState(null);


  return (
    <div className="App">
      <ConfigJSONForm
      value={schema}
      callback={setSchema}/> 
      {console.log(schema)}
      {/* <Form schema={{
        title: "Enter Onshape Configuration JSON",
        type: "object",
        schema
      }}
        onChange={console.log("changed")}
        onSubmit={console.log("submitted")}
        onError={console.log("errors")} /> */}
    </div>
    
  );
}

export default App;


