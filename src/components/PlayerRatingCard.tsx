
import React, { useState } from 'react';
import { Star, TrendingUp, TrendingDown, Minus } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Avatar } from '@/components/ui/avatar';
import { Progress } from '@/components/ui/progress';

export interface PlayerRatingProps {
  id: string;
  name: string;
  team: string;
  position: string;
  image: string;
  overallRating: number;
  ratingCount: number;
  stats: {
    label: string;
    value: number;
  }[];
  userRating?: number | null;
  trend?: 'up' | 'down' | 'neutral';
}

const PlayerRatingCard: React.FC<PlayerRatingProps> = ({
  id,
  name,
  team,
  position,
  image,
  overallRating,
  ratingCount,
  stats,
  userRating = null,
  trend = 'neutral'
}) => {
  const [rating, setRating] = useState<number | null>(userRating);
  const [isHovering, setIsHovering] = useState<number | null>(null);

  const handleRating = (value: number) => {
    setRating(value);
  };

  const getTrendIcon = () => {
    switch (trend) {
      case 'up':
        return <TrendingUp className="h-4 w-4 text-green-500" />;
      case 'down':
        return <TrendingDown className="h-4 w-4 text-red-500" />;
      default:
        return <Minus className="h-4 w-4 text-gray-500" />;
    }
  };

  const getRatingColor = (score: number) => {
    if (score >= 9) return "text-emerald-500";
    if (score >= 8) return "text-green-500";
    if (score >= 7) return "text-lime-500";
    if (score >= 6) return "text-yellow-500";
    if (score >= 5) return "text-amber-500";
    return "text-red-500";
  };

  return (
    <div className="bg-white dark:bg-card rounded-lg shadow-md overflow-hidden border border-border animate-fade-in">
      <div className="p-4">
        <div className="flex items-center space-x-4">
          <Avatar className="h-16 w-16 rounded-md border">
            <img src={image} alt={name} className="object-cover" />
          </Avatar>
          
          <div className="flex-1">
            <div className="flex items-center justify-between">
              <h3 className="font-bold text-lg">{name}</h3>
              <div className="flex items-center">
                {getTrendIcon()}
              </div>
            </div>
            
            <div className="text-sm text-muted-foreground">
              {team} • {position}
            </div>
            
            <div className="flex items-center mt-2">
              <div className={cn("text-xl font-bold mr-2", getRatingColor(overallRating))}>
                {overallRating.toFixed(1)}
              </div>
              <div className="text-xs text-muted-foreground">
                {ratingCount.toLocaleString()} ratings
              </div>
            </div>
          </div>
        </div>

        <div className="mt-4 space-y-3">
          {stats.map((stat) => (
            <div key={stat.label} className="space-y-1">
              <div className="flex justify-between text-xs">
                <span>{stat.label}</span>
                <span className="font-medium">{stat.value.toFixed(1)}</span>
              </div>
              <Progress value={stat.value * 10} className="h-1" />
            </div>
          ))}
        </div>

        <div className="mt-5">
          <div className="flex justify-between items-center mb-2">
            <span className="text-sm font-medium">Your Rating:</span>
            {rating && (
              <span className="text-xs text-muted-foreground">
                You rated {rating.toFixed(1)}
              </span>
            )}
          </div>
          
          <div className="flex justify-between items-center"
            onMouseLeave={() => setIsHovering(null)}
          >
            {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((value) => (
              <button
                key={value}
                className={cn(
                  "rating-circle w-8 h-8 rounded-full flex items-center justify-center",
                  value <= (isHovering || rating || 0) 
                    ? "bg-sport-red text-white" 
                    : "bg-gray-200 dark:bg-gray-700 text-gray-600 dark:text-gray-300"
                )}
                onMouseEnter={() => setIsHovering(value)}
                onClick={() => handleRating(value)}
              >
                {value}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlayerRatingCard;
