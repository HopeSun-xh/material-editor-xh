
import { IPublicTypeComponentMetadata, IPublicTypeSnippet } from '@alilc/lowcode-types';

const MySelectMeta: IPublicTypeComponentMetadata = {
  "componentName": "MySelect",
  "title": "MySelect",
  "docUrl": "",
  "screenshot": "",
  "devMode": "proCode",
  "npm": {
    "package": "material-editor-qlxp",
    "version": "0.1.0",
    "exportName": "MySelect",
    "main": "src/index.tsx",
    "destructuring": true,
    "subName": ""
  },
  "configure": {
    "props": [
      {
        "title": {
          "label": {
            "type": "i18n",
            "en-US": "color",
            "zh-CN": "color"
          }
        },
        "name": "color",
        "setter": {
          "componentName": "StringSetter",
          "isRequired": false,
          "initialValue": ""
        }
      }
    ],
    "supports": {
      "style": true
    },
    "component": {}
  }
};
const snippets: IPublicTypeSnippet[] = [
  {
    "title": "MySelect",
    "screenshot": "",
    "schema": {
      "componentName": "MySelect",
      "props": {}
    }
  }
];

export default {
  ...MySelectMeta,
  snippets
};
