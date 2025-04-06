
import React from 'react';
import { TrendingUp, ArrowRight } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Avatar } from '@/components/ui/avatar';

interface TrendingPlayerProps {
  id: string;
  name: string;
  team: string;
  position: string;
  image: string;
  rating: number;
  change: number;
}

const trendingPlayers: TrendingPlayerProps[] = [
  {
    id: '1',
    name: 'Brock Purdy',
    team: 'San Francisco 49ers',
    position: 'QB',
    image: 'https://a.espncdn.com/combiner/i?img=/i/headshots/nfl/players/full/4361669.png',
    rating: 8.1,
    change: 0.6
  },
  {
    id: '2',
    name: 'Jordan Love',
    team: 'Green Bay Packers',
    position: 'QB',
    image: 'https://a.espncdn.com/combiner/i?img=/i/headshots/nfl/players/full/4036378.png',
    rating: 7.8,
    change: 1.2
  },
  {
    id: '3',
    name: 'De\'Von Achane',
    team: 'Miami Dolphins',
    position: 'RB',
    image: 'https://a.espncdn.com/combiner/i?img=/i/headshots/nfl/players/full/4569913.png',
    rating: 8.3,
    change: 0.9
  },
  {
    id: '4',
    name: 'Puka Nacua',
    team: 'Los Angeles Rams',
    position: 'WR',
    image: 'https://a.espncdn.com/combiner/i?img=/i/headshots/nfl/players/full/4426348.png',
    rating: 8.5,
    change: 1.4
  },
  {
    id: '5',
    name: 'Will Levis',
    team: 'Tennessee Titans',
    position: 'QB',
    image: 'https://a.espncdn.com/combiner/i?img=/i/headshots/nfl/players/full/4362887.png',
    rating: 7.2,
    change: 0.7
  }
];

const TrendingPlayers: React.FC = () => {
  return (
    <div className="bg-white dark:bg-card rounded-lg shadow-md border border-border overflow-hidden">
      <div className="p-4 border-b flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <TrendingUp className="h-5 w-5 text-sport-red" />
          <h3 className="font-bold text-lg">Trending Players</h3>
        </div>
        <Button variant="ghost" size="sm" className="text-sport-red hover:text-sport-red hover:bg-red-50">
          View All <ArrowRight className="h-4 w-4 ml-1" />
        </Button>
      </div>
      
      <div className="divide-y">
        {trendingPlayers.map((player) => (
          <div key={player.id} className="p-3 hover:bg-muted/50 transition-colors">
            <div className="flex items-center space-x-3">
              <Avatar className="h-10 w-10 rounded">
                <img src={player.image} alt={player.name} className="object-cover" />
              </Avatar>
              
              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between">
                  <p className="font-medium truncate">{player.name}</p>
                  <div className={cn(
                    "text-sm font-bold",
                    player.rating >= 8.5 ? "text-emerald-500" : 
                    player.rating >= 7.5 ? "text-green-500" :
                    player.rating >= 6.5 ? "text-yellow-500" : "text-red-500"
                  )}>
                    {player.rating.toFixed(1)}
                  </div>
                </div>
                
                <div className="flex items-center justify-between mt-1">
                  <p className="text-xs text-muted-foreground">
                    {player.team} • {player.position}
                  </p>
                  <div className="flex items-center text-xs text-emerald-500">
                    <span className="font-medium">+{player.change.toFixed(1)}</span>
                    <TrendingUp className="h-3 w-3 ml-1" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TrendingPlayers;
