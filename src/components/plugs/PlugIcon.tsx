'use client';

interface PlugIconProps {
  type: string;
  size?: number;
  animated?: boolean;
}

const PlugIcon: React.FC<PlugIconProps> = ({ type, size = 32, animated = true }) => {
  const plugTypeDescriptions: { [key: string]: string } = {
    'A': 'Flat parallel pins - North America/Japan',
    'B': 'Flat parallel pins with ground - North America',
    'C': 'Round pins - European standard (Europlug)',
    'D': 'Round pins (5A) - India/Africa/UK legacy',
    'E': 'Round pins with ground - France/Belgium',
    'F': 'Round pins with ground clips - Germany (Schuko)',
    'G': 'Three rectangular pins - UK/Ireland/Malaysia',
    'H': 'Three pins in Y shape - Israel',
    'I': 'Angled flat pins - Australia/New Zealand/China',
    'J': 'Three round pins - Switzerland',
    'K': 'Three round pins - Denmark/Greenland',
    'L': 'Three round pins - Italy/Chile',
    'M': 'Three round pins (15A) - South Africa',
    'N': 'Three round pins - Brazil',
    'O': 'Three round pins - Thailand'
  };

  // Simple SVG representations of each plug type
  const renderPlug = () => {
    const baseProps = {
      width: size,
      height: size,
      viewBox: "0 0 32 32",
      className: animated ? "transition-transform hover:scale-110" : ""
    };

    switch (type.toUpperCase()) {
      case 'A':
        return (
          <svg {...baseProps}>
            <rect x="10" y="8" width="2" height="16" fill="#2563eb" rx="1"/>
            <rect x="20" y="8" width="2" height="16" fill="#2563eb" rx="1"/>
            <rect x="8" y="24" width="16" height="6" fill="#374151" rx="2"/>
          </svg>
        );
      case 'B':
        return (
          <svg {...baseProps}>
            <rect x="10" y="8" width="2" height="16" fill="#2563eb" rx="1"/>
            <rect x="20" y="8" width="2" height="16" fill="#2563eb" rx="1"/>
            <circle cx="16" cy="6" r="1" fill="#2563eb"/>
            <rect x="8" y="24" width="16" height="6" fill="#374151" rx="2"/>
          </svg>
        );
      case 'C':
        return (
          <svg {...baseProps}>
            <circle cx="12" cy="12" r="1.5" fill="#2563eb"/>
            <circle cx="20" cy="12" r="1.5" fill="#2563eb"/>
            <rect x="8" y="20" width="16" height="8" fill="#374151" rx="3"/>
          </svg>
        );
      case 'F':
        return (
          <svg {...baseProps}>
            <circle cx="12" cy="12" r="1.5" fill="#2563eb"/>
            <circle cx="20" cy="12" r="1.5" fill="#2563eb"/>
            <rect x="6" y="18" width="4" height="2" fill="#2563eb"/>
            <rect x="22" y="18" width="4" height="2" fill="#2563eb"/>
            <rect x="8" y="22" width="16" height="8" fill="#374151" rx="3"/>
          </svg>
        );
      case 'G':
        return (
          <svg {...baseProps}>
            <rect x="10" y="8" width="2" height="14" fill="#2563eb" rx="0.5"/>
            <rect x="20" y="8" width="2" height="14" fill="#2563eb" rx="0.5"/>
            <rect x="15" y="4" width="2" height="18" fill="#2563eb" rx="0.5"/>
            <rect x="8" y="22" width="16" height="8" fill="#374151" rx="2"/>
          </svg>
        );
      case 'I':
        return (
          <svg {...baseProps}>
            <rect x="8" y="10" width="2" height="12" fill="#2563eb" rx="0.5" transform="rotate(-15 9 16)"/>
            <rect x="22" y="10" width="2" height="12" fill="#2563eb" rx="0.5" transform="rotate(15 23 16)"/>
            <rect x="15" y="6" width="2" height="12" fill="#2563eb" rx="0.5"/>
            <rect x="8" y="22" width="16" height="8" fill="#374151" rx="2"/>
          </svg>
        );
      default:
        return (
          <svg {...baseProps}>
            <circle cx="16" cy="16" r="12" fill="#e5e7eb" stroke="#9ca3af" strokeWidth="2"/>
            <text x="16" y="20" textAnchor="middle" fontSize="12" fill="#6b7280" fontWeight="bold">
              {type}
            </text>
          </svg>
        );
    }
  };

  return (
    <div className="flex items-center space-x-2" title={plugTypeDescriptions[type.toUpperCase()]}>
      {renderPlug()}
      <span className="text-sm font-medium text-gray-700">Type {type.toUpperCase()}</span>
    </div>
  );
};

export default PlugIcon;