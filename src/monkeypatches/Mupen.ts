import { MonkeyPatch, IMonkeyPatch } from './IMonkeyPatch';
import {IMupen} from '../modloader/consoles/mupen/IMupen';
import bitwise from 'bitwise';
import { UInt8 } from 'bitwise/types';

export class MonkeyPatch_rdramWriteBit8 extends MonkeyPatch
    implements IMonkeyPatch {
  mupen: IMupen;

  constructor(mupen: IMupen) {
      super();
      this.mupen = mupen;
  }

  patch(): void {
      this.replacement = (addr: number, bitoffset: number, bit: boolean) => {
          let data = this.mupen.M64p.Memory.rdramRead8(addr);
          let bits = bitwise.byte.read(data as UInt8);
          bits[bitoffset] = bit ? 1 : 0;
          data = bitwise.byte.write(bits);
          this.mupen.M64p.Memory.rdramWrite8(addr, data);
      };
      this.original = this.mupen.M64p.Memory.rdramWriteBit8;
      (this.mupen.M64p.Memory as any)['rdramWriteBit8'] = this.replacement;
  }

  unpatch(): void {
      (this.mupen.M64p.Memory as any)['rdramWriteBit8'] = this.original;
  }
}

export class MonkeyPatch_rdramReadBit8 extends MonkeyPatch
    implements IMonkeyPatch {
  mupen: IMupen;

  constructor(mupen: IMupen) {
      super();
      this.mupen = mupen;
  }

  patch(): void {
      this.replacement = (addr: number, bitoffset: number): boolean => {
          let data = this.mupen.M64p.Memory.rdramRead8(addr);
          let bits = bitwise.byte.read(data as UInt8);
          return bits[bitoffset] === 1;
      };
      this.original = this.mupen.M64p.Memory.rdramReadBit8;
      (this.mupen.M64p.Memory as any)['rdramReadBit8'] = this.replacement;
  }

  unpatch(): void {
      (this.mupen.M64p.Memory as any)['rdramReadBit8'] = this.original;
  }
}

export class MonkeyPatch_rdramWriteBits8 extends MonkeyPatch
    implements IMonkeyPatch {
  mupen: IMupen;

  constructor(mupen: IMupen) {
      super();
      this.mupen = mupen;
  }

  patch(): void {
      this.replacement = (addr: number, buf: Buffer) => {
          let arr: number[] = [];
          for (let i = 0; i < buf.byteLength; i++) {
              arr.push(buf[i]);
          }
          let b = bitwise.byte.write(arr as any);
          this.mupen.M64p.Memory.rdramWrite8(addr, b);
      };
      this.original = this.mupen.M64p.Memory.rdramWriteBit8;
      (this.mupen.M64p.Memory as any)['rdramWriteBits8'] = this.replacement;
  }

  unpatch(): void {
      (this.mupen.M64p.Memory as any)['rdramWriteBits8'] = this.original;
  }
}

export class MonkeyPatch_rdramReadBits8 extends MonkeyPatch
    implements IMonkeyPatch {
  mupen: IMupen;

  constructor(mupen: IMupen) {
      super();
      this.mupen = mupen;
  }

  patch(): void {
      this.replacement = (addr: number) => {
          let b = bitwise.byte.read(this.mupen.M64p.Memory.rdramRead8(addr) as any);
          let buf: Buffer = Buffer.alloc(0x8);
          for (let i = 0; i < b.length; i++) {
              buf.writeUInt8(b[i], i);
          }
          return buf;
      };
      this.original = this.mupen.M64p.Memory.rdramReadBits8;
      (this.mupen.M64p.Memory as any)['rdramReadBits8'] = this.replacement;
  }

  unpatch(): void {
      (this.mupen.M64p.Memory as any)['rdramReadBits8'] = this.original;
  }
}
