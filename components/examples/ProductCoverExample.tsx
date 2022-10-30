import { useAtom } from 'jotai';
import { useState } from 'react';
import { ProductCover } from 'react-custom-product'
import { productAtom } from '../../lib/store';
import Code from '../ui/code/Code';



export default function ProductCoverExample() {
  const [demoCover, setDemoCover] = useState(60);
  const [demoCoverVertical, setDemoCoverVertical] = useState(60);
  const [product] = useAtom(productAtom)

  const inner = `
    export default function ProductCoverExample() {

      return (
        <ProductCover
          src="/models/1.png"
          cover="/models/2.png"
          width="550px"
          height="400px"
          coverWidth={${demoCover}}
          coverHeight={${demoCoverVertical}} />
      )
    }
  `;

  return (
    <div className="flex flex-col lg:flex-row h-full example relative ">
      <h1 className='left-10'>ProductCover</h1>
      <div className='actions absolute flex lg:top-48 left-4 md:left-10 text-[14px] md:text-xs'>
        <div className='flex'>
          {demoCover}%
          <input
            type="range"
            min="1"
            max="100"
            value={demoCover}
            onChange={e => setDemoCover(Number(e.target.value))} />
        </div>
        <div className='flex '>
          <input
            type="range"
            min="1"
            max="100"
            value={demoCoverVertical}
            onChange={e => setDemoCoverVertical(Number(e.target.value))} />
          {demoCoverVertical}%
        </div>
      </div>
    
      <div className="lg:w-1/2 overflow-hidden flex justify-center ">
        <ProductCover
          src={`/${product}/cover/1.png`}
          cover={`/${product}/cover/2.png`}
          width="500px"
          height="400px"
          coverWidth={demoCover}
          coverHeight={demoCoverVertical}
        />
      </div>
      <div className="lg:w-1/2 flex justify-center">
        <Code inner={inner} />
      </div>
    </div>
  );
}