/**
 * Butcher algorithm: https://es.wikipedia.org/wiki/Computus#C.C3.A1lculo
 * The holidays corresponding to Pascua are calculating using the following offsets:
 *   Pascua - 7  =  "Domingo de Ramos"
 *   Pascua - 3  =  "Jueves Santo"
 *   Pascua - 2  =  "Viernes Santo"
 *   Pascua      =  "Domingo de Pascua"
 *   Pascua + 43 =  "Ascensión de Jesús"
 *   Pascua + 64 =  "Corpus Christi"
 *   Pascua + 71 =  "Sagrado Corazón de Jesús"
 */
export default (year: number): Date => {
  const A = year % 19;
  const B = Math.floor(year / 100);
  const C = year % 100;
  const D = Math.floor(B / 4);
  const E = B % 4;
  const F = Math.floor((B + 8) / 25);
  const G = Math.floor((B - F + 1) / 3);
  const H = (19 * A + B - D - G + 15) % 30;
  const I = Math.floor(C / 4);
  const K = C % 4;
  const L = (32 + 2 * E + 2 * I - H - K) % 7;
  const M = Math.floor((A + 11 * H + 22 * L) / 451);
  const N = H + L - 7 * M + 114;
  const month = Math.floor(N / 31);
  const day = 1 + (N % 31);
  return new Date(year, month - 1, day);
};
