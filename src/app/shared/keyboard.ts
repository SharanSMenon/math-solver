// Borrowed from sympy beta
// https://github.com/eagleoflqj/sympy_beta/blob/master/src/components/BetaMathLive.vue

import { VirtualKeyboardKeycap, VirtualKeyboardLayer } from "mathlive"

const ph = '{#0}'
const small = { class: 'small' }
const parenthesisKey = {
  latex: '\\left(#0\\right)',
  variants: ['(', ')', ',', ph],
  ...small
}
const shiftKey: Partial<VirtualKeyboardKeycap> = {
  class: 'action font-glyph modifier',
  label: "<svg><use xlink:href='#svg-shift' /></svg>",
  command: ['performWithFeedback']
}
const leftKey: Partial<VirtualKeyboardKeycap> = {
  class: 'action',
  label: "<svg><use xlink:href='#svg-arrow-left' /></svg>",
  command: ['performWithFeedback', 'moveToPreviousChar']
}
const rightKey: Partial<VirtualKeyboardKeycap> = {
  class: 'action',
  label: "<svg><use xlink:href='#svg-arrow-right' /></svg>",
  command: ['performWithFeedback', 'moveToNextChar']
}
const backspaceKey: Partial<VirtualKeyboardKeycap> = {
  class: 'action font-glyph',
  label: '&#x232b;',
  command: ['performWithFeedback', 'deleteBackward']
}
function capitalize (s: string): string {
  return s[0].toUpperCase() + s.slice(1)
}
function addSpecialKeys (rows: any, upper: any, name: any) {
  const shiftKeyCopy = { ...shiftKey, layer: upper ? `math-lower-${name}` : `math-upper-${name}` }
  rows[2].splice(0, 0, shiftKeyCopy)
  rows[2].push(leftKey, rightKey)
  rows[name === 'english' ? 1 : 2].push(backspaceKey)
  return { rows }
}
function mathEnglish (upper: any) {
  const letterLayout = [
    ['q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p'],
    ['a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l'],
    ['z', 'x', 'c', 'v', 'b', 'n', 'm']
  ]
  const rows = letterLayout.map(letters => letters.map(letter => ({
    latex: upper ? letter.toUpperCase() : letter,
    variants: [upper ? letter : letter.toUpperCase()]
  })))
  return addSpecialKeys(rows, upper, 'english')
}
function mathGreek (upper: any) {
  const letterLayout = [
    ['alpha', 'beta', 'gamma', 'delta', 'epsilon', 'zeta', 'eta', 'theta', 'iota', 'kappa'],
    ['lambda', 'mu', 'nu', 'xi', 'omicron', 'pi', 'rho', 'sigma', 'tau'],
    ['upsilon', 'phi', 'chi', 'psi', 'omega']
  ]
  const rows = letterLayout.map(letters => letters.map(letter => ({
    latex: '\\' + (upper ? capitalize(letter) : letter),
    variants: ['\\' + (upper ? letter : capitalize(letter))]
  })))
  return addSpecialKeys(rows, upper, 'greek')
}
function key (latex: string) {
  return { latex }
}
function trigKey (name: any) {
  const trig = '\\' + name
  const variants = [{ latex: trig + '^' + ph, insert: trig + '^' + ph + ph, ...small }]
  if (name === 'sin' || name === 'cos' || name === 'tan') {
    const arc = '\\arc' + name
    variants.push({ latex: arc, insert: arc + ph, ...small })
  }
  const result = {
    latex: trig,
    insert: trig + ph,
    class: 'none',
    variants
  }
  if (name.length > 3) {
    result.class = 'small'
  }
  return result
}
const mulKey = { latex: '*', variants: ['\\cdot', '\\times'] }
const divKey = { latex: '/', variants: ['\\div'] }
const fracKey = { latex: '\\frac' + ph + ph, ...small }
const powKey = { label: '^', insert: '#@^' + ph } // can't use ^{#0} for continuous press
const equalKey = { latex: '=', variants: ['>', '\\geq', '<', '\\leq', '\\neq'] }
const sqrtKey = {
  latex: '\\sqrt' + ph,
  variants: [
    { latex: '\\sqrt[3]' + ph, ...small }, { latex: '\\sqrt[#0]' + ph, ...small }
  ],
  ...small
}
const limKey = { latex: '\\lim', insert: '\\lim_' + ph + ph }
const dirKey = { latex: 'x_0^+', insert: '^+', variants: [{ latex: 'x_0^-', insert: '^-' }] }
const expKey = { latex: '\\exp', insert: '\\exp' + ph }
const lnKey = {
  latex: '\\ln',
  insert: '\\ln' + ph,
  variants: [
    { latex: '\\ln^' + ph, insert: '\\ln^' + ph + ph, ...small },
    { latex: '\\log_' + ph, insert: '\\log_' + ph + ph, ...small },
    { latex: '\\log^' + ph + '_' + ph, insert: '\\log^' + ph + '_' + ph + ph, ...small }
  ]
}
const derivKey = {
  latex: '\\mathrm{d}',
  insert: 'd',
  variants: [
    { latex: '\\frac{\\mathrm{d}' + ph + '}{\\mathrm{d' + ph + '}', insert: '\\frac{d#0}{d#0}', ...small },
    { latex: '\\frac{\\partial' + ph + '}{\\partial' + ph + '}', ...small }]
}
const intKey = {
  latex: '\\int',
  variants: [{ latex: '\\int_0^\\infty', ...small },
    { latex: '\\int_{-\\infty}^\\infty', ...small },
    { latex: '\\int_' + ph + '^' + ph, ...small }],
  ...small
}
const gammaKey = { latex: '\\Gamma', insert: '\\Gamma\\left(#0\\right)' }
const betaKey = { latex: '\\Beta', insert: '\\Beta\\left(#0, #0\\right)' }
const xKey = { latex: 'x', variants: ['y', 'z', 'f'] }
export const mathKeyboardLayer: Record<string, string | Partial<VirtualKeyboardLayer>> = {
  'math-basic': {
    rows: [
      [key('7'), key('8'), key('9'), key('+'), key('-'), mulKey, key('e'), equalKey, parenthesisKey],
      [key('4'), key('5'), key('6'), divKey, fracKey, powKey, key('i'), key('!'), backspaceKey],
      [key('1'), key('2'), key('3'), key('0'), key('.'), sqrtKey, key('\\pi'), leftKey, rightKey]
    ]
  },
  'math-math': {
    rows: [
      [trigKey('sin'), trigKey('cos'), trigKey('tan'), limKey, key('\\to'), dirKey, key('\\infty'), parenthesisKey],
      [trigKey('csc'), trigKey('sec'), trigKey('cot'), expKey, lnKey, derivKey, intKey, backspaceKey],
      [trigKey('sinh'), trigKey('cosh'), trigKey('tanh'), gammaKey, betaKey, xKey, leftKey, rightKey]
    ]
  },
  'math-lower-english': mathEnglish(false),
  'math-upper-english': mathEnglish(true),
  'math-lower-greek': mathGreek(false),
  'math-upper-greek': mathGreek(true)
}
export const mathKeyboard = {
  'math-basic': {
    label: '123',
    classes: 'tex-math',
    layer: 'math-basic'
  },
  'math-math': {
    label: 'f(x)',
    classes: 'tex-math',
    layer: 'math-math'
  },
  'math-english': {
    label: 'abc',
    classes: 'tex-math',
    layer: 'math-lower-english',
    layers: ['math-lower-english', 'math-upper-english']
  },
  'math-greek': {
    label: '&alpha;&beta;&gamma;',
    classes: 'tex-math',
    layer: 'math-lower-greek',
    layers: ['math-lower-greek', 'math-upper-greek']
  }
}