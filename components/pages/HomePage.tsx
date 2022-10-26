import { DefaultTemplate } from '../templates/DefaultTemplate';
import SwitchExample from '../examples/SwitchExample';
import CustomColorExample from '../examples/CustomColorExample';
import ShowCaseExample from '../examples/ShowCaseExample';

export default function HomePage() {
  function handleClick(option: string){

  }
  return (
    <DefaultTemplate>
      <div>
        <div>
          <h1 className='text-2xl lg:text-4xl m-4 mx-14 lg:m-24 lg:mx-36'>
            Make beautiful <span className='text-pink-600'>products</span> presentations without design experience.
          </h1>
          <div className='absolute left-2 top-1 flex flex-col '>
            <a href='https://github.com/thiswallz/react-custom-product' target='_blank'>
              <img src="/GitHub_Logo_White.png" width={100} />
            </a>
            <code className='text-[13px] ml-1'>react-custom-product</code>
          </div>
          <div className='absolute left-2 top-1 flex flex-col '>
            <a onClick={() => handleClick('auto')}>
              Auto
            </a>
            <a onClick={() => handleClick('jewelry')}>
              Jewelry
            </a>
          </div>
        </div>
        <div className='flex flex-col gap-4 lg:gap-36 lg:m-14'>
          <div>
            <CustomColorExample />
          </div>
          <div>
            <ShowCaseExample />
          </div>
          <div>
            <SwitchExample />
          </div>
        </div>
      </div>
    </DefaultTemplate>
  );
}
