import { Link } from 'react-router-dom'
import ProjectButton from './ProjectButton'

export default function Home({ projects }) {
    return (
        <main className="flex-1 p-6">
            {/* grid van Projectbuttons */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 auto-rows-fr gap-4">
                {projects.map(p => (
                    <ProjectButton key={p.id} project={p} />
                ))}
            </div>
        </main>
    )
}