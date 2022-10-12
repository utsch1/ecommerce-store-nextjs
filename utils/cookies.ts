import Cookies from 'js-cookie';

export type PlantCookieItem =
  | {
      id: number;
      cart: number;
    }
  | undefined;

export function getParsedCookie(key: string): PlantCookieItem[] | undefined {
  const cookieValue = Cookies.get(key);

  if (!cookieValue) {
    return undefined;
  }

  try {
    return JSON.parse(cookieValue);
  } catch (err) {
    return undefined;
  }
}

export function setStringifiedCookie(key: string, value: PlantCookieItem[]) {
  Cookies.set(key, JSON.stringify(value));
}
