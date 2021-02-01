import { LabelGuard } from './label.guard';
import { LanguageGuard } from './language.guard';

export const guards: any[] = [LanguageGuard, LabelGuard];

export * from './language.guard';
export * from './label.guard';
