import { Injectable } from '@nestjs/common';

@Injectable()
export class CalculateService {
  // Adds two numbers and returns the results
  sum(a: number, b: number): number {
    return a + b;
  }
}
