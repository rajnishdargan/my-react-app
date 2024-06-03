// src/components/QuestionSetEditor.js
import React, { useEffect, useRef } from 'react';
import { questionSetEditorConfig } from '../data';

const QuestionSetEditor = () => {
  const editorRef = useRef(null);

  useEffect(() => {
    const editorConfig = questionSetEditorConfig;
    const questionsetEditorElement = document.createElement('lib-questionset-editor');
    questionsetEditorElement.setAttribute('editor-config', JSON.stringify(editorConfig));

    questionsetEditorElement.addEventListener('editorEmitter', (event) => {
      console.log('On editorEvent', event);
    });

    if (editorRef.current) {
      editorRef.current.appendChild(questionsetEditorElement);
    }
  }, []);

  return <div ref={editorRef}></div>;
};

export default QuestionSetEditor;
