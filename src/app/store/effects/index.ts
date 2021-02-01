import { MessageEffects } from './message.effect';
import { LanguageEffects } from './language.effect';
import { LabelEffects } from './label.effect';

export const effects: any[] = [LanguageEffects, LabelEffects, MessageEffects];

export * from './language.effect';
export * from './label.effect';
export * from './message.effect';
