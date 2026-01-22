import React from 'react';

export const TransitionOverlay: React.FC = () => {
    return (
        <div
            className="transition-overlay"
            style={{
                position: 'fixed',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                zIndex: 10002,
                pointerEvents: 'none',
                background: 'transparent'
            }}
        />
    );
};
