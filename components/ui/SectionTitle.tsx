type SectionTitleProps = {
  title: string;
  description?: string;
};

export default function SectionTitle({ title, description }: SectionTitleProps) {
  return (
    <div className="mb-8">
      <h2 className="text-3xl font-bold">{title}</h2>
      {description && <p className="mt-3 text-zinc-400">{description}</p>}
    </div>
  );
}
