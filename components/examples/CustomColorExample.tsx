import { useAtom } from 'jotai';
import { useEffect, useState } from 'react';
import { ProductCustomColor } from 'react-custom-product'
import { productAtom } from '../../lib/store';
import Code from '../ui/code/Code';

const inner = `
export default function CustomColorExample() {

  const [image, setImage] = useState('/models/m-white.png')

  return (
    <CustomColor
      width="750px"
      height="450px"
      src={image}
    />
    <button onClick={() => setImage("/models/m-white.png")}>
      Model 1
    </button>
    <button onClick={() => setImage("/models/m-orange.png")}>
      Model 2
    </button>
    <button onClick={() => setImage("/models/m-blue.png")}>
      Model 2
    </button>
  );
}
`;

export default function CustomColorExample() {
  const [product] = useAtom(productAtom)

  const [image, setImage] = useState(`/${product}/models/1.png`)

  useEffect(() => {
    setImage(`/${product}/models/1.png`)
  }, [product])

  return (
    <div className="flex flex-col lg:flex-row h-full example relative ">
      <h1 className='top-0 right-10'>CustomColor</h1>
      <div className='actions left-0 right-10 text-[14px] md:text-xs'>
        <button onClick={() => setImage(`/${product}/models/1.png`)}>
          Model 1
        </button>
        <button onClick={() => setImage(`/${product}/models/2.png`)}>
          Model 2
        </button>
        <button onClick={() => setImage(`/${product}/models/3.png`)}>
          Model 3
        </button>
      </div>
      <div className="lg:w-1/2 flex justify-center order-2 lg:order-1">
        <Code inner={inner} />
      </div>
      {
        product === 'store' ? <div className="md:w-1/2 flex justify-center order-1 lg:order-2 mt-20 -ml-36 sm:ml-0">
          <ProductCustomColor
            width="450px"
            height="450px"
            src={image}
          />
        </div> :
          <div className="lg:w-1/2 justify-center order-1 lg:order-2 scale-150 mt-10 -ml-36 sm:ml-0">
            <ProductCustomColor
              width="750px"
              height="450px"
              src={image}
            />
          </div>
      }

    </div>
  );
}