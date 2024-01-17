import { Grid } from "@mui/material";
import useOnClickListener from "../Toolbar/useOnClickListener";
import { $getSelection } from 'lexical';
import { useLexicalComposerContext } from "@lexical/react/LexicalComposerContext";
import { useCallback } from "react";
import UndoIcon from "../../../assets/toolbar/UndoIcon";
import RedoIcon from "../../../assets/toolbar/RedoIcon";

import "./style.scss";
import BoldIcon from "../../../assets/toolbar/BoldIcon";
import ItalicsIcon from "../../../assets/toolbar/ItalicsIcon";
import UnderlineIcon from "../../../assets/toolbar/UnderlineIcon";
import StrikethroughIcon from "../../../assets/toolbar/StrikethroughIcon";

const NewToolbar = () => {
  const [editor] = useLexicalComposerContext();
  // const [activeEditor, setActiveEditor] = useState(editor);

  const toolbarIcons = [
    {
      arialText: "undo",
      label: "Undo",
      altText: "Undo Button",
      icon: UndoIcon,
      width: 18,
      height: 16,
      color: '#6f6f6f'
    },
    {
      arialText: "redo",
      label: "Redo",
      altText: "Redo Button",
      icon: RedoIcon,
      width: 18,
      height: 16,
      color: '#6f6f6f'
    },
    {
      arialText: "bold",
      label: "Bold",
      altText: "Bold Button",
      icon: BoldIcon,
      width: 13,
      height: 16,
      color: '#6f6f6f'
    },
    {
      arialText: "italic",
      label: "Italic",
      altText: "Italic Button",
      icon: ItalicsIcon,
      width: 16,
      height: 16,
      color: '#6f6f6f'
    },
    {
      arialText: "underline",
      label: "Underline",
      altText: "Underline Button",
      icon: UnderlineIcon,
      width: 17,
      height: 16,
      color: '#6f6f6f'
    },
    {
      arialText: "strikethrough",
      label: "Strikethrough",
      altText: "Strikethrough Button",
      icon: StrikethroughIcon,
      width: 19,
      height: 16,
      color: '#6f6f6f'
    }
  ];

  const { onClick } = useOnClickListener();

  const onIconClick = (e) => {
    alert(e.target.value);
  };

  useCallback(() => {
    const selection = $getSelection();
    console.log(selection.hasFormat('bold'));
  }, []);

  return (
    <Grid className="toolbar" container justifyContent="normal">
      {toolbarIcons.map((icon) => {
        return(<>
          {icon.label === "Bold" && <div className="separation" />}
          <div key={icon.label} id={icon.label} className="icon" onClick={onIconClick}>
            <icon.icon width={icon.width} height={icon.height} color={icon.color} />
          </div>
        </>)
      })}
    </Grid>
  );
};

export default NewToolbar;

