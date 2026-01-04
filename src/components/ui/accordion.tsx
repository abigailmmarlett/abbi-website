import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

interface AccordionProps {
  type?: 'single' | 'multiple';
  collapsible?: boolean;
  defaultValue?: string | string[];
  children: React.ReactNode;
  className?: string;
}

interface AccordionContextType {
  openItems: Set<string>;
  toggleItem: (id: string) => void;
  type: 'single' | 'multiple';
  collapsible: boolean;
}

const AccordionContext = React.createContext<AccordionContextType | undefined>(undefined);

const useAccordion = () => {
  const context = React.useContext(AccordionContext);
  if (!context) {
    throw new Error('Accordion components must be used within Accordion');
  }
  return context;
};

export const Accordion = ({
  type = 'single',
  collapsible = false,
  defaultValue,
  children,
  className = ''
}: AccordionProps) => {
  const [openItems, setOpenItems] = useState<Set<string>>(() => {
    if (!defaultValue) return new Set();
    if (Array.isArray(defaultValue)) return new Set(defaultValue);
    return new Set([defaultValue]);
  });

  const toggleItem = (id: string) => {
    const newOpen = new Set(openItems);
    
    if (type === 'single') {
      if (newOpen.has(id) && collapsible) {
        newOpen.delete(id);
      } else {
        newOpen.clear();
        newOpen.add(id);
      }
    } else {
      if (newOpen.has(id)) {
        newOpen.delete(id);
      } else {
        newOpen.add(id);
      }
    }
    
    setOpenItems(newOpen);
  };

  return (
    <AccordionContext.Provider value={{ openItems, toggleItem, type, collapsible }}>
      <div className={className}>{children}</div>
    </AccordionContext.Provider>
  );
};

interface AccordionItemProps extends React.HTMLAttributes<HTMLDivElement> {
  value: string;
  children: React.ReactNode;
  className?: string;
}

export const AccordionItem = ({ value, children, className = '', ...props }: AccordionItemProps) => {
  const { openItems } = useAccordion();
  const isOpen = openItems.has(value);

  // Filter out React-specific props that shouldn't be spread to DOM
  const { ref, key, ...domProps } = props as any;

  return (
    <div className={className} data-state={isOpen ? 'open' : 'closed'} {...domProps}>
      {React.Children.map(children, (child) =>
        React.cloneElement(child as React.ReactElement, { itemValue: value })
      )}
    </div>
  );
};

interface AccordionTriggerProps {
  children: React.ReactNode;
  className?: string;
  itemValue?: string;
}

export const AccordionTrigger = ({ 
  children, 
  className = '', 
  itemValue = '' 
}: AccordionTriggerProps) => {
  const { openItems, toggleItem } = useAccordion();
  const isOpen = openItems.has(itemValue);

  return (
    <button
      onClick={() => toggleItem(itemValue)}
      className={`w-full flex items-center justify-between ${className}`}
      aria-expanded={isOpen}
    >
      {children}
      <ChevronDown
        size={20}
        className={`transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
      />
    </button>
  );
};

interface AccordionContentProps {
  children: React.ReactNode;
  className?: string;
  itemValue?: string;
}

export const AccordionContent = ({
  children,
  className = '',
  itemValue = ''
}: AccordionContentProps) => {
  const { openItems } = useAccordion();
  const isOpen = openItems.has(itemValue);

  return (
    <div
      className={`accordion-content transition-all duration-700 ease-in-out overflow-hidden ${className}`}
      style={{
        maxHeight: isOpen ? '1000px' : '0px',
        opacity: isOpen ? 1 : 0,
        visibility: isOpen ? 'visible' : 'hidden',
        marginBottom: isOpen ? '1rem' : '0rem',
      }}
    >
      <div className="pt-6 pb-6">{children}</div>
    </div>
  );
};
