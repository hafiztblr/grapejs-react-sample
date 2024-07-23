import 'grapesjs/dist/css/grapes.min.css';
import gjspresetwebpage from 'grapesjs-preset-webpage';
import gjsblockbasic from 'grapesjs-blocks-basic'
import { GrapesjsReact } from 'grapesjs-react';

function App() {
  return <GrapesjsReact
  id='grapesjs-react'
  plugins={[
    gjspresetwebpage,
    gjsblockbasic
  ]}
/>;

  
}

export default App;
