
import React from 'react';
import { Trophy, ArrowRight, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Tabs, TabsList, TabsTrigger, TabsContent } from '@/components/ui/tabs';
import { cn } from '@/lib/utils';
import { Avatar } from '@/components/ui/avatar';

interface TopRatedPlayerProps {
  id: string;
  name: string;
  team: string;
  position: string;
  image: string;
  rating: number;
}

const qbPlayers: TopRatedPlayerProps[] = [
  {
    id: '1',
    name: 'Patrick Mahomes',
    team: 'Kansas City Chiefs',
    position: 'QB',
    image: 'https://a.espncdn.com/combiner/i?img=/i/headshots/nfl/players/full/3139477.png',
    rating: 9.2,
  },
  {
    id: '2',
    name: 'Josh Allen',
    team: 'Buffalo Bills',
    position: 'QB',
    image: 'https://a.espncdn.com/combiner/i?img=/i/headshots/nfl/players/full/3918298.png',
    rating: 8.9,
  },
  {
    id: '3',
    name: 'Joe Burrow',
    team: 'Cincinnati Bengals',
    position: 'QB',
    image: 'https://a.espncdn.com/combiner/i?img=/i/headshots/nfl/players/full/3915511.png',
    rating: 8.7,
  }
];

const rbPlayers: TopRatedPlayerProps[] = [
  {
    id: '1',
    name: 'Christian McCaffrey',
    team: 'San Francisco 49ers',
    position: 'RB',
    image: 'https://a.espncdn.com/combiner/i?img=/i/headshots/nfl/players/full/3117251.png',
    rating: 9.4,
  },
  {
    id: '2',
    name: 'Derrick Henry',
    team: 'Baltimore Ravens',
    position: 'RB',
    image: 'https://a.espncdn.com/combiner/i?img=/i/headshots/nfl/players/full/3043078.png',
    rating: 8.8,
  },
  {
    id: '3',
    name: 'Saquon Barkley',
    team: 'Philadelphia Eagles',
    position: 'RB',
    image: 'https://a.espncdn.com/combiner/i?img=/i/headshots/nfl/players/full/3929630.png',
    rating: 8.6,
  }
];

const wrPlayers: TopRatedPlayerProps[] = [
  {
    id: '1',
    name: 'Justin Jefferson',
    team: 'Minnesota Vikings',
    position: 'WR',
    image: 'https://a.espncdn.com/combiner/i?img=/i/headshots/nfl/players/full/4262921.png',
    rating: 9.3,
  },
  {
    id: '2',
    name: 'Tyreek Hill',
    team: 'Miami Dolphins',
    position: 'WR',
    image: 'https://a.espncdn.com/combiner/i?img=/i/headshots/nfl/players/full/3116406.png',
    rating: 9.1,
  },
  {
    id: '3',
    name: 'CeeDee Lamb',
    team: 'Dallas Cowboys',
    position: 'WR',
    image: 'https://a.espncdn.com/combiner/i?img=/i/headshots/nfl/players/full/4241389.png',
    rating: 8.9,
  }
];

const TopRatedSection: React.FC = () => {
  return (
    <div className="bg-white dark:bg-card rounded-lg shadow-md border border-border overflow-hidden">
      <div className="p-4 border-b flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <Trophy className="h-5 w-5 text-sport-red" />
          <h3 className="font-bold text-lg">Top Rated Players</h3>
        </div>
        <Button variant="ghost" size="sm" className="text-sport-red hover:text-sport-red hover:bg-red-50">
          View All <ArrowRight className="h-4 w-4 ml-1" />
        </Button>
      </div>
      
      <div className="p-4">
        <Tabs defaultValue="qb" className="w-full">
          <TabsList className="grid grid-cols-3 mb-4">
            <TabsTrigger value="qb">Quarterbacks</TabsTrigger>
            <TabsTrigger value="rb">Running Backs</TabsTrigger>
            <TabsTrigger value="wr">Wide Receivers</TabsTrigger>
          </TabsList>
          
          <TabsContent value="qb" className="space-y-3 animate-fade-in">
            {qbPlayers.map((player, index) => (
              <TopRatedPlayerRow key={player.id} player={player} rank={index + 1} />
            ))}
          </TabsContent>
          
          <TabsContent value="rb" className="space-y-3 animate-fade-in">
            {rbPlayers.map((player, index) => (
              <TopRatedPlayerRow key={player.id} player={player} rank={index + 1} />
            ))}
          </TabsContent>
          
          <TabsContent value="wr" className="space-y-3 animate-fade-in">
            {wrPlayers.map((player, index) => (
              <TopRatedPlayerRow key={player.id} player={player} rank={index + 1} />
            ))}
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

interface TopRatedPlayerRowProps {
  player: TopRatedPlayerProps;
  rank: number;
}

const TopRatedPlayerRow: React.FC<TopRatedPlayerRowProps> = ({ player, rank }) => {
  return (
    <div className="flex items-center p-2 hover:bg-muted/50 rounded-md transition-colors">
      <div className="w-6 text-center font-bold text-muted-foreground">{rank}</div>
      
      <div className="flex items-center flex-1 ml-2">
        <Avatar className="h-10 w-10 rounded">
          <img src={player.image} alt={player.name} className="object-cover" />
        </Avatar>
        
        <div className="ml-3">
          <p className="font-medium">{player.name}</p>
          <p className="text-xs text-muted-foreground">{player.team}</p>
        </div>
      </div>
      
      <div className="flex items-center">
        <div className={cn(
          "flex items-center space-x-1 px-2 py-1 rounded font-bold text-sm",
          player.rating >= 9.0 ? "bg-emerald-100 text-emerald-700" : 
          player.rating >= 8.0 ? "bg-green-100 text-green-700" :
          player.rating >= 7.0 ? "bg-yellow-100 text-yellow-700" : "bg-red-100 text-red-700"
        )}>
          <Star className="h-3 w-3 fill-current" />
          <span>{player.rating.toFixed(1)}</span>
        </div>
      </div>
    </div>
  );
};

export default TopRatedSection;
