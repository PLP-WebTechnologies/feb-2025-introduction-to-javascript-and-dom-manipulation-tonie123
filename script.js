function changeText() {
    const text = document.getElementById("info-text");
    text.textContent = "The text has been updated! 🎉";
  }
  
  function changeStyle() {
    const para = document.getElementById("style-paragraph");
    para.style.color = "white";
    para.style.backgroundColor = "#007BFF";
    para.style.padding = "10px";
    para.style.borderRadius = "8px";
  }
  
  function addElement() {
    const container = document.getElementById("element-container");
    if (!document.getElementById("new-element")) {
      const newEl = document.createElement("p");
      newEl.id = "new-element";
      newEl.textContent = "I was dynamically added!";
      container.appendChild(newEl);
    }
  }
  
  function removeElement() {
    const el = document.getElementById("new-element");
    if (el) {
      el.remove();
    }
  }
  