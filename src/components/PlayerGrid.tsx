
import React, { useState } from 'react';
import PlayerRatingCard, { PlayerRatingProps } from './PlayerRatingCard';
import { Button } from '@/components/ui/button';
import { 
  ChevronDown, 
  Filter, 
  LayoutGrid, 
  List
} from 'lucide-react';
import { cn } from '@/lib/utils';

// Mock data for player ratings
const mockPlayers: PlayerRatingProps[] = [
  {
    id: '1',
    name: 'Patrick Mahomes',
    team: 'Kansas City Chiefs',
    position: 'Quarterback',
    image: 'https://a.espncdn.com/combiner/i?img=/i/headshots/nfl/players/full/3139477.png',
    overallRating: 9.2,
    ratingCount: 24689,
    stats: [
      { label: 'Accuracy', value: 9.3 },
      { label: 'Arm Strength', value: 9.8 },
      { label: 'Mobility', value: 8.7 },
    ],
    trend: 'up'
  },
  {
    id: '2',
    name: 'Josh Allen',
    team: 'Buffalo Bills',
    position: 'Quarterback',
    image: 'https://a.espncdn.com/combiner/i?img=/i/headshots/nfl/players/full/3918298.png',
    overallRating: 8.9,
    ratingCount: 18453,
    stats: [
      { label: 'Accuracy', value: 8.6 },
      { label: 'Arm Strength', value: 9.5 },
      { label: 'Mobility', value: 8.5 },
    ],
    trend: 'neutral'
  },
  {
    id: '3',
    name: 'Joe Burrow',
    team: 'Cincinnati Bengals',
    position: 'Quarterback',
    image: 'https://a.espncdn.com/combiner/i?img=/i/headshots/nfl/players/full/3915511.png',
    overallRating: 8.7,
    ratingCount: 16890,
    stats: [
      { label: 'Accuracy', value: 9.2 },
      { label: 'Arm Strength', value: 8.4 },
      { label: 'Mobility', value: 7.5 },
    ],
    trend: 'down'
  },
  {
    id: '4',
    name: 'Justin Jefferson',
    team: 'Minnesota Vikings',
    position: 'Wide Receiver',
    image: 'https://a.espncdn.com/combiner/i?img=/i/headshots/nfl/players/full/4262921.png',
    overallRating: 9.3,
    ratingCount: 19823,
    stats: [
      { label: 'Route Running', value: 9.5 },
      { label: 'Hands', value: 9.4 },
      { label: 'Speed', value: 8.8 },
    ],
    trend: 'up'
  },
  {
    id: '5',
    name: 'Christian McCaffrey',
    team: 'San Francisco 49ers',
    position: 'Running Back',
    image: 'https://a.espncdn.com/combiner/i?img=/i/headshots/nfl/players/full/3117251.png',
    overallRating: 9.4,
    ratingCount: 21567,
    stats: [
      { label: 'Speed', value: 9.1 },
      { label: 'Agility', value: 9.7 },
      { label: 'Receiving', value: 9.3 },
    ],
    trend: 'up'
  },
  {
    id: '6',
    name: 'Micah Parsons',
    team: 'Dallas Cowboys',
    position: 'Linebacker',
    image: 'https://a.espncdn.com/combiner/i?img=/i/headshots/nfl/players/full/4360634.png',
    overallRating: 9.2,
    ratingCount: 17345,
    stats: [
      { label: 'Pass Rush', value: 9.8 },
      { label: 'Tackling', value: 8.9 },
      { label: 'Coverage', value: 8.1 },
    ],
    trend: 'up'
  }
];

type ViewType = 'grid' | 'list';
type SortOption = 'rating' | 'name' | 'trending';

const PlayerGrid: React.FC = () => {
  const [viewType, setViewType] = useState<ViewType>('grid');
  const [sortBy, setSortBy] = useState<SortOption>('rating');

  const sortedPlayers = [...mockPlayers].sort((a, b) => {
    switch (sortBy) {
      case 'rating':
        return b.overallRating - a.overallRating;
      case 'name':
        return a.name.localeCompare(b.name);
      case 'trending':
        // Sort by trend: up first, then neutral, then down
        const trendOrder = { up: 0, neutral: 1, down: 2 };
        return (trendOrder[a.trend || 'neutral'] - trendOrder[b.trend || 'neutral']);
      default:
        return 0;
    }
  });

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col md:flex-row justify-between md:items-center mb-6">
        <h2 className="text-2xl font-bold mb-4 md:mb-0">NFL Player Ratings</h2>
        
        <div className="flex flex-col sm:flex-row gap-4">
          <div className="flex items-center">
            <Button variant="outline" size="sm" className="flex items-center gap-2">
              <Filter className="h-4 w-4" />
              <span>Filter</span>
            </Button>
            
            <div className="ml-2">
              <Button variant="outline" size="sm" className="flex items-center gap-2">
                <span>Sort by: </span>
                <span className="font-medium">
                  {sortBy === 'rating' && 'Rating'}
                  {sortBy === 'name' && 'Name'}
                  {sortBy === 'trending' && 'Trending'}
                </span>
                <ChevronDown className="h-4 w-4" />
              </Button>
              <div className="hidden absolute mt-1 bg-white dark:bg-card border rounded-md shadow-lg z-10 w-40">
                <button 
                  className="block w-full text-left px-4 py-2 hover:bg-accent"
                  onClick={() => setSortBy('rating')}
                >
                  Rating
                </button>
                <button 
                  className="block w-full text-left px-4 py-2 hover:bg-accent"
                  onClick={() => setSortBy('name')}
                >
                  Name
                </button>
                <button 
                  className="block w-full text-left px-4 py-2 hover:bg-accent"
                  onClick={() => setSortBy('trending')}
                >
                  Trending
                </button>
              </div>
            </div>
          </div>
          
          <div className="flex items-center gap-1 border rounded-md">
            <Button 
              variant="ghost" 
              size="icon"
              className={cn(viewType === 'grid' && "bg-accent")}
              onClick={() => setViewType('grid')}
            >
              <LayoutGrid className="h-4 w-4" />
            </Button>
            <Button 
              variant="ghost" 
              size="icon"
              className={cn(viewType === 'list' && "bg-accent")}
              onClick={() => setViewType('list')}
            >
              <List className="h-4 w-4" />
            </Button>
          </div>
        </div>
      </div>
      
      <div className={cn(
        "grid gap-6",
        viewType === 'grid' ? "grid-cols-1 md:grid-cols-2 lg:grid-cols-3" : "grid-cols-1"
      )}>
        {sortedPlayers.map(player => (
          <PlayerRatingCard
            key={player.id}
            {...player}
          />
        ))}
      </div>
    </div>
  );
};

export default PlayerGrid;
