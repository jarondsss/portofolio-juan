"use client";

import { useEffect, useRef } from "react";

// ── Pixel sprite definitions ──────────────────────────────
// Each fish is a 2D array of pixel colors (null = transparent)
// Colors: 'C' = --blue-core (#1E63C8), 'G' = --blue-glow (#3FA9F5), 'E' = --cyan-signal (#7FE6D8)

type PixelColor = "C" | "G" | "E" | null;

// Fish A — kecil (8×4 blok)
const FISH_A_R: PixelColor[][] = [
  [null, null, "C",  "C",  "C",  "C",  null, null],
  ["C",  "C",  "C",  "C",  "C",  "C",  "E",  "C" ],
  ["C",  "C",  "C",  "C",  "C",  "C",  null, "C" ],
  [null, "C",  null, "C",  null, null, null, null],
];

// Fish A frame B (tail flick)
const FISH_A_R2: PixelColor[][] = [
  [null, null, "C",  "C",  "C",  "C",  "C",  null],
  ["C",  "C",  "C",  "C",  "C",  "C",  "E",  "C" ],
  [null, "C",  "C",  "C",  "C",  "C",  null, "C" ],
  ["C",  null, null, "C",  null, null, null, null],
];

// Fish B — sedang (12×6 blok)
const FISH_B_R: PixelColor[][] = [
  [null, null, null, "C",  "C",  "C",  "C",  "C",  null, null, null, null],
  [null, "C",  "C",  "C",  "G",  "C",  "C",  "C",  "C",  "E",  "C",  null],
  ["C",  "C",  "C",  "C",  "C",  "C",  "C",  "C",  "C",  null, "C",  "C" ],
  ["C",  "C",  "C",  "C",  "C",  "C",  "C",  "C",  "C",  null, "C",  "C" ],
  [null, "C",  "C",  "C",  "C",  "C",  "C",  "C",  "C",  null, null, null],
  [null, null, "C",  null, null, "C",  null, null, null, null, null, null],
];

// Fish B frame B
const FISH_B_R2: PixelColor[][] = [
  [null, null, "C",  "C",  "C",  "C",  "C",  "C",  null, null, null, null],
  [null, "C",  "C",  "C",  "G",  "C",  "C",  "C",  "C",  "E",  "C",  null],
  ["C",  "C",  "C",  "C",  "C",  "C",  "C",  "C",  "C",  null, "C",  "C" ],
  [null, "C",  "C",  "C",  "C",  "C",  "C",  "C",  "C",  null, "C",  null],
  [null, null, "C",  "C",  "C",  "C",  "C",  "C",  null, null, null, null],
  [null, "C",  null, null, "C",  null, null, null, null, null, null, null],
];

// Fish C — "boss fish" langka (16×8 blok)
const FISH_C_R: PixelColor[][] = [
  [null, null, null, null, "C",  "C",  "C",  "C",  "C",  "C",  null, null, null, null, null, null],
  [null, null, "C",  "C",  "C",  "C",  "G",  "C",  "C",  "C",  "C",  "C",  null, null, null, null],
  [null, "C",  "C",  "C",  "C",  "C",  "C",  "C",  "C",  "C",  "C",  "C",  "C",  "E",  "C",  null],
  ["C",  "C",  "C",  "C",  "C",  "C",  "C",  "C",  "C",  "C",  "C",  "C",  "C",  null, "C",  "C" ],
  ["C",  "C",  "C",  "C",  "C",  "C",  "C",  "C",  "C",  "C",  "C",  "C",  "C",  null, "C",  "C" ],
  [null, "C",  "C",  "C",  "C",  "C",  "C",  "C",  "C",  "C",  "C",  "C",  "C",  null, null, null],
  [null, null, "C",  "C",  "C",  "C",  "C",  "C",  "C",  "C",  "C",  "C",  null, null, null, null],
  [null, null, "C",  null, null, "C",  null, null, "C",  null, null, null, null, null, null, null],
];

const FISH_C_R2: PixelColor[][] = [
  [null, null, null, null, null, "C",  "C",  "C",  "C",  "C",  "C",  null, null, null, null, null],
  [null, null, "C",  "C",  "C",  "C",  "G",  "C",  "C",  "C",  "C",  "C",  null, null, null, null],
  [null, "C",  "C",  "C",  "C",  "C",  "C",  "C",  "C",  "C",  "C",  "C",  "C",  "E",  "C",  null],
  ["C",  "C",  "C",  "C",  "C",  "C",  "C",  "C",  "C",  "C",  "C",  "C",  "C",  null, "C",  "C" ],
  ["C",  "C",  "C",  "C",  "C",  "C",  "C",  "C",  "C",  "C",  "C",  "C",  null, null, "C",  "C" ],
  [null, "C",  "C",  "C",  "C",  "C",  "C",  "C",  "C",  "C",  "C",  "C",  null, null, null, null],
  [null, null, "C",  "C",  "C",  "C",  "C",  "C",  "C",  "C",  null, null, null, null, null, null],
  [null, "C",  null, null, "C",  null, null, "C",  null, null, null, null, null, null, null, null],
];

