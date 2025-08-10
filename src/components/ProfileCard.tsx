// ProfileCard.tsx
interface ProfileCardProps {
  title?: string;
  handle?: string;
  img?: string;
  description?: string;
}

export default function ProfileCard({ title, handle, img, description }: ProfileCardProps) {
  return (
    <div className="overflow-hidden rounded-2xl border border-slate-200 bg-gray-100 shadow-xl p-5">
      <div className="relative h-44 w-full overflow-hidden bg-slate-100">
        <img
          src={img}
          alt={title ? `${title} profile` : "profile image"}
          className="h-full w-full object-cover"
        />
        
      </div>

      <h2 className="text-lg font-semibold text-slate-900">{title}</h2>
      <p className="mt-1 text-sm text-slate-500">{handle}</p>
      <p className="mt-2 text-sm text-slate-600">{description}</p>
    </div >
  );
}

