import sharp from 'sharp';
import { AssetKind, Format, Platform } from './definitions';
import { OutputAsset } from './output-asset';
import { Project } from './project';
import { AssetGenerator } from './asset-generator';
/**
 * An instance of an asset that we will use to generate
 * a number of output assets.
 */
export declare class InputAsset {
  path: string;
  kind: AssetKind;
  platform: Platform;
  private filename;
  width?: number;
  height?: number;
  private _sharp;
  constructor(path: string, kind: AssetKind, platform: Platform);
  pipeline(): sharp.Sharp | undefined;
  format(): Format.Png | Format.Jpeg | Format.Svg | Format.Unknown;
  load(): Promise<void>;
  generate(strategy: AssetGenerator, project: Project): Promise<OutputAsset[]>;
}
