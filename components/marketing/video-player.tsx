'use client';

import * as React from 'react';
import { Play, Pause, Volume2, VolumeX, Maximize } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Button } from '../ui/button';

export interface VideoPlayerProps extends React.HTMLAttributes<HTMLDivElement> {
  src: string;
  poster?: string;
  title?: string;
  autoPlay?: boolean;
  loop?: boolean;
  muted?: boolean;
  controls?: boolean;
  aspectRatio?: '16/9' | '4/3' | '1/1' | '21/9';
}

export function VideoPlayer({
  src,
  poster,
  title,
  autoPlay = false,
  loop = false,
  muted = false,
  controls = true,
  aspectRatio = '16/9',
  className,
  ...props
}: VideoPlayerProps) {
  const videoRef = React.useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = React.useState(autoPlay);
  const [isMuted, setIsMuted] = React.useState(muted);
  const [showControls, setShowControls] = React.useState(false);

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  const toggleFullscreen = () => {
    if (videoRef.current) {
      if (document.fullscreenElement) {
        document.exitFullscreen();
      } else {
        videoRef.current.requestFullscreen();
      }
    }
  };

  return (
    <div
      className={cn(
        'group relative overflow-hidden rounded-lg bg-black',
        className
      )}
      onMouseEnter={() => setShowControls(true)}
      onMouseLeave={() => setShowControls(false)}
      {...props}
    >
      <div
        className={cn(
          'relative w-full',
          aspectRatio === '16/9' && 'aspect-video',
          aspectRatio === '4/3' && 'aspect-[4/3]',
          aspectRatio === '1/1' && 'aspect-square',
          aspectRatio === '21/9' && 'aspect-[21/9]'
        )}
      >
        <video
          ref={videoRef}
          src={src}
          poster={poster}
          autoPlay={autoPlay}
          loop={loop}
          muted={muted}
          className="h-full w-full object-cover"
          onClick={togglePlay}
        >
          <track kind="captions" />
        </video>

        {/* Custom Controls */}
        {controls && (
          <div
            className={cn(
              'absolute inset-0 flex items-center justify-center bg-black/50 transition-opacity',
              showControls ? 'opacity-100' : 'opacity-0',
              !isPlaying && 'opacity-100'
            )}
          >
            {/* Center Play Button */}
            {!isPlaying && (
              <Button
                size="icon"
                variant="secondary"
                className="h-16 w-16 rounded-full"
                onClick={togglePlay}
              >
                <Play className="h-8 w-8" />
              </Button>
            )}

            {/* Bottom Controls */}
            <div className="absolute bottom-0 left-0 right-0 flex items-center justify-between bg-gradient-to-t from-black/80 to-transparent p-4">
              <div className="flex items-center gap-2">
                <Button
                  size="icon"
                  variant="ghost"
                  className="h-8 w-8 text-white hover:bg-white/20"
                  onClick={togglePlay}
                >
                  {isPlaying ? (
                    <Pause className="h-4 w-4" />
                  ) : (
                    <Play className="h-4 w-4" />
                  )}
                </Button>
                <Button
                  size="icon"
                  variant="ghost"
                  className="h-8 w-8 text-white hover:bg-white/20"
                  onClick={toggleMute}
                >
                  {isMuted ? (
                    <VolumeX className="h-4 w-4" />
                  ) : (
                    <Volume2 className="h-4 w-4" />
                  )}
                </Button>
              </div>
              <Button
                size="icon"
                variant="ghost"
                className="h-8 w-8 text-white hover:bg-white/20"
                onClick={toggleFullscreen}
              >
                <Maximize className="h-4 w-4" />
              </Button>
            </div>
          </div>
        )}
      </div>

      {title && (
        <div className="absolute left-4 top-4 rounded bg-black/70 px-3 py-1 text-sm text-white backdrop-blur">
          {title}
        </div>
      )}
    </div>
  );
}

// Simple embedded video wrapper
export function EmbeddedVideo({
  src,
  title = 'Video',
  aspectRatio = '16/9',
  className,
  ...props
}: {
  src: string;
  title?: string;
  aspectRatio?: '16/9' | '4/3' | '1/1' | '21/9';
} & React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn(
        'relative w-full overflow-hidden rounded-lg',
        aspectRatio === '16/9' && 'aspect-video',
        aspectRatio === '4/3' && 'aspect-[4/3]',
        aspectRatio === '1/1' && 'aspect-square',
        aspectRatio === '21/9' && 'aspect-[21/9]',
        className
      )}
      {...props}
    >
      <iframe
        src={src}
        title={title}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        className="absolute inset-0 h-full w-full border-0"
      />
    </div>
  );
}

