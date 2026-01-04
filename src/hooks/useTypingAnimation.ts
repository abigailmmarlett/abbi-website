import { useState, useEffect } from 'react';

export function useTypingAnimation(text: string, speed: number = 50, delay: number = 0) {
  const [displayedText, setDisplayedText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    let timeoutId: NodeJS.Timeout;

    const animate = () => {
      setDisplayedText((current) => {
        // Typing phase
        if (!isDeleting) {
          if (current.length < text.length) {
            return text.slice(0, current.length + 1);
          } else {
            // Text is fully typed, wait before deleting
            timeoutId = setTimeout(() => {
              setIsDeleting(true);
            }, 1500); // Pause before deleting
            return current;
          }
        } else {
          // Deleting phase
          if (current.length > 0) {
            return current.slice(0, -1);
          } else {
            // Text is fully deleted, start typing again
            setIsDeleting(false);
            return '';
          }
        }
      });
    };

    // Initial delay before starting
    if (displayedText === '' && !isDeleting) {
      timeoutId = setTimeout(animate, delay);
    } else {
      timeoutId = setTimeout(animate, speed);
    }

    return () => clearTimeout(timeoutId);
  }, [text, speed, delay, displayedText, isDeleting]);

  return { displayedText };
}
