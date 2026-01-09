import { motion } from 'framer-motion';

interface ProjectFilterProps {
    activeFilter: string;
    onFilterChange: (filter: string) => void;
}

const filters = [
    { id: 'all', label: 'All' },
    { id: 'system-design', label: 'Systems' },
    { id: 'ai-agents', label: 'AI' },
    { id: 'blockchain', label: 'Blockchain' },
    { id: 'real-time', label: 'Real-time' },
];

const ProjectFilter = ({ activeFilter, onFilterChange }: ProjectFilterProps) => {
    return (
        <div className="flex flex-wrap gap-2 mb-8">
            {filters.map((filter) => (
                <motion.button
                    key={filter.id}
                    onClick={() => onFilterChange(filter.id)}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                        activeFilter === filter.id
                            ? 'bg-accent text-bg-primary'
                            : 'bg-surface border border-border-color text-text-muted hover:border-accent hover:text-text-primary'
                    }`}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                >
                    {filter.label}
                </motion.button>
            ))}
        </div>
    );
};

export default ProjectFilter;
