import type { IconType } from 'react-icons';

export interface SkillItem {
  Icon: IconType;
  level: number;
  text: string;
}

export type SkillItemList = readonly [IconType, number, string];