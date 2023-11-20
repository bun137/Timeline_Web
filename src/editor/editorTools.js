import CheckList from "@editorjs/checklist";
import Delimiter from "@editorjs/delimiter";
import Embed from "@editorjs/embed";
import InlineCode from "@editorjs/inline-code";
import Link from "@editorjs/link";
import List from "@editorjs/list";
import Quote from "@editorjs/quote";
import Paragraph from "@editorjs/paragraph";
import Header from "@editorjs/header";
// import { ref } from "firebase/storage";
// import { storage } from "../firebase/firebase";
// import { uploadBytes, getDownloadURL } from "firebase/storage";

export const EDITOR_TOOLS = {
  header: {
    class: Header,
    config: {
      placeholder: "get(Cookbook)",
      levels: [2, 3, 4],
      defaultLevel: 2,
    },
  },
  paragraph: Paragraph,
  checklist: CheckList,
  embed: Embed,
  inlineCode: InlineCode,
  link: Link,
  list: List,
  quote: Quote,
  delimiter: Delimiter,
};
