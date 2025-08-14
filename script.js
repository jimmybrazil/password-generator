// Elementos DOM
const passwordDisplay = document.getElementById('password-display');
const generateBtn = document.getElementById('generate-btn');
const copyBtn = document.getElementById('copy-btn');
const lengthSlider = document.getElementById('length-slider');
const lengthValue = document.getElementById('length-value');
const uppercaseCheckbox = document.getElementById('uppercase');
const lowercaseCheckbox = document.getElementById('lowercase');
const numbersCheckbox = document.getElementById('numbers');
const symbolsCheckbox = document.getElementById('symbols');
const languageButtons = document.querySelectorAll('.lang-btn');
const developerFooter = document.getElementById('developer');

// Configurações e estado
let currentPassword = '';
const settings = {
  length: 12,
  uppercase: true,
  lowercase: true,
  numbers: true,
  symbols: true
};

// Conjuntos de caracteres
const charSets = {
  uppercase: 'ABCDEFGHIJKLMNOPQRSTUVWXYZ',
  lowercase: 'abcdefghijklmnopqrstuvwxyz',
  numbers: '0123456789',
  symbols: '!@#$%^&*()_+~`|}{[]:;?><,./-='
};

// Sistema de internacionalização
const translations = {
  pt: {
    title: 'GERADOR DE SENHA',
    generateBtn: 'GERAR SENHA',
    copyBtn: 'COPIAR',
    copied: 'COPIADO!',
    lengthLabel: 'Tamanho',
    characters: 'caracteres',
    uppercaseLabel: 'Letras Maiúsculas',
    lowercaseLabel: 'Letras Minúsculas',
    numbersLabel: 'Números',
    symbolsLabel: 'Símbolos',
    developedBy: 'Desenvolvido por Thiago Freitas',
    errorNoChars: 'Selecione pelo menos um tipo de caractere!'
  },
  en: {
    title: 'PASSWORD\u00A0GENERATOR',
    generateBtn: 'GENERATE\u00A0PASSWORD',
    copyBtn: 'COPY',
    copied: 'COPIED!',
    lengthLabel: 'Length',
    characters: 'characters',
    uppercaseLabel: 'Uppercase\u00A0Letters',
    lowercaseLabel: 'Lowercase\u00A0Letters',
    numbersLabel: 'Numbers',
    symbolsLabel: 'Symbols',
    developedBy: 'Developed\u00A0by\u00A0Thiago\u00A0Freitas',
    errorNoChars: 'Select at least one character type!'
  },
  es: {
    title: 'GENERADOR\u00A0DE\u00A0CONTRASEÑA',
    generateBtn: 'GENERAR\u00A0CONTRASEÑA',
    copyBtn: 'COPIAR',
    copied: '¡COPIADO!',
    lengthLabel: 'Longitud',
    characters: 'caracteres',
    uppercaseLabel: 'Letras\u00A0Mayúsculas',
    lowercaseLabel: 'Letras\u00A0Minúsculas',
    numbersLabel: 'Números',
    symbolsLabel: 'Símbolos',
    developedBy: 'Desarrollado\u00A0por\u00A0Thiago\u00A0Freitas',
    errorNoChars: '¡Seleccione al menos un tipo de carácter!'
  },
  it: {
    title: 'GENERATORE\u00A0DI\u00A0PASSWORD',
    generateBtn: 'GENERA\u00A0PASSWORD',
    copyBtn: 'COPIA',
    copied: 'COPIATO!',
    lengthLabel: 'Lunghezza',
    characters: 'caratteri',
    uppercaseLabel: 'Lettere\u00A0Maiuscole',
    lowercaseLabel: 'Lettere\u00A0Minuscole',
    numbersLabel: 'Numeri',
    symbolsLabel: 'Simboli',
    developedBy: 'Sviluppato\u00A0da\u00A0Thiago\u00A0Freitas',
    errorNoChars: 'Seleziona almeno un tipo di carattere!'
  },
  fr: {
    title: 'GÉNÉRATEUR\u00A0DE\u00A0MOT\u00A0DE\u00A0PASSE',
    generateBtn: 'GÉNÉRER\u00A0MOT\u00A0DE\u00A0PASSE',
    copyBtn: 'COPIER',
    copied: 'COPIÉ !',
    lengthLabel: 'Longueur',
    characters: 'caractères',
    uppercaseLabel: 'Lettres\u00A0Majuscules',
    lowercaseLabel: 'Lettres\u00A0Minuscules',
    numbersLabel: 'Nombres',
    symbolsLabel: 'Symboles',
    developedBy: 'Développé\u00A0par\u00A0Thiago\u00A0Freitas',
    errorNoChars: 'Sélectionnez au moins un type de caractère !'
  },
  de: {
    title: 'PASSWORTGENERATOR',
    generateBtn: 'PASSWORT GENERIEREN',
    copyBtn: 'KOPIEREN',
    copied: 'KOPIERT!',
    lengthLabel: 'Länge',
    characters: 'Zeichen',
    uppercaseLabel: 'Großbuchstaben',
    lowercaseLabel: 'Kleinbuchstaben',
    numbersLabel: 'Zahlen',
    symbolsLabel: 'Symbole',
    developedBy: 'Entwickelt von Thiago Freitas',
    errorNoChars: 'Wählen Sie mindestens einen Zeichentyp aus!'
  }
};

let currentLang = 'pt'; // Idioma padrão

