const scrollToElement = (sectionId, behavior) => {
  const sectionElement = document.getElementById(sectionId);

  if (sectionElement) {
    sectionElement.scrollIntoView({ behavior });
  }
};

export { scrollToElement };
