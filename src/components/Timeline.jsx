import { useEffect, useRef, useState } from 'react';
import TimelineItem from './TimelineItem';

const Timeline = ({ config }) => {
  const timelineRef = useRef(null);
  const [visibleItems, setVisibleItems] = useState(new Set());
  const observerRef = useRef(null);

  // Use config data or fallback to default
  const {
    title = 'Responsive Timeline',
    items = [],
    theme = {},
    animation = {}
  } = config || {};

  useEffect(() => {
    // Create Intersection Observer for better performance
    const observerOptions = {
      root: null,
      rootMargin: '50px',
      threshold: 0.1
    };

    const observerCallback = (entries) => {
      entries.forEach((entry) => {
        const itemIndex = parseInt(entry.target.dataset.index);

        if (entry.isIntersecting) {
          setVisibleItems(prev => new Set([...prev, itemIndex]));
        }
      });
    };

    observerRef.current = new IntersectionObserver(observerCallback, observerOptions);

    // Observe all timeline items
    const timelineItems = timelineRef.current?.querySelectorAll('.timeline-item');
    timelineItems?.forEach((item, index) => {
      item.dataset.index = index;
      observerRef.current?.observe(item);
    });

    return () => {
      observerRef.current?.disconnect();
    };
  }, [items]);

  // Apply custom CSS variables for theming
  useEffect(() => {
    if (timelineRef.current && theme) {
      const root = timelineRef.current;

      // Apply theme colors
      if (theme.primaryColor) root.style.setProperty('--timeline-primary-color', theme.primaryColor);
      if (theme.secondaryColor) root.style.setProperty('--timeline-secondary-color', theme.secondaryColor);
      if (theme.backgroundColor) root.style.setProperty('--timeline-background-color', theme.backgroundColor);
      if (theme.textColor) root.style.setProperty('--timeline-text-color', theme.textColor);
      if (theme.headerBackground) root.style.setProperty('--timeline-header-background', theme.headerBackground);

      // Apply animation settings
      if (animation.duration) root.style.setProperty('--timeline-animation-duration', animation.duration);
      if (animation.easing) root.style.setProperty('--timeline-animation-easing', animation.easing);
    }
  }, [theme, animation]);

  return (
    <section className="timeline" ref={timelineRef}>
      <h1>{title}</h1>
      <ul>
        {items.map((item, index) => (
          <TimelineItem
            key={item.id || index}
            index={index}
            year={item.year}
            title={item.title}
            content={item.content}
            isVisible={visibleItems.has(index)}
            animationDelay={animation.staggerDelay ? index * parseInt(animation.staggerDelay) : 0}
          />
        ))}
      </ul>
    </section>
  );
};

export default Timeline;
