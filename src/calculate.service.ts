import { Injectable } from '@nestjs/common';

@Injectable()
export class CalculateService {
  sum(a: number, b: number): number {
    return a + b;
  }
}