// Flip sprite horizontally
function flipH(sprite: PixelColor[][]): PixelColor[][] {
  return sprite.map((row) => [...row].reverse());
}

const PALETTE: Record<NonNullable<PixelColor>, string> = {
  C: "#1E63C8",
  G: "#3FA9F5",
  E: "#7FE6D8",
};

const PIXEL_SIZE = 5; // px per pixel blok

interface Fish {
  x: number;
  y: number;
  dx: number; // direction: +1 right, -1 left
  speed: number; // px per second
  layer: "back" | "mid" | "front";
  opacity: number;
  scale: number;
  type: "A" | "B" | "C";
  frame: 0 | 1; // sprite animation frame
  frameTimer: number; // ms until next frame flip
  frameInterval: number; // ms between frame flips
  avoidX: number; // current avoidance offset
  avoidY: number;
}

interface Bubble {
  x: number;
  y: number;
  r: number;
  speed: number;
  opacity: number;
  life: number; // 0–1
}

function drawSprite(
  ctx: CanvasRenderingContext2D,
  sprite: PixelColor[][],
  x: number,
  y: number,
  scale: number,
  globalOpacity: number
) {
  const ps = PIXEL_SIZE * scale;
  for (let row = 0; row < sprite.length; row++) {
    for (let col = 0; col < sprite[row].length; col++) {
      const color = sprite[row][col];
      if (!color) continue;
      ctx.globalAlpha = globalOpacity;
      ctx.fillStyle = PALETTE[color];
      ctx.fillRect(
        Math.round(x + col * ps),
        Math.round(y + row * ps),
        Math.ceil(ps),
        Math.ceil(ps)
      );
    }
  }
  ctx.globalAlpha = 1;
}

function getSprites(fish: Fish): [PixelColor[][], PixelColor[][]] {
  if (fish.type === "A") {
    return fish.dx > 0
      ? [FISH_A_R, FISH_A_R2]
      : [flipH(FISH_A_R), flipH(FISH_A_R2)];
  }
  if (fish.type === "B") {
    return fish.dx > 0
      ? [FISH_B_R, FISH_B_R2]
      : [flipH(FISH_B_R), flipH(FISH_B_R2)];
  }
  return fish.dx > 0
    ? [FISH_C_R, FISH_C_R2]
    : [flipH(FISH_C_R), flipH(FISH_C_R2)];
}

function fishWidth(fish: Fish): number {
  const cols = fish.type === "A" ? 8 : fish.type === "B" ? 12 : 16;
  return cols * PIXEL_SIZE * fish.scale;
}

function fishHeight(fish: Fish): number {
  const rows = fish.type === "A" ? 4 : fish.type === "B" ? 6 : 8;
  return rows * PIXEL_SIZE * fish.scale;
}

function spawnFish(
  w: number,
  h: number,
  fromEdge = false
): Fish {
  const typeRoll = Math.random();
  const type: "A" | "B" | "C" =
    typeRoll < 0.05 ? "C" : typeRoll < 0.45 ? "A" : "B";

  const layerRoll = Math.random();
  const layer: "back" | "mid" | "front" =
    layerRoll < 0.35 ? "back" : layerRoll < 0.7 ? "mid" : "front";

  const layerConfig = {
    back:  { opacity: 0.45, scale: 0.7,  speedMul: 0.55 },
    mid:   { opacity: 0.7,  scale: 0.9,  speedMul: 0.75 },
    front: { opacity: 1.0,  scale: 1.2,  speedMul: 1.0  },
  }[layer];

  const baseSpeed = type === "A" ? 28 : type === "B" ? 22 : 18;
  const speed = baseSpeed * layerConfig.speedMul * (0.8 + Math.random() * 0.4);

  const dx = Math.random() > 0.5 ? 1 : -1;
  const x = fromEdge
    ? dx > 0
      ? -fishWidth({ type, scale: layerConfig.scale } as Fish) - 10
      : w + 10
    : Math.random() * w;
  const y = 80 + Math.random() * (h - 160);

  return {
    x,
    y,
    dx,
    speed,
    layer,
    opacity: layerConfig.opacity,
    scale: layerConfig.scale,
    type,
    frame: 0,
    frameTimer: 0,
    frameInterval: 220 + Math.random() * 80, // 220–300ms
    avoidX: 0,
    avoidY: 0,
  };
}

