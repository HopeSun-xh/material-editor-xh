
import { IPublicTypeComponentMetadata, IPublicTypeSnippet } from '@alilc/lowcode-types';

const PortalCardMeta: IPublicTypeComponentMetadata = {
  "componentName": "PortalCard",
  "title": "PortalCard",
  "docUrl": "",
  "screenshot": "",
  "devMode": "proCode",
  "category":'小花分组',
  "group":'小花写的组件',
  "npm": {
    "package": "material-editor-qlxp",
    "version": "0.1.1",
    "exportName": "PortalCard",
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
            "en-US": "title",
            "zh-CN": "标题"
          }
        },
        "name": "title",
        "setter": {
          "componentName": "StringSetter",
          "isRequired": false,
          "initialValue": ""
        }
      },
      {
        "title": {
          "label": {
            "type": "i18n",
            "en-US": "description",
            "zh-CN": "描述"
          }
        },
        "name": "description",
        "setter": {
          "componentName": "StringSetter",
          "isRequired": false,
          "initialValue": ""
        }
      },
      {
        "title": {
          "label": {
            "type": "i18n",
            "en-US": "backgroundImage",
            "zh-CN": "背景图"
          }
        },
        "name": "backgroundImage",
        "setter": {
          "componentName": "StringSetter",
          "isRequired": false,
          "initialValue": ""
        }
      },
      {
        "title": {
          "label": {
            "type": "i18n",
            "en-US": "link",
            "zh-CN": "跳转链接"
          }
        },
        "name": "href",
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
    "title": "PortalCard",
    "screenshot": "https://tianshu.alicdn.com/9652b6f7-8bc9-4527-9854-06c59f2b0bc8.png",
    "schema": {
      "componentName": "PortalCard",
      "props": {
        title:'title',
        description:'description',
        backgroundImage: 'https://tianshu.alicdn.com/ee09d9f7-9628-44fb-8927-b318d9a61cf5.png'
      }
    }
  }
];

export default {
  ...PortalCardMeta,
  snippets
};
