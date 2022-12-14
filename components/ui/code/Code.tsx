import { CSSProperties, useEffect, useRef } from 'react';
import hljs from 'highlight.js';
import 'highlight.js/styles/arta.css'
import typescript from 'highlight.js/lib/languages/typescript';
hljs.registerLanguage('typescript', typescript);

type CodeProps = {
  inner: string;
  css?: CSSProperties
}

export default function Code({ inner, css }: CodeProps) {
  const codeSample = useRef<HTMLElement>(null);

  useEffect(() => {
    if (codeSample.current) {
      hljs.highlightBlock(codeSample.current)
    }
  }, [inner])

  return (
    <div style={css} className="rounded-lg relative bg-black">
      <div className="absolute flex gap-2 left-2 top-2">
        <div className="w-2 h-2 rounded-full bg-red-600"></div>
        <div className="w-2 h-2 rounded-full bg-amber-300"></div>
        <div className="w-2 h-2 rounded-full bg-green-500"></div>
      </div>
      <pre>
        <code className="bg-black text-[12px] md:text-[14px] language-typescript" ref={codeSample}>
          {inner}
        </code>
      </pre>
    </div>
  );
}
