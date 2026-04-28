// Inline script to set theme before paint, avoids FOUC
export function ThemeScript() {
  const code = `
    (function () {
      try {
        var stored = localStorage.getItem('theme');
        var prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
        var theme = stored || (prefersDark ? 'dark' : 'light');
        if (theme === 'dark') document.documentElement.classList.add('dark');
        document.documentElement.style.colorScheme = theme;
      } catch (_) {}
    })();
  `;
  return <script dangerouslySetInnerHTML={{ __html: code }} />;
}
