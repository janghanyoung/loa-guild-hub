type EventCardProps = {
  title: string;
  subtitle: string;
  description: string;
};

export default function EventCard({
  title,
  subtitle,
  description,
}: EventCardProps) {
  return (
    <div className="rounded-2xl border border-zinc-800 bg-zinc-900 p-5">
      <p className="text-xs text-zinc-500">{subtitle}</p>
      <h3 className="mt-2 text-xl font-semibold">{title}</h3>
      <p className="mt-3 text-sm text-zinc-400">{description}</p>
    </div>
  );
}