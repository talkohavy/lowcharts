import { useEffect } from 'react';

export default function EffectFirst({ effect }) {
  useEffect(() => effect?.(), [effect]);
  return null;
}
