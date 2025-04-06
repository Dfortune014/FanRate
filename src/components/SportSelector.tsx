
import React from 'react';
import { cn } from '@/lib/utils';

type Sport = {
  id: string;
  name: string;
};

const sports: Sport[] = [
  { id: 'nfl', name: 'NFL' },
  { id: 'nba', name: 'NBA' },
  { id: 'mlb', name: 'MLB' },
  { id: 'nhl', name: 'NHL' },
  { id: 'soccer', name: 'Soccer' }
];

const SportSelector: React.FC = () => {
  const [selectedSport, setSelectedSport] = React.useState('nfl');

  return (
    <nav className="flex items-center space-x-1 md:space-x-4 overflow-x-auto hide-scrollbar">
      {sports.map((sport) => (
        <button
          key={sport.id}
          className={cn(
            "px-3 py-1 text-sm font-semibold whitespace-nowrap transition-colors",
            selectedSport === sport.id 
              ? "text-white border-b-2 border-sport-red" 
              : "text-gray-300 hover:text-white"
          )}
          onClick={() => setSelectedSport(sport.id)}
        >
          {sport.name}
        </button>
      ))}
      <button className="px-3 py-1 text-sm font-semibold text-gray-300 hover:text-white whitespace-nowrap">
        More
      </button>
    </nav>
  );
};

export default SportSelector;