// Funções principais
function generatePassword() {
  const selectedSets = [];
  if (settings.uppercase) selectedSets.push(charSets.uppercase);
  if (settings.lowercase) selectedSets.push(charSets.lowercase);
  if (settings.numbers) selectedSets.push(charSets.numbers);
  if (settings.symbols) selectedSets.push(charSets.symbols);

  if (selectedSets.length === 0) {
    passwordDisplay.textContent = translations[currentLang].errorNoChars;
    passwordDisplay.classList.add('error');
    setTimeout(() => passwordDisplay.classList.remove('error'), 2000);
    return;
  }

  // Garantir distribuição uniforme: dividir o comprimento entre os tipos selecionados
  const numTypes = selectedSets.length;
  const baseCount = Math.floor(settings.length / numTypes);
  const remainder = settings.length % numTypes;

  let passwordArray = [];
  selectedSets.forEach((set, index) => {
    const count = baseCount + (index < remainder ? 1 : 0);
    for (let i = 0; i < count; i++) {
      const randomIndex = secureRandom(set.length);
      passwordArray.push(set[randomIndex]);
    }
  });

  // Embaralhar para maior segurança
  passwordArray = shuffleArray(passwordArray);

  currentPassword = passwordArray.join('');
  passwordDisplay.textContent = currentPassword;

  // Animação fade-in com glitch
  passwordDisplay.classList.remove('fade-in', 'glitch');
  void passwordDisplay.offsetWidth; // Reflow para reiniciar animação
  passwordDisplay.classList.add('fade-in', 'glitch');

  // Acessibilidade
  passwordDisplay.setAttribute('aria-label', `Senha gerada: ${currentPassword}`);
}

// Função auxiliar para random seguro
function secureRandom(max) {
  const uint32 = new Uint32Array(1);
  window.crypto.getRandomValues(uint32);
  return uint32[0] % max;
}

// Função auxiliar para embaralhar array
function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = secureRandom(i + 1);
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
}

async function copyToClipboard() {
  if (!currentPassword) return;

  try {
    await navigator.clipboard.writeText(currentPassword);
    const originalText = copyBtn.textContent;
    copyBtn.textContent = translations[currentLang].copied;
    copyBtn.classList.add('copied');
    setTimeout(() => {
      copyBtn.textContent = originalText;
      copyBtn.classList.remove('copied');
    }, 2000);
  } catch (err) {
    console.error('Falha ao copiar: ', err);
  }
}

function changeLanguage(lang) {
  if (!translations[lang]) return;
  currentLang = lang;
  localStorage.setItem('preferredLang', lang);

  // Atualizar todos os elementos com classe .lang
  document.querySelectorAll('.lang').forEach(el => {
    const key = el.dataset.key;
    if (key && translations[lang][key]) {
      el.textContent = translations[lang][key];
    }
  });

  // Atualizar valor do comprimento dinamicamente
  updateLengthDisplay();

  // Regenerar senha para atualizar display se necessário
  generatePassword();
}

function updateLengthDisplay() {
  lengthValue.textContent = settings.length;
  // Atualizar a parte "caracteres" se for um span separado
  const charactersSpan = document.querySelector('[data-key="characters"]');
  if (charactersSpan) {
    charactersSpan.textContent = translations[currentLang].characters;
  }
}

// Gerenciamento de configurações
function updateSettings() {
  lengthSlider.value = settings.length;
  uppercaseCheckbox.checked = settings.uppercase;
  lowercaseCheckbox.checked = settings.lowercase;
  numbersCheckbox.checked = settings.numbers;
  symbolsCheckbox.checked = settings.symbols;
  updateLengthDisplay();
  generatePassword();
}

function saveSettings() {
  localStorage.setItem('passwordSettings', JSON.stringify(settings));
}

function loadSettings() {
  const savedSettings = localStorage.getItem('passwordSettings');
  if (savedSettings) {
    Object.assign(settings, JSON.parse(savedSettings));
  }

  const savedLang = localStorage.getItem('preferredLang') || getBrowserLanguage();
  changeLanguage(savedLang);
}

function getBrowserLanguage() {
  const browserLang = navigator.language.slice(0, 2);
  return translations[browserLang] ? browserLang : 'en';
}

// Inicialização
function initApp() {
  loadSettings();
  updateSettings();
  setupEventListeners();
  generatePassword();
}

// Event Listeners
function setupEventListeners() {
  generateBtn.addEventListener('click', () => {
    generatePassword();
    generateBtn.classList.add('pulse');
    setTimeout(() => generateBtn.classList.remove('pulse'), 500);
  });

  copyBtn.addEventListener('click', copyToClipboard);

  lengthSlider.addEventListener('input', (e) => {
    settings.length = parseInt(e.target.value, 10);
    updateLengthDisplay();
  });

  lengthSlider.addEventListener('change', () => {
    saveSettings();
    generatePassword();
  });

  [uppercaseCheckbox, lowercaseCheckbox, numbersCheckbox, symbolsCheckbox].forEach(checkbox => {
    checkbox.addEventListener('change', (e) => {
      const type = e.target.id;
      settings[type] = e.target.checked;
      saveSettings();
      generatePassword();
    });
  });

  languageButtons.forEach(btn => {
    btn.addEventListener('click', (e) => {
      const lang = e.currentTarget.dataset.lang;
      changeLanguage(lang);
    });
  });

  // Acessibilidade: Focus states
  document.querySelectorAll('button, input').forEach(el => {
    el.addEventListener('focus', () => el.classList.add('focus-neon'));
    el.addEventListener('blur', () => el.classList.remove('focus-neon'));
  });
}

// Executar ao carregar
document.addEventListener('DOMContentLoaded', initApp);