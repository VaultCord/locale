const languages = {};
languages.ar = require('./ar-SA/website.json');
languages.bg = require('./bg-BG/website.json');
languages["ku-IQ"] = require('./ckb-IR/website.json')
languages.cs = require('./cs-CZ/website.json');
languages.da = require('./da-DK/website.json');
languages.de = require('./de-DE/website.json');
languages.el = require('./el-GR/website.json');
languages.en = require("./en/website.json");
languages.es = require('./es-ES/website.json');
languages.fa = require('./fa-IR/website.json');
languages.fi = require('./fi-FI/website.json');
languages.fr = require('./fr-FR/website.json');
languages.hi = require('./hi-IN/website.json');
languages.he = require('./he-IL/website.json');
languages.hr = require('./hr-HR/website.json');
languages.hu = require('./hu-HU/website.json');
languages.it = require('./it-IT/website.json');
languages.ja = require('./ja-JP/website.json');
languages.ko = require('./ko-KR/website.json');
languages.lt = require('./lt-LT/website.json');
languages.nl = require('./nl-NL/website.json');
languages.no = require('./no-NO/website.json');
languages.pl = require('./pl-PL/website.json');
languages["pt-BR"] = require('./pt-BR/website.json');
languages.pt = require('./pt-PT/website.json');
languages.ro = require('./ro-RO/website.json');
languages.ru = require('./ru-RU/website.json');
languages.sk = require('./sk-SK/website.json');
languages.sr = require('./sr-CS/website.json');
languages.sv = require('./sv-SE/website.json');
languages.th = require('./th-TH/website.json');
languages.tr = require('./tr-TR/website.json');
languages.uk = require('./uk-UA/website.json');
languages.vi = require('./vi-VN/website.json');
languages.zh = require('./zh-CN/website.json');
languages["zh-TW"] = require('./zh-TW/website.json');
languages.tl = require('./fil-PH/website.json');

module.exports = languages;
module.exports.webLangs = {
  ar: { name: "العربية", flag: "sa" },
  bg: { name: "български", flag: "bg" },
  cs: { name: "Čeština", flag: "cz" },
  en: { name: "English", flag: "us" },
  tr: { name: "Türkçe", flag: "tr" },
  zh: { name: "中文", flag: "cn" },
  "zh-TW": { name: "繁體中文", flag: "tw" },
  ru: { name: "Русский", flag: "ru" },
  uk: { name: "Українська", flag: "ua" },
  fr: { name: "Français", flag: "fr" },
  de: { name: "Deutsch", flag: "de" },
  el: { name: "Ελληνικά", flag: "gr" },
  hi: { name: "हिन्दी", flag: "in" },
  pl: { name: "Polski", flag: "pl" },
  pt: { name: "Português", flag: "pt" },
  nl: { name: "Nederlands", flag: "nl" },
  it: { name: "Italiano", flag: "it" },
  es: { name: "Español", flag: "es" },
  ro: { name: "Română", flag: "ro" },
  sk: { name: "Slovák", flag: "sk" },
  ja: { name: "日本語", flag: "jp" },
  hu: { name: "Magyar", flag: "hu" },
  ko: { name: "한국어", flag: "kr" },
  lt: { name: "Lithuanian", flag: "lt" },
  no: { name: "Norsk", flag: "no" },
  pl: { name: "Polski", flag: "pl" },
  "pt-BR": { name: "Português do Brasil", flag: "br" },
  sr: { name: "Српски", flag: "sr" },
  sv: { name: "Svenska", flag: "sv" },
  th: { name: "Thai", flag: "th" },
  vi: { name: "Tiếng Việt", flag: "vn" },
  "ku-IQ": { name: "سۆرانی", flag: "kur" },
  da: { name: "Dansk", flag: "dk" },
  fa: { name: "فارسی", flag: "ir" },
  fi: { name: "Suo̯mi", flag: "fi" },
  hr: { name: "Hrvatski", flag: "hr" },
  he: { name: "עִברִית", flag: "il" },
  tl: {name: "Filipino", flag: "ph"}
};

module.exports.ex = require('./examples.json');
