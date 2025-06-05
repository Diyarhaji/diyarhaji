import React, { useEffect, useState } from 'react';

const themes = [
  { name: 'dark', color: '#141414' },
  { name: 'light', color: '#f0f0f0' },
  { name: 'blue', color: '#1E3A8A' },
  { name: 'green', color: '#15803D' },
  { name: 'red', color: '#B91C1C' },
  { name: 'orange', color: '#D97706' },
  { name: 'darkpink', color: '#831843' }
];

const ThemeToggle = () => {
  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'dark');

  useEffect(() => {
    const html = document.documentElement;
    html.className = ''; // Reset
    html.classList.add(theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  return (
    <div className="z-50 flex flex-col items-start gap-2">
      {/* Desktop View */}
      <div className="hidden sm:block">
        <select
          id="theme-select"
          value={theme}
          onChange={(e) => setTheme(e.target.value)}
          className="max-w-max text-center p-1 rounded text-sm border border-black font-medium"
          style={{
            backgroundColor: themes.find(t => t.name === theme)?.color,
            color: theme === 'light' ? '#000' : '#fff',
            width: '120px' // optional: limits width
          }}
        >
          {themes.map((t) => (
            <option
              key={t.name}
              value={t.name}
              style={{
                backgroundColor: t.color,
                color: t.name === 'light' ? '#000' : '#fff',
              }}
            >
              {t.name.charAt(0).toUpperCase() + t.name.slice(1)}
            </option>
          ))}
        </select>
      </div>

      {/* Mobile View */}
      <div className="flex flex-wrap px-[13%] mx-auto items-center justify-center sm:hidden gap-2">
        {themes.map((t) => (
          <button
            key={t.name}
            onClick={() => setTheme(t.name)}
            className={`w-8 h-8 rounded-full border-2 ${theme === t.name ? 'border-white' : 'border-transparent'}`}
            style={{ backgroundColor: t.color }}
            aria-label={`Switch to ${t.name} theme`}
          />
        ))}
      </div>
    </div>
  );
};

export default ThemeToggle;
