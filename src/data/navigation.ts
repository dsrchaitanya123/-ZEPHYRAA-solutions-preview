// data/navigation.ts
export const navLinks = [
  { name: 'Home', href: '/' },
  { 
    name: 'Pages', // This is your new dropdown
    href: '#', 
    dropdown: [
      { name: 'About Us', href: '/about' },
      { name: 'Services', href: '/services' },
      { name: 'Portfolio', href: '/portfolio' },
      { name: 'Contact', href: '/contact' },
    ]
  },
  { name: 'Blog', href: '/blog' },
];