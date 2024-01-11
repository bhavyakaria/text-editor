import { Grid } from "@mui/material";
import pluginsList from "../Toolbar/toolbarIconsList";
import useOnClickListener from "../Toolbar/useOnClickListener";
import { $getSelection } from 'lexical';
import { useLexicalComposerContext } from "@lexical/react/LexicalComposerContext";
import { useCallback, useState } from "react";
import UndoIcon from "../../../assets/toolbar/UndoIcon";
import RedoIcon from "../../../assets/toolbar/RedoIcon";

import "./style.scss";

const NewToolbar = () => {
  const [editor] = useLexicalComposerContext();
  // const [activeEditor, setActiveEditor] = useState(editor);

  const { onClick } = useOnClickListener();

  useCallback(() => {
    const selection = $getSelection();
    console.log(selection.hasFormat('bold'));
  }, []);

  return (
    <Grid className="toolbar" container justifyContent="normal">
      <div className="icon">
        <UndoIcon width={18} height={16} color={'none'} />
      </div>

      <div className="icon">
        <RedoIcon width={18} height={16} color={'none'} />
      </div>

      <div className="separation" />
      
      {/* {pluginsList.map((plugin) => (
        <Grid item key={plugin.id} className="icon-container">
          <plugin.Icon onClick={() => onClick(plugin.event)} className="icon"/>
        </Grid>
      ))} */}
    </Grid>
  );
};

export default NewToolbar;

