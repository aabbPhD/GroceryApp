export default function getImageURL(name: string): string {
  //GitHub Pages
  if (import.meta.env.PROD) {
    return `${import.meta.env.BASE_URL}/assets/img/products/${name}`;
  }
  
  //Для разработки
  return new URL(`../assets/img/products/${name}`, import.meta.url).href;
}