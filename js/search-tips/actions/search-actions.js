export const onInputChange = value => {
  return {
    type: "INPUT_CHANGE",
    payload: value
  };
};

export const onTipClick = tipsText => {
  return {
    type: "TIPS_CLICK",
    payload: tipsText
  };
};

export const onFocus = () => {
  return {
    type: "SHOW_TIPS",
    payload: true
  };
};

export const onBlur = () => {
  return {
    type: "HIDE_TIPS",
    payload: false
  };
};
