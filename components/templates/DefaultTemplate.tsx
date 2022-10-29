import { useAtom } from "jotai";
import { productAtom } from "../../lib/store";

interface DefaultTemplateProps {
  children: React.ReactNode;
}

export function DefaultTemplate({
  children,
}: DefaultTemplateProps) {
  const [product] = useAtom(productAtom)
  // TODO make store/autos enums
  return (
    <div className={`flex justify-center  
      ${product === 'store' ? 'bg-white text-blue-600' : ''}`}>
      <div className="w-full max-w-6xl">
        {children}
      </div>
    </div>

  );
}
