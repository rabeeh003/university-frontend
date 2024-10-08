export function getCookie(name: string): string | null {
  if (typeof document !== 'undefined') {
      const match = document.cookie.match(new RegExp('(^| )' + name + '=([^;]+)'));
      if (match) {
          return match[2];
      }
  }
  return null;
}
