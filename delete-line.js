range = editor.getSelectedLineRange();
editor.replaceTextInRange(range[0], range[1] + 1, "");
