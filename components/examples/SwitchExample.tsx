import { useState } from 'react';
import { Switch } from 'react-custom-product'
import Code from '../ui/code/Code';

const inner = `
export default function SwitchExample() {

  const [image, setImage] = useState('/models/black-1.png')

  return ( 
    <Switch src={image} css={{ width: '500px', height: '300px'}}/>

    <button onClick={()=>setImage('/models/black-1.png')}>
      Model 1
    </button>
    <button onClick={()=>setImage('/models/white-1.png')}>
      Model 2
    </button>
  )
}
`;

export default function SwitchExample() {

  const [image, setImage] = useState('/models/black-1.png')

  return (
    <div className="flex flex-col lg:flex-row h-full example relative">
      <h1 className='left-10'>Switch</h1>
      <div className='actions left-10 text-[14px] md:text-xs'>
        <button onClick={() => setImage('/models/black-1.png')}>
          Model 1
        </button>
        <button onClick={() => setImage('/models/white-1.png')}>
          Model 2
        </button>
      </div>
      <div className="overflow-hidden flex justify-center">
        <Switch src={image} width="550px" height="400px" />
      </div>
      <div className="basis-1/2 flex justify-center">
        <Code inner={inner} />
      </div>
    </div>
  );
}