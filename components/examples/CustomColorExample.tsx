import { useState } from 'react';
import { CustomColor } from 'react-custom-product'
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

  const [image, setImage] = useState('/models/m-white.png')

  return (
    <div className="flex flex-col lg:flex-row h-full example relative ">
      <h1 className='right-10'>CustomColor</h1>
      <div className='actions left-0 right-10 text-[14px] md:text-xs'>
        <button onClick={() => setImage("/models/m-white.png")}>
          Model 1
        </button>
        <button onClick={() => setImage("/models/m-orange.png")}>
          Model 2
        </button>
        <button onClick={() => setImage("/models/m-blue.png")}>
          Model 3
        </button>
      </div>
      <div className="flex justify-center order-2 lg:order-1">
        <Code inner={inner} />
      </div>
      <div className="justify-center order-1 lg:order-2 scale-150 mt-20 -ml-36 sm:ml-0">
        <CustomColor
          width="750px"
          height="450px"
          src={image}
        />
      </div>
    </div>
  );
}