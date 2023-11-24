import CheckList from '@editorjs/checklist';
import Delimiter from '@editorjs/delimiter';
import Embed from '@editorjs/embed';
import ImageTool from '@editorjs/image';
import InlineCode from '@editorjs/inline-code';
import Link from '@editorjs/link';
import List from '@editorjs/list';
import Quote from '@editorjs/quote';
import SimpleImage from '@editorjs/simple-image';
import Paragraph from '@editorjs/paragraph';
import Header from '@editorjs/header';
import { ref } from 'firebase/storage';
import { storage } from '@/app/firebase';
import { uploadBytes, getDownloadURL } from 'firebase/storage';
export const EDITOR_TOOLS = {
  header: {
    class: Header,
    config: {
      placeholder: 'timeline',
      levels: [2, 3, 4],
      defaultLevel: 2,
    },
  },
  image: {
    class: ImageTool,
    config: {
      uploader: {
        async uploadByFile(file) {
          console.log('haloo');
          const timeStamp = Date.now().toString();
          const imageRef = ref(storage, `images/${timeStamp}`);
          await uploadBytes(imageRef, file);
          const url = await getDownloadURL(imageRef);
          return {
            success: 1,
            file: {
              url: url,
              // any other image data you want to store, such as width, height, color, extension, etc
            },
          };
        },

        uploadByUrl(url) {
          return {
            success: 1,
            file: {
              url: url,
            },
          };
        },
      },
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
