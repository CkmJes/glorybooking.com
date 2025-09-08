const faqItems = document.querySelectorAll(".faq-item");

  faqItems.forEach(item => {
    const question = item.querySelector(".faq-question");

    question.addEventListener("click", () => {
      // Close other items
      faqItems.forEach(el => {
        if (el !== item) el.classList.remove("active");
      });

      // Toggle current
      item.classList.toggle("active");
    });
  });
