import { useState } from "react";

type SmartImageProps = {
  /** Koshish karne wali files, order me. Pehli jo mil jaaye wahi dikhti hai. */
  sources: string[];
  alt: string;
  className?: string;
  loading?: "lazy" | "eager";
  fetchPriority?: "high" | "low" | "auto";
  style?: React.CSSProperties;
};

/**
 * SmartImage — ek se zyada file paths try karta hai, pehli mili hui image dikhata hai.
 *
 * KYUN: aap photo ko .jpg, .jpeg, .png ya .webp — kisi bhi extension se save kar
 * sakte ho, aur phone se bheji hui photo ka naam kuch bhi ho sakta hai.
 * Pehle sirf ek fixed path tha → file ka naam thoda alag hua to photo nahi dikhti thi.
 *
 * Sab files fail ho jaayein → component khud ko render nahi karta (null),
 * isliye broken-image icon KABHI nahi dikhta; peeche ka gradient saaf dikhta hai.
 */
export default function SmartImage({
  sources,
  alt,
  className,
  loading = "lazy",
  fetchPriority = "auto",
  style,
}: SmartImageProps) {
  // Sabse pehla candidate current src hai
  const [index, setIndex] = useState(0);

  if (!sources.length || index >= sources.length) return null;

  return (
    <img
      src={sources[index]}
      alt={alt}
      className={className}
      loading={loading}
      fetchPriority={fetchPriority}
      style={style}
      decoding="async"
      onError={() => setIndex((i) => i + 1)}
    />
  );
}
