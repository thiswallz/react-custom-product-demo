import { useAtom } from 'jotai';
import { DefaultTemplate } from '../templates/DefaultTemplate';
import SwitchExample from '../examples/SwitchExample';
import CustomColorExample from '../examples/CustomColorExample';
import ShowCaseExample from '../examples/ShowCaseExample';
import ProductCoverExample from '../examples/ProductCoverExample';
import { productAtom } from '../../lib/store';

export default function HomePage() {

  const [, setProduct] = useAtom(productAtom)
  
  function handleClick(option: string){
    setProduct(option)
  }

  return (
    <DefaultTemplate>
      <div>
        <div>
          <h1 className='text-2xl lg:text-4xl m-24 mx-4 lg:m-24 lg:mx-36'>
            Make beautiful <span className='text-pink-600'>products</span> presentations without design experience.
          </h1>
          <div className='absolute left-2 top-1 flex flex-col '>
            <a href='https://github.com/thiswallz/react-custom-product' target='_blank'>
              <img src="/GitHub_Logo_White.png" width={100} />
            </a>
            <code className='text-[13px] ml-1'>react-custom-product</code>
          </div>
          <div className='absolute right-2 top-1 flex flex-col '>
            <a onClick={() => handleClick('autos')}>
              Cars
            </a>
            <a onClick={() => handleClick('figurines')}>
              Store 
            </a>
          </div>
        </div>
        <div className='grid grid-cols-1 gap-14 lg:gap-36 lg:m-14'>
          <CustomColorExample />
          <ShowCaseExample />
          <SwitchExample />
          <ProductCoverExample />
        </div>
      </div>
    </DefaultTemplate>
  );
}
