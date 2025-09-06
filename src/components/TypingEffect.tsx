
import React, { useEffect, useState } from "react";

interface TypingEffectProps {
  words: string[];
  typingDelay?: number;
  erasingDelay?: number;
  pauseDelay?: number;
  className?: string;
}

export function TypingEffect({
  words,
  typingDelay = 110,
  erasingDelay = 65,
  pauseDelay = 1300,
  className = "",
}: TypingEffectProps) {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [displayText, setDisplayText] = useState("");
  const [isTyping, setIsTyping] = useState(true);

  useEffect(() => {
    let timer: NodeJS.Timeout;

    if (isTyping) {
      if (displayText.length < words[currentWordIndex].length) {
        timer = setTimeout(() => {
          setDisplayText(words[currentWordIndex].slice(0, displayText.length + 1));
        }, typingDelay);
      } else {
        timer = setTimeout(() => setIsTyping(false), pauseDelay);
      }
    } else {
      if (displayText.length > 0) {
        timer = setTimeout(() => {
          setDisplayText(words[currentWordIndex].slice(0, displayText.length - 1));
        }, erasingDelay);
      } else {
        setIsTyping(true);
        setCurrentWordIndex((idx) => (idx + 1) % words.length);
      }
    }

    return () => clearTimeout(timer);
    // eslint-disable-next-line
  }, [displayText, isTyping, currentWordIndex, words]);

  return (
    <span className={className}>
      {displayText}
      <span className="border-r-2 border-white dark:border-white light:border-gray-900 ml-1.5 animate-pulse" style={{height: "1em"}}></span>
    </span>
  );
}
