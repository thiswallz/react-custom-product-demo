import { useAtom } from 'jotai';
import { ProductHotspot } from 'react-custom-product'
import { productAtom } from '../../lib/store';
import Code from '../ui/code/Code';

const inner = `
export default function HotspotExample() {

  const TailwindElement = () => <div className="...tailwind css" >
    <div>Custom HTML</div>
  </div>

  const SimpleLink = () => <a href="#" >Simple link</a>

  const spots = [
    {
      x: '35%',
      y: '70%',
      children: CustomMessage1()
    },
    {
      x: '65%',
      y: '20%',
      children: CustomMessage2()
    }
  ]

  return (
    <ProductHotspot src="1.webp" spots={spots} height="auto" /> 
  )
}
`;

const CustomMessage1 = () => <div className="flex items-center p-2 w-full max-w-xs text-gray-500 bg-white rounded-lg shadow dark:text-gray-400 dark:bg-gray-800" role="alert">
  <div className="inline-flex flex-shrink-0 justify-center items-center w-6 h-6 text-blue-500 bg-blue-100 rounded-lg dark:bg-blue-800 dark:text-blue-200">
    <svg aria-hidden="true" className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M12.395 2.553a1 1 0 00-1.45-.385c-.345.23-.614.558-.822.88-.214.33-.403.713-.57 1.116-.334.804-.614 1.768-.84 2.734a31.365 31.365 0 00-.613 3.58 2.64 2.64 0 01-.945-1.067c-.328-.68-.398-1.534-.398-2.654A1 1 0 005.05 6.05 6.981 6.981 0 003 11a7 7 0 1011.95-4.95c-.592-.591-.98-.985-1.348-1.467-.363-.476-.724-1.063-1.207-2.03zM12.12 15.12A3 3 0 017 13s.879.5 2.5.5c0-1 .5-4 1.25-4.5.5 1 .786 1.293 1.371 1.879A2.99 2.99 0 0113 13a2.99 2.99 0 01-.879 2.121z" clip-rule="evenodd"></path></svg>
    <span className="sr-only">Fire icon</span>
  </div>
  <div className="ml-3 text-xs font-normal">Custom HTML</div>
</div>
const CustomMessage2 = () => <a href="#" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">Simple link</a>

export default function HotspotExample() {
  const [product] = useAtom(productAtom)

  const spots = [
    {
      x: '35%',
      y: '70%',
      children: CustomMessage1()
    },
    {
      x: '65%',
      y: '20%',
      children: CustomMessage2()
    }
  ]

  return (
    <div className="flex flex-col lg:flex-row h-full example relative">
      <h1 className='top-0 left-10'>Hotspot</h1>
      <div className='actions left-10 text-[14px] md:text-xs'>
      </div>
      <div className="relative basis-1/2 mt-10 lg:mt-0 flex justify-center order-2 lg:order-2">
        <Code inner={inner} />
        <a 
        className='sandbox-btn absolute -bottom-5 right-10'
        href="https://codesandbox.io/s/condescending-wind-gzmptk?file=/src/App.js:176-187" 
        target="_blank">
          Open CodeSandbox
        </a>
      </div>
      <div className="overflow-hidden flex justify-center order-1 lg:order-1">
        <ProductHotspot src={product==='autos' ? `/${product}/hotspot/1.webp`: `/${product}/hotspot/1.avif`} spots={spots} height="auto" />
      </div>
    </div>
  );
}