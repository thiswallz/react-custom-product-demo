import { useAtom } from "jotai";
import { productAtom } from "../../lib/store";

interface DefaultTemplateProps {
  children: React.ReactNode;
}

export function DefaultTemplate({
  children,
}: DefaultTemplateProps) {
  const [product] = useAtom(productAtom)
  // TODO make figurines/autos enums
  return (
    <div className={`flex justify-center  
      ${product === 'figurines' ? 'bg-white text-blue-600' : ''}`}>
      <div className="w-full max-w-6xl">
        {children}
      </div>
    </div>

  );
}
