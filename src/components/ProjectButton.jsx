import { Link } from 'react-router-dom'

export default function ProjectButton({ project }) {
    return (
        <Link
            key={project.id}
            to={`/projects/${project.id}`}
            className="group block overflow-hidden rounded-lg border bg-white shadow-sm"
        >
            {/* thumbnail fills cell */}
            <div className="w-full h-44 sm:h-56 md:h-40 lg:h-48 bg-gray-100 overflow-hidden">
                <img
                    src={project.screenshots?.[0]?.src ?? '/assets/placeholder.png'}
                    alt={project.title}
                    loading="lazy"
                    className="w-full h-full object-cover transform transition-transform duration-300 group-hover:scale-105"
                />
            </div>

            {/* meta */}
            <div className="p-3">
                <div className="flex items-center justify-between">
                    <h4 className="font-medium text-sm">{project.title}</h4>
                    <span className="text-xs px-2 py-0.5 bg-gray-200 rounded">{project.tag}</span>
                </div>
                <p className="text-xs text-gray-500 mt-1 line-clamp-2">{project.desc}</p>
            </div>
        </Link>
    )
}