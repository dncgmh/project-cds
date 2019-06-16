import * as sharp from 'sharp';

async function resize(
  path: string,
  format: string = 'png',
  width: number = 200,
  height: number = null
) {
  await sharp(path)
    .resize(width, height || null)
    .toFormat(format)
    .toFile(`${path}_resized.${format}`);
}

export default resize;
