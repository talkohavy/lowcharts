import React from 'react';
import BaseWidget from '../BaseWidget';

export default function TextWidget({ widgetProps }) {
  const { textContent, fontSize, fontWeight, textAlign, justifyContent, alignItems } = widgetProps;

  return (
    <BaseWidget className='bg-white hover:bg-slate-100 cursor-move dark:bg-[#383838]'>
      <div
        className='do-not-drag-me flex bg-white h-full cursor-default dark:bg-inherit'
        style={{ fontSize, fontWeight, textAlign, lineHeight: 'initial', justifyContent, alignItems }}
      >
        {textContent}
      </div>
    </BaseWidget>
  );
}
