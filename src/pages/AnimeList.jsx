// src/pages/AnimeList.jsx
import AddAnimeForm from '../components/AddAnimeForm';
import AnimeCard from '../components/AnimeCard';
import { useState } from 'react';
import { useLocalStorageState } from '../hooks/useLocalStorage';
const statusOptions = ['All', 'Watching', 'Completed', 'Plan to Watch'];

export default function AnimeList() {
    const [animeList, setAnimeList] = useLocalStorageState('animeList', [
        { id: 1, title: '进击的巨人', cover: 'https://example.com/attack-on-titan.jpg', status: 'Watching' },
        { id: 2, title: '鬼灭之刃', cover: 'https://example.com/demon-slayer.jpg', status: 'Completed' },]
    );
    const [selectedAnime, setSelectedAnime] = useState('All');
    console.log(animeList);
    const handleAddAnime = (newAnime) => {
        setAnimeList([...animeList, newAnime]);
    };
    const filteredAnime = selectedAnime === 'All' ? animeList : animeList.filter(anime => anime.status === selectedAnime);
    return (
        <div className="p-4">
        <h1 className="text-2xl font-bold mb-4">📺 我的番剧追踪器</h1>
        <AddAnimeForm onAddAnime={handleAddAnime} />
        <div className="mb-4 flex flex-wrap gap-2">
            {statusOptions.map((status) => (
                <button
                    key={status}
                    className={`px-4 py-2 rounded ${selectedAnime === status ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-800'}`}
                    onClick={() => setSelectedAnime(status)}
                >
                    {status}
                </button>
            ))}
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {filteredAnime.map((anime) => (
                <AnimeCard key={anime.id} anime={anime} />
            ))}
        </div>
        </div>
    );
}
