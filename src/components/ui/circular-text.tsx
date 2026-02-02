import ReactCurvedText from 'react-curved-text';

const CircularTextComponent = () => {
    return (
        <div className="rotating-text relative group">
            {/* Glowing background effect */}
            <div className="absolute inset-0 rounded-full bg-gradient-to-r from-primary/20 via-accent/20 to-premium/20 blur-3xl opacity-60 group-hover:opacity-100 transition-opacity duration-500 animate-pulse-attention" />

            {/* Outer ring glow */}
            <div className="absolute inset-0 rounded-full border-2 border-primary/30 group-hover:border-accent/50 blur-sm transition-colors duration-500" />

            {/* Main circular text */}
            <div className="relative z-10">
                <ReactCurvedText
                    width={1000}
                    height={1000}
                    cx={500}
                    cy={500}
                    rx={380}
                    ry={380}
                    text="Full Stack Software Engineer | Backend Software Engineer | Frontend Software Engineer | "
                    textProps={{
                        style: {
                            fontSize: 52,
                            fontWeight: '600',
                            letterSpacing: '1px',
                            fill: '#142652',
                            filter: 'drop-shadow(0 2px 8px rgba(0,0,0,0.15))'
                        }
                    }}
                />

                {/* SVG Gradient Definition */}
                <svg width="0" height="0" style={{ position: 'absolute' }}>
                    <defs>
                        <linearGradient id="textGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                            <stop offset="0%" style={{ stopColor: 'hsl(217, 91%, 60%)', stopOpacity: 1 }} />
                            <stop offset="50%" style={{ stopColor: 'hsl(271, 70%, 60%)', stopOpacity: 1 }} />
                            <stop offset="100%" style={{ stopColor: 'hsl(14, 90%, 65%)', stopOpacity: 1 }} />
                        </linearGradient>
                    </defs>
                </svg>
            </div>

            {/* Center dot accent */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-gradient-to-br from-primary via-premium to-accent animate-pulse shadow-lg shadow-primary/50" />
        </div>
    );
};

export default CircularTextComponent;
