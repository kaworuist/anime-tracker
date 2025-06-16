export default function AnimeCard({ anime }) {
  return (
    <div className="bg-white shadow rounded-lg overflow-hidden">
      <img src={anime.cover} alt={anime.title} className="w-full h-48 object-cover" />
      <div className="p-4">
        <h2 className="text-lg font-semibold">{anime.title}</h2>
        <p className="text-sm text-gray-600">状态: {anime.status}</p>
      </div>
    </div>
  );
}