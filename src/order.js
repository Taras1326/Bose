(() => {
    const refs = {
      openModalBtn: document.querySelector("[data-modal-nc-open]"),
      closeModalBtn: document.querySelector("[data-modal-nc-close]"),
      modal: document.querySelector("[data-nc-modal]"),
    };
  
    refs.openModalBtn.addEventListener("click", toggleModal);
    refs.closeModalBtn.addEventListener("click", toggleModal);
  
    function toggleModal() {
      refs.modal.classList.toggle("is-hidden");
      document.body.classList.toggle("no-scroll");
    }
  })();