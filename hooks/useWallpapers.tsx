export interface Wallpaper {
    url: string;
    name: string;
}

export function useWallpapers(): Wallpaper[] {
    return [{
        url: "https://w.wallhaven.cc/full/d6/wallhaven-d6rde3.jpg",
        name: "Wallhaven 1",
    }, {
        url: "https://w.wallhaven.cc/full/3l/wallhaven-3lpw5y.png",
        name: "Wallhaven 2",
    }, {
        url: "https://w.wallhaven.cc/full/7p/wallhaven-7pzpjy.png",
        name: "Wallhaven 3",
    }, {
        url: "https://w.wallhaven.cc/full/m3/wallhaven-m373o9.jpg",
        name: "Wallhaven 4",
    }, {
        url: "https://w.wallhaven.cc/full/gp/wallhaven-gpyw67.png",
        name: "Wallhaven 5",
    }]
}