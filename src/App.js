import './App.css';
import Form from "@rjsf/core";
import ConfigJSONForm from './ConfigJSONForm';
import {useState} from 'react'
import $ from "jquery";
var JSONPretty = require('react-json-pretty');


function App() {

const [schema, setSchema] = useState('');
const [data, setData] = useState ({});

const additional = {
  title: "Edit Onshape Configuration",
  type: "object",
}

const updatedSchema = $.extend( additional,schema);

const onSubmit = ({formData}, e) => setData(formData);

// default: "A new task"},
  return (
    <div className="App">
      {console.log(schema)}
      {console.log(updatedSchema)}
      
      {schema === '' ?  
        <ConfigJSONForm
        value={schema}
        callback={setSchema}/> : 
          <div className = "rowC">
            <div></div>
            <Form 
              schema={updatedSchema}
              onChange={console.log("changed")}
              onSubmit={onSubmit}
              onError={console.log("errors")} 
            />
            {Object.keys(data).length === 0 ?
            <div> </div> : 
            <div className = "json-pretty"> 
              <JSONPretty id="json-pretty" data={data}></JSONPretty> 
            </div>}
        </div>
    }
    </div> 
  );
}

export default App;


