import { ProductMask } from 'react-custom-product'
import { productAtom } from '../../lib/store';
import Code from '../ui/code/Code';

const inner = `
export default function MaskExample() {

  return (
    <ProductMask type='2' src="/autos/mask/1.webp" />
  )
}
`;

export default function SwitchExample() {
  const polygon = <clipPath id="clip-polygon--3"><polygon points=" 8 0, 8.1 0, 8.1 11, 0 11"></polygon><rect x="8" y="0" width="14.2" height="11"></rect><polygon points="22.1 0, 30.2 0, 22.2 11, 22.1 11"></polygon></clipPath>

  return (
    <div className="flex flex-col lg:flex-row h-full example relative">
      <h1 className='right-10'>Mask</h1>
      <div className='actions left-10 text-[14px] md:text-xs'>

      </div>
     <div className="basis-1/2 overflow-hidden flex justify-center md:mt-1 md:order-2">
        <ProductMask polygon={polygon} type='3' src={`/autos/mask/1.webp`} css={{scale: '1.2'}} />
      </div>
      <div className="basis-1/2 flex justify-center md:order-1 mt-14 ">
        <Code inner={inner} />
      </div>
    </div>
  );
}
