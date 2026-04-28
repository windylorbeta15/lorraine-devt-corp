export type SubmenuItem = {
    label: string;
    href: string;
  };    
  
  export type HeaderItem = {
    label: string;
    href: string;
    submenu?: SubmenuItem[];
    /** Inactive-state Tailwind classes for desktop nav links (e.g. text-white). */
    className?: string;
  };