declare module "libheif-js" {
  interface HeifImageDisplayData {
    data: Uint8ClampedArray;
    width: number;
    height: number;
  }

  interface HeifImage {
    get_width(): number;
    get_height(): number;
    display(target: HeifImageDisplayData, callback: (result: HeifImageDisplayData | null) => void): void;
  }

  export class HeifDecoder {
    decode(buffer: Uint8Array | Buffer): HeifImage[];
  }
}
