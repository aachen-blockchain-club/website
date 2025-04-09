"use client";
import { useEffect, useState, useRef } from "react";

interface Block {
  id: number;
  x: number;
  y: number;
  isNew: boolean;
  chainId: number;
}

export default function CryptoBackground() {
  const [blocks, setBlocks] = useState<Block[]>([]);
  const chainCountRef = useRef(4);
  const startMargin = 5; // Starting margin from left
  const blockSpacing = 7; // Slightly reduce spacing to fit more blocks
  // Calculate blocks per chain based on available width, add 1 more column
  const blocksPerChainRef = useRef(
    Math.floor((100 - 2 * startMargin) / blockSpacing) + 1
  );
  const chainIntervalsRef = useRef<NodeJS.Timeout[]>([]);

  useEffect(() => {
    // Create genesis blocks evenly distributed vertically
    const genesisBlocks: Block[] = Array.from(
      { length: chainCountRef.current },
      (_, i) => {
        // Calculate vertical position to spread chains evenly
        const verticalSpacing = 80 / (chainCountRef.current + 1); // Increased to 80% of screen height
        const yPosition = 10 + (i + 1) * verticalSpacing; // Start at 10% from top for more space

        return {
          id: i,
          x: 5, // Start at 5% from left to give more horizontal space
          y: yPosition,
          isNew: true,
          chainId: i,
        };
      }
    );
    setBlocks(genesisBlocks);

    // Function to create a new block for a specific chain
    const createNewBlock = (chainId: number) => {
      setBlocks((prevBlocks) => {
        const chainBlocks = prevBlocks.filter((b) => b.chainId === chainId);
        if (chainBlocks.length >= blocksPerChainRef.current) return prevBlocks;

        // Reset isNew flag for existing blocks in this chain
        const updatedBlocks = prevBlocks.map((block) => ({
          ...block,
          isNew: false,
        }));

        const lastBlock = chainBlocks[chainBlocks.length - 1];

        // Add new block to the right
        const newBlock = {
          id: prevBlocks.length,
          x: lastBlock.x + blockSpacing, // Use consistent block spacing
          y: lastBlock.y,
          isNew: true,
          chainId,
        };

        return [...updatedBlocks, newBlock];
      });
    };

    // Generate unique speeds for each chain
    const chainSpeeds = Array.from(
      { length: chainCountRef.current },
      () =>
        // Faster speed range for quicker block generation
        Math.floor(Math.random() * 500) + 500 // Random speed between 500ms and 1000ms
    );

    // Sort speeds to create a visually interesting pattern
    // This ensures we have a mix of fast and slow chains spread across the screen
    chainSpeeds.sort((a, b) => (Math.random() > 0.5 ? 1 : -1));

    // Start separate intervals for each chain with their unique speeds
    const intervals = chainSpeeds.map((speed, i) => {
      // Initial delay between 0-1s to stagger the start
      const initialDelay = Math.random() * 1000;

      console.log(`Chain ${i + 1} speed: ${speed}ms`); // Log each chain's speed for debugging

      return setTimeout(() => {
        const interval = setInterval(() => createNewBlock(i), speed);
        chainIntervalsRef.current[i] = interval;
      }, initialDelay);
    });

    return () => {
      intervals.forEach((timeout) => clearTimeout(timeout));
      chainIntervalsRef.current.forEach((interval) => clearInterval(interval));
    };
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden">
      <svg className="w-full h-full absolute">
        <defs>
          {/* Enhanced glow filter */}
          <filter id="glow">
            <feGaussianBlur stdDeviation="4" result="coloredBlur" />
            <feFlood
              floodColor="#A855F7"
              floodOpacity="0.8"
              result="glowColor"
            />
            <feComposite
              in="glowColor"
              in2="coloredBlur"
              operator="in"
              result="softGlow"
            />
            <feMerge>
              <feMergeNode in="softGlow" />
              <feMergeNode in="softGlow" />
              <feMergeNode in="softGlow" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
          {/* Data flow gradient */}
          <linearGradient id="dataFlow" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="rgba(168, 85, 247, 0.4)">
              <animate
                attributeName="offset"
                values="-1; 2"
                dur="1.5s"
                repeatCount="indefinite"
              />
            </stop>
            <stop offset="50%" stopColor="rgba(168, 85, 247, 0)">
              <animate
                attributeName="offset"
                values="-0.5; 2.5"
                dur="1.5s"
                repeatCount="indefinite"
              />
            </stop>
          </linearGradient>
        </defs>

        {/* Draw connections between blocks */}
        {blocks.map((block) => {
          const nextBlock = blocks.find(
            (b) =>
              b.chainId === block.chainId &&
              b.x === block.x + blockSpacing &&
              Math.abs(b.y - block.y) < 0.1
          );
          if (!nextBlock) return null;

          return (
            <g key={`connection-${block.id}`}>
              <line
                x1={`${block.x}%`}
                y1={`${block.y}%`}
                x2={`${nextBlock.x}%`}
                y2={`${nextBlock.y}%`}
                className="stroke-purple-500/20"
                strokeWidth="1"
              />
              <line
                x1={`${block.x}%`}
                y1={`${block.y}%`}
                x2={`${nextBlock.x}%`}
                y2={`${nextBlock.y}%`}
                stroke="url(#dataFlow)"
                strokeWidth="2"
              />
            </g>
          );
        })}

        {/* Draw blocks */}
        {blocks.map((block) => (
          <g
            key={`block-${block.id}`}
            filter={block.isNew ? "url(#glow)" : "none"}
          >
            <rect
              x={`${block.x}%`}
              y={`${block.y}%`}
              width="16"
              height="16"
              className={`${
                block.isNew
                  ? "fill-purple-500/40 stroke-purple-400/70"
                  : "fill-purple-500/5 stroke-purple-500/20"
              }`}
              strokeWidth="1"
              transform={`translate(-8, -8)`}
              rx="2"
            >
              {block.isNew && (
                <animate
                  attributeName="fill-opacity"
                  values="0.5;0.2;0.5"
                  dur="1s"
                  repeatCount="2"
                />
              )}
            </rect>
          </g>
        ))}
      </svg>
    </div>
  );
}
