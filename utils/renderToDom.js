const renderToDom = (divID, htmlToRender) => {
  const selectedDiv = document.querySelector('#app');
  selectedDiv.innerHTML = htmlToRender;
};

export default {
  renderToDom
};
