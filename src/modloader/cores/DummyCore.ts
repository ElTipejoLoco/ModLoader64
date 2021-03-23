import { ICore, IModLoaderAPI } from 'modloader64_api/IModLoaderAPI';
import { IRomHeader } from 'modloader64_api/IRomHeader';

export class DummyCore implements ICore {
  header!: string;
  ModLoader!: IModLoaderAPI;
  rom_header?: IRomHeader | undefined;
  heap_start: number = -1;
  heap_size: number = -1;

  preinit(): void { }

  init(): void { }

  postinit(): void { }

  onTick(frame?: number | undefined): void { }
}
