import { Link } from 'react-router-dom'

export default function Home({ projects }) {
    return (
        <main className="flex-1 p-6">
            <h3 className="text-xl font-semibold mb-4">My projects</h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 auto-rows-fr">
                {projects.map(p => {
                    const thumb = p.screenshots?.[0]?.src ?? 'https://via.placeholder.com/1200x675?text=No+image'
                    return (
                        <Link
                            key={p.id}
                            to={`/projects/${p.id}`}
                            className="group block overflow-hidden rounded-lg border bg-white shadow-sm"
                        >
                            {/* thumbnail fills cell */}
                            <div className="w-full h-44 sm:h-56 md:h-40 lg:h-48 bg-gray-100 overflow-hidden">
                                <img
                                    src={thumb}
                                    alt={p.title}
                                    loading="lazy"
                                    className="w-full h-full object-cover transform transition-transform duration-300 group-hover:scale-105"
                                />
                            </div>

                            {/* meta */}
                            <div className="p-3">
                                <div className="flex items-center justify-between">
                                    <h4 className="font-medium text-sm">{p.title}</h4>
                                    <span className="text-xs px-2 py-0.5 bg-gray-200 rounded">{p.tag}</span>
                                </div>
                                <p className="text-xs text-gray-500 mt-1 line-clamp-2">{p.desc}</p>
                            </div>
                        </Link>
                    )
                })}
            </div>
        </main>
    )
}

