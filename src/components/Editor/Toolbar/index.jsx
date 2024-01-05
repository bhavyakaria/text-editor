import { Grid } from "@mui/material";
import pluginsList from "./toolbarIconsList";
import useOnClickListener from "./useOnClickListener";
import { $getSelection } from 'lexical';
import { useLexicalComposerContext } from "@lexical/react/LexicalComposerContext";
import { useCallback, useState } from "react";

import "./style.scss";

const Toolbar = () => {
  const [editor] = useLexicalComposerContext();
  // const [activeEditor, setActiveEditor] = useState(editor);

  const { onClick } = useOnClickListener();

  useCallback(() => {
    const selection = $getSelection();
    console.log(selection.hasFormat('bold'));
  }, []);

  return (
    <Grid className="toolbar" container justifyContent="normal" >
      {pluginsList.map((plugin) => (
        <Grid item key={plugin.id} className="icon-container">
          <plugin.Icon onClick={() => onClick(plugin.event)} className="icon"/>
        </Grid>
      ))}
    </Grid>
  );
};

export default Toolbar;

