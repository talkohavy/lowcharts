import React from 'react';
import BaseWidget from '../BaseWidget';

export default function TextWidget({ widgetProps }) {
  const { textContent, fontSize, fontWeight, textAlign, justifyContent, alignItems } = widgetProps;

  return (
    <BaseWidget className='bg-white hover:bg-slate-100 cursor-move'>
      <div
        className='do-not-drag-me flex bg-white h-full cursor-default'
        style={{ fontSize, fontWeight, textAlign, lineHeight: 'initial', justifyContent, alignItems }}
      >
        {textContent}
      </div>
    </BaseWidget>
  );
}
