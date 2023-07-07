/**
 * @returns { boolean } Returns true/false if mode is dark or not
 * @description This function checks the localStorage as well as the System Settings of your computer,
 * and returns true or false whether it recohgnizes that you'd like darkMode to be turned on.
 * localStorage has a higher priority than the System Settings, which means that a localStorage mode is found,
 * whether it's dark or light (just not undefined), and system settings are the opposite, the localStorage setting wins.
 */
function getIsDarkMode() {
  const themeMode = localStorage.getItem('theme');
  return themeMode ? themeMode === 'dark' : window.matchMedia('(prefers-color-scheme: dark)').matches;
}

function toggleThemeDarkMode({ toDark = true }) {
  document.body.setAttribute('class', toDark ? 'dark' : 'light');
}

export { getIsDarkMode, toggleThemeDarkMode };
