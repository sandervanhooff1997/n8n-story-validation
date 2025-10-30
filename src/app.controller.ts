import { Controller, Get, Query } from '@nestjs/common';
import { CalculateService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: CalculateService) {}

  @Get()
  getSum(@Query('a') a: string, @Query('b') b: string): string {
    const numA = parseFloat(a);
    const numB = parseFloat(b);

    // Validate inputs
    if (isNaN(numA) || isNaN(numB)) {
      return 'Invalid numbers provided.';
    }
    return this.appService.sum(numA, numB).toString();
  }
}
