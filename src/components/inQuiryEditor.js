// import React, { useEffect, useRef } from "react";
// import { questionSetEditorConfig } from '../data';

// import "@project-sunbird/sunbird-questionset-editor-web-component/sunbird-questionset-editor"
// import "@project-sunbird/sunbird-questionset-editor-web-component/styles.css"
// const InQuiryEditor = () => {
//   const sunbirdQumlEditorRef = useRef(null);

//   useEffect(() => {
//     const editorElement = sunbirdQumlEditorRef.current;

//     const editorEventListener = async (event) => {
//         console.log("Editor Event", event?.detail);
//     };
//     editorElement.addEventListener("editorEmitter", editorEventListener);
//     return () => {
//       editorElement.removeEventListener("editorEmitter", editorEventListener);
//     };
//   }, []);

//   return (
//     <div>
//       <sunbird-quml-editor
//         editor-config={JSON.stringify(questionSetEditorConfig)}
//         ref={sunbirdQumlEditorRef}
//       ></sunbird-quml-editor>
//     </div>
//   );
// };

// export default InQuiryEditor;
