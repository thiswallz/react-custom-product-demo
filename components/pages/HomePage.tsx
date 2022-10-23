import { DefaultTemplate } from '../templates/DefaultTemplate';
import { HoverImage } from 'react-custom-product';



export default function HomePage() {

  return (
    <DefaultTemplate>
      hello world
      <div style={{
        width: '400px',
        height: '400px'
      }}>
        <HoverImage
          src="/auto.webp"
          alt=""
          className=""
          style={{ color: 'white' }}
        />
      </div>

    </DefaultTemplate>
  );
}
