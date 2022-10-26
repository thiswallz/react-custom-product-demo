import { useState } from 'react';
import { ShowCase } from 'react-custom-product'
import Code from '../ui/code/Code';



const Arrow360 = () => <svg className='absolute z-10 top-24 left-24' fill="currentColor" width={50} x="0px" y="0px" viewBox="0 0 122.88 61.49" xmlSpace="preserve">
  <path d="M70.065 3.787C70.065 1.671 71.624 0 73.518 0s3.453 1.671 3.453 3.787-1.559 3.787-3.453 3.787c-1.893 0-3.453-1.671-3.453-3.787zm1.671 0c0 1.448.557 2.116 1.782 2.116S75.3 5.235 75.3 3.787s-.557-2.116-1.782-2.116c-1.225-.001-1.782.668-1.782 2.116zM30.632 18.714c0-2.339-1.671-3.119-5.347-3.119v-3.342c3.453 0 5.013-.78 5.013-3.008 0-1.671-.78-2.562-2.339-2.562-1.671 0-2.562.891-2.785 2.673h-3.119c.111-4.01 2.339-6.238 6.238-6.238 3.453 0 5.681 2.228 5.681 5.681 0 2.339-1.003 3.899-3.119 4.901 2.339.668 3.453 2.339 3.453 5.013 0 4.01-2.673 6.795-6.572 6.795-4.122 0-6.572-2.451-6.572-6.795h3.342c0 2.116 1.003 3.23 3.119 3.23 2.005.001 3.007-1.113 3.007-3.229zm23.95-4.679c0-6.795 2.562-10.916 6.906-10.916s7.018 4.01 7.018 11.139-2.673 11.139-7.018 11.139c-4.456 0-6.906-4.121-6.906-11.362zm-16.486 3.342c0-2.116.446-4.01 1.225-5.681.78-1.671 2.673-4.567 5.681-8.466h4.01c-2.562 3.676-4.233 6.015-4.79 7.129.223-.111.668-.111 1.337-.111 3.565 0 5.904 2.896 5.904 7.241 0 4.79-2.673 7.909-6.572 7.909-4.01-.001-6.795-3.231-6.795-8.021zm20.162-3.231c0 4.79 1.003 7.909 3.23 7.909 2.227 0 3.342-3.23 3.342-7.797s-1.114-7.797-3.342-7.797c-.891 0-1.559.446-2.005 1.337-.78 1.336-1.225 3.452-1.225 6.348zm-16.486 3.565c0 2.562 1.225 4.233 3.008 4.233 1.782 0 3.008-1.671 3.008-4.233 0-2.562-1.225-4.233-3.008-4.233s-3.008 1.56-3.008 4.233zM0 32.192c0-5.681 3.342-10.805 10.916-14.258v4.344C8.8 24.394 7.686 26.4 7.686 28.07c0 6.349 12.699 13.033 27.291 14.815v-6.906L52.02 48.901 34.977 61.822v-6.906c-9.58-1.114-17.823-3.453-24.729-7.018C3.453 44.222 0 38.987 0 32.192zm87.108 0c0 6.795-3.565 12.142-10.694 15.818-7.018 3.676-15.261 6.015-24.618 6.906l7.797-5.904-7.909-6.127c15.149-1.782 27.848-8.243 27.848-14.815 0-1.671-1.114-3.565-3.342-5.792v-4.344c7.577 3.564 10.918 8.577 10.918 14.258z"></path>
</svg>

export default function ShowCaseExample() {

  const [hasBackground, setHasBackground] = useState(true)

  const showCaseImages = Array.from(Array(35).keys()).map(v =>
    `/3d/${v + 1}.png`) as string[]

  function handleChange() {
    setHasBackground(!hasBackground)
  }

  const inner = `
export default function SwitchExample() {

  // at least 10 images are recommended to have a good exp
  const showCaseImages = [
    '/images/1.png',
    '/images/2.png',
    '/images/3.png',
    '...'
  ]
  
  return ( 
    ${hasBackground ? `<ShowCase images={showCaseImages} bg='/images/bg.webp' />` : `<ShowCase images={showCaseImages} />`
    }
  )
}
`;

  return (
    <div className="flex flex-col h-full example relative">
      <Arrow360 />
      <div className={` m-4 h-80 scale-150 md:-mt-14 ${hasBackground ? 'mt-24':''} `}>
        <ShowCase bg={hasBackground ? '/3d/bg.webp' : ''} images={showCaseImages} initialImage={14} width='100%' height='100%' />
      </div>
      <div className='flex justify-center'>
        <Code inner={inner} />
      </div>
      <div className="absolute left-24 top-14">
        <input
          id="flexCheckChecked"
          className="h-4 w-4 border border-gray-300 rounded-sm bg-white checked:bg-blue-600 checked:border-blue-600 focus:outline-none transition duration-200 mt-1 align-top bg-no-repeat bg-center bg-contain float-left mr-2 cursor-pointer"
          type="checkbox" onChange={handleChange} checked={hasBackground} />
        <label className="inline-block text-sm text-white" htmlFor="flexCheckChecked">
          Background
        </label>
      </div>
    </div>
  );
}