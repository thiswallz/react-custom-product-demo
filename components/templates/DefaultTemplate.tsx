
interface DefaultTemplateProps {
  children: React.ReactNode;
}

export function DefaultTemplate({
  children,
}: DefaultTemplateProps) {

  return (
    <div className="flex justify-center">
      <div className="w-full max-w-6xl">
        {children}
      </div>
    </div>

  );
}
