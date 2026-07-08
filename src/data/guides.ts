import { Guide } from '@/lib/types';

export const guides: Guide[] = [];

export function getGuideBySlug(slug: string): Guide | undefined {
  return guides.find((g) => g.slug === slug);
}
