import { useState } from "react";

const statusOptions = ['Watching', 'Completed', 'Plan to Watch'];

export default function AddAnimeForm({ onAddAnime }) {
    const [title, setTitle] = useState('');
    const [cover, setCover] = useState('');
    const [status, setStatus] = useState(statusOptions[0]);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!title || !cover) {
            alert('请填写所有字段');
            return;
        }

        const newAnime = {
            id: Date.now(),
            title,
            cover,
            status,
        };

        onAddAnime(newAnime);
        setTitle('');
        setCover('');
        setStatus(statusOptions[0]);
    }

    return (
        <form onSubmit={handleSubmit} className="mb-6 space-y-3">
            <div>
                <label className="block font-medium">番剧名</label>
                <input className="w-full border px-3 py-1 rounded" value={title} onChange={e => setTitle(e.target.value)} />
            </div>
            <div>
                <label className="block font-medium">封面链接</label>
                <input className="w-full border px-3 py-1 rounded" value={cover} onChange={e => setCover(e.target.value)} />
            </div>
            <div>
                <label className="block font-medium">状态</label>
                <select className="w-full border px-3 py-1 rounded" value={status} onChange={e => setStatus(e.target.value)}>
                    {statusOptions.map(option => (
                        <option key={option} value={option}>{option}</option>
                    ))}
                </select>
            </div>
            <button type="submit" className="bg-green-600 text-white px-4 py-1 rounded hover:bg-green-700">
                添加番剧
            </button>
        </form>
    )
}