export default function PixelFishCanvas() {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const mouseRef = useRef({ x: -999, y: -999 });
  const fishRef = useRef<Fish[]>([]);
  const bubblesRef = useRef<Bubble[]>([]);
  const lastBubbleRef = useRef(0);
  const lastTimeRef = useRef(0);
  const rafRef = useRef<number>(0);
  const reducedMotion = useRef(false);
  // ── Dive parallax state ──────────────────────────────────
  // scrollTarget = latest window.scrollY, scrollSmooth lerps toward it each
  // frame; the per-frame delta drives per-layer vertical parallax + speed boost.
  const scrollTargetRef = useRef(0);
  const scrollSmoothRef = useRef(0);
  const scrollVelRef = useRef(0); // px/sec, smoothed

  useEffect(() => {
    reducedMotion.current = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    // Disable sub-pixel smoothing for crisp pixels
    ctx.imageSmoothingEnabled = false;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };
    resize();
    window.addEventListener("resize", resize);

    // Mouse tracking
    const onMouseMove = (e: MouseEvent) => {
      mouseRef.current = { x: e.clientX, y: e.clientY };
    };
    window.addEventListener("mousemove", onMouseMove);

    // Scroll tracking for dive parallax (passive, transform-only consumption)
    scrollTargetRef.current = window.scrollY;
    scrollSmoothRef.current = window.scrollY;
    const onScroll = () => {
      scrollTargetRef.current = window.scrollY;
    };
    window.addEventListener("scroll", onScroll, { passive: true });

    // Initial fish population — 4 fish spread across viewport
    const w = canvas.width;
    const h = canvas.height;
    fishRef.current = Array.from({ length: 4 }, () => spawnFish(w, h, false));

    // Sort by layer for correct draw order
    const layerOrder = { back: 0, mid: 1, front: 2 };
    const sortFish = () => {
      fishRef.current.sort((a, b) => layerOrder[a.layer] - layerOrder[b.layer]);
    };
    sortFish();

    if (reducedMotion.current) {
      // Static render only
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      for (const fish of fishRef.current) {
        const [s0] = getSprites(fish);
        drawSprite(ctx, s0, fish.x, fish.y, fish.scale, fish.opacity * 0.5);
      }
      return;
    }

    const AVOIDANCE_RADIUS = 80;
    const AVOIDANCE_STRENGTH = 18; // max px offset

    const tick = (now: number) => {
      const dt = Math.min((now - lastTimeRef.current) / 1000, 0.05); // cap at 50ms
      lastTimeRef.current = now;

      const cw = canvas.width;
      const ch = canvas.height;

      ctx.clearRect(0, 0, cw, ch);

      const mx = mouseRef.current.x;
      const my = mouseRef.current.y;

      // ── Dive parallax: smooth scroll delta ───────────────
      const prevSmooth = scrollSmoothRef.current;
      const nextSmooth = prevSmooth + (scrollTargetRef.current - prevSmooth) * Math.min(dt * 8, 1);
      const scrollDelta = nextSmooth - prevSmooth; // px this frame
      scrollSmoothRef.current = nextSmooth;
      const instVel = dt > 0 ? scrollDelta / dt : 0;
      scrollVelRef.current += (instVel - scrollVelRef.current) * 0.12;
      const speedBoost = 1 + Math.min(Math.abs(scrollVelRef.current) / 4000, 1.0);

      const LAYER_PARALLAX = { back: 0.08, mid: 0.18, front: 0.32 } as const;
      const wrapY = (y: number) => {
        const margin = 60;
        const span = ch + margin * 2;
        return ((((y + margin) % span) + span) % span) - margin;
      };

      // ── Update fish ──────────────────────────────────────
      const toRemove: number[] = [];
      for (let i = 0; i < fishRef.current.length; i++) {
        const fish = fishRef.current[i];
        const fw = fishWidth(fish);

        // Move (with scroll-velocity boost)
        fish.x += fish.dx * fish.speed * speedBoost * dt;
        // Vertical dive parallax — deeper layers drift less
        fish.y = wrapY(fish.y - scrollDelta * LAYER_PARALLAX[fish.layer]);

        // Cursor avoidance
        const cx = fish.x + fw / 2;
        const cy = fish.y + fishHeight(fish) / 2;
        const distToMouse = Math.hypot(cx - mx, cy - my);
        if (distToMouse < AVOIDANCE_RADIUS) {
          const factor = (1 - distToMouse / AVOIDANCE_RADIUS);
          const targetAvoidX = ((cx - mx) / distToMouse) * AVOIDANCE_STRENGTH * factor;
          const targetAvoidY = ((cy - my) / distToMouse) * AVOIDANCE_STRENGTH * factor;
          fish.avoidX += (targetAvoidX - fish.avoidX) * 0.08;
          fish.avoidY += (targetAvoidY - fish.avoidY) * 0.08;
        } else {
          fish.avoidX *= 0.92;
          fish.avoidY *= 0.92;
        }

        // Frame animation
        fish.frameTimer += dt * 1000;
        if (fish.frameTimer >= fish.frameInterval) {
          fish.frame = fish.frame === 0 ? 1 : 0;
          fish.frameTimer = 0;
        }

        // Off-screen check — mark for removal and spawn replacement from edge
        if (fish.dx > 0 && fish.x > cw + 40) {
          toRemove.push(i);
        } else if (fish.dx < 0 && fish.x < -fw - 40) {
          toRemove.push(i);
        }
      }

      // Remove off-screen fish and spawn replacements from opposite edge
      for (let i = toRemove.length - 1; i >= 0; i--) {
        fishRef.current.splice(toRemove[i], 1);
        fishRef.current.push(spawnFish(cw, ch, true));
      }

      // Ensure 3–6 fish total — population grows as you dive deeper
      const maxScroll = Math.max(
        document.documentElement.scrollHeight - window.innerHeight,
        1
      );
      const dive = Math.min(Math.max(scrollTargetRef.current / maxScroll, 0), 1);
      const desired = dive > 0.66 ? 6 : dive > 0.33 ? 5 : 4;
      let guard = 0;
      while (fishRef.current.length < desired && guard++ < 4) {
        const f = spawnFish(cw, ch, true);
        // Boss fish more likely in the deep
        if (dive > 0.5 && Math.random() < 0.15) {
          f.type = "C";
        }
        fishRef.current.push(f);
      }

      sortFish();

      // ── Draw fish ────────────────────────────────────────
      for (const fish of fishRef.current) {
        const sprites = getSprites(fish);
        const sprite = sprites[fish.frame];
        const drawX = fish.x + fish.avoidX;
        const drawY = fish.y + fish.avoidY;
        drawSprite(ctx, sprite, drawX, drawY, fish.scale, fish.opacity);
      }

      // ── Bubbles ──────────────────────────────────────────
      const nowMs = now;
      if (nowMs - lastBubbleRef.current > 8500 + Math.random() * 3000) {
        // Spawn bubble at a random fish position
        if (fishRef.current.length > 0) {
          const fish = fishRef.current[Math.floor(Math.random() * fishRef.current.length)];
          bubblesRef.current.push({
            x: fish.x + fishWidth(fish) * 0.5 + (Math.random() - 0.5) * 20,
            y: fish.y,
            r: 1.5 + Math.random() * 1.5,
            speed: 18 + Math.random() * 10,
            opacity: 0.35,
            life: 0,
          });
        }
        lastBubbleRef.current = nowMs;
      }

      // Update + draw bubbles
      for (let i = bubblesRef.current.length - 1; i >= 0; i--) {
        const b = bubblesRef.current[i];
        b.y -= b.speed * dt;
        b.life += dt;

        const fadeIn = Math.min(b.life / 0.3, 1);
        const fadeOut = b.y < 0 ? 0 : 1;
        const opacity = b.opacity * fadeIn * fadeOut;

        if (b.y < -20 || opacity <= 0) {
          bubblesRef.current.splice(i, 1);
          continue;
        }

        ctx.globalAlpha = opacity;
        ctx.strokeStyle = "#3FA9F5";
        ctx.lineWidth = 1;
        ctx.beginPath();
        ctx.arc(b.x, b.y, b.r, 0, Math.PI * 2);
        ctx.stroke();
        ctx.globalAlpha = 1;
      }

      rafRef.current = requestAnimationFrame(tick);
    };

    rafRef.current = requestAnimationFrame((now) => {
      lastTimeRef.current = now;
      lastBubbleRef.current = now;
      rafRef.current = requestAnimationFrame(tick);
    });

    return () => {
      cancelAnimationFrame(rafRef.current);
      window.removeEventListener("resize", resize);
      window.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      id="fish-canvas"
      aria-hidden="true"
    />
  );
}
