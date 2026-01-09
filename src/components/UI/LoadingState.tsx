import { motion } from 'framer-motion';

interface LoadingStateProps {
    message?: string;
}

const LoadingState = ({ message = 'Loading...' }: LoadingStateProps) => {
    return (
        <div className="flex flex-col items-center justify-center min-h-[400px] text-text-muted">
            <motion.div
                className="flex gap-2 mb-4"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
            >
                {[0, 1, 2].map((i) => (
                    <motion.div
                        key={i}
                        className="w-3 h-3 bg-accent rounded-full"
                        initial={{ scale: 0 }}
                        animate={{ scale: [0, 1, 0] }}
                        transition={{
                            duration: 0.6,
                            repeat: Infinity,
                            delay: i * 0.2,
                        }}
                    />
                ))}
            </motion.div>
            <p className="text-sm font-mono">{message}</p>
        </div>
    );
};

export default LoadingState;
