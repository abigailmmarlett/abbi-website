import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

interface AccordionProps {
  type?: 'single' | 'multiple';
  collapsible?: boolean;
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
  children, 
  className = '' 
}: AccordionProps) => {
  const [openItems, setOpenItems] = useState<Set<string>>(new Set());

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

interface AccordionItemProps {
  value: string;
  children: React.ReactNode;
  className?: string;
}

export const AccordionItem = ({ value, children, className = '' }: AccordionItemProps) => {
  const { openItems } = useAccordion();
  const isOpen = openItems.has(value);

  return (
    <div className={className} data-state={isOpen ? 'open' : 'closed'}>
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

  if (!isOpen) return null;

  return <div className={className}>{children}</div>;
};
