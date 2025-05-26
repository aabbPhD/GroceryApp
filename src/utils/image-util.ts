export default function getImageURL(name: string) {
    return new URL('../assets/img/products/' + name, import.meta.url).href;
}