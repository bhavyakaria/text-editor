import { eventTypes } from "./toolbarIconsList";
import { useCallback, useState } from "react";
import { useLexicalComposerContext } from "@lexical/react/LexicalComposerContext";
import {
  FORMAT_TEXT_COMMAND,
  $isRangeSelection
} from "lexical";
import { $getNearestNodeOfType } from "@lexical/utils";
import {
  $isListNode,
  ListNode,
} from "@lexical/list";
import {
  $isHeadingNode
} from "@lexical/rich-text";
import { $isLinkNode } from "@lexical/link";
import {
  $isParentElementRTL,
  $wrapNodes,
  $isAtNodeEnd,
} from "@lexical/selection";

const LowPriority = 1;

const useOnClickListener = () => {
  const [editor] = useLexicalComposerContext();
  const [blockType, setBlockType] = useState("paragraph");
  const [selectedElementKey, setSelectedElementKey] = useState(null);
  const [isRTL, setIsRTL] = useState(false);
  const [isLink, setIsLink] = useState(false);

  const [selectedEventTypes, setSelectedEventTypes] = useState([]);

  const updateToolbar = useCallback(() => {
    const selection = $getSelection();
    let allSelectedEvents = [...selectedEventTypes];

    // inner function

    const pushInEventTypesState = (selectionFormat, event) => {
      if (selectionFormat) {
        if (selectedEventTypes.includes(event)) return;
        else allSelectedEvents.push(event);
      } else {
        allSelectedEvents = allSelectedEvents.filter((ev) => ev !== event);
      }
    };

    // range selection ( e.g like to bold only the particular area of the text)
    if ($isRangeSelection(selection)) {
      const anchorNode = selection.anchor.getNode();
      const element =
        anchorNode.getKey() === "root"
          ? anchorNode
          : anchorNode.getTopLevelElementOrThrow();
      const elementKey = element.getKey();
      const elementDOM = editor.getElementByKey(elementKey);
      if (elementDOM !== null) {
        setSelectedElementKey(elementKey);
        if ($isListNode(element)) {
          const parentList = $getNearestNodeOfType(anchorNode, ListNode);
          const type = parentList ? parentList.getTag() : element.getTag();
          setBlockType(type);
        } else {
          const type = $isHeadingNode(element)
            ? element.getTag()
            : element.getType();

          setBlockType(type);
        }
      }

      pushInEventTypesState(selection.hasFormat("bold"), eventTypes.formatBold);
      pushInEventTypesState(
        selection.hasFormat("italic"),
        eventTypes.formatItalic
      );
      pushInEventTypesState(
        selection.hasFormat("underline"),
        eventTypes.formatUnderline
      );
      pushInEventTypesState(
        selection.hasFormat("strikethrough"),
        eventTypes.formatStrike
      );
      pushInEventTypesState(selection.hasFormat("code"), eventTypes.formatCode);

      setIsRTL($isParentElementRTL(selection));

      // Update links
      const node = getSelectedNode(selection);
      const parent = node.getParent();
      if ($isLinkNode(parent) || $isLinkNode(node)) {
        if (!allSelectedEvents.includes(eventTypes.formatInsertLink))
          allSelectedEvents.push(eventTypes.formatInsertLink);
        setIsLink(true);
      } else {
        if (allSelectedEvents.includes(eventTypes.formatInsertLink)) {
          allSelectedEvents = allSelectedEvents.filter(
            (ev) => ev !== eventTypes.formatCode
          );
        }
        setIsLink(false);
      }

      setSelectedEventTypes(allSelectedEvents);
    }
  }, [editor]);

  const onClick = (event) => {
    if (event === eventTypes.formatBold) {
      editor.dispatchCommand(FORMAT_TEXT_COMMAND, "bold");
    } else if (event === eventTypes.formatItalic) {
      editor.dispatchCommand(FORMAT_TEXT_COMMAND, "italic");
    } else if (event === eventTypes.formatUnderline) {
      editor.dispatchCommand(FORMAT_TEXT_COMMAND, "underline");
    } else if (event === eventTypes.formatAlignLeft) {
      editor.dispatchCommand(FORMAT_TEXT_COMMAND, "left");
    } else if (event === eventTypes.formatAlignRight) {
      editor.dispatchCommand(FORMAT_TEXT_COMMAND, "right");
    } else if (event === eventTypes.formatAlignCenter) {
      editor.dispatchCommand(FORMAT_TEXT_COMMAND, "center");
    } else if (event === eventTypes.formatAlignLeft) {
      editor.dispatchCommand(FORMAT_TEXT_COMMAND, "left");
    }
  };

  return { onClick };
};

export default useOnClickListener;